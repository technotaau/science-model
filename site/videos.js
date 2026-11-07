/* 🎬 Ma'am's videos: two Gorakhpur news videos Rajnish Ma'am asked Avni to study (shared 7 Nov 2026).
   The videos themselves could not be read from our server (YouTube blocks automated access), so the
   points below come from newspaper reports of the same events, each checked against the original
   article on 7 Nov 2026. When the transcripts arrive, mark each video "checked: true" and fix any point. */
(function () {
  "use strict";
  window.VIDEOS = {
    intro: "Rajnish Ma'am asked you to study these two news videos about Gorakhpur, the city of the national fair. Judges from Gorakhpur will be happy if you know what their own city is doing for cleanliness.",
    note: "We have not been able to read the words of the videos yet. The points below come from newspaper reports of the same events, checked on 7 Nov 2026. Watch the videos yourself and tell us if anything is different.",
    videos: [
      {
        id: "OKf4wDOhMjM", checked: false,
        title: "गोरखपुर बनेगा नंबर-1: नगर निगम का महा-सफाई अभियान",
        en: "Gorakhpur will become No. 1: the Municipal Corporation's mega cleaning drive",
        channel: "Gorakhpur News",
        points: [
          { t: "On 4 June 2026, the day before World Environment Day (5 June), Mayor Dr. Mangalesh Srivastava picked up a broom himself and led a cleaning drive at Ramgarh Taal and Nauka Vihar, with Municipal Commissioner Ajay Jain.", src: "ETV Bharat, 4 Jun 2026" },
          { t: "At the same time the Nagar Nigam set a target of planting 5 lakh saplings in 15 days.", src: "ETV Bharat, 4 Jun 2026" },
          { t: "Under 'Swachhata Hi Seva 2026', the Nagar Nigam ran a 157-hour non-stop mega cleaning drive (महासफाई अभियान) in all slum areas from 25 September to 2 October 2026. The Mayor and the Municipal Commissioner flagged off its rally on 25 September.", src: "Amar Ujala, 26 Sep 2026" },
          { t: "The drive had a plan for each day: cleaning religious places ('Clean Green Festival'), a plastic boycott at tourist places on 27 September, 'Kabaad se Jugaad' and Reduce-Reuse-Recycle (RRR) centres on 28–29 September, 'Ek din, ek ghanta, ek saath' shramdaan on 1 October, and honouring safai mitras on 2 October (Swachh Bharat Diwas).", src: "Amar Ujala, 26 Sep 2026" },
          { t: "Why 'No. 1'? In July 2025 CM Yogi said Gorakhpur had climbed from 74th to 22nd and then 4th in the country in Swachh Survekshan, and it got a 5-star Garbage Free City rating and Water Plus status. Reports differ about its exact rank in its population group, so say “according to the Chief Minister” if you use the numbers.", src: "PTI (ThePrint Hindi), 23 Jul 2025" }
        ]
      },
      {
        id: "S_zLBq02-IU", checked: false,
        title: "CM Yogi ने Gorakhpur को दिया स्वच्छता का नया तोहफा, स्मार्ट सिटी की परिकल्पना!",
        en: "CM Yogi gives Gorakhpur a new cleanliness gift: the idea of a smart city",
        channel: "Bharat Samachar",
        points: [
          { t: "On 23 April 2026, at the Ekla embankment on the Rapti river, CM Yogi Adityanath inaugurated and laid the foundation stones of 497 projects worth ₹1,055 crore for Gorakhpur.", src: "PTI (ThePrint), 23 Apr 2026" },
          { t: "He opened an Eco Park at the city's entry point, built after the scientific disposal of 2.26 lakh metric tonnes of legacy (old, piled-up) waste. He said the Nagar Nigam had turned “garbage into gold” there.", src: "PTI (ThePrint), 23 Apr 2026" },
          { t: "He launched the 'Swachh School Abhiyan' to make Gorakhpur a seven-star garbage-free city. Over 1 lakh school children will take part in cleanliness awareness campaigns and competitions.", src: "PTI (ThePrint), 23 Apr 2026" },
          { t: "He also opened six smart roads built under the CM GRID scheme and flagged off municipal vehicles, including eco-friendly CNG vehicles.", src: "PTI (ThePrint), 23 Apr 2026" },
          { t: "His words: “Gorakhpur's transformation, from waste dumps to eco-parks, from waterlogging to modern drainage and from dark streets to LED illumination, reflects the power of intent and collective effort.”", src: "PTI (ThePrint), 23 Apr 2026" },
          { t: "Careful: 'smart city' in the title means modern, clean city services. We found no report that this event was part of the national Smart Cities Mission, so don't say that.", src: "Our check, 7 Nov 2026" }
        ]
      }
    ],
    context: [
      { t: "Gorakhpur makes about 506 tonnes of waste a day. The plan: about 200 tonnes of wet waste to a bio-CNG plant, and about 306 tonnes to the charcoal plant being built with NTPC at Suthani (Sahjanwa), which is planned for 500 tonnes a day and costs about ₹255 crore.", src: "ETV Bharat, 12 Jun 2026 (one source: say “reported”)" },
      { t: "The charcoal plant's start was delayed by technical problems in 2026. As of June 2026 it was still being built, and we found no news that it has started. So say it is “being set up”, not that it is working.", src: "ETV Bharat, 12 Jun 2026" }
    ],
    model: [
      "My five dustbins show segregation at source, the first step every city drive like Gorakhpur's depends on.",
      "My biogas plant works like the bio-CNG plant planned for Gorakhpur's wet waste: wet waste becomes gas and manure.",
      "My waste-to-energy machine shows the idea behind the charcoal plant being built at Suthani: waste that can't be recycled becomes fuel or energy.",
      "My 7Rs are what Gorakhpur's 'Kabaad se Jugaad' and RRR centres teach: reuse and recycle before you throw.",
      "Gorakhpur turned an old garbage dump into an Eco Park. In my model, clean land becomes parks and gardens too.",
      "The Swachh School Abhiyan wants 1 lakh children to help. I am one of those children: I teach my family to segregate waste."
    ],
    hindi: [
      "गोरखपुर नगर निगम ने 25 सितंबर से 2 अक्टूबर 2026 तक 157 घंटे का महासफाई अभियान चलाया।",
      "मुख्यमंत्री योगी जी ने 23 अप्रैल 2026 को 2.26 लाख मीट्रिक टन पुराने कूड़े को हटाकर बने इको पार्क का उद्घाटन किया।",
      "स्वच्छ स्कूल अभियान में एक लाख से अधिक बच्चे भाग लेंगे, ताकि गोरखपुर सात-सितारा कचरा-मुक्त शहर बने।"
    ],
    // added to ❓ Viva questions (topic "Ma'am's videos")
    viva: [
      { level: "easy", q: "What is Gorakhpur Nagar Nigam doing to become one of the cleanest cities in India?", points: ["Big cleaning drives, e.g. a 157-hour mega cleaning drive in all slum areas, 25 Sept – 2 Oct 2026", "Swachh School Abhiyan: over 1 lakh school children, aim of a seven-star garbage-free city", "Old garbage dump cleared (2.26 lakh tonnes of legacy waste) and turned into an Eco Park", "Planting drives, e.g. a target of 5 lakh saplings in 15 days from June 2026"], keywords: ["drive", "school", "eco park", "children", "legacy"], follow: "What is legacy waste?" },
      { level: "medium", q: "What is legacy waste, and what did Gorakhpur do with it?", points: ["Legacy waste = old waste piled up at dumps for many years", "Gorakhpur scientifically disposed of 2.26 lakh metric tonnes of it", "The land became an Eco Park at the city's entry point, opened by CM Yogi on 23 April 2026", "Lucknow did the same at Shivri by biomining old waste"], keywords: ["old", "dump", "eco park", "2.26"], follow: "Why is an old dump dangerous?" },
      { level: "easy", q: "What is the Swachh School Abhiyan?", points: ["Launched by CM Yogi in Gorakhpur on 23 April 2026", "Over 1 lakh school children take part in cleanliness awareness campaigns and competitions", "Aim: make Gorakhpur a seven-star garbage-free city"], keywords: ["school", "children", "lakh", "seven", "star"], follow: "What can you do as a student?" },
      { level: "medium", q: "What does a seven-star garbage-free city mean?", points: ["Garbage Free City (GFC) star rating of the Swachh Bharat Mission (Urban)", "More stars mean a cleaner city; seven stars is the highest rating", "Gorakhpur already has 5 stars (Swachh Survekshan 2024-25) and wants 7"], keywords: ["garbage free", "star", "highest", "5", "7"], follow: "What else did Gorakhpur get in Swachh Survekshan 2024-25?" },
      { level: "medium", q: "How did Gorakhpur do in Swachh Survekshan 2024-25?", points: ["5-star Garbage Free City rating", "Water Plus status", "Cleanest city in its category in Uttar Pradesh", "CM Yogi said it climbed from 74th to 22nd to 4th in the country (say “according to the Chief Minister”)"], keywords: ["5-star", "water plus", "74", "4th"], follow: "What is Water Plus?" },
      { level: "easy", q: "What was the 157-hour mega cleaning drive?", points: ["Gorakhpur Nagar Nigam, under Swachhata Hi Seva 2026", "25 September to 2 October 2026, non-stop in all slum areas", "Daily themes: religious places, plastic boycott at tourist places, Kabaad se Jugaad / RRR centres, 'Ek din, ek ghanta, ek saath' shramdaan", "Ended on 2 October (Swachh Bharat Diwas) by honouring safai mitras"], keywords: ["157", "slum", "september", "october", "swachhata hi seva"], follow: "What is 'Kabaad se Jugaad'?" },
      { level: "hard", q: "How much waste does Gorakhpur make every day, and where will it go?", points: ["About 506 tonnes a day (reported, June 2026)", "About 200 tonnes of wet waste for a bio-CNG plant", "About 306 tonnes for the charcoal plant being built with NTPC at Suthani (planned 500 tonnes a day)", "The charcoal plant was delayed in 2026 — say it is being set up, not working"], keywords: ["506", "bio-cng", "charcoal", "ntpc", "suthani"], follow: "How is your waste-to-energy machine similar?" },
      { level: "easy", q: "Why did Gorakhpur's Mayor lead a cleaning drive at Ramgarh Taal on 4 June 2026?", points: ["It was the day before World Environment Day (5 June)", "Ramgarh Taal is a big lake and a protected wetland", "Clean lakes mean clean water, fish and birds, and a healthy city", "A plan to plant 5 lakh saplings in 15 days began at the same time"], keywords: ["environment day", "lake", "wetland", "saplings"], follow: "Why must we keep garbage out of lakes?" },
      { level: "medium", q: "How does your model connect to what Gorakhpur is doing?", points: ["Dustbins: segregation at source, the first step of every city drive", "Biogas plant: like the bio-CNG plant planned for Gorakhpur's wet waste", "Waste-to-energy machine: the idea behind the charcoal plant at Suthani", "7Rs: like Gorakhpur's 'Kabaad se Jugaad' and RRR centres"], keywords: ["bins", "biogas", "energy", "7r", "recycle"], follow: "Which part of your model would help Gorakhpur most?" },
      { level: "medium", q: "In April 2026 CM Yogi spoke about Gorakhpur's change. What did he say?", points: ["“From waste dumps to eco-parks, from waterlogging to modern drainage, from dark streets to LED illumination”", "It shows the power of intent and collective effort", "He opened 497 projects worth ₹1,055 crore that day (23 April 2026)"], keywords: ["eco", "dumps", "drainage", "led"], follow: "What is your own small effort for a clean India?" }
    ],
    // added to ⚡ Rapid fire
    rapid: [
      ["Gorakhpur's 157-hour mega cleaning drive was from…?", "25 Sept to 2 Oct 2026"],
      ["How much legacy waste was cleared for Gorakhpur's Eco Park?", "2.26 lakh metric tonnes"],
      ["Gorakhpur's school cleanliness campaign is called?", "Swachh School Abhiyan"],
      ["Highest Garbage Free City star rating?", "7 stars"],
      ["Gorakhpur's Garbage Free City rating in 2024-25?", "5 stars"],
      ["Who built Gorakhpur's charcoal plant with the Nagar Nigam?", "NTPC (still being set up)"]
    ]
  };

  // Ma'am's video questions join the main viva list
  if (window.SITE && Array.isArray(window.SITE.viva)) {
    window.VIDEOS.viva.forEach(v => window.SITE.viva.push(Object.assign({ topic: "Ma'am's videos" }, v)));
  }

  function render(esc, store) {
    const V = window.VIDEOS, box = document.querySelector("#videosBody"); if (!box) return;
    const seen = store.get("videosSeen", {});
    box.innerHTML =
      '<div class="card"><h2>🎬 Ma\'am\'s videos</h2><p>' + esc(V.intro) + '</p><p class="small note-ask">⚠️ ' + esc(V.note) + "</p></div>" +
      V.videos.map((v, i) => '<div class="card"><h3>' + (i + 1) + ". <span lang=\"hi\">" + esc(v.title) + '</span></h3><p class="small muted">' + esc(v.en) + " · " + esc(v.channel) + "</p>" +
        '<div class="yt-wrap"><iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/' + v.id + '" title="' + esc(v.en) + '" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>' +
        '<p class="small"><a href="https://youtu.be/' + v.id + '" target="_blank" rel="noopener">Open in YouTube</a></p>' +
        "<h4>💡 What to know" + (v.checked ? "" : ' <span class="pill ask">from news reports</span>') + "</h4><ul>" +
        v.points.map(p => "<li>" + esc(p.t) + ' <span class="tiny muted">(' + esc(p.src) + ")</span></li>").join("") + "</ul>" +
        '<label class="small"><input type="checkbox" data-seen="' + v.id + '"' + (seen[v.id] ? " checked" : "") + "> I watched this video and read the points</label></div>").join("") +
      '<div class="card"><h3>🏙️ Gorakhpur\'s waste today</h3><ul>' + V.context.map(p => "<li>" + esc(p.t) + ' <span class="tiny muted">(' + esc(p.src) + ")</span></li>").join("") + "</ul></div>" +
      '<div class="card"><h3>🔗 Link it to my model</h3><p class="small muted">Judges love it when you connect their city\'s work to your model. Say one of these when a judge from Gorakhpur talks to you.</p><ul>' + V.model.map(m => "<li>" + esc(m) + "</li>").join("") + "</ul>" +
      '<h3>🇮🇳 हिंदी में</h3><ul lang="hi">' + V.hindi.map(h => "<li>" + esc(h) + "</li>").join("") + "</ul></div>" +
      '<div class="card"><h3>❓ Practise</h3><p>' + V.viva.length + ' questions from these videos are now in Viva questions (topic “Ma\'am\'s videos”), and ' + V.rapid.length + ' quick ones are in Rapid fire.</p><a class="btn" href="#viva">Practise the video questions →</a></div>';
    box.querySelectorAll("[data-seen]").forEach(c => c.onchange = () => { const s = store.get("videosSeen", {}); s[c.dataset.seen] = c.checked; store.set("videosSeen", s); });
  }
  window.Videos = { render };
})();
