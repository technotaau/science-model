/* App logic. Content lives in content.js; you normally don't need to edit this file. */
(function () {
  "use strict";
  const S = window.SITE;
  const V = window.Voice;
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  // ---------- helpers ----------
  const store = {
    get(key, fallback) {
      try { const v = localStorage.getItem("coach:" + key); return v === null ? fallback : JSON.parse(v); }
      catch (e) { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem("coach:" + key, JSON.stringify(value)); } catch (e) { /* storage unavailable */ }
    }
  };
  function esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  // *word* -> bold (stress), " / " -> pause mark
  function renderSample(s) {
    return esc(s)
      .replace(/\*([^*]+)\*/g, "<strong>$1</strong>")
      .replace(/(^|\s)\/(\s|$)/g, '$1<span class="pause">/</span>$2');
  }
  function list(items, cls) {
    return "<ul" + (cls ? ' class="' + cls + '"' : "") + ">" + items.map(i => "<li>" + esc(i) + "</li>").join("") + "</ul>";
  }
  function mmss(sec) {
    sec = Math.max(0, Math.floor(sec));
    return String(Math.floor(sec / 60)).padStart(2, "0") + ":" + String(sec % 60).padStart(2, "0");
  }
  const speakBtn = (id, label) => V.canSpeak ? '<button class="btn small ghost" id="' + id + '">' + (label || "🔊 Listen") + "</button>" : "";
  const compById = Object.fromEntries(S.components.map(c => [c.id, c]));
  const askById = Object.fromEntries(S.confirmList.map(a => [a.id, a]));
  const zoneName = { city: "Smart City", centre: "Centre / Park", village: "Smart Village", front: "Front demonstrations" };

  // ---------- router ----------
  const tabs = ["home", "stage", "project", "model", "walk", "viva", "voice", "score", "ask"];
  // ?visitor in the URL (from the stall QR code) shows only the clean project page
  const visitor = new URLSearchParams(location.search).has("visitor");
  function route() {
    const [tab, sub] = (location.hash.slice(1) || "home").split("/");
    const t = visitor ? "project" : tabs.includes(tab) ? tab : "home";
    V.stopSpeaking();
    if (t !== "viva") stopJudge();
    if (t !== "walk" && rehearsal) finishRehearsal(false);
    if (t !== "stage" && stageRun) endStageRun(false);
    if (t !== "voice") V.stopMedia();
    tabs.forEach(n => { $("#tab-" + n).hidden = n !== t; });
    $$("#tabs a").forEach(a => a.classList.toggle("active", a.dataset.tab === t));
    if (t === "model") showComp(sub && compById[sub] ? sub : currentComp);
    if (t === "home") renderProgress();
    if (t === "project") renderProjectProgress();
    if (t === "model" && sub) $("#compDetail").scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);

  // ---------- home ----------
  // The event date now comes from content.js (stage day); the old 2/3 October picker is gone
  function fairDate() { return S.stage ? S.stage.date : null; }
  function renderCountdown() {
    const chosen = fairDate();
    const fair = new Date((chosen || S.student.fairDate) + "T00:00:00");
    const today0 = new Date(); today0.setHours(0, 0, 0, 0);
    const days = Math.round((fair - today0) / 86400000);
    const when = fair.toDateString() + " — on stage";
    $("#countdown").textContent = days > 1 ? "⏳ " + days + " days to your presentation (" + when + ")"
      : days === 1 ? "⏳ Your stage presentation is tomorrow! Practise today, rest well tonight."
      : days === 0 ? "🌟 Stage day! Breathe, smile and enjoy it."
      : "🎉 Your presentation is done — well done!";
    $$('input[name="fairDate"]').forEach(r => { r.checked = r.value === chosen; });
  }
  function renderHome() {
    const st = S.student;
    $("#brandSub").textContent = st.name + " · " + st.className;
    $("#heroTopic").textContent = st.topic;
    $("#heroWho").textContent = st.name + " · " + st.className + " · " + st.school + " · Teacher: " + st.teacher;
    renderCountdown();
    $$('input[name="fairDate"]').forEach(r => r.addEventListener("change", () => { store.set("fairDate", r.value); renderCountdown(); }));

    $("#marksList").innerHTML = S.marks.map(m =>
      '<div class="mark"><b>' + m.icon + " " + esc(m.name) + " — 10</b><p>" + esc(m.tip) + "</p></div>").join("");
    $("#quotesList").innerHTML = S.quotes.map((x, i) => '<div class="quote"><span>' + renderSample(x) + "</span>" +
      (V.canSpeak ? '<button class="btn small ghost" data-q="' + i + '">🔊</button>' : "") + "</div>").join("");
    $$("#quotesList [data-q]").forEach(b => b.onclick = () => V.speakSample(S.quotes[+b.dataset.q]));

    const n = new Date();
    const today = n.getFullYear() + "-" + String(n.getMonth() + 1).padStart(2, "0") + "-" + String(n.getDate()).padStart(2, "0");
    $("#planList").innerHTML = (S.plan || []).map(p =>
      '<li class="' + (p.date === today ? "today" : "") + '"><b>' + esc(p.label) + ":</b> " + esc(p.task) + "</li>").join("");
  }
  function renderProgress() {
    const done = store.get("stepsDone", {});
    const stepsDone = S.presentation.filter(p => done[p.id] !== undefined ? done[p.id] : p.done).length;
    const viva = store.get("viva", {});
    const answered = Object.keys(viva).length;
    const confirmed = Object.values(store.get("ask", {})).filter(v => v && v.trim()).length;
    const hist = store.get("scores", []);
    const best = hist.length ? Math.max(...hist.map(h => h.total)) : "–";
    $("#progressTiles").innerHTML =
      tile(stepsDone + "/" + S.presentation.length, "steps practised") +
      tile(answered + "/" + S.viva.length, "viva questions tried") +
      tile(confirmed + "/" + S.confirmList.length, "answers from Ma'am") +
      tile(best + (hist.length ? "/50" : ""), "best self-score");
    function tile(v, l) { return '<div class="tile"><b>' + esc(v) + "</b><span>" + esc(l) + "</span></div>"; }
  }

  // ---------- model map ----------
  // Hotspot positions (% of photo width / height). Adjust if you replace model.jpg.
  const hotspots = {
    solar: [19, 20], citytoilets: [9, 46], ev: [25, 42], bus: [20, 63], train: [16, 86],
    india: [45, 24], ladder: [44, 55], windmill: [54, 12], pots: [38, 50], plasticman: [55, 40],
    bins: [44, 75], hut: [67, 27], digger: [78, 32], villagetoilet: [94, 40], biogas: [84, 50],
    factory: [60, 63], filter: [73, 74], wte: [91, 70]
  };
  let currentComp = "solar";
  function renderMap() {
    const map = $("#map");
    S.components.forEach((c, i) => {
      const pos = hotspots[c.id];
      if (!pos) return;
      const b = document.createElement("button");
      b.className = "hot" + (c.status === "ask" ? " ask" : "");
      b.style.left = pos[0] + "%"; b.style.top = pos[1] + "%";
      b.textContent = i + 1;
      b.title = c.name + (c.status === "ask" ? " (ask Ma'am)" : "");
      b.setAttribute("aria-label", (i + 1) + ". " + c.name);
      b.dataset.id = c.id;
      b.addEventListener("click", () => { location.hash = "model/" + c.id; });
      map.appendChild(b);
    });
    $("#compChips").innerHTML = S.components.map((c, i) =>
      '<button class="chip' + (c.status === "ask" ? " ask" : "") + '" data-id="' + c.id + '">' +
      (i + 1) + ". " + c.icon + " " + esc(c.name) + (c.status === "ask" ? " ❓" : "") + "</button>").join("");
    $$("#compChips .chip").forEach(b => b.addEventListener("click", () => { location.hash = "model/" + b.dataset.id; }));
  }
  function binGuideHTML() {
    const bins = (S.binGuide || []).map(b =>
      '<div class="bin"><div class="lid" style="background:' + b.color + ";color:" + b.text + '"><span>🗑️ ' + esc(b.name) + "</span>" +
      (b.status === "verified" ? '<span class="pill ok">✅ Sure</span>' : '<span class="pill ask">❓ Confirm</span>') + "</div>" +
      '<div class="body"><span class="stream">' + esc(b.stream) + "</span><span>" + esc(b.examples) + '</span><span class="muted">→ ' + esc(b.goesTo) + "</span></div></div>").join("");
    const sys = (S.binSystems || []).map(x => "<tr><td><b>" + esc(x.name) + "</b></td><td>" + esc(x.detail) + '</td><td class="muted">' + esc(x.src) + "</td></tr>").join("");
    return '<div class="sec plain"><h4>🎨 Dustbin colour code</h4><div class="bins">' + bins + "</div>" +
      '<p class="small">Green and blue are certain. Black and red follow <b>Chandigarh Municipal Corporation\'s</b> system; yellow is most likely biomedical waste. Confirm these three with Rajnish Ma\'am.</p>' +
      '<details><summary class="small"><b>Compare the three colour systems</b></summary><div class="hist-wrap"><table class="systems"><tr><th>System</th><th>Colours</th><th>Source</th></tr>' + sys + "</table></div></details></div>";
  }
  function showComp(id) {
    currentComp = id;
    const c = compById[id];
    V.stopSpeaking();
    $$(".hot").forEach(h => h.classList.toggle("active", h.dataset.id === id));
    $$("#compChips .chip").forEach(h => h.classList.toggle("active", h.dataset.id === id));
    let h = '<div class="zone">' + esc(zoneName[c.zone] || "") + "</div>" +
      "<h3>" + c.icon + " " + esc(c.name) + " " +
      (c.status === "ask" ? '<span class="pill ask">❓ Ask Ma\'am</span>' : '<span class="pill ok">✅ Confirmed</span>') + "</h3>" +
      '<p class="inmodel"><b>In my model:</b> ' + esc(c.inModel) + "</p>";
    if (c.ask && c.ask.length) {
      h += '<div class="sec ask"><h4>❓ Confirm with Rajnish Ma\'am</h4>' +
        list(c.ask.map(a => askById[a] ? askById[a].q : a)) +
        '<a href="#ask">Write her answer →</a></div>';
    }
    if (c.binGuide) h += binGuideHTML();
    if (c.say && c.say.length) h += '<div class="sec ok"><h4>✅ Key points to say (in your own words)</h4>' + list(c.say) +
      speakBtn("hearPoints", "🔊 Hear the key points") + "</div>";
    if (c.sample) h += '<details class="peek" id="peek"><summary>👀 Peek at a sample line (try yourself first!)</summary><p class="sample" id="compSample">' + V.sampleHTML(c.sample) + "</p>" +
      '<div class="viva-row">' + speakBtn("hearSample", "🔊 Listen with pauses") + (V.canSpeak ? '<button class="btn small stop" id="stopSample">■ Stop</button>' : "") + "</div></details>";
    if (c.how && c.how.length) h += '<div class="sec plain"><h4>🔬 How it works</h4>' + list(c.how) + "</div>";
    if (c.deeper && c.deeper.length) h += '<details class="sec deep"><summary>🧠 Deeper knowledge for tricky viva questions</summary>' + list(c.deeper) + "</details>";
    if (c.careful && c.careful.length) h += '<div class="sec bad"><h4>⚠️ Careful — don\'t say</h4>' + list(c.careful) + "</div>";
    if (c.point && c.point.length) h += '<div class="sec act"><h4>👉 Pointing, eye contact &amp; demo</h4>' + list(c.point) + "</div>";
    const idx = S.components.indexOf(c);
    const prev = S.components[idx - 1], next = S.components[idx + 1];
    h += '<div class="step-nav">' +
      (prev ? '<a class="btn ghost small" href="#model/' + prev.id + '">← ' + esc(prev.name) + "</a>" : "") +
      (next ? '<a class="btn small" href="#model/' + next.id + '">' + esc(next.name) + " →</a>" : "") + "</div>";
    $("#compDetail").innerHTML = h;
    if ($("#hearPoints")) $("#hearPoints").onclick = () => { V.stopSpeaking(); V.speakSample(c.say.join(" / ")); };
    if ($("#hearSample")) $("#hearSample").onclick = () => V.speakSample(c.sample, V.highlighter($("#compSample")));
    if ($("#stopSample")) $("#stopSample").onclick = () => { V.stopSpeaking(); V.highlighter($("#compSample"))(-1); };
  }

  // ---------- walkthrough ----------
  let stepIdx = 0;
  function stepDone(p) { const d = store.get("stepsDone", {}); return d[p.id] !== undefined ? d[p.id] : p.done; }
  function stepSample(p) { const c = p.comp ? compById[p.comp] : null; return p.sample || (c && c.sample) || ""; }
  function renderSteps() {
    $("#stepList").innerHTML = S.presentation.map((p, i) =>
      '<li><button data-i="' + i + '" class="' + (i === stepIdx ? "active" : "") + '">' +
      "<span>" + (i + 1) + ".</span> " + esc(p.title) +
      '<span class="tick">' + (stepDone(p) ? "✅" : "") + "</span></button></li>").join("");
    $$("#stepList button").forEach(b => b.addEventListener("click", () => { if (rehearsal) return; stepIdx = +b.dataset.i; renderSteps(); renderStep(); }));
  }
  function renderStep() {
    const p = S.presentation[stepIdx];
    const c = p.comp ? compById[p.comp] : null;
    const checks = store.get("cover:" + p.id, []);
    V.stopSpeaking();
    let h = "<h3>" + (stepIdx + 1) + ". " + esc(p.title) + "</h3>" +
      '<p class="small muted">Target time: about ' + p.seconds + " seconds" +
      (stepDone(p) ? ' · <span class="pill ok">✅ Practised</span>' : "") + "</p>" +
      '<div class="sec ok"><h4>✅ Cover these points (tick when you said them)</h4><ul class="cover">' +
      p.cover.map((x, i) => '<li><label><input type="checkbox" data-i="' + i + '"' + (checks[i] ? " checked" : "") + "> " + esc(x) + "</label></li>").join("") +
      "</ul></div>";
    if (p.cues && p.cues.length) h += '<div class="sec act"><h4>👉 Stage directions</h4>' + list(p.cues) + "</div>";
    if (c && c.careful && c.careful.length) h += '<div class="sec bad"><h4>⚠️ Remember — don\'t say</h4>' + list(c.careful) + "</div>";
    if (c && c.status === "ask") h += '<div class="sec ask"><h4>❓ Still to confirm</h4>Part of this section needs checking with Rajnish Ma\'am. <a href="#ask">See the list</a></div>';
    const sample = stepSample(p);
    if (sample) h += '<details class="peek"><summary>👀 Peek at a sample (after you try!)</summary><p class="sample" id="stepSample">' + V.sampleHTML(sample) + "</p>" +
      '<div class="viva-row">' + speakBtn("stepHear", "🔊 Listen with pauses") + (V.canSpeak ? '<button class="btn small stop" id="stepStop">■ Stop</button>' : "") + "</div></details>";
    h += '<div class="step-nav">' +
      '<button class="btn ghost" id="stepPrev"' + (stepIdx === 0 ? " disabled" : "") + ">← Back</button>" +
      '<button class="btn alt" id="stepMark">' + (stepDone(p) ? "Unmark" : "Mark as practised") + "</button>" +
      (c ? '<a class="btn ghost" href="#model/' + c.id + '">Open in Model tab</a>' : "") +
      '<button class="btn" id="stepNext"' + (stepIdx === S.presentation.length - 1 ? " disabled" : "") + ">Next →</button></div>";
    const card = $("#stepCard");
    card.className = "card step-card";
    card.innerHTML = h;
    $$(".cover input", card).forEach(cb => cb.addEventListener("change", () => {
      const arr = store.get("cover:" + p.id, []); arr[+cb.dataset.i] = cb.checked; store.set("cover:" + p.id, arr);
    }));
    if ($("#stepHear")) $("#stepHear").onclick = () => V.speakSample(sample, V.highlighter($("#stepSample")));
    if ($("#stepStop")) $("#stepStop").onclick = () => { V.stopSpeaking(); V.highlighter($("#stepSample"))(-1); };
    $("#stepPrev").onclick = () => { stepIdx--; renderSteps(); renderStep(); };
    $("#stepNext").onclick = () => { stepIdx++; renderSteps(); renderStep(); };
    $("#stepMark").onclick = () => {
      const d = store.get("stepsDone", {}); d[p.id] = !stepDone(p); store.set("stepsDone", d); renderSteps(); renderStep();
    };
  }
  let walkT0 = null, walkAcc = 0, walkTick = null;
  function walkUpdate() { $("#walkTimer").textContent = mmss(walkAcc + (walkT0 ? (Date.now() - walkT0) / 1000 : 0)); }
  $("#walkStart").addEventListener("click", () => {
    if (walkT0) { walkAcc += (Date.now() - walkT0) / 1000; walkT0 = null; clearInterval(walkTick); $("#walkStart").textContent = "▶ Resume"; }
    else { walkT0 = Date.now(); walkTick = setInterval(walkUpdate, 250); $("#walkStart").textContent = "⏸ Pause"; }
  });
  $("#walkReset").addEventListener("click", () => {
    walkT0 = null; walkAcc = 0; clearInterval(walkTick); walkUpdate(); $("#walkStart").textContent = "▶ Start timer";
  });

  // ---------- full rehearsal (voice cues + time per step) ----------
  let rehearsal = null;
  function startRehearsal() {
    rehearsal = { i: 0, t0: Date.now(), stepT0: Date.now(), times: [], tick: null };
    $("#rehearseBtn").textContent = "■ Stop rehearsal"; $("#rehearseBtn").classList.add("on");
    rehearsal.tick = setInterval(updateRehearsal, 200);
    showRehearsalStep();
  }
  function showRehearsalStep() {
    const r = rehearsal, p = S.presentation[r.i];
    stepIdx = r.i; renderSteps();
    r.stepT0 = Date.now();
    const card = $("#stepCard");
    card.className = "card step-card rehearse";
    card.innerHTML = '<div class="small muted">Step ' + (r.i + 1) + " of " + S.presentation.length + " · target " + p.seconds + " s</div>" +
      '<p class="big">' + esc(p.title) + "</p>" +
      '<div class="bar" id="rhBar"><i></i></div><div class="small"><b id="rhStep">0 s</b> this step · total <b id="rhTotal">00:00</b></div>' +
      (p.cues && p.cues.length ? '<div class="sec act"><h4>👉 Do this</h4>' + list(p.cues) + "</div>" : "") +
      '<div class="sec ok"><h4>✅ Remember to cover</h4>' + list(p.cover) + "</div>" +
      '<div class="step-nav"><button class="btn" id="rhNext">' + (r.i === S.presentation.length - 1 ? "Finish ✔" : "Next step → (Space)") + "</button></div>";
    $("#rhNext").onclick = nextRehearsal;
    $("#rhNext").focus({ preventScroll: true });
    card.scrollIntoView({ behavior: "smooth", block: "start" });
    if (V.canSpeak && $("#rhVoice").checked) {
      const cue = (p.cues || []).map(V.clean).join(". ");
      V.stopSpeaking(); V.speak("Step " + (r.i + 1) + ". " + p.title + ". " + cue, { rate: 1 });
    }
  }
  function updateRehearsal() {
    if (!rehearsal) return;
    const p = S.presentation[rehearsal.i];
    const s = (Date.now() - rehearsal.stepT0) / 1000;
    const bar = $("#rhBar"); if (!bar) return;
    bar.classList.toggle("over", s > p.seconds * 1.3);
    bar.firstChild.style.width = Math.min(100, 100 * s / p.seconds) + "%";
    $("#rhStep").textContent = Math.floor(s) + " s";
    $("#rhTotal").textContent = mmss((Date.now() - rehearsal.t0) / 1000);
  }
  function nextRehearsal() {
    const r = rehearsal;
    r.times.push((Date.now() - r.stepT0) / 1000);
    V.stopSpeaking();
    if (r.i < S.presentation.length - 1) { r.i++; showRehearsalStep(); return; }
    finishRehearsal(true);
  }
  function finishRehearsal(done) {
    const r = rehearsal; if (!r) return;
    clearInterval(r.tick);
    rehearsal = null;
    $("#rehearseBtn").textContent = "🎬 Full rehearsal"; $("#rehearseBtn").classList.remove("on");
    V.stopSpeaking();
    if (!done || !r.times.length) { renderStep(); return; }
    const total = r.times.reduce((a, b) => a + b, 0);
    const target = S.presentation.reduce((a, p) => a + p.seconds, 0);
    const rows = r.times.map((t, i) => {
      const p = S.presentation[i];
      const st = t < p.seconds * 0.5 ? '<span class="pill ask">Too quick?</span>' : t > p.seconds * 1.3 ? '<span class="pill bad">Too long</span>' : '<span class="pill ok">Good</span>';
      return "<tr><td>" + (i + 1) + ". " + esc(p.title) + "</td><td>" + p.seconds + " s</td><td>" + Math.round(t) + " s</td><td>" + st + "</td></tr>";
    }).join("");
    store.set("lastRehearsal", { at: new Date().toLocaleString(), total: Math.round(total) });
    $("#stepCard").className = "card step-card";
    $("#stepCard").innerHTML = "<h3>🎬 Rehearsal complete!</h3><p>Total time: <b>" + mmss(total) + "</b> (target about " + mmss(target) + ").</p>" +
      '<div class="hist-wrap"><table class="hist"><tr><th>Step</th><th>Target</th><th>You</th><th></th></tr>' + rows + "</table></div>" +
      '<p class="small">Now go to <a href="#score">📊 Score</a> and mark yourself out of 50.</p>';
    if (V.canSpeak) V.speak("Well done! Your rehearsal took " + Math.floor(total / 60) + " minutes and " + Math.round(total % 60) + " seconds.");
  }
  function initRehearsal() {
    $("#rehearseBtn").insertAdjacentHTML("afterend", V.canSpeak ? ' <label class="small"><input type="checkbox" id="rhVoice" checked> voice cues</label>' : '<input type="checkbox" id="rhVoice" hidden>');
    $("#rehearseBtn").onclick = () => rehearsal ? finishRehearsal(false) : startRehearsal();
    document.addEventListener("keydown", e => {
      if (rehearsal && !e.repeat && !$("#tab-walk").hidden && (e.code === "Space" || e.key === "ArrowRight") && !/INPUT|TEXTAREA|SELECT|BUTTON/.test(document.activeElement.tagName)) { e.preventDefault(); nextRehearsal(); }
    });
  }

  // ---------- viva ----------
  let vivaCur = null, vivaListening = false;
  const qKey = q => q.q.slice(0, 60);
  function renderVivaFilters() {
    const topics = Array.from(new Set(S.viva.map(v => v.topic)));
    $("#vivaTopic").innerHTML = '<option value="all">All topics</option>' + topics.map(t => '<option>' + esc(t) + "</option>").join("");
    // a user changing the question always stops judge mode first
    const userNext = () => { stopJudge(); nextViva(); };
    $("#vivaTopic").onchange = $("#vivaLevel").onchange = userNext;
    $("#vivaNext").onclick = userNext;
    if (!V.canListen || !V.canSpeak) { $("#judgeBtn").disabled = true; $("#judgeBtn").title = "Needs Chrome or Edge"; }
    $("#judgeBtn").onclick = () => judgeOn ? stopJudge() : startJudge();
  }
  function pickViva() {
    const t = $("#vivaTopic").value, l = $("#vivaLevel").value;
    const pool = S.viva.filter(v => (t === "all" || v.topic === t) && (l === "all" || v.level === l));
    if (!pool.length) return null;
    const tried = store.get("viva", {});
    let cand = pool.filter(q => !(qKey(q) in tried) && q !== vivaCur);
    if (!cand.length) cand = pool.filter(q => q !== vivaCur);
    if (!cand.length) cand = pool;
    return cand[Math.floor(Math.random() * cand.length)];
  }
  function nextViva() {
    V.stopSpeaking(); V.stopListening();
    const q = pickViva();
    if (!q) { $("#vivaCard").innerHTML = "<p>No questions for this filter.</p>"; return; }
    vivaCur = q;
    renderViva();
  }
  function renderViva() {
    const q = vivaCur;
    $("#vivaCard").innerHTML =
      '<span class="pill lvl-' + q.level + '">' + q.level + '</span> <span class="small muted">' + esc(q.topic) + "</span>" +
      '<p class="q">' + esc(q.q) + "</p>" +
      '<div id="judgeStatus"></div>' +
      (judgeOn ? "" : '<div class="viva-row">' + speakBtn("vivaSpeak", "🔊 Hear the question") +
      (V.canListen ? '<button class="btn small act mic" id="vivaMic">🎤 Answer by speaking</button>' : "") + "</div>") +
      '<textarea id="vivaAns" rows="4" placeholder="Answer in your own words first — type it, or press 🎤 and speak."></textarea>' +
      '<div class="viva-row"><button class="btn" id="vivaCheck">Check my answer</button></div>' +
      '<div id="vivaResult"></div>';
    if ($("#vivaSpeak")) $("#vivaSpeak").onclick = () => { V.stopSpeaking(); V.speak(q.q); };
    if ($("#vivaMic")) $("#vivaMic").onclick = async () => {
      if (vivaListening) { V.stopListening(); return; }
      const ta = $("#vivaAns"), base = ta.value ? ta.value.trim() + " " : "";
      vivaListening = true; $("#vivaMic").classList.add("on"); $("#vivaMic").textContent = "■ Stop listening";
      await V.listen({ silence: 4000, startWait: 10000, onText: t => { ta.value = base + t; } });
      vivaListening = false;
      if ($("#vivaMic")) { $("#vivaMic").classList.remove("on"); $("#vivaMic").textContent = "🎤 Answer by speaking"; }
    };
    $("#vivaCheck").onclick = () => checkViva(false);
  }
  // A point counts as "covered" if enough of its important words appear in the answer
  const STOP = new Set("a an the is are was of to in on for and or it its by as at from with like e g eg be can not no".split(" "));
  function pointCovered(point, ans) {
    const w = point.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(x => x.length > 2 && !STOP.has(x));
    if (!w.length) return false;
    const hit = w.filter(x => ans.includes(x.replace(/(ing|ed|es|s)$/, ""))).length;
    return hit / w.length >= 0.34;
  }
  function checkViva(auto) {
    V.stopListening();
    const q = vivaCur;
    if (!q || !$("#vivaAns")) return null;
    const ans = $("#vivaAns").value.toLowerCase();
    if (!auto && ans.trim().length < 3 && !confirm("You haven't answered yet. Try first! Show the answer anyway?")) return null;
    const hit = (q.keywords || []).filter(k => ans.includes(k.toLowerCase()));
    const miss = (q.keywords || []).filter(k => !hit.includes(k));
    const covered = q.points.map(p => pointCovered(p, ans));
    let h = "";
    if (q.keywords && q.keywords.length) {
      h += '<div class="hits"><b>Key words:</b> ' + hit.map(k => '<span class="hit">✓ ' + esc(k) + "</span>").join("") +
        miss.map(k => '<span class="miss">✗ ' + esc(k) + "</span>").join("") + "</div>";
    }
    h += '<div class="sec ok"><h4>✅ A good answer covers — tick what YOU said:</h4><ul class="cover">' +
      q.points.map((p, i) => '<li><label><input type="checkbox" data-i="' + i + '"' + (covered[i] ? " checked" : "") + "> " + esc(p) + "</label></li>").join("") + "</ul>" +
      '<p class="tiny muted">Ticks marked automatically are only a guess — change them honestly.</p>' +
      '<button class="btn small alt" id="vivaSave">Save my mark</button> <span class="small muted" id="vivaSaved"></span></div>';
    if (q.follow) h += '<div class="sec act"><h4>🧑‍🏫 Judge\'s follow-up</h4>' + esc(q.follow) + '<p class="small muted" id="followAns"></p></div>';
    $("#vivaResult").innerHTML = h;
    $("#vivaSave").onclick = () => saveMark(q);
    return { hit, miss, covered };
  }
  function saveMark(q) {
    if (q !== vivaCur) return;
    const n = Math.min(q.points.length, $$("#vivaResult .cover input").filter(x => x.checked).length);
    const all = store.get("viva", {}); all[qKey(q)] = { got: n, of: q.points.length, at: Date.now() }; store.set("viva", all);
    if ($("#vivaSaved")) $("#vivaSaved").textContent = "Saved: " + n + "/" + q.points.length + ".";
    renderVivaStats();
  }
  function renderVivaStats() {
    const vals = Object.values(store.get("viva", {}));
    const pct = vals.length ? Math.round(100 * vals.reduce((a, v) => a + v.got / v.of, 0) / vals.length) : 0;
    $("#vivaStats").textContent = "Tried " + vals.length + " of " + S.viva.length + " questions" + (vals.length ? " · average " + pct + "% of key points covered." : ".") +
      (V.canListen ? "" : " (Speaking answers works in Chrome or Edge. You can always type.)");
  }

  // ---------- 🎧 judge mode: ask aloud → listen → feedback → follow-up → next ----------
  let judgeOn = false, judgeRun = 0;
  const status = (t, listening) => { const el = $("#judgeStatus"); if (el) el.innerHTML = '<div class="judge-status">' + (listening ? '<span class="listening">' + esc(t) + "</span>" : esc(t)) + "</div>"; };
  async function startJudge() {
    judgeOn = true;
    const run = ++judgeRun;
    $("#judgeBtn").textContent = "■ Stop judge mode"; $("#judgeBtn").classList.add("on");
    if (!vivaCur) nextViva();
    while (judgeOn && run === judgeRun && vivaCur) {
      renderViva();
      const q = vivaCur;
      // stop this loop if the user stopped judge mode or the question changed
      const alive = () => judgeOn && run === judgeRun && vivaCur === q;
      status("🧑‍🏫 The judge is asking…");
      await V.speak(q.q);
      if (!alive()) break;
      status("🎤 Your answer — stop talking for 3 seconds when you finish", true);
      const ans = await V.listen({ silence: 3000, startWait: 12000, maxMs: 120000, onText: t => { if (alive() && $("#vivaAns")) $("#vivaAns").value = t; } });
      if (!alive()) break;
      if (!ans) {
        const prob = V.micProblem();
        status(prob || "I didn't hear anything. Check the microphone, then press Judge mode again.");
        await V.speak(prob ? "The microphone is blocked." : "I didn't hear an answer. Please check your microphone.");
        break;
      }
      const r = checkViva(true);
      if (!r) break;
      const n = r.covered.filter(Boolean).length;
      const praise = n === q.points.length ? "Excellent! You covered everything." : n >= q.points.length / 2 ? "Good answer." : "Nice try.";
      const missing = q.points.filter((p, i) => !r.covered[i]);
      let fb = praise + " You covered " + n + " out of " + q.points.length + " key points.";
      if (missing.length) fb += " You could also say: " + missing.slice(0, 2).join(". ") + ".";
      saveMark(q);
      status("🧑‍🏫 Feedback");
      await V.speak(fb);
      if (!alive()) break;
      if (q.follow) {
        status("🧑‍🏫 Follow-up question…");
        await V.speak("Follow-up question. " + q.follow);
        if (!alive()) break;
        status("🎤 Answer the follow-up", true);
        const fa = await V.listen({ silence: 3000, startWait: 12000, maxMs: 90000, onText: t => { if (alive() && $("#followAns")) $("#followAns").textContent = "You said: " + t; } });
        if (!alive()) break;
        await V.speak(fa ? "Thank you. Next question." : "Okay. Let's move to the next question.");
        if (!alive()) break;
      }
      const nq = pickViva(); if (!nq) break; vivaCur = nq;
    }
    if (run === judgeRun) stopJudge();
  }
  function stopJudge() {
    if (!judgeOn) return;
    judgeOn = false;
    V.stopSpeaking(); V.stopListening();
    $("#judgeBtn").textContent = "🎧 Judge mode"; $("#judgeBtn").classList.remove("on");
    const el = $("#judgeStatus"); if (el) el.innerHTML = "";
  }

  // ---------- score ----------
  function renderScore() {
    $("#scoreSliders").innerHTML = S.marks.map(m =>
      '<div class="slider-row"><label for="sc-' + m.key + '"><b>' + m.icon + " " + esc(m.name) + '</b></label>' +
      '<input type="range" min="0" max="10" step="0.5" value="5" id="sc-' + m.key + '"><b id="scv-' + m.key + '">5</b>' +
      '<div class="tipline">' + esc(m.tip) + "</div></div>").join("");
    const upd = () => {
      let t = 0;
      S.marks.forEach(m => { const v = +$("#sc-" + m.key).value; t += v; $("#scv-" + m.key).textContent = v; });
      $("#scoreTotal").textContent = t;
    };
    $$("#scoreSliders input").forEach(i => i.addEventListener("input", upd));
    upd();
    $("#scoreSave").onclick = () => {
      const entry = { at: new Date().toLocaleString(), note: $("#scoreNote").value.trim(), total: 0 };
      S.marks.forEach(m => { entry[m.key] = +$("#sc-" + m.key).value; entry.total += entry[m.key]; });
      const hist = store.get("scores", []); hist.unshift(entry); store.set("scores", hist.slice(0, 50));
      $("#scoreNote").value = "";
      renderHistory();
    };
    renderHistory();
  }
  function renderHistory() {
    const hist = store.get("scores", []);
    if (!hist.length) { $("#scoreHistory").innerHTML = '<p class="muted small">No practice saved yet.</p>'; return; }
    $("#scoreHistory").innerHTML = '<div class="hist-wrap"><table class="hist"><tr><th>When</th>' +
      S.marks.map(m => "<th>" + m.icon + "</th>").join("") + "<th>Total</th><th>Improve next</th></tr>" +
      hist.map(h => "<tr><td>" + esc(h.at) + "</td>" + S.marks.map(m => "<td>" + h[m.key] + "</td>").join("") +
        "<td><b>" + h.total + "</b></td><td>" + esc(h.note || "") + "</td></tr>").join("") + "</table></div>";
  }

  // ---------- ask ma'am ----------
  function renderAsk() {
    const ans = store.get("ask", {});
    $("#askList").innerHTML = S.confirmList.map((a, i) =>
      '<div class="card ask-item"><b>❓ ' + (i + 1) + ". " + esc(a.q) + "</b>" +
      '<textarea rows="2" data-id="' + a.id + '" placeholder="Ma\'am said…">' + esc(ans[a.id] || "") + "</textarea></div>").join("");
    $$("#askList textarea").forEach(t => t.addEventListener("input", () => {
      const all = store.get("ask", {}); all[t.dataset.id] = t.value; store.set("ask", all);
    }));
    $("#askCopy").onclick = async () => {
      const all = store.get("ask", {});
      const text = "Answers from Rajnish Ma'am:\n" + S.confirmList.map((a, i) => (i + 1) + ". " + a.q + "\n   → " + (all[a.id] || "(not asked yet)")).join("\n");
      try { await navigator.clipboard.writeText(text); $("#askCopied").textContent = "Copied! Paste it in your chat with your mentor."; }
      catch (e) { prompt("Copy this text:", text); }
    };
    $("#sourceList").innerHTML = S.sources.map(s => '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.text) + "</a></li>").join("");
  }


  // ---------- project report ----------
  function renderProject() {
    const P = S.project, st = S.student;
    if (!P) return;
    $("#rpTitle").textContent = P.title;
    $("#rpSub").textContent = P.subtitle;
    $("#rpWho").textContent = st.name + " · " + st.className + " · " + st.school + " · Guided by " + st.teacher;
    $("#qrWho").textContent = st.name + " · " + st.className + " · " + st.school;
    $("#rpAim").textContent = P.aim;
    $("#rpObj").innerHTML = P.objectives.map(o => "<li>" + esc(o) + "</li>").join("");
    const zones = ["city", "centre", "village", "front"];
    $("#rpParts").innerHTML = zones.map(z => {
      const comps = S.components.map((c, i) => ({ c, n: i + 1 })).filter(x => x.c.zone === z);
      if (!comps.length) return "";
      return '<div class="parts-zone"><h3>' + esc(P.zones[z] || z) + '</h3><div class="hist-wrap"><table class="parts"><tr><th>Part</th><th>Science</th><th>Clean India link</th></tr>' +
        comps.map(({ c, n }) => {
          const pt = P.parts[c.id] || {};
          const pending = !pt.concept;
          return "<tr><td>" + n + ". " + c.icon + " " + esc(c.name) + "</td>" +
            (pending
              ? '<td colspan="2" class="tbc">' + esc(pt.visitor || "Explained in person") + "</td>"
              : '<td data-label="Science">' + esc(pt.concept) + (visitor && pt.visitor ? '<br><span class="small muted">' + esc(pt.visitor) + "</span>" : "") + '</td><td data-label="Clean India link">' + esc(pt.link) + "</td>") + "</tr>";
        }).join("") + "</table></div></div>";
    }).join("");
    $("#rpDemos").innerHTML = P.demos.map(d => "<li>" + esc(d) + "</li>").join("");
    $("#rpMaterials").innerHTML = P.materials.map(d => "<li>" + esc(d) + "</li>").join("");
    $("#rpLearned").innerHTML = P.learned.map(d => "<li>" + esc(d) + "</li>").join("");
    $("#rpPledge").textContent = "“" + P.pledge + "” — " + st.name.split(" ")[0];
    $("#rpQuotes").innerHTML = S.quotes.map(q => '<div class="quote"><span>' + renderSample(q).replace(/<span class="pause">\/<\/span>/g, "") + "</span></div>").join("");
    $("#rpSources").innerHTML = S.sources.map(x => '<li><a href="' + esc(x.url) + '" target="_blank" rel="noopener">' + esc(x.text) + "</a></li>").join("");
    $("#rpThanks").innerHTML = P.thanks.map(d => "<li>" + esc(d) + "</li>").join("");

    const visitorURL = location.origin + location.pathname + "?visitor#project";
    $("#copyVisitor").onclick = async () => {
      try { await navigator.clipboard.writeText(visitorURL); $("#copyMsg").textContent = " Copied!"; }
      catch (e) { prompt("Copy this link:", visitorURL); }
    };
    const syncProg = () => document.body.classList.toggle("no-progress", !$("#incProgress").checked);
    $("#incProgress").onchange = syncProg; syncProg();
    const doPrint = cls => {
      document.body.classList.add(cls);
      const done = () => { document.body.classList.remove(cls); window.removeEventListener("afterprint", done); };
      window.addEventListener("afterprint", done);
      window.print();
      setTimeout(done, 1500);
    };
    $("#printReport").onclick = () => doPrint("print-report");
    $("#printQR").onclick = () => doPrint("print-qr");
  }
  // Practice progress summary for the teacher (from this device's saved practice)
  function renderProjectProgress() {
    if (visitor || !S.project) return;
    const done = store.get("stepsDone", {});
    const steps = S.presentation.filter(p => done[p.id] !== undefined ? done[p.id] : p.done).length;
    const viva = Object.values(store.get("viva", {}));
    const vivaPct = viva.length ? Math.round(100 * viva.reduce((a, v) => a + v.got / v.of, 0) / viva.length) : null;
    const hist = store.get("scores", []);
    const last = hist[0];
    const reh = store.get("lastRehearsal", null);
    const ans = store.get("ask", {});
    const answered = S.confirmList.filter(a => (ans[a.id] || "").trim());
    const pending = S.confirmList.filter(a => !(ans[a.id] || "").trim());
    const tile = (v, l) => '<div class="stat"><b>' + esc(v) + "</b>" + esc(l) + "</div>";
    $("#rpProgress").innerHTML = "<h2>👩‍🏫 Preparation progress (for " + esc(S.student.teacher) + ")</h2>" +
      '<div class="prog-grid">' +
      tile(steps + "/" + S.presentation.length, "presentation steps practised") +
      tile(viva.length + "/" + S.viva.length, "viva questions practised") +
      tile(vivaPct === null ? "–" : vivaPct + "%", "key points covered (avg)") +
      tile(last ? last.total + "/50" : "–", "latest self-score") +
      tile(reh ? mmss(reh.total) : "–", "last full rehearsal") + "</div>" +
      (last ? '<p class="small">Latest self-score: ' + S.marks.map(m => m.icon + " " + esc(m.name) + " " + last[m.key] + "/10").join(" · ") + "</p>" : "") +
      (pending.length ? '<div class="sec ask"><h4>❓ Points I need to confirm with you, Ma\'am</h4><ol>' + pending.map(a => "<li>" + esc(a.q) + "</li>").join("") + "</ol></div>" : "") +
      (answered.length ? '<div class="sec ok"><h4>✅ Already confirmed</h4><ul>' + answered.map(a => "<li>" + esc(a.q) + " <b>→ " + esc(ans[a.id]) + "</b></li>").join("") + "</ul></div>" : "") +
      '<p class="tiny muted">Progress is saved on this device.</p>';
  }


  // ---------- 🎤 stage presentation ----------
  let stageRun = null;
  function stageSections() {
    const st = S.stage, v = $("#stVersion").value;
    if (v === "short") return [{ id: "s-short", title: "1-minute speech", seconds: 60, cover: ["Greeting, name, topic", "Clean India Mission — 2 October 2014", "Segregation at source", "7Rs — the best waste is the waste we never create", "Green energy & hydrogen train", "Final quote, Thank you, Jai Hind"], cues: ["🚶 Centre, pause, smile, begin.", "🐢 Slow and clear — short speeches feel rushed."], sample: st.short }];
    return st.sections.filter(x => x.in.includes(v));
  }
  const words = t => t.replace(/[*\/]/g, " ").split(/\s+/).filter(Boolean).length;
  function renderStage() {
    const st = S.stage;
    if (!st) return;
    const d0 = new Date(); d0.setHours(0, 0, 0, 0);
    const days = Math.round((new Date(st.date + "T00:00:00") - d0) / 86400000);
    $("#stCountdown").textContent = days > 1 ? "⏳ " + days + " days to your stage presentation (" + new Date(st.date + "T00:00:00").toDateString() + ")"
      : days === 1 ? "⏳ Your stage presentation is TOMORROW — practise today, then rest well tonight."
      : days === 0 ? "🌟 Stage day! Breathe, smile, and enjoy it — you know this."
      : "🎉 Stage presentation done — well done, Avni!";
    $("#stVersion").value = store.get("stageVersion", "full");
    $("#stVersion").onchange = () => { store.set("stageVersion", $("#stVersion").value); renderStageCards(); };
    renderStageCards();
    const ticks = store.get("stageToday", {});
    $("#stToday").innerHTML = st.today.map(x => '<li><label><input type="checkbox" data-id="' + x.id + '"' + (ticks[x.id] ? " checked" : "") + "> <span><b>" + esc(x.time) + "</b> — " + esc(x.task) + "</span></label></li>").join("");
    $$("#stToday input").forEach(cb => cb.onchange = () => { const t = store.get("stageToday", {}); t[cb.dataset.id] = cb.checked; store.set("stageToday", t); });
    $("#stTodayReset").onclick = () => { store.set("stageToday", {}); renderStage(); };
    $("#stFixes").innerHTML = '<div class="hist-wrap"><table class="hist fixes"><tr><th>Page</th><th>My file says</th><th>Say this instead</th><th>Why</th></tr>' +
      (st.fileFixes || []).map(f => "<tr><td>" + esc(f.page) + '</td><td class="was">' + esc(f.wrote) + '</td><td class="now">' + esc(f.say) + '</td><td class="small muted">' + esc(f.why) + "</td></tr>").join("") + "</table></div>";
    $("#stGood").innerHTML = (st.fileGood || []).map(x => "<li>" + esc(x) + "</li>").join("");
    $("#stMorning").innerHTML = st.morning.map(x => "<li>" + esc(x) + "</li>").join("");
    $("#stBackstage").innerHTML = st.backstage.map(x => "<li>" + esc(x) + "</li>").join("");
    $("#stTips").innerHTML = st.tips.map(x => "<li>" + esc(x) + "</li>").join("");
    $("#stRescue").innerHTML = st.rescue.map(x => '<div class="rescue-item sec plain"><b>' + esc(x.q) + "</b>" + esc(x.a) + "</div>").join("");
    $("#stRehearse").onclick = () => stageRun ? endStageRun(false) : startStageRun();
    $("#stListenAll").onclick = async () => {
      if ($("#stListenAll").dataset.on) { V.stopSpeaking(); return; }
      $("#stListenAll").dataset.on = "1"; $("#stListenAll").textContent = "■ Stop";
      for (const sec of stageSections()) {
        const ok = await V.speakSample(sec.sample, V.highlighter($("#stSample-" + sec.id)));
        if (!ok) break;
      }
      delete $("#stListenAll").dataset.on; $("#stListenAll").textContent = "🔊 Listen to whole speech";
    };
    $("#stPrint").onclick = () => {
      const secs = stageSections();
      $("#cueCard").innerHTML = "<h2>🎤 " + esc(S.project ? S.project.title : S.student.topic) + " — cue card</h2><ol>" +
        secs.map(x => "<li><b>" + esc(x.title) + "</b><span>" + esc(x.cover.join(" · ")) + "</span></li>").join("") + "</ol>" +
        '<p class="q">Final line: “A clean India is not just a dream; it is a responsibility we share.” → Thank you → Jai Hind!</p>';
      document.body.classList.add("print-cue");
      const done = () => { document.body.classList.remove("print-cue"); window.removeEventListener("afterprint", done); };
      window.addEventListener("afterprint", done);
      window.print();
      setTimeout(done, 1500);
    };
  }
  function renderStageCards() {
    const secs = stageSections();
    const total = secs.reduce((a, x) => a + words(x.sample), 0);
    $("#stLength").textContent = secs.length + " parts · about " + total + " words · about " + Math.max(1, Math.round(total / 120)) + " min at a calm stage pace";
    $("#stCards").innerHTML = secs.map((x, i) =>
      '<article class="card st-card"><h3>' + (i + 1) + ". " + esc(x.title) + ' <span class="tm">about ' + x.seconds + " s</span></h3>" +
      '<div class="sec ok"><h4>✅ Key points (learn these)</h4>' + list(x.cover) + "</div>" +
      '<div class="sec act"><h4>👉 On stage</h4>' + list(x.cues) + "</div>" +
      '<details class="peek"><summary>👀 Sample words (try in your own words first)</summary><p class="sample" id="stSample-' + x.id + '">' + V.sampleHTML(x.sample) + "</p>" +
      '<div class="viva-row">' + speakBtn("stHear-" + x.id, "🔊 Listen with pauses") + "</div></details></article>").join("");
    secs.forEach(x => { const b = $("#stHear-" + x.id); if (b) b.onclick = () => V.speakSample(x.sample, V.highlighter($("#stSample-" + x.id))); });
  }
  function startStageRun() {
    const secs = stageSections();
    stageRun = { secs, i: 0, t0: Date.now(), stepT0: Date.now(), times: [], tick: setInterval(updateStageRun, 200) };
    $("#stRehearse").textContent = "■ Stop rehearsal"; $("#stRehearse").classList.add("on");
    $("#stCards").hidden = true;
    showStageStep();
  }
  function showStageStep() {
    const r = stageRun, x = r.secs[r.i];
    r.stepT0 = Date.now();
    const box = $("#stRehearsal");
    box.hidden = false;
    box.innerHTML = '<div class="small muted">Part ' + (r.i + 1) + " of " + r.secs.length + " · target about " + x.seconds + " s · total <b id=\"srTotal\">00:00</b></div>" +
      '<p class="big">' + esc(x.title) + '</p><div class="bar" id="srBar"><i></i></div><div class="small"><b id="srStep">0 s</b> this part</div>' +
      '<div class="sec ok"><h4>✅ Say these points</h4><ul class="st-big">' + x.cover.map(c => "<li>" + esc(c) + "</li>").join("") + "</ul></div>" +
      '<div class="sec act"><h4>👉 On stage</h4>' + list(x.cues) + "</div>" +
      '<details class="peek"><summary>Stuck? Peek at the words</summary><p class="sample">' + V.sampleHTML(x.sample) + "</p></details>" +
      '<div class="step-nav"><button class="btn" id="srNext">' + (r.i === r.secs.length - 1 ? "Finish ✔" : "Next part → (Space)") + "</button></div>";
    $("#srNext").onclick = nextStageStep;
    $("#srNext").focus({ preventScroll: true }); // Space now presses "Next part", not "Stop"
    box.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function updateStageRun() {
    if (!stageRun || !$("#srBar")) return;
    const x = stageRun.secs[stageRun.i], sec = (Date.now() - stageRun.stepT0) / 1000;
    $("#srBar").classList.toggle("over", sec > x.seconds * 1.3);
    $("#srBar").firstChild.style.width = Math.min(100, 100 * sec / x.seconds) + "%";
    $("#srStep").textContent = Math.floor(sec) + " s";
    $("#srTotal").textContent = mmss((Date.now() - stageRun.t0) / 1000);
  }
  function nextStageStep() {
    const r = stageRun; if (!r) return;
    r.times.push((Date.now() - r.stepT0) / 1000);
    if (r.i < r.secs.length - 1) { r.i++; showStageStep(); return; }
    endStageRun(true);
  }
  function endStageRun(done) {
    const r = stageRun; if (!r) return;
    clearInterval(r.tick); stageRun = null;
    $("#stRehearse").textContent = "🎬 Stage rehearsal"; $("#stRehearse").classList.remove("on");
    $("#stCards").hidden = false;
    const box = $("#stRehearsal");
    if (!done) { box.hidden = true; box.innerHTML = ""; return; }
    const total = r.times.reduce((a, b) => a + b, 0), target = r.secs.reduce((a, x) => a + x.seconds, 0);
    store.set("lastStageRun", { at: new Date().toLocaleString(), total: Math.round(total), version: $("#stVersion").value });
    box.innerHTML = "<h3>🎬 Stage rehearsal complete!</h3><p>Total: <b>" + mmss(total) + "</b> (target about " + mmss(target) + ").</p>" +
      '<div class="hist-wrap"><table class="hist"><tr><th>Part</th><th>Target</th><th>You</th><th></th></tr>' +
      r.times.map((t, i) => { const x = r.secs[i]; return "<tr><td>" + (i + 1) + ". " + esc(x.title) + "</td><td>" + x.seconds + " s</td><td>" + Math.round(t) + " s</td><td>" +
        (t < x.seconds * 0.5 ? '<span class="pill ask">Too quick?</span>' : t > x.seconds * 1.3 ? '<span class="pill bad">Too long</span>' : '<span class="pill ok">Good</span>') + "</td></tr>"; }).join("") +
      '</table></div><p class="small">Then mark yourself in <a href="#score">📊 Score</a>.</p><button class="btn small ghost" id="srClose">Close</button>';
    $("#srClose").onclick = () => { box.hidden = true; };
  }
  document.addEventListener("keydown", e => {
    if (stageRun && !e.repeat && !$("#tab-stage").hidden && (e.code === "Space" || e.key === "ArrowRight") && !/INPUT|TEXTAREA|SELECT|BUTTON|SUMMARY/.test(document.activeElement.tagName)) { e.preventDefault(); nextStageStep(); }
  });

  // ---------- init ----------
  if (visitor) {
    document.body.classList.add("visitor");
    document.title = S.project.title + " — " + S.student.name;
    $(".brand-title").textContent = S.project.title;
    $("#foot").textContent = S.student.name + " · " + S.student.className + " · " + S.student.school + " · Built with the TechnoTaau Team";
  }
  renderHome();
  renderStage();
  renderProject();
  renderMap();
  const firstTodo = S.presentation.findIndex(p => !stepDone(p));
  stepIdx = firstTodo >= 0 ? firstTodo : 0;
  renderSteps(); renderStep(); initRehearsal();
  renderVivaFilters(); nextViva(); renderVivaStats();
  renderScore();
  renderAsk();
  V.init();
  route();
})();
