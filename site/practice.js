/* 🏟️ Fair-day practice room: speech with crowd noise, surprise judge questions, and an optional camera mirror.
   🗣️ Explain it 3 ways: explain a part to a 5-year-old, a classmate and a scientist judge.
   Nothing from the camera or microphone is recorded or saved. */
(function () {
  "use strict";
  const $ = s => document.querySelector(s), $$ = s => Array.from(document.querySelectorAll(s));
  let S, store, esc;
  const V = () => window.Voice;
  const award = (n, why) => { if (window.Fun && Fun.award) Fun.award(n, why); };

  // ======================= crowd noise (made in the browser, no sound files) =======================
  let ac = null, crowd = null;
  function noiseBuffer(ctx) {
    const b = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate), d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return b;
  }
  function startCrowd(level) {
    stopCrowd();
    ac = ac || new (window.AudioContext || window.webkitAudioContext)();
    if (ac.state === "suspended") ac.resume();
    const buf = noiseBuffer(ac), master = ac.createGain(); master.gain.value = 0; master.connect(ac.destination);
    const vol = [0, 0.18, 0.32, 0.5][level] || 0.3;
    master.gain.setTargetAtTime(vol, ac.currentTime, 0.8);
    const nodes = [];
    const src = () => { const s = ac.createBufferSource(); s.buffer = buf; s.loop = true; s.start(ac.currentTime + Math.random()); nodes.push(s); return s; };
    // low hum of a big hall
    const bed = src(), lp = ac.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 500;
    const bg = ac.createGain(); bg.gain.value = 0.5; bed.connect(lp).connect(bg).connect(master);
    // many people talking: noise shaped like voices, getting louder and softer
    const voices = [];
    for (let i = 0; i < 6; i++) {
      const s = src(), bp = ac.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = 350 + Math.random() * 1600; bp.Q.value = 2.5;
      const g = ac.createGain(); g.gain.value = 0; s.connect(bp).connect(g).connect(master); voices.push({ g, bp });
    }
    const timer = setInterval(() => {
      const t = ac.currentTime;
      voices.forEach(v => { v.g.gain.setTargetAtTime(Math.random() < 0.6 ? 0.2 + Math.random() * 0.8 : 0.05, t, 0.08); v.bp.frequency.setTargetAtTime(300 + Math.random() * 1800, t, 0.3); });
      if (level >= 2 && Math.random() < 0.06) clap(master); // someone clapping at another stall
    }, 180);
    crowd = { master, nodes, timer, vol };
  }
  function clap(out) {
    const n = 3 + Math.floor(Math.random() * 6), buf = noiseBuffer(ac);
    for (let i = 0; i < n; i++) {
      const s = ac.createBufferSource(); s.buffer = buf; const hp = ac.createBiquadFilter(); hp.type = "highpass"; hp.frequency.value = 1200;
      const g = ac.createGain(), t = ac.currentTime + i * (0.22 + Math.random() * 0.08);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.5, t + 0.005); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);
      s.connect(hp).connect(g).connect(out); s.start(t, Math.random()); s.stop(t + 0.1);
    }
  }
  function duckCrowd(on) { if (crowd && ac) crowd.master.gain.setTargetAtTime(on ? crowd.vol * 0.25 : crowd.vol, ac.currentTime, 0.3); }
  function stopCrowd() {
    if (!crowd) return;
    clearInterval(crowd.timer);
    const c = crowd; crowd = null;
    try { c.master.gain.setTargetAtTime(0, ac.currentTime, 0.2); } catch (e) {}
    setTimeout(() => { c.nodes.forEach(n => { try { n.stop(); } catch (e) {} }); try { c.master.disconnect(); } catch (e) {} }, 800);
  }

  // ======================= camera mirror =======================
  let cam = null, camTip = null;
  const TIPS = ["👀 Look up at the judges", "😊 Smile!", "✋ Point at the part you are talking about", "🐢 Slow down a little", "🧍 Stand straight, feet still", "🔊 Speak loudly: the hall is noisy", "⏸️ Pause after important words", "👀 Look left, centre, right"];
  async function startCam() {
    if (cam) return;
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { $("#prCamNote").textContent = "The camera is not supported in this browser."; $("#prCam").checked = false; return; }
    try {
      const s = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: false });
      if (!$("#prCam").checked || $("#tab-practice").hidden) { s.getTracks().forEach(t => t.stop()); return; }
      cam = s; const v = $("#prVideo"); v.srcObject = s; v.muted = true; v.play().catch(() => {});
      $("#prMirror").hidden = false; $("#prCamNote").textContent = "";
      let i = 0; $("#prTip").textContent = TIPS[0];
      camTip = setInterval(() => { i = (i + 1) % TIPS.length; $("#prTip").textContent = TIPS[i]; }, 5000);
    } catch (e) { $("#prCamNote").textContent = "Camera permission was blocked. Allow the camera and try again."; $("#prCam").checked = false; }
  }
  function stopCam() {
    if (cam) cam.getTracks().forEach(t => t.stop());
    cam = null; clearInterval(camTip);
    const v = $("#prVideo"); if (v) v.srcObject = null; const m = $("#prMirror"); if (m) m.hidden = true;
  }

  // ======================= 🏟️ practice room =======================
  let run = null;
  const plain = t => String(t).replace(/\*/g, "").split(/\s\/\s|\s\/$|^\/\s/).map(x => x.trim()).filter(Boolean);
  function renderRoom() {
    const best = store.get("hallRuns", 0);
    $("#practiceRoom").innerHTML =
      '<h2>🏟️ Noisy hall practice</h2><p>The fair hall will be loud, with hundreds of children and teachers. Practise your speech with crowd sounds playing. Sometimes a pretend judge stops you with a question. Answer it out loud, then carry on from where you stopped.</p>' +
      '<div class="pr-set"><span class="small"><b>🔊 Crowd</b></span><div class="seg" id="prLevel">' + ["Off", "Quiet", "Busy", "Very loud"].map((x, i) => '<button data-l="' + i + '"' + (i === store.get("hallLevel", 2) ? ' class="active"' : "") + ">" + x + "</button>").join("") + "</div></div>" +
      '<div class="pr-set"><span class="small"><b>👩‍⚖️ Judge questions</b></span><div class="seg" id="prJudge">' + ["Never", "Sometimes", "Often"].map((x, i) => '<button data-j="' + i + '"' + (i === store.get("hallJudge", 1) ? ' class="active"' : "") + ">" + x + "</button>").join("") + "</div></div>" +
      '<label class="small pr-set"><input type="checkbox" id="prCam"> 📷 Show me in a mirror (front camera, nothing is recorded)</label>' +
      '<label class="small pr-set"><input type="checkbox" id="prGuideOn" checked> 🧍 Body language guide: keep your face in the oval and your shoulders on the line</label><p class="tiny muted" id="prCamNote"></p>' +
      '<div class="row-btns"><button class="btn" id="prGo">▶️ Start practice</button><button class="btn ghost" id="prStop" hidden>⏹ Finish</button></div>' +
      '<div class="pr-stage" id="prStage" hidden>' +
      '<div class="pr-mirror" id="prMirror" hidden><video id="prVideo" playsinline muted></video><svg class="pr-guide" id="prGuide" viewBox="0 0 100 75" preserveAspectRatio="none" aria-hidden="true"><ellipse cx="50" cy="27" rx="11" ry="14"/><path d="M22 75 Q24 50 50 46 Q76 50 78 75"/><line x1="50" y1="3" x2="50" y2="8"/></svg><div class="pr-tip" id="prTip"></div></div>' +
      '<div class="pr-top"><b id="prTime">0:00</b><span class="tiny muted" id="prPart"></span></div>' +
      '<div class="pr-judge" id="prQ" hidden></div>' +
      '<div class="pr-text" id="prText"></div>' +
      '<div class="row-btns"><button class="btn ghost small" id="prPrev">← Back</button><button class="btn small" id="prNext">Next part →</button><label class="small"><input type="checkbox" id="prHide"> Hide the words (I know it!)</label></div></div>' +
      '<div id="prDone"></div><p class="tiny muted">🏅 Full practice runs done: ' + best + ". Use earphones if you are practising at home at night 🙂</p>";
    $$("#prLevel button").forEach(b => b.onclick = () => { store.set("hallLevel", +b.dataset.l); $$("#prLevel button").forEach(x => x.classList.toggle("active", x === b)); if (run) { +b.dataset.l ? startCrowd(+b.dataset.l) : stopCrowd(); } });
    $$("#prJudge button").forEach(b => b.onclick = () => { store.set("hallJudge", +b.dataset.j); $$("#prJudge button").forEach(x => x.classList.toggle("active", x === b)); });
    $("#prCam").onchange = () => { if ($("#prCam").checked && run) startCam(); else stopCam(); };
    $("#prGuideOn").onchange = () => { const g = $("#prGuide"); if (g) g.style.display = $("#prGuideOn").checked ? "" : "none"; };
    $("#prGo").onclick = startRun; $("#prStop").onclick = () => endRun(true);
    $("#prNext").onclick = () => showPart(run.part + 1); $("#prPrev").onclick = () => showPart(Math.max(0, run.part - 1));
    $("#prHide").onchange = () => $("#prText").classList.toggle("pr-hidden", $("#prHide").checked);
  }
  function startRun() {
    const secs = S.stage.sections;
    run = { t0: Date.now(), part: -1, asked: 0, answered: 0, used: {}, nextQ: 0 };
    $("#prGo").hidden = true; $("#prStop").hidden = false; $("#prStage").hidden = false; $("#prDone").innerHTML = "";
    const lvl = store.get("hallLevel", 2); if (lvl) startCrowd(lvl);
    if ($("#prCam").checked) startCam();
    planQ(); showPart(0);
    run.tick = setInterval(() => {
      if (!run) return;
      const s = Math.round((Date.now() - run.t0) / 1000); $("#prTime").textContent = Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
      if (!run.q && run.nextQ && Date.now() > run.nextQ) askQ();
    }, 500);
    $("#prStage").scrollIntoView({ behavior: "smooth", block: "start" });
    run.n = secs.length;
  }
  function planQ() { const j = store.get("hallJudge", 1); run.nextQ = j ? Date.now() + (j === 2 ? 25000 + Math.random() * 25000 : 50000 + Math.random() * 40000) : 0; }
  function showPart(i) {
    const secs = S.stage.sections; if (i >= secs.length) { endRun(true); return; }
    run.part = i; const s = secs[i];
    $("#prPart").textContent = "Part " + (i + 1) + " of " + secs.length + " · " + s.title;
    $("#prText").innerHTML = plain(s.sample).map(x => "<span>" + esc(x) + "</span>").join(" ");
    $("#prNext").textContent = i === secs.length - 1 ? "✅ Finish" : "Next part →";
  }
  function askQ() {
    const pool = S.viva.filter(v => v.level !== "hard" && !run.used[v.q]); if (!pool.length) return;
    const v = pool[Math.floor(Math.random() * pool.length)]; run.used[v.q] = 1; run.q = v; run.asked++;
    duckCrowd(true);
    $("#prQ").hidden = false;
    $("#prQ").innerHTML = '<p class="small"><b>👩‍⚖️ Excuse me, one question…</b></p><p class="pr-qtext">' + esc(v.q) + '</p><p class="tiny muted">Answer out loud, then tap a button.</p>' +
      '<div class="row-btns"><button class="btn small" id="prQok">✅ I answered</button><button class="btn ghost small" id="prQhelp">💡 Show hint</button></div><div id="prQhint"></div>';
    $("#prQok").onclick = () => { run.answered++; closeQ(); };
    $("#prQhelp").onclick = () => { $("#prQhint").innerHTML = "<ul class=\"small\">" + v.points.map(p => "<li>" + esc(p) + "</li>").join("") + "</ul>"; };
    if (V()) V().speak("Excuse me. " + v.q, { rate: 0.95 });
  }
  function closeQ() {
    if (V()) V().stopSpeaking();
    run.q = null; $("#prQ").hidden = true; duckCrowd(false); planQ();
  }
  function endRun(show) {
    if (!run) return;
    clearInterval(run.tick); const r = run; run = null;
    stopCrowd(); stopCam(); if (V()) V().stopSpeaking();
    if (!show || !$("#prDone")) return;
    const secs = Math.round((Date.now() - r.t0) / 1000), full = r.part >= S.stage.sections.length - 1;
    if (full) store.set("hallRuns", store.get("hallRuns", 0) + 1);
    award(full ? 3 : 1, "Noisy hall practice");
    if (full && window.Fun && Fun.party) Fun.party();
    renderRoom();
    $("#prDone").innerHTML = '<div class="card-lite"><p><b>' + (full ? "🎉 Full speech done in the noisy hall!" : "Good practice!") + "</b></p><p>⏱️ Time: " + Math.floor(secs / 60) + " min " + (secs % 60) + " s" +
      (S.student.targetMinutes ? " (your target is about " + S.student.targetMinutes + " minutes)" : "") + "</p><p>👩‍⚖️ Judge questions: " + r.answered + " answered out of " + r.asked + ".</p>" +
      '<p class="small">💡 Tip: after a judge question, say <i>"Thank you, Ma\'am. As I was saying…"</i> and carry on calmly.</p>' +
      '<p class="small"><b>🧍 Body language check: tick what you did</b></p><ul class="cover small">' + ["Stood straight, feet still", "Looked at the judges, not the floor", "Pointed at each part with an open hand", "Smiled at the start and the end", "Didn't play with hair, clothes or the mic", "Paused and nodded when a judge spoke"].map(x => '<li><label><input type="checkbox"> ' + x + "</label></li>").join("") + "</ul></div>";
  }

  // ======================= 🗣️ explain it 3 ways =======================
  const WHO = {
    kid: { icon: "👶", name: "a 5-year-old", secs: 20, tips: ["Short, simple sentences", "Compare it with something they know (toys, food, a pinwheel)", "No hard words or numbers", "Ask them a little question back"] },
    friend: { icon: "🧒", name: "a classmate", secs: 40, tips: ["Say how it works, step by step", "Use one or two science words and explain them", "Give one real example"] },
    judge: { icon: "🧑‍🔬", name: "a scientist judge", secs: 60, tips: ["Use the correct science words", "Give one exact number or date", "Say why it matters and what its limits are", "Link it to the Clean India Mission"] }
  };
  const PARTS3 = [
    { id: "bins", name: "🗑️ Dustbins and segregation",
      kid: "We use different bins, like different boxes for different toys. Peels and leftover food go in the green bin. Paper and bottles go in the blue bin. Then each kind of rubbish can become something useful again!",
      friend: "Segregation means separating waste where it is made. Wet waste, like peels and leftover food, can become compost or biogas. Dry waste, like paper, metal and glass, can be recycled. If we mix them, everything becomes garbage and goes to a dump.",
      judge: "Segregation at source is the most important step in solid waste management, because mixed waste spoils recyclables and cannot be composted properly. The dustbins in my model show separate streams: wet waste goes to composting or biogas, dry waste to a material recovery facility for recycling, and hazardous waste and e-waste to special collection. Separated waste becomes a resource; mixed waste becomes garbage." },
    { id: "biogas", name: "🔥 Biogas plant",
      kid: "We put cow dung and leftover food into a closed tank. Tiny living things inside eat it and make a gas we can cook with. What is left over becomes food for plants!",
      friend: "In a biogas plant, wet waste and cow dung rot in a closed tank without air. This makes biogas, which is mostly methane, for cooking and electricity. The leftover slurry is good manure for farms.",
      judge: "A biogas plant works by anaerobic digestion: microbes break down organic waste without oxygen in an airtight digester. Biogas is about 50 to 70 per cent methane, and most of the rest is carbon dioxide. It captures methane that would otherwise escape from rotting waste, replaces firewood and dung cakes, and the digestate is used as manure." },
    { id: "compost", name: "🌱 Compost (wet waste)",
      kid: "Banana peels and vegetable skins are food for tiny creatures in the soil, like earthworms. They eat it slowly and turn it into soft dark soil that helps plants grow big.",
      friend: "Composting turns wet kitchen and garden waste into manure. Microbes and earthworms break it down with the help of air. After a few weeks we get rich compost for plants, and less waste goes to the dump.",
      judge: "Composting is aerobic decomposition: microbes break down organic waste using oxygen. It needs moisture and a balance of dry 'browns', like dry leaves, and wet 'greens', like peels. Vermicomposting uses earthworms. Compost returns nutrients to the soil, and it keeps wet waste out of landfills, where it would rot without air and give off methane." },
    { id: "filter", name: "💧 Water filter",
      kid: "Dirty water goes through stones, then black charcoal, then soft cotton. Each one catches some dirt, so the water comes out cleaner. But we still should not drink it!",
      friend: "My filter has three layers. Stones and gravel stop big bits, charcoal traps some colour and smell, and cotton catches tiny particles. The water comes out clearer, but it can still have germs, so it is not safe to drink without boiling.",
      judge: "It is a multi-layer gravity filter that goes from coarse to fine: stones and gravel for physical filtration of large particles, charcoal for adsorption of some impurities, colour and odour, and cotton as the final fine barrier. It does not remove germs or all dissolved chemicals, so the water still needs disinfection, such as boiling, chlorination or UV, and testing. Factories use effluent treatment plants and cities use sewage treatment plants for the same reason." },
    { id: "solar", name: "☀️ Solar panels",
      kid: "Solar panels are like leaves for a house. They catch sunshine and make electricity, with no smoke at all!",
      friend: "Solar panels on the roofs turn sunlight into electricity. It is clean energy because nothing is burnt, and sunlight never runs out. At night they stop working, so we store electricity in batteries.",
      judge: "Solar panels use photovoltaic cells, usually made of silicon, to turn sunlight directly into electricity, with no emissions while running. Rooftop solar, as in the PM Surya Ghar scheme, lets homes make their own power. Because output stops at night and falls on cloudy days, we need storage or the electricity grid as well." },
    { id: "windmill", name: "🌬️ Windmill",
      kid: "The wind pushes the blades round and round, like a paper pinwheel. That spinning makes electricity!",
      friend: "A windmill, or wind turbine, uses moving air to turn its blades. The blades turn a generator that makes electricity, without burning anything.",
      judge: "A wind turbine turns the kinetic energy of the wind into rotation, and a generator turns that rotation into electricity. It is renewable and makes no emissions while running, but it depends on wind speed, so turbines are built in windy places and often combined with solar and storage." },
    { id: "train", name: "🚆 Hydrogen train",
      kid: "This train does not puff out black smoke. It runs on hydrogen, and mostly water vapour comes out, like steam from a kettle!",
      friend: "India's first hydrogen train runs on the Jind–Sonipat route in Haryana. A fuel cell joins hydrogen with oxygen from the air to make electricity. The main by-products are water vapour and heat, not smoke.",
      judge: "A hydrogen fuel cell combines hydrogen and oxygen electrochemically, without burning, to make electricity, water and heat, and the electricity drives the train's motors. India's first hydrogen train was flagged off on 17 July 2026 on the Jind–Sonipat route. It is truly clean only if the hydrogen is green hydrogen, made by electrolysis of water using renewable electricity; hydrogen made from natural gas releases carbon dioxide." },
    { id: "wte", name: "💡 Waste to energy",
      kid: "Some rubbish cannot be used again. A special machine burns it very safely, and the heat helps make electricity for our lights.",
      friend: "Waste that cannot be recycled is burnt at very high temperatures in a closed plant with pollution control. The heat makes steam, the steam turns a turbine, and the turbine makes electricity. We must never burn plastic in the open.",
      judge: "Waste-to-energy is the last option in the waste hierarchy, after reducing, reusing and recycling. Non-recyclable dry waste is burnt in a controlled combustion chamber with flue-gas cleaning. The heat makes steam that drives a turbine and generator. It reduces landfill, but it needs good segregation and strict control of emissions." },
    { id: "ewaste", name: "📱 E-waste",
      kid: "Old phones, chargers and toys with batteries are e-waste. They have things inside that can hurt the earth, so we give them to a special shop, not the dustbin.",
      friend: "E-waste is thrown-away electrical and electronic things, like phones, chargers and earphones. They contain harmful metals like lead and mercury, but also valuable ones like copper and gold. So they must go to a registered recycler or a company take-back point.",
      judge: "E-waste is discarded electrical and electronic equipment. It contains hazardous substances such as lead, mercury and cadmium, and valuable metals such as copper, silver and gold. In India, the E-Waste (Management) Rules 2022, in force from 1 April 2023, cover 106 types of equipment and use Extended Producer Responsibility, so producers must meet recycling targets through registered recyclers." },
    { id: "sbm", name: "🚻 Swachh Bharat and toilets",
      kid: "Everyone should have a toilet at home, so nobody has to go outside. That keeps us healthy and keeps our water clean.",
      friend: "Swachh Bharat Mission was started on 2 October 2014 to give everyone a toilet and keep India clean. Now villages go one step further with ODF Plus: they also manage their garbage and dirty water.",
      judge: "Swachh Bharat Mission began on 2 October 2014 with the goal of an open-defecation-free India, because open defecation spreads disease and pollutes water. In cities, more than 63 lakh household toilets and more than 6 lakh community and public toilet seats were built. Phase 2 focuses on staying ODF and on solid and liquid waste management, which is called ODF Plus; about 5.7 lakh villages are ODF Plus." },
    { id: "plastic", name: "🧴 Plastic, eco-bricks and the Plastic Man",
      kid: "We push clean plastic wrappers tightly into a bottle until it is hard like a brick. Then we can build things with it, instead of throwing the plastic away!",
      friend: "An eco-brick is a plastic bottle packed tightly with clean, dry plastic waste, and it can be used to build benches or walls. Professor Rajagopalan Vasudevan, the Plastic Man of India, found a way to use waste plastic to build roads.",
      judge: "Single-use plastic stays in the environment for a very long time and breaks into microplastics. Eco-bricks store non-recyclable plastic in a useful form. In Professor Vasudevan's method, shredded plastic waste is coated on hot stones before mixing with bitumen, which uses up plastic waste in road building; he received the Padma Shri in 2018." }
  ];
  let ex = { part: 0, who: "kid", timer: null };
  function renderExplain() {
    const done = store.get("explain3", {});
    const count = Object.keys(done).length, total = PARTS3.length * 3;
    $("#explain3").innerHTML = '<h2>🗣️ Explain it 3 ways</h2><p>Different people visit your stall. Practise explaining the same part to a 5-year-old, a classmate and a scientist judge.</p>' +
      '<p class="small">✅ Done: <b>' + count + " of " + total + '</b></p>' +
      '<label class="small">Part <select id="exPart">' + PARTS3.map((p, i) => '<option value="' + i + '"' + (i === ex.part ? " selected" : "") + ">" + esc(p.name) + "</option>").join("") + "</select></label> " +
      '<button class="btn ghost small" id="exRand">🎲 Surprise me</button>' +
      '<div class="seg ex-who" id="exWho">' + Object.keys(WHO).map(k => '<button data-w="' + k + '"' + (k === ex.who ? ' class="active"' : "") + ">" + WHO[k].icon + " " + (k === "kid" ? "5-year-old" : k === "friend" ? "Classmate" : "Judge") + (done[PARTS3[ex.part].id + ":" + k] ? " ✅" : "") + "</button>").join("") + "</div>" +
      '<div id="exCard"></div>';
    $("#exPart").onchange = () => { ex.part = +$("#exPart").value; renderExplain(); };
    $$("#exWho button").forEach(b => b.onclick = () => { ex.who = b.dataset.w; renderExplain(); });
    $("#exRand").onclick = () => { ex.part = Math.floor(Math.random() * PARTS3.length); ex.who = Object.keys(WHO)[Math.floor(Math.random() * 3)]; renderExplain(); };
    card();
  }
  function card() {
    clearInterval(ex.timer);
    const p = PARTS3[ex.part], w = WHO[ex.who];
    $("#exCard").innerHTML = '<div class="card-lite"><p class="num-q">' + w.icon + " Explain <b>" + esc(p.name.replace(/^\S+\s/, "")) + "</b> to <b>" + esc(w.name) + '</b></p><ul class="small">' + w.tips.map(t => "<li>" + esc(t) + "</li>").join("") + "</ul>" +
      '<div class="row-btns"><button class="btn" id="exGo">⏱️ Start (' + w.secs + ' s)</button><button class="btn ghost" id="exShow">👀 Show an example</button></div><p class="ex-time" id="exTime"></p><div id="exAns"></div></div>';
    $("#exGo").onclick = () => {
      clearInterval(ex.timer); let left = w.secs; $("#exTime").textContent = "🎤 Speak now… " + left + " s";
      ex.timer = setInterval(() => { left--; $("#exTime").textContent = left > 0 ? "🎤 Speak now… " + left + " s" : "⏰ Time! Now compare with the example."; if (left <= 0) { clearInterval(ex.timer); if (window.Fun && Fun.sound) Fun.sound("ok"); showAns(); } }, 1000);
    };
    $("#exShow").onclick = showAns;
  }
  function showAns() {
    const p = PARTS3[ex.part], w = WHO[ex.who];
    $("#exAns").innerHTML = '<p class="say">' + esc(p[ex.who]) + '</p><div class="row-btns"><button class="btn ghost small" id="exSay">🔊 Listen</button><button class="btn small" id="exDone">✅ I explained it</button></div>';
    $("#exSay").onclick = () => { V().stopSpeaking(); V().speak(p[ex.who]); };
    $("#exDone").onclick = () => {
      const d = store.get("explain3", {}), key = p.id + ":" + ex.who;
      if (!d[key]) { d[key] = 1; store.set("explain3", d); award(1, "Explain it 3 ways"); }
      const order = ["kid", "friend", "judge"], next = order.find(k => !d[p.id + ":" + k]);
      if (next) ex.who = next; else ex.part = (ex.part + 1) % PARTS3.length, ex.who = "kid";
      renderExplain();
    };
  }

  function render() { if (!run) renderRoom(); renderExplain(); }
  function stop() { if (run) endRun(false); stopCrowd(); stopCam(); clearInterval(ex.timer); }
  window.Practice = { init(o) { S = o.S; store = o.store; esc = o.esc; }, render, stop, crowd: startCrowd, quiet: stopCrowd };
})();
