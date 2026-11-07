/* More practice: 🧑‍⚖️ Mock judge day, ⚡ Rapid fire, 🤔 What if…?, 🩹 My weak spots, 👨‍👩‍👧 Teach my family.
   Facts here match content.js. Everything is saved only on this device. */
(function () {
  "use strict";
  const $ = s => document.querySelector(s), $$ = s => Array.from(document.querySelectorAll(s));
  let S, store, esc;
  const V = () => window.Voice;
  const award = (n, why) => { if (window.Fun && Fun.award) Fun.award(n, why); };
  const party = () => { if (window.Fun && Fun.party) Fun.party(); };
  const sound = k => { if (window.Fun && Fun.sound) Fun.sound(k); };
  const shuffle = a => a.map(x => [Math.random(), x]).sort((p, q) => p[0] - q[0]).map(x => x[1]);

  // ======================= 🩹 weak spots (shared list) =======================
  const Weak = {
    all() { return store.get("weak", []); },
    add(type, q, a) { const w = Weak.all(); const k = type + ":" + q.slice(0, 80); if (!w.some(x => x.k === k)) { w.unshift({ k, type, q, a, at: Date.now() }); store.set("weak", w.slice(0, 120)); } },
    remove(k) { store.set("weak", Weak.all().filter(x => x.k !== k)); }
  };
  window.Weak = Weak;

  // ======================= ⚡ RAPID FIRE =======================
  const RAPID = [
    ["Main gas in biogas?", "Methane"], ["What comes out of a hydrogen train?", "Mainly water vapour (and heat)"],
    ["When was Swachh Bharat Mission launched?", "2 October 2014"], ["Who launched it?", "PM Narendra Modi"],
    ["Bin colour for wet waste?", "Green"], ["Bin colour for dry waste?", "Blue"],
    ["Composting with earthworms is called?", "Vermicomposting"], ["Breaking down waste without oxygen is called?", "Anaerobic digestion"],
    ["Who is the Plastic Man of India?", "Prof. Rajagopalan Vasudevan"], ["Which award did he get in 2018?", "Padma Shri"],
    ["Which filter layer traps smell and colour?", "Charcoal"], ["Top layer of your filter?", "Stones and gravel"],
    ["Bottom layer of your filter?", "Cotton"], ["Gas that gives biogas a rotten-egg smell?", "Hydrogen sulphide"],
    ["ODF stands for?", "Open Defecation Free"], ["EPR stands for?", "Extended Producer Responsibility"],
    ["The E-Waste Rules are from which year?", "2022 (in force from 1 April 2023)"], ["Solar panels turn sunlight into?", "Electricity"],
    ["In waste-to-energy, steam turns a…?", "Turbine"], ["India's non-fossil power goal for 2030?", "500 gigawatts"],
    ["Route of India's first hydrogen train?", "Jind–Sonipat, Haryana"], ["Cleanest Ganga town in Swachh Survekshan 2024-25?", "Prayagraj"],
    ["UP city that was 3rd cleanest big city (2024-25)?", "Lucknow"], ["Biogas plant near Gorakhpur that opened in March 2024?", "Dhuriapar"],
    ["Protected wetland lake in Gorakhpur?", "Ramgarh Taal"], ["First Saraswati Shishu Mandir: city and year?", "Gorakhpur, 1952"],
    ["MRF stands for?", "Material Recovery Facility"], ["STP stands for?", "Sewage Treatment Plant"],
    ["ETP stands for?", "Effluent Treatment Plant"], ["The leftover from a biogas plant is used as?", "Manure (slurry)"],
    ["A bottle packed tightly with clean plastic is called?", "An eco-brick"], ["The 3Rs?", "Reduce, Reuse, Recycle"],
    ["The best waste is…?", "The waste we never create"], ["AQI stands for?", "Air Quality Index"],
    ["Is clear-looking filtered water always safe to drink?", "No: it can still have germs"], ["Ek Ped Maa Ke Naam is about?", "Planting a tree in honour of your mother"],
    ["How many Rs in your project?", "7"], ["Which gas in biogas does NOT burn?", "Carbon dioxide"],
    ["Wind turbines use which kind of energy?", "Wind (moving air)"], ["Old phones and chargers are called?", "E-waste"]
  ];
  let rf = null;
  function renderRapid() {
    const box = $("#rapidBody"); if (!box) return;
    const best = store.get("rapidBest", 0);
    box.innerHTML = '<div class="card"><h2>⚡ Rapid fire round</h2><p>At the national fair, judges sometimes fire quick questions. You have <b>60 seconds</b>. Say the answer out loud, tap 👀 to check, then mark yourself honestly.</p>' +
      '<p class="small">🏅 Best: <b>' + best + '</b> right in 60 seconds</p><button class="btn" id="rfGo">▶️ Start</button><div id="rfPlay"></div></div>';
    $("#rfGo").onclick = () => {
      rf = { qs: shuffle(RAPID), i: 0, right: 0, miss: [], end: Date.now() + 60000 };
      $("#rfGo").hidden = true; rfShow();
      rf.t = setInterval(() => { const left = Math.max(0, Math.ceil((rf.end - Date.now()) / 1000)); const el = $("#rfTime"); if (el) el.textContent = "⏱️ " + left + " s"; if (left <= 0) rfEnd(); }, 250);
    };
  }
  function rfShow() {
    const [q, a] = rf.qs[rf.i % rf.qs.length];
    $("#rfPlay").innerHTML = '<p class="rf-top"><b id="rfTime">⏱️ ' + Math.ceil((rf.end - Date.now()) / 1000) + ' s</b><span>✅ ' + rf.right + '</span></p><p class="rf-q">' + esc(q) + '</p>' +
      '<div id="rfA"><button class="btn big" id="rfShow">👀 Check</button></div>';
    $("#rfShow").onclick = () => {
      $("#rfA").innerHTML = '<p class="rf-ans">' + esc(a) + '</p><div class="row-btns"><button class="btn" id="rfOk">✅ I got it</button><button class="btn ghost" id="rfNo">❌ Missed</button></div>';
      $("#rfOk").onclick = () => { rf.right++; sound("ok"); next(); };
      $("#rfNo").onclick = () => { rf.miss.push([q, a]); Weak.add("Rapid fire", q, a); sound("bad"); next(); };
    };
    const next = () => { rf.i++; if (rf && Date.now() < rf.end) rfShow(); };
  }
  function rfEnd() {
    if (!rf) return; clearInterval(rf.t); const r = rf; rf = null;
    const best = store.get("rapidBest", 0); if (r.right > best) store.set("rapidBest", r.right);
    award(r.right >= 10 ? 3 : 1, "Rapid fire"); if (r.right >= 10) party();
    $("#rfPlay").innerHTML = '<p class="rf-q">' + (r.right >= 10 ? "🔥 Super fast! " : "Good round! ") + "<b>" + r.right + "</b> right in 60 seconds." + (r.right > best ? " ⭐ New best!" : "") + "</p>" +
      (r.miss.length ? '<p class="small">Practise these again (they are in 🩹 My weak spots):</p><ul class="small">' + r.miss.map(m => "<li>" + esc(m[0]) + " → <b>" + esc(m[1]) + "</b></li>").join("") + "</ul>" : "");
    $("#rfGo").hidden = false; $("#rfGo").textContent = "🔁 Play again";
  }

  // ======================= 🤔 WHAT IF…? =======================
  const WHATIF = [
    { q: "What if it is cloudy for many days? Will your solar city go dark?", hint: "Think: batteries, the grid, other energy.", a: "Solar panels still make some electricity in cloudy light, but much less. That is why the city stores electricity in batteries and stays connected to the grid. Mixing solar with wind and other clean energy also helps, which is why my model has a windmill too." },
    { q: "What if a village has no cows? Can it still make biogas?", hint: "What other wet waste is there?", a: "Yes. Biogas can also be made from kitchen waste, food waste from markets and crop waste. For example, the Dhuriapar plant near Gorakhpur uses paddy straw and sugar-mill press mud, not only cow dung." },
    { q: "What if people don't segregate waste at home?", hint: "What happens to mixed waste? How can we change habits?", a: "Mixed waste ends up in dumps and landfills: recyclables get dirty and wet waste can't be composted well. To fix it, homes need separate bins (the 2026 rules ask for four streams: wet, dry, sanitary and special care), collection vans with separate sections, awareness, and children like us can teach our families." },
    { q: "What if someone burns plastic to get rid of it quickly?", hint: "Think about the smoke.", a: "Burning plastic in the open gives off toxic smoke that harms our lungs and pollutes the air. Plastic should be segregated and sent for recycling, used in plastic roads, or handled in controlled plants with pollution control, never burnt in the open." },
    { q: "What if someone drinks the water from your filter?", hint: "Clear is not the same as safe.", a: "They should not. My filter makes water clearer, but germs and some dissolved chemicals can still be in it. Water must be boiled, chlorinated or UV-treated, and tested, before it is safe to drink." },
    { q: "What if the wind stops blowing?", hint: "Same idea as cloudy days.", a: "Then the windmill stops making electricity. So we store electricity in batteries and combine wind with solar and the grid. Wind farms are also built in places where the wind blows most of the time." },
    { q: "What if your biogas plant leaks?", hint: "Methane, smell, safety.", a: "Methane would escape. It is a strong greenhouse gas, the plant would smell, and gas mixing with air can be a fire risk. That is why the digester and pipes must be airtight and checked regularly." },
    { q: "What if everyone drives electric cars, but the electricity comes from coal?", hint: "Where does the pollution go?", a: "The cities would have cleaner air because electric cars give out no smoke, but the pollution would move to the power plants. So we need clean electricity from the sun and wind. That is why my model shows EVs and solar and wind together." },
    { q: "What if a factory pours dirty water straight into a river?", hint: "Fish, people, the law.", a: "The river gets polluted: fish die and people downstream can get sick. Factories must clean their waste water in an effluent treatment plant before releasing it, and the pollution control boards can take action if they don't." },
    { q: "What if the city's dumping ground is full?", hint: "Reduce, process, and old waste.", a: "We must make less waste and process it: compost wet waste, recycle dry waste, and use waste-to-energy only for what can't be recycled. Old waste can be cleared by biomining. For example, Lucknow had cleared about 12.86 lakh tonnes of old waste at Shivri by January 2026." },
    { q: "What if a judge says hydrogen is dangerous?", hint: "Is petrol or CNG safe? How?", a: "Hydrogen catches fire easily, so it must be handled safely. It is stored in strong tanks with safety valves and sensors, and there are strict safety rules, just like for petrol, LPG and CNG, which can also burn." },
    { q: "What if we throw an old phone into the normal dustbin?", hint: "Harmful and valuable things inside.", a: "Harmful metals like lead and mercury can leak into soil and water, and valuable metals like copper and gold are wasted. Old phones should go to a company take-back point or a registered e-waste recycler." }
  ];
  let wi = 0, wiT = null;
  function renderWhatIf() {
    const box = $("#whatifBody"); if (!box) return;
    const done = store.get("whatif", {});
    box.innerHTML = '<div class="card"><h2>🤔 What if…?</h2><p>Smart judges ask tricky questions to see if you can <b>think</b>, not just remember. Read the question, think for 30 seconds, say your answer out loud, then compare.</p>' +
      '<p class="small">✅ Done: <b>' + Object.keys(done).length + " of " + WHATIF.length + '</b></p><div class="wi-nav"><button class="btn ghost small" id="wiPrev">←</button><span class="small">Question ' + (wi + 1) + " of " + WHATIF.length + '</span><button class="btn ghost small" id="wiNext">→</button></div><div id="wiCard"></div></div>';
    $("#wiPrev").onclick = () => { wi = (wi + WHATIF.length - 1) % WHATIF.length; renderWhatIf(); };
    $("#wiNext").onclick = () => { wi = (wi + 1) % WHATIF.length; renderWhatIf(); };
    const x = WHATIF[wi]; clearInterval(wiT);
    $("#wiCard").innerHTML = '<div class="card-lite"><p class="rf-q">' + (done[wi] ? "✅ " : "") + esc(x.q) + '</p><p class="small muted">💡 ' + esc(x.hint) + '</p><div class="row-btns"><button class="btn" id="wiGo">⏱️ Think (30 s)</button><button class="btn ghost" id="wiShow">👀 Show an answer</button></div><p class="ex-time" id="wiTime"></p><div id="wiAns"></div></div>';
    $("#wiGo").onclick = () => { let left = 30; clearInterval(wiT); $("#wiTime").textContent = "🤔 Think… " + left + " s"; wiT = setInterval(() => { left--; $("#wiTime").textContent = left > 0 ? "🤔 Think… " + left + " s" : "🎤 Now say your answer out loud!"; if (left <= 0) { clearInterval(wiT); sound("ok"); } }, 1000); };
    $("#wiShow").onclick = () => {
      $("#wiAns").innerHTML = '<p class="say">' + esc(x.a) + '</p><div class="row-btns"><button class="btn ghost small" id="wiSay">🔊 Listen</button><button class="btn small" id="wiOk">✅ My answer was like this</button><button class="btn ghost small" id="wiNo">🩹 I need practice</button></div>';
      $("#wiSay").onclick = () => { V().stopSpeaking(); V().speak(x.a); };
      $("#wiOk").onclick = () => { const d = store.get("whatif", {}); if (!d[wi]) { d[wi] = 1; store.set("whatif", d); award(1, "What if"); } Weak.remove("What if:" + x.q.slice(0, 80)); wi = (wi + 1) % WHATIF.length; renderWhatIf(); };
      $("#wiNo").onclick = () => { Weak.add("What if", x.q, x.a); wi = (wi + 1) % WHATIF.length; renderWhatIf(); };
    };
  }

  // ======================= 🩹 MY WEAK SPOTS =======================
  const qKey = q => q.q.slice(0, 60);
  function weakViva() {
    const tried = store.get("viva", {});
    return S.viva.filter(v => { const t = tried[qKey(v)]; return t && t.of && t.got / t.of < 0.6; });
  }
  function renderWeak() {
    const box = $("#weakBody"); if (!box) return;
    const wv = weakViva(), wl = Weak.all();
    const total = wv.length + wl.length;
    box.innerHTML = '<div class="card"><h2>🩹 My weak spots</h2><p>Every question you found hard on this website comes here: viva questions where you scored under 60%, missed rapid-fire and Numbers master questions, What if…? and Mock judge questions. Practise them until the list is empty! 💪</p>' +
      '<p class="small"><b>' + total + "</b> to practise" + (total ? "" : " 🎉 Nothing here yet. Play the games and answer viva questions, and the hard ones will appear here.") + "</p></div>" +
      (wv.length ? '<div class="card"><h3>❓ Viva questions</h3>' + wv.map((v, i) => '<details class="weak-item"><summary><b>' + esc(v.q) + '</b> <span class="tiny muted">' + esc(v.topic) + '</span></summary><ul class="small">' + v.points.map(p => "<li>" + esc(p) + "</li>").join("") + '</ul><button class="btn small" data-wv="' + i + '">✅ Now I know it</button></details>').join("") + "</div>" : "") +
      (wl.length ? '<div class="card"><h3>⚡ Other questions</h3>' + wl.map((w, i) => '<details class="weak-item"><summary><b>' + esc(w.q) + '</b> <span class="tiny muted">' + esc(w.type) + '</span></summary><p class="say">' + esc(w.a) + '</p><button class="btn small" data-wl="' + i + '">✅ Now I know it</button></details>').join("") + "</div>" : "");
    $$("[data-wv]").forEach(b => b.onclick = () => { const v = wv[+b.dataset.wv], t = store.get("viva", {}); t[qKey(v)] = { got: v.points.length, of: v.points.length, at: Date.now() }; store.set("viva", t); award(1, "Weak spot fixed"); renderWeak(); });
    $$("[data-wl]").forEach(b => b.onclick = () => { Weak.remove(wl[+b.dataset.wl].k); award(1, "Weak spot fixed"); renderWeak(); });
  }

  // ======================= 🧑‍⚖️ MOCK JUDGE DAY =======================
  let mj = null;
  function renderMock() {
    const box = $("#mockBody"); if (!box) return;
    const last = store.get("mockLast", null);
    box.innerHTML = '<div class="card"><h2>🧑‍⚖️ Mock judge day</h2><p>A full pretend judging, like the real one in Gorakhpur, in 4 steps:</p><ol class="small"><li>👋 Greet the judges and introduce yourself (30 s)</li><li>🎤 Give your speech in a noisy hall (about ' + (S.student.targetMinutes || 5) + ' min)</li><li>❓ Answer 5 surprise questions</li><li>📊 Get your score out of 40, like the judges</li></ol>' +
      '<p class="small">Best done standing in front of your model, with a family member watching.</p>' +
      (last ? '<p class="small">🏅 Last time: <b>' + last.total + "/40</b> (" + esc(last.date) + ")</p>" : "") +
      '<button class="btn" id="mjGo">▶️ Start mock judging</button><div id="mjStep"></div></div>';
    $("#mjGo").onclick = () => { mj = { step: 0, qs: shuffle(S.viva.filter(v => v.level !== "easy")).slice(0, 5), qi: 0, pts: 0, of: 0, t0: Date.now() }; $("#mjGo").hidden = true; step(); };
  }
  function step() {
    const el = $("#mjStep"); if (!mj || !el) return;
    clearInterval(mj.timer);
    if (mj.step === 0) {
      el.innerHTML = '<div class="card-lite"><p class="rf-q">👋 Step 1 of 4: Greet and introduce yourself</p><p class="small">Smile, stand straight, look at the judge. Say: good morning, your name, class, school and topic.</p><p class="ex-time" id="mjT"></p><button class="btn" id="mjNext">Next: my speech →</button></div>';
      if (V()) V().speak("Good morning. Please introduce yourself.");
      count(30, "mjT");
    } else if (mj.step === 1) {
      el.innerHTML = '<div class="card-lite"><p class="rf-q">🎤 Step 2 of 4: Your speech</p><p class="small">Walk around your model in order and give your full speech. The crowd noise is on. Tap Next when you finish.</p><p class="ex-time" id="mjT"></p><button class="btn" id="mjNext">I finished my speech →</button></div>';
      if (window.Practice && Practice.crowd) Practice.crowd(store.get("hallLevel", 2) || 2);
      mj.sp = Date.now(); up("mjT");
    } else if (mj.step === 2) {
      if (window.Practice && Practice.quiet) Practice.quiet();
      mj.speechSecs = Math.round((Date.now() - mj.sp) / 1000);
      askMock(); return;
    } else {
      scoreStep(); return;
    }
    $("#mjNext").onclick = () => { mj.step++; step(); };
  }
  function count(secs, id) { let left = secs; const show = () => { const e = $("#" + id); if (e) e.textContent = left > 0 ? "⏱️ " + left + " s" : "⏰ Time is up! Tap Next."; }; show(); mj.timer = setInterval(() => { left--; show(); if (left <= 0) clearInterval(mj.timer); }, 1000); }
  function up(id) { const show = () => { const s = Math.round((Date.now() - mj.sp) / 1000), e = $("#" + id); if (e) e.textContent = "⏱️ " + Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); }; show(); mj.timer = setInterval(show, 500); }
  function askMock() {
    const v = mj.qs[mj.qi];
    $("#mjStep").innerHTML = '<div class="card-lite"><p class="small"><b>❓ Step 3 of 4: Question ' + (mj.qi + 1) + ' of 5</b></p><p class="rf-q">' + esc(v.q) + '</p><p class="small muted">Answer out loud, then tap 👀 to tick what you said.</p><button class="btn" id="mjShow">👀 Check my answer</button><div id="mjAns"></div></div>';
    if (V()) V().speak(v.q, { rate: 0.95 });
    $("#mjShow").onclick = () => {
      $("#mjAns").innerHTML = '<p class="small">Tick each point you said:</p><ul class="cover">' + v.points.map((p, i) => '<li><label><input type="checkbox" data-mp="' + i + '"> ' + esc(p) + "</label></li>").join("") + '</ul><button class="btn small" id="mjSave">' + (mj.qi < 4 ? "Next question →" : "See my score →") + "</button>";
      $("#mjSave").onclick = () => {
        const got = $$("[data-mp]").filter(c => c.checked).length;
        mj.pts += got; mj.of += v.points.length;
        const t = store.get("viva", {}); t[qKey(v)] = { got, of: v.points.length, at: Date.now() }; store.set("viva", t);
        mj.qi++; if (mj.qi < 5) askMock(); else { mj.step = 3; step(); }
      };
    };
  }
  function scoreStep() {
    const ans = mj.of ? mj.pts / mj.of : 0, target = (S.student.targetMinutes || 5) * 60, sp = mj.speechSecs || 0;
    const suggest = Math.max(3, Math.min(10, Math.round(4 + ans * 6 - (sp > target * 1.3 || sp < target * 0.5 ? 1 : 0))));
    $("#mjStep").innerHTML = '<div class="card-lite"><p class="rf-q">📊 Step 4 of 4: Your score</p><p class="small">You covered <b>' + Math.round(ans * 100) + "%</b> of the key points in the questions. Your speech took <b>" + Math.floor(sp / 60) + " min " + (sp % 60) + " s</b>" + (sp > target * 1.3 ? " (a bit long: aim for about " + Math.round(target / 60) + " minutes)" : sp < target * 0.5 ? " (quite short: did you cover every part?)" : " 👍") + ".</p>" +
      '<p class="small">Now score yourself honestly on the 4 judge heads (or ask the family member watching):</p>' +
      S.marks.map(m => '<label class="mj-mark"><span>' + m.icon + " " + esc(m.name) + ' <b id="mjv-' + m.key + '">' + (m.key === "expression" ? suggest : 7) + '</b>/10</span><input type="range" min="0" max="10" value="' + (m.key === "expression" ? suggest : 7) + '" data-mk="' + m.key + '"></label>').join("") +
      '<p class="rf-q">Total: <b id="mjTot"></b>/40</p><button class="btn" id="mjDone">💾 Save my mock judging</button></div>';
    const tot = () => { let t = 0; $$("[data-mk]").forEach(r => { t += +r.value; $("#mjv-" + r.dataset.mk).textContent = r.value; }); $("#mjTot").textContent = t; return t; };
    $$("[data-mk]").forEach(r => r.oninput = tot); tot();
    $("#mjDone").onclick = () => {
      const entry = { at: new Date().toLocaleString(), note: "🧑‍⚖️ Mock judge day", total: 0, of: S.marks.length * 10 };
      $$("[data-mk]").forEach(r => { entry[r.dataset.mk] = +r.value; entry.total += +r.value; });
      const hist = store.get("scores", []); hist.unshift(entry); store.set("scores", hist.slice(0, 50));
      store.set("mockLast", { total: entry.total, date: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short" }) });
      award(entry.total >= 32 ? 5 : 3, "Mock judge day"); party();
      const low = S.marks.filter(m => entry[m.key] <= 6);
      $("#mjStep").innerHTML = '<div class="card-lite"><p class="rf-q">🎉 Mock judging done: <b>' + entry.total + "/40</b></p>" + (low.length ? "<p>Work on: " + low.map(m => m.icon + " " + esc(m.name)).join(", ") + ".</p><ul class=\"small\">" + low.map(m => "<li>" + esc(m.tip) + "</li>").join("") + "</ul>" : "<p>Great all round! Keep practising to stay this good.</p>") +
        '<p class="small">Saved in 📊 Score myself. Questions you missed are in 🩹 My weak spots.</p></div>';
      mj = null; $("#mjGo").hidden = false; $("#mjGo").textContent = "🔁 Do it again";
    };
  }

  // ======================= 👨‍👩‍👧 TEACH MY FAMILY =======================
  function renderFamily() {
    const box = $("#familyBody"); if (!box) return;
    const hist = store.get("teach", []);
    const parts = S.components.filter(c => !["ladder", "digger"].includes(c.id));
    box.innerHTML = '<div class="card"><h2>👨‍👩‍👧 Teach my family</h2><p>The best way to learn is to teach! Pick a part, explain it to someone at home (Mummy, Papa, a grandparent, a brother or sister), then <b>give them the phone</b> to score you.</p>' +
      '<label class="small">Part <select id="tfPart">' + parts.map(c => '<option value="' + c.id + '">' + c.icon + " " + esc(c.name) + "</option>").join("") + '</select></label> <button class="btn ghost small" id="tfRand">🎲</button>' +
      '<label class="small tf-who">Who are you teaching? <input id="tfWho" placeholder="e.g. Papa" maxlength="30"></label>' +
      '<button class="btn" id="tfGo">✅ I taught it: now hand over the phone</button><div id="tfScore"></div></div>' +
      (hist.length ? '<div class="card"><h3>📒 My teaching log</h3><ul class="small">' + hist.slice(0, 20).map(h => "<li><b>" + esc(h.part) + "</b> to " + esc(h.who || "family") + ": " + "⭐".repeat(h.stars) + " (" + h.stars + "/9)" + (h.learn ? " · learned: “" + esc(h.learn) + "”" : "") + ' <span class="tiny muted">' + esc(h.date) + "</span></li>").join("") + "</ul></div>" : "");
    $("#tfRand").onclick = () => { const s = $("#tfPart"); s.selectedIndex = Math.floor(Math.random() * s.options.length); };
    $("#tfGo").onclick = () => {
      const c = S.components.find(x => x.id === $("#tfPart").value);
      const Q = [["🗣️", "Was it clear and easy to understand?"], ["🔊", "Was it loud enough?"], ["✅", "Did it sound correct and confident?"]];
      $("#tfScore").innerHTML = '<div class="card-lite"><p class="rf-q">👨‍👩‍👧 For the family member</p><p class="small">' + esc((S.student.name || "").split(" ")[0]) + " just taught you about <b>" + esc(c.name) + "</b>. Please give 1 to 3 stars:</p>" +
        Q.map((q, i) => '<div class="tf-row"><span>' + q[0] + " " + esc(q[1]) + '</span><span class="tf-stars" data-q="' + i + '">' + [1, 2, 3].map(n => '<button data-n="' + n + '" aria-label="' + n + ' stars">☆</button>').join("") + "</span></div>").join("") +
        '<label class="small">What did you learn? (one line, optional)<input id="tfLearn" maxlength="120"></label><button class="btn" id="tfSave">💾 Save</button></div>';
      const val = [0, 0, 0];
      $$(".tf-stars").forEach(g => $$("[data-q='" + g.dataset.q + "'] button").forEach(b => b.onclick = () => { val[+g.dataset.q] = +b.dataset.n; $$("[data-q='" + g.dataset.q + "'] button").forEach(x => { x.textContent = +x.dataset.n <= +b.dataset.n ? "⭐" : "☆"; }); }));
      $("#tfSave").onclick = () => {
        if (val.some(v => !v)) { alert("Please give stars for all 3 questions."); return; }
        const stars = val.reduce((a, b) => a + b, 0), h = store.get("teach", []);
        h.unshift({ part: c.name, who: $("#tfWho").value.trim(), stars, learn: $("#tfLearn").value.trim(), date: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short" }) });
        store.set("teach", h.slice(0, 60)); award(stars >= 8 ? 3 : 2, "Taught my family"); if (stars >= 8) party();
        renderFamily();
      };
    };
  }

  function render(id) {
    if (rf && id !== "rapid") { clearInterval(rf.t); rf = null; }
    if (id !== "whatif") clearInterval(wiT);
    if (mj && id !== "mock") { clearInterval(mj.timer); if (window.Practice && Practice.quiet) Practice.quiet(); mj = null; }
    if (id === "rapid") renderRapid(); else if (id === "whatif") renderWhatIf(); else if (id === "weak") renderWeak();
    else if (id === "mock") renderMock(); else if (id === "family") renderFamily();
  }
  function stop() { render(""); }
  window.Coach2 = { init(o) { S = o.S; store = o.store; esc = o.esc; }, render, stop };
})();
