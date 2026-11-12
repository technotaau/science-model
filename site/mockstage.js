/* Gorakhpur mock stage: a practice mock-up of Avni's stall at the 24th national Vigyan Mela, Gorakhpur.
   A cartoon "virtual Avni" (not a photo or a copy of her face) stands beside her 3D model and points at
   each part. Two modes:
   1. her REAL recorded voice (Malerkotla, 10 Oct 2026) with subtitles — the pointer follows what she says;
   2. the full stage speech in the computer voice.
   Uses the diorama from model3d.js. three.js loads only when this page opens. */
(function () {
  "use strict";
  const $ = s => document.querySelector(s);
  let S, store, esc, started = false;
  const REC = window.AVNI_RECORDING || null; // filled by avni-recording.js

  // which model part each stage-speech section talks about (in order)
  const SECTION_PARTS = {
    "s-open": ["boards"], "s-sbm": ["swachh", "boards"], "s-waste": ["bins"], "s-plastic": ["bins", "boards"],
    "s-7r": ["boards"], "s-wte": ["biogas", "wte"], "s-green": ["city", "windmill", "train", "h2"],
    "s-water": ["mountain", "filter", "factory", "wwt"], "s-close": ["boards"]
  };

  function start() {
    if (started) return; started = true;
    const box = $("#msCanvas");
    $("#msInfo").innerHTML = '<p class="small muted">Loading the stage…</p>';
    window.Model3D.libs().then(build).catch(() => { $("#msInfo").innerHTML = "<p>Could not load the stage. Check the internet and open this page again.</p>"; started = false; });
  }

  function build() {
    const T = window.THREE, box = $("#msCanvas"), info = $("#msInfo");
    const W = () => box.clientWidth, H = () => Math.max(340, Math.min(600, Math.round(box.clientWidth * 0.68)));
    const renderer = new T.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1)); renderer.setSize(W(), H());
    box.innerHTML = ""; box.appendChild(renderer.domElement);
    const scene = new T.Scene(); scene.background = new T.Color(0xeef1f3);
    const cam = new T.PerspectiveCamera(42, W() / H(), 0.1, 300);
    const ctl = new T.OrbitControls(cam, renderer.domElement); ctl.enableDamping = true; ctl.maxPolarAngle = Math.PI / 2.05; ctl.minDistance = 4; ctl.maxDistance = 40;
    scene.add(new T.HemisphereLight(0xffffff, 0x9a8f80, 0.9));
    const sun = new T.DirectionalLight(0xffffff, 0.55); sun.position.set(5, 14, 10); scene.add(sun);
    const M = c => new T.MeshLambertMaterial({ color: c });
    const B = (w, h, d) => new T.BoxGeometry(w, h, d), C = (a, b, h, s) => new T.CylinderGeometry(a, b, h, s || 24);
    const mesh = (g, m, x, y, z, parent) => { const o = new T.Mesh(g, m && m.isMaterial ? m : M(m)); o.position.set(x, y, z); (parent || scene).add(o); return o; };
    const tex = window.Model3D.textTex;

    // ---- the hall: floor, white tent walls, banner ----
    mesh(B(40, 0.2, 30), 0xd9d4ca, 0, -0.1, 0);
    mesh(B(40, 12, 0.3), 0xfafafa, 0, 6, -9);
    mesh(B(0.3, 12, 30), 0xf4f4f4, -14, 6, 0); mesh(B(0.3, 12, 30), 0xf4f4f4, 14, 6, 0);
    for (let i = -3; i <= 3; i++) mesh(B(0.12, 12, 0.12), 0xcfcfcf, i * 4.5, 6, -8.8);
    mesh(new T.PlaneGeometry(16, 2.2), new T.MeshBasicMaterial({ map: tex(T, "24th Akhil Bharatiya Vigyan Mela · Gorakhpur\n27–29 November 2026 · practice mock-up", "#1f6f50", "#ffffff", 1024, 140, 44) }), 0, 9.2, -8.8);

    // ---- the stall: table with cloth, the model on top, category sign ----
    const stall = new T.Group(); stall.position.set(0, 0, -3); scene.add(stall);
    mesh(B(9.4, 2.4, 5.6), 0xe7e2f3, 0, 1.2, 0, stall);             // cloth skirt (light lavender, like the real stall)
    mesh(B(9.6, 0.1, 5.8), 0xffffff, 0, 2.45, 0, stall);            // table top
    const model = new T.Group(); model.scale.setScalar(0.66); model.position.set(0, 2.85, 0); stall.add(model);
    const D = window.Model3D.diorama(T, model);
    const sign = mesh(new T.PlaneGeometry(2.6, 1.4), new T.MeshBasicMaterial({ map: tex(T, "BAL VARG\nModel – Clean India Mission\nand Waste Management", "#ffffff", "#1d1d1d", 512, 280, 40), side: T.DoubleSide }), -6.2, 5.6, -0.6, stall);
    sign.rotation.y = 0.35;

    // ---- the judges' table ----
    const jt = new T.Group(); jt.position.set(-1, 0, 7.5); scene.add(jt);
    mesh(B(6, 0.12, 1.4), 0x8d6e63, 0, 1.6, 0, jt); mesh(B(5.8, 1.5, 0.08), 0x6d4c41, 0, 0.85, 0.65, jt);
    const judges = [];
    [[-1.8, 0x37474f], [0, 0x5d4037], [1.8, 0x455a64]].forEach(([x, col]) => {
      const j = new T.Group(); j.position.set(x, 0, 1.2); jt.add(j);
      mesh(B(0.9, 1.0, 0.6), col, 0, 2.0, 0, j);                    // body (sitting)
      const hd = mesh(new T.SphereGeometry(0.32, 20, 16), 0xc68a62, 0, 2.85, 0, j); judges.push(hd);
      mesh(B(0.5, 0.02, 0.35), 0xffffff, 0, 1.68, -0.6, j);          // score sheet
      mesh(B(1.0, 1.0, 1.0), 0x9e9e9e, 0, 0.9, 0.2, j);              // chair
    });

    // ---- virtual Avni: a simple cartoon figure in her school uniform ----
    const avni = new T.Group(); avni.position.set(5.5, 0, 0.4); scene.add(avni);
    const skin = 0xc98e66, white = 0xf7f7f7;
    mesh(C(0.12, 0.12, 1.3), white, -0.2, 0.65, 0, avni); mesh(C(0.12, 0.12, 1.3), white, 0.2, 0.65, 0, avni);    // legs (white socks/uniform)
    mesh(B(0.3, 0.14, 0.45), 0x212121, -0.2, 0.07, 0.08, avni); mesh(B(0.3, 0.14, 0.45), 0x212121, 0.2, 0.07, 0.08, avni); // shoes
    mesh(new T.ConeGeometry(0.75, 1.0, 24, 1, true), new T.MeshLambertMaterial({ color: white, side: T.DoubleSide }), 0, 1.75, 0, avni); // pleated skirt
    mesh(C(0.43, 0.45, 0.14), 0xc62828, 0, 2.28, 0, avni);           // red belt
    const torso = new T.Group(); torso.position.set(0, 2.3, 0); avni.add(torso);
    mesh(C(0.4, 0.44, 1.05), white, 0, 0.52, 0, torso);               // shirt
    mesh(B(0.42, 0.18, 0.05), 0xeeeeee, 0.16, 0.75, 0.42, torso);     // name badge
    const head = new T.Group(); head.position.set(0, 1.45, 0); torso.add(head);
    mesh(new T.SphereGeometry(0.42, 24, 20), skin, 0, 0, 0, head);
    const hair = mesh(new T.SphereGeometry(0.45, 24, 20, 0, Math.PI * 2, 0, Math.PI / 1.8), 0x1b1b1b, 0, 0.06, -0.03, head);
    hair.rotation.x = -0.25;
    mesh(new T.SphereGeometry(0.17, 16, 12), 0x1b1b1b, 0, -0.05, -0.45, head);                  // hair tied back
    mesh(C(0.07, 0.04, 0.8), 0x1b1b1b, 0, -0.45, -0.5, head);                                    // braid
    [-0.15, 0.15].forEach(x => mesh(new T.SphereGeometry(0.05, 12, 10), 0x1b1b1b, x, 0.05, 0.38, head)); // eyes
    const mouth = mesh(new T.SphereGeometry(0.07, 12, 10), 0x8e3b3b, 0, -0.17, 0.38, head); mouth.scale.set(1.4, 0.35, 0.5);
    const armL = new T.Group(); armL.position.set(-0.5, 0.95, 0); torso.add(armL);
    mesh(C(0.1, 0.09, 0.95), white, 0, -0.45, 0, armL); mesh(new T.SphereGeometry(0.1, 12, 10), skin, 0, -0.95, 0, armL);
    const armR = new T.Group(); armR.position.set(0.5, 0.95, 0); torso.add(armR);
    mesh(C(0.1, 0.09, 0.95), white, 0, -0.45, 0, armR); mesh(new T.SphereGeometry(0.1, 12, 10), skin, 0, -0.95, 0, armR);
    const stick = mesh(C(0.035, 0.05, 2.4), 0x7cb342, 0, -1.9, 0.0, armR);                   // green pointer stick, like in her video
    const tip = new T.Object3D(); tip.position.set(0, -3.1, 0); armR.add(tip);
    avni.rotation.y = -0.6;

    // ---- pointing ----
    const partPos = id => { const ms = D.pick.filter(m => m.userData.part === id); if (!ms.length) return null; const b = new T.Box3(); ms.forEach(m => b.expandByObject(m)); return b.getCenter(new T.Vector3()); };
    const glowOn = id => D.pick.forEach(m => { if (m.material.emissive) m.material.emissive.setHex(m.userData.part === id ? 0x775500 : 0); });
    let aim = null; // {pos} or null = talk to the judges
    function pointAt(id) { const p = id ? partPos(id) : null; aim = p; glowOn(id || ""); }
    const tmpQ = new T.Quaternion(), DOWN = new T.Vector3(0, -1, 0);
    const REST = -0.6; // standing beside the model, facing the judges
    const restArm = new T.Quaternion().setFromEuler(new T.Euler(-0.15, 0, 0.12));
    const angDiff = (a, b) => { let d = a - b; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI; return d; };

    // ---- cameras ----
    const VIEWS = { judge: [[1, 7.6, 15.5], [1.5, 3.2, -2]], audience: [[-10, 8, 15], [1, 3, -2]], close: [[10, 5.4, 5.5], [3, 3.2, -1.2]] };
    let fly = null;
    function view(k) { const v = VIEWS[k]; fly = { t0: performance.now(), dur: 900, fp: cam.position.clone(), ft: ctl.target.clone(), tp: new T.Vector3(...v[0]), tt: new T.Vector3(...v[1]) }; }
    cam.position.set(...VIEWS.judge[0]); ctl.target.set(...VIEWS.judge[1]); ctl.update();
    document.querySelectorAll("[data-msview]").forEach(b => b.onclick = () => view(b.dataset.msview));

    // ---- talking: her real recording, or the full speech in her AI voice (computer voice if that file is missing) ----
    let talking = 0, run = null, analyser = null, level = 0, clip = null;
    const sub = $("#msSub"), audio = $("#msAudio");
    const AI = window.AVNI_AI || null;
    const LABEL = { msRec: "▶ Avni's real voice", msTts: AI ? "▶ Full speech in Avni's voice (AI)" : "▶ Full speech (computer voice)" };
    function resetButtons() { Object.keys(LABEL).forEach(id => { const b = $("#" + id); if (b) b.textContent = LABEL[id]; }); }
    function stopAll() {
      if (run) { run.stop = true; run = null; }
      if (audio && !audio.paused) audio.pause();
      if (window.Voice) Voice.stopSpeaking();
      talking = 0; clip = null; pointAt(null); sub.textContent = ""; resetButtons();
    }
    function playClip(c, btn, card, camView) {
      if (clip === c && !audio.paused) { stopAll(); return; }
      stopAll();
      try {
        if (!analyser) { const ac = new (window.AudioContext || window.webkitAudioContext)(); const src = ac.createMediaElementSource(audio); analyser = ac.createAnalyser(); analyser.fftSize = 512; src.connect(analyser); analyser.connect(ac.destination); analyser.ac = ac; }
        if (analyser.ac.state === "suspended") analyser.ac.resume();
      } catch (e) { /* lip movement falls back to a simple wiggle */ }
      if (audio.getAttribute("src") !== c.src) audio.src = c.src;
      clip = c; audio.currentTime = 0; audio.play().catch(() => {}); talking = 1; view(camView);
      $("#" + btn).textContent = "⏹ Stop"; info.innerHTML = card;
    }
    audio.ontimeupdate = () => {
      if (!clip || !talking) return;
      const t = audio.currentTime, seg = clip.segments.find(s => t >= s.start && t < s.end);
      sub.textContent = seg ? seg.text : "";
      pointAt(seg && seg.part ? seg.part : null);
      if (seg && seg.section && info.dataset.sec !== seg.section) { info.dataset.sec = seg.section; const h = info.querySelector(".ms-sec"); if (h) h.textContent = seg.section; }
    };
    audio.onerror = () => { if (!clip) return; const wasAI = clip === AI; stopAll(); info.innerHTML = '<div class="m3d-card"><b>📶 This needs internet</b><p class="small">The ' + (wasAI ? "AI-voice speech" : "recording") + ' could not load. Connect to the internet and press ▶ again.</p></div>'; };
    audio.onended = () => { talking = 0; clip = null; pointAt(null); sub.textContent = ""; resetButtons(); view("judge"); };
    // 1. her real recording (Malerkotla)
    $("#msRec").onclick = () => { if (REC) playClip(REC, "msRec", '<div class="m3d-card"><b>🎙️ Avni\'s real voice</b><p class="small">Recorded at her stall in Malerkotla on 10 October 2026, where she won first prize. Watch where she points and read along.</p></div>', "close"); };
    // 2. the full stage speech in her AI voice
    $("#msTts").onclick = async () => {
      if (AI) {
        playClip(AI, "msTts", '<div class="m3d-card"><b>🤖 Full speech in Avni\'s voice (AI)</b> · <span class="ms-sec small"></span><p class="small">An AI voice made from Avni\'s own recording, with her family\'s permission, for practice. It is <b>not</b> a real recording of Avni. Pace: about ' + AI.wpm + ' words a minute — her target speed. <span class="tiny muted">Voice: XTTS-v2, <a href="https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt" target="_blank" rel="noopener">Coqui Public Model License</a> (non-commercial).</span></p></div>', "judge");
        return;
      }
      if (run) { stopAll(); return; }
      stopAll(); if (!window.Voice) return;
      const me = run = { stop: false }; $("#msTts").textContent = "⏹ Stop"; view("judge");
      for (const sec of S.stage.sections) {
        if (me.stop || $("#tab-mockstage").hidden) break;
        const parts = SECTION_PARTS[sec.id] || ["boards"];
        const chunks = String(sec.sample).replace(/\*/g, "").split(/\s\/\s/).map(x => x.trim()).filter(Boolean);
        info.innerHTML = '<div class="m3d-card"><b>' + esc(sec.title) + '</b><p class="small muted">Computer voice reading Avni\'s stage speech</p></div>';
        for (let i = 0; i < chunks.length; i++) {
          if (me.stop) break;
          pointAt(i === 0 && sec.id === "s-open" ? null : parts[Math.min(parts.length - 1, Math.floor(i / Math.max(1, Math.ceil(chunks.length / parts.length))))]);
          sub.textContent = chunks[i]; talking = 2;
          await Voice.speak(chunks[i]);
        }
      }
      if (run === me) { run = null; talking = 0; pointAt(null); sub.textContent = ""; resetButtons(); }
    };
    resetButtons();

    // ---- animation ----
    const buf = new Uint8Array(256);
    let last = performance.now();
    (function loop() {
      if (!document.body.contains(renderer.domElement)) return;
      requestAnimationFrame(loop);
      const now = performance.now(), dt = Math.min(0.05, (now - last) / 1000); last = now;
      if ($("#tab-mockstage").hidden) { if (talking) stopAll(); return; }
      D.blades.rotation.z += 0.03; D.turbine.rotation.y += 0.06;
      // mouth: real loudness when her recording plays, a gentle wiggle for the computer voice
      if (talking === 1 && analyser && clip) { analyser.getByteTimeDomainData(buf); let m = 0; for (let i = 0; i < buf.length; i++) m = Math.max(m, Math.abs(buf[i] - 128)); level += ((m / 50) - level) * 0.4; }
      else level += ((talking ? 0.5 + 0.5 * Math.sin(now / 70) : 0) - level) * 0.3;
      mouth.scale.y = 0.35 + Math.min(1.2, level) * 0.9;
      // body: breathe; turn to the part (or to the judges) and lift the pointer
      torso.position.y = 2.3 + Math.sin(now / 600) * 0.015;
      // body turns half-way to the part (so the judges still see her face); the arm and pointer aim exactly
      let wantBody = REST;
      if (aim) { const a = Math.atan2(aim.x - avni.position.x, aim.z - avni.position.z); wantBody = REST + angDiff(a, REST) * 0.55; }
      avni.rotation.y += angDiff(wantBody, avni.rotation.y) * Math.min(1, dt * 3);
      let wantQ = restArm;
      if (aim) {
        armR.parent.updateMatrixWorld(true);
        const shoulder = armR.getWorldPosition(new T.Vector3());
        const dirW = aim.clone().sub(shoulder).normalize();
        const inv = armR.parent.getWorldQuaternion(new T.Quaternion()).invert();
        const dirL = dirW.applyQuaternion(inv);
        wantQ = tmpQ.setFromUnitVectors(DOWN, dirL);
      }
      armR.quaternion.slerp(wantQ, Math.min(1, dt * 4));
      head.rotation.y = aim ? -0.35 : Math.sin(now / 1500) * 0.15; // glances at the part, or around at the judges
      judges.forEach((h, i) => { h.rotation.y = Math.sin(now / 1800 + i) * 0.2; });
      if (fly) { const k = Math.min(1, (now - fly.t0) / fly.dur), e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2; cam.position.lerpVectors(fly.fp, fly.tp, e); ctl.target.lerpVectors(fly.ft, fly.tt, e); if (k >= 1) fly = null; }
      ctl.update(); renderer.render(scene, cam);
    })();
    window.addEventListener("resize", () => { renderer.setSize(W(), H()); cam.aspect = W() / H(); cam.updateProjectionMatrix(); });
    info.innerHTML = '<p class="small">Choose a view, then press ▶. Drag to look around, pinch or scroll to zoom.</p>';
    if (!REC) { $("#msRec").disabled = true; }
    window.MockStage.stop = stopAll;
  }

  function render() {
    const R = window.AVNI_RECORDING;
    const box = $("#msCoach"); if (box && R && R.coach) box.innerHTML = R.coach;
    start();
  }
  window.MockStage = { init(o) { S = o.S; store = o.store; esc = o.esc; }, render, stop() {} };
})();
