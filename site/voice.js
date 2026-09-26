/* Voice engine (text-to-speech + speech recognition) and the Voice Coach tab.
   Content comes from content.js; you normally don't need to edit this file. */
(function () {
  "use strict";
  const S = window.SITE;
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const store = {
    get(k, d) { try { const v = localStorage.getItem("coach:" + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("coach:" + k, JSON.stringify(v)); } catch (e) {} }
  };
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const wait = ms => new Promise(r => setTimeout(r, ms));

  // =====================================================================
  // ENGINE
  // =====================================================================
  const synth = window.speechSynthesis;
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const settings = Object.assign({ voice: "", rate: 0.9 }, store.get("voiceSettings", {}));
  let voices = [];
  function loadVoices() {
    if (!synth) return;
    voices = synth.getVoices().filter(v => /^en/i.test(v.lang));
    if (!voices.length) voices = synth.getVoices();
    renderVoicePicker();
  }
  function pickVoice() {
    if (!voices.length) return null;
    return voices.find(v => v.voiceURI === settings.voice) ||
      voices.find(v => /en[-_]IN/i.test(v.lang)) ||
      voices.find(v => /en[-_]GB/i.test(v.lang)) || voices[0];
  }
  // Clean text for speaking: remove *stress* marks, emojis and brackets like (press)
  function clean(t) {
    return String(t).replace(/\*/g, "").replace(/\((?:press|activate)\)/gi, "")
      .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{2190}-\u{21FF}]/gu, "")
      .replace(/→/g, " to ").replace(/↔/g, " to ").replace(/\s+/g, " ").trim();
  }
  let speakToken = 0;
  function speak(text, opts) {
    opts = opts || {};
    return new Promise(resolve => {
      if (!synth) { resolve(); return; }
      const t = clean(text);
      if (!t) { resolve(); return; }
      const u = new SpeechSynthesisUtterance(t);
      const v = pickVoice();
      if (v) { u.voice = v; u.lang = v.lang; } else u.lang = "en-IN";
      u.rate = (opts.rate || settings.rate);
      u.pitch = 1;
      let done = false;
      const fin = () => { if (!done) { done = true; clearInterval(keep); resolve(); } };
      u.onend = fin; u.onerror = fin;
      // Chrome sometimes stalls long utterances; nudge it
      const keep = setInterval(() => { if (!synth.speaking) fin(); }, 1000);
      synth.speak(u);
    });
  }
  function stopSpeaking() { speakToken++; if (synth) synth.cancel(); }
  // Split a sample line at the " / " pause marks
  function chunks(sample) { return String(sample).split(/\s\/\s|\s\/$|^\/\s/).map(s => s.trim()).filter(Boolean); }
  // Speak a sample with real pauses where "/" is written. onChunk(i) highlights text.
  async function speakSample(sample, onChunk) {
    stopSpeaking();
    const my = ++speakToken;
    const parts = chunks(sample);
    for (let i = 0; i < parts.length; i++) {
      if (my !== speakToken) return false;
      if (onChunk) onChunk(i);
      await speak(parts[i]);
      if (my !== speakToken) return false;
      await wait(380);
    }
    if (onChunk) onChunk(-1);
    return true;
  }
  // Render a sample as clickable chunks so the current chunk can light up
  function sampleHTML(sample) {
    return chunks(sample).map((c, i) =>
      '<span class="chunk" data-c="' + i + '">' + esc(c).replace(/\*([^*]+)\*/g, "<strong>$1</strong>") + "</span>").join(' <span class="pause">/</span> ');
  }
  function highlighter(root) {
    return i => $$(".chunk", root).forEach(el => el.classList.toggle("now", +el.dataset.c === i));
  }

  // Listen once. Resolves with the final transcript after `silence` ms with no new words.
  function listen(opts) {
    opts = opts || {};
    return new Promise(resolve => {
      if (!SR) { resolve(""); return; }
      const r = new SR();
      r.lang = "en-IN"; r.continuous = true; r.interimResults = true;
      let finalText = "", lastInterim = "", timer = null, ended = false, heard = false;
      const silence = opts.silence || 2500, maxMs = opts.maxMs || 90000, startWait = opts.startWait || 8000;
      const finish = () => { if (ended) return; ended = true; clearTimeout(timer); clearTimeout(maxT); try { r.stop(); } catch (e) {} resolve((finalText + " " + lastInterim).trim()); };
      const arm = ms => { clearTimeout(timer); timer = setTimeout(finish, ms); };
      const maxT = setTimeout(finish, maxMs);
      r.onresult = e => {
        heard = true; lastInterim = "";
        for (let i = e.resultIndex; i < e.results.length; i++) {
          if (e.results[i].isFinal) finalText += e.results[i][0].transcript + " ";
          else lastInterim += e.results[i][0].transcript;
        }
        if (opts.onText) opts.onText((finalText + lastInterim).trim());
        arm(silence);
      };
      r.onerror = () => finish();
      r.onend = () => { if (!ended) { if (heard) finish(); else { try { r.start(); } catch (e) { finish(); } } } };
      listen.current = { stop: finish };
      try { r.start(); arm(startWait); } catch (e) { finish(); }
    });
  }
  function stopListening() { if (listen.current) listen.current.stop(); }

  // Word-overlap similarity 0..1 (how many target words were said)
  const norm = s => clean(s).toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);
  function similarity(target, said) {
    const t = norm(target), s = new Set(norm(said));
    if (!t.length) return 0;
    const soft = w => w.replace(/(ing|ed|es|s)$/, "");
    const ss = new Set(Array.from(s).map(soft));
    return t.filter(w => s.has(w) || ss.has(soft(w))).length / t.length;
  }

  window.Voice = { speak, speakSample, stopSpeaking, listen, stopListening, similarity, sampleHTML, highlighter, clean,
    canSpeak: !!synth, canListen: !!SR };

  // =====================================================================
  // VOICE COACH TAB
  // =====================================================================
  function supportNote() {
    const parts = [];
    parts.push(synth ? "✅ The website can speak to you." : "❌ This browser cannot speak. Please use Chrome.");
    parts.push(SR ? "✅ The website can hear you." : "⚠️ This browser cannot hear you. Use Google Chrome or Microsoft Edge (on a laptop or Android phone) for the listening features.");
    $("#vSupport").innerHTML = parts.join("<br>");
  }
  function renderVoicePicker() {
    const sel = $("#vVoice");
    if (!sel) return;
    const cur = pickVoice();
    if (!voices.length) { sel.innerHTML = "<option>Default voice</option>"; return; }
    sel.innerHTML = voices.map(v => '<option value="' + esc(v.voiceURI) + '"' + (cur && v.voiceURI === cur.voiceURI ? " selected" : "") + ">" + esc(v.name + " (" + v.lang + ")") + "</option>").join("");
  }
  function initSettings() {
    $("#vRate").value = settings.rate;
    $("#vRateVal").textContent = settings.rate + "×";
    $("#vVoice").onchange = e => { settings.voice = e.target.value; store.set("voiceSettings", settings); };
    $("#vRate").oninput = e => { settings.rate = +e.target.value; $("#vRateVal").textContent = settings.rate + "×"; store.set("voiceSettings", settings); };
    $("#vTest").onclick = () => speak("Jai Hind, Ma'am. I am Avni Choudhary, and my topic is Clean India Mission and Waste Management.");
    if (synth) { loadVoices(); synth.onvoiceschanged = loadVoices; }
    supportNote();
  }
  function initSubtabs() {
    $$("#vSubtabs button").forEach(b => b.addEventListener("click", () => {
      stopSpeaking(); stopListening();
      $$("#vSubtabs button").forEach(x => x.classList.toggle("active", x === b));
      $$(".vpane").forEach(p => { p.hidden = p.id !== b.dataset.pane; });
    }));
  }

  // ---------- 1. Listen & Repeat ----------
  function allSamples() {
    const out = [];
    S.quotes.forEach((q, i) => out.push({ label: "Quote " + (i + 1), text: q }));
    S.presentation.forEach(p => {
      const c = p.comp && S.components.find(x => x.id === p.comp);
      const t = p.sample && !/^\(/.test(p.sample) ? p.sample : (c && c.sample);
      if (t) out.push({ label: "Walkthrough — " + p.title, text: t });
    });
    return out;
  }
  function initListen() {
    const samples = allSamples();
    const sel = $("#lsSelect");
    sel.innerHTML = samples.map((s, i) => '<option value="' + i + '">' + esc(s.label) + "</option>").join("");
    const show = () => {
      stopSpeaking();
      $("#lsText").innerHTML = sampleHTML(samples[+sel.value].text);
      $("#lsResult").innerHTML = "";
    };
    sel.onchange = show; show();
    $("#lsPlay").onclick = () => speakSample(samples[+sel.value].text, highlighter($("#lsText")));
    $("#lsStop").onclick = () => { stopSpeaking(); stopListening(); highlighter($("#lsText"))(-1); };
    $("#lsShadow").onclick = async () => {
      if (!SR) { $("#lsResult").innerHTML = '<p class="sec ask">Repeat practice needs Chrome or Edge. You can still press ▶ Listen and repeat aloud yourself.</p>'; return; }
      stopSpeaking();
      const my = ++speakToken;
      const parts = chunks(samples[+sel.value].text);
      const hl = highlighter($("#lsText"));
      const res = [];
      const out = $("#lsResult");
      out.innerHTML = '<ol class="shadow-list" id="shList"></ol>';
      for (let i = 0; i < parts.length; i++) {
        if (my !== speakToken) return;
        hl(i);
        await speak(parts[i]);
        if (my !== speakToken) return;
        const li = document.createElement("li"); li.className = "now";
        li.innerHTML = '<span class="listening">Your turn — repeat</span>';
        $("#shList").appendChild(li);
        const said = await listen({ silence: 1400, startWait: 6000, maxMs: 20000 });
        const sim = similarity(parts[i], said);
        res.push(sim);
        li.className = "";
        li.innerHTML = (sim >= .7 ? "✅" : sim >= .4 ? "🟡" : "🔁") + " <b>" + Math.round(sim * 100) + "%</b> — " + esc(clean(parts[i])) +
          '<br><span class="small muted">I heard: ' + esc(said || "(nothing)") + "</span>";
      }
      hl(-1);
      const avg = res.length ? Math.round(100 * res.reduce((a, b) => a + b, 0) / res.length) : 0;
      out.insertAdjacentHTML("afterbegin", '<div class="sec ' + (avg >= 70 ? "ok" : "ask") + '"><h4>' + (avg >= 70 ? "✅ Clear and correct!" : "🔁 Try once more, a little slower") + " — " + avg + "% of the words matched</h4>" +
        '<span class="small">Speak clearly with pauses. This score is only a rough guide — the computer sometimes mishears Indian names.</span></div>');
    };
  }

  // ---------- 2. Pronunciation ----------
  function initPronounce() {
    $("#prList").innerHTML = S.pronounce.map((w, i) =>
      '<div class="word"><b>' + esc(w.word) + '</b><div class="hint">' + esc(w.hint) + "</div>" +
      '<div class="viva-row"><button class="btn small ghost" data-say="' + i + '">🔊 Hear</button>' +
      (SR ? '<button class="btn small act" data-try="' + i + '">🎤 Say it</button>' : "") + "</div>" +
      '<div class="res" id="pr-' + i + '"></div></div>').join("");
    $$("#prList [data-say]").forEach(b => b.onclick = () => { stopSpeaking(); speak(S.pronounce[+b.dataset.say].word, { rate: 0.75 }); });
    $$("#prList [data-try]").forEach(b => b.onclick = async () => {
      const i = +b.dataset.try, w = S.pronounce[i];
      stopSpeaking();
      $("#pr-" + i).innerHTML = '<span class="listening">Listening…</span>';
      const said = await listen({ silence: 1300, startWait: 5000, maxMs: 10000 });
      const sim = similarity(w.word, said);
      $("#pr-" + i).innerHTML = (sim >= .6 ? '<span class="pill ok">✅ Clear</span>' : '<span class="pill ask">🔁 Try again, slowly</span>') +
        ' <span class="muted">I heard: “' + esc(said || "nothing") + "”</span>";
    });
  }

  // ---------- 3. Ask by voice ----------
  const STOP = new Set("a an the is are was were be of to in on for and or what why how which who when where does do did can could would should will it its this that these those your my i you me we us with by as at from about into than then so if not no yes please tell explain give name mean means".split(" "));
  const stem = w => w.replace(/(ing|ed|es|s)$/, "");
  const toks = s => norm(s).filter(w => !STOP.has(w) && w.length > 1).map(stem);
  let docs = null;
  function buildDocs() {
    docs = [];
    S.viva.forEach(v => docs.push({ title: v.q, body: v.points.join(". "), speak: v.points.join(". "), where: "Viva — " + v.topic, link: "#viva" }));
    S.components.forEach(c => {
      const all = [].concat(c.say || [], c.how || [], c.deeper || []);
      if (!all.length) return;
      docs.push({ title: c.name, body: c.inModel + " " + all.join(" "), speak: (c.say || []).concat(c.how || []).join(". "), where: "Model — " + c.name, link: "#model/" + c.id, list: all });
    });
    (S.binGuide || []).forEach(b => docs.push({ title: b.name + " bin " + b.stream, body: b.examples + ". " + b.goesTo, speak: b.name + " bin is for " + b.stream + ", for example " + b.examples + ". It goes to " + b.goesTo + "." + (b.status === "confirm" ? " Please confirm this with Rajnish Ma'am." : ""), where: "Dustbin colour guide", link: "#model/bins" }));
    docs.forEach(d => { d.tt = toks(d.title); d.tb = toks(d.body); });
  }
  function search(q) {
    if (!docs) buildDocs();
    const qt = toks(q);
    if (!qt.length) return [];
    return docs.map(d => {
      let s = 0;
      qt.forEach(w => { if (d.tt.includes(w)) s += 3; if (d.tb.includes(w)) s += 1; });
      return { d, s: s / qt.length };
    }).filter(x => x.s > 0.6).sort((a, b) => b.s - a.s).slice(0, 3);
  }
  function initAsk() {
    const run = () => {
      const q = $("#akInput").value.trim();
      if (!q) return;
      const res = search(q);
      if (!res.length) {
        $("#akResult").innerHTML = '<div class="sec ask"><h4>🤔 I couldn\'t find this in your notes</h4>Try other words (for example “biogas”, “fuel cell”, “red bin”), or ask your mentor in the chat.</div>';
        speak("Sorry, I couldn't find this in your notes. Try asking with different words.");
        return;
      }
      const top = res[0].d;
      $("#akResult").innerHTML = '<div class="card answer"><div class="small muted">From your notes · ' + esc(top.where) + '</div><h3 style="margin:.2em 0">' + esc(top.title) + "</h3>" +
        (top.list ? "<ul>" + top.list.map(x => "<li>" + esc(x) + "</li>").join("") + "</ul>" : "<p>" + esc(top.body) + "</p>") +
        '<div class="viva-row"><button class="btn small ghost" id="akSpeak">🔊 Read again</button><button class="btn small stop" id="akStop">■ Stop</button><a class="btn small act" href="' + top.link + '">Open</a></div></div>' +
        (res.length > 1 ? '<p class="small"><b>Also related:</b> ' + res.slice(1).map(r => '<a href="' + r.d.link + '">' + esc(r.d.title) + "</a>").join(" · ") + "</p>" : "");
      $("#akSpeak").onclick = () => { stopSpeaking(); speak(top.speak); };
      $("#akStop").onclick = stopSpeaking;
      stopSpeaking(); speak(top.speak);
    };
    $("#akGo").onclick = run;
    $("#akInput").addEventListener("keydown", e => { if (e.key === "Enter") run(); });
    if (SR) {
      $("#akMic").onclick = async () => {
        stopSpeaking();
        $("#akMic").classList.add("on"); $("#akMic").textContent = "● Listening…";
        const said = await listen({ silence: 1500, startWait: 6000, maxMs: 15000, onText: t => { $("#akInput").value = t; } });
        $("#akMic").classList.remove("on"); $("#akMic").textContent = "🎤 Ask by voice";
        if (said) { $("#akInput").value = said; run(); }
      };
    } else $("#akMic").hidden = true;
  }

  // ---------- 4. Record & check (volume, pace, filler words) ----------
  function initRecorder() {
    let rec = null, t0 = 0, tick = null, audioCtx = null, raf = 0, levels = [], fillerRe = null, count = 0, transcript = "", srRun = null;
    fillerRe = new RegExp("\\b(" + S.fillers.map(f => f.replace(/\s+/g, "\\s+")).join("|") + ")\\b", "gi");
    const mmss = sec => String(Math.floor(sec / 60)).padStart(2, "0") + ":" + String(Math.floor(sec % 60)).padStart(2, "0");
    function liveSR() {
      if (!SR) return null;
      const r = new SR(); r.lang = "en-IN"; r.continuous = true; r.interimResults = true;
      let fin = "", active = true;
      r.onresult = e => {
        let interim = "";
        for (let i = e.resultIndex; i < e.results.length; i++) {
          if (e.results[i].isFinal) fin += e.results[i][0].transcript + " "; else interim += e.results[i][0].transcript;
        }
        transcript = (fin + interim).trim();
        const words = transcript ? transcript.split(/\s+/).length : 0;
        const min = (Date.now() - t0) / 60000;
        $("#rcWpm").textContent = min > .1 ? Math.round(words / min) : "–";
        $("#rcLive").innerHTML = esc(transcript).replace(fillerRe, '<span class="filler">$1</span>');
      };
      r.onend = () => { if (active) { try { r.start(); } catch (e) {} } };
      try { r.start(); } catch (e) {}
      return { stop() { active = false; try { r.stop(); } catch (e) {} } };
    }
    $("#rcBtn").onclick = async () => {
      if (rec && rec.state === "recording") { rec.stop(); return; }
      if (!navigator.mediaDevices || !window.MediaRecorder) { $("#rcNote").textContent = "Recording is not supported in this browser. Try Chrome."; return; }
      let stream;
      try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); }
      catch (e) { $("#rcNote").textContent = "Microphone permission was blocked. Allow the microphone and try again."; return; }
      stopSpeaking();
      const chunksA = []; levels = []; transcript = "";
      rec = new MediaRecorder(stream);
      rec.ondataavailable = e => { if (e.data.size) chunksA.push(e.data); };
      // volume meter
      try {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const an = audioCtx.createAnalyser(); an.fftSize = 1024;
        audioCtx.createMediaStreamSource(stream).connect(an);
        const buf = new Uint8Array(an.fftSize);
        const loop = () => {
          an.getByteTimeDomainData(buf);
          let sum = 0; for (let i = 0; i < buf.length; i++) { const x = (buf[i] - 128) / 128; sum += x * x; }
          const lvl = Math.min(100, Math.round(Math.sqrt(sum / buf.length) * 400));
          $("#rcMeter").style.width = lvl + "%";
          $("#rcVolHint").textContent = lvl < 6 ? "…" : lvl < 20 ? "🔈 A little louder" : lvl <= 75 ? "🔊 Good, clear volume" : "📢 Too loud — relax";
          if (lvl >= 6) levels.push(lvl);
          raf = requestAnimationFrame(loop);
        };
        loop();
      } catch (e) {}
      rec.onstop = () => {
        stream.getTracks().forEach(t => t.stop());
        clearInterval(tick); cancelAnimationFrame(raf);
        if (audioCtx) audioCtx.close();
        if (srRun) srRun.stop();
        $("#rcMeter").style.width = "0";
        const secs = (Date.now() - t0) / 1000;
        const url = URL.createObjectURL(new Blob(chunksA, { type: rec.mimeType || "audio/webm" }));
        count++;
        const words = transcript ? transcript.split(/\s+/).length : 0;
        const wpm = SR && secs > 6 ? Math.round(words / (secs / 60)) : null;
        const fills = (transcript.match(fillerRe) || []).length;
        const avgVol = levels.length ? Math.round(levels.reduce((a, b) => a + b, 0) / levels.length) : 0;
        const stat = (v, l, cls) => '<div class="stat ' + cls + '"><b>' + v + "</b>" + l + "</div>";
        const li = document.createElement("li");
        li.innerHTML = "<div style='width:100%'><b>Take " + count + "</b> · " + mmss(secs) +
          '<div class="stats">' +
          (wpm !== null ? stat(wpm, "words/min", wpm < 90 ? "warn" : wpm <= 140 ? "good" : "badv") : "") +
          (SR ? stat(fills, "filler words", fills <= 2 ? "good" : fills <= 5 ? "warn" : "badv") : "") +
          stat(avgVol, "avg volume", avgVol < 20 ? "warn" : avgVol <= 75 ? "good" : "badv") + "</div>" +
          '<audio controls src="' + url + '"></audio> <a href="' + url + '" download="practice-take-' + count + '.webm">Save</a>' +
          '<p class="small">' + feedback(wpm, fills, avgVol) + "</p></div>";
        $("#rcList").prepend(li);
        $("#rcBtn").textContent = "● Start recording"; $("#rcBtn").classList.remove("on");
      };
      rec.start(); t0 = Date.now();
      $("#rcBtn").textContent = "■ Stop"; $("#rcBtn").classList.add("on");
      $("#rcLive").textContent = ""; $("#rcWpm").textContent = "–";
      tick = setInterval(() => { $("#rcTimer").textContent = mmss((Date.now() - t0) / 1000); }, 250);
      srRun = liveSR();
    };
    function feedback(wpm, fills, vol) {
      const tips = [];
      if (wpm !== null) tips.push(wpm < 90 ? "Pace: a little slow — keep it flowing." : wpm <= 140 ? "Pace: good 👍" : "Pace: too fast — add pauses at the “/” marks.");
      if (SR) tips.push(fills <= 2 ? "Very few filler words 👍" : "Try replacing “um/like” with a short silent pause.");
      tips.push(vol < 20 ? "Volume: speak a bit louder, to the farthest judge." : vol <= 75 ? "Volume: clear 👍" : "Volume: a little softer, you don't need to shout.");
      return tips.join(" ");
    }
  }

  // ---------- 5. Mirror (camera) ----------
  function initMirror() {
    let stream = null, promptT = null, vrec = null;
    const stopAll = () => {
      if (vrec && vrec.state === "recording") vrec.stop();
      if (stream) stream.getTracks().forEach(t => t.stop());
      stream = null; clearInterval(promptT);
      $("#mrVideo").srcObject = null; $("#mrWrap").hidden = true;
      $("#mrStart").textContent = "📷 Start mirror"; $("#mrRec").hidden = true;
    };
    $("#mrStart").onclick = async () => {
      if (stream) { stopAll(); return; }
      try { stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: true }); }
      catch (e) { $("#mrNote").textContent = "Camera permission was blocked. Allow the camera and try again."; return; }
      const v = $("#mrVideo"); v.srcObject = stream; v.muted = true; v.play();
      $("#mrWrap").hidden = false; $("#mrStart").textContent = "■ Stop mirror"; $("#mrRec").hidden = !window.MediaRecorder;
      let i = 0; $("#mrPrompt").textContent = S.mirrorPrompts[0];
      promptT = setInterval(() => { i = (i + 1) % S.mirrorPrompts.length; $("#mrPrompt").textContent = S.mirrorPrompts[i]; }, 4500);
    };
    $("#mrRec").onclick = () => {
      if (vrec && vrec.state === "recording") { vrec.stop(); return; }
      const parts = [];
      vrec = new MediaRecorder(stream);
      vrec.ondataavailable = e => { if (e.data.size) parts.push(e.data); };
      vrec.onstop = () => {
        const url = URL.createObjectURL(new Blob(parts, { type: vrec.mimeType || "video/webm" }));
        const li = document.createElement("li");
        li.innerHTML = '<video controls src="' + url + '" style="max-width:320px"></video> <a href="' + url + '" download="mirror-practice.webm">Save</a>';
        $("#mrList").prepend(li);
        $("#mrRec").textContent = "● Record video"; $("#mrRec").classList.remove("on");
      };
      vrec.start();
      $("#mrRec").textContent = "■ Stop video"; $("#mrRec").classList.add("on");
    };
  }

  // ---------- 6. Warm-up ----------
  function initWarmup() {
    let running = false;
    $("#wuStart").onclick = async () => {
      if (running) { running = false; stopSpeaking(); $("#wuStart").textContent = "▶ Start 1-minute warm-up"; $("#wuLine").textContent = ""; $("#wuCircle").className = "breath"; $("#wuCircle").textContent = ""; return; }
      running = true; $("#wuStart").textContent = "■ Stop";
      const my = ++speakToken;
      for (const step of S.warmup) {
        if (!running || my !== speakToken) return;
        $("#wuLine").textContent = step.say;
        $("#wuCircle").className = "breath" + (step.breathe === "in" ? " in" : step.breathe === "out" ? " out" : "");
        $("#wuCircle").textContent = step.breathe === "in" ? "Breathe in" : step.breathe === "out" ? "Breathe out" : step.breathe === "hold" ? "Hold" : "";
        const t0 = Date.now();
        await speak(step.say, { rate: step.breathe ? 0.8 : settings.rate });
        const left = step.secs * 1000 - (Date.now() - t0);
        if (left > 0) await wait(left);
      }
      running = false; $("#wuStart").textContent = "▶ Start 1-minute warm-up"; $("#wuCircle").className = "breath";
    };
  }

  // ---------- init ----------
  function init() {
    if (!$("#tab-voice")) return;
    initSettings(); initSubtabs(); initListen(); initPronounce(); initAsk(); initRecorder(); initMirror(); initWarmup();
    $("#voiceTips").innerHTML = S.voiceTips.map(t => "<li>" + esc(t) + "</li>").join("");
    $("#exprTips").innerHTML = S.expressionTips.map(t => "<li>" + esc(t) + "</li>").join("");
  }
  window.Voice.init = init;
})();
