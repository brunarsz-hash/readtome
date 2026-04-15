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

    const safeText = (text || '').substring(0, 2500).trim();
    if (!safeText) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Empty text' }) };
    }

    const safeSpeed = parseFloat(speed) || 1.0;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 25000);

    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE}`, {
      method: 'POST',
      headers: {
        'xi-api-key': ELEVEN_KEY,
        'Content-Type': 'application/json',
        'Accept': 'audio/mpeg'
      },
      signal: controller.signal,
      body: JSON.stringify({
        text: safeText,
        model_id: 'eleven_multilingual_v2',
        voice_settings: { stability: 0.5, similarity_boost: 0.75, speed: safeSpeed }
      })
    });

    clearTimeout(timeout);

    if (!response.ok) {
      const err = await response.text();
      console.error('ElevenLabs error:', response.status, err);
      return { statusCode: response.status, body: JSON.stringify({ error: err }) };
    }

    const audioBuffer = await response.arrayBuffer();
    const base64Audio = Buffer.from(audioBuffer).toString('base64');

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'audio/mpeg', 'Cache-Control': 'no-cache' },
      body: base64Audio,
      isBase64Encoded: true
    };
  } catch (err) {
    console.error('TTS error:', err.message);
    if (err.name === 'AbortError') {
      return { statusCode: 504, body: JSON.stringify({ error: 'Timeout' }) };
    }
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
