/* Extra pages: 🇮🇳 Hindi mode, 🔢 Numbers master, ⚖️ Home waste diary, 📔 Trip diary, 🏆 Champion certificate,
   plus the "works without internet" note. Everything is saved only on this device. */
(function () {
  "use strict";
  const $ = s => document.querySelector(s), $$ = s => Array.from(document.querySelectorAll(s));
  let S, store, esc;
  const award = (n, why) => { if (window.Fun && Fun.award) Fun.award(n, why); };
  const party = () => { if (window.Fun && Fun.party) Fun.party(); };
  const V = () => window.Voice;

  // ======================= 🇮🇳 HINDI MODE =======================
  function renderHindi() {
    const H = window.HINDI, box = $("#hindiBody"); if (!H || !box) return;
    const heard = store.get("hindiHeard", {});
    box.innerHTML =
      '<div class="card"><h2>🇮🇳 हिंदी में अभ्यास (Hindi mode)</h2><p>' + esc(H.intro) + '</p><p class="small muted">💡 ' + esc(H.tip) + "</p>" +
      '<p class="small">✅ Heard ' + Object.keys(heard).filter(k => H.stage.some(s => s.id === k)).length + " of " + H.stage.length + " speech parts</p>" +
      '<div class="row-btns"><button class="btn" id="hiAll">🔊 पूरा भाषण सुनें (whole speech)</button> <button class="btn ghost" id="hiStop">⏹ Stop</button></div>' +
      '<p class="tiny muted" id="hiVoiceNote"></p></div>' +
      '<div class="card"><h2>🎤 मेरा भाषण (My speech in Hindi)</h2>' +
      H.stage.map((s, i) => '<details class="hi-part"' + (i === 0 ? " open" : "") + '><summary><b>' + (i + 1) + ". " + esc(s.title) + "</b>" + (heard[s.id] ? " ✅" : "") + '</summary><p class="hi-text" lang="hi">' + esc(s.text) + '</p><button class="btn small" data-hs="' + i + '">🔊 सुनें</button></details>').join("") + "</div>" +
      '<div class="card"><h2>❓ हिंदी में प्रश्न और उत्तर</h2><p class="small muted">Read the question, answer out loud in Hindi, then tap to check.</p>' +
      H.qa.map((x, i) => '<details class="hi-part"><summary><b lang="hi">' + esc(x.q) + '</b><br><span class="tiny muted">' + esc(x.en) + '</span></summary><p class="hi-text" lang="hi">' + esc(x.a) + '</p><button class="btn small" data-hq="' + i + '">🔊 सुनें</button></details>').join("") + "</div>";
    const hasHindiVoice = window.speechSynthesis && speechSynthesis.getVoices().some(v => /^hi/i.test(v.lang));
    $("#hiVoiceNote").textContent = hasHindiVoice ? "" : "If the voice sounds wrong, install a Hindi voice in your phone's text-to-speech settings (Google: Hindi). Reading it yourself works too!";
    const mark = id => { const h = store.get("hindiHeard", {}); h[id] = true; store.set("hindiHeard", h); };
    $$("[data-hs]").forEach(b => b.onclick = async () => {
      const s = H.stage[+b.dataset.hs]; V().stopSpeaking(); b.textContent = "🔊 …";
      await V().speak(s.text, { lang: "hi", rate: 0.9 }); b.textContent = "🔊 सुनें";
      if (!store.get("hindiHeard", {})[s.id]) { mark(s.id); award(1, "Hindi speech part"); }
    });
    $$("[data-hq]").forEach(b => b.onclick = () => { V().stopSpeaking(); V().speak(H.qa[+b.dataset.hq].a, { lang: "hi", rate: 0.9 }); });
    $("#hiStop").onclick = () => V().stopSpeaking();
    $("#hiAll").onclick = async () => {
      V().stopSpeaking(); await new Promise(r => setTimeout(r, 50));
      for (const s of H.stage) {
        if ($("#tab-hindi").hidden) break;
        const before = Date.now(); await V().speak(s.text, { lang: "hi", rate: 0.9 });
        if (Date.now() - before < 800) break; // stopped
        mark(s.id);
      }
    };
  }

  // ======================= 🔢 NUMBERS MASTER =======================
  function numberQs() {
    return [
      { q: "Swachh Bharat Mission was launched on 2 October ____.", a: "2014", o: ["2004", "2014", "2019", "2024"], why: "2 October 2014, Gandhi Ji's birth anniversary." },
      { q: "It was launched on ____ October 2014, Gandhi Ji's birth anniversary.", a: "2", o: ["2", "14", "15", "26"], why: "2 October is Gandhi Jayanti." },
      { q: "In cities, more than ____ lakh home toilets were built.", a: "63", o: ["6", "36", "63", "630"], why: "More than 63 lakh home toilets: more than the target." },
      { q: "More than ____ lakh community and public toilet seats were built in cities.", a: "6", o: ["6", "16", "60", "63"], why: "More than 6 lakh community and public toilet seats." },
      { q: "About ____ lakh villages are ODF Plus.", a: "5.7", o: ["1.5", "5.7", "7.5", "57"], why: "About 5.7 lakh villages are ODF Plus: free from open defecation and managing their waste." },
      { q: "My project goes beyond the 3Rs to the ____ Rs.", a: "7", o: ["4", "5", "7", "10"], why: "Refuse, Reduce, Reuse, Repair, Repurpose, Recycle, Recover." },
      { q: "The Plastic Man of India got the Padma Shri in ____.", a: "2018", o: ["2014", "2016", "2018", "2022"], why: "Prof. Rajagopalan Vasudevan, Padma Shri 2018." },
      { q: "In July 2026, India crossed ____ gigawatts of non-fossil power.", a: "300", o: ["100", "200", "300", "500"], why: "300 GW crossed; the goal is 500 GW by 2030." },
      { q: "India's goal is ____ gigawatts of non-fossil power by 2030.", a: "500", o: ["300", "450", "500", "1000"], why: "500 GW by 2030." },
      { q: "India's first hydrogen train was flagged off on ____ July 2026.", a: "17", o: ["2", "12", "15", "17"], why: "17 July 2026, Jind–Sonipat route in Haryana." },
      { q: "Biogas is mainly methane: about ____ per cent.", a: "50–70", o: ["5–10", "20–30", "50–70", "90–100"], why: "Methane is about 50–70%; most of the rest is carbon dioxide." },
      { q: "The E-Waste Rules 2022 cover ____ types of equipment.", a: "106", o: ["21", "56", "106", "206"], why: "106 types, in force from 1 April 2023." },
      { q: "The E-Waste Rules 2022 came into force on 1 April ____.", a: "2023", o: ["2022", "2023", "2024", "2025"], why: "1 April 2023." },
      { q: "Uttar Pradesh banned polythene bags from 15 July ____.", a: "2018", o: ["2014", "2016", "2018", "2022"], why: "15 July 2018. India banned many single-use plastic items in 2022." },
      { q: "The first Saraswati Shishu Mandir opened in Gorakhpur in ____.", a: "1952", o: ["1947", "1952", "1977", "1990"], why: "1952, at Pakki Bagh, Gorakhpur." },
      { q: "The Gorakhpur fair is the ____th national Vidya Bharati Vigyan Mela.", a: "24", o: ["12", "20", "24", "36"], why: "The 24th Akhil Bharatiya Vigyan Mela, 27–29 November 2026." },
      { q: "The judges mark my project out of ____.", a: String(S.marks.length * 10), o: ["20", "40", "50", "100"], why: "The marking scheme has " + S.marks.length + " parts of 10 marks each." },
      { q: "My water filter has ____ layers.", a: "3", o: ["2", "3", "4", "5"], why: "Stones & gravel → charcoal → cotton (no sand layer)." },
      { q: "Lucknow was the ____ cleanest big city (over 10 lakh people) in Swachh Survekshan 2024-25.", a: "3rd", o: ["1st", "2nd", "3rd", "10th"], why: "Lucknow was 3rd among cities with more than 10 lakh people." }
    ];
  }
  let num = null;
  function renderNumbers() {
    const box = $("#numbersBody"); if (!box) return;
    const best = store.get("numBest", 0);
    box.innerHTML = '<div class="card"><h2>🔢 Numbers master</h2><p>Judges love exact numbers. Get 10 quick questions: pick the right number. Score 8 or more to become a <b>Numbers master</b>.</p>' +
      '<p class="small">🏅 Best score: <b>' + best + "/10</b>" + (best >= 8 ? " · Numbers master ✅" : "") + '</p><button class="btn" id="numGo">▶️ Start</button><div id="numPlay"></div></div>';
    $("#numGo").onclick = () => {
      const all = numberQs().sort(() => Math.random() - 0.5).slice(0, 10);
      num = { qs: all, i: 0, right: 0 }; $("#numGo").hidden = true; ask();
    };
  }
  function ask() {
    const g = num, x = g.qs[g.i], opts = x.o.slice().sort(() => Math.random() - 0.5);
    $("#numPlay").innerHTML = '<p class="tiny muted">Question ' + (g.i + 1) + " of " + g.qs.length + " · ✅ " + g.right + '</p><p class="num-q">' + esc(x.q).replace("____", "<b>____</b>") + '</p><div class="num-opts">' +
      opts.map(o => '<button class="btn ghost num-o" data-o="' + esc(o) + '">' + esc(o) + "</button>").join("") + '</div><p id="numWhy" class="small"></p>';
    $$(".num-o").forEach(b => b.onclick = () => {
      const ok = b.dataset.o === x.a; if (ok) g.right++; else if (window.Weak) Weak.add("Numbers master", x.q.replace("____", "…"), x.a + ". " + x.why);
      if (window.Fun && Fun.sound) Fun.sound(ok ? "ok" : "bad");
      $$(".num-o").forEach(c => { c.disabled = true; if (c.dataset.o === x.a) c.classList.add("num-right"); else if (c === b) c.classList.add("num-wrong"); });
      $("#numWhy").innerHTML = (ok ? "✅ Right! " : "❌ It is <b>" + esc(x.a) + "</b>. ") + esc(x.why) + ' <button class="btn small" id="numNext">' + (g.i + 1 < g.qs.length ? "Next →" : "See score") + "</button>";
      $("#numNext").onclick = () => { g.i++; if (g.i < g.qs.length) ask(); else finish(); };
    });
  }
  function finish() {
    const g = num, best = store.get("numBest", 0);
    if (g.right > best) store.set("numBest", g.right);
    award(g.right >= 8 ? 3 : 1, "Numbers master");
    if (g.right >= 8) party();
    $("#numPlay").innerHTML = '<p class="num-q">' + (g.right >= 8 ? "🏆 Numbers master! " : "Good try! ") + "You got <b>" + g.right + "/10</b>.</p>" + (g.right > best ? "<p>⭐ New best score!</p>" : "");
    $("#numGo").hidden = false; $("#numGo").textContent = "🔁 Play again";
  }

  // ======================= ⚖️ HOME WASTE DIARY =======================
  function renderWaste() {
    const box = $("#wasteBody"); if (!box) return;
    const d = store.get("wasteDiary", { days: [] }), days = d.days;
    while (days.length < 7) days.push({ wet: "", dry: "" });
    const rows = days.map((x, i) => '<tr><th>Day ' + (i + 1) + '</th><td><input type="number" inputmode="decimal" min="0" step="0.05" data-k="wet" data-i="' + i + '" value="' + esc(x.wet) + '" aria-label="Day ' + (i + 1) + ' wet waste in kg"></td><td><input type="number" inputmode="decimal" min="0" step="0.05" data-k="dry" data-i="' + i + '" value="' + esc(x.dry) + '" aria-label="Day ' + (i + 1) + ' dry waste in kg"></td></tr>').join("");
    box.innerHTML = '<div class="card"><h2>⚖️ My home waste diary</h2><p>For 7 days, weigh your family\'s waste and write it here. Then you can tell the judges: <i>"I measured my own family\'s waste!"</i> Judges love real data.</p>' +
      '<details><summary class="small"><b>How to weigh it</b></summary><ul class="small"><li>Keep two bins at home: <b>green for wet</b> (peels, leftover food, tea leaves) and <b>blue for dry</b> (paper, plastic, cans, glass).</li><li>Before throwing them out each day, weigh each bag on a kitchen scale (ask an adult to help).</li><li>Or stand on a bathroom scale with the bag, then without it, and take the difference.</li><li>Write the weight in kilograms (kg). 500 g = 0.5 kg. Don\'t include e-waste or medicines; those go to special collection.</li></ul></details>' +
      '<table class="waste-table"><thead><tr><th></th><th>🟢 Wet (kg)</th><th>🔵 Dry (kg)</th></tr></thead><tbody>' + rows + '</tbody></table>' +
      '<div id="wasteChart"></div><div id="wasteSum"></div><button class="btn ghost small" id="wasteClear">🗑️ Start again</button></div>';
    const save = () => { store.set("wasteDiary", { days }); draw(); };
    $$(".waste-table input").forEach(inp => inp.oninput = () => { days[+inp.dataset.i][inp.dataset.k] = inp.value; save(); });
    $("#wasteClear").onclick = () => { if (confirm("Clear all 7 days?")) { store.set("wasteDiary", { days: [] }); renderWaste(); } };
    function draw() {
      const n = v => Math.max(0, parseFloat(v) || 0);
      const filled = days.filter(x => x.wet !== "" || x.dry !== "");
      const max = Math.max(0.5, ...days.map(x => n(x.wet) + n(x.dry)));
      const W = 320, H = 170, bw = 30, gap = (W - 30 - 7 * bw) / 7;
      let bars = "";
      days.forEach((x, i) => {
        const wet = n(x.wet) / max * (H - 40), dry = n(x.dry) / max * (H - 40), X = 30 + i * (bw + gap) + gap / 2;
        bars += '<rect x="' + X + '" y="' + (H - 20 - wet) + '" width="' + bw + '" height="' + wet + '" fill="#2e7d32"><title>Day ' + (i + 1) + " wet " + n(x.wet) + ' kg</title></rect>';
        bars += '<rect x="' + X + '" y="' + (H - 20 - wet - dry) + '" width="' + bw + '" height="' + dry + '" fill="#1565c0"><title>Day ' + (i + 1) + " dry " + n(x.dry) + ' kg</title></rect>';
        bars += '<text x="' + (X + bw / 2) + '" y="' + (H - 6) + '" text-anchor="middle" font-size="11" fill="currentColor">D' + (i + 1) + "</text>";
      });
      $("#wasteChart").innerHTML = '<svg viewBox="0 0 ' + W + " " + H + '" class="waste-svg" role="img" aria-label="Bar chart of wet and dry waste for 7 days"><line x1="28" y1="' + (H - 20) + '" x2="' + W + '" y2="' + (H - 20) + '" stroke="currentColor" stroke-opacity=".3"/>' +
        '<text x="0" y="14" font-size="11" fill="currentColor">' + max.toFixed(1) + ' kg</text>' + bars + '</svg><p class="tiny"><span class="sw" style="background:#2e7d32"></span> wet &nbsp; <span class="sw" style="background:#1565c0"></span> dry</p>';
      if (!filled.length) { $("#wasteSum").innerHTML = '<p class="small muted">Fill in Day 1 to see your chart.</p>'; return; }
      const wet = filled.reduce((a, x) => a + n(x.wet), 0), dry = filled.reduce((a, x) => a + n(x.dry), 0), tot = wet + dry;
      const pct = tot ? Math.round(wet / tot * 100) : 0, per = tot / filled.length;
      $("#wasteSum").innerHTML = '<div class="card-lite"><p><b>' + filled.length + " day" + (filled.length > 1 ? "s" : "") + " so far:</b> " + tot.toFixed(2) + " kg in total, " + wet.toFixed(2) + " kg wet (" + pct + "%) and " + dry.toFixed(2) + " kg dry.</p><p>About <b>" + per.toFixed(2) + " kg a day</b>. In one year that is about <b>" + Math.round(per * 365) + " kg</b>.</p>" +
        (filled.length >= 7 ? '<p class="say">🎤 Tell the judges: "For one week I weighed my family\'s waste. We made about ' + per.toFixed(1) + " kg a day, and " + pct + "% of it was wet waste. All of that wet waste can become compost or biogas instead of going to a landfill!\"</p>" : '<p class="small muted">Fill all 7 days to get your line for the judges.</p>') + "</div>";
      if (filled.length >= 7 && !store.get("wasteDone", false)) { store.set("wasteDone", true); award(3, "Waste diary"); party(); }
    }
    draw();
  }

  // ======================= 📔 TRIP DIARY (photos in IndexedDB) =======================
  let dbp = null;
  function db() {
    if (dbp) return dbp;
    dbp = new Promise((ok, no) => {
      if (!window.indexedDB) { no(new Error("no db")); return; }
      const r = indexedDB.open("coachDiary", 1);
      r.onupgradeneeded = () => r.result.createObjectStore("entries", { keyPath: "id" });
      r.onsuccess = () => ok(r.result); r.onerror = () => no(r.error);
    });
    return dbp;
  }
  const tx = (mode, fn) => db().then(d => new Promise((ok, no) => { const t = d.transaction("entries", mode), s = t.objectStore("entries"); const out = fn(s); t.oncomplete = () => ok(out && out.result); t.onerror = () => no(t.error); }));
  const allEntries = () => tx("readonly", s => s.getAll());
  function shrink(file) {
    return new Promise((ok, no) => {
      const img = new Image(), url = URL.createObjectURL(file);
      img.onload = () => {
        const k = Math.min(1, 1000 / Math.max(img.width, img.height)), c = document.createElement("canvas");
        c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
        c.getContext("2d").drawImage(img, 0, 0, c.width, c.height); URL.revokeObjectURL(url);
        c.toBlob(b => b ? ok(b) : no(new Error("photo")), "image/jpeg", 0.8);
      };
      img.onerror = () => { URL.revokeObjectURL(url); no(new Error("photo")); }; img.src = url;
    });
  }
  const urls = [];
  const DAYS = [["2026-11-25", "🚆 25 Nov · Travel day"], ["2026-11-26", "📍 26 Nov · Reach Gorakhpur"], ["2026-11-27", "🔬 27 Nov · Fair day 1"], ["2026-11-28", "🔬 28 Nov · Fair day 2"], ["2026-11-29", "🏆 29 Nov · Fair day 3"]];
  function renderDiary() {
    const box = $("#diaryBody"); if (!box) return;
    const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);
    box.innerHTML = '<div class="card"><h2>📔 My Gorakhpur trip diary</h2><p>Each day of the trip, add a photo and a few lines: what you saw, who you met, what the judges asked. It becomes your memory book!</p>' +
      '<p class="tiny muted">🔒 Photos and notes stay only on this phone. They are not uploaded anywhere.</p>' +
      '<div class="chips" id="dyDays">' + DAYS.map(d => '<button class="chip" data-d="' + d[0] + '">' + d[1] + "</button>").join("") + "</div>" +
      '<label class="small">Date <input type="date" id="dyDate" value="' + today + '"></label>' +
      '<textarea id="dyText" rows="4" placeholder="Today I… The judges asked me… My favourite stall was…"></textarea>' +
      '<label class="btn ghost small dy-photo">📷 Add a photo<input type="file" id="dyPhoto" accept="image/*" hidden></label> <span id="dyPhotoName" class="tiny muted"></span>' +
      '<div class="row-btns"><button class="btn" id="dySave">💾 Save to my diary</button></div><p id="dyMsg" class="small"></p></div>' +
      '<div class="card"><h2>📖 My memory book</h2><div id="dyList"><p class="small muted">Loading…</p></div><button class="btn ghost small" id="dyPrint">🖨️ Print / save my memory book</button></div>';
    let photo = null;
    $$("#dyDays .chip").forEach(b => b.onclick = () => { $("#dyDate").value = b.dataset.d; $$("#dyDays .chip").forEach(c => c.classList.toggle("active", c === b)); });
    $("#dyPhoto").onchange = e => { photo = e.target.files[0] || null; $("#dyPhotoName").textContent = photo ? "✅ " + photo.name : ""; };
    $("#dySave").onclick = async () => {
      const text = $("#dyText").value.trim(); if (!text && !photo) { $("#dyMsg").textContent = "Write something or add a photo first."; return; }
      $("#dyMsg").textContent = "Saving…";
      try {
        const blob = photo ? await shrink(photo) : null;
        await tx("readwrite", s => s.put({ id: Date.now(), date: $("#dyDate").value || today, text, photo: blob }));
        $("#dyText").value = ""; photo = null; $("#dyPhoto").value = ""; $("#dyPhotoName").textContent = "";
        $("#dyMsg").textContent = "✅ Saved!"; award(1, "Trip diary"); list();
      } catch (e) { $("#dyMsg").textContent = "Sorry, this browser could not save it. Try Chrome, and make sure the phone is not full."; }
    };
    $("#dyPrint").onclick = printBook;
    list();
  }
  function label(date) { const d = DAYS.find(x => x[0] === date); return d ? d[1] : new Date(date + "T00:00").toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }); }
  async function list() {
    let es; try { es = await allEntries(); } catch (e) { $("#dyList").innerHTML = '<p class="small">This browser cannot store the diary. Please use Chrome.</p>'; return; }
    urls.splice(0).forEach(u => URL.revokeObjectURL(u));
    es.sort((a, b) => a.date.localeCompare(b.date) || a.id - b.id);
    $("#dyList").innerHTML = es.length ? es.map(e => {
      let img = ""; if (e.photo) { const u = URL.createObjectURL(e.photo); urls.push(u); img = '<img src="' + u + '" alt="Trip photo" class="dy-img">'; }
      return '<div class="dy-entry"><p class="dy-date"><b>' + esc(label(e.date)) + '</b> <button class="linkish tiny" data-del="' + e.id + '">delete</button></p>' + img + (e.text ? '<p class="dy-text">' + esc(e.text) + "</p>" : "") + "</div>";
    }).join("") : '<p class="small muted">No pages yet. Your first page will appear here.</p>';
    $$("[data-del]").forEach(b => b.onclick = async () => { if (!confirm("Delete this diary page?")) return; await tx("readwrite", s => s.delete(+b.dataset.del)); list(); });
  }
  async function printBook() {
    const es = (await allEntries()).sort((a, b) => a.date.localeCompare(b.date) || a.id - b.id);
    const toData = b => new Promise(ok => { const r = new FileReader(); r.onload = () => ok(r.result); r.readAsDataURL(b); });
    let body = "";
    for (const e of es) body += '<div class="p"><h2>' + esc(label(e.date)) + "</h2>" + (e.photo ? '<img src="' + await toData(e.photo) + '">' : "") + (e.text ? "<p>" + esc(e.text).replace(/\n/g, "<br>") + "</p>" : "") + "</div>";
    const w = window.open("", "_blank"); if (!w) { alert("Please allow pop-ups to print the memory book."); return; }
    w.document.write('<!doctype html><meta charset="utf-8"><title>My Gorakhpur memory book</title><style>body{font-family:sans-serif;max-width:720px;margin:20px auto;padding:0 16px;color:#222}h1{color:#2e7d32}img{max-width:100%;border-radius:10px}.p{page-break-inside:avoid;margin-bottom:28px;border-bottom:1px solid #ddd;padding-bottom:16px}</style>' +
      "<h1>📔 My Gorakhpur memory book</h1><p>" + esc(S.student.name) + " · " + esc(S.student.className) + " · " + esc(S.student.topic) + "<br>24th Akhil Bharatiya Vigyan Mela, Gorakhpur, 27–29 November 2026</p>" + (body || "<p>No pages yet.</p>") + "<script>setTimeout(()=>print(),400)<\/script>");
    w.document.close();
  }

  // ======================= 🏆 CHAMPION CERTIFICATE =======================
  function goals() {
    const H = window.HINDI, heard = store.get("hindiHeard", {}), done = store.get("stepsDone", {});
    const steps = S.presentation.filter(p => done[p.id] !== undefined ? done[p.id] : p.done).length;
    const viva = Object.keys(store.get("viva", {})).length;
    const wd = (store.get("wasteDiary", { days: [] }).days || []).filter(x => x.wet !== "" || x.dry !== "").length;
    const hi = H ? H.stage.filter(s => heard[s.id]).length : 0;
    return [
      { icon: "❓", name: "Try 50 viva questions", have: Math.min(viva, 50), need: 50, link: "#viva" },
      { icon: "🧭", name: "Practise every presentation step", have: steps, need: S.presentation.length, link: "#walk" },
      { icon: "🔢", name: "Score 8/10 in Numbers master", have: Math.min(store.get("numBest", 0), 8), need: 8, link: "#numbers" },
      { icon: "🧊", name: "Find all parts in the 3D Find it game", have: store.get("find3d", {}).done ? 1 : 0, need: 1, link: "#3d" },
      { icon: "🇮🇳", name: "Listen to every part of the Hindi speech", have: hi, need: H ? H.stage.length : 0, link: "#hindi" },
      { icon: "⚖️", name: "Fill 7 days of the home waste diary", have: wd, need: 7, link: "#wastediary" }
    ];
  }
  function renderCert() {
    const box = $("#certBody"); if (!box) return;
    const gs = goals(), all = gs.every(g => g.have >= g.need);
    if (all && !store.get("certDate")) { store.set("certDate", new Date().toISOString().slice(0, 10)); award(5, "Champion certificate"); party(); }
    box.innerHTML = '<div class="card"><h2>🏆 Clean India Champion certificate</h2><p>Finish all 6 goals and your certificate unlocks, with your name on it. Download it, print it, and show your family!</p>' +
      '<ul class="cert-goals">' + gs.map(g => { const ok = g.have >= g.need, pc = Math.round(Math.min(1, g.have / g.need) * 100); return '<li class="' + (ok ? "ok" : "") + '"><a href="' + g.link + '"><span>' + (ok ? "✅" : g.icon) + "</span><b>" + esc(g.name) + '</b><small>' + g.have + " / " + g.need + '</small><i style="--p:' + pc + '%"></i></a></li>'; }).join("") + "</ul>" +
      (all ? '<canvas id="certCanvas" width="1600" height="1130" class="cert-canvas"></canvas><button class="btn" id="certDl">⬇️ Download my certificate</button>'
        : '<p class="small muted">🔒 ' + gs.filter(g => g.have >= g.need).length + " of 6 goals done. Keep going, you can do it!</p>") + "</div>";
    if (all) { drawCert($("#certCanvas")); $("#certDl").onclick = () => { const a = document.createElement("a"); a.download = "Clean-India-Champion-certificate.png"; a.href = $("#certCanvas").toDataURL("image/png"); a.click(); }; }
  }
  function drawCert(c) {
    const g = c.getContext("2d"), W = c.width, H = c.height;
    g.fillStyle = "#fffdf5"; g.fillRect(0, 0, W, H);
    g.strokeStyle = "#2e7d32"; g.lineWidth = 18; g.strokeRect(30, 30, W - 60, H - 60);
    g.strokeStyle = "#f9a825"; g.lineWidth = 5; g.strokeRect(62, 62, W - 124, H - 124);
    ["#ff9933", "#ffffff", "#138808"].forEach((col, i) => { g.fillStyle = col; g.fillRect(W / 2 - 150, 100 + i * 12, 300, 12); });
    g.textAlign = "center"; g.fillStyle = "#1b5e20";
    g.font = "bold 50px Nunito, sans-serif"; g.fillText("🏆 Clean India Champion", W / 2, 230);
    g.fillStyle = "#555"; g.font = "32px Nunito, sans-serif"; g.fillText("This certificate is proudly given to", W / 2, 320);
    g.fillStyle = "#c2185b"; g.font = "bold 92px Nunito, sans-serif"; g.fillText(S.student.name, W / 2, 440);
    g.fillStyle = "#333"; g.font = "32px Nunito, sans-serif";
    g.fillText(S.student.className + " · " + S.student.school, W / 2, 510);
    g.fillText("for finishing every practice goal for the project", W / 2, 600);
    g.fillStyle = "#1b5e20"; g.font = "bold 40px Nunito, sans-serif"; g.fillText("“" + S.student.topic + "”", W / 2, 660);
    g.fillStyle = "#333"; g.font = "30px Nunito, sans-serif";
    g.fillText("before the 24th Akhil Bharatiya Vigyan Mela, Gorakhpur (27–29 November 2026)", W / 2, 730);
    g.font = "30px Nunito, sans-serif"; g.fillText("❓ 50 viva questions · 🧭 every step · 🔢 Numbers master · 🧊 3D Find it · 🇮🇳 Hindi speech · ⚖️ Waste diary", W / 2, 800);
    const d = store.get("certDate") || new Date().toISOString().slice(0, 10);
    g.textAlign = "left"; g.font = "28px Nunito, sans-serif"; g.fillStyle = "#333";
    g.fillText("Date: " + new Date(d + "T00:00").toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }), 140, 960);
    g.textAlign = "right"; g.fillText("Clean India Model Coach · TechnoTaau Team", W - 140, 960);
    g.textAlign = "center"; g.fillStyle = "#888"; g.font = "22px Nunito, sans-serif";
    g.fillText("A practice certificate from the Clean India Model Coach website. It is not an official fair certificate.", W / 2, 1040);
  }

  // ======================= 📶 OFFLINE =======================
  function offline() {
    const note = $("#offlineNote"); if (!("serviceWorker" in navigator) || !/^https:|^http:\/\/localhost/.test(location.href)) return;
    // when a new version of the website arrives, reload once so the newest pages show
    const hadController = !!navigator.serviceWorker.controller; let reloaded = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => { if (hadController && !reloaded) { reloaded = true; location.reload(); } });
    navigator.serviceWorker.register("sw.js", { updateViaCache: "none" }).then(reg => { reg.update().catch(() => {}); return reg; }).then(() => navigator.serviceWorker.ready).then(() => {
      if (note) note.innerHTML = "📶 <b>Works without internet:</b> this website is saved on this phone, so you can practise on the train too. (The 3D model works offline after you open it once with internet. The video needs internet.)";
    }).catch(() => {});
  }

  function render(id) {
    if (id === "hindi") renderHindi(); else if (id === "numbers") renderNumbers(); else if (id === "wastediary") renderWaste();
    else if (id === "diary") renderDiary(); else if (id === "cert") renderCert();
  }
  window.Extras = { init(o) { S = o.S; store = o.store; esc = o.esc; offline(); }, render };
})();
