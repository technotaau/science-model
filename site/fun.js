/* 🎉 Fun zone: Eco-Dost pet, daily streak, spin the wheel, judge game, flash cards, trophy shelf,
   countdown calendar, photo badge and family challenge — plus sounds and confetti used everywhere.
   Everything it shows comes from content.js and ecodost-data.js (already fact-checked). */
(function () {
  "use strict";
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  let store, esc;
  const S = () => window.SITE;
  const today = () => { const n = new Date(); return n.getFullYear() + "-" + String(n.getMonth() + 1).padStart(2, "0") + "-" + String(n.getDate()).padStart(2, "0"); };
  const dayDiff = (a, b) => Math.round((new Date(b + "T00:00:00") - new Date(a + "T00:00:00")) / 86400000);
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  // ---------- 🎵 sounds + 🎉 confetti (also used by other pages) ----------
  let ac = null;
  function sound(kind) {
    if (!store || !store.get("funSound", true)) return;
    try {
      ac = ac || new (window.AudioContext || window.webkitAudioContext)();
      const notes = kind === "win" ? [523, 659, 784, 1047] : kind === "ok" ? [660, 880] : kind === "spin" ? [440] : [220, 180];
      notes.forEach((f, i) => {
        const o = ac.createOscillator(), g = ac.createGain(), t = ac.currentTime + i * 0.11;
        o.type = kind === "bad" ? "square" : "sine"; o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.12, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.15);
        o.connect(g); g.connect(ac.destination); o.start(t); o.stop(t + 0.17);
      });
    } catch (e) { /* no audio */ }
  }
  function confetti() {
    if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const box = document.createElement("div"); box.className = "confetti"; box.setAttribute("aria-hidden", "true");
    const bits = ["🎉", "⭐", "✨", "🌟", "🎊", "♻️", "🌱"];
    for (let i = 0; i < 26; i++) {
      const s = document.createElement("span"); s.textContent = pick(bits);
      s.style.left = Math.random() * 100 + "%"; s.style.animationDelay = Math.random() * 0.4 + "s"; s.style.fontSize = (14 + Math.random() * 18) + "px";
      box.appendChild(s);
    }
    document.body.appendChild(box); setTimeout(() => box.remove(), 2600);
  }
  function party() { sound("win"); confetti(); }

  // ---------- activity → streak + pet ----------
  function activity() {
    const d = store.get("funDays", []), t = today();
    if (!d.includes(t)) { d.push(t); store.set("funDays", d.slice(-120)); }
    store.set("funLast", t);
  }
  function streak() {
    const d = new Set(store.get("funDays", []));
    const x = new Date(); x.setHours(0, 0, 0, 0);
    if (!d.has(fmt(x))) x.setDate(x.getDate() - 1);  // today not done yet: count up to yesterday
    let n = 0;
    while (d.has(fmt(x))) { n++; x.setDate(x.getDate() - 1); }
    return n;
  }
  function fmt(x) { return x.getFullYear() + "-" + String(x.getMonth() + 1).padStart(2, "0") + "-" + String(x.getDate()).padStart(2, "0"); }
  function points() { return (store.get("ecodost", {}).points) || 0; }
  const PET = [{ min: 0, e: "🌱", name: "Seedling" }, { min: 15, e: "🌿", name: "Sprout" }, { min: 40, e: "🪴", name: "Little plant" }, { min: 80, e: "🌳", name: "Big tree" }, { min: 150, e: "🌳🐦", name: "Tree with a bird friend" }];
  function pet() {
    const p = points(); let st = PET[0]; PET.forEach(x => { if (p >= x.min) st = x; });
    const next = PET.find(x => x.min > p);
    const last = store.get("funLast", null), away = last ? dayDiff(last, today()) : 0;
    const sad = away >= 2;
    return { st, next, p, sad, mood: sad ? "😢 I missed you! Learn one thing today and I'll grow again." : pick(["😊 I'm growing because you're learning!", "🤩 Every ⭐ makes me taller!", "💚 Let's learn one more thing today!"]) };
  }
  function petCardHTML(small) {
    const P = pet(), s = streak();
    return '<div class="fun-pet' + (P.sad ? " sad" : "") + (small ? " small" : "") + '"><span class="pet-e" aria-hidden="true">' + P.st.e + "</span>" +
      "<div><b>Eco-Dost pet · " + esc(P.st.name) + "</b><div class=\"small\">" + esc(P.mood) + "</div>" +
      '<div class="tiny">' + P.p + " ⭐" + (P.next ? " · " + (P.next.min - P.p) + " ⭐ to grow into a " + esc(P.next.name) + " " + P.next.e : " · fully grown! 🎉") + "</div></div>" +
      '<div class="fun-streak" title="Days in a row you practised"><span aria-hidden="true">🔥</span><b>' + s + "</b><small>day" + (s === 1 ? "" : "s") + "</small></div></div>";
  }

  // ---------- 🎡 spin the wheel ----------
  const WHEEL = [
    { e: "❓", t: "Answer one viva question", go: "#viva" },
    { e: "💭", t: "Say one Hindi line from Thoughts", go: "#thoughts" },
    { e: "🎮", t: "Play one game round", go: "#games" },
    { e: "🤖", t: "Ask Eco-Dost one question", go: "#ecodost" },
    { e: "🗺️", t: "Explain one model part to Mummy or Papa", go: "#model" },
    { e: "🏙️", t: "Learn one UP update line", go: "#delhi" }
  ];
  let spinDeg = 0;
  function spin() {
    const btn = $("#funSpin"); btn.disabled = true; sound("spin");
    const k = Math.floor(Math.random() * WHEEL.length), seg = 360 / WHEEL.length;
    spinDeg += 1440 + (360 - (spinDeg % 360)) + (360 - (k * seg + seg / 2));
    $("#funWheel").style.transform = "rotate(" + spinDeg + "deg)";
    setTimeout(() => {
      const w = WHEEL[k];
      $("#funSpinOut").innerHTML = '<div class="fun-task"><span>' + w.e + "</span><b>" + esc(w.t) + '</b><a class="btn small" href="' + w.go + '">Go →</a> <button class="btn small ghost" id="funSpinDone">✅ Done</button></div>';
      $("#funSpinDone").onclick = () => { award(1, "Spin task done"); $("#funSpinOut").innerHTML = '<p class="small">🎉 Great! Spin again any time.</p>'; };
      btn.disabled = false;
    }, window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches ? 50 : 3100);
  }
  function wheelHTML() {
    const seg = 360 / WHEEL.length, cols = ["var(--t-blue)", "var(--t-purple)", "var(--t-pink)", "var(--t-teal)", "var(--t-green)", "var(--t-orange)"];
    const grad = WHEEL.map((w, i) => cols[i] + " " + (i * seg) + "deg " + ((i + 1) * seg) + "deg").join(",");
    return '<div class="wheel-wrap"><div class="wheel-pin" aria-hidden="true">▼</div><div class="wheel" id="funWheel" style="background:conic-gradient(' + grad + ')">' +
      WHEEL.map((w, i) => '<span style="transform:rotate(' + (i * seg + seg / 2) + 'deg) translateY(-38%)">' + w.e + "</span>").join("") + "</div></div>" +
      '<button class="btn" id="funSpin">🎡 Spin!</button><div id="funSpinOut" aria-live="polite"></div>';
  }

  // ---------- 🎤 judge game ----------
  let jq = null;
  function judgeQs() { return S().viva.filter(v => v.asked).concat(S().viva.filter(v => !v.asked && v.level !== "hard")); }
  function judgeNew() {
    const asked = S().viva.filter(v => v.asked);
    jq = Math.random() < 0.6 && asked.length ? pick(asked) : pick(judgeQs());
    $("#funJudge").innerHTML = '<div class="judge-stage"><span class="judge-face" aria-hidden="true">🧑‍⚖️</span><div class="judge-bubble">' + (jq.asked ? '<span class="pill deep">🏅 Real question from ' + esc(jq.asked) + "</span><br>" : "") + esc(jq.q) + "</div></div>" +
      '<textarea id="funJAns" rows="3" placeholder="Type your answer like you would say it to the judge…"></textarea>' +
      '<div class="viva-row"><button class="btn" id="funJCheck">✅ Done — score me</button>' + (window.Voice && Voice.canSpeak ? ' <button class="btn small ghost" id="funJSay">🔊 Hear the judge</button>' : "") + "</div><div id=\"funJOut\" aria-live=\"polite\"></div>";
    if ($("#funJSay")) $("#funJSay").onclick = () => { Voice.stopSpeaking(); Voice.speak(jq.q); };
    $("#funJCheck").onclick = judgeScore;
    if (window.Voice && Voice.canSpeak) { Voice.stopSpeaking(); Voice.speak(jq.q); }
  }
  function judgeScore() {
    const a = ($("#funJAns").value || "").toLowerCase();
    if (a.trim().length < 3) { $("#funJOut").innerHTML = '<p class="small">Say something first — even one sentence! 💪</p>'; return; }
    const kw = jq.keywords || [], hit = kw.filter(k => a.includes(String(k).toLowerCase())).length;
    const stars = !kw.length ? 2 : hit / kw.length >= 0.6 ? 3 : hit / kw.length >= 0.3 ? 2 : 1;
    award(stars, "Judge game");
    if (stars === 3) party(); else sound("ok");
    $("#funJOut").innerHTML = '<div class="judge-score"><b>' + "⭐".repeat(stars) + "☆".repeat(3 - stars) + "</b> " + (stars === 3 ? "Brilliant! The judges are clapping 👏👏" : stars === 2 ? "Good answer! Add a little more:" : "Nice try! A great answer has:") + "</div>" +
      '<div class="sec ok"><h4>✅ A great answer covers</h4><ul>' + jq.points.map(p => "<li>" + esc(p) + "</li>").join("") + "</ul></div>" +
      (jq.better ? '<div class="sec deep"><h4>🏅 Coach</h4><p>' + esc(jq.better) + "</p></div>" : "") +
      '<button class="btn act" id="funJNext">Next question →</button>';
    $("#funJNext").onclick = judgeNew;
  }

  // ---------- 🃏 flash cards ----------
  let fc = [], fi = 0;
  function flashStart() {
    const known = store.get("funKnown", {});
    const cards = (window.ECODOST && ECODOST.cards || []).filter(c => !known[c.id]);
    fc = shuffle(cards).slice(0, 15); fi = 0; flashShow();
  }
  function flashShow() {
    const box = $("#funFlash"), known = Object.keys(store.get("funKnown", {})).length;
    if (!fc.length || fi >= fc.length) { box.innerHTML = '<p>🎉 Round done! You know <b>' + known + "</b> cards.</p><button class=\"btn\" id=\"funFNew\">🃏 New round</button>"; $("#funFNew").onclick = flashStart; return; }
    const c = fc[fi];
    box.innerHTML = '<div class="flash" id="funCard" tabindex="0" role="button" aria-label="Flip the card"><div class="flash-in"><div class="flash-front"><small>Card ' + (fi + 1) + " of " + fc.length + "</small><b>" + esc(c.q) + '</b><span class="tiny muted">Tap to flip</span></div><div class="flash-back"><p>' + esc(c.answer) + "</p></div></div></div>" +
      '<div class="viva-row flash-btns"><button class="btn ghost" id="funFAgain">↩️ Practise again</button><button class="btn" id="funFKnow">✅ I know it</button></div><p class="tiny muted">On a phone you can also swipe: right = I know it, left = practise again.</p>';
    const card = $("#funCard");
    const flip = () => card.classList.toggle("flipped");
    card.onclick = flip; card.onkeydown = e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(); } };
    let x0 = null;
    card.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
    card.addEventListener("touchend", e => { if (x0 == null) return; const dx = e.changedTouches[0].clientX - x0; x0 = null; if (dx > 60) know(); else if (dx < -60) again(); }, { passive: true });
    const know = () => { const k = store.get("funKnown", {}); k[c.id] = true; store.set("funKnown", k); award(1, "Flash card"); fi++; flashShow(); };
    const again = () => { fc.push(c); fi++; activity(); flashShow(); };
    $("#funFKnow").onclick = know; $("#funFAgain").onclick = again;
  }

  // ---------- 🗓️ countdown calendar ----------
  const CAL_TASKS = ["Explain your biogas plant in 3 sentences", "Say “What is e-waste?” in your own words", "Play one Bin Sorter round", "Name two UP schemes", "Say your opening line to a mirror", "Explain the 7Rs on your fingers", "Answer one 🏅 real judge question", "Say one Hindi line from Thoughts", "Explain your water filter layers", "Tell Mummy one Delhi or UP fact", "Practise your closing line with a smile", "Explain why haze comes in winter", "Play Model Memory once", "Explain your hydrogen train", "Ask Eco-Dost a new question"];
  function calHTML() {
    const ev = S().student.nextEvent, start = ev ? (ev.travel || ev.start) : "2026-11-25";  // count down to travel day
    const first = "2026-11-01", t = today(), n = dayDiff(first, start);
    const facts = (window.ECODOST && ECODOST.cards || []).filter(c => c.fun);
    const opened = store.get("funDoors", {});
    let h = '<div class="cal">';
    for (let i = 0; i <= n; i++) {
      const d = new Date(first + "T00:00:00"); d.setDate(d.getDate() + i); const ds = fmt(d);
      const can = ds <= t, isFair = ds === start, op = opened[ds];
      h += '<button class="door' + (op ? " open" : "") + (isFair ? " fair" : "") + (ds === t ? " today" : "") + '" data-d="' + ds + '" data-i="' + i + '"' + (can ? "" : " disabled") + ' aria-label="' + d.getDate() + ' November">' +
        (isFair ? "🚆" : op ? "✅" : can ? "🎁" : "🔒") + "<small>" + d.getDate() + " Nov</small></button>";
    }
    h += '</div><div id="funDoorOut" aria-live="polite"></div>';
    return { h, facts };
  }
  function openDoor(btn, facts) {
    const i = +btn.dataset.i, ds = btn.dataset.d, ev = S().student.nextEvent;
    if (ev && ds === (ev.travel || ev.start)) { $("#funDoorOut").innerHTML = '<div class="door-out"><b>🚆 Travel day — off to ' + esc(ev.place) + '!</b><p>Have a safe journey, Avni. The national fair is on 27–29 November. You are ready! 🌟</p></div>'; party(); return; }
    const f = facts.length ? facts[(i * 7) % facts.length] : null;
    const op = store.get("funDoors", {}); const first = !op[ds]; op[ds] = true; store.set("funDoors", op);
    if (first) { award(1, "Calendar door"); party(); }
    $("#funDoorOut").innerHTML = '<div class="door-out"><b>🎁 ' + esc(btn.querySelector("small").textContent) + "</b><p>📝 <b>Task:</b> " + esc(CAL_TASKS[i % CAL_TASKS.length]) + "</p>" + (f ? "<p>💡 <b>Fun fact:</b> " + esc(f.fun) + "</p>" : "") + "</div>";
    btn.classList.add("open"); btn.firstChild.textContent = "✅";
  }

  // ---------- 📸 photo badge ----------
  function photoBadge(file) {
    const img = new Image(), url = URL.createObjectURL(file);
    img.onload = () => {
      const W = 1080, H = 1350, c = document.createElement("canvas"); c.width = W; c.height = H; const g = c.getContext("2d");
      g.fillStyle = "#2e7a4d"; g.fillRect(0, 0, W, H);
      const pad = 60, iw = W - pad * 2, ih = H - 380, r = Math.max(iw / img.width, ih / img.height), sw = iw / r, sh = ih / r;
      g.drawImage(img, (img.width - sw) / 2, (img.height - sh) / 2, sw, sh, pad, pad, iw, ih);
      g.strokeStyle = "#f8e8cc"; g.lineWidth = 14; g.strokeRect(pad, pad, iw, ih);
      g.fillStyle = "#fffbf3"; g.textAlign = "center";
      g.font = "bold 82px 'Baloo 2', sans-serif"; g.fillText("⭐ Science Star ⭐", W / 2, H - 230);
      const st = S().student;
      g.font = "600 46px Nunito, sans-serif"; g.fillText(st.name + " · " + st.className, W / 2, H - 160);
      g.font = "40px Nunito, sans-serif"; g.fillText("Clean India Mission and Waste Management", W / 2, H - 105);
      g.fillText("🏆 Malerkotla · 🏆 North Zone, Delhi · Next: Gorakhpur", W / 2, H - 55);
      const out = c.toDataURL("image/png");
      $("#funPhotoOut").innerHTML = '<img src="' + out + '" alt="Your Science Star photo badge" class="badge-img"><a class="btn" download="science-star.png" href="' + out + '">⬇️ Save my badge</a>';
      URL.revokeObjectURL(url); award(2, "Photo badge"); party();
    };
    img.src = url;
  }

  // ---------- 👨‍👩‍👧 family challenge ----------
  let fam = null;
  function famStart() {
    fam = { qs: shuffle(S().viva).slice(0, 5), i: 0, score: 0 };
    famShow();
  }
  function famShow() {
    const box = $("#funFam");
    if (fam.i >= fam.qs.length) {
      const best = Math.max(store.get("funFamBest", 0), fam.score); store.set("funFamBest", best);
      box.innerHTML = '<p class="fam-final">🎉 Family score: <b>' + fam.score + " / " + fam.qs.length * 2 + "</b> · best " + best + '</p><button class="btn" id="funFamAgain">👨‍👩‍👧 Play again</button>';
      award(fam.score >= 6 ? 3 : 1, "Family challenge"); if (fam.score >= 6) party();
      $("#funFamAgain").onclick = famStart; return;
    }
    const q = fam.qs[fam.i];
    box.innerHTML = '<p class="small muted">For Mummy or Papa: read the question aloud, listen to Avni, then check the answer below.</p><div class="judge-bubble"><small>Question ' + (fam.i + 1) + " of " + fam.qs.length + "</small><br>" + esc(q.q) + "</div>" +
      '<details class="fam-ans"><summary>👀 Show the answer (grown-ups only!)</summary><ul>' + q.points.map(p => "<li>" + esc(p) + "</li>").join("") + "</ul></details>" +
      '<div class="viva-row"><button class="btn" data-s="2">🌟 Great answer</button><button class="btn alt" data-s="1">🙂 Half right</button><button class="btn ghost" data-s="0">🔁 Needs practice</button></div>';
    $$("[data-s]", box).forEach(b => b.onclick = () => { fam.score += +b.dataset.s; fam.i++; sound(+b.dataset.s ? "ok" : "bad"); activity(); famShow(); });
  }

  // ---------- 🏆 trophy shelf ----------
  function shelfHTML() {
    const st = S().student, ev = st.nextEvent;
    const real = (st.achievements || []).map(a => '<div class="trophy got"><span>🏆</span><small>' + esc(a.replace(/^🏆\s*/, "")) + "</small></div>").join("") +
      (ev ? '<div class="trophy empty"><span>🏆</span><small>' + esc(ev.place) + " — waiting for you!</small></div>" : "");
    const g = store.get("games", {}), stamps = Object.keys(store.get("tripStamps", {})).length, known = Object.keys(store.get("funKnown", {})).length;
    const gstars = Object.values(g.best || {}).reduce((a, b) => a + (b.stars || 0), 0), s = streak(), best10 = store.get("funDays", []).length;
    const P = pet();
    const tiles = [["⭐", points(), "stars"], [P.st.e, P.st.name, "Eco-Dost pet"], ["🔥", s, "day streak"], ["🎮", gstars, "best game stars"], ["🛂", stamps, "passport stamps"], ["🃏", known, "cards I know"], ["👨‍👩‍👧", store.get("funFamBest", 0), "best family score"],
      [best10 >= 10 ? "🏅" : "🔒", best10 >= 10 ? "Earned!" : best10 + "/10", "10-day practice badge"]];
    return '<div class="shelf">' + real + '</div><div class="shelf-tiles">' + tiles.map(t => '<div class="st"><span>' + t[0] + "</span><b>" + esc(String(t[1])) + "</b><small>" + esc(t[2]) + "</small></div>").join("") + "</div>";
  }

  // ---------- page ----------
  function award(n, why) {
    activity();
    if (window.EcoDost && EcoDost.award) EcoDost.award(n);
    else { const e = store.get("ecodost", {}); e.points = (e.points || 0) + n; store.set("ecodost", e); }
    const t = $("#funToast"); if (t) { t.textContent = "+" + n + " ⭐ " + why; t.classList.add("show"); clearTimeout(award.t); award.t = setTimeout(() => t.classList.remove("show"), 2000); }
    renderTop();
  }
  function renderTop() {
    if ($("#funPet")) $("#funPet").innerHTML = petCardHTML(false);
    if ($("#funShelf")) $("#funShelf").innerHTML = shelfHTML();
    if ($("#homePet")) $("#homePet").innerHTML = '<a href="#fun" class="home-pet-link">' + petCardHTML(true) + "</a>";
  }
  function render() {
    const root = $("#funBody"); if (!root) return;
    const cal = calHTML();
    root.innerHTML =
      '<div class="card" id="funPet"></div>' +
      '<div class="fun-grid">' +
      '<section class="card fun-box"><h2>🎡 Spin the wheel</h2><p class="small muted">Not sure what to do? Let the wheel choose a small task.</p>' + wheelHTML() + "</section>" +
      '<section class="card fun-box"><h2>🎤 Judge game</h2><p class="small muted">A judge asks a real question. Answer, and get up to ⭐⭐⭐.</p><div id="funJudge"><button class="btn" id="funJStart">🧑‍⚖️ Start</button></div></section>' +
      '<section class="card fun-box"><h2>🃏 Flash cards</h2><p class="small muted">Tap to flip. Keep the ones you know, practise the rest.</p><div id="funFlash"><button class="btn" id="funFStart">🃏 Start a round</button></div></section>' +
      '<section class="card fun-box"><h2>👨‍👩‍👧 Family challenge</h2><p class="small muted">Mummy or Papa asks 5 questions and scores you.</p><div id="funFam"><button class="btn" id="funFamStart">Start the challenge</button></div></section>' +
      "</div>" +
      '<section class="card"><h2>🗓️ Countdown calendar</h2><p class="small muted">One door opens each day until you leave for Gorakhpur on 25 November. Each hides a small task and a fun fact.</p>' + cal.h + "</section>" +
      '<section class="card"><h2>🏆 My trophy shelf</h2><div id="funShelf"></div></section>' +
      '<section class="card"><h2>📸 Science Star photo badge</h2><p class="small muted">Take a photo with your model, and get it in a Science Star frame to save. The photo stays on your phone.</p>' +
      '<label class="btn act photo-btn">📷 Take or choose a photo<input type="file" accept="image/*" capture="user" id="funPhoto" hidden></label><div id="funPhotoOut"></div></section>' +
      '<p class="small"><label><input type="checkbox" id="funSoundOn"> 🎵 Sounds</label></p>' +
      '<div class="ed-toast" id="funToast" role="status"></div>';
    renderTop();
    $("#funSpin").onclick = spin;
    $("#funJStart").onclick = judgeNew;
    $("#funFStart").onclick = flashStart;
    $("#funFamStart").onclick = famStart;
    $$(".door:not([disabled])").forEach(b => b.onclick = () => openDoor(b, cal.facts));
    $("#funPhoto").onchange = e => { const f = e.target.files && e.target.files[0]; if (f) photoBadge(f); };
    $("#funSoundOn").checked = store.get("funSound", true);
    $("#funSoundOn").onchange = () => store.set("funSound", $("#funSoundOn").checked);
  }
  function init(o) {
    store = o.store; esc = o.esc;
    // stars earned anywhere (games, Eco-Dost, trip) also keep the streak and grow the pet
    if (window.EcoDost && EcoDost.award && !EcoDost.award.funWrapped) {
      const orig = EcoDost.award; EcoDost.award = n => { activity(); orig(n); renderTop(); }; EcoDost.award.funWrapped = true;
    }
    render();
  }
  window.Fun = { init, render: () => { render(); }, renderTop, party, sound, confetti, activity };
})();
