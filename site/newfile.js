/* 📒 New in my file (pages added 10 Nov 2026): e-waste, biodrainage of wastewater, and news cuttings.
   Every point was checked on 12 Nov 2026; anything only from her newspaper cutting is marked so. */
(function () {
  "use strict";
  window.NEWFILE = {
    intro: "New pages from your project file (added 10 November 2026). Each point was checked. Where your file needs a small correction, it says so in the yellow box.",
    ewaste: {
      points: [
        "E-waste (electronic waste), also called WEEE — Waste Electrical and Electronic Equipment — means electrical or electronic things that are thrown away because they are broken, old (obsolete), unwanted, or at the end of their working life.",
        "Easy test: anything with a plug, a cable or a battery becomes e-waste at the end of its life.",
        "In India, the E-Waste (Management) Rules 2022 (in force from 1 April 2023) cover 106 types of equipment. India made about 13.97 lakh tonnes of e-waste in 2024-25."
      ],
      day: [
        "International E-Waste Day is held every year on 14 October by the WEEE Forum. 14 October 2026 was the 9th one.",
        "Theme 2026: “Fast Tech: Don't bin it, bring it!”",
        "“Fast tech” means small, cheap, short-lived gadgets that people often buy on impulse and throw away easily — like earphones, charging cables, USB adapters, LED string lights, mini fans, toys and single-use vapes.",
        "The message: don't put them in the dustbin — bring them to an e-waste collection point so their metals can be recovered.",
        "Last year's theme (2025) was “Recycle your e-waste – it's critical!”"
      ],
      fix: "Two tiny wording fixes in your file: the official examples say “earphones” (not only wireless earbuds) and “LED string lights” (not strip lights). Your pledge is a good pledge, but it is not an official government pledge — call it “my pledge”.",
      pledgeTitle: "Green Electronics — Our Responsibility, Our Future",
      pledge: [
        "I pledge to follow environmental sustainability when I use electronic equipment.",
        "I will promote responsible use of electronic devices, so that less e-waste is made.",
        "I will encourage repair, reuse, refurbishment, recovery and recycling of electronic products, to make them last longer and save valuable resources.",
        "I will encourage everyone to work together for a cleaner, greener and environmentally responsible India."
      ],
      say: "This year's International E-Waste Day theme was “Fast Tech: Don't bin it, bring it!” — small gadgets like cables and earphones must go to e-waste collection, not the dustbin.",
      src: "WEEE Forum (International E-Waste Day 2026); UN/ITU Global E-waste Monitor 2024; CPCB / Lok Sabha reply (2024-25 figure)"
    },
    biodrainage: null, // filled after checking (see below)
    news: [
      {
        title: "760 study tables made from recycled PoP idols", tag: "Links to my Eco-friendly Ganesha",
        points: [
          "After Ganpati visarjan, broken Plaster of Paris (PoP) idols become waste. In Mumbai, about 1.5 lakh PoP idols are immersed every year, making about 675 tonnes of waste.",
          "Malhar Kalambe (Beach Please India, Mumbai) and innovator Dr. Binish Desai (Valsad, Gujarat) turn this PoP into study tables, using a technology called “Murticycle”.",
          "How: the PoP is separated from broken idols, ground into powder again, mixed with a special organic glue, put into moulds and dried for 6–8 hours.",
          "In about 2 years, more than 3,200 kg of PoP became 760 study tables. Each table saves about 5.4 kg of carbon dioxide. They make 12 kinds of products, like table lamps and pen stands."
        ],
        say: "PoP idols don't break down in water — but they can be recycled into study tables. That is why my Ganesha is made of clay: it breaks down easily in water.",
        src: "The Better India (25 Sep 2026), ETV Bharat (24 Sep 2026)"
      },
      {
        title: "Chandigarh's own drives on 1 October 2026 (Swachhata Hi Seva 2026)", tag: "My home city",
        points: [
          "Swachhata Hi Seva 2026 was India's cleanliness fortnight before Gandhi Jayanti. Its theme: “Swachhata Mein Sahbhag; Swachh Bharat, Viksit Bharat”.",
          "On 1 October, people all over India did one hour of cleaning together at 8 am: “Ek Din, Ek Ghanta, Ek Saath” (one day, one hour, together).",
          "In Chandigarh that day, the CRPF's 13th Battalion ran a big cleanliness drive, State Bank of India's Sector-17 office ran a cleaning and tree-planting drive (Ek Ped Maa Ke Naam), and Punjab National Bank cleaned a Sector-17 park and planted saplings at a government school in Maloya."
        ],
        say: "On 1 October, my own city, Chandigarh, joined the whole country for one hour of cleaning: Ek Din, Ek Ghanta, Ek Saath.",
        src: "National facts: MoHUA–DDWS letter for SHS 2026 (via UGC). Chandigarh drives: her newspaper cuttings (not online)",
        fix: "In your file, “Ek Din, Ek Ghanta, Ek Saath” is the name of the 1 October one-hour cleaning, not the campaign's theme. The theme was “Swachhata Mein Sahbhag; Swachh Bharat, Viksit Bharat”."
      }
    ],
    viva: [],  // filled after checking
    rapid: []
  };

  // her tree diagram, drawn simply: roots absorb → water moves up the trunk → leaves transpire
  const TREE = '<svg viewBox="0 0 320 300" class="nf-tree" role="img" aria-label="Tree diagram: absorption by roots, water moving up the trunk, transpiration from leaves">' +
    '<ellipse cx="160" cy="95" rx="105" ry="75" fill="#3f8f3f"/><rect x="146" y="150" width="28" height="95" fill="#795548"/>' +
    '<path d="M160 245 L120 285 M160 245 L200 285 M160 245 L160 292 M150 250 L95 270 M170 250 L225 270" stroke="#795548" stroke-width="6" fill="none" stroke-linecap="round"/>' +
    '<line x1="0" y1="248" x2="320" y2="248" stroke="#8d6e63" stroke-width="2"/>' +
    '<g fill="#1e88e5"><path d="M60 290 l18 -6 -18 -6z"/><path d="M262 290 l-18 -6 18 -6z"/></g>' +
    '<g stroke="#1e88e5" stroke-width="4" fill="#1e88e5"><line x1="160" y1="235" x2="160" y2="165"/><path d="M152 170 l8 -14 8 14z"/></g>' +
    '<g fill="#64b5f6"><circle cx="110" cy="35" r="5"/><circle cx="160" cy="18" r="5"/><circle cx="212" cy="35" r="5"/><circle cx="135" cy="8" r="4"/><circle cx="188" cy="10" r="4"/></g>' +
    '<text x="250" y="40" font-size="13" fill="currentColor">Transpiration</text><text x="250" y="55" font-size="11" fill="currentColor">(leaves)</text>' +
    '<text x="182" y="200" font-size="13" fill="currentColor">Water moves up</text><text x="182" y="215" font-size="11" fill="currentColor">(trunk)</text>' +
    '<text x="4" y="275" font-size="13" fill="currentColor">Absorption (roots)</text></svg>';

  function render(esc, store) {
    const N = window.NEWFILE, box = document.querySelector("#newfileBody"); if (!box) return;
    const list = a => "<ul>" + a.map(x => "<li>" + esc(x) + "</li>").join("") + "</ul>";
    const fixBox = f => f ? '<p class="small note-ask">✏️ <b>Small fix for your file:</b> ' + esc(f) + "</p>" : "";
    let h = '<div class="card"><h2>📒 New in my file</h2><p>' + esc(N.intro) + "</p></div>";
    if (N.ewaste) {
      const E = N.ewaste;
      h += '<div class="card"><h3>📱 E-waste management</h3>' + list(E.points) + fixBox(E.fix) +
        "<h4>🌍 International E-Waste Day 2026</h4>" + list(E.day) +
        '<h4>🤝 My pledge: “' + esc(E.pledgeTitle) + '”</h4><ol class="pledge-list">' + E.pledge.map(p => "<li>" + esc(p) + "</li>").join("") + "</ol>" +
        '<p class="say">🎤 ' + esc(E.say) + '</p><p class="tiny muted">' + esc(E.src) + "</p></div>";
    }
    if (N.biodrainage) {
      const B = N.biodrainage;
      h += '<div class="card"><h3>🌳 Biodrainage of wastewater</h3><div class="nf-tree-wrap">' + TREE + "</div>" + list(B.points) + fixBox(B.fix) +
        "<h4>✅ Benefits</h4>" + list(B.benefits) + '<h4>⚠️ Be careful — judges may ask</h4>' + list(B.cautions) +
        '<p class="say">🎤 ' + esc(B.say) + '</p><p class="tiny muted">' + esc(B.src) + "</p></div>";
    }
    h += N.news.map(n => '<div class="card"><h3>📰 ' + esc(n.title) + '</h3><p class="small"><span class="pill ok">' + esc(n.tag) + "</span></p>" + list(n.points) +
      '<p class="say">🎤 ' + esc(n.say) + "</p>" + fixBox(n.fix) + '<p class="tiny muted">Source: ' + esc(n.src) + "</p></div>").join("");
    if (N.viva.length) h += '<div class="card"><h3>❓ Practise</h3><p>' + N.viva.length + ' questions from these pages are in Viva questions (topic “My file: new pages”).</p><a class="btn" href="#viva">Practise them →</a></div>';
    box.innerHTML = h;
  }
  window.NewFile = { render };
})();
