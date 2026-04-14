exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { text, voiceId, speed } = JSON.parse(event.body);
    const ELEVEN_KEY = process.env.ELEVEN_API_KEY;
    const VOICE = voiceId || process.env.ELEVEN_VOICE_ID || 'S9OExsnatEsUeafEWzPS';

    if (!ELEVEN_KEY) {
      return { statusCode: 500, body: JSON.stringify({ error: 'ElevenLabs key not configured' }) };
    }

    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE}`, {
      method: 'POST',
      headers: {
        'xi-api-key': ELEVEN_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: text.substring(0, 4500),
        model_id: 'eleven_multilingual_v2',
        voice_settings: { stability: 0.5, similarity_boost: 0.75, speed: speed || 1.0 }
      })
    });

    if (!response.ok) {
      const err = await response.text();
      return { statusCode: response.status, body: JSON.stringify({ error: err }) };
    }

    const audioBuffer = await response.arrayBuffer();
    const base64Audio = Buffer.from(audioBuffer).toString('base64');

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'audio/mpeg' },
      body: base64Audio,
      isBase64Encoded: true
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
