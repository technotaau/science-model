/* 🎮 Games: Bin Sorter, 7R Match, Swachh Champion Quiz and Model Memory.
   All questions and answers live in content.js (SITE.games). Stars from each round are
   added to Eco-Dost ⭐ points. */
(function () {
  "use strict";

  const GAMES = [
    { id: "bins", icon: "🗑️", name: "Bin Sorter", blurb: "Sort everyday waste into the right coloured bin before time runs out." },
    { id: "rmatch", icon: "♻️", name: "7R Match", blurb: "Match each action to the right R. Is it Refuse or Reduce?" },
    { id: "quiz", icon: "⚡", name: "Swachh Champion Quiz", blurb: "10 quick questions, a timer, one 50-50 lifeline and a high score." },
    { id: "memory", icon: "🧩", name: "Model Memory", blurb: "Flip cards to match each model part with what it does." }
  ];
  const BIN_TIME = 60;   // seconds for one Bin Sorter round
  const Q_TIME = 20;     // seconds per quiz question

  function shuffle(a) {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  const starText = n => "★".repeat(n) + "☆".repeat(3 - n);

  function init(opts) {
    const G = window.SITE && window.SITE.games;
    const $ = s => document.querySelector(s);
    const root = $("#gmPlay");
    if (!G || !root) return;
    const store = opts.store, esc = opts.esc;
    const st = Object.assign({ best: {}, stars: 0, plays: 0, sound: true, timer: true }, store.get("games", {}));
    const save = () => store.set("games", st);
    let timer = null;        // the one running interval (a game clock)
    let pending = null;      // the one pending timeout (auto-next after a right answer)
    let current = null;      // id of the game being played

    function clearClocks() { clearInterval(timer); timer = null; clearTimeout(pending); pending = null; }

    // ---------- small sounds (Web Audio, no files) ----------
    let ac = null;
    function beep(kind) {
      if (!st.sound) return;
      try {
        ac = ac || new (window.AudioContext || window.webkitAudioContext)();
        const notes = kind === "ok" ? [660, 880] : kind === "win" ? [523, 659, 784, 1047] : [220, 180];
        notes.forEach((f, i) => {
          const o = ac.createOscillator(), g = ac.createGain(), t = ac.currentTime + i * 0.11;
          o.type = kind === "bad" ? "square" : "sine"; o.frequency.value = f;
          g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.12, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.14);
          o.connect(g); g.connect(ac.destination); o.start(t); o.stop(t + 0.16);
        });
      } catch (e) { /* no audio */ }
    }

    // ---------- hub ----------
    function renderHub() {
      $("#gmStars").textContent = st.stars + " ⭐ earned in games";
      $("#gmSound").checked = st.sound;
      $("#gmList").innerHTML = GAMES.map(g => {
        const b = st.best[g.id];
        const best = b ? '<span class="gm-best"><span class="gm-starrow" aria-label="' + b.stars + ' of 3 stars">' + starText(b.stars) + "</span> Best: " + esc(b.label) + "</span>" : '<span class="gm-best muted">Not played yet</span>';
        return '<button class="card gm-pick" data-game="' + g.id + '"><span class="gm-ico" aria-hidden="true">' + g.icon + "</span><b>" + esc(g.name) + "</b><span>" + esc(g.blurb) + "</span>" + best + "</button>";
      }).join("");
      document.querySelectorAll("#gmList .gm-pick").forEach(b => { b.onclick = () => start(b.dataset.game); });
    }
    function showHub() {
      clearClocks(); current = null;
      root.hidden = true; root.innerHTML = "";
      $("#gmHub").hidden = false;
      renderHub();
    }
    function frame(game, statusHTML) {
      $("#gmHub").hidden = true; root.hidden = false;
      root.innerHTML = '<div class="gm-top"><button class="btn small ghost" id="gmBack">← All games</button><b>' + game.icon + " " + esc(game.name) + '</b><span class="gm-status" id="gmStatus">' + (statusHTML || "") + "</span></div>" +
        '<div class="gm-stage" id="gmStage"></div>';
      $("#gmBack").onclick = showHub;
      window.scrollTo(0, 0);
    }
    const stage = () => $("#gmStage");
    const status = h => { const el = $("#gmStatus"); if (el) el.innerHTML = h; };

    // ---------- end of a round: stars, best score, review ----------
    function finish(id, o) {
      clearClocks();
      const prev = st.best[id];
      const isBest = !prev || o.score > prev.score;
      if (isBest) st.best[id] = { score: o.score, label: o.label, stars: o.stars };
      else if (o.stars > prev.stars) st.best[id].stars = o.stars;
      st.stars += o.stars; st.plays++; save();
      if (o.stars) {
        if (window.EcoDost && window.EcoDost.award) window.EcoDost.award(o.stars);
        else { const e = store.get("ecodost", {}); e.points = (e.points || 0) + o.stars; store.set("ecodost", e); }
      }
      if (o.stars === 3) beep("win");
      const msg = o.stars === 3 ? "Superstar! 🎉" : o.stars === 2 ? "Great job! 👏" : o.stars === 1 ? "Good try! Play again to get more stars. 💪" : "Keep practising — you'll get it! 🌱";
      stage().innerHTML = '<div class="gm-end">' + (o.stars === 3 ? '<div class="gm-party" aria-hidden="true">🎉✨🎊</div>' : "") +
        '<div class="gm-bigstars" aria-label="' + o.stars + ' of 3 stars">' + starText(o.stars) + "</div>" +
        "<h2>" + msg + "</h2><p><b>" + esc(o.label) + "</b>" + (isBest && prev ? " — 🏆 new best!" : "") + "</p>" +
        (o.stars ? '<p class="small">+' + o.stars + " ⭐ added to your Eco-Dost points.</p>" : "") +
        (o.review && o.review.length ? '<div class="sec bad gm-review"><h4>📚 Learn from these</h4><ul>' + o.review.map(r => "<li>" + r + "</li>").join("") + "</ul></div>" : (o.perfect ? '<div class="sec ok"><h4>✅ No mistakes!</h4><p>Every answer was right.</p></div>' : "")) +
        '<div class="gm-actions"><button class="btn" id="gmAgain">🔁 Play again</button> <button class="btn ghost" id="gmHome">🎮 All games</button></div></div>';
      $("#gmAgain").onclick = () => start(id);
      $("#gmHome").onclick = showHub;
      $("#gmAgain").focus();
      status(starText(o.stars));
    }

    // ---------- 🗑️ Bin Sorter ----------
    function playBins() {
      const items = shuffle(G.binItems);
      let i = 0, right = 0, left = BIN_TIME;
      const wrong = [];
      const binBy = Object.fromEntries(G.bins.map(b => [b.key, b]));
      const done = () => {
        const stars = right >= 12 ? 3 : right >= 8 ? 2 : right >= 4 ? 1 : 0;
        finish("bins", { score: right, label: right + " sorted correctly" + (wrong.length ? ", " + wrong.length + " mistake" + (wrong.length > 1 ? "s" : "") : ""), stars, perfect: right > 0 && !wrong.length,
          review: wrong.map(w => esc(w.e + " " + w.item) + " → <b>" + esc(binBy[w.bin].name + " (" + binBy[w.bin].stream + ")") + "</b>. " + esc(w.why)) });
      };
      const tick = () => {
        left--; showStatus();
        if (left <= 0) done();
      };
      const showStatus = () => status("⏱️ " + left + "s · ✅ " + right);
      const run = () => { clearInterval(timer); timer = setInterval(tick, 1000); };
      function next() {
        if (i >= items.length) { done(); return; }
        const it = items[i];
        stage().innerHTML = '<div class="gm-q"><div class="gm-item"><span class="gm-emoji" aria-hidden="true">' + it.e + "</span>" + esc(it.item) + '</div><p class="small muted">Which bin? (' + (i + 1) + " of " + items.length + ')</p><div class="gm-bins">' +
          G.bins.map(b => '<button class="gm-bin" data-bin="' + b.key + '" style="--bin:' + esc(b.color) + '"><b>' + esc(b.name) + "</b><span>" + esc(b.stream) + "</span></button>").join("") + '</div><div class="gm-feedback" id="gmFb" aria-live="polite"></div></div>';
        stage().querySelectorAll(".gm-bin").forEach(btn => { btn.onclick = () => choose(btn.dataset.bin); });
      }
      function choose(key) {
        const it = items[i];
        stage().querySelectorAll(".gm-bin").forEach(b => { b.disabled = true; if (b.dataset.bin === it.bin) b.classList.add("right"); else if (b.dataset.bin === key) b.classList.add("wrong"); });
        const fb = $("#gmFb");
        i++;
        if (key === it.bin) {
          right++; showStatus(); beep("ok");
          fb.className = "gm-feedback ok"; fb.innerHTML = "✅ Right! " + esc(it.why);
          pending = setTimeout(next, 1300);
        } else {
          wrong.push(it); beep("bad");
          clearInterval(timer); timer = null;   // the clock waits while you read
          fb.className = "gm-feedback bad";
          fb.innerHTML = "❌ It goes in the <b>" + esc(binBy[it.bin].name + " bin (" + binBy[it.bin].stream + ")") + "</b>. " + esc(it.why) + '<br><button class="btn small" id="gmNext">Next →</button> <span class="tiny muted">The clock waits while you read.</span>';
          $("#gmNext").onclick = () => { run(); next(); };
          $("#gmNext").focus();
        }
      }
      showStatus(); run(); next();
    }

    // ---------- ♻️ 7R Match ----------
    function playRMatch() {
      // Every round has 2 Refuse and 2 Reduce actions (the usual mix-up), plus 4 others
      const by = r => shuffle(G.rActions.filter(x => x.r === r));
      const others = shuffle(G.rActions.filter(x => x.r !== "Refuse" && x.r !== "Reduce"));
      const picked = [];
      const seen = new Set();
      others.forEach(x => { if (picked.length < 4 && !seen.has(x.r)) { seen.add(x.r); picked.push(x); } });
      const round = shuffle(by("Refuse").slice(0, 2).concat(by("Reduce").slice(0, 2), picked));
      let i = 0, right = 0;
      const wrong = [];
      const showStatus = () => status("✅ " + right + " / " + round.length);
      function next() {
        if (i >= round.length) {
          const stars = right === round.length ? 3 : right >= round.length - 2 ? 2 : right >= round.length / 2 ? 1 : 0;
          finish("rmatch", { score: right, label: right + " / " + round.length + " correct", stars, perfect: !wrong.length,
            review: wrong.map(w => esc(w.a) + " → <b>" + esc(w.r) + "</b>. " + esc(w.why)) });
          return;
        }
        const x = round[i];
        stage().innerHTML = '<div class="gm-q"><div class="gm-item gm-action">' + esc(x.a) + '</div><p class="small muted">Which R is this? (' + (i + 1) + " of " + round.length + ')</p><div class="gm-rs">' +
          G.sevenR.map((r, n) => '<button class="gm-r" data-r="' + esc(r) + '"><small>' + (n + 1) + "</small>" + esc(r) + "</button>").join("") + '</div><div class="gm-feedback" id="gmFb" aria-live="polite"></div></div>';
        stage().querySelectorAll(".gm-r").forEach(b => { b.onclick = () => choose(b.dataset.r); });
      }
      function choose(r) {
        const x = round[i];
        stage().querySelectorAll(".gm-r").forEach(b => { b.disabled = true; if (b.dataset.r === x.r) b.classList.add("right"); else if (b.dataset.r === r) b.classList.add("wrong"); });
        const fb = $("#gmFb");
        i++;
        if (r === x.r) {
          right++; showStatus(); beep("ok");
          fb.className = "gm-feedback ok"; fb.innerHTML = "✅ Yes, <b>" + esc(x.r) + "</b>! " + esc(x.why);
          pending = setTimeout(next, 1600);
        } else {
          wrong.push(x); beep("bad");
          fb.className = "gm-feedback bad";
          fb.innerHTML = "❌ This one is <b>" + esc(x.r) + "</b>. " + esc(x.why) +
            ([x.r, r].sort().join() === "Reduce,Refuse" ? "<br>💡 <b>Refuse</b> = say NO. <b>Reduce</b> = use LESS." : "") +
            '<br><button class="btn small" id="gmNext">Next →</button>';
          $("#gmNext").onclick = next;
          $("#gmNext").focus();
        }
      }
      showStatus(); next();
    }

    // ---------- ⚡ Swachh Champion Quiz ----------
    function playQuiz() {
      const qs = shuffle(G.quiz).slice(0, 10);
      const timed = st.timer;
      let i = 0, right = 0, points = 0, fifty = true, left = Q_TIME;
      const wrong = [];
      const showStatus = () => status((timed ? "⏱️ " + left + "s · " : "") + "🏅 " + points + " pts");
      function next() {
        if (i >= qs.length) {
          const stars = right >= 9 ? 3 : right >= 7 ? 2 : right >= 5 ? 1 : 0;
          finish("quiz", { score: points, label: points + " points (" + right + "/10 right)", stars, perfect: !wrong.length,
            review: wrong.map(w => esc(w.q.q) + " → <b>" + esc(w.q.o[w.q.answer]) + "</b>. " + esc(w.q.why)) });
          return;
        }
        const q = qs[i];
        const order = shuffle(q.o.map((_, n) => n));
        left = Q_TIME;
        stage().innerHTML = '<div class="gm-q"><p class="small muted">Question ' + (i + 1) + " of " + qs.length + "</p>" +
          (timed ? '<div class="bar gm-timebar"><i id="gmTime" style="width:100%"></i></div>' : "") +
          '<div class="gm-item gm-question">' + esc(q.q) + '</div><div class="gm-opts">' +
          order.map((n, k) => '<button class="gm-opt" data-n="' + n + '"><small>' + "ABCD"[k] + "</small>" + esc(q.o[n]) + "</button>").join("") +
          '</div><div class="gm-tools"><button class="btn small alt" id="gmFifty"' + (fifty ? "" : " disabled") + ">✂️ 50-50" + (fifty ? "" : " (used)") + '</button></div><div class="gm-feedback" id="gmFb" aria-live="polite"></div></div>';
        stage().querySelectorAll(".gm-opt").forEach(b => { b.onclick = () => choose(+b.dataset.n); });
        $("#gmFifty").onclick = () => {
          if (!fifty) return;
          fifty = false;
          const wrongOpts = shuffle(order.filter(n => n !== q.answer)).slice(0, 2);
          stage().querySelectorAll(".gm-opt").forEach(b => { if (wrongOpts.includes(+b.dataset.n)) { b.disabled = true; b.classList.add("gone"); } });
          $("#gmFifty").disabled = true; $("#gmFifty").textContent = "✂️ 50-50 (used)";
        };
        showStatus();
        if (timed) {
          clearInterval(timer);
          timer = setInterval(() => {
            left--; showStatus();
            const bar = $("#gmTime"); if (bar) bar.style.width = (100 * left / Q_TIME) + "%";
            if (left <= 0) choose(-1);
          }, 1000);
        }
      }
      function choose(n) {
        clearInterval(timer); timer = null;
        const q = qs[i];
        stage().querySelectorAll(".gm-opt").forEach(b => { b.disabled = true; if (+b.dataset.n === q.answer) b.classList.add("right"); else if (+b.dataset.n === n) b.classList.add("wrong"); });
        $("#gmFifty").disabled = true;
        const fb = $("#gmFb");
        i++;
        if (n === q.answer) {
          right++; points += 10 + (timed ? left : 0); showStatus(); beep("ok");
          fb.className = "gm-feedback ok"; fb.innerHTML = "✅ Correct!" + (timed && left > 0 ? " +10 and +" + left + " speed bonus." : " +10.") + " " + esc(q.why);
        } else {
          wrong.push({ q }); beep("bad");
          fb.className = "gm-feedback bad";
          fb.innerHTML = (n === -1 ? "⏰ Time's up! " : "❌ Not quite. ") + "The answer is <b>" + esc(q.o[q.answer]) + "</b>. " + esc(q.why);
        }
        fb.innerHTML += '<br><button class="btn small" id="gmNext">' + (i >= qs.length ? "See my score →" : "Next →") + "</button>";
        $("#gmNext").onclick = next;
        $("#gmNext").focus();
      }
      next();
    }

    // ---------- 🧩 Model Memory ----------
    function playMemory() {
      const pairs = shuffle(G.memory).slice(0, 6);
      const cards = shuffle(pairs.flatMap((p, n) => [{ n, side: "a", text: p.a }, { n, side: "b", text: p.b }]));
      let open = [], moves = 0, found = 0, lock = false;
      const t0 = Date.now();
      const secs = () => Math.round((Date.now() - t0) / 1000);
      const showStatus = () => status("🔁 " + moves + " moves · 🧩 " + found + " / " + pairs.length);
      stage().innerHTML = '<p class="small muted">Find each model part (🟩 green card) and what it does (🟦 blue card). Tap two cards.</p><div class="gm-grid" id="gmGrid">' +
        cards.map((c, k) => '<button class="gm-card side-' + c.side + '" data-k="' + k + '" aria-label="Hidden card ' + (k + 1) + '"><span class="gm-back" aria-hidden="true">♻️</span><span class="gm-face ' + c.side + '">' + esc(c.text) + "</span></button>").join("") +
        '</div><div class="gm-feedback" id="gmFb" aria-live="polite"></div>';
      const btns = Array.from(stage().querySelectorAll(".gm-card"));
      const reveal = (b, on) => { b.classList.toggle("up", on); b.setAttribute("aria-label", on ? cards[+b.dataset.k].text : "Hidden card " + (+b.dataset.k + 1)); };
      btns.forEach(b => {
        b.onclick = () => {
          if (lock || b.classList.contains("up")) return;
          reveal(b, true); open.push(b);
          if (open.length < 2) return;
          moves++;
          const [x, y] = open.map(o => cards[+o.dataset.k]);
          const fb = $("#gmFb");
          if (x.n === y.n) {
            found++; beep("ok");
            open.forEach(o => { o.classList.add("matched"); o.disabled = true; });
            fb.className = "gm-feedback ok"; fb.innerHTML = "✅ Match! <b>" + esc(pairs[x.n].a) + "</b> — " + esc(pairs[x.n].b) + ".";
            open = []; showStatus();
            if (found === pairs.length) {
              const stars = moves <= 9 ? 3 : moves <= 13 ? 2 : 1;
              pending = setTimeout(() => finish("memory", { score: -moves, label: "All " + pairs.length + " pairs in " + moves + " moves (" + secs() + "s)", stars, perfect: false }), 900);
            }
          } else {
            lock = true; showStatus();
            fb.className = "gm-feedback"; fb.textContent = "Not a pair — try to remember where they are! 🧠";
            pending = setTimeout(() => { open.forEach(o => reveal(o, false)); open = []; lock = false; }, 1100);
          }
        };
      });
      showStatus();
    }

    function start(id) {
      clearClocks();
      const g = GAMES.find(x => x.id === id);
      if (!g) return;
      current = id;
      frame(g);
      ({ bins: playBins, rmatch: playRMatch, quiz: playQuiz, memory: playMemory })[id]();
    }

    $("#gmSound").onchange = () => { st.sound = $("#gmSound").checked; save(); };
    $("#gmTimer").checked = st.timer;
    $("#gmTimer").onchange = () => { st.timer = $("#gmTimer").checked; save(); };
    $("#gmReset").onclick = () => {
      if (!confirm("Clear your best scores? Your ⭐ points in Eco-Dost will stay.")) return;
      st.best = {}; st.stars = 0; st.plays = 0; save(); renderHub();
    };
    showHub();

    // Leaving the Games tab stops any running clock and goes back to the list
    window.Games.stop = () => { if (current) showHub(); };
  }

  window.Games = { init, stop() {} };
})();
