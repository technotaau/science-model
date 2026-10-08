/* Eco-Dost 🤖 — Avni's offline project buddy.
   Finds the best answer card in ecodost-data.js for a question, and runs the chat,
   quiz, points, levels and badges. Answers come only from the verified cards. */
(function () {
  "use strict";

  // ---------- text matching ----------
  // words that mean the same thing (left side is replaced by right side)
  const SYN = {
    garbage: "waste", trash: "waste", rubbish: "waste", kachra: "waste", kachara: "waste", kachre: "waste", junk: "waste",
    dustbin: "bin", dustbins: "bin", dabba: "bin", bins: "bin",
    loo: "toilet", latrine: "toilet", washroom: "toilet", shauchalay: "toilet", shauchalaya: "toilet", toilets: "toilet",
    h2: "hydrogen", hydrogenn: "hydrogen", plastik: "plastic", polythene: "plastic", polybag: "plastic", paani: "water", pani: "water", jal: "water",
    ped: "tree", pedh: "tree", trees: "tree", suraj: "sun", sooraj: "sun", hawa: "wind", bijli: "electricity", khaad: "compost", khad: "compost",
    gobar: "dung", swach: "swachh", swacch: "swachh", swatch: "swachh", swachch: "swachh", abhiyaan: "abhiyan", swachhata: "cleanliness", safai: "cleanliness",
    biogass: "biogas", methan: "methane", carbondioxide: "co2", vermicompost: "vermicomposting", seperate: "separate", segregate: "segregation", segragation: "segregation",
    filteration: "filtration", filtter: "filter", charcol: "charcoal", koyla: "charcoal", ret: "sand", rui: "cotton",
    nadi: "river", nadiyan: "river", rivers: "river", rail: "train", gaadi: "vehicle", gaon: "village", gaanv: "village", shehar: "city",
  };
  // short forms that expand to several words
  const EXPAND = {
    ev: "electric vehicle", evs: "electric vehicle", etp: "effluent treatment plant", stp: "sewage treatment plant", sbm: "swachh bharat mission",
    pv: "photovoltaic solar", wte: "waste to energy", cbg: "compressed biogas", sup: "single use plastic", sups: "single use plastic",
    nghm: "national green hydrogen mission", mnre: "ministry new renewable energy", co2: "carbon dioxide", rdf: "refuse derived fuel",
    "7r": "7rs", "7rs": "seven rs", "3r": "3rs", odf: "odf open defecation free", gw: "gigawatt", mw: "megawatt",
  };
  const STOP = new Set(("a an the is are was were be been am of to in on for and or it its this that these those your my i you me we us our with by as at from about into than then so if not no yes please tell explain give " +
    "name what why how which who whom whose when where does do did can could would should will shall may might must there their they them he she his her what's whats hey eco dost robot " +
    "kya kaise kyun kyon kab kahan kaun hai hain ka ki ke ko se me mein aur bhi bata batao samjhao ye yeh wo woh hota hoti hote karte karein karo kare").split(" "));
  // One consistent rule so that waste/wastes, recycle/recycling/recycled all become the same word
  function stem(w) {
    if (w.length > 5 && w.endsWith("ies")) w = w.slice(0, -3) + "y";
    else if (w.length > 5 && w.endsWith("ing")) w = w.slice(0, -3);
    else if (w.length > 4 && w.endsWith("ed")) w = w.slice(0, -2);
    else if (w.length > 3 && w.endsWith("s") && !/(ss|us|is|as)$/.test(w)) w = w.slice(0, -1);
    if (w.length > 3 && w.endsWith("e")) w = w.slice(0, -1);
    return w;
  }
  // misspelled question words ("waht", "hw", "wy") are dropped instead of being "corrected" into topic words
  const QWORDS = ["what", "why", "how", "when", "where", "which", "who", "whose", "does", "explain", "tell", "please", "kya", "kaise", "kyun", "kyon", "kaun", "kahan"];
  function isQuestionWord(w) { return w.length <= 7 && QWORDS.some(q => q !== w && lev(w, q, 1) <= 1); }
  function tokens(s) {
    const raw = String(s).toLowerCase().replace(/[’']/g, "").replace(/[^a-z0-9ऀ-ॿ\s]/g, " ").split(/\s+/).filter(Boolean);
    const out = [];
    raw.forEach(w => {
      if (EXPAND[w]) { EXPAND[w].split(" ").forEach(x => out.push(x)); return; }
      w = SYN[w] || w;
      if (STOP.has(w) || isQuestionWord(w)) return;
      out.push(stem(SYN[stem(w)] || w));
    });
    return out;
  }
  // edit distance where swapping two neighbouring letters ("waht" / "what") counts as one change
  function lev(a, b, max) {
    if (Math.abs(a.length - b.length) > max) return max + 1;
    const d = [];
    for (let i = 0; i <= a.length; i++) { d[i] = [i]; }
    for (let j = 0; j <= b.length; j++) d[0][j] = j;
    for (let i = 1; i <= a.length; i++) {
      let rowMin = Infinity;
      for (let j = 1; j <= b.length; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
        rowMin = Math.min(rowMin, d[i][j]);
      }
      if (rowMin > max) return max + 1;
    }
    return d[a.length][b.length];
  }

  // Build a search index over the cards: question + alternative questions + keywords (keywords count double)
  function buildIndex(cards) {
    const docs = cards.map(c => {
      const tf = new Map();
      const add = (t, w) => tf.set(t, (tf.get(t) || 0) + w);
      [c.q].concat(c.alts || []).forEach(s => tokens(s).forEach(t => add(t, 1)));
      (c.keywords || []).forEach(s => tokens(s).forEach(t => add(t, 2)));
      let len = 0; tf.forEach(v => { len += v; });
      const phrases = [c.q].concat(c.alts || []).map(s => tokens(s));
      return { card: c, tf, len, phrases };
    });
    const df = new Map();
    docs.forEach(d => d.tf.forEach((_, t) => df.set(t, (df.get(t) || 0) + 1)));
    const avg = docs.reduce((a, d) => a + d.len, 0) / Math.max(1, docs.length);
    const vocab = Array.from(df.keys());
    return { docs, df, avg, vocab, N: docs.length };
  }
  // fix spelling: map an unknown word to the closest known word
  function correct(t, idx) {
    if (idx.df.has(t) || t.length < 4 || /^\d+$/.test(t)) return t;
    const max = t.length >= 8 ? 2 : 1;
    let best = null, bd = max + 1;
    for (const v of idx.vocab) {
      if (Math.abs(v.length - t.length) > max) continue;
      const d = lev(t, v, max);
      if (d < bd) { bd = d; best = v; }
    }
    return best || t;
  }
  function search(query, idx) {
    const q = tokens(query).map(t => correct(t, idx));
    if (!q.length) return { q, results: [], known: 0 };
    // share of the question's words that appear anywhere in the cards (off-topic questions score low)
    const known = q.filter(t => idx.df.has(t)).length / q.length;
    const k1 = 1.4, b = 0.6;
    const qset = new Set(q);
    const results = idx.docs.map(d => {
      let s = 0;
      qset.forEach(t => {
        const f = d.tf.get(t); if (!f) return;
        const n = idx.df.get(t);
        const idf = Math.log(1 + (idx.N - n + 0.5) / (n + 0.5));
        s += idf * (f * (k1 + 1)) / (f + k1 * (1 - b + b * d.len / idx.avg));
      });
      // how much of the query is covered by the single best-matching phrasing
      let cover = 0;
      d.phrases.forEach(p => {
        if (!p.length) return;
        const ps = new Set(p);
        const hit = q.filter(t => ps.has(t)).length;
        const c = hit / Math.max(q.length, ps.size * 0.6);
        if (c > cover) cover = c;
      });
      return { card: d.card, score: s * (0.6 + cover), bm: s, cover };
    }).filter(r => r.bm > 0).sort((a, b) => b.score - a.score);
    return { q, results, known };
  }
  // confidence rules (tuned on held-out test questions labelled by reviewers)
  const TUNE = { knownMin: 0.5, sure: 4.0, coverSure: 0.34, maybe: 2.0, coverMaybe: 0.2, related: 0.75 };
  function decide(found, tune) {
    const T = tune || TUNE;
    const [r1] = found.results;
    if (!r1 || found.known < T.knownMin) return { kind: "none" };
    if (r1.score >= T.sure && r1.cover >= T.coverSure) {
      // other cards that are almost as good are offered as "related" buttons
      const related = found.results.slice(1, 4).filter(r => r.score >= r1.score * T.related).slice(0, 2);
      return { kind: "answer", r: r1, related };
    }
    if (r1.score >= T.maybe && r1.cover >= T.coverMaybe) return { kind: "maybe", options: found.results.slice(0, 3) };
    return { kind: "none" };
  }

  // ---------- small talk ----------
  const TALK = [
    { re: /^(hi|hii+|hello|hey|namaste|namaskar|good (morning|afternoon|evening)|hola)\b/i, say: () => pick(["Hi Avni! 👋 I'm Eco-Dost, your project buddy. Ask me anything about your file or your model!", "Namaste Avni! 🙏 Ready to learn something cool about Clean India?", "Hello hello! 🤖 What shall we explore today?"]) },
    { re: /\b(thank|thanks|thx|shukriya|dhanyavad|dhanyawad)\b/i, say: () => pick(["You're welcome, Avni! 🌟 Keep asking — every question makes you stronger!", "Anytime! 💚 Want me to quiz you? Tap 🎲 Quiz me!"]) },
    { re: /\b(joke|funny|hasao|chutkula)\b/i, say: () => pick(JOKES) },
    { re: /^(bye|goodbye|see you|alvida|tata)\b/i, say: () => "Bye Avni! 👋 Remember: the best waste is the waste we never create! ♻️" },
    { re: /^(help|what can you do|how (do|does) this work)\b/i, say: () => "Type or 🎤 speak any question about your project file or model — like “How does biogas work?” or “Why is cotton at the bottom of my filter?”. Tap 🎲 Quiz me and I'll ask YOU questions. Every question earns ⭐ points!" },
  ];
  const JOKES = [
    "Why was the compost pile so happy? 🌱 Because it was rotting for a good cause! 😄",
    "Why did the solar panel get full marks? ☀️ Because it was always so bright! 😎",
    "What did the green bin say to the blue bin? 🗑️ “Stop being so dry — have some fun!” 😂",
    "Why don't plastic bags get invited to parties? 🙈 Because they're single-use! 😆",
    "Why did the hydrogen train never get angry? 🚆 Because it only lets off water vapour, never steam! 😄",
  ];
  const OPENERS = ["Great question, Avni! 🌟", "Ooh, I love this one! 🤩", "Eco-Dost to the rescue! 🤖", "Here's the scoop! 🍦", "Super curious — I like it! 🔍", "Let's find out! 🚀", "Good thinking! 💡"];
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }

  // ---------- points, levels, badges ----------
  const LEVELS = [
    { min: 0, name: "Eco Explorer", icon: "🌱" },
    { min: 10, name: "Green Guardian", icon: "🌿" },
    { min: 25, name: "Swachh Champion", icon: "🏅" },
    { min: 50, name: "Planet Hero", icon: "🌍" },
  ];
  const BADGES = {
    "clean-india": { icon: "🇮🇳", name: "Clean India Captain" },
    waste: { icon: "🗑️", name: "Bin Boss" },
    "plastic-rivers": { icon: "🧴", name: "Plastic Buster" },
    energy: { icon: "☀️", name: "Solar Star" },
    "biogas-water": { icon: "💧", name: "Water Wizard" },
    "model-talk": { icon: "🏗️", name: "Model Master" },
  };
  const BADGE_AT = 5;

  window.EcoDost = { tokens, buildIndex, search, decide, TUNE, init };

  function init(opts) {
    const D = window.ECODOST;
    const $ = s => document.querySelector(s);
    if (!D || !$("#tab-ecodost")) return;
    const V = window.Voice;
    const store = opts.store, esc = opts.esc;
    const live = window.SITE && window.SITE.student && window.SITE.student.ecodostLiveUrl;
    if (live && !document.documentElement.classList.contains("visitor")) {
      $("#edLive").hidden = false;
      $("#edLive").innerHTML = '<div><b>🧠 Want a real AI to answer ANY question?</b><br><span class="small muted">Eco-Dost Live uses Claude to answer from your file, and can mark your quiz answers like Rajnish Ma\'am. Open it while you are signed in to Claude.</span></div>' +
        '<a class="btn act" href="' + esc(live) + '" target="_blank" rel="noopener">Open Eco-Dost Live →</a>';
    }
    if (!D.cards || !D.cards.length) {
      $("#edChat").innerHTML = '<div class="ed-msg bot"><span class="ed-ava" aria-hidden="true">🤖</span><div class="ed-bub">📚 Eco-Dost is still learning your project — come back soon!</div></div>';
      $("#edForm").hidden = true; $("#edQuiz").disabled = true;
      return;
    }
    const idx = buildIndex(D.cards);
    const byId = Object.fromEntries(D.cards.map(c => [c.id, c]));
    const st = Object.assign({ points: 0, asked: [], checks: [], unknown: [], hindi: false, speak: false }, store.get("ecodost", {}));
    const save = () => store.set("ecodost", st);
    const chat = $("#edChat");

    function levelOf(p) { let l = LEVELS[0]; LEVELS.forEach(x => { if (p >= x.min) l = x; }); return l; }
    function renderStats() {
      const l = levelOf(st.points), next = LEVELS.find(x => x.min > st.points);
      $("#edLevel").textContent = l.icon + " " + l.name;
      $("#edPoints").textContent = st.points + " ⭐";
      const pct = next ? Math.round(100 * (st.points - l.min) / (next.min - l.min)) : 100;
      $("#edBar").style.width = pct + "%";
      $("#edNext").textContent = next ? (next.min - st.points) + " ⭐ to " + next.icon + " " + next.name : "Top level reached! 🎉";
      const counts = {};
      st.asked.forEach(id => { const c = byId[id]; if (c) counts[c.topic] = (counts[c.topic] || 0) + 1; });
      $("#edBadges").innerHTML = Object.keys(BADGES).map(t => {
        const b = BADGES[t], n = counts[t] || 0, got = n >= BADGE_AT;
        return '<span class="ed-badge' + (got ? " got" : "") + '" title="' + esc(b.name) + (got ? " — earned!" : " — ask " + (BADGE_AT - n) + " more " + t.replace("-", " ") + " questions") + '">' + b.icon + '<small>' + (got ? "✓" : n + "/" + BADGE_AT) + "</small></span>";
      }).join("");
      $("#edUnknown").innerHTML = st.unknown.length ? "<b>Questions saved for your mentor (" + st.unknown.length + "):</b><ul>" + st.unknown.map(q => "<li>" + esc(q) + "</li>").join("") + "</ul>" +
        '<button class="btn small ghost" id="edCopyUnknown">📋 Copy them</button> <button class="btn small ghost" id="edClearUnknown">🗑️ Clear</button>' : "";
      if ($("#edCopyUnknown")) $("#edCopyUnknown").onclick = async () => { try { await navigator.clipboard.writeText("Questions for my mentor:\n" + st.unknown.map((q, i) => (i + 1) + ". " + q).join("\n")); $("#edCopyUnknown").textContent = "✅ Copied"; } catch (e) {} };
      if ($("#edClearUnknown")) $("#edClearUnknown").onclick = () => { st.unknown = []; save(); renderStats(); };
    }
    function addPoints(n, why) {
      const before = levelOf(st.points);
      const beforeBadges = badgeSet();
      st.points += n; save(); renderStats();
      toast("+" + n + " ⭐ " + why);
      const after = levelOf(st.points);
      if (after !== before) bot("🎉 <b>Level up!</b> You are now a <b>" + after.icon + " " + after.name + "</b>! Amazing, Avni!");
      badgeSet().forEach(t => { if (!beforeBadges.has(t)) bot("🏆 <b>New badge:</b> " + BADGES[t].icon + " <b>" + BADGES[t].name + "</b>! You asked " + BADGE_AT + " questions about this topic."); });
    }
    function badgeSet() {
      const counts = {}; st.asked.forEach(id => { const c = byId[id]; if (c) counts[c.topic] = (counts[c.topic] || 0) + 1; });
      return new Set(Object.keys(counts).filter(t => counts[t] >= BADGE_AT));
    }
    function toast(t) { const el = $("#edToast"); el.textContent = t; el.classList.add("show"); clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove("show"), 1800); }

    function bubble(html, who) {
      const el = document.createElement("div");
      el.className = "ed-msg " + who;
      el.innerHTML = (who === "bot" ? '<span class="ed-ava" aria-hidden="true">🤖</span>' : "") + '<div class="ed-bub">' + html + "</div>";
      chat.appendChild(el);
      el.scrollIntoView({ behavior: "smooth", block: "end" });
      return el;
    }
    function bot(html) { return bubble(html, "bot"); }
    function typing() { return bubble('<span class="ed-dots"><i></i><i></i><i></i></span>', "bot"); }
    const wait = ms => new Promise(r => setTimeout(r, ms));
    function sayAloud(c) {
      if (!st.speak || !V || !V.canSpeak) return;
      V.stopSpeaking();
      V.speak(c.answer).then(() => { if (st.hindi && c.hi) V.speak(c.hi, { lang: "hi", rate: 0.85 }); });
    }

    function cardHTML(c) {
      let h = "<p>" + esc(c.answer) + "</p>";
      if (st.hindi && c.hi) h += '<p class="ed-hi hi" lang="hi">🇮🇳 ' + esc(c.hi) + "</p>";
      if (c.fun) h += '<p class="ed-fun">🤩 <b>Did you know?</b> ' + esc(c.fun) + "</p>";
      if (c.caution) h += '<p class="ed-caution">⚠️ <b>Careful:</b> ' + esc(c.caution) + "</p>";
      const refs = [];
      if (c.filePage) refs.push("📒 From your file, page " + esc(c.filePage.replace(/^p/i, "")));
      if (c.link) refs.push('<a href="' + esc(c.link) + '">🗺️ See it on your website →</a>');
      if (refs.length) h += '<p class="ed-refs">' + refs.join(" · ") + "</p>";
      return h;
    }
    function quickCheck(c, intro) {
      if (!c.check || !c.check.q) return;
      const el = bot((intro || "🎯 <b>Quick check:</b> ") + esc(c.check.q) +
        '<div class="ed-qc"><button class="btn small act" data-a="show">Show answer</button></div>');
      const box = el.querySelector(".ed-qc");
      box.querySelector("[data-a=show]").onclick = () => {
        box.innerHTML = '<p class="ed-ans">✅ ' + esc(c.check.a) + '</p><button class="btn small" data-a="got">I got it! ✅</button> <button class="btn small ghost" data-a="not">Not yet 🔁</button>';
        box.querySelector("[data-a=got]").onclick = () => {
          box.innerHTML = '<p class="ed-ans">✅ ' + esc(c.check.a) + "</p><p>🎉 Brilliant!</p>";
          if (!st.checks.includes(c.id)) { st.checks.push(c.id); addPoints(2, "for knowing it!"); } else toast("Already counted — great revision! 💪");
        };
        box.querySelector("[data-a=not]").onclick = () => {
          box.innerHTML = '<p class="ed-ans">✅ ' + esc(c.check.a) + "</p><p>No problem — read it once more and say it out loud. You'll get it next time! 💪</p>";
        };
      };
    }
    async function answerCard(c, opener, related) {
      const t = typing(); await wait(500 + Math.min(900, c.answer.length * 6)); t.remove();
      bot((opener ? "<b>" + esc(opener) + "</b> " : "") + cardHTML(c));
      sayAloud(c);
      if (!st.asked.includes(c.id)) { st.asked.push(c.id); save(); addPoints(1, "for a new question"); }
      if (related && related.length) {
        const el = bot('🔗 <b>Related:</b><div class="ed-chips">' + related.map(r => '<button class="chip" data-id="' + r.card.id + '">' + esc(r.card.q) + "</button>").join("") + "</div>");
        el.querySelectorAll("[data-id]").forEach(b => b.onclick = () => { bubble(esc(byId[b.dataset.id].q), "me"); answerCard(byId[b.dataset.id], "Sure! 👍"); });
      }
      await wait(400);
      quickCheck(c);
      suggest(c.topic);
    }
    async function ask(text) {
      text = String(text || "").trim();
      if (!text) return;
      bubble(esc(text), "me");
      $("#edInput").value = "";
      for (const tk of TALK) if (tk.re.test(text)) { const t = typing(); await wait(500); t.remove(); bot(esc(tk.say())); return; }
      const found = search(text, idx), d = decide(found);
      if (d.kind === "answer") return answerCard(d.r.card, pick(OPENERS), d.related);
      const t = typing(); await wait(600); t.remove();
      if (d.kind === "maybe") {
        const el = bot("🤔 Hmm, I'm not 100% sure what you mean. Did you mean one of these?" +
          '<div class="ed-chips">' + d.options.map(o => '<button class="chip" data-id="' + o.card.id + '">' + esc(o.card.q) + "</button>").join("") + "</div>" +
          '<p class="small">None of these? <button class="btn small ghost" data-save>💾 Save my question for my mentor</button></p>');
        el.querySelectorAll("[data-id]").forEach(b => b.onclick = () => { bubble(esc(byId[b.dataset.id].q), "me"); answerCard(byId[b.dataset.id], "Got it! 👍"); });
        el.querySelector("[data-save]").onclick = () => { remember(text); el.querySelector("[data-save]").outerHTML = "<span>✅ Saved!</span>"; };
        return;
      }
      remember(text);
      bot("🙈 Oops — I don't know that one yet! I only know about <b>your project file and model</b>. I've saved your question so you can ask your mentor. Try asking about biogas, the hydrogen train, your filter, the 7Rs…");
    }
    function remember(q) { if (!st.unknown.includes(q)) { st.unknown.push(q); st.unknown = st.unknown.slice(-30); save(); renderStats(); } }

    function suggest(topic) {
      const pool = D.cards.filter(c => (!topic || c.topic === topic) && !st.asked.includes(c.id));
      const list = (pool.length >= 3 ? pool : D.cards).slice().sort(() => Math.random() - 0.5).slice(0, 4);
      $("#edSuggest").innerHTML = list.map(c => '<button class="chip" data-id="' + c.id + '">' + esc(c.q) + "</button>").join("");
      $("#edSuggest").querySelectorAll(".chip").forEach(b => b.onclick = () => ask(byId[b.dataset.id].q));
    }
    async function quiz() {
      const pool = D.cards.filter(c => c.check && c.check.q);
      const fresh = pool.filter(c => !st.checks.includes(c.id));
      const c = pick(fresh.length ? fresh : pool);
      bubble("🎲 Quiz me!", "me");
      const t = typing(); await wait(500); t.remove();
      quickCheck(c, "🎲 <b>Quiz time!</b> (" + esc(BADGES[c.topic] ? BADGES[c.topic].icon : "❓") + ") ");
    }

    $("#edForm").onsubmit = e => { e.preventDefault(); ask($("#edInput").value); };
    $("#edQuiz").onclick = quiz;
    $("#edHindi").checked = st.hindi;
    $("#edHindi").onchange = () => { st.hindi = $("#edHindi").checked; save(); };
    $("#edSpeak").checked = st.speak;
    $("#edSpeak").onchange = () => { st.speak = $("#edSpeak").checked; save(); if (!st.speak && V) V.stopSpeaking(); };
    if (V && V.canListen) {
      $("#edMic").onclick = async () => {
        if ($("#edMic").classList.contains("on")) { V.stopListening(); return; }
        V.stopSpeaking();
        $("#edMic").classList.add("on"); $("#edMic").textContent = "●";
        const said = await V.listen({ silence: 1600, startWait: 7000, maxMs: 20000, onText: t => { $("#edInput").value = t; } });
        $("#edMic").classList.remove("on"); $("#edMic").textContent = "🎤";
        const prob = V.micProblem();
        if (prob) { bot(esc(prob)); return; }
        if (said) ask(said);
      };
    } else $("#edMic").hidden = true;
    $("#edReset").onclick = () => {
      if (!confirm("Start again from 0 points? Your saved questions will stay.")) return;
      st.points = 0; st.asked = []; st.checks = []; save(); renderStats(); chat.innerHTML = ""; greet();
    };
    function greet() {
      bot("👋 Hi Avni! I'm <b>Eco-Dost</b>, your project buddy! 🤖♻️<br>Ask me anything about <b>your project file</b> or <b>your model</b> — type it or tap 🎤. I'll explain, share a fun fact, and then test you with a quick check. Every new question = ⭐!");
      suggest();
    }
    renderStats();
    greet();
  }
})();
