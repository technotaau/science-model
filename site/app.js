/* App logic. Content lives in content.js; you normally don't need to edit this file. */
(function () {
  "use strict";
  const S = window.SITE;
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
  const compById = Object.fromEntries(S.components.map(c => [c.id, c]));
  const askById = Object.fromEntries(S.confirmList.map(a => [a.id, a]));
  const zoneName = { city: "Smart City", centre: "Centre / Park", village: "Smart Village", front: "Front demonstrations" };

  // ---------- router ----------
  const tabs = ["home", "model", "walk", "viva", "voice", "score", "ask"];
  function route() {
    const [tab, sub] = (location.hash.slice(1) || "home").split("/");
    const t = tabs.includes(tab) ? tab : "home";
    tabs.forEach(n => { $("#tab-" + n).hidden = n !== t; });
    $$("#tabs a").forEach(a => a.classList.toggle("active", a.dataset.tab === t));
    if (t === "model") showComp(sub && compById[sub] ? sub : currentComp);
    if (t === "home") renderProgress();
    if (t === "model" && sub) $("#compDetail").scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);

  // ---------- home ----------
  function renderHome() {
    const st = S.student;
    $("#brandSub").textContent = st.name + " · " + st.className;
    $("#heroTopic").textContent = st.topic;
    $("#heroWho").textContent = st.name + " · " + st.className + " · " + st.school + " · Teacher: " + st.teacher;
    const fair = new Date(st.fairDate + "T09:00:00");
    const days = Math.ceil((fair - new Date()) / 86400000);
    $("#countdown").textContent = days > 1 ? "⏳ " + days + " days to the Science Fair (expected " + fair.toDateString() + ")"
      : days === 1 ? "⏳ The Science Fair is tomorrow! Rest well tonight."
      : days === 0 ? "🌟 Fair day! Breathe, smile and enjoy explaining your model."
      : "🎉 The Science Fair is over — well done!";

    $("#marksList").innerHTML = S.marks.map(m =>
      '<div class="mark"><b>' + m.icon + " " + esc(m.name) + " — 10</b><p>" + esc(m.tip) + "</p></div>").join("");
    const q = S.quotes.map(x => '<div class="quote">' + renderSample(x) + "</div>").join("");
    $("#quotesList").innerHTML = q;
    $("#quotesList2").innerHTML = q;

    const today = new Date().toISOString().slice(0, 10);
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
      b.title = c.name;
      b.setAttribute("aria-label", (i + 1) + ". " + c.name);
      b.dataset.id = c.id;
      b.addEventListener("click", () => { location.hash = "model/" + c.id; });
      map.appendChild(b);
    });
    $("#compChips").innerHTML = S.components.map((c, i) =>
      '<button class="chip' + (c.status === "ask" ? " ask" : "") + '" data-id="' + c.id + '">' +
      (i + 1) + ". " + c.icon + " " + esc(c.name) + "</button>").join("");
    $$("#compChips .chip").forEach(b => b.addEventListener("click", () => { location.hash = "model/" + b.dataset.id; }));
  }
  function showComp(id) {
    currentComp = id;
    const c = compById[id];
    $$(".hot").forEach(h => h.classList.toggle("active", h.dataset.id === id));
    $$("#compChips .chip").forEach(h => h.classList.toggle("active", h.dataset.id === id));
    let h = '<div class="zone">' + esc(zoneName[c.zone] || "") + "</div>" +
      "<h3>" + c.icon + " " + esc(c.name) + " " +
      (c.status === "ask" ? '<span class="pill ask">Ask Ma\'am</span>' : '<span class="pill ok">Confirmed</span>') + "</h3>" +
      "<p><b>In my model:</b> " + esc(c.inModel) + "</p>";
    if (c.ask && c.ask.length) {
      h += '<div class="sec asksec"><h4>📝 Confirm with Rajnish Ma\'am</h4>' +
        list(c.ask.map(a => askById[a] ? askById[a].q : a)) +
        '<a href="#ask">Write her answer →</a></div>';
    }
    if (c.say && c.say.length) h += '<div class="sec"><h4>🗣️ Key points to say (in your own words)</h4>' + list(c.say) + "</div>";
    if (c.sample) h += '<details class="peek"><summary>👀 Peek at a sample line (try yourself first!)</summary><p class="sample">' + renderSample(c.sample) + "</p></details>";
    if (c.how && c.how.length) h += '<div class="sec"><h4>🔬 How it works</h4>' + list(c.how) + "</div>";
    if (c.deeper && c.deeper.length) h += '<details class="sec"><summary><b>🧠 Deeper knowledge for tricky viva questions</b></summary>' + list(c.deeper) + "</details>";
    if (c.careful && c.careful.length) h += '<div class="sec careful"><h4>⚠️ Careful — don\'t say</h4>' + list(c.careful) + "</div>";
    if (c.point && c.point.length) h += '<div class="sec pointing"><h4>👉 Pointing, eye contact &amp; demo</h4>' + list(c.point) + "</div>";
    const idx = S.components.indexOf(c);
    const prev = S.components[idx - 1], next = S.components[idx + 1];
    h += '<div class="step-nav">' +
      (prev ? '<a class="btn ghost small" href="#model/' + prev.id + '">← ' + esc(prev.name) + "</a>" : "") +
      (next ? '<a class="btn small" href="#model/' + next.id + '">' + esc(next.name) + " →</a>" : "") + "</div>";
    $("#compDetail").innerHTML = h;
  }

  // ---------- walkthrough ----------
  let stepIdx = 0;
  function stepDone(p) { const d = store.get("stepsDone", {}); return d[p.id] !== undefined ? d[p.id] : p.done; }
  function renderSteps() {
    $("#stepList").innerHTML = S.presentation.map((p, i) =>
      '<li><button data-i="' + i + '" class="' + (i === stepIdx ? "active" : "") + '">' +
      "<span>" + (i + 1) + ".</span> " + esc(p.title) +
      '<span class="tick">' + (stepDone(p) ? "✅" : "") + "</span></button></li>").join("");
    $$("#stepList button").forEach(b => b.addEventListener("click", () => { stepIdx = +b.dataset.i; renderSteps(); renderStep(); }));
  }
  function renderStep() {
    const p = S.presentation[stepIdx];
    const c = p.comp ? compById[p.comp] : null;
    const checks = store.get("cover:" + p.id, []);
    let h = "<h3>" + (stepIdx + 1) + ". " + esc(p.title) + "</h3>" +
      '<p class="small muted">Target time: about ' + p.seconds + " seconds" +
      (stepDone(p) ? ' · <span class="pill ok">Practised</span>' : "") + "</p>" +
      '<div class="sec"><h4>✅ Cover these points (tick when you said them)</h4><ul class="cover">' +
      p.cover.map((x, i) => '<li><label><input type="checkbox" data-i="' + i + '"' + (checks[i] ? " checked" : "") + "> " + esc(x) + "</label></li>").join("") +
      "</ul></div>";
    if (p.cues && p.cues.length) h += '<div class="sec pointing"><h4>🎬 Stage directions</h4>' + list(p.cues, "cues") + "</div>";
    if (c && c.careful && c.careful.length) h += '<div class="sec careful"><h4>⚠️ Remember — don\'t say</h4>' + list(c.careful) + "</div>";
    if (c && c.status === "ask") h += '<div class="sec asksec">📝 Part of this section still needs confirming with Rajnish Ma\'am. <a href="#ask">See list</a></div>';
    const sample = p.sample || (c && c.sample) || "";
    if (sample) h += '<details class="peek"><summary>👀 Peek at a sample (after you try!)</summary><p class="sample">' + renderSample(sample) + "</p></details>";
    h += '<div class="step-nav">' +
      '<button class="btn ghost" id="stepPrev"' + (stepIdx === 0 ? " disabled" : "") + ">← Back</button>" +
      '<button class="btn alt" id="stepMark">' + (stepDone(p) ? "Unmark" : "Mark as practised") + "</button>" +
      (c ? '<a class="btn ghost" href="#model/' + c.id + '">Open in Model tab</a>' : "") +
      '<button class="btn" id="stepNext"' + (stepIdx === S.presentation.length - 1 ? " disabled" : "") + ">Next →</button></div>";
    const card = $("#stepCard");
    card.innerHTML = h;
    $$(".cover input", card).forEach(cb => cb.addEventListener("change", () => {
      const arr = store.get("cover:" + p.id, []); arr[+cb.dataset.i] = cb.checked; store.set("cover:" + p.id, arr);
    }));
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

  // ---------- speech recognition (optional; Chrome/Edge) ----------
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  function makeRecognizer(onText) {
    if (!SR) return null;
    const r = new SR();
    r.lang = "en-IN"; r.continuous = true; r.interimResults = true;
    let finalText = "";
    r.onresult = e => {
      let interim = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) finalText += e.results[i][0].transcript + " ";
        else interim += e.results[i][0].transcript;
      }
      onText(finalText, interim);
    };
    r.reset = () => { finalText = ""; };
    return r;
  }

  // ---------- viva ----------
  let vivaPool = [], vivaCur = null, vivaRec = null, vivaListening = false;
  const qKey = q => q.q.slice(0, 60);
  function renderVivaFilters() {
    const topics = Array.from(new Set(S.viva.map(v => v.topic)));
    $("#vivaTopic").innerHTML = '<option value="all">All topics</option>' + topics.map(t => '<option>' + esc(t) + "</option>").join("");
    $("#vivaTopic").onchange = $("#vivaLevel").onchange = nextViva;
    $("#vivaNext").onclick = nextViva;
  }
  function nextViva() {
    const t = $("#vivaTopic").value, l = $("#vivaLevel").value;
    const pool = S.viva.filter(v => (t === "all" || v.topic === t) && (l === "all" || v.level === l));
    if (!pool.length) { $("#vivaCard").innerHTML = "<p>No questions for this filter.</p>"; return; }
    // prefer questions not tried yet
    const tried = store.get("viva", {});
    const fresh = pool.filter(q => !(qKey(q) in tried) && q !== vivaCur);
    vivaPool = fresh.length ? fresh : pool.filter(q => q !== vivaCur);
    if (!vivaPool.length) vivaPool = pool;
    vivaCur = vivaPool[Math.floor(Math.random() * vivaPool.length)];
    stopListening();
    renderViva();
  }
  function renderViva() {
    const q = vivaCur;
    const card = $("#vivaCard");
    card.innerHTML =
      '<span class="pill lvl-' + q.level + '">' + q.level + "</span> <span class=\"small muted\">" + esc(q.topic) + "</span>" +
      '<p class="q">' + esc(q.q) + "</p>" +
      '<div class="viva-row">' +
      ('speechSynthesis' in window ? '<button class="btn ghost small" id="vivaSpeak">🔊 Hear the question</button>' : "") +
      (SR ? '<button class="btn small mic" id="vivaMic">🎤 Answer by speaking</button>' : "") + "</div>" +
      '<textarea id="vivaAns" rows="4" placeholder="Answer in your own words first — type it, or press 🎤 and speak."></textarea>' +
      '<div class="viva-row"><button class="btn" id="vivaCheck">Check my answer</button></div>' +
      '<div id="vivaResult"></div>';
    if ($("#vivaSpeak")) $("#vivaSpeak").onclick = () => {
      const u = new SpeechSynthesisUtterance(q.q); u.lang = "en-IN"; u.rate = .95;
      speechSynthesis.cancel(); speechSynthesis.speak(u);
    };
    if ($("#vivaMic")) $("#vivaMic").onclick = () => vivaListening ? stopListening() : startListening();
    $("#vivaCheck").onclick = checkViva;
  }
  function startListening() {
    const ta = $("#vivaAns");
    const base = ta.value ? ta.value.trim() + " " : "";
    vivaRec = makeRecognizer((fin, interim) => { ta.value = base + fin + interim; });
    if (!vivaRec) return;
    vivaRec.onend = () => { vivaListening = false; const m = $("#vivaMic"); if (m) { m.classList.remove("on"); m.textContent = "🎤 Answer by speaking"; } };
    try { vivaRec.start(); } catch (e) { return; }
    vivaListening = true;
    $("#vivaMic").classList.add("on"); $("#vivaMic").textContent = "■ Stop listening";
  }
  function stopListening() { if (vivaRec && vivaListening) { try { vivaRec.stop(); } catch (e) {} } }
  function checkViva() {
    stopListening();
    const q = vivaCur;
    const ans = $("#vivaAns").value.toLowerCase();
    if (ans.trim().length < 3 && !confirm("You haven't answered yet. Try first! Show the answer anyway?")) return;
    let h = "";
    if (q.keywords && q.keywords.length) {
      const hit = q.keywords.filter(k => ans.includes(k.toLowerCase()));
      const miss = q.keywords.filter(k => !hit.includes(k));
      h += '<div class="hits"><b>Key words:</b> ' + hit.map(k => '<span class="hit">✓ ' + esc(k) + "</span>").join("") +
        miss.map(k => '<span class="miss">' + esc(k) + "</span>").join("") + "</div>";
    }
    h += '<div class="sec"><h4>A good answer covers — tick what YOU said:</h4><ul class="cover">' +
      q.points.map((p, i) => '<li><label><input type="checkbox" data-i="' + i + '"> ' + esc(p) + "</label></li>").join("") + "</ul>" +
      '<button class="btn small alt" id="vivaSave">Save my mark</button> <span class="small muted" id="vivaSaved"></span></div>';
    if (q.follow) h += '<div class="follow">🧑‍🏫 <b>Judge\'s follow-up:</b> ' + esc(q.follow) + "</div>";
    $("#vivaResult").innerHTML = h;
    $("#vivaSave").onclick = () => {
      const n = $$("#vivaResult .cover input").filter(x => x.checked).length;
      const all = store.get("viva", {}); all[qKey(q)] = { got: n, of: q.points.length, at: Date.now() }; store.set("viva", all);
      $("#vivaSaved").textContent = "Saved: " + n + "/" + q.points.length + ". Now answer the follow-up aloud, then press Next.";
      renderVivaStats();
    };
  }
  function renderVivaStats() {
    const all = store.get("viva", {});
    const vals = Object.values(all);
    const pct = vals.length ? Math.round(100 * vals.reduce((a, v) => a + v.got / v.of, 0) / vals.length) : 0;
    $("#vivaStats").textContent = "Tried " + vals.length + " of " + S.viva.length + " questions" + (vals.length ? " · average " + pct + "% of key points covered." : ".") +
      (SR ? "" : " (Speaking answers works in Chrome or Edge. You can always type.)");
  }

  // ---------- voice recorder ----------
  let mediaRec = null, recChunks = [], recT0 = 0, recTick = null, paceRec = null, recCount = 0;
  $("#recBtn").addEventListener("click", async () => {
    if (mediaRec && mediaRec.state === "recording") { mediaRec.stop(); return; }
    if (!navigator.mediaDevices || !window.MediaRecorder) { $("#recNote").textContent = "Recording is not supported in this browser. Try Chrome."; return; }
    let stream;
    try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); }
    catch (e) { $("#recNote").textContent = "Microphone permission was blocked. Allow the microphone and try again."; return; }
    recChunks = [];
    mediaRec = new MediaRecorder(stream);
    mediaRec.ondataavailable = e => { if (e.data.size) recChunks.push(e.data); };
    mediaRec.onstop = () => {
      stream.getTracks().forEach(t => t.stop());
      clearInterval(recTick);
      if (paceRec) { try { paceRec.stop(); } catch (e) {} }
      const blob = new Blob(recChunks, { type: mediaRec.mimeType || "audio/webm" });
      const url = URL.createObjectURL(blob);
      recCount++;
      const li = document.createElement("li");
      li.innerHTML = "<b>Take " + recCount + "</b> (" + $("#recTimer").textContent + ') <audio controls src="' + url + '"></audio> <a href="' + url + '" download="practice-take-' + recCount + '.webm">Save</a>';
      $("#recList").prepend(li);
      $("#recBtn").textContent = "● Record";
      $("#recNote").textContent = "Listen back: Can you hear your pauses? Are the key words stressed? Recordings stay only on this device.";
    };
    mediaRec.start();
    recT0 = Date.now();
    $("#recBtn").textContent = "■ Stop";
    recTick = setInterval(() => { $("#recTimer").textContent = mmss((Date.now() - recT0) / 1000); }, 250);
    paceRec = makeRecognizer((fin, interim) => {
      const text = (fin + interim).trim();
      const words = text ? text.split(/\s+/).length : 0;
      const min = (Date.now() - recT0) / 60000;
      const wpm = min > 0.1 ? Math.round(words / min) : 0;
      $("#wpm").textContent = wpm;
      $("#paceHint").textContent = wpm === 0 ? "" : wpm < 90 ? "A little slow — keep it flowing." : wpm <= 140 ? "Good pace for a presentation 👍" : "Too fast — slow down and add pauses.";
      $("#liveText").textContent = text;
    });
    if (paceRec) {
      $("#paceBox").hidden = false; $("#wpm").textContent = "0"; $("#liveText").textContent = ""; $("#paceHint").textContent = "";
      try { paceRec.start(); } catch (e) {}
    }
  });

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
      '<div class="card ask-item"><b>' + (i + 1) + ". " + esc(a.q) + "</b>" +
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
    $("#voiceTips").innerHTML = S.voiceTips.map(t => "<li>" + esc(t) + "</li>").join("");
    $("#exprTips").innerHTML = S.expressionTips.map(t => "<li>" + esc(t) + "</li>").join("");
  }

  // ---------- init ----------
  renderHome();
  renderMap();
  // start the walkthrough at the first step not yet practised
  const firstTodo = S.presentation.findIndex(p => !stepDone(p));
  stepIdx = firstTodo >= 0 ? firstTodo : 0;
  renderSteps(); renderStep();
  renderVivaFilters(); nextViva(); renderVivaStats();
  renderScore();
  renderAsk();
  route();
})();
