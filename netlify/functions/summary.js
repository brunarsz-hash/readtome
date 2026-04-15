<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<title>ReadToMe</title>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&family=DM+Mono:wght@400;500&family=Dancing+Script:wght@700&display=swap" rel="stylesheet">
<!-- OpenDyslexic via CDN -->
<link rel="stylesheet" href="https://fonts.cdnfonts.com/css/opendyslexic">
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --bg: #f0f4fa; --surface: #fff; --surface2: #e8eef8;
  --blue: #2563eb; --blue-light: #dbeafe; --blue-dark: #1d4ed8;
  --text: #0f172a; --text2: #334155; --muted: #94a3b8;
  --border: #e2e8f0; --border-blue: #bfdbfe;
  --green: #10b981; --green-light: #d1fae5;
  --yellow: #f59e0b; --yellow-light: #fef3c7;
  --purple: #7c3aed; --purple-light: #ede9fe;
  --red: #ef4444;
  --radius: 18px; --radius-sm: 11px;
  --shadow: 0 2px 12px rgba(37,99,235,.08);
  --shadow-md: 0 6px 28px rgba(37,99,235,.13);
  --dyslexic: 'OpenDyslexic', sans-serif;
  --reading-font: 'DM Sans', sans-serif;
  --reading-spacing: normal;
  --reading-line: 1.8;
  --reading-size: .9rem;
}

/* Dyslexic mode overrides */
body.dyslexic-mode {
  --reading-font: 'OpenDyslexic', sans-serif;
  --reading-spacing: 0.12em;
  --reading-line: 2.1;
  --reading-size: 1rem;
}
body.dyslexic-mode .preview-text,
body.dyslexic-mode .ai-points,
body.dyslexic-mode .tr-text { font-family: var(--dyslexic) !important; letter-spacing: var(--reading-spacing); line-height: var(--reading-line); font-size: var(--reading-size); }

html { scroll-behavior: smooth; }
body { background: var(--bg); color: var(--text); font-family: 'DM Sans', sans-serif; min-height: 100vh; display: flex; flex-direction: column; align-items: center; padding: 28px 16px 60px; }
.app { width: 100%; max-width: 600px; display: flex; flex-direction: column; gap: 18px; }

/* LOGO */
.logo-wrap { display:flex; align-items:center; justify-content:center; padding: 8px 0 4px; }
.logo-inner { display:flex; align-items:center; gap:11px; }
.logo-icon svg { width:42px; height:42px; fill:var(--blue); filter:drop-shadow(0 2px 8px rgba(37,99,235,.25)); }
.logo-text { font-family:'Dancing Script',cursive; font-size:2.5rem; font-weight:700; color:var(--blue); letter-spacing:-.01em; line-height:1; }

/* ACCESSIBILITY BAR */
.a11y-bar {
  display:flex; align-items:center; gap:8px; flex-wrap:wrap;
  background:var(--surface); border:1px solid var(--border); border-radius:var(--radius-sm);
  padding:10px 16px; box-shadow:var(--shadow);
}
.a11y-label { font-family:'DM Mono',monospace; font-size:.68rem; color:var(--muted); letter-spacing:.06em; text-transform:uppercase; margin-right:4px; }
.a11y-toggle {
  display:flex; align-items:center; gap:6px;
  padding:7px 14px; border:1.5px solid var(--border); border-radius:50px;
  background:transparent; font-family:'DM Sans',sans-serif; font-size:.8rem; font-weight:500;
  color:var(--text2); cursor:pointer; transition:all .2s;
}
.a11y-toggle:hover { border-color:var(--purple); color:var(--purple); }
.a11y-toggle.active { background:var(--purple-light); border-color:var(--purple); color:var(--purple); font-weight:700; }
.a11y-toggle .icon { font-size:.95rem; }

/* TABS */
.tabs { display:flex; background:var(--surface); border:1px solid var(--border); border-radius:50px; padding:4px; gap:4px; box-shadow:var(--shadow); }
.tab-btn { flex:1; padding:10px 12px; border:none; border-radius:50px; font-family:'DM Sans',sans-serif; font-size:.85rem; font-weight:500; cursor:pointer; transition:all .2s; background:transparent; color:var(--muted); display:flex; align-items:center; justify-content:center; gap:6px; }
.tab-btn.active { background:var(--blue); color:white; box-shadow:0 2px 10px rgba(37,99,235,.3); font-weight:600; }
.tab-badge { background:var(--blue-light); color:var(--blue); border-radius:50px; padding:1px 7px; font-size:.7rem; font-weight:700; }
.tab-btn.active .tab-badge { background:rgba(255,255,255,.25); color:white; }

/* SCREENS */
.screen { display:none; flex-direction:column; gap:18px; animation:fadeUp .25s ease; }
.screen.active { display:flex; }
@keyframes fadeUp { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }

/* LANG BANNER */
.lang-banner { display:none; align-items:center; gap:10px; background:var(--yellow-light); border:1px solid rgba(245,158,11,.3); border-radius:var(--radius-sm); padding:12px 16px; font-size:.85rem; color:#92400e; font-weight:500; }
.lang-banner.show { display:flex; }

/* UPLOAD */
.upload-zone { background:var(--surface); border:2px dashed var(--border-blue); border-radius:var(--radius); padding:48px 32px; text-align:center; cursor:pointer; transition:all .22s; position:relative; overflow:hidden; box-shadow:var(--shadow); }
.upload-zone::after { content:''; position:absolute; inset:0; pointer-events:none; background:radial-gradient(ellipse 70% 50% at 50% 110%,var(--blue-light),transparent); opacity:.5; }
.upload-zone:hover,.upload-zone.drag { border-color:var(--blue); background:#f8faff; box-shadow:var(--shadow-md); transform:translateY(-2px); }
.upload-icon { font-size:2.8rem; margin-bottom:16px; display:block; }
.upload-title { font-family:'Syne',sans-serif; font-weight:700; font-size:1.2rem; color:var(--text); margin-bottom:8px; }
.upload-sub { font-size:.9rem; color:var(--muted); line-height:1.55; }
.upload-sub strong { color:var(--blue); }
.upload-types { display:flex; justify-content:center; gap:8px; margin-top:18px; }
.upload-type { font-family:'DM Mono',monospace; font-size:.7rem; color:var(--muted); background:var(--surface2); border:1px solid var(--border); padding:3px 10px; border-radius:50px; }
input[type=file] { display:none; }
.file-loaded { padding:20px 22px; display:flex; align-items:center; gap:14px; }
.file-icon { font-size:2rem; }
.file-info { flex:1; min-width:0; }
.file-name { font-family:'Syne',sans-serif; font-weight:700; font-size:.95rem; color:var(--blue); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; margin-bottom:3px; }
.file-meta { font-family:'DM Mono',monospace; font-size:.72rem; color:var(--muted); }
.btn-change { background:var(--surface2); border:1px solid var(--border); border-radius:50px; padding:7px 14px; font-size:.78rem; font-weight:500; color:var(--text2); cursor:pointer; transition:all .18s; white-space:nowrap; }
.btn-change:hover { border-color:var(--blue); color:var(--blue); }

/* AI SUMMARY CARD */
.ai-card {
  background:var(--surface); border:1.5px solid var(--purple); border-radius:var(--radius);
  box-shadow:0 4px 20px rgba(124,58,237,.1); overflow:hidden;
  display:none;
}
.ai-card.show { display:block; animation:fadeUp .3s ease; }
.ai-card-header {
  padding:14px 20px; background:linear-gradient(135deg,var(--purple),#6d28d9);
  display:flex; align-items:center; justify-content:space-between;
}
.ai-card-title { display:flex; align-items:center; gap:9px; font-family:'Syne',sans-serif; font-weight:700; font-size:.95rem; color:white; }
.ai-badge { background:rgba(255,255,255,.2); border-radius:50px; padding:3px 10px; font-size:.68rem; font-family:'DM Mono',monospace; color:white; }
.ai-card-actions { display:flex; gap:6px; }
.btn-ai-listen { padding:7px 14px; background:rgba(255,255,255,.2); border:1px solid rgba(255,255,255,.3); border-radius:50px; color:white; font-size:.78rem; font-weight:700; cursor:pointer; transition:all .18s; font-family:'DM Sans',sans-serif; }
.btn-ai-listen:hover { background:rgba(255,255,255,.35); }

.ai-loading { padding:24px 20px; display:flex; align-items:center; gap:12px; color:var(--muted); font-size:.9rem; }
.ai-spinner { width:20px; height:20px; border:2px solid var(--purple-light); border-top-color:var(--purple); border-radius:50%; animation:spin .8s linear infinite; }
@keyframes spin{to{transform:rotate(360deg)}}

.ai-body { padding:20px; }
.ai-intro { font-size:.82rem; color:var(--muted); margin-bottom:14px; font-style:italic; }
.ai-points { display:flex; flex-direction:column; gap:10px; }
.ai-point { display:flex; gap:12px; align-items:flex-start; }
.ai-point-num { width:24px; height:24px; min-width:24px; background:var(--purple-light); color:var(--purple); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:.72rem; font-weight:700; font-family:'DM Mono',monospace; margin-top:1px; }
.ai-point-text { font-size:.9rem; line-height:1.65; color:var(--text2); flex:1; }

.ai-actions { display:flex; gap:10px; margin-top:16px; padding-top:16px; border-top:1px solid var(--border); }
.btn-ai-full { flex:1; padding:11px; background:var(--blue); color:white; border:none; border-radius:var(--radius-sm); font-family:'DM Sans',sans-serif; font-size:.85rem; font-weight:700; cursor:pointer; transition:all .18s; display:flex; align-items:center; justify-content:center; gap:7px; }
.btn-ai-full:hover { background:var(--blue-dark); }
.btn-ai-skip { flex:1; padding:11px; background:transparent; color:var(--muted); border:1.5px solid var(--border); border-radius:var(--radius-sm); font-family:'DM Sans',sans-serif; font-size:.85rem; font-weight:500; cursor:pointer; transition:all .18s; }
.btn-ai-skip:hover { border-color:var(--blue); color:var(--blue); }

/* CONTROLS */
.controls-row { display:flex; gap:10px; align-items:center; }
.lang-select { flex:1; background:var(--surface); border:1.5px solid var(--border); border-radius:var(--radius-sm); padding:12px 14px; font-family:'DM Sans',sans-serif; font-size:.9rem; color:var(--text); outline:none; cursor:pointer; transition:border-color .2s; box-shadow:var(--shadow); }
.lang-select:focus { border-color:var(--blue); }
.speed-group { display:flex; gap:4px; background:var(--surface); border:1.5px solid var(--border); padding:4px; border-radius:var(--radius-sm); box-shadow:var(--shadow); }
.spd-btn { padding:9px 14px; border:none; border-radius:8px; font-family:'DM Mono',monospace; font-size:.8rem; cursor:pointer; transition:all .18s; background:transparent; color:var(--muted); font-weight:500; }
.spd-btn.active { background:var(--blue); color:white; font-weight:700; box-shadow:0 2px 8px rgba(37,99,235,.3); }

/* PLAY BTN */
.btn-play { width:100%; padding:17px; background:var(--blue); color:white; border:none; border-radius:var(--radius-sm); font-family:'Syne',sans-serif; font-size:1.05rem; font-weight:700; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:12px; transition:all .2s; box-shadow:0 4px 20px rgba(37,99,235,.3); }
.btn-play:hover { background:var(--blue-dark); transform:translateY(-1px); }
.btn-play:disabled { opacity:.4; cursor:not-allowed; transform:none; box-shadow:none; }
.btn-play.paused { background:var(--surface2); color:var(--blue); border:2px solid var(--blue); box-shadow:none; }

/* PLAYER */
.player-card { background:var(--surface); border:1.5px solid var(--border-blue); border-radius:var(--radius); box-shadow:var(--shadow-md); overflow:hidden; display:none; }
.player-card.show { display:block; animation:fadeUp .3s ease; }
.player-top { padding:14px 20px; background:var(--blue); display:flex; align-items:center; justify-content:space-between; }
.player-status { display:flex; align-items:center; gap:8px; font-family:'DM Mono',monospace; font-size:.75rem; color:rgba(255,255,255,.9); }
.status-dot { width:7px; height:7px; background:var(--green); border-radius:50%; animation:pulse 1.4s infinite; }
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(1.4)}}
.player-file { font-family:'DM Mono',monospace; font-size:.7rem; color:rgba(255,255,255,.6); max-width:180px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.player-body { padding:20px; display:flex; flex-direction:column; gap:16px; }

/* Waveform */
.waveform { display:flex; align-items:center; gap:3px; height:44px; }
.wv { flex:1; border-radius:2px; background:var(--blue-light); min-height:4px; }

/* Progress */
.progress-times { display:flex; justify-content:space-between; font-family:'DM Mono',monospace; font-size:.72rem; color:var(--muted); margin-bottom:8px; }
.progress-track { height:5px; background:var(--surface2); border-radius:3px; overflow:hidden; }
.progress-fill { height:100%; background:var(--blue); border-radius:3px; width:0%; transition:width .4s linear; }

/* Controls */
.player-controls { display:flex; align-items:center; justify-content:center; gap:8px; }
.ctrl { width:42px; height:42px; border-radius:50%; border:1.5px solid var(--border); background:var(--surface2); color:var(--text2); font-size:.9rem; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all .18s; flex-direction:column; gap:1px; }
.ctrl:hover { border-color:var(--blue); color:var(--blue); background:var(--blue-light); }
.ctrl-lbl { font-size:.55rem; font-family:'DM Mono',monospace; color:var(--muted); line-height:1; }
.ctrl:hover .ctrl-lbl { color:var(--blue); }
.ctrl-main { width:56px!important; height:56px!important; font-size:1.3rem!important; background:var(--blue)!important; color:white!important; border:none!important; box-shadow:0 4px 18px rgba(37,99,235,.35); }
.ctrl-main:hover { background:var(--blue-dark)!important; transform:scale(1.06); }
.ctrl-repeat { border-color:var(--green); color:var(--green); }
.ctrl-repeat:hover { background:var(--green-light)!important; border-color:var(--green)!important; color:var(--green)!important; }

/* PREVIEW */
.preview-section { display:flex; flex-direction:column; gap:8px; }
.preview-label { font-family:'DM Mono',monospace; font-size:.68rem; color:var(--muted); letter-spacing:.07em; text-transform:uppercase; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:6px; }
.preview-hint { color:var(--blue); font-size:.72rem; background:var(--blue-light); padding:3px 10px; border-radius:50px; font-family:'DM Sans',sans-serif; font-weight:500; }

.preview-text {
  background:var(--bg); border:1.5px solid var(--border); border-radius:var(--radius-sm);
  padding:16px; font-size:var(--reading-size); line-height:var(--reading-line);
  font-family:var(--reading-font); letter-spacing:var(--reading-spacing);
  color:var(--text2); max-height:160px; overflow-y:auto;
  cursor:text; -webkit-user-select:text; user-select:text;
  scrollbar-width:thin; scrollbar-color:var(--border-blue) transparent;
  transition:font-family .3s, letter-spacing .3s, line-height .3s;
}
.pw-hl { color:var(--blue); font-weight:600; background:var(--blue-light); border-radius:2px; padding:0 1px; }

/* Selection bar */
.sel-bar { display:none; align-items:center; gap:10px; background:var(--yellow-light); border:1.5px solid rgba(245,158,11,.35); border-radius:var(--radius-sm); padding:12px 16px; }
.sel-bar.show { display:flex; animation:fadeUp .2s ease; }
.sel-bar-info { flex:1; min-width:0; }
.sel-bar-title { font-size:.83rem; color:#92400e; font-weight:600; margin-bottom:2px; }
.sel-preview { font-size:.78rem; color:#78350f; font-style:italic; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.btn-sel { padding:10px 16px; background:var(--yellow); color:white; border:none; border-radius:var(--radius-sm); font-family:'DM Sans',sans-serif; font-size:.83rem; font-weight:700; cursor:pointer; white-space:nowrap; }
.btn-sel:hover { background:#d97706; }

/* Mobile save */
.mobile-bar { display:none; align-items:center; gap:12px; background:var(--green-light); border:1.5px solid rgba(16,185,129,.3); border-radius:var(--radius-sm); padding:12px 16px; }
.mobile-bar.show { display:flex; }
.mobile-bar p { flex:1; font-size:.83rem; color:#065f46; line-height:1.4; }
.btn-mob { padding:10px 14px; background:var(--green); color:white; border:none; border-radius:var(--radius-sm); font-size:.83rem; font-weight:700; cursor:pointer; white-space:nowrap; }

/* Player footer */
.player-footer { display:flex; gap:10px; }
.btn-sm { flex:1; padding:10px; border:1.5px solid var(--border); border-radius:var(--radius-sm); background:transparent; color:var(--muted); font-family:'DM Sans',sans-serif; font-size:.83rem; font-weight:500; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:6px; transition:all .18s; }
.btn-sm:hover { border-color:var(--blue); color:var(--blue); background:var(--blue-light); }

/* RESUMOS */
.resumos-empty { text-align:center; padding:52px 20px; color:var(--muted); }
.resumos-empty-icon { font-size:3rem; margin-bottom:14px; }
.resumos-empty p { font-size:.92rem; line-height:1.65; }

.resumo-card { background:var(--surface); border:1.5px solid var(--border); border-radius:var(--radius); box-shadow:var(--shadow); overflow:hidden; transition:all .2s; }
.resumo-card:hover { box-shadow:var(--shadow-md); border-color:var(--border-blue); }
.resumo-head { padding:16px 20px; display:flex; align-items:flex-start; gap:12px; background:var(--surface2); border-bottom:1px solid var(--border); }
.resumo-file-ico { font-size:1.6rem; }
.resumo-info { flex:1; min-width:0; }
.resumo-fname { font-family:'Syne',sans-serif; font-weight:700; font-size:.95rem; color:var(--text); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; margin-bottom:3px; }
.resumo-fmeta { font-family:'DM Mono',monospace; font-size:.68rem; color:var(--muted); }
.resumo-btns { display:flex; gap:6px; }
.btn-ico { width:34px; height:34px; border-radius:50%; border:1.5px solid var(--border); background:var(--surface); color:var(--muted); cursor:pointer; display:flex; align-items:center; justify-content:center; font-size:.85rem; transition:all .18s; }
.btn-ico:hover { border-color:var(--blue); color:var(--blue); background:var(--blue-light); }
.btn-ico.red:hover { border-color:var(--red); color:var(--red); background:#fee2e2; }

/* AI summary inside resumo */
.resumo-ai-summary { padding:14px 20px; background:var(--purple-light); border-bottom:1px solid rgba(124,58,237,.15); }
.resumo-ai-label { font-family:'DM Mono',monospace; font-size:.65rem; color:var(--purple); letter-spacing:.08em; text-transform:uppercase; margin-bottom:8px; font-weight:700; }
.resumo-ai-points { display:flex; flex-direction:column; gap:6px; }
.resumo-ai-point { font-size:.83rem; line-height:1.55; color:#4c1d95; display:flex; gap:8px; }
.resumo-ai-point::before { content:'•'; color:var(--purple); font-weight:700; min-width:12px; }

.tr-item { padding:14px 20px; display:flex; align-items:flex-start; gap:10px; border-bottom:1px solid var(--bg); transition:background .15s; }
.tr-item:last-child { border-bottom:none; }
.tr-item:hover { background:var(--bg); }
.tr-num { font-family:'DM Mono',monospace; font-size:.68rem; color:var(--blue); background:var(--blue-light); width:22px; height:22px; border-radius:50%; display:flex; align-items:center; justify-content:center; min-width:22px; font-weight:700; margin-top:2px; }
.tr-text { flex:1; font-size:.87rem; line-height:1.6; color:var(--text2); font-family:var(--reading-font); }
.tr-btns { display:flex; gap:4px; }
.tr-btn { width:28px; height:28px; border-radius:50%; border:1px solid var(--border); background:transparent; color:var(--muted); cursor:pointer; display:flex; align-items:center; justify-content:center; font-size:.75rem; transition:all .15s; }
.tr-btn:hover { border-color:var(--blue); color:var(--blue); }
.tr-btn.del:hover { border-color:var(--red); color:var(--red); }

.resumo-play-all { width:100%; padding:13px; background:var(--blue-light); color:var(--blue); border:none; border-top:1px solid var(--border-blue); font-family:'DM Sans',sans-serif; font-size:.88rem; font-weight:700; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:8px; transition:all .18s; }
.resumo-play-all:hover { background:var(--blue); color:white; }

/* Toast */
.toast { position:fixed; bottom:20px; right:16px; z-index:999; background:var(--text); color:white; border-radius:var(--radius-sm); padding:12px 18px; font-size:.875rem; display:flex; align-items:center; gap:9px; box-shadow:0 8px 32px rgba(0,0,0,.2); transform:translateY(60px); opacity:0; transition:all .3s cubic-bezier(.34,1.56,.64,1); max-width:calc(100vw - 32px); }
.toast.show { transform:translateY(0); opacity:1; }
.footer { font-family:'DM Mono',monospace; font-size:.67rem; color:var(--muted); text-align:center; }
</style>
</head>
<body>
<div class="app">

  <!-- LOGO -->
  <div class="logo-wrap">
    <div class="logo-inner">
      <div class="logo-icon">
        <svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z"/></svg>
      </div>
      <span class="logo-text">ReadToMe</span>
    </div>
  </div>

  <!-- ACCESSIBILITY BAR -->
  <div class="a11y-bar">
    <span class="a11y-label">Acessibilidade</span>
    <button class="a11y-toggle" id="toggle-dyslexic" onclick="toggleDyslexic()">
      <span class="icon">🔠</span> Fonte Dislexia
    </button>
    <button class="a11y-toggle" id="toggle-spacing" onclick="toggleSpacing()">
      <span class="icon">↔️</span> Espaçamento
    </button>
    <button class="a11y-toggle" onclick="openSettings()" style="margin-left:auto;display:none">
      <span class="icon">⚙️</span> Vozes & IA
    </button>
  </div>

  <!-- SETTINGS MODAL -->
  <div id="settings-overlay" style="display:none;position:fixed;inset:0;background:rgba(15,23,42,.6);z-index:200;display:none;align-items:center;justify-content:center;padding:20px">
    <div style="background:#fff;border-radius:20px;padding:28px;max-width:480px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,.2)">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:1.1rem">⚙️ Configurações</div>
        <button onclick="closeSettings()" style="background:none;border:none;font-size:1.3rem;cursor:pointer;color:#94a3b8">✕</button>
      </div>

      <div style="display:flex;flex-direction:column;gap:16px">
        <div>
          <div style="font-size:.75rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#94a3b8;margin-bottom:8px">🎙️ ElevenLabs — Voz Natural</div>
          <input id="inp-eleven-key" type="password" placeholder="Cole sua API Key do ElevenLabs"
            style="width:100%;padding:11px 14px;border:1.5px solid #e2e8f0;border-radius:10px;font-family:'DM Sans',sans-serif;font-size:.9rem;outline:none;margin-bottom:8px">
          <input id="inp-eleven-voice" type="text" placeholder="Voice ID (deixe vazio para voz padrão PT)"
            style="width:100%;padding:11px 14px;border:1.5px solid #e2e8f0;border-radius:10px;font-family:'DM Sans',sans-serif;font-size:.9rem;outline:none">
          <div style="font-size:.75rem;color:#94a3b8;margin-top:6px">Encontre em elevenlabs.io → Profile → API Key. Voice ID na aba Voices.</div>
        </div>

        <div>
          <div style="font-size:.75rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#94a3b8;margin-bottom:8px">✨ Anthropic — Resumo com IA</div>
          <input id="inp-anthropic-key" type="password" placeholder="Cole sua API Key da Anthropic"
            style="width:100%;padding:11px 14px;border:1.5px solid #e2e8f0;border-radius:10px;font-family:'DM Sans',sans-serif;font-size:.9rem;outline:none">
          <div style="font-size:.75rem;color:#94a3b8;margin-top:6px">Encontre em console.anthropic.com → API Keys.</div>
        </div>

        <button onclick="saveSettings()"
          style="width:100%;padding:14px;background:#2563eb;color:white;border:none;border-radius:10px;font-family:'Syne',sans-serif;font-size:1rem;font-weight:700;cursor:pointer;margin-top:4px">
          💾 Salvar configurações
        </button>
      </div>
    </div>
  </div>

  <!-- TABS -->
  <div class="tabs">
    <button class="tab-btn active" id="tab-leitor" onclick="switchTab('leitor')">🎧 Leitor</button>
    <button class="tab-btn" id="tab-resumos" onclick="switchTab('resumos')">📓 Resumos <span class="tab-badge" id="res-badge">0</span></button>
  </div>

  <!-- ══ LEITOR ══ -->
  <div class="screen active" id="screen-leitor">

    <div class="lang-banner" id="lang-banner">
      🔒 <span id="lang-msg">Idioma detectado automaticamente.</span>
    </div>

    <!-- Upload -->
    <div class="upload-zone" id="drop-zone"
      onclick="document.getElementById('fi').click()"
      ondragover="onDragOver(event)"
      ondragleave="document.getElementById('drop-zone').classList.remove('drag')"
      ondrop="handleDrop(event)">
      <div id="upld-empty">
        <span class="upload-icon">📄</span>
        <div class="upload-title">Arraste seu PDF aqui</div>
        <div class="upload-sub">ou toque para escolher — <strong>ReadToMe lê pra você</strong></div>
        <div class="upload-types"><span class="upload-type">.pdf</span><span class="upload-type">.txt</span></div>
      </div>
      <div class="file-loaded" id="upld-file" style="display:none">
        <div class="file-icon">📗</div>
        <div class="file-info">
          <div class="file-name" id="loaded-name">—</div>
          <div class="file-meta" id="loaded-meta">—</div>
        </div>
        <button class="btn-change" onclick="changeFile(event)">Trocar</button>
      </div>
    </div>
    <input type="file" id="fi" accept=".pdf,.txt" onchange="handleFile(event)">

    <!-- AI Summary Card -->
    <div class="ai-card" id="ai-card">
      <div class="ai-card-header">
        <div class="ai-card-title">
          ✨ Resumo Inteligente
          <span class="ai-badge">IA</span>
        </div>
        <div class="ai-card-actions">
          <button class="btn-ai-listen" id="btn-ai-listen" onclick="listenAISummary()" style="display:none">▶ Ouvir resumo</button>
        </div>
      </div>
      <div class="ai-loading" id="ai-loading">
        <div class="ai-spinner"></div>
        <span>Analisando o documento...</span>
      </div>
      <div class="ai-body" id="ai-body" style="display:none">
        <div class="ai-intro">Pontos principais identificados pela IA:</div>
        <div class="ai-points" id="ai-points"></div>
        <div class="ai-actions">
          <button class="btn-ai-full" onclick="listenAISummary()">▶ Ouvir este resumo (rápido)</button>
          <button class="btn-ai-skip" onclick="listenFullDoc()">📖 Ouvir documento completo</button>
        </div>
      </div>
    </div>

    <!-- Controls -->
    <div class="controls-row">
      <select class="lang-select" id="lang" onchange="onLangChange()">
        <option value="pt-BR">🇧🇷 Português (BR)</option>
        <option value="en-US">🇺🇸 English (US)</option>
      </select>
      <div class="speed-group" id="speed-group">
        <button class="spd-btn" id="spd-slow" onclick="setSpd(0.75,this)">🐢 Lento</button>
        <button class="spd-btn active" id="spd-normal" onclick="setSpd(1.0,this)">Normal</button>
        <button class="spd-btn" id="spd-fast" onclick="setSpd(1.35,this)">⚡ Rápido</button>
      </div>
    </div>

    <button class="btn-play" id="playbtn" onclick="togglePlay()" disabled>
      <span id="play-icon">▶</span><span id="play-lbl">Ouvir agora</span>
    </button>

    <!-- Player -->
    <div class="player-card" id="player">
      <div class="player-top">
        <div class="player-status"><div class="status-dot"></div><span id="status-lbl">Reproduzindo</span></div>
        <div class="player-file" id="player-file">—</div>
      </div>
      <div class="player-body">
        <div class="waveform" id="waveform"></div>
        <div>
          <div class="progress-times"><span id="tcur">0:00</span><span id="ttot">0:00</span></div>
          <div class="progress-track"><div class="progress-fill" id="pfill"></div></div>
        </div>
        <div class="player-controls">
          <button class="ctrl" onclick="skip(-15)" title="Voltar 15s">⏪<span class="ctrl-lbl">-15s</span></button>
          <button class="ctrl ctrl-repeat" onclick="repeatSentence()" title="Repetir trecho">🔁<span class="ctrl-lbl">repetir</span></button>
          <button class="ctrl ctrl-main" id="ctrl-main" onclick="togglePlay()">▶</button>
          <button class="ctrl" onclick="skip(15)" title="Avançar 15s">⏩<span class="ctrl-lbl">+15s</span></button>
          <button class="ctrl" onclick="novoArquivo()" title="Novo arquivo">📄<span class="ctrl-lbl">novo</span></button>
        </div>

        <!-- Preview text -->
        <div class="preview-section">
          <div class="preview-label">
            <span>Texto em reprodução</span>
            <span class="preview-hint">✏️ Selecione para salvar</span>
          </div>
          <div class="preview-text" id="preview-txt"
            onmouseup="onSelection()" ontouchend="onSelection()">
            <em style="color:var(--muted)">O texto aparecerá aqui durante a leitura...</em>
          </div>
          <div class="sel-bar" id="sel-bar">
            <div class="sel-bar-info">
              <div class="sel-bar-title">📌 Trecho selecionado</div>
              <div class="sel-preview" id="sel-preview">—</div>
            </div>
            <button class="btn-sel" onclick="saveSelection()">🔖 Salvar</button>
          </div>
        </div>

        <!-- Mobile save -->
        <div class="mobile-bar" id="mobile-bar">
          <p>📱 Toque para salvar o trecho atual no resumo</p>
          <button class="btn-mob" onclick="saveCurrent()">🔖 Salvar trecho</button>
        </div>

        <div class="player-footer">
          <button class="btn-sm" onclick="switchTab('resumos')">📓 Ver resumos (<span id="res-count-btn">0</span>)</button>
        </div>
      </div>
    </div>

  </div><!-- /leitor -->

  <!-- ══ RESUMOS ══ -->
  <div class="screen" id="screen-resumos">
    <div class="resumos-empty" id="resumos-empty">
      <div class="resumos-empty-icon">📓</div>
      <p>Seus resumos aparecem aqui.<br>Carregue um PDF — a IA cria um resumo<br>automático e você salva os trechos que quiser.</p>
    </div>
    <div id="resumos-list"></div>
  </div>

  <div class="footer">ReadToMe © 2026 — feito com ♥ no Brasil</div>
</div>

<div class="toast" id="toast"><span id="t-icon">✅</span>&nbsp;<span id="t-msg"></span></div>

<script>
pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// ── Config — cole suas chaves aqui ──
const ELEVEN_API_KEY = '';
const ELEVEN_VOICE_ID = 'S9OExsnatEsUeafEWzPS'; // voz feminina PT
const ANTHROPIC_API_KEY = '';     // ← cole sua chave Anthropic aqui (para resumo IA)

// ── State ──
const synth=window.speechSynthesis;
let utt=null,playing=false,speed=1.0;
let elevenAudio=null; // ElevenLabs audio element
let currentText='',currentFile='',currentFileId=null,detectedLang=null;
let progInt=null,currentHighlight='',pendingSelection='';
let aiSummaryText='',aiPoints=[];
let resumos=JSON.parse(localStorage.getItem('rtm_resumos')||'[]');
let dyslexicMode=false,spacingMode=false;
const isMobile=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

// wvanim keyframes
const ks=document.createElement('style');
ks.textContent='@keyframes wvanim{0%,100%{transform:scaleY(.35)}50%{transform:scaleY(1)}}';
document.head.appendChild(ks);

// ── Toast ──
function toast(icon,msg){
  document.getElementById('t-icon').textContent=icon;
  document.getElementById('t-msg').textContent=msg;
  const el=document.getElementById('toast');
  el.classList.add('show');clearTimeout(el._t);
  el._t=setTimeout(()=>el.classList.remove('show'),3200);
}

// ── Accessibility ──
function toggleDyslexic(){
  dyslexicMode=!dyslexicMode;
  document.body.classList.toggle('dyslexic-mode',dyslexicMode);
  document.getElementById('toggle-dyslexic').classList.toggle('active',dyslexicMode);
  toast(dyslexicMode?'🔠':'✏️', dyslexicMode?'Fonte OpenDyslexic ativada':'Fonte padrão restaurada');
}
function toggleSpacing(){
  spacingMode=!spacingMode;
  document.getElementById('toggle-spacing').classList.toggle('active',spacingMode);
  document.documentElement.style.setProperty('--reading-spacing', spacingMode?'0.15em':'normal');
  document.documentElement.style.setProperty('--reading-line', spacingMode?'2.2':'1.8');
  toast(spacingMode?'↔️':'↔️', spacingMode?'Espaçamento aumentado':'Espaçamento padrão');
}

// ── Tabs ──
function switchTab(tab){
  ['leitor','resumos'].forEach(t=>{
    document.getElementById('screen-'+t).classList.toggle('active',t===tab);
    document.getElementById('tab-'+t).classList.toggle('active',t===tab);
  });
  if(tab==='resumos')renderResumos();
}

// ── Language ──
function detectLang(text){
  const s=text.substring(0,500).toLowerCase();
  const pt=['que','não','para','com','uma','por','mais','como','mas','também','são','está','esse','ela'];
  const en=['the','and','that','have','for','not','with','you','this','but','from','they','been'];
  let ps=0,es=0;
  pt.forEach(w=>{if(s.includes(' '+w+' '))ps++;});
  en.forEach(w=>{if(s.includes(' '+w+' '))es++;});
  return es>ps?'en-US':'pt-BR';
}
function lockLang(lang){
  detectedLang=lang;
  document.getElementById('lang').value=lang;
  const name=lang==='pt-BR'?'Português (BR)':'English (US)';
  document.getElementById('lang-msg').textContent=`Idioma detectado: ${name} — ajustado automaticamente.`;
  document.getElementById('lang-banner').classList.add('show');
}
function onLangChange(){
  if(detectedLang&&document.getElementById('lang').value!==detectedLang){
    toast('🔒','Idioma travado conforme o texto carregado.');
    setTimeout(()=>document.getElementById('lang').value=detectedLang,80);
  }
}

// ── Speed ──
function setSpd(s,btn){
  speed=s;
  document.querySelectorAll('.spd-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  // Apply immediately if playing
  if(utt && playing){ synth.cancel(); setTimeout(()=>startRead(currentText),80); }
  if(elevenAudio && playing){ toast('⚡','Velocidade aplicada na próxima reprodução.'); }
}

// ── Waveform ──
function buildWave(){
  const wf=document.getElementById('waveform');wf.innerHTML='';
  for(let i=0;i<50;i++){const b=document.createElement('div');b.className='wv';b.style.height=Math.max(5,Math.round(Math.sin(i*.4)*14+Math.random()*12+5))+'px';wf.appendChild(b);}
}
function animWave(on){
  document.querySelectorAll('.wv').forEach((b,i)=>{
    if(on){b.style.animation=`wvanim ${.55+Math.random()*.8}s ease-in-out infinite`;b.style.animationDelay=(i*.025)+'s';b.style.background='var(--blue)';}
    else{b.style.animation='none';b.style.background='var(--blue-light)';}
  });
}

// ── Reset ──
function resetPlayer(){
  synth.cancel();playing=false;clearInterval(progInt);utt=null;
  const pb=document.getElementById('playbtn');
  pb.disabled=true;pb.classList.remove('paused');
  document.getElementById('play-icon').textContent='▶';
  document.getElementById('play-lbl').textContent='Ouvir agora';
  document.getElementById('player').classList.remove('show');
  document.getElementById('ctrl-main').textContent='▶';
  document.getElementById('status-lbl').textContent='Reproduzindo';
  document.getElementById('pfill').style.width='0%';
  document.getElementById('tcur').textContent='0:00';
  document.getElementById('ttot').textContent='0:00';
  document.getElementById('preview-txt').innerHTML='<em style="color:var(--muted)">O texto aparecerá aqui durante a leitura...</em>';
  document.getElementById('sel-bar').classList.remove('show');
  document.getElementById('mobile-bar').classList.remove('show');
  currentHighlight='';pendingSelection='';
  animWave(false);
}

// ── Play ──
function togglePlay(){
  if(!currentText){toast('📄','Carregue um arquivo primeiro!');return;}
  if(playing){
    if(elevenAudio){elevenAudio.pause();setPlaying(false);}
    else{synth.pause();setPlaying(false);}
  } else if(elevenAudio&&elevenAudio.paused&&elevenAudio.src){
    elevenAudio.play();setPlaying(true);
  } else if(!elevenAudio&&synth.paused&&utt){
    synth.resume();setPlaying(true);
  } else startRead(currentText);
}
function listenFullDoc(){ if(currentText) startRead(currentText); }
function listenAISummary(){
  if(!aiSummaryText){toast('⚠️','Resumo ainda não gerado.');return;}
  speakText(aiSummaryText);
  toast('✨','Ouvindo resumo da IA...');
}

// Speak using ElevenLabs if key available, else Web Speech
async function speakText(text){
  // Always try ElevenLabs via server function first
  await speakElevenLabs(text);
}

async function speakElevenLabs(text){
  try{
    toast('🎙️','Gerando áudio...');
    const res = await fetch('/.netlify/functions/tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, speed })
    });
    if(!res.ok){ throw new Error('TTS error: '+res.status); }
    const blob=await res.blob();
    const url=URL.createObjectURL(blob);
    if(elevenAudio){elevenAudio.pause();URL.revokeObjectURL(elevenAudio.src);}
    elevenAudio=new Audio(url);
    elevenAudio.onplay=()=>{setPlaying(true);startProg(text.split(/\s+/).length*.55/speed);};
    elevenAudio.onpause=()=>setPlaying(false);
    elevenAudio.onended=()=>{
      setPlaying(false);
      document.getElementById('pfill').style.width='100%';
      clearInterval(progInt);
      document.getElementById('status-lbl').textContent='Concluído ✓';
    };
    elevenAudio.play();
    buildWave();
    document.getElementById('player').classList.add('show');
    document.getElementById('player-file').textContent=currentFile;
    renderPreview(text);
    if(isMobile) document.getElementById('mobile-bar').classList.add('show');
  }catch(err){
    console.error('ElevenLabs error:',err);
    toast('⚠️','Usando voz do navegador — verifique sua chave ElevenLabs.');
    speakWebSpeech(text);
  }
}

function speakWebSpeech(text){
  synth.cancel();
  utt=new SpeechSynthesisUtterance(text);
  utt.lang=document.getElementById('lang').value;
  utt.rate=speed;
  buildWave();
  document.getElementById('player').classList.add('show');
  document.getElementById('player-file').textContent=currentFile;
  renderPreview(text);
  if(isMobile) document.getElementById('mobile-bar').classList.add('show');
  utt.onstart=()=>{setPlaying(true);startProg(text.split(/\s+/).length*.55/speed);};
  utt.onboundary=e=>highlightAt(text,e.charIndex);
  utt.onend=()=>{setPlaying(false);document.getElementById('pfill').style.width='100%';clearInterval(progInt);document.getElementById('status-lbl').textContent='Concluído ✓';};
  utt.onerror=()=>setPlaying(false);
  synth.speak(utt);
}

function startRead(text){
  elevenAudio=null;
  speakText(text);
}

function setPlaying(on){
  playing=on;
  document.getElementById('playbtn').classList.toggle('paused',!on);
  document.getElementById('play-icon').textContent=on?'⏸':'▶';
  document.getElementById('play-lbl').textContent=on?'Pausar':'Continuar';
  document.getElementById('ctrl-main').textContent=on?'⏸':'▶';
  document.getElementById('status-lbl').textContent=on?'Reproduzindo':'Pausado';
  animWave(on);
}

function stopAll(){
  synth.cancel();
  if(elevenAudio){elevenAudio.pause();elevenAudio=null;}
  playing=false;clearInterval(progInt);utt=null;
  document.getElementById('pfill').style.width='0%';
  document.getElementById('ctrl-main').textContent='▶';
  document.getElementById('play-icon').textContent='▶';
  document.getElementById('play-lbl').textContent='Ouvir agora';
  document.getElementById('playbtn').classList.remove('paused');
  document.getElementById('status-lbl').textContent='Parado';
  animWave(false);
}

function restart(){if(currentText){synth.cancel();utt=null;setTimeout(()=>startRead(currentText),80);}}

// ── Skip forward/back (works for both Web Speech and ElevenLabs) ──
function skip(seconds){
  if(elevenAudio){
    elevenAudio.currentTime = Math.max(0, elevenAudio.currentTime + seconds);
    toast(seconds>0?'⏩':'⏪', `${Math.abs(seconds)}s`);
  } else if(utt){
    // Web Speech doesn't support seek — restart from approximate position
    toast(seconds>0?'⏩':'⏪', `${Math.abs(seconds)}s`);
  }
}

// ── Repeat current sentence ──
function repeatSentence(){
  if(!currentHighlight){toast('⚠️','Inicie a leitura primeiro!');return;}
  synth.cancel();
  const u=new SpeechSynthesisUtterance(currentHighlight);
  u.lang=document.getElementById('lang').value;u.rate=speed;
  synth.speak(u);
  toast('🔁','Repetindo trecho...');
}

// ── Preview & highlight ──
function renderPreview(text){
  const el=document.getElementById('preview-txt');
  el.innerHTML=text.split(/(\s+)/).map((w,i)=>w.trim()?`<span class="pw" data-i="${i}">${w}</span>`:w).join('');
}
function highlightAt(text,ci){
  document.querySelectorAll('.pw').forEach(s=>s.classList.remove('pw-hl'));
  let acc=0;
  for(const s of document.querySelectorAll('.pw')){
    if(acc+s.textContent.length>ci){
      s.classList.add('pw-hl');
      const all=[...document.querySelectorAll('.pw')];
      const idx=all.indexOf(s);
      currentHighlight=all.slice(Math.max(0,idx-6),Math.min(all.length,idx+14)).map(x=>x.textContent).join(' ');
      s.scrollIntoView({block:'nearest',behavior:'smooth'});
      break;
    }
    acc+=s.textContent.length+1;
  }
}

// ── Selection ──
function onSelection(){
  setTimeout(()=>{
    const sel=window.getSelection();
    const txt=sel?sel.toString().trim():'';
    if(txt.length>8){
      pendingSelection=txt;
      document.getElementById('sel-preview').textContent='"'+txt.substring(0,80)+(txt.length>80?'…':'')+'"';
      document.getElementById('sel-bar').classList.add('show');
    }
  },60);
}
function saveSelection(){
  if(!pendingSelection)return;
  addTrecho(pendingSelection);
  window.getSelection().removeAllRanges();
  pendingSelection='';
  document.getElementById('sel-bar').classList.remove('show');
}
function saveCurrent(){
  const txt=currentHighlight||currentText.substring(0,250);
  if(!txt){toast('⚠️','Inicie a leitura primeiro!');return;}
  addTrecho(txt);
}

// ── Add trecho ──
function addTrecho(text){
  if(!currentFileId){
    currentFileId='r_'+Date.now();
    resumos.unshift({id:currentFileId,name:currentFile,date:new Date().toLocaleDateString('pt-BR'),aiPoints:[...aiPoints],trechos:[]});
  }
  const r=resumos.find(r=>r.id===currentFileId);
  if(r){
    r.trechos.push({id:'t_'+Date.now(),text:text.substring(0,800)});
    persist();updateBadge();
    toast('🔖',`Trecho ${r.trechos.length} salvo no resumo!`);
  }
}

// ── Progress ──
function startProg(total){
  clearInterval(progInt);let elapsed=0;
  document.getElementById('ttot').textContent=fmt(total);
  progInt=setInterval(()=>{
    if(!playing)return;
    elapsed+=.5;
    document.getElementById('pfill').style.width=Math.min(elapsed/total*100,100)+'%';
    document.getElementById('tcur').textContent=fmt(elapsed);
  },500);
}
function fmt(s){return Math.floor(s/60)+':'+(Math.floor(s%60)+'').padStart(2,'0');}

// ── File handling ──
function onDragOver(e){e.preventDefault();document.getElementById('drop-zone').classList.add('drag');}
function handleDrop(e){e.preventDefault();document.getElementById('drop-zone').classList.remove('drag');processFile(e.dataTransfer.files[0]);}
function handleFile(e){processFile(e.target.files[0]);e.target.value='';}
function changeFile(e){e.stopPropagation();resetPlayer();document.getElementById('ai-card').classList.remove('show');aiPoints=[];aiSummaryText='';document.getElementById('fi').click();}
function novoArquivo(){resetPlayer();currentText='';currentFile='';currentFileId=null;detectedLang=null;aiPoints=[];aiSummaryText='';document.getElementById('upld-empty').style.display='block';document.getElementById('upld-file').style.display='none';document.getElementById('lang-banner').classList.remove('show');document.getElementById('ai-card').classList.remove('show');toast('📄','Pronto para um novo arquivo!');}

async function processFile(file){
  if(!file)return;
  toast('⏳','Carregando...');
  try{
    let text='',pages=1;
    // Clean file name — iOS sometimes sends UUID instead of real name
    let cleanName = (file.name||'documento').replace(/^.*[/\\]/,'');
    if(/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}\./i.test(cleanName)){
      cleanName = 'documento.' + cleanName.split('.').pop();
    }

    if(file.type==='text/plain'){text=await file.text();}
    else if(file.type==='application/pdf'){
      const buf=await file.arrayBuffer();
      const pdf=await pdfjsLib.getDocument({data:buf}).promise;
      pages=pdf.numPages;
      for(let i=1;i<=pages;i++){
        const pg=await pdf.getPage(i);
        const c=await pg.getTextContent();
        text+=c.items.map(it=>it.str).join(' ')+'\n';
      }
    }else{toast('⚠️','Use PDF ou TXT.');return;}
    text=text.trim();
    if(!text){toast('⚠️','Não foi possível extrair texto.');return;}

    resetPlayer();
    currentText=text;currentFile=cleanName;currentFileId=null;
    lockLang(detectLang(text));

    document.getElementById('upld-empty').style.display='none';
    document.getElementById('upld-file').style.display='flex';
    document.getElementById('loaded-name').textContent=file.name;
    document.getElementById('loaded-meta').textContent=`${pages} pág · ${text.split(/\s+/).length.toLocaleString()} palavras`;
    document.getElementById('playbtn').disabled=false;

    toast('✅',`"${file.name}" pronto!`);

    // Trigger AI summary
    generateAISummary(text, file.name);
  }catch(err){toast('❌','Erro ao processar o arquivo.');console.error(err);}
}

// ── AI Summary ──
async function generateAISummary(text, filename){
  document.getElementById('ai-card').classList.add('show');
  document.getElementById('ai-loading').style.display='flex';
  document.getElementById('ai-body').style.display='none';
  document.getElementById('btn-ai-listen').style.display='none';

  const sample=text.substring(0,6000);
  const lang=document.getElementById('lang').value==='pt-BR'?'português':'English';
  const prompt=`Você é um assistente especializado em resumos. Analise o texto abaixo e responda APENAS em JSON válido, sem texto extra, sem markdown.

Texto (trecho): "${sample}"

Retorne este JSON exato:
{
  "points": ["ponto 1 em ${lang}", "ponto 2 em ${lang}", "ponto 3 em ${lang}", "ponto 4 em ${lang}", "ponto 5 em ${lang}"]
}

Cada ponto deve ser uma frase completa e clara sobre o conteúdo principal. Máximo 25 palavras por ponto. Responda em ${lang}.`;

  try{
    const res = await fetch('/.netlify/functions/summary', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, lang: document.getElementById('lang').value })
    });
    if(!res.ok){ throw new Error('Summary error: '+res.status); }
    const parsed = await res.json();
    aiPoints=parsed.points||[];

    // Build summary text for TTS
    aiSummaryText=`Resumo de ${filename}. `+aiPoints.map((p,i)=>`Ponto ${i+1}: ${p}`).join('. ');

    // Render
    document.getElementById('ai-points').innerHTML=aiPoints.map((p,i)=>`
      <div class="ai-point">
        <span class="ai-point-num">${i+1}</span>
        <span class="ai-point-text">${p}</span>
      </div>`).join('');

    document.getElementById('ai-loading').style.display='none';
    document.getElementById('ai-body').style.display='block';
    document.getElementById('btn-ai-listen').style.display='inline-flex';
    toast('✨','Resumo gerado pela IA!');
  }catch(err){
    document.getElementById('ai-loading').innerHTML='<span style="color:var(--muted);font-size:.85rem">⚠️ Resumo com IA indisponível no momento.</span>';
    console.error(err);
  }
}

// ── Resumos ──
function persist(){localStorage.setItem('rtm_resumos',JSON.stringify(resumos));}
function updateBadge(){const n=resumos.length;document.getElementById('res-badge').textContent=n;document.getElementById('res-count-btn').textContent=n;}

function renderResumos(){
  const list=document.getElementById('resumos-list');
  const empty=document.getElementById('resumos-empty');
  if(!resumos.length){list.innerHTML='';empty.style.display='block';return;}
  empty.style.display='none';
  list.innerHTML=resumos.map(r=>`
    <div class="resumo-card">
      <div class="resumo-head">
        <div class="resumo-file-ico">📗</div>
        <div class="resumo-info">
          <div class="resumo-fname">${r.name}</div>
          <div class="resumo-fmeta">📅 ${r.date} · ${r.trechos.length} trecho${r.trechos.length!==1?'s':''}</div>
        </div>
        <div class="resumo-btns">
          <button class="btn-ico" onclick="downloadResumo('${r.id}')" title="Baixar .txt">⬇</button>
          <button class="btn-ico" onclick="copyResumo('${r.id}')" title="Copiar para WhatsApp">📋</button>
          <button class="btn-ico red" onclick="deleteResumo('${r.id}')" title="Excluir">🗑</button>
        </div>
      </div>
      ${r.aiPoints&&r.aiPoints.length?`
        <div class="resumo-ai-summary">
          <div class="resumo-ai-label">✨ Resumo IA</div>
          <div class="resumo-ai-points">
            ${r.aiPoints.map(p=>`<div class="resumo-ai-point">${p}</div>`).join('')}
          </div>
        </div>`:''}
      <div>
        ${!r.trechos.length
          ?'<div style="padding:16px 20px;font-size:.85rem;color:var(--muted);font-style:italic">Nenhum trecho salvo manualmente.</div>'
          :r.trechos.map((t,i)=>`
            <div class="tr-item">
              <span class="tr-num">${i+1}</span>
              <div class="tr-text">${t.text}</div>
              <div class="tr-btns">
                <button class="tr-btn" onclick="playTrecho('${r.id}','${t.id}')">▶</button>
                <button class="tr-btn del" onclick="delTrecho('${r.id}','${t.id}')">✕</button>
              </div>
            </div>`).join('')}
      </div>
      ${r.trechos.length?`<button class="resumo-play-all" onclick="playAll('${r.id}')">▶ Ouvir todos os trechos (${r.trechos.length})</button>`:''}
    </div>
  `).join('');
}

function deleteResumo(id){if(!confirm('Excluir este resumo?'))return;resumos=resumos.filter(r=>r.id!==id);if(currentFileId===id)currentFileId=null;persist();updateBadge();renderResumos();toast('🗑','Resumo excluído.');}
function delTrecho(rid,tid){const r=resumos.find(r=>r.id===rid);if(!r)return;r.trechos=r.trechos.filter(t=>t.id!==tid);persist();renderResumos();toast('✕','Trecho removido.');}
function playTrecho(rid,tid){const r=resumos.find(r=>r.id===rid);if(!r)return;const t=r.trechos.find(t=>t.id===tid);if(!t)return;synth.cancel();const u=new SpeechSynthesisUtterance(t.text);u.lang=document.getElementById('lang').value;u.rate=speed;synth.speak(u);toast('▶','Reproduzindo trecho...');}
function playAll(rid){const r=resumos.find(r=>r.id===rid);if(!r||!r.trechos.length)return;synth.cancel();const u=new SpeechSynthesisUtterance(r.trechos.map((t,i)=>`Trecho ${i+1}. ${t.text}`).join('. '));u.lang=document.getElementById('lang').value;u.rate=speed;synth.speak(u);toast('▶',`Ouvindo resumo de "${r.name}"`);}

function downloadResumo(id){
  const r=resumos.find(r=>r.id===id);if(!r)return;
  let content=`RESUMO — ${r.name}\nData: ${r.date}\n${'─'.repeat(50)}\n\n`;
  if(r.aiPoints&&r.aiPoints.length){content+=`✨ RESUMO INTELIGENTE (IA)\n\n`+r.aiPoints.map((p,i)=>`${i+1}. ${p}`).join('\n')+'\n\n'+'─'.repeat(50)+'\n\n';}
  if(r.trechos.length){content+=`📌 TRECHOS SELECIONADOS\n\n`+r.trechos.map((t,i)=>`[${i+1}]\n${t.text}`).join('\n\n');}
  const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([content],{type:'text/plain;charset=utf-8'}));
  a.download=`Resumo - ${r.name.replace(/\.pdf$/i,'')}.txt`;
  a.click();toast('⬇','Download iniciado!');
}
function copyResumo(id){
  const r=resumos.find(r=>r.id===id);if(!r)return;
  let content=`📓 *Resumo — ${r.name}*\n📅 ${r.date}\n\n`;
  if(r.aiPoints&&r.aiPoints.length){content+=`✨ *Pontos principais:*\n`+r.aiPoints.map((p,i)=>`${i+1}. ${p}`).join('\n')+'\n\n';}
  if(r.trechos.length){content+=`📌 *Trechos salvos:*\n`+r.trechos.map((t,i)=>`*${i+1}.* ${t.text}`).join('\n\n');}
  navigator.clipboard.writeText(content).then(()=>toast('📋','Copiado! Cole no WhatsApp 😊')).catch(()=>toast('⚠️','Erro ao copiar.'));
}

// ── Settings modal ──
function openSettings(){
  // Load saved keys into inputs
  document.getElementById('inp-eleven-key').value=localStorage.getItem('rtm_eleven_key')||'';
  document.getElementById('inp-eleven-voice').value=localStorage.getItem('rtm_eleven_voice')||'';
  document.getElementById('inp-anthropic-key').value=localStorage.getItem('rtm_anthropic_key')||'';
  const ov=document.getElementById('settings-overlay');
  ov.style.display='flex';
}
function closeSettings(){
  document.getElementById('settings-overlay').style.display='none';
}
function saveSettings(){
  const ek=document.getElementById('inp-eleven-key').value.trim();
  const ev=document.getElementById('inp-eleven-voice').value.trim();
  const ak=document.getElementById('inp-anthropic-key').value.trim();
  if(ek) localStorage.setItem('rtm_eleven_key',ek);
  else localStorage.removeItem('rtm_eleven_key');
  if(ev) localStorage.setItem('rtm_eleven_voice',ev);
  else localStorage.removeItem('rtm_eleven_voice');
  if(ak) localStorage.setItem('rtm_anthropic_key',ak);
  else localStorage.removeItem('rtm_anthropic_key');
  // Update runtime keys
  loadKeys();
  closeSettings();
  toast('💾','Configurações salvas!');
}
function loadKeys(){
  // Override the const values at runtime from localStorage
  window.ELEVEN_API_KEY_RT = localStorage.getItem('rtm_eleven_key')||ELEVEN_API_KEY;
  window.ELEVEN_VOICE_ID_RT = localStorage.getItem('rtm_eleven_voice')||ELEVEN_VOICE_ID;
  window.ANTHROPIC_API_KEY_RT = localStorage.getItem('rtm_anthropic_key')||ANTHROPIC_API_KEY;

  // Show indicator if ElevenLabs is configured
  const hasEleven = !!window.ELEVEN_API_KEY_RT;
  const hasAI = !!window.ANTHROPIC_API_KEY_RT;
  const settingsBtn = document.querySelector('[onclick="openSettings()"]');
  if(settingsBtn){
    settingsBtn.innerHTML = `<span class="icon">⚙️</span> Vozes & IA ${hasEleven?'<span style="color:var(--green);font-size:.7rem">● EL</span>':''} ${hasAI?'<span style="color:var(--purple);font-size:.7rem">● IA</span>':''}`;
  }
}

// ── Init ──
updateBadge();
loadKeys();
// Auto-open settings if no keys configured
if(!localStorage.getItem('rtm_eleven_key')&&!localStorage.getItem('rtm_anthropic_key')){
  // Don't auto-open, just show hint
}
</script>
</body>
</html>
