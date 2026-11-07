/* =====================================================================
   CONTENT FILE — ALL THE WORDS ON THE WEBSITE LIVE HERE
   ---------------------------------------------------------------------
   Avni: this is the only file you need to edit to change what the
   website says. You do not need to touch app.js or styles.css.

   HOW TO EDIT SAFELY
   1. Every piece of text is inside "double quotes".
   2. Keep the comma , at the end of each line inside a list.
   3. If you need quotation marks INSIDE your text, use the curly
      ones “like this” or single quotes 'like this'.
   4. In "sample" lines you can use:
        *word*  -> shows the word in bold = STRESS this word
        /       -> shows a pause mark     = PAUSE here
   5. status can be "confirmed" (checked with Ma'am) or "ask"
      (still need to check with Rajnish Ma'am).
   6. After editing, save, commit and push. The website updates by
      itself in 1–2 minutes (see README.md).
   ===================================================================== */

window.SITE = {

  student: {
    name: "Avni Choudhary",
    className: "Class 6",
    school: "Sharda Sarvhitkari Senior Secondary School, Chandigarh",
    teacher: "Rajnish Ma'am",
    topic: "Clean India Mission and Waste Management",
    fairDate: "2026-11-27",          // next event (start day)
    achievements: ["🏆 First prize — Malerkotla level (October 2026)", "🏆 First prize — North Zone level, Delhi (October 2026)"],
    nextEvent: { name: "National level (Akhil Bharatiya)", place: "Gorakhpur", start: "2026-11-27", end: "2026-11-29", travel: "2026-11-25" },
    targetMinutes: 5,                // aim for the full model explanation
    // Eco-Dost Live: the real-AI version on claude.ai (open it while signed in to Claude)
    ecodostLiveUrl: "https://claude.ai/artifact/3DcE9JqKmTtXjhtSPppDRn"
  },

  quotes: [
    "The best waste / is the waste we *never* create.",
    "Turn waste into *energy*, / not pollution.",
    "Clean water is *precious* — / treat it, / reuse it, / protect it."
  ],

  /* ---------------- DAY-BY-DAY PLAN (date: YYYY-MM-DD) ---------------- */
  plan: [
    { date: "2026-11-01", go: "viva", label: "Sun 1 Nov", task: "Celebrate your Delhi first prize! 🎉 Then open ❓ Viva → 🏅 Asked by real judges and practise the 4 Delhi questions, especially “What is e-waste?”." },
    { date: "2026-11-03", go: "delhi", label: "Tue 3 Nov", task: "Read 🏙️ UP & Gorakhpur updates and tick the ⭐ top lines you can say. Judges may ask: “Tell me two schemes of Uttar Pradesh.”" },
    { date: "2026-11-06", go: "haze", label: "Fri 6 Nov", task: "Read 🌫️ Haze & clean air for UP and Gorakhpur. Learn one line about stubble burning and one about your biogas plant." },
    { date: "2026-11-07", go: "wastediary", label: "Sat 7 Nov", task: "Start your ⚖️ home waste diary today (Day 1): tonight, weigh the wet and the dry waste separately with an adult. Then one ⚡ Rapid fire round — just 1 minute." },
    { date: "2026-11-08", go: "wastediary", label: "Sun 8 Nov", task: "Happy Diwali! 🪔 Light day: just weigh today's waste for your diary (Day 2). Notice the smoke from crackers — it is a real example for your 🌫️ haze answer." },
    { date: "2026-11-09", go: "model", label: "Mon 9 Nov", task: "Check the model after the Delhi trip: repair anything loose and test all 4 demos. Measure it again (not bigger than 5 × 3 ft) and check that NO part uses thermocol. Waste diary Day 3." },
    { date: "2026-11-10", go: "ask", label: "Tue 10 Nov", task: "Take the open questions in 📝 Check with Ma'am to Rajnish Ma'am (the ladder, the digger field, the bins…). Also ask: may I stick 🏷️ QR stickers on my model? Waste diary Day 4." },
    { date: "2026-11-11", go: "videos", label: "Wed 11 Nov", task: "🎬 Ma'am's videos: watch both Gorakhpur videos, read the key points, and answer their 10 viva questions. Waste diary Day 5." },
    { date: "2026-11-12", go: "walk", label: "Thu 12 Nov", task: "Two full explanations with the timer, standing beside the model. Record one and check speed, filler words and volume. Waste diary Day 6." },
    { date: "2026-11-13", go: "wastediary", label: "Fri 13 Nov", task: "Waste diary Day 7 — done! Read your own line for the judges and practise saying it: real data from your own home." },
    { date: "2026-11-14", go: "practice", label: "Sat 14 Nov", task: "🏟️ Fair-day practice room: your full speech with the crowd on “Busy” and judge questions “Sometimes”. Then 2 🤔 What if questions." },
    { date: "2026-11-15", go: "hindi", label: "Sun 15 Nov", task: "🇮🇳 Hindi mode: listen to the whole Hindi speech, then explain three parts of your model in Hindi. National judges come from all over India." },
    { date: "2026-11-16", go: "practice", label: "Mon 16 Nov", task: "🗣️ Explain it 3 ways (at the bottom of the practice room): 3 parts, each for a 5-year-old, a classmate and a judge." },
    { date: "2026-11-17", go: "family", label: "Tue 17 Nov", task: "👨‍👩‍👧 Teach my family: teach the biogas plant and the water filter at home, and let them score you." },
    { date: "2026-11-18", go: "project", label: "Wed 18 Nov", task: "Write 2 fresh, neat copies of your 📝 synopsis with the list of parts. Ask Rajnish Ma'am for the eligibility and participation proformas." },
    { date: "2026-11-19", go: "numbers", label: "Thu 19 Nov", task: "🔢 Numbers master until you score 8/10. Then clear your 🩹 weak spots again." },
    { date: "2026-11-20", go: "stickers", label: "Fri 20 Nov", task: "If Ma'am said yes: print the 🏷️ QR stickers, stick them next to each part and scan every one with a phone. If not, do one more ⚡ Rapid fire round." },
    { date: "2026-11-21", go: "mock", label: "Sat 21 Nov", task: "🧑‍⚖️ Mock judge day, standing beside your real model with a family member watching. Note which judge head scored lowest." },
    { date: "2026-11-22", go: "trip", label: "Sun 22 Nov", task: "Start the 🧳 trip journey to Gorakhpur: pack, answer the quick questions and get the family check. Pack the model safely in its box." },
    { date: "2026-11-23", go: "weak", label: "Mon 23 Nov", task: "Practise your lowest head from the mock judging. Clear the last 🩹 weak spots. Check 🌫️ the air along your train route." },
    { date: "2026-11-24", go: "trip", label: "Tue 24 Nov", task: "Last check: every item packed and family-checked, phone and power bank charged, papers in one folder. Open this website once with internet so it works on the train. Light revision only. Sleep early." },
    { date: "2026-11-25", go: "trip", label: "Wed 25 Nov", task: "Travel day! 🚆 Go with your escorting teacher. Keep the model box upright and your papers and medicines in your school bag. Read a few 🏙️ UP lines on the way." },
    { date: "2026-11-26", go: "stage", label: "Thu 26 Nov", task: "Reach the fair by 5:00 pm. Rest, check the model after the journey and repair anything loose. Eat well and sleep early." },
    { date: "2026-11-27", go: "stage", label: "Fri 27 Nov", task: "National fair — day 1. Set up early, test every demo, warm-up, smile. Note any new questions the judges ask." },
    { date: "2026-11-28", go: "stage", label: "Sat 28 Nov", task: "Day 2. Same calm routine. Be friendly with other participants — learn from their models too." },
    { date: "2026-11-29", go: "stage", label: "Sun 29 Nov", task: "Day 3. Last day — give it your best and enjoy every moment! 🌟" }
  ],

  /* ---------------- 🧳 GORAKHPUR TRIP CHECKLIST ---------------- */
  trip: [
    { id: "box", group: "Model", item: "Strong box or carton for the model, with padding (old cloth, newspaper or bubble wrap); write your name and school on it" },
    { id: "loose", group: "Model", item: "Pack small loose parts (bins, buses, car, train, pots, windmill) in a separate labelled bag" },
    { id: "photo", group: "Model", item: "Photos of the full model from above, so you can rebuild it the same way" },
    { id: "bulbs", group: "Spares", item: "Spare bulbs/LEDs for the solar demo and the plastic-to-energy machine" },
    { id: "cells", group: "Spares", item: "Spare batteries/cells for the EV light and the machine bulb" },
    { id: "wires", group: "Spares", item: "Spare wires, insulation tape, glue, double-sided tape, scissors and a few pieces of cardboard" },
    { id: "lamp", group: "Spares", item: "A strong lamp for the solar demo — exhibition halls are often indoors. Test at home that it lights the bulb" },
    { id: "filter", group: "Filter demo", item: "Extra stones, charcoal and cotton; a bottle of muddy water or soil to make it; a tray, tissues and a small towel for spills" },
    { id: "file", group: "Papers", item: "Your project file (with the sticky-note corrections), printed project report and the QR card" },
    { id: "cue", group: "Papers", item: "Your cue card with headings and favourite thoughts" },
    { id: "power", group: "Power", item: "Extension board and phone charger/power bank (if the model or demos need power)" },
    { id: "self", group: "You", item: "Water bottle, light snacks, school ID card, comfortable shoes" },
    { id: "synopsis", group: "Fair rules (official)", item: "2 written copies of your synopsis, with the list of parts (Bal Varg must list the parts)" },
    { id: "consent", group: "Fair rules (official)", item: "Parent consent letter — needed at every level" },
    { id: "proforma", group: "Fair rules (official)", item: "Participation proforma signed by the Sankul/District/Vibhag, Prant and Kshetriya sanyojaks — ask your school" },
    { id: "elig", group: "Fair rules (official)", item: "Eligibility proforma from the Kshetra sanyojak: your name, class, school, date of birth and North Zone winner certificate" },
    { id: "arrive", group: "Fair rules (official)", item: "Reach the fair (Saraswati Shishu Mandir, Pakki Bagh, Gorakhpur) by 5:00 pm on 26 November 2026 (competitions start 27 November at 9:00 am; book the return only after 5:00 pm on 29 November)" },
    { id: "teacher", group: "Fair rules (official)", item: "Parents and helpers cannot attend the national fair: you will travel and stay with your escorting teacher. Save your teacher's phone number" },
    { id: "uniform", group: "Fair rules (official)", item: "School uniform — must be worn during the competition" },
    { id: "nothermo", group: "Fair rules (official)", item: "Check every part: NO thermocol in any form (strictly banned). Replace any with cardboard" },
    { id: "size", group: "Fair rules (official)", item: "Measure the model: not bigger than 5 ft × 3 ft (about 152 cm × 91 cm)" },
    { id: "charts", group: "Fair rules (official)", item: "Not more than 2 charts" },
    { id: "masks", group: "Health (haze season)", item: "2–3 close-fitting N95 masks, in case the air on the way or in Gorakhpur is Poor (ask your parents first). Cloth masks don't stop the tiny particles" },
    { id: "warm", group: "Health (haze season)", item: "Warm clothes: a sweater or jacket, socks and a cap — late-November mornings in eastern UP can be cold and foggy" },
    { id: "meds", group: "Health (haze season)", item: "Your own medicines (for example an asthma inhaler, if you use one), kept in your school bag" }
  ],



  /* ---------------- DUSTBIN COLOUR GUIDE (shown on the Five Dustbins card) ----------------
     status "verified" = checked in an official/news source; "confirm" = check with Ma'am */
  binGuide: [
    { color: "#15803d", text: "#fffbf3", name: "GREEN", stream: "Wet waste", examples: "Fruit & vegetable peels, leftover food, tea leaves, flowers", goesTo: "Compost / biogas", status: "verified" },
    { color: "#1d4ed8", text: "#fffbf3", name: "BLUE", stream: "Dry waste", examples: "Paper, cardboard, plastic, metal cans, glass bottles", goesTo: "Sorting centre → recycling", status: "verified" },
    { color: "#111827", text: "#fffbf3", name: "BLACK", stream: "Domestic hazardous (special care) waste", examples: "Dead batteries, bulbs & tube lights, broken glass, paint containers", goesTo: "Collected by authorised agencies", status: "confirm" },
    { color: "#b91c1c", text: "#fffbf3", name: "RED", stream: "Sanitary waste", examples: "Used sanitary pads & diapers (wrapped in paper); in Chandigarh also used masks, gloves & bandages", goesTo: "Separate safe disposal", status: "confirm" },
    { color: "#facc15", text: "#1f2937", name: "YELLOW", stream: "Biomedical waste (likely)", examples: "Soiled bandages & cotton, body waste from hospitals", goesTo: "Special treatment facility", status: "confirm" }
  ],
  binSystems: [
    { name: "Chandigarh Municipal Corporation (homes)", detail: "Green = wet · Blue = dry · Black = domestic hazardous · Red = sanitary (and, as per the 2026 draft bye-laws, home medical waste like used masks and bandages). Compulsory with fines since April 2026.", src: "Tribune, 2022 & 2026" },
    { name: "Solid Waste Management Rules, 2026 (all of India)", detail: "Four streams: Wet · Dry · Sanitary · Special care. For bins in public places the rules say GREEN = wet, BLUE = dry, and RED = sanitary (in public toilets). No colour is set for special care waste or for bins at home.", src: "SWM Rules 2026, Rule 39(51)" },
    { name: "Bio-Medical Waste Rules, 2016 (hospitals)", detail: "Yellow = infectious & body waste · Red = contaminated plastic · White = sharps · Blue = glass & metal implants", src: "BMW Rules 2016" }
  ],

  /* ---------------- VOICE COACH ---------------- */
  // Hard words to practise saying clearly. hint = how to say it.
  pronounce: [
    { word: "Swachh Bharat Abhiyan", hint: "SWUCH  BHAA-rut  uh-bhi-YAAN" },
    { word: "Rajagopalan Vasudevan", hint: "raa-jaa-GO-pa-lan  vaa-su-DAY-van" },
    { word: "biodegradable", hint: "by-oh-di-GRAY-duh-bul" },
    { word: "non-biodegradable", hint: "non  by-oh-di-GRAY-duh-bul" },
    { word: "segregation", hint: "seg-ri-GAY-shun" },
    { word: "anaerobic digestion", hint: "an-uh-ROH-bik  dy-JES-chun" },
    { word: "methane", hint: "MEE-thayn" },
    { word: "effluent treatment plant", hint: "EF-loo-unt  TREET-munt  plant" },
    { word: "photovoltaic", hint: "foh-toh-vol-TAY-ik" },
    { word: "renewable", hint: "ri-NEW-uh-bul" },
    { word: "microorganisms", hint: "my-kroh-OR-guh-ni-zums" },
    { word: "hydrogen fuel cell", hint: "HY-druh-jun  FEW-ul  sel" },
    { word: "carbon emission", hint: "KAR-bun  ih-MISH-un" },
    { word: "greenhouse gases", hint: "GREEN-house  GAS-iz" },
    { word: "chromium", hint: "KROH-mee-um" },
    { word: "filtration", hint: "fil-TRAY-shun" },
    { word: "sanitation", hint: "san-ih-TAY-shun" },
    { word: "Padma Shri", hint: "PUD-muh  SHREE" }
  ],
  // Guided confidence warm-up (spoken by the website)
  warmup: [
    { say: "Stand tall. Feet a little apart. Shoulders relaxed. Smile.", secs: 5 },
    { say: "Breathe in slowly through your nose. One. Two. Three. Four.", secs: 5, breathe: "in" },
    { say: "Hold. One. Two. Three. Four.", secs: 5, breathe: "hold" },
    { say: "Breathe out slowly through your mouth. One. Two. Three. Four.", secs: 5, breathe: "out" },
    { say: "Once more. Breathe in. One. Two. Three. Four.", secs: 5, breathe: "in" },
    { say: "Hold. One. Two. Three. Four.", secs: 5, breathe: "hold" },
    { say: "And breathe out. One. Two. Three. Four.", secs: 5, breathe: "out" },
    { say: "Now wake up your mouth. Repeat after me: Red lorry, yellow lorry.", secs: 6 },
    { say: "Wet waste, dry waste, wet waste, dry waste.", secs: 6 },
    { say: "Segregate, recycle, recover. Segregate, recycle, recover.", secs: 6 },
    { say: "Now say it with a smile: I know my model. I understand my project. I am ready.", secs: 7 },
    { say: "Great. Look at the judge, smile, and begin with: Jai Hind, Ma'am.", secs: 3 }
  ],
  // Reminders that flash in Mirror mode
  mirrorPrompts: [
    "👀 Look at the judge",
    "🙂 Smile naturally",
    "👉 Point to the model with an open hand",
    "👀 Now back to the judge",
    "🐢 Slow down",
    "⏸ Pause… then continue",
    "🧍 Stand straight, don't block the model",
    "🔊 Speak to the farthest person"
  ],
  fillers: ["um", "umm", "uh", "uhh", "hmm", "like", "basically", "actually", "you know", "matlab"],

  /* ---------------- PROJECT REPORT (📘 Project tab, printable, and the page judges see from the QR code) ----------------
     Avni: check every line matches YOUR real model, and change the pledge to your own words. */
  project: {
    title: "Clean India Mission and Waste Management",
    subtitle: "A Smart City and a Smart Village that keep India clean, healthy and green",
    aim: "To show how India can become cleaner and healthier through sanitation, separating waste at source, recycling, and clean energy — in both a Smart City and a Smart Village.",
    objectives: [
      "To understand the Clean India Mission (Swachh Bharat Abhiyan) and why toilets and sanitation matter.",
      "To learn how waste can be separated at source and turned into useful resources like compost, biogas and recycled material.",
      "To show clean-energy ideas — solar, wind, electric vehicles and a hydrogen train — that help reduce carbon emissions.",
      "To demonstrate simple water filtration and explain how factory wastewater should be treated.",
      "To encourage every student to follow the 7Rs: Refuse, Reduce, Reuse, Repair, Repurpose, Recycle, Recover."
    ],
    zones: {
      city: "Smart City (left side)",
      centre: "Centre / Park display (middle)",
      village: "Smart Village (right side)",
      front: "Demonstrations (front)"
    },
    demos: [
      "☀️ A real solar panel lights a bulb in sunlight.",
      "🔌 Pressing the EV-station button makes a green light glow to show charging.",
      "💧 Dirty water flows down through layers of stones, charcoal and cotton and comes out clearer (a first cleaning step — not drinking-safe).",
      "💡 The plastic-to-energy machine lights a bulb to show the idea of recovering energy from waste that cannot be recycled."
    ],
    materials: [
      "One large green wooden base (the whole model is on one level)",
      "Cardboard and paper — buildings, two handmade solar panels, hut",
      "One real solar panel with a bulb/LED",
      "EV charging station with a toy car, a button and a green light",
      "Two model electric buses, and a hydrogen train on a railway track",
      "Stones, charcoal and cotton in layers in a container (water filter)",
      "Handmade plastic-to-energy machine with a bulb",
      "One windmill, two flower pots, five coloured dustbins",
      "An eco-friendly Ganesha made with clay and daals (pulses)"
    ],
    learned: [
      "Waste becomes a resource when we separate it at source; mixed waste becomes garbage.",
      "Wet waste can become compost or biogas, and many kinds of dry waste can be recycled.",
      "Using toilets protects our health and our water — sanitation is a big part of Clean India.",
      "Solar, wind, electric vehicles and hydrogen trains reduce smoke and carbon emissions, but their full benefit depends on how the electricity or hydrogen is produced.",
      "Clear-looking water is not always safe to drink.",
      "Plastic must never be burnt in the open — refusing and reducing plastic is the best solution."
    ],
    // Avni: rewrite this in your own words!
    pledge: "I will separate wet and dry waste at home and in school, carry a cloth bag and my own water bottle, and never litter. Small steps can make a big difference.",
    thanks: [
      "Rajnish Ma'am, my science teacher, for her guidance",
      "Sharda Sarvhitkari Senior Secondary School, Chandigarh"
    ],
    // For each part of the model: the science concept, and how it links to Clean India / waste management.
    // visitor = one simple line shown to judges who scan the QR code.
    // 📝 Written synopsis — the rules ask for 2 copies (content, principle, procedure/working, list of parts)
    synopsis: {
      category: "Model Exhibition · Bal Varg (Classes 6–8) · Model topic: Model based on Clean India Mission and Waste Management",
      content: [
        "My model shows a Smart City (left), a Centre / Park display (middle) and a Smart Village (right) on one base, with demonstrations at the front.",
        "It is a model with working demonstrations: a solar panel lights a bulb, an EV charging light glows, dirty water is filtered, and a plastic-to-energy machine lights a bulb.",
        "It explains the Clean India Mission (Swachh Bharat Abhiyan): toilets and sanitation, separating waste at source, the 7Rs, turning waste into resources, clean water and clean energy."
      ],
      principle: [
        "Segregation at source: when wet, dry, sanitary and hazardous waste are kept separate, each can be treated properly — wet waste becomes compost or biogas, and dry waste can be recycled.",
        "Sanitation: toilets for everyone stop open defecation and keep germs away from our water and food.",
        "Anaerobic digestion: in a closed tank without oxygen, microbes break down dung and kitchen waste into biogas (mainly methane, about 50–70%, plus carbon dioxide) and slurry manure.",
        "Filtration: water passes from coarse to fine layers — stones and gravel → charcoal → cotton — which hold back particles; charcoal also traps some chemicals and smells. Filtered water is clearer but not safe to drink without more treatment.",
        "Clean energy: solar cells change sunlight into electricity; a windmill uses moving air to make electricity; a hydrogen fuel cell joins hydrogen and oxygen to make electricity, and gives out water vapour instead of smoke.",
        "Waste-to-energy (Recover): only waste that cannot be recycled is burnt in special plants with pollution control; the heat makes steam, which turns a turbine and generator.",
        "The 7Rs: Refuse, Reduce, Reuse, Repair, Repurpose, Recycle, Recover — the best waste is the waste we never create."
      ],
      working: [
        "Smart City: toilets, solar panels on three buildings (a real panel lights a bulb), an EV charging station (press the button — a green light shows charging) and an electric bus stand.",
        "Transport: a hydrogen train, like India's first hydrogen train on the Jind–Sonipat route in Haryana.",
        "Centre: the India map with “Carbon Emission”, a windmill, two flower pots in the park, and the Plastic Man of India, who showed how waste plastic can be used in roads.",
        "Dustbins: five colour-coded dustbins show segregation of waste at source.",
        "Smart Village: a handmade hut, a village toilet and a biogas plant that turns dung and kitchen waste into cooking gas and manure.",
        "Water: the sugar and leather industry shows that factory wastewater must be treated in an Effluent Treatment Plant (ETP). In the demonstration filter, dirty water flows through stones and gravel, charcoal and cotton and comes out clearer.",
        "Energy from waste: the plastic-to-energy machine lights a bulb to show energy recovered from waste that cannot be recycled.",
        "Eco-friendly Ganesha: made with clay and daals instead of Plaster of Paris, so our festivals can keep rivers clean too."
      ],
      usefulness: [
        "Shows how every home, school and village can keep India clean by separating waste and following the 7Rs.",
        "Shows that waste can become a resource — compost, biogas, recycled material and energy.",
        "Shows clean-energy and clean-water ideas that reduce pollution and carbon emissions."
      ]
    },
    parts: {
      solar:        { concept: "Solar (photovoltaic) energy — sunlight → electricity", link: "Less coal burnt for electricity → cleaner air, fewer greenhouse gases", visitor: "Two buildings have handmade solar panels; the third has a real panel that lights a bulb in sunlight." },
      citytoilets:  { concept: "Sanitation and hygiene", link: "Toilets for everyone — a main goal of Swachh Bharat Mission", visitor: "Toilets keep germs away from our water and food." },
      ev:           { concept: "Battery + electric motor — no tailpipe exhaust", link: "Cleaner air on city roads", visitor: "Press the button — the green light shows the car is charging." },
      bus:          { concept: "Electric public transport", link: "One bus carries many people → fewer vehicles, less smoke and noise", visitor: "Two electric buses at a bus stand." },
      train:        { concept: "Hydrogen fuel cell — hydrogen + oxygen → electricity + water", link: "Main onboard by-product is water vapour instead of diesel smoke", visitor: "India's first hydrogen train was flagged off on the Jind–Sonipat route in Haryana in July 2026." },
      india:        { concept: "Carbon emissions and global warming", link: "Many parts of the model show ways to reduce carbon emissions", visitor: "India at the centre — protecting our country from pollution and global warming." },
      ladder:       { concept: "", link: "", visitor: "Ask me about this part at my stall!" },
      windmill:     { concept: "Wind energy — moving air → electricity", link: "Renewable; no smoke while running", visitor: "The windmill shows wind energy." },
      pots:         { concept: "Photosynthesis — plants take in carbon dioxide", link: "Green spaces make cities healthier", visitor: "Two flower pots in the central park." },
      plasticman:   { concept: "Reusing waste plastic in road building", link: "Plastic that is hard to recycle becomes part of a road", visitor: "Professor Rajagopalan Vasudevan, the Plastic Man of India, received the Padma Shri in 2018 for using waste plastic in roads." },
      bins:         { concept: "Waste segregation at source", link: "Separated waste becomes a resource; mixed waste becomes garbage", visitor: "Five colour-coded dustbins for separating waste where it is made." },
      hut:          { concept: "A smart village uses local resources", link: "Clean, healthy villages are part of Clean India", visitor: "A handmade village home." },
      digger:       { concept: "", link: "", visitor: "Ask me about this part at my stall!" },
      villagetoilet:{ concept: "Rural sanitation", link: "Swachh Bharat Mission (Grameen) — toilets in every village", visitor: "Villages need toilets too." },
      biogas:       { concept: "Anaerobic digestion → biogas (mostly methane)", link: "Turns dung and kitchen waste into cooking gas and manure", visitor: "Turn waste into energy, not pollution." },
      factory:      { concept: "Industrial wastewater and Effluent Treatment Plants (ETP)", link: "Factory water must be treated before it reaches rivers", visitor: "Sugar and leather industries release dirty water that must be treated." },
      filter:       { concept: "Filtration — separating particles from water", link: "A first cleaning step; clear water is not always safe water", visitor: "Dirty water flows down through layers of stones, charcoal and cotton and comes out clearer." },
      wte:          { concept: "Waste-to-energy — heat → steam → turbine → generator", link: "Only for waste that cannot be recycled, in special plants with pollution control — never open burning", visitor: "The bulb glows to show energy recovered from waste." },
      ganesha:      { concept: "Eco-friendly festivals — clay instead of Plaster of Paris", link: "Clean rivers and ponds: no PoP or chemical paints in the water", visitor: "An eco-friendly Ganesha made with clay and daals." }
    }
  },

  /* ---------------- 💭 THOUGHTS / विचार ----------------
     Positive lines in English and Hindi.
     use:   opening | bridge (between parts) | stuck (if I forget) | closing | anytime
     topic: clean-india | waste | plastic | water | energy | sanitation | nature | duty | 7rs
     kind:  avni (Avni's own) | original | official-slogan | quote (with attribution + source)
     Avni: add your own new thoughts here with kind: "avni"! */
  thoughts: [
    { id: "a1", kind: "avni", topic: "7rs", use: ["anytime", "closing"],
      en: "The best waste is the waste we never create.",
      hi: "सबसे अच्छा कचरा वह है, जो हम कभी बनाते ही नहीं।", hiRoman: "Sabse achchha kachra vah hai, jo hum kabhi banaate hi nahin." },
    { id: "a2", kind: "avni", topic: "clean-india", use: ["opening", "closing"],
      en: "A clean India starts with a clean thought, grows through a responsible action, and shines through a waste-free tomorrow.",
      hi: "स्वच्छ भारत एक स्वच्छ सोच से शुरू होता है, ज़िम्मेदार काम से आगे बढ़ता है, और कचरा-मुक्त कल में चमकता है।", hiRoman: "Swachh Bharat ek swachh soch se shuru hota hai, zimmedaar kaam se aage badhta hai, aur kachra-mukt kal mein chamakta hai." },
    { id: "a3", kind: "avni", topic: "duty", use: ["closing"],
      en: "A clean India is not just a dream; it is a responsibility we share.",
      hi: "स्वच्छ भारत सिर्फ़ एक सपना नहीं, यह हम सबकी ज़िम्मेदारी है।", hiRoman: "Swachh Bharat sirf ek sapna nahin, yah hum sabki zimmedaari hai." },
    { id: "a4", kind: "avni", topic: "clean-india", use: ["anytime"],
      en: "Cleanliness is not a job we do because we are forced to. It is a good habit and a healthy way of life.",
      hi: "स्वच्छता कोई मजबूरी का काम नहीं, यह एक अच्छी आदत और जीने का स्वस्थ तरीका है।", hiRoman: "Swachhata koi majboori ka kaam nahin, yah ek achchhi aadat aur jeene ka swasth tareeka hai." },
    { id: "a5", kind: "avni", topic: "energy", use: ["bridge", "anytime"],
      en: "Turn waste into energy, not pollution.",
      hi: "कचरे को प्रदूषण नहीं, ऊर्जा बनाइए।", hiRoman: "Kachre ko pradooshan nahin, oorja banaiye." },
    { id: "a6", kind: "avni", topic: "water", use: ["bridge", "anytime"],
      en: "Clean water is precious — treat it, reuse it, protect it.",
      hi: "पानी अनमोल है — इसे साफ़ करें, दोबारा इस्तेमाल करें, और बचाएँ।", hiRoman: "Paani anmol hai — ise saaf karein, dobaara istemaal karein, aur bachaayein." },
    { id: "a7", kind: "avni", topic: "clean-india", use: ["anytime", "closing"],
      en: "Cleanliness should not be only for 2nd October — it should be an everyday habit.",
      hi: "स्वच्छता सिर्फ़ 2 अक्टूबर के लिए नहीं, यह हर दिन की आदत होनी चाहिए।", hiRoman: "Swachhata sirf do October ke liye nahin, yah har din ki aadat honi chahiye.",
      note: "A gentler stage version of the “October 2nd” line in your project file." },
    { id: "l01", kind: "original", topic: "clean-india", use: ["stuck"],
      en: "Let me show you how this works in my model.",
      hi: "आइए, मैं आपको अपने मॉडल में दिखाती हूँ कि यह कैसे काम करता है।", hiRoman: "Aaiye, main aapko apne model mein dikhaati hoon ki yah kaise kaam karta hai.",
      hiMeaning: "Come, let me show you in my model how this works.",
      note: "Use this when your model is beside you and you forget your next sentence. Stand next to the model, point with an open hand to the part nearest you and explain it, keeping your face towards the audience. The model is your map, and pointing at it will bring back your words." },
    { id: "l02", kind: "original", topic: "waste", use: ["stuck"],
      en: "The most important thing I learned is this: separated waste is a resource; mixed waste is garbage.",
      hi: "मैंने सबसे ज़रूरी बात यह सीखी — अलग किया हुआ कचरा संसाधन है, मिला-जुला कचरा बस बेकार का ढेर।", hiRoman: "Maine sabse zaroori baat yah seekhi — alag kiya hua kachra sansaadhan hai, mila-jula kachra bas bekaar ka dher.",
      hiMeaning: "The most important thing I learned is this: separated waste is a resource; mixed waste is just a useless heap.",
      note: "Use this if you go blank in the waste-management or Five Dustbins part. After saying it, point to the bins and name them one by one (green = wet, blue = dry ...). That gets you back on track." },
    { id: "l03", kind: "original", topic: "waste", use: ["stuck"],
      en: "Think for a moment: how much waste left our homes today?",
      hi: "एक पल सोचिए — आज हमारे घरों से कितना कचरा निकला होगा?", hiRoman: "Ek pal sochiye — aaj hamaare gharon se kitna kachra nikla hoga?",
      hiMeaning: "Think for a moment: how much waste must have come out of our homes today?",
      note: "Use this when you need a few seconds to remember what comes next. Ask it slowly and look around the hall. Then stay quiet for 2–3 seconds while the audience thinks, and use that pause to recall your next heading. It looks planned, not forgotten. If your next point still doesn't come, say 'Much of it can become useful, if we separate it' and talk about the bins." },
    { id: "l04", kind: "original", topic: "duty", use: ["stuck"],
      en: "The numbers are big, but the message is simple: small steps can make a big difference.",
      hi: "आँकड़े बड़े हैं, पर संदेश सीधा है — छोटे-छोटे कदम, बड़ा बदलाव।", hiRoman: "Aankde bade hain, par sandesh seedha hai — chhote-chhote kadam, bada badlaav.",
      hiMeaning: "The figures are big, but the message is simple: small steps, big change.",
      note: "Use this if you forget a number in the middle of a sentence, such as 63 lakh toilets, 5.7 lakh villages or 300 gigawatts. Skip the number calmly with this line and go straight to your next point. It also repeats the 'small steps' idea from your opening." },
    { id: "l05", kind: "original", topic: "clean-india", use: ["stuck", "bridge"],
      en: "Look closely at my model: every part tells one story — less waste, cleaner air, cleaner water.",
      hi: "मेरे मॉडल को ध्यान से देखिए — हर हिस्सा एक ही कहानी कहता है: कम कचरा, साफ़ हवा, साफ़ पानी।", hiRoman: "Mere model ko dhyaan se dekhiye — har hissa ek hi kahaani kehta hai: kam kachra, saaf hawa, saaf paani.",
      hiMeaning: "Look closely at my model: every part tells the same story — less waste, clean air, clean water.",
      note: "Use this when your model is on stage: if your mind goes completely blank, or when you move from the speech to the model. Sweep your open hand once across the whole model, keeping your face to the audience. Then pick one part (waste, air or water) and explain that part." },
    { id: "l06", kind: "original", topic: "clean-india", use: ["stuck"],
      en: "Let me explain this in a simpler way.",
      hi: "मैं इसे और आसान शब्दों में समझाती हूँ।", hiRoman: "Main ise aur aasaan shabdon mein samjhaati hoon.",
      hiMeaning: "Let me explain this in easier words.",
      note: "Use this when you lose a long or technical sentence, such as turbine, anaerobic digestion, ODF Plus or effluent treatment plant. Then say the same idea in everyday words, for example 'tiny microbes turn kitchen waste and dung into gas for cooking'. Judges like this." },
    { id: "l07", kind: "original", topic: "plastic", use: ["stuck"],
      en: "Here is an everyday example: one cloth bag, used again and again, can replace many plastic bags.",
      hi: "रोज़ की ज़िंदगी का एक उदाहरण — बार-बार इस्तेमाल होने वाला एक कपड़े का थैला कई प्लास्टिक थैलियों की जगह ले सकता है।", hiRoman: "Roz ki zindagi ka ek udaaharan — baar-baar istemaal hone waala ek kapde ka thaila kai plastic thailiyon ki jagah le sakta hai.",
      hiMeaning: "An example from daily life: a cloth bag that is used again and again can take the place of many plastic bags.",
      note: "Use this if you get stuck in the plastic or 7Rs part. Hold up an imaginary bag while you say it. Then go on to 'Refuse, Reduce, Reuse...' or to the Plastic Man of India." },
    { id: "l08", kind: "original", topic: "clean-india", use: ["stuck", "bridge"],
      en: "Let me quickly go over what we have seen so far.",
      hi: "चलिए, एक बार जल्दी से दोहरा लें कि अब तक हमने क्या-क्या देखा।", hiRoman: "Chaliye, ek baar jaldi se dohra lein ki ab tak humne kya-kya dekha.",
      hiMeaning: "Come, let's quickly go over everything we have seen so far.",
      note: "Use this when you lose your place in the middle of the speech. Then say the headings you have already finished, in order (Clean India Mission, waste segregation, plastic, the 7Rs ...). Saying them will lead you to the next one, and you can continue from there." },
    { id: "l09", kind: "original", topic: "duty", use: ["stuck", "bridge"],
      en: "This brings me to the most important part: what each of us can do every day.",
      hi: "अब मैं सबसे ज़रूरी बात पर आती हूँ — हममें से हर कोई रोज़ क्या कर सकता है।", hiRoman: "Ab main sabse zaroori baat par aati hoon — hum mein se har koi roz kya kar sakta hai.",
      hiMeaning: "Now I come to the most important point: what each one of us can do every day.",
      note: "Your emergency exit. If you are badly stuck, or the time bell rings, say this and jump straight to 'Our duties & conclusion'. This line already asks the question, so skip 'So, what can we do?' and go straight to 'Stop littering. Segregate waste... Say no to single-use plastic...', then finish strongly with your final quote." },
    { id: "l10", kind: "original", topic: "clean-india", use: ["bridge"],
      en: "Let us begin with a mission that belongs to all of us — the Clean India Mission.",
      hi: "आइए, एक ऐसे अभियान से शुरुआत करें, जो हम सबका है — स्वच्छ भारत अभियान।", hiRoman: "Aaiye, ek aise abhiyaan se shuruaat karein, jo hum sabka hai — Swachh Bharat Abhiyaan.",
      hiMeaning: "Let us begin with a campaign that belongs to all of us: the Swachh Bharat Abhiyan.",
      note: "Bridge from the Opening to the Clean India Mission. Say it after '...small steps can make a big difference.' Because you have already named the mission, begin your next sentence with 'It was launched on 2 October 2014...' so you don't introduce it twice." },
    { id: "l11", kind: "original", topic: "sanitation", use: ["bridge"],
      en: "Toilets were the first step; managing the waste we make every day is the next.",
      hi: "शौचालय बनाना पहला कदम था; अगला कदम है — रोज़ के कचरे को सही ढंग से सँभालना।", hiRoman: "Shauchaalay banaana pehla kadam tha; agla kadam hai — roz ke kachre ko sahi dhang se sambhaalna.",
      hiMeaning: "Building toilets was the first step; the next step is handling everyday waste the right way.",
      note: "Bridge from the Clean India Mission to Waste management. Say it after the ODF Plus line ('...manage their garbage and dirty water') and before 'Waste management means separating waste where it is made...'." },
    { id: "l12", kind: "original", topic: "plastic", use: ["bridge"],
      en: "Of all the dry waste we make, one material needs special care — plastic.",
      hi: "सूखे कचरे में एक चीज़ पर ख़ास ध्यान देना ज़रूरी है — प्लास्टिक।", hiRoman: "Sookhe kachre mein ek cheez par khaas dhyaan dena zaroori hai — plastic.",
      hiMeaning: "In dry waste, one thing needs special attention: plastic.",
      note: "Bridge from Waste management to Plastic. Say it after 'Separated waste becomes a resource.' Pause briefly before the word 'plastic', then begin 'Single-use plastics, like carry bags, straws and wrappers...'." },
    { id: "l13", kind: "original", topic: "7rs", use: ["bridge"],
      en: "The Plastic Man found a new use for waste plastic. The 7Rs give us seven more ideas.",
      hi: "प्लास्टिक मैन ने बेकार प्लास्टिक का नया उपयोग खोजा; 7R हमें सात और रास्ते दिखाते हैं।", hiRoman: "Plastic Man ne bekaar plastic ka naya upyog khoja; saat R hamein saat aur raaste dikhaate hain.",
      hiMeaning: "The Plastic Man found a new use for waste plastic; the 7Rs show us seven more ways.",
      note: "Bridge from Plastic and the Plastic Man to the 7Rs. Say it after '...He received the Padma Shri in 2018.' Then go into 'We often hear about the 3Rs...' and get ready to count the 7Rs on your fingers." },
    { id: "l14", kind: "original", topic: "7rs", use: ["bridge"],
      en: "And the last R, Recover, takes me to my next idea: getting energy from waste.",
      hi: "आख़िरी R, यानी रिकवर, हमें अगली बात तक ले जाता है — कचरे से ऊर्जा।", hiRoman: "Aakhiri R, yaani Recover, hamein agli baat tak le jaata hai — kachre se oorja.",
      hiMeaning: "The last R, that is Recover, takes us to the next point: energy from waste.",
      note: "Bridge from the 7Rs to Waste to energy. After 'the best waste is the waste we never create', pause for 2 seconds, then say this line. Point to the biogas plant or the plastic-to-energy machine, and continue 'Waste that cannot be recycled can still give us energy.'" },
    { id: "l15", kind: "original", topic: "energy", use: ["bridge"],
      en: "Energy from waste is one answer; energy from the sun and the wind is another.",
      hi: "कचरे से ऊर्जा एक रास्ता है; सूरज और हवा से ऊर्जा दूसरा।", hiRoman: "Kachre se oorja ek raasta hai; sooraj aur hawa se oorja doosra.",
      hiMeaning: "Energy from waste is one way; energy from the sun and wind is another.",
      note: "Bridge from Waste to energy to Green energy. Say it after 'we must never burn plastic in the open.' Move your hand from the plastic-to-energy machine to the solar panel and windmill, then continue 'A clean India also needs clean air...'." },
    { id: "l16", kind: "original", topic: "water", use: ["bridge"],
      en: "Clean energy helps keep our air clean. Now let's see how we can keep our water clean.",
      hi: "स्वच्छ ऊर्जा हवा को साफ़ रखने में मदद करती है; अब देखते हैं कि पानी को साफ़ कैसे रखें।", hiRoman: "Swachh oorja hawa ko saaf rakhne mein madad karti hai; ab dekhte hain ki paani ko saaf kaise rakhein.",
      hiMeaning: "Clean energy helps keep the air clean; now let's see how to keep water clean.",
      note: "Bridge from Green energy and the hydrogen train to Clean water. Say it after '...its main by-product is water vapour.' Then step towards the factory and water filter and begin 'Clean water is precious...'." },
    { id: "l17", kind: "original", topic: "duty", use: ["bridge"],
      en: "Science gives us many solutions, but real change comes when each of us joins in.",
      hi: "विज्ञान हमें कई हल देता है, पर असली बदलाव तब आता है, जब हम सब मिलकर आगे आते हैं।", hiRoman: "Vigyaan hamein kai hal deta hai, par asli badlaav tab aata hai, jab hum sab milkar aage aate hain.",
      hiMeaning: "Science gives us many solutions, but real change comes when we all come forward together.",
      note: "Bridge from Clean water to Our duties and the conclusion. Say it after '...it should go into special collection bins.' Take one small step forward, then ask 'So, what can we do?'" },
    { id: "e01", kind: "original", topic: "waste", use: ["opening", "bridge"],
      en: "Every piece of waste has a story, and together we can give it a happy ending.",
      hi: "कचरे के हर टुकड़े की अपनी एक कहानी होती है, और हम मिलकर उसे सुखद अंत दे सकते हैं।", hiRoman: "Kachre ke har tukde ki apni ek kahaani hoti hai, aur hum milkar use sukhad ant de sakte hain.",
      hiMeaning: "Every piece of waste has its own story, and together we can give it a happy ending.",
      note: "A hook to open with after introducing the topic. It also works as a link into the dustbins or the plastic-to-energy machine. A 'happy ending' means compost, biogas, reuse or recycling instead of a garbage dump." },
    { id: "e02", kind: "original", topic: "clean-india", use: ["opening", "closing"],
      en: "A clean India is born in our hearts, built by our hands, and kept alive by our habits.",
      hi: "स्वच्छ भारत दिल में जन्म लेता है, हाथों से बनता है और अच्छी आदतों से टिकता है।", hiRoman: "Swachh Bharat dil mein janm leta hai, haathon se banta hai aur achchhi aadaton se tikta hai.",
      hiMeaning: "A clean India is born in the heart, is built by hands, and lasts through good habits.",
      note: "Touch your heart on 'hearts', show your hands on 'hands', then pause before 'habits'. Works as a strong first or last line." },
    { id: "e03", kind: "original", topic: "clean-india", use: ["stuck", "bridge"],
      en: "Just as every part of my model works together, all of us together can keep India clean.",
      hi: "जैसे मेरे मॉडल का हर हिस्सा मिलकर काम करता है, वैसे ही हम सब मिलकर भारत को स्वच्छ रख सकते हैं।", hiRoman: "Jaise mere model ka har hissa milkar kaam karta hai, vaise hi hum sab milkar Bharat ko swachh rakh sakte hain.",
      hiMeaning: "Just as every part of my model works together, in the same way all of us together can keep India clean.",
      note: "A safe line if you lose your place. Sweep your hand across the whole model (Smart City, India map, Smart Village) while you say it, then go on with the next part." },
    { id: "e04", kind: "original", topic: "waste", use: ["bridge", "anytime"],
      en: "Mix waste and it becomes a burden; sort it and it becomes a resource.",
      hi: "कचरा मिलाओ तो बोझ बने, अलग करो तो ख़ज़ाना बने।", hiRoman: "Kachra milaao to bojh bane, alag karo to khazaana bane.",
      hiMeaning: "Mix the waste and it becomes a burden; separate it and it becomes a treasure.",
      note: "Say this just before explaining the five dustbins. Point to the bins on 'sort it'. Separated waste can be composted or recycled." },
    { id: "e05", kind: "original", topic: "waste", use: ["bridge", "anytime"],
      en: "Kitchen peels today, rich compost tomorrow.",
      hi: "आज के छिलके, कल की खाद।", hiRoman: "Aaj ke chhilke, kal ki khaad.",
      hiMeaning: "Today's peels, tomorrow's manure.",
      note: "Use it at the wet-waste (green) bin. 'Tomorrow' is figurative, because composting really takes a few weeks to a few months." },
    { id: "e06", kind: "original", topic: "energy", use: ["bridge"],
      en: "Wet waste can give us biogas for the stove and manure for the fields.",
      hi: "गीले कचरे से मिलती है चूल्हे के लिए बायोगैस और खेतों के लिए खाद।", hiRoman: "Geele kachre se milti hai choolhe ke liye biogas aur kheton ke liye khaad.",
      hiMeaning: "From wet waste we get biogas for the stove and manure for the fields.",
      note: "Link to the Smart Village biogas plant. The gas is used for cooking, and the slurry left over after making the gas is used as manure, so both parts of the line are true." },
    { id: "e07", kind: "original", topic: "plastic", use: ["closing", "anytime"],
      en: "Leave the plastic bag behind; carry a cloth bag with pride.",
      hi: "प्लास्टिक की थैली छोड़ो, कपड़े के थैले से नाता जोड़ो।", hiRoman: "Plastic ki thaili chhodo, kapde ke thaile se naata jodo.",
      hiMeaning: "Give up the plastic bag; build a bond with the cloth bag.",
      note: "A rhyming Hindi slogan. If you have a cloth bag, hold it up while you say it." },
    { id: "e08", kind: "original", topic: "plastic", use: ["bridge"],
      en: "One teacher showed how plastic waste can help build roads. Imagine what we can do together!",
      hi: "एक शिक्षक ने दिखाया कि प्लास्टिक कचरा सड़कें बनाने में काम आ सकता है। सोचिए, हम सब मिलकर क्या-क्या कर सकते हैं!", hiRoman: "Ek shikshak ne dikhaaya ki plastic kachra sadkein banaane mein kaam aa sakta hai. Sochiye, hum sab milkar kya-kya kar sakte hain!",
      hiMeaning: "One teacher showed that plastic waste can be useful in building roads. Just think how much we can all do together!",
      note: "Use it to introduce the 'Plastic Man of India', Prof. Rajagopalan Vasudevan, a chemistry professor from Madurai. Shredded plastic is melted onto hot stones and then mixed with bitumen, so plastic is only a small part of the road mix. The road is not made only of plastic." },
    { id: "e09", kind: "original", topic: "plastic", use: ["bridge"],
      en: "Plastic that can't be recycled can still be recovered as energy, but refusing it is even better.",
      hi: "जो प्लास्टिक रीसाइकिल न हो सके, उससे ऊर्जा ली जा सकती है, पर उसे पहले ही 'ना' कहना और भी अच्छा है।", hiRoman: "Jo plastic recycle na ho sake, usse oorja li ja sakti hai, par use pehle hi 'na' kehna aur bhi achchha hai.",
      hiMeaning: "Energy can be obtained from plastic that cannot be recycled, but saying 'no' to it in the first place is even better.",
      note: "A link into the plastic-to-energy machine. It keeps the 7Rs order: Recover is the LAST R and needs special controlled plants with pollution control. Do not call it 'burning plastic'." },
    { id: "e10", kind: "original", topic: "water", use: ["bridge"],
      en: "Layer by layer, water becomes clearer; step by step, our world becomes better.",
      hi: "परत-दर-परत पानी निखरे, कदम-दर-कदम दुनिया सँवरे।", hiRoman: "Parat-dar-parat paani nikhre, kadam-dar-kadam duniya sanvre.",
      hiMeaning: "Layer by layer the water becomes clearer; step by step the world becomes better.",
      note: "Point down the filter layer by layer: stones first, then charcoal, then cotton. Say 'clearer', not 'safe to drink', because filtered water still needs boiling or purifying before drinking." },
    { id: "e11", kind: "original", topic: "water", use: ["closing", "anytime"],
      en: "Every drop we save today can quench someone's thirst tomorrow.",
      hi: "आज बचाई गई हर बूँद कल किसी की प्यास बुझा सकती है।", hiRoman: "Aaj bachaai gayi har boond kal kisi ki pyaas bujha sakti hai.",
      hiMeaning: "Every drop saved today can quench someone's thirst tomorrow.",
      note: "Use it after the water filter or as a closing thought. Simple tips to add: turn off the tap while brushing, and reuse RO waste water for mopping or flushing." },
    { id: "e12", kind: "original", topic: "energy", use: ["bridge"],
      en: "The sun shares its light with everyone; let's use it to power our homes.",
      hi: "सूरज सबको रोशनी देता है, आओ उसी से अपने घर रोशन करें।", hiRoman: "Sooraj sabko roshni deta hai, aao usi se apne ghar roshan karein.",
      hiMeaning: "The sun gives light to everyone; come, let us light up our homes with it.",
      note: "Point to the solar panels in the Smart City. It is a good way to move from the waste part to the clean energy part." },
    { id: "e13", kind: "original", topic: "energy", use: ["bridge"],
      en: "Sun on our rooftops, hydrogen on our tracks: clean energy can carry India forward.",
      hi: "छत पर सूरज, पटरी पर हाइड्रोजन: स्वच्छ ऊर्जा से आगे बढ़ेगा भारत।", hiRoman: "Chhat par sooraj, patri par hydrogen: swachh oorja se aage badhega Bharat.",
      hiMeaning: "Sun on the roof, hydrogen on the tracks: India will move forward with clean energy.",
      note: "Point first to the rooftop solar panels, then to the hydrogen train (Jind to Sonipat). It also works for the EVs and electric buses." },
    { id: "e14", kind: "original", topic: "energy", use: ["anytime", "bridge"],
      en: "The cleanest energy is the energy we save.",
      hi: "सबसे स्वच्छ ऊर्जा वही है, जिसे हम बचाते हैं।", hiRoman: "Sabse swachh oorja vahi hai, jise hum bachaate hain.",
      hiMeaning: "The cleanest energy is the one that we save.",
      note: "It pairs with 'The best waste is the waste we never create.' Add a simple action: switch off lights and fans when you leave a room." },
    { id: "e15", kind: "original", topic: "nature", use: ["bridge", "anytime"],
      en: "Less smoke today, more blue sky tomorrow.",
      hi: "धुआँ घटाएँ, आसमान नीला पाएँ।", hiRoman: "Dhuaan ghataayein, aasmaan neela paayein.",
      hiMeaning: "Let us reduce smoke and get a blue sky.",
      note: "Use it at the centre India map and carbon emission part, or when showing the electric buses and EVs. It is short and easy to remember." },
    { id: "e16", kind: "original", topic: "nature", use: ["anytime"],
      en: "Plant one tree, and you plant shade, fresh air and a home for birds.",
      hi: "एक पेड़ लगाओ, पाओ छाया, ताज़ी हवा और पंछियों का बसेरा।", hiRoman: "Ek ped lagaao, paao chhaaya, taazi hawa aur panchhiyon ka basera.",
      hiMeaning: "Plant one tree, and get shade, fresh air and a home for birds.",
      note: "Count the three gifts on your fingers: shade, fresh air, home for birds. In sunlight, leaves take in carbon dioxide and give out oxygen." },
    { id: "e17", kind: "original", topic: "nature", use: ["closing"],
      en: "Nature gives us so much for free; the least we can give back is a clean Earth.",
      hi: "प्रकृति हमें इतना कुछ मुफ़्त में देती है; बदले में हम कम से कम एक साफ़ धरती तो लौटा ही सकते हैं।", hiRoman: "Prakriti hamein itna kuchh muft mein deti hai; badle mein hum kam se kam ek saaf dharti to lauta hi sakte hain.",
      hiMeaning: "Nature gives us so much for free; in return, we can at least give back a clean Earth.",
      note: "A warm, thankful closing line. Say it slowly and look at the audience." },
    { id: "e18", kind: "original", topic: "sanitation", use: ["bridge"],
      en: "A toilet in every home is a gift of good health to every family.",
      hi: "हर घर में शौचालय, हर परिवार को सेहत का उपहार।", hiRoman: "Har ghar mein shauchaalay, har parivaar ko sehat ka upahaar.",
      hiMeaning: "A toilet in every home, a gift of health to every family.",
      note: "Point to the toilet in the Smart Village. Toilets stop germs from reaching water and food, which keeps families healthier." },
    { id: "e19", kind: "original", topic: "sanitation", use: ["anytime"],
      en: "Clean hands and clean food are the simplest keys to good health.",
      hi: "साफ़ हाथ, साफ़ खाना, यही है सेहत का ख़ज़ाना।", hiRoman: "Saaf haath, saaf khaana, yahi hai sehat ka khazaana.",
      hiMeaning: "Clean hands, clean food: this is the treasure of health.",
      note: "A rhyming Hindi slogan that children remember easily. You can add: wash hands with soap before eating and after using the toilet." },
    { id: "e20", kind: "original", topic: "sanitation", use: ["anytime", "stuck"],
      en: "Sanitation gives us two gifts: good health and dignity.",
      hi: "स्वच्छता से सेहत भी मिलती है और सम्मान भी।", hiRoman: "Swachhata se sehat bhi milti hai aur sammaan bhi.",
      hiMeaning: "Cleanliness brings both health and respect.",
      note: "Short and calm, so it is a good line to say while you remember your next point. It also fits the Smart Village toilet." },
    { id: "e21", kind: "original", topic: "duty", use: ["closing", "anytime"],
      en: "Cleanliness starts with me, my home and my school.",
      hi: "स्वच्छता की शुरुआत मुझसे, मेरे घर से, मेरे स्कूल से।", hiRoman: "Swachhata ki shuruaat mujhse, mere ghar se, mere school se.",
      hiMeaning: "Cleanliness begins with me, with my home, with my school.",
      note: "Point to yourself on 'me'. It is a good line before 'So, what can we do?'" },
    { id: "e22", kind: "original", topic: "duty", use: ["stuck"],
      en: "Let me pause and share the most important idea: every small action counts.",
      hi: "मैं एक पल रुककर सबसे ज़रूरी बात कहना चाहूँगी: हर छोटा कदम मायने रखता है।", hiRoman: "Main ek pal rukkar sabse zaroori baat kehna chaahoongi: har chhota kadam maayne rakhta hai.",
      hiMeaning: "I would like to pause for a moment and say the most important thing: every small step matters.",
      note: "A rescue line for when you forget. It sounds planned, not lost. The Hindi uses the feminine form 'चाहूँगी' (chaahoongi) because Avni is speaking. Take a breath, then go on with the next part." },
    { id: "e23", kind: "original", topic: "duty", use: ["closing", "anytime"],
      en: "Don't wait for someone to clean up; be that someone.",
      hi: "किसी और का इंतज़ार क्यों करें? सफ़ाई की पहल हम ख़ुद करें।", hiRoman: "Kisi aur ka intezaar kyon karein? Safaai ki pahal hum khud karein.",
      hiMeaning: "Why wait for someone else? Let us ourselves take the initiative in cleaning up.",
      note: "An inspiring call to action for the ending. Stress the word 'be'." },
    { id: "e24", kind: "original", topic: "7rs", use: ["bridge"],
      en: "Seven Rs, one goal: less waste and a better tomorrow.",
      hi: "सात आर, एक लक्ष्य: कम कचरा, बेहतर कल।", hiRoman: "Saat R, ek lakshya: kam kachra, behtar kal.",
      hiMeaning: "Seven Rs, one goal: less waste, a better tomorrow.",
      note: "Say it just before listing Refuse, Reduce, Reuse, Repair, Repurpose, Recycle, Recover. Hold up seven fingers, then one." },
    { id: "e25", kind: "original", topic: "7rs", use: ["anytime"],
      en: "Repair before you replace; repurpose before you throw away.",
      hi: "बदलने से पहले मरम्मत करें, फेंकने से पहले नया उपयोग सोचें।", hiRoman: "Badalne se pehle marammat karein, phenkne se pehle naya upyog sochein.",
      hiMeaning: "Before replacing, repair; before throwing away, think of a new use.",
      note: "Explains Repair and Repurpose, the two Rs people forget most. Example: an old bottle can become a plant pot." },
    { id: "h01", kind: "original", topic: "duty", use: ["opening", "anytime"],
      en: "Small hands, big intentions — a firm promise to keep India clean.",
      hi: "छोटे हाथ, बड़ा इरादा — स्वच्छ भारत का पक्का वादा।", hiRoman: "Chhote haath, bada iraada — swachh Bhaarat ka pakka vaada.",
      hiMeaning: "Small hands, a big intention — a firm promise of a clean India.",
      note: "Say it right after 'Good morning'. Show your open hands on 'chhote haath'. It works well because a Class 6 student is saying it." },
    { id: "h02", kind: "original", topic: "clean-india", use: ["opening", "anytime"],
      en: "Let every home learn the value of cleanliness, and let that be India's identity.",
      hi: "घर-घर पहुँचे सफ़ाई का ज्ञान, यही बने भारत की पहचान।", hiRoman: "Ghar-ghar pahunche safaai ka gyaan, yahi bane Bhaarat ki pehchaan.",
      hiMeaning: "May the knowledge of cleanliness reach every home; may this become India's identity.",
      note: "A good opening line. Stress 'ghar-ghar' (every home) and 'pehchaan' (identity)." },
    { id: "h03", kind: "original", topic: "clean-india", use: ["bridge"],
      en: "Whether city or village, may cleanliness spread its cool shade everywhere.",
      hi: "शहर हो या गाँव, हर जगह हो स्वच्छता की छाँव।", hiRoman: "Shehar ho ya gaanv, har jagah ho swachhta ki chhaanv.",
      hiMeaning: "Whether it is a city or a village, may there be the cool shade of cleanliness everywhere.",
      note: "Use it to move from the Smart City side of the model to the Smart Village side. Point from one to the other as you say 'shehar ho ya gaanv'." },
    { id: "h04", kind: "original", topic: "clean-india", use: ["closing"],
      en: "Today's small step is tomorrow's smile. Let's keep our India clean.",
      hi: "आज का कदम, कल की मुस्कान — स्वच्छ रहे मेरा हिंदुस्तान।", hiRoman: "Aaj ka kadam, kal ki muskaan — swachh rahe mera Hindustan.",
      hiMeaning: "Today's step, tomorrow's smile — may my India stay clean.",
      note: "A closing line. Smile on 'muskaan', then say 'Thank you, Jai Hind'." },
    { id: "h05", kind: "original", topic: "waste", use: ["bridge", "anytime"],
      en: "Separated waste is a resource; mixed waste is just garbage.",
      hi: "कचरा अलग हो तो काम का, मिला-जुला हो तो किस काम का?", hiRoman: "Kachra alag ho to kaam ka, mila-jula ho to kis kaam ka?",
      hiMeaning: "If waste is separated, it is useful; if it is all mixed up, what use is it?",
      note: "Use it to start the waste management / segregation part. Pause before 'kis kaam ka?' and ask it like a question to the audience. It matches the site's line 'separated waste becomes a resource'." },
    { id: "h06", kind: "original", topic: "waste", use: ["bridge"],
      en: "Wet goes in green, dry goes in blue — a simple rule for me and you!",
      hi: "हरे में गीला, नीले में सूखा — स्वच्छता का यह सूत्र अनूठा!", hiRoman: "Hare mein geela, neele mein sookha — swachhta ka yeh sootra anootha!",
      hiMeaning: "Wet (waste) in green, dry in blue — what a wonderful formula of cleanliness!",
      note: "Point at the green and then the blue dustbin. Green for wet and blue for dry match Chandigarh's home bins and the public-bin colours in the SWM Rules 2026. Chandigarh homes also use black (domestic hazardous) and red (sanitary) bins, so mention those if a judge asks." },
    { id: "h07", kind: "original", topic: "waste", use: ["anytime", "bridge"],
      en: "Peels, leaves and leftover food turn into compost that feeds the soil.",
      hi: "छिलके, पत्ते, बचा-खुचा भोजन — खाद बनकर दें मिट्टी को पोषण।", hiRoman: "Chhilke, patte, bacha-khucha bhojan — khaad bankar dein mitti ko poshan.",
      hiMeaning: "Peels, leaves and leftover food — may they become compost and nourish the soil.",
      note: "Use it when talking about wet waste and the green bin. 'Khaad' means compost or manure." },
    { id: "h08", kind: "original", topic: "waste", use: ["bridge"],
      en: "Waste we can't recycle can still give energy — in proper plants, never by open burning.",
      hi: "जो कचरा रिसाइकिल न हो पाए, सही प्लांट में ऊर्जा दे जाए।", hiRoman: "Jo kachra recycle na ho paaye, sahi plant mein oorja de jaaye.",
      hiMeaning: "Waste that cannot be recycled can give energy in the right plant.",
      note: "Say it before showing the plastic-to-energy machine and its glowing bulb. This is only for leftover waste that cannot be recycled, burned in special closed plants with pollution control. Reducing and recycling come first. Never burn plastic in the open." },
    { id: "h09", kind: "original", topic: "7rs", use: ["bridge"],
      en: "Refuse, reduce, then reuse — let's take our first steps on the path of the 7Rs.",
      hi: "मना करो, कम करो, फिर से काम में लाओ — सात 'आर' की राह पर कदम बढ़ाओ।", hiRoman: "Mana karo, kam karo, phir se kaam mein laao — saat 'R' ki raah par kadam badhaao.",
      hiMeaning: "Say no, use less, then use it again — step forward on the path of the 7Rs.",
      note: "Use it to open the 7Rs part. Count Refuse, Reduce and Reuse on your fingers, then name the other four: Repair, Repurpose, Recycle, Recover." },
    { id: "h10", kind: "original", topic: "7rs", use: ["stuck", "anytime"],
      en: "Before you throw it, think it through — could it be useful again?",
      hi: "फेंकने से पहले सोचो ज़रा — क्या यह काम आ सकता है दोबारा?", hiRoman: "Phenkne se pehle socho zara — kya yeh kaam aa sakta hai dobaara?",
      hiMeaning: "Think a little before throwing — can this be useful again?",
      note: "A good line if you get stuck. Ask it to the audience, take a breath, then carry on. It covers Repair, Reuse and Repurpose." },
    { id: "h11", kind: "original", topic: "plastic", use: ["anytime", "stuck"],
      en: "A cloth bag is the coolest bag — use it again and again!",
      hi: "कपड़े का थैला, सबसे अलबेला!", hiRoman: "Kapde ka thaila, sabse albela!",
      hiMeaning: "The cloth bag is the most charming (best) bag of all!",
      note: "Very short and fun, so it is easy to remember even when nervous. Hold up a cloth bag if you have one." },
    { id: "h12", kind: "original", topic: "plastic", use: ["anytime"],
      en: "Carry your own bottle and box — less plastic, cleaner towns.",
      hi: "अपनी बोतल, अपना डिब्बा — प्लास्टिक कम, साफ़ हर क़स्बा।", hiRoman: "Apni bottle, apna dibba — plastic kam, saaf har kasba.",
      hiMeaning: "Your own bottle, your own (tiffin) box — less plastic, and every town is clean.",
      note: "A tip children can follow every day: carry your own water bottle and tiffin instead of single-use plastic." },
    { id: "h13", kind: "original", topic: "water", use: ["anytime"],
      en: "Every drop is precious — don't let it go to waste.",
      hi: "हर बूँद है अनमोल, इसे न गँवाओ बेमोल।", hiRoman: "Har boond hai anmol, ise na ganvaao bemol.",
      hiMeaning: "Every drop is priceless; don't waste it for nothing.",
      note: "Add a simple tip after it, such as turning off the tap while brushing." },
    { id: "h14", kind: "original", topic: "water", use: ["bridge"],
      en: "Stones, sand, charcoal, cotton — layer by layer, the water gets cleaner.",
      hi: "पत्थर, रेत, कोयला और रुई — परत-दर-परत गंदगी कम हुई।", hiRoman: "Patthar, ret, koyla aur rui — parat-dar-parat gandagi kam hui.",
      hiMeaning: "Stones, sand, charcoal and cotton — layer by layer, the dirt became less.",
      note: "Use it to start the water filter part. Point at each layer in order. 'Koyla' here means charcoal. Say 'cleaner', not 'safe to drink': this filter removes dirt but not all germs, so the water still needs boiling or treatment." },
    { id: "h15", kind: "original", topic: "energy", use: ["bridge"],
      en: "With the sun's light and the wind's might, let's move towards clean energy.",
      hi: "सूरज की धूप, हवा का ज़ोर — चलें स्वच्छ ऊर्जा की ओर।", hiRoman: "Sooraj ki dhoop, hawa ka zor — chalein swachh oorja ki or.",
      hiMeaning: "The sun's sunshine, the wind's strength — let us move towards clean energy.",
      note: "Use it to start the Smart City energy part. Point to the solar panels on 'dhoop' and the windmill on 'hawa'." },
    { id: "h16", kind: "original", topic: "energy", use: ["bridge", "anytime"],
      en: "Electric buses and hydrogen trains — less smoke, cleaner air, a perfect pair!",
      hi: "बिजली की बस, हाइड्रोजन की रेल — कम धुआँ, साफ़ हवा, क्या ख़ूब है मेल!", hiRoman: "Bijli ki bus, hydrogen ki rail — kam dhuaan, saaf hawa, kya khoob hai mel!",
      hiMeaning: "Electric bus, hydrogen train — less smoke, cleaner air, what a great match!",
      note: "Point to the electric bus and the Jind–Sonipat hydrogen train. Say 'less smoke', not 'zero pollution'. The full benefit depends on how the electricity or hydrogen is made." },
    { id: "h17", kind: "original", topic: "energy", use: ["bridge", "anytime"],
      en: "Cow dung, peels and leftover food become biogas to cook our meals.",
      hi: "गोबर, छिलके, बचा खाना — बायोगैस से चूल्हा जलाना।", hiRoman: "Gobar, chhilke, bacha khaana — biogas se choolha jalaana.",
      hiMeaning: "Cow dung, peels, leftover food — light the stove with biogas.",
      note: "Use it at the Smart Village biogas plant. The science: tiny microbes break down wet waste without oxygen and make biogas." },
    { id: "h18", kind: "original", topic: "sanitation", use: ["bridge", "anytime"],
      en: "Use a toilet — protect our health and our water.",
      hi: "शौचालय अपनाएँ, सेहत और पानी दोनों बचाएँ।", hiRoman: "Shauchaalay apnaayein, sehat aur paani donon bachaayein.",
      hiMeaning: "Use toilets; protect both health and water.",
      note: "Use it when pointing at the toilet in the Smart Village. It links to the Swachh Bharat focus on toilets for everyone." },
    { id: "h19", kind: "original", topic: "sanitation", use: ["anytime"],
      en: "Soap, water, a little foam — and the germs are washed away!",
      hi: "साबुन, पानी, थोड़ा झाग — कीटाणु जाएँ दूर भाग!", hiRoman: "Saabun, paani, thoda jhaag — keetaanu jaayein door bhaag!",
      hiMeaning: "Soap, water, a little lather — may the germs run far away!",
      note: "Say when to do it: before eating and after using the toilet. Rub your hands together on 'jhaag' (foam). Soap and water wash germs off your hands, and the younger children in the audience will remember it." },
    { id: "h20", kind: "original", topic: "nature", use: ["bridge"],
      en: "Plant more trees, make less smoke, and help keep our Earth cool.",
      hi: "पेड़ लगाएँ, धुआँ घटाएँ, धरती को गर्मी से बचाएँ।", hiRoman: "Ped lagaayein, dhuaan ghataayein, dharti ko garmi se bachaayein.",
      hiMeaning: "Plant trees, reduce smoke, protect the Earth from heating up.",
      note: "Use it at the centre India map to start the carbon emission and global warming part. Trees take in carbon dioxide, and less smoke means fewer emissions." },
    { id: "h21", kind: "original", topic: "nature", use: ["closing"],
      en: "A green Earth and a clear blue sky — let's make this wish come true together.",
      hi: "हरी-भरी धरती, साफ़ आसमान — मिलकर पूरा करें यह अरमान।", hiRoman: "Hari-bhari dharti, saaf aasmaan — milkar poora karein yeh armaan.",
      hiMeaning: "A green earth, a clear sky — let us fulfil this wish together.",
      note: "A closing line. Look up and around the room on 'saaf aasmaan', and stress 'milkar' (together)." },
    { id: "h22", kind: "original", topic: "duty", use: ["closing"],
      en: "It starts with me, then my home, then my street, then my whole city.",
      hi: "शुरुआत मुझसे, फिर मेरा घर; फिर मेरी गली, फिर पूरा शहर।", hiRoman: "Shuruaat mujhse, phir mera ghar; phir meri gali, phir poora shehar.",
      hiMeaning: "It begins with me, then my home; then my street, then the whole city.",
      note: "A closing line with a gesture: hand on your heart for 'mujhse', then open your arms wider at each step." },
    { id: "h23", kind: "original", topic: "duty", use: ["stuck", "anytime"],
      en: "Never tired, never stopping — we never give up on keeping clean.",
      hi: "थकना नहीं, रुकना नहीं — स्वच्छता से कभी चूकना नहीं।", hiRoman: "Thakna nahin, rukna nahin — swachhta se kabhi chookna nahin.",
      hiMeaning: "Don't get tired, don't stop — never slip up on cleanliness.",
      note: "Your rescue line if you forget what comes next. Say it slowly with confidence, take one breath, glance at your headings card and carry on." },
    { id: "q01", kind: "quote", topic: "clean-india", use: ["opening"],
      en: "Let noble thoughts come to us from every side.",
      hi: "आ नो भद्राः क्रतवो यन्तु विश्वतः — हर दिशा से हमारे पास शुभ विचार आएँ।", hiRoman: "Aa no bhadraah kratavo yantu vishvatah — har disha se hamaare paas shubh vichaar aayein.",
      hiMeaning: "(Sanskrit, then Hindi) May good, auspicious thoughts come to us from every direction.",
      attribution: "Rigveda 1.89.1",
      sourceUrls: ["https://sanskritdocuments.org/doc_veda/AnobhadrA.html", "https://sacred-texts.com/hin/rigveda/rv01089.htm"],
      note: "The original is Vedic Sanskrit, so the English and the Hindi are both translations. The English is the popular rendering; R.T.H. Griffith's 1896 version reads 'May powers auspicious come to us from every side'. It is a good opening for the Thoughts section because Avni's own line says a clean India starts with a clean thought." },
    { id: "q02", kind: "official-slogan", topic: "clean-india", use: ["opening", "stuck"],
      en: "One step towards cleanliness.",
      hi: "एक कदम स्वच्छता की ओर", hiRoman: "Ek kadam swachhata ki ore",
      attribution: "Swachh Bharat Mission tagline, written by Bhagyashree Sheth of Rajkot and chosen through a MyGov public contest in 2014",
      sourceUrls: ["https://mygov.in/winner_contest_swachh_bharat_abhiyan.html", "https://presentations.gov.in/presgov_new/logos/swachh-bharat", "https://narendramodi.in/pm-launches-swachh-bharat-abhiyaan"],
      note: "The original is Hindi and the English is a translation. It goes with the Gandhi-spectacles logo of Swachh Bharat. If she gets stuck: say it, take one small step forward, and move on to the next part." },
    { id: "q03", kind: "official-slogan", topic: "duty", use: ["stuck", "anytime"],
      en: "Cleanliness is service.",
      hi: "स्वच्छता ही सेवा", hiRoman: "Swachhata hi seva",
      hiMeaning: "Cleanliness itself is service.",
      attribution: "Swachhata Hi Seva, the yearly campaign of the Swachh Bharat Mission, started by PM Narendra Modi in 2017",
      sourceUrls: ["https://static.pib.gov.in/WriteReadData/specificdocs/documents/2024/oct/doc2024101406401.pdf", "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/sep/doc2025925646401.pdf"],
      note: "The original is Hindi and the English is a translation. The campaign runs every year from mid-September to 2 October (Gandhi Jayanti). It is short and easy to say if she forgets a line." },
    { id: "q04", kind: "official-slogan", topic: "clean-india", use: ["anytime", "closing"],
      en: "Cleanliness in our nature, cleanliness in our values.",
      hi: "स्वभाव स्वच्छता, संस्कार स्वच्छता", hiRoman: "Swabhaav swachhata, sanskaar swachhata",
      hiMeaning: "Let cleanliness be our nature and our upbringing (values).",
      attribution: "Theme of Swachhata Hi Seva 2024, the 10th year of the Swachh Bharat Mission",
      sourceUrls: ["https://static.pib.gov.in/WriteReadData/specificdocs/documents/2024/oct/doc2024101406401.pdf", "https://pmindia.gov.in/en/news_updates/marking-completion-of-10-years-of-launch-of-swachh-bharat-mission-pm-to-participate-in-swachh-bharat-diwas-2024-on-2nd-october"],
      note: "The original is Hindi and the English is a translation. The repeated 'swachhata' gives it a strong beat. It matches Avni's line that cleanliness is a good habit and a healthy way of life." },
    { id: "q05", kind: "quote", topic: "duty", use: ["closing", "stuck"],
      en: "We won't litter, and we won't let others litter.",
      hi: "न गंदगी करेंगे, न करने देंगे।", hiRoman: "Na gandagi karenge, na karne denge.",
      hiMeaning: "We will neither make things dirty nor let anyone else make them dirty.",
      attribution: "PM Narendra Modi, his mantra at the launch of the Swachh Bharat Mission, 2 October 2014",
      sourceUrls: ["https://pmindia.gov.in/en/major_initiatives/swachh-bharat-abhiyan", "https://www.pmindia.gov.in/en/government_tr_rec/swachh-bharat-abhiyan/", "https://www.nhb.org.in//wp-content/uploads/2021/08/swachhta-PLEDGE.pdf"],
      note: "The original is Hindi and the English is a translation. The official Swachhta Pledge makes the same promise: 'मैं न गंदगी करूँगा, न किसी और को करने दूँगा' / 'I will neither litter nor let others litter.' A girl says करूँगी … दूँगी." },
    { id: "q06", kind: "official-slogan", topic: "duty", use: ["closing"],
      en: "I am confident that every step I take towards cleanliness will help in making my country clean.",
      hi: "मुझे मालूम है कि स्वच्छता की तरफ़ बढ़ाया गया मेरा एक कदम पूरे भारत देश को स्वच्छ बनाने में मदद करेगा।", hiRoman: "Mujhe maaloom hai ki swachhata ki taraf badhaaya gaya mera ek kadam poore Bharat desh ko swachh banaane mein madad karega.",
      hiMeaning: "I know that the one step I take towards cleanliness will help make the whole country of India clean.",
      attribution: "Swachhta Pledge (Swachh Bharat Mission, 2014), last line",
      sourceUrls: ["https://www.nhb.org.in//wp-content/uploads/2021/08/swachhta-PLEDGE.pdf", "https://services.bis.gov.in/tmp/Circular_HfDc_2024-02-15.pdf"],
      note: "Both lines come from the official Hindi and English pledge texts; neither is my translation. The Hindi line is the same for a girl or a boy. It works as a final line before 'Thank you'." },
    { id: "q07", kind: "official-slogan", topic: "sanitation", use: ["bridge", "stuck"],
      en: "Everyone, every day, always.",
      hi: "हर कोई, हर रोज़, हमेशा", hiRoman: "Har koi, har roz, hamesha",
      attribution: "'Darwaza Band – Part 2', the toilet-use campaign of Swachh Bharat Mission (Grameen) with Amitabh Bachchan, Ministry of Drinking Water and Sanitation, 2019",
      sourceUrls: ["https://www.deccanherald.com/amp/story/india%2Fbachchan-keep-reminding-people-717020.html", "https://www.gktoday.in/part-darwaza-band-campaign-launched/"],
      note: "The original is Hindi and the English is a translation. It means a toilet should be used by everyone, every day, always. Use it when pointing to the toilet in the Smart Village: 'A toilet is for har koi, har roz, hamesha.'" },
    { id: "q08", kind: "quote", topic: "sanitation", use: ["bridge"],
      en: "A lavatory must be as clean as a drawing-room.",
      hi: "शौचालय भी बैठक जितना साफ़ होना चाहिए।", hiRoman: "Shauchaalay bhi baithak jitna saaf hona chaahiye.",
      hiMeaning: "A toilet, too, should be as clean as the sitting room.",
      attribution: "Mahatma Gandhi, Navajivan, 24 May 1925",
      sourceUrls: ["https://gandhi-manibhavan.org/gandhian-philosophy/philosophy-enviornment-sanitation.html", "https://www.mkgandhi.org/articles/gandhian-thoughts-about-cleanliness.php"],
      note: "This is an excerpt. The full sentence is: 'I learnt 35 years ago that a lavatory must be as clean as a drawing-room.' Gandhi Ji wrote it in Gujarati, so the English (Collected Works) and the Hindi are translations. A drawing-room is the room where guests sit. A good link to the Smart Village toilet." },
    { id: "q09", kind: "quote", topic: "clean-india", use: ["opening", "bridge"],
      en: "The status of environmental cleanliness is one of the indicators of development of a nation.",
      hi: "पर्यावरण की स्वच्छता किसी भी देश के विकास का एक पैमाना है।", hiRoman: "Paryaavaran ki swachhata kisi bhi desh ke vikaas ka ek paimaana hai.",
      hiMeaning: "The cleanliness of the environment is one measure of any country's development.",
      attribution: "Dr. A.P.J. Abdul Kalam, President of India, speech 'Clean Environment is a Societal Mission', New Delhi, 20 January 2006",
      sourceUrls: ["https://presidentofindia.nic.in/dr-apj-abdul-kalam/speeches/address-inauguration-international-conference-environment-awareness"],
      note: "The original is English and the Hindi is a translation. It links well to the Smart City: a developed city is also a clean city." },
    { id: "q10", kind: "quote", topic: "energy", use: ["bridge"],
      en: "While being a threat to the environment, mounting garbage is also a rich source of energy.",
      hi: "बढ़ता कचरा पर्यावरण के लिए ख़तरा तो है, पर यह ऊर्जा का समृद्ध स्रोत भी है।", hiRoman: "Badhta kachra paryaavaran ke liye khatra to hai, par yah oorja ka samriddh srot bhi hai.",
      hiMeaning: "Growing garbage is a danger to the environment, but it is also a rich source of energy.",
      attribution: "Dr. A.P.J. Abdul Kalam, speech 'Clean Environment is a Societal Mission', New Delhi, 20 January 2006",
      sourceUrls: ["https://presidentofindia.nic.in/dr-apj-abdul-kalam/speeches/address-inauguration-international-conference-environment-awareness"],
      note: "The original is English and the Hindi is a translation. Use it before the biogas plant or the plastic-to-energy machine, then add: 'but only in proper plants with pollution control, never by burning garbage in the open.'" },
    { id: "q11", kind: "official-slogan", topic: "plastic", use: ["bridge", "stuck"],
      en: "Beat Plastic Pollution.",
      hi: "प्लास्टिक प्रदूषण को हराएँ।", hiRoman: "Plastic pradooshan ko haraayein.",
      attribution: "Theme of UN World Environment Day 2018, when India (New Delhi) was the global host",
      sourceUrls: ["https://en.wikipedia.org/wiki/World_Environment_Day"],
      note: "The original is English and the Hindi is a translation. Plastic pollution was the World Environment Day theme again in 2023 and 2025. It leads into the plastic-to-energy machine or the Plastic Man of India." },
    { id: "q12", kind: "official-slogan", topic: "water", use: ["bridge"],
      en: "Catch the rain, where it falls, when it falls.",
      hi: "बारिश का पानी सहेजें — जहाँ गिरे, जब गिरे।", hiRoman: "Baarish ka paani sahejein — jahaan gire, jab gire.",
      hiMeaning: "Save rainwater — where it falls, when it falls.",
      attribution: "Jal Shakti Abhiyan: Catch the Rain, launched by PM Narendra Modi on World Water Day, 22 March 2021",
      sourceUrls: ["https://en.wikipedia.org/wiki/Jal_Shakti_Abhiyan", "https://narendramodi.in/prime-minister-narendra-modi-to-launch-‘jal-shakti-abhiyan-catch-the-rain-campaign-on-22nd-march"],
      note: "The original is English; the Hindi is a translation. It is about rainwater harvesting (collecting rain to store it or let it soak into the ground). Use it only as a general thought about saving water — your model does NOT have rainwater harvesting, so don't say it is part of your model." },
    { id: "q13", kind: "quote", topic: "nature", use: ["anytime", "bridge"],
      en: "Trees are the earth's endless effort to speak to the listening heaven.",
      hi: "पेड़ धरती की अनंत कोशिश हैं — सुनने वाले आसमान से बात करने की।", hiRoman: "Ped dharti ki anant koshish hain — sunne vaale aasmaan se baat karne ki.",
      hiMeaning: "Trees are the earth's endless attempt to talk to the sky that listens.",
      attribution: "Rabindranath Tagore, Fireflies (Macmillan, 1928)",
      sourceUrls: ["https://archive.org/details/fireflies0000unse"],
      note: "Tagore wrote this in English, so the Hindi is a translation. Here 'heaven' means the sky. Use it when pointing to the trees in the model." },
    { id: "q14", kind: "official-slogan", topic: "nature", use: ["closing", "anytime"],
      en: "One tree in the name of Mother.",
      hi: "एक पेड़ माँ के नाम", hiRoman: "Ek ped Maa ke naam",
      hiMeaning: "One tree in Mother's name.",
      attribution: "Tree-planting campaign launched by PM Narendra Modi on World Environment Day, 5 June 2024 (#Plant4Mother)",
      sourceUrls: ["https://www.newsonair.gov.in/pm-modi-to-launch-ek-ped-maa-ke-naam-campaign-on-the-occasion-of-world-environment-day-today", "https://narendramodi.in/prime-minister-narendra-modi-launches-ek-ped-maa-ke-naam-campaign", "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/sep/doc2025925646401.pdf"],
      note: "The original is Hindi and the English is a translation. The campaign asks everyone to plant a tree as a tribute to their mother. Good just before the Atharvaveda line about Mother Earth." },
    { id: "q15", kind: "quote", topic: "nature", use: ["closing"],
      en: "Earth is my mother and I am her child.",
      hi: "माता भूमिः पुत्रोऽहं पृथिव्याः — धरती मेरी माँ है और मैं उसकी संतान हूँ।", hiRoman: "Maata bhoomih putro'ham prithivyaah — Dharti meri maa hai aur main uski santaan hoon.",
      hiMeaning: "(Sanskrit, then Hindi) The Earth is my mother and I am her child.",
      attribution: "Atharvaveda 12.1.12 (Prithvi Sukta / Bhumi Sukta)",
      sourceUrls: ["https://en.wikiquote.org/wiki/Atharva_Veda", "https://www.teachoo.com/31631/6457/Let-us-explore-NCERT-Poorvi-pages-80-81/category/NCERT-Questions-and-Activities/", "https://sanskritdocuments.org/doc_z_misc_general/mAtRRibhUmisUktam.html"],
      note: "The original is Vedic Sanskrit, so the English and the Hindi are translations. The English is the wording used in NCERT's Class 8 English textbook 'Poorvi'. 'Putra' literally means son; 'child' includes everyone. A gentle, strong closing line." }
  ],

  /* ---------------- 🎤 STAGE PRESENTATION ----------------
     The speech is built from Avni's own project file and her practised opening.
     versions: "full" (about 5–6 min), "medium" (about 3 min). The 1-minute version is "short".
     Avni: change any line into your own words — just keep the facts. */
  stage: {
    date: "2026-11-27",
    sections: [
      { id: "s-open", title: "Opening", seconds: 35, in: ["full", "medium"],
        cover: ["Greet judges, teachers and friends", "Name, class, topic", "Question: where does all this waste go?", "What you will show today"],
        cues: ["🚶 Walk to the centre. Stop. Wait 2 seconds. Smile — then speak.", "🎤 Mic about one hand-width below your chin. Don't move it while speaking.", "👀 Look at the judges first, then the middle of the audience.", "⏸ Pause before “Where does all this waste go?”"],
        sample: "Good morning, respected judges, teachers / and my dear friends. / *Jai Hind!* / I am *Avni Choudhary* from *Class 6*, / and my topic is *Clean India Mission and Waste Management*. / Every day, we throw away plastic, food, fruit peels, paper and bottles. / But — / *where does all this waste go?* / Today, I will show you / how we can manage our waste, / and how *small steps* can make a *big difference*." },
      { id: "s-sbm", title: "Clean India Mission", seconds: 45, in: ["full", "medium"],
        cover: ["Swachh Bharat Abhiyan", "2 October 2014, PM Narendra Modi, Gandhi Ji's birth anniversary", "Started with toilets for everyone", "Cities: 63 lakh+ home toilets, 6 lakh+ community & public toilet seats — more than the target", "Now ODF Plus: about 5.7 lakh villages also manage garbage and dirty water"],
        cues: ["🐢 Slow down for the date and names.", "👀 Look left, centre, right — share your eyes with the whole hall."],
        sample: "The Clean India Mission, / or *Swachh Bharat Abhiyan*, / was launched on *2 October 2014* / by Prime Minister Narendra Modi, / on Mahatma Gandhi's birth anniversary. / It started with *toilets for everyone*, / because using toilets protects our *health* / and our *water*. / In our cities alone, / more than *63 lakh* home toilets / and more than *6 lakh* community and public toilet seats were built — / *more* than the target. / Today, the mission has grown into *ODF Plus*: / about *5.7 lakh villages* stay open-defecation free / *and* manage their garbage and dirty water." },
      { id: "s-waste", title: "Waste management & segregation", seconds: 40, in: ["full", "medium"],
        cover: ["Separate → collect → transport → recycle/treat → safely dispose", "Segregation at source is the most important step", "Wet → compost/biogas; dry → recycling", "Mixed waste = garbage; separated waste = resource"],
        cues: ["✋ You may count the five steps on your fingers — slowly.", "⏸ Pause before the last line, then say it to the back row."],
        sample: "Waste management means / *separating* waste where it is made, / collecting it, / transporting it, / recycling or treating it, / and safely disposing of it. / The most important step is the *first* one — / *segregation at source*. / Wet waste, like peels and leftover food, / can become *compost* or *biogas*. / Dry waste, like paper, metal and glass, / can be *recycled*. / Mixed waste becomes *garbage*. / Separated waste becomes a *resource*." },
      { id: "s-plastic", title: "Plastic, eco-bricks & the Plastic Man", seconds: 40, in: ["full"],
        cover: ["Single-use plastic: used for minutes, stays for a very long time", "Eco-brick: bottle packed tightly with clean, dry plastic", "Prof. Rajagopalan Vasudevan — plastic in roads", "Padma Shri 2018"],
        cues: ["🖐️ Open palm when you name the Plastic Man — say his name slowly.", "If your model is on stage: point to his photo, then look back at the audience."],
        sample: "Single-use plastics, / like carry bags, straws and wrappers, / are used for a few minutes / but stay in our environment for a *very long time*. / One idea from my project is the *eco-brick* — / a plastic bottle packed tightly with clean, dry plastic waste, / which can be used to build things. / And *Professor Rajagopalan Vasudevan*, / the *Plastic Man of India*, / found a way to use waste plastic / to build *roads*. / He received the *Padma Shri* in *2018*." },
      { id: "s-7r", title: "The 7Rs", seconds: 30, in: ["full", "medium"],
        cover: ["3Rs → 7Rs", "Refuse, Reduce, Reuse, Repair, Repurpose, Recycle, Recover", "The best waste is the waste we never create"],
        cues: ["✋ Count the 7Rs on your fingers — the audience can follow.", "🐢 Slowest line of the whole speech: “the best waste … is the waste we never create.”"],
        sample: "We often hear about the *3Rs*, / but my project goes one step further, / with the *7Rs*: / Refuse, / Reduce, / Reuse, / Repair, / Repurpose, / Recycle, / and Recover. / They teach us one important lesson: / *the best waste / is the waste we never create.*" },
      { id: "s-wte", title: "Waste to energy", seconds: 35, in: ["full"],
        cover: ["Waste that can't be recycled can still give energy", "Biogas: microbes, no oxygen → gas for cooking/electricity", "Waste-to-energy plants: closed, very hot, pollution control → steam → turbine", "Never burn plastic in the open"],
        cues: ["If your model is on stage: point to the biogas plant, then the plastic-to-energy machine.", "👀 Strong eye contact for “never burn plastic in the open”."],
        sample: "Waste that *cannot* be recycled / can still give us *energy*. / In a biogas plant, / tiny microbes break down wet waste *without oxygen* / and make *biogas* for cooking and electricity. / In waste-to-energy plants, / non-recyclable waste is burnt at very high temperatures, / in closed plants with pollution control. / The heat makes *steam*, / and the steam turns a *turbine* to make electricity. / But remember — / we must *never* burn plastic in the open." },
      { id: "s-green", title: "Green energy & the hydrogen train", seconds: 55, in: ["full"],
        cover: ["Green energy: renewable, very little pollution", "Solar: sunlight → electricity; wind: moving air → electricity", "India crossed 300 GW of clean power (July 2026); goal 500 GW by 2030", "Green hydrogen", "First hydrogen train: Jind–Sonipat, flagged off 17 July 2026", "Main by-product: water vapour"],
        cues: ["🐢 Slow down on “17 July 2026” and “Jind–Sonipat”.", "If your model is on stage: show the solar panel and the train."],
        sample: "A clean India also needs *clean air*. / Green energy comes from sources that *do not run out* / and cause very little pollution, / like the *sun* and the *wind*. / Solar panels turn sunlight into electricity, / and wind turbines turn moving air into electricity. / In July 2026, India crossed *300 gigawatts* of clean, non-fossil power — / on the way to its goal of *500 gigawatts* by 2030. / India is also working on *green hydrogen*. / On *17 July 2026*, / India's first *hydrogen train* was flagged off / on the *Jind–Sonipat* route in Haryana. / Instead of diesel smoke, / its main by-product is *water vapour*." },
      { id: "s-water", title: "Clean water & rivers", seconds: 45, in: ["full"],
        cover: ["Multi-layer filter: coarsest → finest", "Stones & gravel → charcoal → cotton", "Clearer is not always safe", "Factories: effluent treatment plants; cities: sewage treatment plants", "Never throw garbage or puja waste into rivers"],
        cues: ["✋ Show the layers going down with your hand, top to bottom.", "👀 Say “clear water is not always safe” directly to the judges."],
        sample: "Clean water is *precious*. / In my project, I made a *multi-layer filter*. / Water flows from the coarsest layer to the finest: / *stones and gravel*, / then *charcoal*, / and finally *cotton*. / The water comes out *clearer* — / but clear water is *not always safe* to drink. / Factories must treat their wastewater / in *effluent treatment plants*, / and cities need *sewage treatment plants*, / so that dirty water never flows straight into our rivers. / And we must never throw garbage or puja waste into rivers — / it should go into special collection bins." },
      { id: "s-close", title: "Our duties & conclusion", seconds: 45, in: ["full", "medium"],
        cover: ["What can WE do?", "Stop littering; segregate; say no to single-use plastic", "Plant trees; public transport; spread awareness", "Not only a government programme — every citizen's responsibility", "Final quote, Thank you, Jai Hind"],
        cues: ["🚶 Take one small step forward.", "👀 Look at the back row for the final quote.", "⏸ Pause 2 seconds before “Thank you”. Smile. Small nod. Wait for the applause before you walk off."],
        sample: "So, what can *we* do? / Stop littering. / Segregate waste at home and in school. / Say *no* to single-use plastic. / Plant trees, / use public transport, / and spread awareness. / The Clean India Mission is not only a government programme — / it is a responsibility for *every citizen*. / *A clean India is not just a dream; / it is a responsibility we share.* / Thank you. / *Jai Hind!*" }
    ],
    short: "Good morning, respected judges, teachers and my dear friends. / *Jai Hind!* / I am *Avni Choudhary* from *Class 6*, / and my topic is *Clean India Mission and Waste Management*. / The Clean India Mission was launched on *2 October 2014*. / Its most important lesson for us is *segregation at source* — / wet waste can become compost and biogas, / and dry waste can be recycled. / The *7Rs* teach us that / *the best waste is the waste we never create*. / Green energy, like the sun, the wind / and India's first *hydrogen train*, / can keep our air clean. / *A clean India is not just a dream; / it is a responsibility we share.* / Thank you. / *Jai Hind!*",
    // Corrections to the handwritten project file (fact-checked 3 Oct 2026). Judges may read the file!
    fileFixes: [
      { page: "p9", wrote: "Over 3,150 cities have the SafaiMitra Surakshit Shehar protocol", say: "More than 500 cities have promised to clean sewers with machines instead of sending people inside. Chandigarh has won an award for keeping its SafaiMitras safe.", why: "No source for 3,150; the official count is 500 cities (2022)." },
      { page: "p9", wrote: "eliminating manual entry … shifting completely to machines", say: "Cities are working to replace dangerous manual sewer cleaning with machines. There is still work to do.", why: "Sewer deaths still happen, so “eliminating” and “completely” are not true yet." },
      { page: "p9", wrote: "dumpsite clearance … across thousands of cities", say: "India has about 2,500 old dumpsites; more than 1,000 have been fully cleared.", why: "The number is about 2,500 dumpsites, not thousands of cities. (Don't say Chandigarh's Dadu Majra dumpsite is finished.)" },
      { page: "p11", wrote: "WTE is a foundational pillar of the Clean India Mission", say: "Waste-to-energy is one important way to use leftover waste that cannot be recycled or composted.", why: "Reduce, segregate, recycle and compost come first; WTE is for leftovers." },
      { page: "p12", wrote: "burned at 850°C – 1400°C", say: "burned at very high temperatures, usually above 850°C", why: "City-waste incinerators run at about 850–1100°C; 1400°C is not normal." },
      { page: "p12", wrote: "wet waste like kitchen remnants and agricultural runoff", say: "wet waste like kitchen scraps, cow dung and crop leftovers", why: "Runoff is water flowing off fields — it does not go into a biogas plant." },
      { page: "p12", wrote: "capacity jumped from 230 MWeq in 2014 to 877 MWeq", say: "from about 230 MW in 2014 to about 878 MW in 2026 — almost four times bigger", why: "Latest MNRE figure: 878.4 MW (31 Aug 2026). Add the year." },
      { page: "p13", wrote: "MNRE Waste to Energy Programme offers financial assistance", say: "MNRE's National Bioenergy Programme (2021–2026) helped fund waste-to-energy plants. In August 2026 a new GOBARdhan scheme of ₹23,731 crore was approved.", why: "The old programme ended in 2025-26." },
      { page: "p13", wrote: "Gobardhan: 500 new plants, focusing primarily on compressed biogas", say: "In the 2023 Budget, 500 new ‘Waste to Wealth’ plants were announced under GOBARdhan — 200 compressed biogas and 300 community plants.", why: "Most of the 500 are community plants; add the year." },
      { page: "p10", wrote: "make India a hub for green hydrogen by 2030", say: "India wants to be a global hub for green hydrogen and make at least 5 million tonnes a year by 2030.", why: "The official 2030 goal is the 5 million tonnes number." },
      { page: "p16", wrote: "an elite global club of nations operating hydrogen trains", say: "India joined a small group of countries, like Germany, that run hydrogen passenger trains.", why: "“Elite club” sounds like an official group." },
      { page: "Wind box", wrote: "handled under the National Wind Energy Mission", say: "Wind energy is looked after by the Ministry of New and Renewable Energy (MNRE), with the National Institute of Wind Energy in Chennai.", why: "A National Wind Energy Mission was proposed but never launched." },
      { page: "Wind box", wrote: "India has set clear milestones for wind capacity", say: "India aims for about 100 GW of wind power by 2030; it has about 58 GW now.", why: "Give the actual number — a judge may ask what the milestones are." },
      { page: "Solar page", wrote: "the mission uses mobile solar toilets … completely self-reliant", say: "Some places, like Haryana, use mobile toilets with solar panels that power the lights and water pumps.", why: "These are local projects, and they still need water and emptying." },
      { page: "Solar page", wrote: "Solar directly feeds into Swachh Vidyalaya", say: "Many government schools have rooftop solar panels; Swachh Vidyalaya gave schools clean toilets and drinking water.", why: "Swachh Vidyalaya is about toilets and water — it has no solar part." },
      { page: "After p20", wrote: "sorting into wet, dry and hazardous waste", say: "sorting into four types: wet, dry, sanitary and special care waste (new rules, 1 April 2026)", why: "The 2026 rules use four streams." },
      { page: "Plastic Man", wrote: "a cornerstone of Swachh Bharat and Waste to Wealth", say: "Since 2015 the government has asked road builders near big cities to use waste plastic, so his idea helps keep plastic out of our streets.", why: "“Cornerstone” is an exaggeration." },
      { page: "p22", wrote: "Eco-bricks are crucial to the Clean India Mission", say: "Eco-bricks are a simple way schools and communities can help the Clean India Mission.", why: "Helpful, but not an official part of the mission." },
      { page: "p25", wrote: "charcoal traps heavy metals", say: "charcoal holds many chemicals, chlorine, colour and smells — but not germs, and not all metals", why: "Home-made charcoal removes very little metal." },
      { page: "p24", wrote: "excellent for removing large particles and certain chemicals", say: "My filter makes water look much clearer, but it does not kill germs — the water must be boiled or treated before drinking.", why: "Always add the safety line; judges often ask “Can we drink it?”" },
      { page: "p27", wrote: "designated collection systems like ‘Puja Banks’", say: "special puja-material collection bins, like the one in my drawing, so flowers can become compost", why: "“Puja Bank” is not a known term; “collection bins” is safe." }
    ],
    // Good, verified facts from the file you can say confidently
    fileGood: [
      "Swachh Bharat (Urban): about 63.8 lakh home toilets (108% of the target) and about 6.36 lakh community & public toilet seats (125%).",
      "About 5.69 lakh villages were ODF Plus by September 2026 (about 5.25 lakh in the highest ‘Model’ stage).",
      "National Green Hydrogen Mission: approved 4 January 2023, ₹19,744 crore.",
      "Hydrogen train: flagged off 17 July 2026 at Jind; 89 km Jind–Gohana–Sonipat; 12 intermediate stations; about 2 hours.",
      "India is 4th in the world in installed wind power, and 3rd in total renewable energy capacity.",
      "500 GW non-fossil power by 2030 is India's goal — India crossed 300 GW in July 2026.",
      "Net-zero emissions by 2070 (announced at COP26, Glasgow, 2021).",
      "19 single-use plastic items have been banned in India since 1 July 2022.",
      "Namami Gange uses trash skimmers to collect floating waste from the Ganga."
    ],
    today: [
      { id: "t1", time: "30 min", task: "Read the full speech aloud ONCE, slowly, using 🔊 Listen if you like. Mark any word that feels hard." },
      { id: "t2", time: "15 min", task: "Voice Coach → 🗣️ Pronunciation: practise the hard words (Swachh Bharat Abhiyan, Rajagopalan Vasudevan, anaerobic, effluent)." },
      { id: "t3", time: "40 min", task: "Learn card by card: look only at the KEY POINTS (not the sample) and say each card 3 times in your own words." },
      { id: "t4", time: "10 min", task: "Break — water, a snack, a short walk." },
      { id: "t5", time: "20 min", task: "🎬 Stage rehearsal: stand up, use the timer, speak to the back of the biggest room. Family = audience." },
      { id: "t6", time: "15 min", task: "Voice Coach → 🎙️ Record one full run. Check speed (110–140 words/min), filler words and volume." },
      { id: "t7", time: "20 min", task: "❓ Viva → 🎧 Judge mode: answer 10 questions, especially Stage-topic questions." },
      { id: "t8", time: "15 min", task: "Evening: ONE relaxed final run. Then STOP practising. Pack your bag. Sleep early." }
    ],
    morning: [
      "Eat breakfast and carry a water bottle.",
      "Do the 🧘 1-minute warm-up (Voice Coach → Warm-up).",
      "Read only your headings and the 3 quotes — do not try to re-learn the speech.",
      "Carry: project file, cue card, model parts / batteries if your model is going on stage.",
      "Wear comfortable shoes; tie hair so it doesn't cover your face."
    ],
    backstage: [
      "Breathe in for 4, hold for 4, out for 4 — three times.",
      "Say your first line once in your head: “Good morning, respected judges…”",
      "Shoulders down, chin up, smile.",
      "When your name is called: walk calmly, stop at the centre, pause, smile, begin."
    ],
    rescue: [
      { q: "I forget a line", a: "Pause, smile, look at your cue card or think of the next HEADING and continue from there. The audience does not know your script — a calm pause looks confident." },
      { q: "The mic stops working", a: "Keep the mic down, take one step forward and speak louder to the back row. Don't stop to fix it." },
      { q: "I say a word wrongly", a: "Don't apologise. Just say it again correctly, or keep going. Nobody minds." },
      { q: "A judge asks something I don't know", a: "“I am not sure about that, Ma'am/Sir, but what I know is…” — then say something related you DO know. Honesty earns marks." },
      { q: "My hands are shaking", a: "Hold your cue card with both hands at waist level, or rest one hand lightly on the other. Breathe out slowly before your next sentence." },
      { q: "I am running out of time", a: "Skip to the 7Rs or straight to “So, what can we do?” and finish with the final quote. A strong ending matters more than every section." }
    ],
    tips: [
      "On stage, speak about 20% slower and louder than in a room. Speak to the LAST row.",
      "Eye contact in three zones: left — centre — right. Judges first, then everyone.",
      "Never turn your back to the audience. If you point to the model, stand beside it and point with the hand nearer to it.",
      "Feet shoulder-width apart; don't sway or walk around while speaking.",
      "If there is applause or laughter, pause and smile — then continue.",
      "End strong: final quote → 2-second pause → “Thank you” → small nod → walk off calmly."
    ]
  },

  /* ---------------- 🚆 TRIP JOURNEY (fact-checked station facts + quick questions) ---------------- */
  tripGame: {
    arrival: "Gorakhpur Junction! You have travelled about 938 km from Chandigarh. Look along Platform 1 — at about 1,366 m it is one of the longest railway platforms in the world (2nd after Hubballi). Welcome to the Akhil Bharatiya Vigyan Mela, Avni — good luck!",
    version: "gorakhpur",
    stations: [
      {"name":"Chandigarh","icon":"🪨","fact":"Chandigarh's Rock Garden was built by Nek Chand, a road inspector, from city and factory waste like broken bangles, tiles and crockery. He started secretly in 1957.","hi":"चंडीगढ़ का रॉक गार्डन नेक चंद ने शहर और कारखानों के कचरे — टूटी चूड़ियाँ, टाइलें, बर्तन — से बनाया था। उन्होंने 1957 में चुपके से शुरुआत की।","link":"Rock Garden is the 7Rs 'Reuse' idea in real life — waste turned into art.","source":"https://en.wikipedia.org/wiki/Rock_Garden_of_Chandigarh","sourceDate":"2026-10-31"},
      {"name":"Ambala Cantt","icon":"🔬","fact":"Ambala Cantonment has over 2,000 units that make science lab items like glassware and school instruments. Your school lab beakers might come from here!","hi":"अंबाला छावनी में 2,000 से ज़्यादा इकाइयाँ प्रयोगशाला का सामान जैसे काँच के बर्तन और स्कूल के उपकरण बनाती हैं।","link":"","source":"https://tribuneindia.com/news/ambala-scientific-manufacturers-urge-centre-for-revival-support","sourceDate":"2026-10-31"},
      {"name":"Saharanpur","icon":"🪵","fact":"Saharanpur is famous for wood carving made from sheesham and mango wood. 'Saharanpur Wood Craft' has a GI tag, which means only this area can use that name.","hi":"सहारनपुर शीशम और आम की लकड़ी पर नक्काशी के लिए प्रसिद्ध है। 'सहारनपुर वुड क्राफ्ट' को GI टैग मिला है।","link":"","source":"https://search.ipindia.gov.in/GIRPublicSearch/Application/Details/184","sourceDate":"2026-10-31"},
      {"name":"Moradabad","icon":"🏺","fact":"Moradabad is called 'Peetal Nagri' (Brass City). Its brassware is sent to countries like the USA, UK and Germany, and 'Moradabad Metal Craft' has a GI tag.","hi":"मुरादाबाद को 'पीतल नगरी' कहते हैं। यहाँ के पीतल के बर्तन अमेरिका, ब्रिटेन, जर्मनी जैसे देशों में जाते हैं।","link":"Metals like brass can be melted and reused again and again — great for the 7Rs 'Recycle'.","source":"https://www.drishtiias.com/daily-updates/daily-news-analysis/moradabad-brassware-industry/print_manually","sourceDate":"2024-01-08"},
      {"name":"Bareilly","icon":"🐄","fact":"Bareilly's Izatnagar has the Indian Veterinary Research Institute (IVRI), a science institute for animal health. Its Izatnagar campus started in 1913 to make vaccines.","hi":"बरेली के इज़्ज़तनगर में भारतीय पशु चिकित्सा अनुसंधान संस्थान (IVRI) है, जो पशुओं के स्वास्थ्य पर शोध करता है। इसका इज़्ज़तनगर परिसर 1913 में शुरू हुआ।","link":"Healthy cows give dung — the main food for a biogas plant like the one in my model.","source":"https://en.wikipedia.org/wiki/Indian_Veterinary_Research_Institute","sourceDate":"2026-10-31"},
      {"name":"Lucknow","icon":"🏆","fact":"Lucknow, UP's capital, came 1st among big Indian cities in Swachh Vayu Sarvekshan 2026, scoring 198 out of 200 for its clean-air work.","hi":"यूपी की राजधानी लखनऊ ने स्वच्छ वायु सर्वेक्षण 2026 में बड़े शहरों में 200 में से 198 अंक लेकर पहला स्थान पाया।","link":"Clean air needs the same steps as my model: no open burning, EVs and waste sorting.","source":"https://www.businesstoday.in/india/story/swachh-vayu-sarvekshan-2026-lucknow-beats-indore-by-a-single-point-to-top-indias-2026-clean-air-survey-554298-2026-09-09","sourceDate":"2026-09-09"},
      {"name":"Gonda","icon":"🦢","fact":"Near Gonda is Parvati Arga Bird Sanctuary, two oxbow lakes that became a Ramsar wetland of world importance on 2 December 2019. Many winter birds visit.","hi":"गोंडा के पास पार्वती अरगा पक्षी विहार है — दो गोखुर झीलें, जिन्हें 2 दिसंबर 2019 को रामसर (अंतरराष्ट्रीय महत्व की आर्द्रभूमि) घोषित किया गया।","link":"Clean water bodies need no sewage or plastic dumped in them — just like the clean pots in my model.","source":"https://rsis.ramsar.org/ris/2416","sourceDate":"2019-12-02"},
      {"name":"Gorakhpur","icon":"🚉","fact":"Gorakhpur Junction's Platform 1 is about 1,366 m long — once the world's longest, now 2nd after Hubballi (1,507 m). The city also has Ramgarh Taal, a very large natural lake.","hi":"गोरखपुर जंक्शन का प्लेटफॉर्म 1 लगभग 1,366 मीटर लंबा है — कभी दुनिया में सबसे लंबा, अब हुब्बल्ली (1,507 मीटर) के बाद दूसरा। शहर में रामगढ़ ताल नाम की बड़ी झील भी है।","link":"Gorakhpur also has a plant that turns paddy straw into bio-gas — like my model's biogas unit!","source":"https://en.wikipedia.org/wiki/Gorakhpur_Junction_railway_station","sourceDate":"2026-10-31"}
    ],
    questions: [
      {"item": "nothermo", "q": "Which material is strictly banned in your model, in any form?", "o": ["Cardboard", "Thermocol", "Clay"], "answer": 1, "why": "The fair rules ban thermocol in any form. If any part has it, replace it with cardboard."},
      {"item": "size", "q": "Your model must not be bigger than…", "o": ["3 ft × 2 ft", "5 ft × 3 ft", "8 ft × 5 ft"], "answer": 1, "why": "The rule is not bigger than 5 ft × 3 ft, which is about 152 cm × 91 cm."},
      {"item": "synopsis", "q": "What do the rules say about your written synopsis?", "o": ["1 copy, no list of parts needed", "2 copies, with the list of parts", "5 copies, with photos of the model"], "answer": 1, "why": "Carry 2 written copies of your synopsis. You are in Bal Varg (Classes 6–8), so it must include the list of parts."},
      {"item": "charts", "q": "How many charts can you bring at most?", "o": ["2", "4", "As many as you like"], "answer": 0, "why": "The rules say not more than 2 charts."},
      {"item": "masks", "q": "Which mask filters out most of the tiny particles in winter haze?", "o": ["A cloth mask", "A close-fitting N95 mask", "A handkerchief"], "answer": 1, "why": "A close-fitting N95 or N99 mask filters out most of the tiny particles. Cloth masks, handkerchiefs and scarves don't stop them. Ask your parents before you wear one."},
      {"item": "uniform", "q": "What must you wear during the competition?", "o": ["Your favourite party dress", "Your school uniform", "Any comfortable home clothes"], "answer": 1, "why": "The fair rules say the school uniform must be worn during the competition."},
      {"item": "filter", "q": "In your filter, which layer is at the very BOTTOM?", "o": ["Stones and gravel", "Charcoal", "Cotton"], "answer": 2, "why": "Top to bottom: stones & gravel → charcoal → cotton. Cotton is the last layer. The water that comes out is clearer, but it is not safe to drink yet."}
    ]
  },

  /* ---------------- 🏫 ABOUT THE FAIR (Vidya Bharati, levels, past fairs, Gorakhpur) ---------------- */
  about: {"intro": "Your science fair is run by Vidya Bharati. Here is how the Vigyan Mela works, where you have reached, and what to know about Gorakhpur. Items marked “likely” come from one source only.", "youAreAt": 4, "about": [{"title": "My school is a Vidya Bharati school", "text": "Avni's school, Sharda Sarvhitkari Senior Secondary School in Chandigarh, is part of Vidya Bharati (confirmed by her family, 31 October 2026).", "source": "", "confidence": "confirmed"}, {"title": "What is Vidya Bharati?", "text": "Vidya Bharati Akhil Bharatiya Shiksha Sansthan is a big all-India group that runs schools. It became a national organisation in 1977.", "source": "https://vidyabharti.net/about-vidya-bharati", "confidence": "confirmed"}, {"title": "It started in Gorakhpur in 1952", "text": "The first Saraswati Shishu Mandir school opened in Gorakhpur in 1952. It was at Pakki Bagh. CBSE records give 7 July 1952 as its first opening date. Avni's national fair in 2026 is in the same city.", "source": "https://vidyabharti.net/about-vidya-bharati ; https://saras.cbse.gov.in/SARAS/AffiliatedList/AfflicationDetails/2132370", "confidence": "confirmed"}, {"title": "Where is its head office?", "text": "Its registered office is in Lucknow, and its working headquarters is in Delhi. The science fair rule book gives the Delhi office address as G.L.K. Saraswati Bal Mandir, Nehru Nagar, New Delhi.", "source": "https://vidyabharti.net/about-vidya-bharati ; https://en.wikipedia.org/wiki/Vidya_Bharati", "confidence": "confirmed"}, {"title": "How big is it? (2025-26)", "text": "In the 2025-26 session, Vidya Bharati counted 12,068 formal schools with 33,32,774 students (about 33 lakh) and 1,52,624 teachers. The numbers for West Maharashtra and Goa were missing from this count.", "source": "https://vidyabharti.net/status-work-session-2025-26-glance (Akhil Bharatiya Paridrishya 2025-26, executive meeting at Mount Abu, 12-14 September 2025)", "confidence": "confirmed"}, {"title": "Ladder of levels", "text": "Vidya Bharati is organised like a ladder: school, then sankul (a group of nearby schools), then vibhag or district, then prant (state), then kshetra (zone), then all-India.", "source": "https://vidyabharti.net/status-work-session-2025-26-glance", "confidence": "confirmed"}, {"title": "11 kshetras (zones)", "text": "There are 11 kshetras: Uttar, Paschim Uttar Pradesh, Purvi Uttar Pradesh, Uttar Purva, Purvottar, Purva, Dakshin Madhya, Dakshin, Paschim, Rajasthan and Madhya. Punjab and Chandigarh schools are in Uttar Kshetra (North Zone).", "source": "https://vidyabharti.net/status-work-session-2025-26-glance", "confidence": "likely"}, {"title": "Sarvhitkari schools in Punjab", "text": "In Punjab, the Vidya Bharati schools are run by the Sarvhitkari Shiksha Samiti, and many of them are called Sarvhitkari Vidya Mandir. One of them is in Malerkotla, where Avni's prant-level fair was held.", "source": "https://en.wikipedia.org/wiki/Vidya_Bharati ; https://m.tribuneindia.com/news/archive/jalandhar/127th-sarvhitkari-vidhya-mandir-inaugurated-668468", "confidence": "likely"}, {"title": "Science Week for P.C. Ray", "text": "Vidya Bharati asks schools to hold a 'Vigyan Saptah' (Science Week) from 25 July to 2 August. 2 August is the birthday of chemist Acharya Prafulla Chandra Ray. School-level science fairs can be held in that week.", "source": "https://vidyabharti.net/sites/default/files/events/FINAL%20AKHIL%20BHARATIYA%20VIGYAN%20MELA%20SYLLABUS%202026-2027.pdf", "confidence": "confirmed"}, {"title": "Avni's topic is on the 2026-27 list", "text": "The 2026-27 rule book lists five model topics for Bal Varg (Classes 6-8). They are friction (friend and foe), Clean India Mission and waste management, conservation of electricity, sensors, and an innovative model.", "source": "https://vidyabharti.net/sites/default/files/events/FINAL%20AKHIL%20BHARATIYA%20VIGYAN%20MELA%20SYLLABUS%202026-2027.pdf", "confidence": "confirmed"}], "levels": ["School (Vidyalaya): every school holds its own science fair first.", "Sankul / Vibhag / District: winners from nearby schools compete together.", "Prant (state level): for Avni this was at Malerkotla, Punjab.", "Kshetra (zone level): for Avni this was the Uttar Kshetra (North Zone) fair in Delhi, October 2026.", "Akhil Bharatiya (national level): the 24th national Vigyan Mela, Gorakhpur, 27-29 November 2026. Shishu Varg (Classes 4-5) stops at prant/kshetra level and does not go to the national fair."], "events": ["Vigyan Pradarshan (Model Exhibition): one student, one working or still model, no bigger than 5 x 3 ft. Marked out of 40: neatness and order 10, showing how it works 10, speaking about it 10, written details 10.", "Vigyan Manch (Science Quiz): a team of 3 from each kshetra, 10 rounds. Questions are in Hindi and English and must be answered within 40 seconds. NCERT books decide any dispute.", "Vigyan Patra Prastuti (Science Paper Presentation): one student talks for 6-7 minutes using charts only. Marked out of 40: content 10, charts 10, presentation and time 10, cross-questions 10.", "Vigyan Prayog (Science Experiment): the student does an experiment from a given list and is marked out of 20. Bal Varg gets 40 minutes and Tarun Varg 60 minutes.", "Acharya Patra Prastuti (Teacher Paper Presentation): a paper presented by a teacher, one per kshetra."], "past": [{"year": "January 2003", "place": "Agra (Uttar Pradesh)", "text": "1st Akhil Bharatiya Vigyan Mela.", "source": "https://vidyabharti.net/sites/default/files/events/FINAL%20AKHIL%20BHARATIYA%20VIGYAN%20MELA%20SYLLABUS%202026-2027.pdf"}, {"year": "March 2022", "place": "Basant Vihar, Delhi (online)", "text": "19th national fair, held online after the 2020-21 gap.", "source": "https://vidyabharti.net/sites/default/files/events/FINAL%20AKHIL%20BHARATIYA%20VIGYAN%20MELA%20SYLLABUS%202026-2027.pdf"}, {"year": "November 2022", "place": "Bhopal (Madhya Pradesh)", "text": "20th national fair.", "source": "https://vidyabharti.net/sites/default/files/events/FINAL%20AKHIL%20BHARATIYA%20VIGYAN%20MELA%20SYLLABUS%202026-2027.pdf"}, {"year": "November 2023", "place": "Amritsar (Punjab)", "text": "21st national fair, held in Punjab.", "source": "https://vidyabharti.net/sites/default/files/events/FINAL%20AKHIL%20BHARATIYA%20VIGYAN%20MELA%20SYLLABUS%202026-2027.pdf"}, {"year": "November 2024", "place": "Jaipur (Rajasthan)", "text": "22nd national fair.", "source": "https://vidyabharti.net/sites/default/files/events/FINAL%20AKHIL%20BHARATIYA%20VIGYAN%20MELA%20SYLLABUS%202026-2027.pdf"}, {"year": "13-16 November 2025", "place": "Meerut (Uttar Pradesh)", "text": "23rd national fair at Baleram Brajbhushan Saraswati Shishu Mandir Senior Secondary School, Shastri Nagar, Meerut. Students had to arrive by 5 pm on 12 November 2025.", "source": "https://vidyabharti.net/events/akhil-bharatiya-vigyan-mela-2025-26"}, {"year": "27-29 November 2026", "place": "Gorakhpur (Uttar Pradesh)", "text": "24th national fair, the one Avni is going to.", "source": "https://vidyabharti.net/events/24th-akhil-bharatiya-vigyan-mela-2026-27"}], "gorakhpur2026": {"text": "The 24th Akhil Bharatiya Vigyan Mela 2026-27 runs from 27 to 29 November 2026 in Gorakhpur. The venue is Saraswati Shishu Mandir, near Durgabari, Pakki Bagh, Gorakhpur (UP) 273001. This is the same Pakki Bagh school that opened in 1952 as the first Saraswati Shishu Mandir. Participants must reach the venue by 5:00 pm on 26 November 2026. Competitions start at 9:00 am on 27 November, and return trains should be booked for after 5:00 pm on 29 November. The fee is Rs 1,300 per student (Rs 1,200 participation plus Rs 100 registration). Students must wear school uniform, and parents and helpers are not allowed at the fair. The contact details for the venue are in the official rule book; ask Rajnish Ma'am or your escorting teacher. No news reports about the 2026 fair were found yet.", "source": "https://vidyabharti.net/events/24th-akhil-bharatiya-vigyan-mela-2026-27 ; https://vidyabharti.net/sites/default/files/events/FINAL%20AKHIL%20BHARATIYA%20VIGYAN%20MELA%20SYLLABUS%202026-2027.pdf", "confidence": "confirmed"}, "gorakhpur": [{"title": "Where is Gorakhpur?", "text": "Gorakhpur is in eastern Uttar Pradesh, on the bank of the Rapti river. It is about 270 km east of Lucknow and about 100 km from the Nepal border.", "source": "https://en.wikipedia.org/wiki/Gorakhpur", "confidence": "likely"}, {"title": "Gorakhnath Temple", "text": "The city is named after Guru Gorakhnath, a saint of the Nath tradition. The Gorakhnath Math and temple are in the city.", "source": "https://en.wikipedia.org/wiki/Gorakhpur", "confidence": "likely"}, {"title": "Gita Press", "text": "Gita Press was set up in 1923 and is one of the world's largest publishers of Hindu religious books. It was given the Gandhi Peace Prize for 2021, and the award was announced on 18 June 2023.", "source": "https://en.wikipedia.org/wiki/Gita_Press ; https://newindiasamachar.pib.gov.in/WriteReadData/flipbook/2023/aug/1st/english/files/basic-html/page8.html", "confidence": "confirmed"}, {"title": "Ramgarh Taal lake", "text": "Ramgarh Taal is a big natural lake of about 678 hectares, formed when the Rapti river changed its path. People go boating there. Sewage from nearby colonies has made the water dirtier, which is a real example of why waste management matters.", "source": "https://en.wikipedia.org/wiki/Ramgarh_Tal_Lake ; https://en.wikipedia.org/wiki/Gorakhpur", "confidence": "likely"}, {"title": "Very long railway platform", "text": "Gorakhpur Junction's platform is about 1,366 m long, including the ramp. It was opened on 6 October 2013 and was called the world's longest. In 2021 Hubballi (Karnataka) built a longer one, so Gorakhpur's is now second.", "source": "https://en.wikipedia.org/wiki/Gorakhpur_Junction_railway_station ; https://gulfnews.com/world/asia/india/uttar-pradesh-gets-worlds-longest-railway-platform-1.1241468", "confidence": "confirmed"}, {"title": "November weather (IMD normals)", "text": "IMD normals for 1991-2020 give November an average high of 29.4 °C and an average low of 14.8 °C. It barely rains (1.1 mm), so days are warm and nights are cool. Pack a light sweater for the mornings and evenings. There are about 2-3 foggy days in November, which can delay trains.", "source": "https://mausam.imd.gov.in/lucknow/mcdata/Gorakhpur.pdf", "confidence": "confirmed"}, {"title": "Planetarium (Taramandal)", "text": "The Vir Bahadur Singh Planetarium (Nakshatrashala) in the Taramandal area shows sky shows on a big dome. The UP Council of Science and Technology has run it since 21 December 2009. In 2026 it was being upgraded with exhibits on ancient Indian and modern science, so check whether it is open before going.", "source": "https://en.wikipedia.org/wiki/Vir_Bahadur_Singh_Planetarium,_Gorakhpur ; https://www.amarujala.com/gorakhpur/there-will-be-a-vivid-presentation-ranging-from-ancient-indian-scientific-achievements-to-modern-science-gorakhpur-news-c-7-gkp1004-1392920-2026-07-22", "confidence": "likely"}]},

  /* ---------------- 🌫️ HAZE & CLEAN AIR ----------------
     Fact-checked for the 2026 haze season. aqi + pmBreakpoints = CPCB National AQI (the live widget uses
     them to ESTIMATE an AQI from forecast PM2.5/PM10). comp = the model part a line links to. */
  haze: {
    intro: "Avni, your trip to Gorakhpur is in late November, when winter air in Uttar Pradesh can turn hazy. Here are real numbers from government air reports (October 2026) so you can explain your model with fresh facts. Remember: air changes day to day, so check the AQI again just before you travel.",
    officialNote: "This number is only an estimate made from PM2.5 and PM10 forecast data (CAMS, through Open-Meteo), not CPCB's official AQI. For the official AQI of any city on the route, check CPCB's SAMEER app or CPCB's 4 pm bulletin.",
    aqi: [{"name":"Good","hi":"अच्छा","min":0,"max":50,"color":"#00B050","health":"Minimal impact. No special care is needed."},{"name":"Satisfactory","hi":"संतोषजनक","min":51,"max":100,"color":"#92D050","health":"A few sensitive people, like those with weak lungs, may feel a little breathing discomfort."},{"name":"Moderate","hi":"मध्यम","min":101,"max":200,"color":"#FFFF00","health":"People with asthma, lung disease or heart disease may find it uncomfortable to breathe."},{"name":"Poor","hi":"ख़राब","min":201,"max":300,"color":"#FFA500","health":"Most people may feel breathing discomfort if they stay out in this air for a long time."},{"name":"Very Poor","hi":"बहुत ख़राब","min":301,"max":400,"color":"#FF0000","health":"Staying out in this air for a long time can make people ill with breathing problems."},{"name":"Severe","hi":"गंभीर","min":401,"max":500,"color":"#C00000","health":"Even healthy people are affected, and people who are already ill can get much worse."}],
    pmBreakpoints: {"pm25":[[0,30],[31,60],[61,90],[91,120],[121,250],[251,380]],"pm10":[[0,50],[51,100],[101,250],[251,350],[351,430],[431,510]],"source":"CPCB's National Air Quality Index, 24-hour breakpoints in µg/m³ (CPCB 'About National Air Quality Index': https://cpcb.gov.in/displaypdf.php?id=bmF0aW9uYWwtYWlyLXF1YWxpdHktaW5kZXgvQWJvdXRfQVFJLnBkZg==). PM2.5: 0–30, 31–60, 61–90, 91–120, 121–250, 250+. PM10: 0–50, 51–100, 101–250, 251–350, 351–430, 430+. IMPORTANT: CPCB gives the Severe band no upper limit. The caps of 380 (PM2.5) and 510 (PM10) are NOT in the CPCB table; they carry the Very Poor slope forward so that Severe maps onto 401–500, which fits the explanation that PM2.5 of 380 µg/m³ or more is reported as AQI 500 (Santosh Harish, The Quint, 14 Nov 2019). Cap the AQI at 500. Method: round C to a whole number; sub-index = Ilo + (C − Blo) × (Ihi − Ilo) / (Bhi − Blo), linear inside each band; AQI = the larger of the PM2.5 and PM10 sub-indices (CPCB uses the worst sub-index). An official AQI needs 24-hour averages and at least 3 pollutants, one of them PM2.5 or PM10, so an AQI made from forecast PM data is only an estimate. Colours and health text: CPCB daily NCR AQI bulletins (#00B050, #92D050, #FFFF00, #FFA500, #FF0000, #C00000), e.g. https://cpcb.gov.in/upload/Downloads/Delhi-NCR/NCR_AQI_Bulletin_2026_10_16.pdf (the old cpcb.nic.in links redirect to cpcb.gov.in). 'Moderate' is called 'Moderately Polluted' in the 2014 NAQI report."},
    grap: [{"stage":"Stage I","aqi":"201–300 (Poor)","actions":["Strict checks so that no garbage, leaves or crop waste is burnt in the open (in Delhi this is banned on every day of the year)","Machines sweep roads and spray water, and building sites must use water sprays and covers to stop dust","More CNG and electric buses and Metro trips, running more often, so that people can leave their cars at home","No coal or firewood in hotel and dhaba tandoors, limits on diesel generators, and checks that vehicles have a valid pollution-check (PUC) certificate"]},{"stage":"Stage II","aqi":"301–400 (Very Poor)","actions":["Parking fees go up, to make people think twice before taking the car","Roads are swept and sprinkled with water every day, with dust-settling sprays at dusty hotspots","Government offices in Delhi and nearby cities may start at different times, so that roads are less crowded"]},{"stage":"Stage III","aqi":"401–450 (Severe)","actions":["Non-essential construction and demolition work stops, and stone crushers and mines close","Older cars are restricted in Delhi and nearby districts: BS-III or older petrol and BS-IV or older diesel ('BS' means Bharat Stage, India's pollution rules for vehicles; a higher number is cleaner). Sonipat was added on 28 September 2026","Classes up to Class 5 can be held in hybrid mode (in school or online)","Offices may work with half their staff in office and the rest working from home"]},{"stage":"Stage IV","aqi":"Above 450 (Severe+)","actions":["Trucks are stopped from entering Delhi, except cleaner ones that run on CNG, LNG or electricity, or are BS-VI diesel","Construction stops even on big public projects like highways and flyovers","Classes 6 to 9 and 11 can move to hybrid mode","State governments may take extra emergency steps, like closing colleges or 'odd-even', where cars with odd and even number plates run on different days"]}],
    grapSource: "GRAP (Graded Response Action Plan) is run by CAQM only for Delhi-NCR — which includes UP's NCR districts such as Gautam Buddh Nagar (Noida) and Ghaziabad — so it does not apply in Gorakhpur or Lucknow. CAQM's Graded Response Action Plan (GRAP) for Delhi-NCR, as revised on 21 November 2025 and 28 September 2026 (Tribune, 22 Nov 2025; News On AIR, 29 Sep 2026; GKToday, 30 Sep 2026), and CPCB's daily 4 pm AQI bulletins. The AQI levels of the four stages did not change. The actions shown are simple examples, not the full list. Check caqm.nic.in again just before you travel (25 November 2026) for any change.",
    grapMentor: "GRAP was first notified under MoEFCC in 2017. Version used: CAQM's revised schedule of 13 Dec 2024 (approved by the Supreme Court on 12 Dec 2024), revised on 21 Nov 2025 (several actions moved one stage earlier: CNG/electric public transport augmentation with higher frequency and off-peak fares moved from Stage II to Stage I; staggered office timings from Stage III to Stage II; 50% work from home from Stage IV to Stage III; ratified at CAQM's 26th meeting on 22 Dec 2025; Tribune 22 Nov 2025; News On AIR 22 Nov 2025; TeamLease RegTech summary of the CAQM order). Modified again at CAQM's 30th Full Commission meeting on 28 Sep 2026: 48 actions (25 in Stage I, 8 in II, 10 in III, 5 in IV), repeated measures merged into Stage I, Stage III curbs on BS-III petrol and BS-IV diesel light vehicles extended to Sonipat, over 1,800 closure orders (News On AIR, 29 Sep 2026, https://newsonair.gov.in/caqm-approves-revised-grap-schedule-for-national-capital-region/). Diesel-generator and inter-state BS-IV bus actions moved from Stage II to Stage I and citizen-charter actions rose from 22 to 34 (ThePrint, 29 Sep 2026; GKToday, 30 Sep 2026). Removal of the essential-goods exemption for BS-IV and older goods vehicles (light/medium at Stage III, heavy at Stage IV): GKToday, 30 Sep 2026 only, so 'likely'. Thresholds unchanged: Stage I 201–300, II 301–400, III 401–450, IV above 450 (CAQM Stage-I order of 19 May 2026; CAQM press release of 29 May 2026; ETV Bharat, 16 Apr 2026). Supreme Court orders of 5 Dec 2024 briefly used AQI 350 and 400 as triggers; its order of 17 Feb 2025 relaxed these back to the approved schedule. Stages can be invoked in advance on IMD/IITM forecasts. From 1 to 17 Oct 2026, CPCB's 4 pm bulletins gave Delhi an AQI between 83 (12 Oct) and 187 (4 Oct), and no GRAP stage was invoked. CAQM then invoked Stage I across NCR on 21 October 2026 when Delhi's AQI reached about 245 ('Poor'); Delhi was 222 on 29 Oct and 60 on 30 Oct (CPCB bulletins), so check whether Stage I is still in force before the fair.",
    causes: [{"icon":"🚗","name":"Vehicles","text":"Petrol and diesel vehicles give out smoke with tiny particles and harmful gases on every day of the year. Slow, heavy traffic adds even more, because engines keep running while vehicles crawl."},{"icon":"🚧","name":"Road and building dust","text":"Dust from roads, open ground, and building and demolition sites is thrown into the air by wheels and wind."},{"icon":"🏭","name":"Factories and power plants","text":"Factories and power plants that burn coal and other fuels send smoke and gases into the air."},{"icon":"🔥","name":"Burning garbage and leaves","text":"Burning garbage, dry leaves and plastic in the open makes thick smoke. Burning wood, coal or dung cakes for cooking and heating adds smoke too."},{"icon":"🌾","name":"Burning crop stubble (parali)","text":"After the paddy (rice) harvest in October and November, some farmers in Punjab, Haryana and Uttar Pradesh burn the leftover straw, because they have only a short time before sowing wheat. The smoke adds to the haze over north India, including Delhi, and how far it travels changes from day to day with the wind."},{"icon":"❄️","name":"Cold air and temperature inversion","text":"On cold winter nights, a layer of cold air stays near the ground with warmer air above it. The warm layer works like a lid on a pot, so smoke and dust cannot rise and spread out."},{"icon":"🍃","name":"Slow winds","text":"In winter the wind is often weak. Without a good wind, smoke and dust are not blown away, so they pile up day after day."},{"icon":"🎆","name":"Firecrackers","text":"Firecrackers fill the air with smoke for a few days around festivals. In 2026, Diwali fell on Sunday, 8 November, about three weeks before the Vigyan Mela."}],
    pm: "PM means 'particulate matter': tiny bits of dust, smoke and soot floating in the air, measured in micrograms per cubic metre (µg/m³), which means millionths of a gram in a box of air 1 metre on each side. PM10 bits are 10 micrometres or smaller, about 7 times thinner than a human hair, which is about 70 micrometres thick. PM2.5 bits are 2.5 micrometres or smaller, about 30 times thinner than a hair, so they can go deep into our lungs.",
    health: ["Check the AQI of Gorakhpur every morning on the CPCB 'Sameer' app with an adult.","If the AQI is above 200 ('Poor' or worse), do not run, jog or play hard games outside, especially early morning and late evening.","If an adult or doctor says so, wear a close-fitting N95 mask on 'Poor' air days. A loose cloth mask does not stop tiny PM2.5 bits.","Drink enough water and eat seasonal fruits and vegetables during the trip.","If you feel breathless, cough a lot, have chest pain, feel dizzy or your eyes go red and watery, tell your teacher or parent right away.","Pack warm clothes: in Gorakhpur, November nights average about 15°C and days about 29°C (IMD 1991–2020), and late November is usually cooler than the monthly average.","Foggy mornings are possible in eastern UP, so trains can run late. Carry a snack, water and a sweater on the train.","Stay away from smoky places like burning garbage, heavy traffic and building sites."],
    healthSource: "MoHFW 'Advisory on Air Pollution and Health' with D.O. letter dated 01.11.2025 (Annexure II social media messages: check AQI, avoid outdoor exertion and morning/late-evening walks when AQI>200, close-fitted N95/N99 on poor-to-severe days, adequate water, see a doctor for breathlessness/chest discomfort/giddiness/eye irritation; Sameer app) — https://ncdc.mohfw.gov.in/uploads/pdf/air2.pdf ; Temperatures and fog days: IMD Gorakhpur climatological table 1991–2020 — https://mausam.imd.gov.in/lucknow/mcdata/Gorakhpur.pdf",
    healthMentor: "MoHFW/NCDC 'Health Advisory on Air Pollution' under the National Programme on Climate Change and Human Health (NPCCHH), dated October 2025 and sent to States/UTs on 01.11.2025 (https://ncdc.mohfw.gov.in/uploads/pdf/air2.pdf). Tips come from Annexure I (IEC messages) and Annexure II (social media messages): check the daily AQI; when AQI is above 200, avoid outdoor walks, jogging and hard exercise in the morning and late evening; keep doors and windows shut at those hours and ventilate, if necessary, between 12 noon and 4 pm; avoid busy roads and construction sites; a close-fitting N95/N99 mask is optional and helpful, while paper masks, handkerchiefs, scarves and cloth are not effective; drink enough water and eat fruit and vegetables; wash eyes and gargle with warm water; see a doctor for breathlessness, giddiness, cough, chest pain or red/watery eyes; people with lung or heart disease should keep prescribed medicines ready; wet mopping instead of sweeping. WHO India (SEARO) 'Advisory for Air Pollution': an N95 must fit tightly, and paper 'dust' masks, scarves and bandanas do not stop PM2.5 (https://cdn.who.int/media/docs/default-source/searo/india/news-pdf/advisory-for-air-pollution.pdf). CPCB's SAMEER app gives hourly National AQI updates (data.gov.in catalogue 'Sameer (National Air Quality Index)'). Caveat: a 2019 study (PMC6908682) notes that few masks are designed and tested for children, so an adult should check the fit.",
    modelLinks: [
      { id: "hz-ml-ev", comp: "ev", say: "An electric car has no exhaust pipe, so it gives out no smoke on the road. If more people in our cities, like Gorakhpur and Lucknow, drive electric cars and scooters, there can be less exhaust smoke in the air. Charging them with electricity from solar panels, like the ones in my Smart City, is even better.", hi: "इलेक्ट्रिक गाड़ी में धुआँ छोड़ने वाला पाइप ही नहीं होता, इसलिए सड़क पर उससे धुआँ नहीं निकलता। अगर उसे सौर ऊर्जा से चार्ज किया जाए — मेरे मॉडल में भी सोलर पैनल लगे हैं — तो और भी अच्छा है।", mentor: "Her EV charger 'sends electricity from the power supply'; the solar panels are separate (on three buildings), so never say her charger is solar-powered. OECD, 'Non-exhaust Particulate Emissions from Road Transport' (Dec 2020): EVs remove exhaust emissions, but tyre wear, road wear and road dust thrown back into the air remain big PM sources (regenerative braking cuts brake wear). In 2025, coal was India's biggest source of electricity (1,247 TWh; Argus, from CEA data, Jan 2026). So 'no tailpipe smoke' is correct and 'no pollution' is wrong. Delhi EV Policy 2026 (notified 1 Jul 2026) covers NEW registrations only (electric autos from 1 Jan 2027, electric two-wheelers from 1 Apr 2028), so never say petrol scooters are banned. Do NOT say 'EVs are pollution-free'.", source: "https://www.oecd.org/en/publications/non-exhaust-particulate-emissions-from-road-transport_4a4dc6ca-en.html ; https://www.argusmedia.com/en/news-and-insights/latest-market-news/2776029-india-posts-first-coal-power-output-fall-in-5-years", sourceDate: "Dec 2020; Jan 2026", confidence: "confirmed" },
      { id: "hz-ml-bus", comp: "bus", say: "One electric bus carries many people at once and gives out no tailpipe smoke, so fewer cars and less smoke are on the road. When Delhi's air turns Poor, Stage 1 of GRAP, Delhi's emergency plan for bad air, asks for more CNG and electric buses that run more often, so that more people can leave their cars at home.", hi: "एक इलेक्ट्रिक बस एक साथ बहुत से लोगों को ले जाती है और उससे धुआँ नहीं निकलता। जब दिल्ली की हवा 'ख़राब' हो जाती है, तो ख़राब हवा से निपटने की योजना (ग्रैप) के पहले चरण में ज़्यादा सीएनजी और इलेक्ट्रिक बसें चलाई जाती हैं, ताकि ज़्यादा लोग अपनी कारें घर पर छोड़ सकें।", mentor: "CAQM's revision of 21 Nov 2025 moved 'augmenting CNG and electric public transport fleets with higher service frequency' (with off-peak fares) from Stage II to Stage I (Tribune, 22 Nov 2025; TeamLease RegTech summary of the CAQM order). The 28 Sep 2026 revision merged repeated transport measures into Stage I (News On AIR, 29 Sep 2026; GKToday, 30 Sep 2026). Higher parking fees remain a Stage II (Very Poor) example. For UP, use the 12 June 2026 launch of 45 e-buses on her u-ebus-lucknow card. Do NOT give a 'one bus = X cars' number; none was verified.", source: "https://www.tribuneindia.com/news/delhi/caqm-makes-grap-more-stringent-in-delhi-ncr-amid-worsening-air-quality", sourceDate: "22 Nov 2025; 29 Sep 2026", confidence: "confirmed" },
      { id: "hz-ml-train", comp: "train", say: "My hydrogen train makes no diesel smoke, so a train like it adds no smoke to the haze along its route. The real one in Haryana runs to Sonipat, a city in the National Capital Region, where Delhi's GRAP plan for bad air also applies.", hi: "मेरी हाइड्रोजन ट्रेन से डीज़ल का धुआँ नहीं निकलता, इसलिए ऐसी ट्रेन अपने रास्ते में धुंध में धुआँ नहीं जोड़ती।", mentor: "The flag-off of 17 Jul 2026 on the 89 km Jind–Gohana–Sonipat route (IANS; DT Next) is in the games quiz (Jind–Sonipat). How clean hydrogen is depends on how it is made, so say 'no smoke from the train', never 'pollution-free'. If a judge asks: at the 28 Sep 2026 GRAP revision, Stage III curbs on BS-III petrol and BS-IV diesel cars were extended to Sonipat (News On AIR, 29 Sep 2026; GKToday, 30 Sep 2026). Do not mention ridership.", source: "https://newsonair.gov.in/caqm-approves-revised-grap-schedule-for-national-capital-region/", sourceDate: "17 Jul 2026; 29 Sep 2026", confidence: "confirmed" },
      { id: "hz-ml-solar", comp: "solar", say: "My solar panels make electricity from sunlight without burning anything. In 2025, coal was the biggest source of India's electricity, so more solar panels can mean less coal is burnt in power plants.", hi: "मेरे सोलर पैनल धूप से बिना कुछ जलाए बिजली बनाते हैं। 2025 में भारत की सबसे ज़्यादा बिजली कोयले से बनी थी, इसलिए जितने ज़्यादा सोलर पैनल होंगे, उतना कम कोयला जलाना पड़ सकता है।", mentor: "Coal-power generation in 2025 was 1,247 TWh, down 3.4% from 2024, India's first fall in coal power in five years (Argus, from CEA data, Jan 2026; CREA India Power Sector Review 2025). Haze and dust on panels cut their output: in a Duke University and IIT Gandhinagar study (Environmental Science & Technology Letters, 23 Jun 2017), efficiency jumped about 50% when panels left uncleaned for weeks were cleaned. So in smoggy weather, panels need regular cleaning. Don't quote percentages on stage. For UP, use her u-rooftop card (PM Surya Ghar, Sep 2026).", source: "https://www.argusmedia.com/en/news-and-insights/latest-market-news/2776029-india-posts-first-coal-power-output-fall-in-5-years ; https://energyandcleanair.org/wp/wp-content/uploads/2026/01/CREA_India-Power-Sector-Review-2025.pdf ; https://phys.org/news/2017-09-air-pollution-india-solar-success.html", sourceDate: "Jan 2026; 23 Jun 2017", confidence: "confirmed" },
      { id: "hz-ml-windmill", comp: "windmill", say: "My windmill shows wind energy: a real wind turbine makes electricity from moving air, without burning anything. Wind matters for haze too: a strong wind blows smoke away, while calm winter air lets it pile up.", hi: "मेरी पवनचक्की पवन ऊर्जा दिखाती है — असली पवन टरबाइन चलती हवा से बिना कुछ जलाए बिजली बनाती है। तेज़ हवा धुंध को उड़ा ले जाती है, जबकि सर्दियों की रुकी हुई हवा में धुआँ जमा होता रहता है।", mentor: "Her model windmill is not confirmed to make electricity (component note; card md-windmill-working), so say it 'shows wind energy'. CAQM's assessment of 30 Nov 2023: low temperatures caused frequent inversions that reduced the mixing height, and low-speed north-westerly winds brought pollutants in. Down To Earth: low wind speed and moisture trap pollutants. Example, only if asked: CAQM's press release of 29 May 2026 says Delhi's AQI 'recorded 207 on 28.05.2026 … improved to 123 on 29.05.2026', helped by 'strong winds accompanied by light rain', and GRAP Stage I was lifted. Do NOT say her windmill blows smog away: the wind point is about weather, the windmill point is about clean electricity.", source: "https://caqm.nic.in/WriteReadData/LINKS/30112023-f1eb783c-9a74-432a-9326-d06934b79cef.pdf ; https://www.downtoearth.org.in/news/air/rising-moisture-low-wind-speed-trap-pollutants-in-delhi-s-air-67276 ; CAQM press release, 29 May 2026 (caqm.nic.in)", sourceDate: "30 Nov 2023; 29 May 2026", confidence: "confirmed" },
      { id: "hz-ml-biogas", comp: "biogas", say: "Burning dung cakes, wood or crop waste makes smoke. My biogas plant shows a cleaner way: cow dung and kitchen waste rot in a closed tank and give gas for cooking, so less smoke goes into the air. Paddy straw can be turned into biogas in the same way, instead of being burnt in the fields.", hi: "गोबर के उपले, लकड़ी या फ़सल का कचरा जलाने से धुआँ होता है। मेरा बायोगैस प्लांट एक साफ़ तरीक़ा दिखाता है: गोबर और रसोई का कचरा बंद टैंक में सड़ता है और खाना पकाने की गैस बनती है, जिससे हवा में कम धुआँ जाता है। धान की पराली से भी इसी तरह बायोगैस बनाई जा सकती है, उसे खेतों में जलाने की जगह।", mentor: "The MoHFW/NCDC advisory (Oct 2025) lists burning of biomass (wood, dung cakes, crop residue) for cooking and heating as a household air-pollution source. Her biogas plant takes cow dung and kitchen waste (component script), not straw. Straw biogas: the VERBIO India plant at Bhutal Kalan, Lehragaga (Sangrur) began producing CBG in April 2022 and opened on 18 Oct 2022 (names not for stage). It was built for about 1 lakh tonnes of paddy straw a year (300 t a day) and about 33 t of CBG a day, with 8 digesters, plus fermented organic manure. Early output was far below capacity and no 2026 figure was found, so always say 'built to'. The cost is reported as Rs 220 or Rs 230 crore, so don't quote it. For UP, use the Dhuriapar (Gorakhpur) plant on u-gkp-cbg instead. Biogas is cleaner but not pollution-free, because burning it makes CO2 (her card bw-biogas-not-zero).", source: "https://verbio.de/en/press/news/press-releases/detail/verbio-betreibt-indiens-erste-und-groesste-bioraffinerie-zur-herstellung-von-biomethan-aus-stroh ; https://ncdc.mohfw.gov.in/uploads/pdf/air2.pdf", sourceDate: "Oct 2022; Oct 2025", confidence: "confirmed" },
      { id: "hz-ml-wte", comp: "wte", say: "Burning garbage in the open fills the air with smoke and tiny particles, and it is banned all over India. My plastic-to-energy machine shows that waste which cannot be recycled should go to a proper plant with pollution control. When the air turns Poor, Stage 1 of GRAP, Delhi's emergency plan for bad air, adds strict checks against open burning.", hi: "खुले में कूड़ा जलाने से हवा में धुआँ और बहुत छोटे कण भर जाते हैं, और पूरे भारत में इस पर रोक है। मेरी प्लास्टिक-से-ऊर्जा मशीन दिखाती है कि जो कचरा रीसायकल नहीं हो सकता, उसे प्रदूषण-नियंत्रण वाले सही प्लांट में भेजना चाहिए।", mentor: "Open burning is banned all year: NGT orders (2016) across India and the Delhi Environment Department order of Dec 2025 (Rs 5,000 on-the-spot fine; Delhi-only; don't quote the fine in Gorakhpur). GRAP Stage I (AQI 201–300) adds strict enforcement against open burning of biomass and municipal solid waste, with environmental compensation under NGT orders (CAQM Stage-I texts, 2023–2026). The MoHFW advisory (Oct 2025) asks people to avoid burning wood, leaves, crop residue and waste in the open. Never call her machine 'burning plastic'; say 'proper plant with pollution control'.", source: "CAQM GRAP Stage-I order, 19 May 2026 (caqm.nic.in); https://ncdc.mohfw.gov.in/uploads/pdf/air2.pdf ; https://www.tribuneindia.com/news/delhi/pay-5k-fine-for-burning-leaves-garbage-plastic-in-open", sourceDate: "19 May 2026; Oct 2025; 10 Dec 2025", confidence: "confirmed" },
      { id: "hz-ml-bins", comp: "bins", say: "When waste goes into the right dustbin, wet waste can become compost or biogas, and dry waste can be recycled. Then fewer garbage heaps are left lying around for someone to set on fire. So my five dustbins help keep smoke out of the air.", hi: "जब कचरा सही डस्टबिन में जाता है, तो गीले कचरे से खाद या बायोगैस बन सकती है और सूखा कचरा रीसायकल हो सकता है। तब ऐसे ढेर कम बचते हैं, जिनमें कोई आग लगा सके।", mentor: "The MoHFW/NCDC advisory (Oct 2025) lists 'refuse burning (garbage, horticulture wastes, crop residues)' among India's major outdoor air-pollution sources. The 2023 GRAP Stage-I text also asks for 'strict vigil' so that there is no burning at landfills and dumpsites ('likely' for the 2026 wording). Link to her four-bin and segregation cards, and don't claim segregation alone stops haze.", source: "https://ncdc.mohfw.gov.in/uploads/pdf/air2.pdf", sourceDate: "Oct 2025", confidence: "confirmed" },
      { id: "hz-ml-pots", comp: "pots", say: "My two flower pots stand for green spaces. In a real city, grass and plants cover bare soil, so less dust blows into the air. But plants alone cannot clean a whole city's air, so we have to stop smoke and dust where they start.", hi: "मेरे दो गमले हरियाली को दिखाते हैं। असली शहर में घास और पौधे खुली मिट्टी को ढक लेते हैं, जिससे कम धूल उड़ती है। पर अकेले पौधे पूरे शहर की हवा साफ़ नहीं कर सकते, इसलिए धुएँ और धूल को वहीं रोकना होगा, जहाँ से वे पैदा होते हैं।", mentor: "Her model has only TWO flower pots; don't describe gardens or trees that are not there. CAQM's July 2022 'Policy to curb air pollution in the NCR' lists greening and plantation under road and open-area dust control. Mentor-only ('likely', foreign studies: urban species in Beijing; UK trees, Univ. of Southampton): leaves can trap some particles, but rain can wash them off or wind can blow them back, and the effect at city scale is small compared with cutting emissions. Do NOT say 'plants clean the air' or repeat 'indoor plants purify air' claims.", source: "https://indiaenvironmentportal.org.in/reports-and-documents/policy-to-curb-air-pollution-in-the-national-capital-region", sourceDate: "Jul 2022", confidence: "confirmed" }
    ],
    updates: [
      { id: "hz-up-gkp-poor", comp: "general", say: "On 29 October 2026, Gorakhpur's AQI was 247. That is in the 'Poor' band. The main pollutant was PM2.5, tiny dust and smoke bits.", hi: "29 अक्टूबर 2026 को गोरखपुर का AQI 247 था, यानी 'खराब' श्रेणी। मुख्य प्रदूषक PM2.5 था — धूल और धुएँ के बहुत छोटे कण।", mentor: "CPCB daily bulletin, 4 PM, 24-hour average. Gorakhpur has only one monitoring station, so the city number comes from 1 station. It had also reached 205 (Poor) on 24 Oct 2026.", source: "https://cpcb.gov.in/upload/Downloads/AQI_Bulletin_20261029.pdf", sourceDate: "2026-10-29", confidence: "confirmed" },
      { id: "hz-up-gkp-better", comp: "general", say: "Air can change fast! Gorakhpur's AQI fell to 73 ('Satisfactory') on 30 October 2026 and 55 on 31 October 2026.", hi: "हवा जल्दी बदल सकती है! 30 अक्टूबर 2026 को गोरखपुर का AQI घटकर 73 ('संतोषजनक') और 31 अक्टूबर को 55 हो गया।", mentor: "Same CPCB bulletin series (30 and 31 Oct 2026). Do not say why it improved for Gorakhpur; rain was reported in Delhi on that day, not confirmed for Gorakhpur. Point: always check on the day.", source: "https://cpcb.gov.in/upload/Downloads/AQI_Bulletin_20261031.pdf", sourceDate: "2026-10-31", confidence: "confirmed" },
      { id: "hz-up-lko", comp: "general", say: "Lucknow's air was mostly 'Moderate' in late October 2026: 144 on 24 Oct, 163 on 25 Oct and 112 on 29 Oct. Then it improved to 64 ('Satisfactory') on 30 Oct and 43 ('Good') on 31 Oct.", hi: "अक्टूबर 2026 के आखिर में लखनऊ की हवा ज़्यादातर 'मध्यम' रही: 24 अक्टूबर को 144, 25 को 163 और 29 को 112। फिर 30 अक्टूबर को 64 ('संतोषजनक') और 31 अक्टूबर को 43 ('अच्छी') हो गई।", mentor: "CPCB bulletins 24, 25, 29, 31 Oct 2026. Lucknow uses up to 6 stations (only 4 of 6 reported on 31 Oct).", source: "https://cpcb.gov.in/upload/Downloads/AQI_Bulletin_20261025.pdf", sourceDate: "2026-10-25", confidence: "confirmed" },
      { id: "hz-up-chd", comp: "general", say: "Back home, Chandigarh's air stayed 'Satisfactory' all through late October 2026, between 57 and 74.", hi: "घर पर, चंडीगढ़ की हवा अक्टूबर 2026 के आखिर तक 'संतोषजनक' रही, AQI 57 से 74 के बीच।", mentor: "CPCB bulletins 14, 21, 24, 25, 29, 30, 31 Oct 2026: values 58, 65, 63, 74, 61, 57, 68.", source: "https://cpcb.gov.in/upload/Downloads/AQI_Bulletin_20261030.pdf", sourceDate: "2026-10-30", confidence: "confirmed" },
      { id: "hz-up-ncr", comp: "general", say: "UP's cities near Delhi had worse air. On 29 October 2026 Noida was 222 and Greater Noida 214 — both 'Poor'.", hi: "दिल्ली के पास के यूपी शहरों की हवा ज़्यादा खराब थी। 29 अक्टूबर 2026 को नोएडा 222 और ग्रेटर नोएडा 214 पर था — दोनों 'खराब'।", mentor: "CPCB bulletin 29 Oct 2026 (Ghaziabad was 147 that day; it was 223 on 21 Oct). These NCR districts come under GRAP; Gorakhpur and Lucknow do not.", source: "https://cpcb.gov.in/upload/Downloads/AQI_Bulletin_20261029.pdf", sourceDate: "2026-10-29", confidence: "confirmed" },
      { id: "hz-up-fires26", comp: "biogas", say: "Satellites counted 65 farm fires in Uttar Pradesh from 15 September to 6 October 2026. Clouds may have hidden some fires.", hi: "उपग्रहों ने 15 सितंबर से 6 अक्टूबर 2026 तक उत्तर प्रदेश में खेतों में आग की 65 घटनाएँ गिनीं। बादलों के कारण कुछ आग छिप भी सकती हैं।", mentor: "CREAMS/IARI bulletin of 6 Oct 2026, reported by Down To Earth (7 Oct 2026). MP had 118 and Punjab 88 in the same period. No official UP season total for late October 2026 was found, so do not give one.", source: "https://www.downtoearth.org.in/air/stubble-burning-season-begins-madhya-pradesh-ranks-first-punjab-second-and-uttar-pradesh-third", sourceDate: "2026-10-07", confidence: "confirmed" },
      { id: "hz-up-fires25", comp: "biogas", say: "Last year, from 15 September to 30 November 2025, satellites counted 7,290 paddy-straw fires in Uttar Pradesh — second highest among the states.", hi: "पिछले साल 15 सितंबर से 30 नवंबर 2025 तक उत्तर प्रदेश में धान की पराली जलाने की 7,290 घटनाएँ उपग्रहों ने गिनीं — राज्यों में दूसरे नंबर पर।", mentor: "CREAMS data as quoted by Down To Earth (Oct 2026) and Daily Jagran. Madhya Pradesh was first (17,067). Up to 21 Oct 2025 UP had 660 fires (DTE, 22 Oct 2025). A news table (TOI via Earth5R) put UP at about 190 by 22 Oct 2026 — if true, fewer than last year at the same time, but this is a single secondary source.", source: "https://www.downtoearth.org.in/air/stubble-burning-season-begins-madhya-pradesh-ranks-first-punjab-second-and-uttar-pradesh-third", sourceDate: "2026-10-07", confidence: "confirmed" },
      { id: "hz-up-cbg", comp: "biogas", say: "In Gorakhpur, an Indian Oil plant can turn 200 tonnes of farm waste a day — like paddy straw and cow dung — into about 20 tonnes of bio-gas (CBG) fuel. Straw becomes fuel, not smoke!", hi: "गोरखपुर में इंडियन ऑयल का एक संयंत्र रोज़ 200 टन खेती का कचरा — जैसे धान की पराली और गोबर — लेकर लगभग 20 टन बायो-गैस (CBG) ईंधन बना सकता है। पराली धुआँ नहीं, ईंधन बनती है!", mentor: "IOCL CBG plant at Dhuriyapar, Gorakhpur, inaugurated by CM Yogi Adityanath in March 2024; cost about Rs 165 crore; also makes organic manure. Confirmed by Indian Chemical News and Bioenergy Times. These are design capacities, not daily actual output.", source: "https://www.indianchemicalnews.com/gas/lite/indian-oils-second-cbg-plant-manufactured-by-ceid-inaugurated-in-gorakhpur-20984", sourceDate: "2024-03-12", confidence: "confirmed" },
      { id: "hz-up-svs", comp: "general", say: "Lucknow, the capital of Uttar Pradesh, came 1st among big cities (over 10 lakh people) in Swachh Vayu Sarvekshan 2026, a national clean-air effort ranking.", hi: "उत्तर प्रदेश की राजधानी लखनऊ स्वच्छ वायु सर्वेक्षण 2026 में 10 लाख से ज़्यादा आबादी वाले शहरों में पहले स्थान पर आया।", mentor: "Announced 7 Sep 2026 (Swachh Vayu Diwas). Lucknow 198/200, Indore 197, Jabalpur 195. It ranks city efforts under NCAP, not how clean the air is every day.", source: "https://www.businesstoday.in/india/story/swachh-vayu-sarvekshan-2026-lucknow-beats-indore-by-a-single-point-to-top-indias-2026-clean-air-survey-554298-2026-09-09", sourceDate: "2026-09-09", confidence: "confirmed" },
      { id: "hz-up-fog", comp: "train", say: "Fog is common in eastern UP in winter. On average Gorakhpur gets about 3 foggy days in November, but about 11 in December.", hi: "पूर्वी यूपी में सर्दियों में कोहरा आम है। औसतन गोरखपुर में नवंबर में लगभग 3 दिन और दिसंबर में लगभग 11 दिन कोहरा रहता है।", mentor: "IMD Gorakhpur climatological table 1991–2020: mean fog days Nov 2.7, Dec 10.7, Jan 12.3. Fog can delay trains, so keep buffer time.", source: "https://mausam.imd.gov.in/lucknow/mcdata/Gorakhpur.pdf", sourceDate: "2026-10-31", confidence: "confirmed" },
      { id: "hz-up-ncap", comp: "factory", say: "Gorakhpur is one of the UP cities in India's National Clean Air Programme (NCAP), which asks cities to make plans to cut dust and smoke.", hi: "गोरखपुर उत्तर प्रदेश के उन शहरों में है जो राष्ट्रीय स्वच्छ वायु कार्यक्रम (NCAP) में शामिल हैं। इसमें शहर धूल और धुआँ कम करने की योजना बनाते हैं।", mentor: "Gorakhpur appears in NGT filings on NCAP non-attainment cities (OA 681/2018, quarterly progress report of Gorakhpur City) and in a Rajya Sabha reply. Counts of UP NCAP cities differ (16 vs 17), so avoid giving the number.", source: "https://www.greentribunal.gov.in/sites/default/files/news_updates/QPR%20of%20Gorakhpur%20City%20Final%20in%20OA%20No.%20681%20of%202018.pdf", sourceDate: "2026-10-31", confidence: "likely" }
    ],
    stage: [
      { id: "hz-up-st-biogas", comp: "biogas", say: "My biogas pit turns waste into gas. In Gorakhpur, the city I am visiting, a big Indian Oil plant does the same with 200 tonnes of farm waste a day, including paddy straw!", hi: "मेरा बायोगैस गड्ढा कचरे से गैस बनाता है। जिस गोरखपुर शहर में मैं आई हूँ, वहाँ इंडियन ऑयल का बड़ा संयंत्र रोज़ 200 टन खेती के कचरे, जैसे पराली, से यही करता है!", mentor: "Design capacity, plant opened March 2024.", source: "https://www.indianchemicalnews.com/gas/lite/indian-oils-second-cbg-plant-manufactured-by-ceid-inaugurated-in-gorakhpur-20984", sourceDate: "2024-03-12", confidence: "confirmed" },
      { id: "hz-up-st-burn", comp: "bins", say: "When straw or garbage is burned, smoke fills the air. On 29 October 2026, Gorakhpur's air was 'Poor' at AQI 247. Sorting waste in my bins means less burning.", hi: "जब पराली या कचरा जलाया जाता है तो हवा में धुआँ भर जाता है। 29 अक्टूबर 2026 को गोरखपुर की हवा AQI 247 पर 'खराब' थी। मेरे कूड़ेदानों में कचरा अलग करने से जलाना कम होता है।", mentor: "Do not claim burning caused that exact reading; say burning adds smoke.", source: "https://cpcb.gov.in/upload/Downloads/AQI_Bulletin_20261029.pdf", sourceDate: "2026-10-29", confidence: "confirmed" },
      { id: "hz-up-st-lko", comp: "india", say: "Cities can improve! Lucknow came first among big cities in Swachh Vayu Sarvekshan 2026 for its clean-air work.", hi: "शहर सुधर सकते हैं! स्वच्छ वायु सर्वेक्षण 2026 में साफ हवा के काम के लिए लखनऊ बड़े शहरों में पहले नंबर पर आया।", mentor: "Ranking of efforts, not daily AQI.", source: "https://www.businesstoday.in/india/story/swachh-vayu-sarvekshan-2026-lucknow-beats-indore-by-a-single-point-to-top-indias-2026-clean-air-survey-554298-2026-09-09", sourceDate: "2026-09-09", confidence: "confirmed" },
      { id: "hz-up-st-wte", comp: "wte", say: "Waste that cannot be recycled should go to a waste-to-energy plant, not to an open fire. Open burning makes PM2.5, the tiny particles that made Gorakhpur's air 'Poor' in October 2026.", hi: "जो कचरा रीसायकल नहीं हो सकता, उसे खुले में जलाने के बजाय कचरे से ऊर्जा वाले संयंत्र में जाना चाहिए। खुले में जलाने से PM2.5 बनता है — वही छोटे कण जिनसे अक्टूबर 2026 में गोरखपुर की हवा 'खराब' हुई।", mentor: "PM2.5 was the prominent pollutant on 24 and 29 Oct 2026 in Gorakhpur.", source: "https://cpcb.gov.in/upload/Downloads/AQI_Bulletin_20261024.pdf", sourceDate: "2026-10-24", confidence: "confirmed" },
      { id: "hz-up-st-ev", comp: "ev", say: "My electric car and bus make no smoke from a tailpipe. Fewer smoky vehicles means cleaner air for cities like Lucknow and Gorakhpur.", hi: "मेरी इलेक्ट्रिक कार और बस के पाइप से धुआँ नहीं निकलता। कम धुएँ वाले वाहन मतलब लखनऊ और गोरखपुर जैसे शहरों के लिए साफ हवा।", mentor: "Say 'no tailpipe smoke', not 'zero pollution' (power plants and road dust still matter).", source: "https://ncdc.mohfw.gov.in/uploads/pdf/air2.pdf", sourceDate: "2025-11-01", confidence: "confirmed" }
    ]
  },

  /* ---------------- 🏙️ UP & GORAKHPUR UPDATES (key "delhi" kept for the page id) ----------------
     Fact-checked Clean India news from Uttar Pradesh for the national Vigyan Mela, Gorakhpur (27–29 Nov 2026).
     comp = the model part it links to ("general" = whole model). top = learn these by heart.
     "say" is the stage line; "mentor" has exact figures, caveats and what NOT to say. */
  delhi: {
    region: "Uttar Pradesh",
    checked: "31 October 2026",
    intro: "Avni, these are facts from Uttar Pradesh, the state where you will present on 27-29 November 2026. Pick two or three 'top' lines and connect each to a part of your model; always say the year, and read the 'mentor' note so you don't say more than the facts. If a judge asks about newer results, say 'the latest I checked was October 2026'.",
    opener: "My model shows how waste can become energy, and Uttar Pradesh is already doing this: near Gorakhpur, at Dhuriapar, a biogas plant opened in March 2024 that turns paddy straw and cow dung into gas and manure. I want to show how every home, village and city can do the same.",
    items: [
      { id: "u-ss-lucknow", comp: "bins", area: "Campaigns & awards", top: true, say: "In Swachh Survekshan 2024-25, Lucknow was named the 3rd cleanest city among cities with more than 10 lakh people. The awards were given on 17 July 2025, and Lucknow was the first city in Uttar Pradesh to get a 7-star Garbage Free City rating.", hi: "स्वच्छ सर्वेक्षण 2024-25 में लखनऊ 10 लाख से ज़्यादा आबादी वाले शहरों में तीसरे नंबर पर आया। 17 जुलाई 2025 को पुरस्कार मिले, और लखनऊ 7-स्टार कचरा-मुक्त शहर रेटिंग पाने वाला यूपी का पहला शहर बना।", link: "My five dustbins show the first step every 7-star city needs: separating waste at home.", mentor: "Official PIB award list (17 July 2025): Lucknow is No. 3 in 'More than 10 lakh' after Ahmedabad and Bhopal (Presidential award). 7-star GFC 'first in UP' is from PTI and Drishti, not the PIB list. Do NOT say 'cleanest city in India' (Indore is in the separate Super Swachh League). As of 31 Oct 2026 I could not find Swachh Survekshan 2025-26 results; if they come out before 27 Nov 2026, check and update, else say '2024-25 results'.", source: "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/jul/doc2025717588801.pdf", sourceDate: "2025-07-17" },
      { id: "u-ss-gorakhpur", comp: "citytoilets", area: "Campaigns & awards", top: true, say: "Gorakhpur, the city hosting this national fair, won a national award in Swachh Survekshan 2024-25 for keeping sanitation workers safe. It is called the 'Safaimitra Surakshit Shehar' award, given on 17 July 2025.", hi: "इस मेले का मेज़बान शहर गोरखपुर, स्वच्छ सर्वेक्षण 2024-25 में सफ़ाई कर्मचारियों की सुरक्षा के लिए राष्ट्रीय पुरस्कार जीत चुका है। इसे 'सफ़ाईमित्र सुरक्षित शहर' पुरस्कार कहते हैं, जो 17 जुलाई 2025 को मिला।", link: "My city toilets and drains need safe cleaning, and the people who clean them deserve safety too.", mentor: "PIB list shows Gorakhpur among 'Ministerial Awardees: Special Category'; PTI and Drishti say 3rd in Safaimitra Surakshit Shehar. Its rank in the 3-10 lakh category differs between sources (3rd vs 4th), so do NOT give a number; 'among the top five cities of its size' is safe. Drishti and News24 report a 5-star Garbage Free City rating for Gorakhpur; say it only if asked.", source: "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/jul/doc2025717588801.pdf", sourceDate: "2025-07-17" },
      { id: "u-ss-noida", comp: "general", area: "Campaigns & awards", top: false, say: "In Swachh Survekshan 2024-25, Noida in Uttar Pradesh was placed in the new 'Super Swachh League' for cities with 3 to 10 lakh people. This league is for cities that have stayed at the top again and again.", hi: "स्वच्छ सर्वेक्षण 2024-25 में उत्तर प्रदेश का नोएडा 3 से 10 लाख आबादी वाले शहरों की नई 'सुपर स्वच्छ लीग' में शामिल हुआ।", link: "Clean cities like Noida keep winning because they follow the same steps my model shows: segregate, process, reuse.", mentor: "PIB list: Noida is first-listed in Super Swachh League, 3-10 lakh category (17 July 2025). Do NOT call it 'India's cleanest city'.", source: "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/jul/doc2025717588801.pdf", sourceDate: "2025-07-17" },
      { id: "u-prayagraj-ganga", comp: "ganesha", area: "Rivers, lakes & water", top: false, say: "In Swachh Survekshan 2024-25, Prayagraj in Uttar Pradesh was named the cleanest Ganga town. Keeping river towns clean helps keep the Ganga clean.", hi: "स्वच्छ सर्वेक्षण 2024-25 में उत्तर प्रदेश का प्रयागराज सबसे स्वच्छ गंगा शहर चुना गया। नदी किनारे के शहर साफ़ रहें तो गंगा भी साफ़ रहती है।", link: "My clay Ganesha dissolves safely, so festivals do not pollute rivers like the Ganga.", mentor: "Reported by PTI (18 July 2025) and Drishti IAS. Prayagraj also got a special award for Swachh Mahakumbh 2025 (PIB list). Do not say the Ganga is 'fully clean'.", source: "https://www.theweek.in/wire-updates/national/2025/07/18/des106-up-cleanliness-ld-survey.html", sourceDate: "2025-07-18" },
      { id: "u-lko-zero-dump", comp: "bins", area: "Segregation & compost", top: true, say: "In January 2026, Lucknow became the first city in Uttar Pradesh to scientifically process all of its fresh municipal waste, so no new waste is dumped. It has three plants, each handling 700 tonnes a day, about 2,100 tonnes a day in all.", hi: "जनवरी 2026 में लखनऊ उत्तर प्रदेश का पहला ऐसा शहर बना जो अपना सारा ताज़ा कचरा वैज्ञानिक तरीके से प्रोसेस करता है। वहाँ 700-700 टन रोज़ के तीन प्लांट हैं, यानी लगभग 2,100 टन रोज़।", link: "This works only because waste is separated first, just like in my five dustbins.", mentor: "Called 'zero fresh waste dump city' under SBM-Urban (Drishti 23 Jan 2026; iamrenew Jan 2026, based on MoHUA). Lucknow makes about 2,000 tonnes of waste a day; about 55% organic, 45% inorganic. The third 700 TPD unit at Shivri opened around mid-2025. This is about FRESH waste only; old (legacy) waste is a separate story. Do NOT say 'Lucknow has zero garbage'.", source: "https://www.drishtiias.com/state-pcs-current-affairs/lucknow-becomes-uttar-pradeshs-first-zero-fresh-waste-dump-city/print_manually", sourceDate: "2026-01-23" },
      { id: "u-lko-legacy", comp: "general", area: "Garbage & landfills", top: false, say: "Lucknow had about 18.5 lakh tonnes of old waste piled up, mostly at Shivri. By January 2026, about 12.86 lakh tonnes had been cleared by sorting it with machines, called biomining.", hi: "लखनऊ में लगभग 18.5 लाख टन पुराना कचरा जमा था, ज़्यादातर शिवरी में। जनवरी 2026 तक लगभग 12.86 लाख टन कचरा मशीनों से छाँटकर, यानी बायोमाइनिंग से, हटाया जा चुका था।", link: "Old garbage mountains form when waste is not separated; my model shows how to stop new ones.", mentor: "Figures from iamrenew (Jan 2026) and an NGT progress report by Lucknow MC. Over 25 acres of land reclaimed (iamrenew). About 5-6 lakh tonnes were still left at that time: do NOT say 'Shivri is fully cleared'.", source: "https://www.iamrenew.com/environment/lucknow-is-states-first-zero-fresh-waste-dump-city/amp/", sourceDate: "2026-01-23" },
      { id: "u-lko-wte-plan", comp: "wte", area: "Biogas & waste-to-energy", top: false, say: "Lucknow Municipal Corporation plans a 15 megawatt waste-to-energy plant at Shivri. It will burn fuel made from dry, non-recyclable waste to make electricity.", hi: "लखनऊ नगर निगम शिवरी में 15 मेगावाट का कचरे से बिजली बनाने वाला प्लांट लगाने की योजना बना रहा है। इसमें सूखे, दोबारा इस्तेमाल न हो सकने वाले कचरे से बना ईंधन इस्तेमाल होगा।", link: "My plastic-to-energy machine shows the same idea: waste that cannot be recycled can still give energy.", mentor: "This is a PLAN, not a running plant (Drishti 23 Jan 2026; iamrenew says it would use 1,000-1,200 tonnes of RDF a day). Today the RDF (refuse-derived fuel) goes to cement and paper factories. Do NOT say 'Lucknow makes electricity from garbage'.", source: "https://www.drishtiias.com/state-pcs-current-affairs/lucknow-becomes-uttar-pradeshs-first-zero-fresh-waste-dump-city/print_manually", sourceDate: "2026-01-23" },
      { id: "u-gkp-cbg", comp: "biogas", area: "Biogas & waste-to-energy", top: true, say: "At Dhuriapar in Gorakhpur district, Indian Oil opened a compressed biogas plant in March 2024. It uses about 200 tonnes a day of paddy straw, sugar-mill press mud and cow dung to make gas fuel and organic manure.", hi: "गोरखपुर ज़िले के धुरियापार में मार्च 2024 में इंडियन ऑयल का कंप्रेस्ड बायोगैस प्लांट शुरू हुआ। यह रोज़ लगभग 200 टन धान की पराली, चीनी मिल की प्रेस मड और गोबर से गैस ईंधन और जैविक खाद बनाता है।", link: "My biogas plant is a small version of this: gobar and wet waste become gas and manure.", mentor: "Inaugurated in March 2024 (reports say 8 or 12 March; say only 'March 2024'). 200 TPD paddy-straw-based plant (Bioenergy Times, 14 Aug 2026: operator Solapur Bioenergy Systems got a 2nd O&M contract, 13 Aug 2026 to 12 Aug 2028, so it appears to be running). 'About 20 tonnes CBG a day' is a design capacity from trade news; avoid giving it as actual output. Stubble-burning cut is a stated aim, not a measured result.", source: "https://etvbharat.com/en/!bharat/gorakhpurs-dakshinanchal-area-ushered-in-industrialisation-era-yogi-enn24030807177", sourceDate: "2024-03-08" },
      { id: "u-gkp-mrf", comp: "bins", area: "Segregation & compost", top: false, say: "Gorakhpur Municipal Corporation runs 5 Material Recovery Facilities where dry waste is sorted, with a total capacity of 190 tonnes a day. It also has a 50 tonnes-a-day plant to recycle construction and demolition waste.", hi: "गोरखपुर नगर निगम के 5 मटीरियल रिकवरी सेंटर हैं जहाँ सूखा कचरा छाँटा जाता है, जिनकी कुल क्षमता 190 टन रोज़ है। मलबे को रीसायकल करने का 50 टन रोज़ का प्लांट भी है।", link: "My blue dry-waste bin feeds exactly this kind of sorting centre.", mentor: "From the official Gorakhpur Nagar Nigam SWM page (undated; read 31 Oct 2026). Also lists 7 C&D collection centres and 2 mechanised transfer stations of 200 TPD each. Say 'according to the Nagar Nigam website'.", source: "https://gorakhpurnagarnigam.up.gov.in/swmpage.aspx", sourceDate: "2026-10-31" },
      { id: "u-gkp-compost", comp: "pots", area: "Segregation & compost", top: false, say: "Gorakhpur Municipal Corporation lists 10 pit-composting units and 2 vermicompost units for wet waste. Together they can handle about 215 tonnes of wet waste a day.", hi: "गोरखपुर नगर निगम के पास गीले कचरे के लिए 10 पिट कंपोस्ट यूनिट और 2 केंचुआ खाद यूनिट हैं। मिलकर ये रोज़ लगभग 215 टन गीला कचरा संभाल सकती हैं।", link: "My compost pots turn kitchen waste into manure the same way, just smaller.", mentor: "Official page: 9 units x 15 TPD + 1 x 20 TPD pit composting + 2 x 30 TPD vermicompost = 215 TPD capacity (capacity, not actual daily amount). Undated page, read 31 Oct 2026.", source: "https://gorakhpurnagarnigam.up.gov.in/swmpage.aspx", sourceDate: "2026-10-31" },
      { id: "u-gkp-charcoal", comp: "wte", area: "Biogas & waste-to-energy", top: false, say: "Gorakhpur is setting up a plant at Suthani, Sahjanwa, with NTPC to turn city waste into 'green charcoal' fuel. It is planned to handle 500 tonnes of waste a day. Its start was delayed by technical problems in 2026, so say it is being set up, not that it is working.", hi: "गोरखपुर में एनटीपीसी के साथ सहजनवा के सुथनी में शहर के कचरे से 'ग्रीन चारकोल' ईंधन बनाने का प्लांट लगाया जा रहा है। इसकी योजना रोज़ 500 टन कचरा संभालने की है।", link: "Like my plastic-to-energy machine, it tries to turn leftover waste into fuel.", mentor: "MoU between Gorakhpur Nagar Nigam and NTPC (NTPC investment reported as Rs 255 crore). An NGT compliance report said it was 'under trial' with targets of Dec 2025 then May 2026; the Nagar Nigam page says 'under construction'. I could NOT confirm it is running by 31 Oct 2026, so say 'being set up'. The earlier claim 'India's first integrated waste management city by Sept 2025' was a target: do not repeat it as done.", source: "https://gorakhpurnagarnigam.up.gov.in/swmpage.aspx", sourceDate: "2026-10-31" },
      { id: "u-ramgarh", comp: "filter", area: "Rivers, lakes & water", top: false, say: "Ramgarh Taal in Gorakhpur is a big lake that has been officially notified as a protected wetland. Sewage treatment plants were built under a national lake scheme, but reports said dirty water was still entering it in 2022.", hi: "गोरखपुर का रामगढ़ ताल एक बड़ी झील है जिसे संरक्षित वेटलैंड घोषित किया गया है। राष्ट्रीय झील योजना में सीवेज ट्रीटमेंट प्लांट बने, पर 2022 की रिपोर्ट के अनुसार गंदा पानी फिर भी उसमें जा रहा था।", link: "My water filter and factory treatment plant show why dirty water must be cleaned before it reaches a lake.", mentor: "Down To Earth, 22 Sep 2022: included in National Lake Conservation Plan in 2011 (Rs 124.3 crore allocated), STPs of 15 and 30 MLD, sewage from about a dozen drains still entering. Notified wetland under Wetlands Rules 2017 (CPCB reply to NGT; MoEFCC wetland page). NOT a Ramsar site as far as I could check. Do not say it is 'fully clean' or 'polluted now' since no 2026 data found.", source: "https://www.downtoearth.org.in/news/water/this-up-lake-continues-to-stink-despite-over-rs-300-cr-spent-on-cleaning-it-85074", sourceDate: "2022-09-22" },
      { id: "u-odf-plus", comp: "villagetoilet", area: "Campaigns & awards", top: true, say: "Under Swachh Bharat Mission (Grameen), the UP Government said in September 2023 that all its villages had reached ODF Plus. ODF Plus means toilets plus proper handling of solid and liquid waste in the village.", hi: "स्वच्छ भारत मिशन (ग्रामीण) में यूपी सरकार ने सितंबर 2023 में बताया कि उसके सभी गाँव ओडीएफ प्लस बन गए। ओडीएफ प्लस का मतलब है शौचालय के साथ-साथ गाँव के ठोस और गीले कचरे का सही प्रबंधन।", link: "My village toilet and biogas plant show what an ODF Plus village looks like.", mentor: "Sept 2023 (Drishti 30 Sep 2023; Krishi Jagran; The Statesman): 95,767 villages ODF Plus. Later Parliament data (as of 7 Feb 2025) lists about 94,200 ODF Plus villages in UP, the most of any state, so totals vary by date. Safe line: 'UP has the most ODF Plus villages in India' (data.gov.in, Feb 2025). Do not say 'every village is perfectly clean'.", source: "https://www.drishtiias.com/state-pcs-current-affairs/uttar-pradesh-achieves-plus-coverage-under-swachh-bharat-gission-gramin/print_manually", sourceDate: "2023-09-30" },
      { id: "u-mahakumbh", comp: "citytoilets", area: "Festivals", top: true, say: "For Mahakumbh 2025 in Prayagraj, about 1.5 lakh toilets were set up for pilgrims. In Swachh Survekshan 2024-25, a special award was given for the 'Swachh Mahakumbh 2025' effort.", hi: "प्रयागराज के महाकुंभ 2025 में श्रद्धालुओं के लिए लगभग 1.5 लाख शौचालय लगाए गए। स्वच्छ सर्वेक्षण 2024-25 में 'स्वच्छ महाकुंभ 2025' के लिए विशेष पुरस्कार भी मिला।", link: "My city toilets show that big crowds stay healthy only when there are enough clean toilets.", mentor: "PIB award list (17 July 2025) has 'Recognition of Special Initiative of Swachh Mahakumbh 2025'. Toilet numbers vary: planned 'over 1.5 lakh' (newsonair 24 Jan 2025), kumbh.gov.in listed 1.45 lakh; say 'about 1.5 lakh'. Do not claim a world record.", source: "https://www.newsonair.gov.in/mahakumbh-sanitation-and-hygiene-top-priority-of-govt", sourceDate: "2025-01-24" },
      { id: "u-plastic-ban", comp: "plasticman", area: "Garbage & landfills", top: false, say: "Uttar Pradesh banned polythene bags and plastic cups from 15 July 2018. In 2022, India also banned many single-use plastic items across the country.", hi: "उत्तर प्रदेश ने 15 जुलाई 2018 से पॉलीथीन थैलियों और प्लास्टिक कपों पर रोक लगाई। 2022 में पूरे भारत में भी कई सिंगल-यूज़ प्लास्टिक चीज़ों पर रोक लगी।", link: "Plastic that is still collected can be used in plastic roads, like my plastic man shows.", mentor: "Arab News 6 July 2018 and Asian Age/HT 7 July 2018: UP ban from 15 July 2018. National single-use plastic ban from 1 July 2022 (MoEFCC). Enforcement is patchy (fines still reported in Lucknow, Dec 2025) - do NOT say 'UP has no plastic now'.", source: "https://www.arabnews.com/node/1334496/world", sourceDate: "2018-07-06" },
      { id: "u-solar-policy", comp: "solar", area: "Solar & clean energy", top: false, say: "The UP Government's Solar Energy Policy 2022 set a target of 22,000 megawatts of solar power by 2026-27. This includes solar parks, rooftop solar and solar pumps for farmers.", hi: "यूपी सरकार की सौर ऊर्जा नीति 2022 में 2026-27 तक 22,000 मेगावाट सौर बिजली का लक्ष्य रखा गया। इसमें सोलर पार्क, छत पर सोलर और किसानों के सोलर पंप शामिल हैं।", link: "My solar panels are a tiny piece of this big target.", mentor: "Invest UP official page; cabinet approval 16 Nov 2022 (ETV Bharat, Drishti 17 Nov 2022). Split: 14,000 MW solar parks, 4,500 MW residential rooftop, 1,500 MW non-residential rooftop, 2,000 MW PM-KUSUM. It is a TARGET; progress figures conflict, so do not claim it is reached.", source: "https://invest.up.gov.in/solar-energy-policy-2022/", sourceDate: "2022-11-16" },
      { id: "u-rooftop", comp: "solar", area: "Solar & clean energy", top: true, say: "Under PM Surya Ghar scheme, Uttar Pradesh put up 74,796 rooftop solar plants in September 2026, the most of any state that month. By early October 2026, UP had more than 8.5 lakh rooftop solar plants under the scheme.", hi: "पीएम सूर्य घर योजना में उत्तर प्रदेश ने सितंबर 2026 में 74,796 छत वाले सोलर प्लांट लगाए, जो उस महीने किसी भी राज्य से ज़्यादा थे। अक्टूबर 2026 की शुरुआत तक यूपी में इस योजना के 8.5 लाख से ज़्यादा रूफ़टॉप सोलर प्लांट लग चुके थे।", link: "My solar panels on houses show how homes can make their own clean electricity.", mentor: "UNI 2 Oct 2026 (September: 74,796; AP 69,813; Maharashtra 60,907). UNI 5 Oct 2026: 'more than 8,76,500', first in cumulative, ahead of Gujarat. Another report: 8,67,755 as of 30 Sep 2026. These are state-supplied figures; '8.5 lakh+' is the safe rounding. Check before 27 Nov 2026 if a newer figure is out.", source: "https://www.uniindia.com/north-india/rankings-up-pm-surya-ghar-muft-bijli/203746", sourceDate: "2026-10-05" },
      { id: "u-hydrogen-bus", comp: "train", area: "Clean air & transport", top: true, say: "On 12 June 2026, Uttar Pradesh started 3 hydrogen-powered buses near the new Jewar airport, along with 45 new electric buses. Hydrogen vehicles give out only water vapour from the exhaust.", hi: "12 जून 2026 को उत्तर प्रदेश में नए जेवर एयरपोर्ट के पास 3 हाइड्रोजन बसें और 45 नई इलेक्ट्रिक बसें शुरू हुईं। हाइड्रोजन गाड़ियों से धुएँ की जगह सिर्फ़ पानी की भाप निकलती है।", link: "My hydrogen train uses the same clean fuel idea on rails.", mentor: "Sustainable Bus (22 Jun 2026), Electrive (20 Jun 2026), DD India: buses provided via NTPC, for UPSRTC/YEIDA area. One report says the hydrogen is made from treated sewage water - mention only as 'reported'. Do NOT say UP runs a hydrogen TRAIN.", source: "https://www.sustainable-bus.com/electric-bus/upsrtc-electric-hydrogen-buses-launch/", sourceDate: "2026-06-22" },
      { id: "u-ebus-lucknow", comp: "bus", area: "Clean air & transport", top: false, say: "Of the 45 new electric buses started on 12 June 2026, 11 went to Lucknow and 34 to Noida, Greater Noida and the Jewar airport area. Electric buses give out no smoke on the road.", hi: "12 जून 2026 को शुरू हुई 45 नई इलेक्ट्रिक बसों में से 11 लखनऊ को और 34 नोएडा, ग्रेटर नोएडा और जेवर एयरपोर्ट क्षेत्र को मिलीं। इलेक्ट्रिक बसें सड़क पर धुआँ नहीं छोड़तीं।", link: "My electric bus shows how public transport can keep city air clean.", mentor: "Sustainable Bus (22 Jun 2026) and Electrive. These are UPSRTC buses. I could not confirm current Gorakhpur city e-bus numbers, so do NOT give a Gorakhpur e-bus figure. 'No tailpipe smoke' is correct; electricity may still come partly from coal.", source: "https://www.electrive.com/2026/06/20/india-up-deploys-45-e-buses-3-hydrogen-buses-for-public-transport/", sourceDate: "2026-06-20" },
      { id: "u-ekped-2025", comp: "general", area: "Campaigns & awards", top: true, say: "Under 'Ek Ped Maa Ke Naam', the UP Government reported planting more than 37 crore saplings in one day on 9 July 2025. On 12 July 2026, it reported about 35.27 crore saplings in one day.", hi: "'एक पेड़ माँ के नाम' अभियान में यूपी सरकार के अनुसार 9 जुलाई 2025 को एक ही दिन में 37 करोड़ से ज़्यादा पौधे लगाए गए। 12 जुलाई 2026 को एक दिन में लगभग 35.27 करोड़ पौधे लगाए गए।", link: "Trees clean the air, just like the green areas around my village hut.", mentor: "2025: target 37 crore (PTI via The Week, 9 Jul 2025); reported 37.21 crore (UNI). 2026: 35,27,89,926 against 35 crore target (Free Press Journal, 4 Sep 2026). These are government-reported counts of saplings PLANTED, not trees that survived. Do not call it a Guinness/world record.", source: "https://www.freepressjournal.in/uttar-pradesh/up-sets-new-plantation-record-with-3527-crore-saplings-launches-ek-ped-guru-ke-naam-drive", sourceDate: "2026-09-04" },
      { id: "u-up-gfc-stars", comp: "india", area: "Campaigns & awards", top: false, say: "In Swachh Survekshan 2024-25, many big Uttar Pradesh cities, including Gorakhpur, Agra, Kanpur, Prayagraj, Ghaziabad and Noida, got 5-star Garbage Free City ratings. Lucknow went one step higher with 7 stars.", hi: "स्वच्छ सर्वेक्षण 2024-25 में गोरखपुर, आगरा, कानपुर, प्रयागराज, गाज़ियाबाद और नोएडा जैसे यूपी के कई बड़े शहरों को 5-स्टार कचरा-मुक्त रेटिंग मिली। लखनऊ को 7 स्टार मिले।", link: "My India map shows that a clean country is made of many clean cities.", mentor: "From Drishti IAS (19 Jul 2025) summary of the state's results; Gorakhpur's 5-star also in News24. Not in the PIB award list itself, so say 'reported'.", source: "https://www.drishtiias.com/state-pcs-current-affairs/performance-of-uttar-pradesh-in-swachhta-survekshan-2024-25/print_manually", sourceDate: "2025-07-19" }
    ]
  },

  /* ---------------- 🎮 GAMES ----------------
     All answers come from Avni's fact-checked notes. To add an item, copy a line and change it. */
  games: {
    // 🗑️ Bin Sorter — Chandigarh's four home bins (also the SWM Rules 2026 streams)
    bins: [
      { key: "green", name: "Green", stream: "Wet", color: "#15803d" },
      { key: "blue", name: "Blue", stream: "Dry", color: "#1d4ed8" },
      { key: "black", name: "Black", stream: "Hazardous (special care)", color: "#111827" },
      { key: "red", name: "Red", stream: "Sanitary", color: "#b91c1c" }
    ],
    binItems: [
      { e: "🍌", item: "Banana peel", bin: "green", why: "Peels rot quickly — wet waste becomes compost or biogas." },
      { e: "🥕", item: "Vegetable peels", bin: "green", why: "Kitchen peels are wet waste." },
      { e: "🍛", item: "Leftover food", bin: "green", why: "Food waste is wet waste — great for compost or biogas." },
      { e: "🍵", item: "Used tea leaves", bin: "green", why: "Tea leaves rot easily, so they are wet waste." },
      { e: "🥚", item: "Eggshells", bin: "green", why: "Eggshells come from food and break down in compost, so they are wet waste." },
      { e: "🌼", item: "Old puja flowers", bin: "green", why: "Flowers rot and can become compost — never throw them in a river." },
      { e: "📰", item: "Old newspaper", bin: "blue", why: "Paper is dry waste — it goes for recycling." },
      { e: "📦", item: "Cardboard box", bin: "blue", why: "Cardboard is dry and recyclable." },
      { e: "🧴", item: "Empty plastic bottle", bin: "blue", why: "Clean plastic is dry waste and can be recycled." },
      { e: "🥫", item: "Empty metal can", bin: "blue", why: "Metal is dry waste — it can be melted and recycled." },
      { e: "🍾", item: "Empty glass bottle (not broken)", bin: "blue", why: "A whole glass bottle is dry waste — it can be melted and recycled. (Broken glass is different: Chandigarh MC asks for it in the black bin.)" },
      { e: "🥛", item: "Rinsed milk packet", bin: "blue", why: "A clean plastic packet is dry waste." },
      { e: "🔋", item: "Dead battery", bin: "black", why: "Batteries can leak harmful chemicals — special care (hazardous) waste." },
      { e: "💡", item: "Fused bulb or tube light", bin: "black", why: "Bulbs break into sharp glass and tube lights have a little mercury, so they need special care." },
      { e: "🎨", item: "Paint tin with leftover paint", bin: "black", why: "Leftover paint has harmful chemicals, so the tin needs special care — black bin." },
      { e: "👶", item: "Used diaper", bin: "red", why: "Used diapers carry germs, so they are sanitary waste — wrap them and keep them separate." },
      { e: "🩹", item: "Used sanitary pad (wrapped)", bin: "red", why: "Sanitary pads go in the red bin, wrapped in paper." },
      { e: "😷", item: "Used face mask", bin: "red", why: "In Chandigarh, used masks go with sanitary waste in the red bin." },
      { e: "📱", item: "Old mobile phone", bin: "black", why: "E-waste: has toxic metals and valuable metals; goes separately to a registered recycler." },
      { e: "🔋", item: "Used battery cell", bin: "black", why: "Waste batteries are 'special care waste' under SWM Rules 2026 and have their own Battery Waste Management Rules 2022." },
      { e: "💡", item: "Broken CFL bulb / tube light", bin: "black", why: "Contains a little mercury; listed as special care waste in SWM Rules 2026." }
    ],
    // ♻️ 7R Match — pick the R for each action
    sevenR: ["Refuse", "Reduce", "Reuse", "Repair", "Repurpose", "Recycle", "Recover"],
    rActions: [
      { a: "Saying “no, thank you” to a plastic straw", r: "Refuse", why: "Saying NO to something we don't need is Refuse — the 1st R." },
      { a: "Telling the shopkeeper “No plastic bag, please”", r: "Refuse", why: "You said NO to a plastic bag you didn't need — Refuse." },
      { a: "Writing on both sides of each page so you need fewer notebooks", r: "Reduce", why: "You use LESS paper — that is Reduce." },
      { a: "Taking only as much food as you can eat", r: "Reduce", why: "Less food is wasted — Reduce means using less." },
      { a: "Choosing a toy with less packaging", r: "Reduce", why: "Less packaging means less waste — Reduce." },
      { a: "Refilling your steel water bottle every day", r: "Reuse", why: "Using the same thing again for the SAME job is Reuse." },
      { a: "Using a gift box again to give another gift", r: "Reuse", why: "Same job again — Reuse." },
      { a: "Sewing a torn school bag", r: "Repair", why: "Fixing it instead of throwing it away is Repair." },
      { a: "Fixing a broken chair leg", r: "Repair", why: "Repair makes things last longer." },
      { a: "Using an old plastic bottle as a plant pot", r: "Repurpose", why: "Using an old thing for a NEW job is Repurpose." },
      { a: "Making a cleaning cloth from an old T-shirt", r: "Repurpose", why: "A new job for an old thing — Repurpose." },
      { a: "Giving old newspapers to the kabadiwala to make new paper", r: "Recycle", why: "Breaking it down to make NEW paper is Recycle." },
      { a: "Melting old metal cans to make new cans", r: "Recycle", why: "Melting and making new things is Recycle." },
      { a: "Making electricity from waste that cannot be recycled, in a special plant", r: "Recover", why: "Getting energy from leftover waste is Recover — the LAST R." },
      { a: "Getting cooking gas from kitchen waste in a biogas plant", r: "Recover", why: "Recovering energy (gas) from waste — Recover." }
    ],
    // ⚡ Swachh Champion Quiz — answer: index of the correct option
    quiz: [
      { q: "When was the Swachh Bharat Mission launched?", o: ["2 October 2014", "15 August 2014", "26 January 2015", "2 October 2019"], answer: 0, why: "It was launched on Gandhi Jayanti, 2 October 2014." },
      { q: "Who launched the Swachh Bharat Mission?", o: ["Mahatma Gandhi", "PM Narendra Modi", "Dr. A.P.J. Abdul Kalam", "The Chief Minister of Punjab"], answer: 1, why: "PM Narendra Modi launched it on 2 October 2014." },
      { q: "What does ODF stand for?", o: ["Open Defecation Free", "Only Dry Food", "Organic Dustbin Facility", "Outdoor Defence Force"], answer: 0, why: "ODF = Open Defecation Free: everyone uses a toilet." },
      { q: "Which is the HIGHEST stage of an ODF Plus village?", o: ["Aspiring", "Rising", "Model", "Starter"], answer: 2, why: "Model is the highest stage: Aspiring → Rising → Model." },
      { q: "Biogas is mainly made of…", o: ["Oxygen", "Methane and carbon dioxide", "Hydrogen and helium", "Nitrogen"], answer: 1, why: "Biogas is mainly methane (about 50–70%) plus carbon dioxide." },
      { q: "Which gas in biogas burns and gives the flame?", o: ["Carbon dioxide", "Methane", "Oxygen", "Water vapour"], answer: 1, why: "Methane is the gas that burns." },
      { q: "Biogas is made when microbes break down waste…", o: ["With lots of air", "Without oxygen", "In sunlight only", "In boiling water"], answer: 1, why: "It is anaerobic digestion — no oxygen." },
      { q: "In your filter, which layer is at the TOP?", o: ["Cotton", "Charcoal", "Stones and gravel", "Plastic beads"], answer: 2, why: "Water flows from coarsest to finest: stones & gravel → charcoal → cotton." },
      { q: "After your filter, the water is…", o: ["Safe to drink", "Clearer, but not safe to drink yet", "Pure distilled water", "Salty"], answer: 1, why: "Clear water can still have germs and dissolved chemicals." },
      { q: "Which layer of your filter traps some chemicals and smells?", o: ["Stones", "Sand", "Charcoal", "Cotton"], answer: 2, why: "Charcoal has tiny holes (pores) that hold on to many chemicals, colours and smells." },
      { q: "In your project's 7Rs, which R comes FIRST?", o: ["Recycle", "Reduce", "Refuse", "Reuse"], answer: 2, why: "In your 7Rs, Refuse comes first — say no to what you don't need. (In the old 3Rs, Reduce was first.)" },
      { q: "“Reduce” means…", o: ["Saying no", "Using less", "Fixing things", "Melting things"], answer: 1, why: "Reduce = use less. Saying no is Refuse!" },
      { q: "In your project's 7Rs, which R comes LAST?", o: ["Recover", "Reuse", "Repair", "Refuse"], answer: 0, why: "Recover comes last — after Recycle, we get energy from the waste that is left. (Some other 7R lists end with Recycle.)" },
      { q: "Who is called the Plastic Man of India?", o: ["Prof. Rajagopalan Vasudevan", "Dr. C.V. Raman", "Dr. Homi Bhabha", "Dr. Vikram Sarabhai"], answer: 0, why: "Prof. Rajagopalan Vasudevan found a way to use waste plastic in roads." },
      { q: "In which year did the Plastic Man of India get the Padma Shri?", o: ["2010", "2014", "2018", "2022"], answer: 2, why: "He received the Padma Shri in 2018." },
      { q: "India's first hydrogen train runs between…", o: ["Delhi and Agra", "Jind and Sonipat", "Mumbai and Pune", "Chandigarh and Shimla"], answer: 1, why: "Jind–Gohana–Sonipat in Haryana, flagged off on 17 July 2026." },
      { q: "What is the main thing that comes out of a hydrogen train instead of smoke?", o: ["Carbon dioxide", "Water vapour", "Methane", "Ash"], answer: 1, why: "A fuel cell turns hydrogen and oxygen into electricity, water and heat." },
      { q: "Under the new 2026 rules, homes must sort waste into how many groups?", o: ["Two", "Three", "Four", "Seven"], answer: 2, why: "Four groups (called streams): wet, dry, sanitary and special care." },
      { q: "Which bin is for wet waste?", o: ["Blue", "Green", "Black", "Red"], answer: 1, why: "Green = wet waste; blue = dry waste." },
      { q: "In Chandigarh, a dead battery goes in the…", o: ["Green bin", "Blue bin", "Black bin", "Red bin"], answer: 2, why: "Batteries are hazardous (special care) waste — black bin." },
      { q: "Why is a clay Ganesha better than a Plaster of Paris one?", o: ["Natural clay breaks down easily in water; POP does not", "Clay is shinier", "POP is too heavy to lift", "Clay idols are always bigger"], answer: 0, why: "Natural clay breaks apart and turns back into soil in water. POP stays hard for a long time, and the chemical paints often used on POP idols can harm fish." },
      { q: "Single-use plastics are made mainly from…", o: ["Wood", "Petroleum (fossil fuels)", "Clay", "Cotton"], answer: 1, why: "Most plastics are made from chemicals that come from petroleum (crude oil)." },
      { q: "India banned 19 single-use plastic items from…", o: ["1 July 2022", "2 October 2014", "1 January 2020", "15 August 2023"], answer: 0, why: "The ban on 19 items began on 1 July 2022." },
      { q: "What is an eco-brick?", o: ["A brick made of clay and straw", "A plastic bottle packed tight with clean, dry plastic waste", "A brick that grows plants", "A brick made of compost"], answer: 1, why: "It locks away non-recyclable plastic and can be used to build things." },
      { q: "Waste-to-energy plants should burn…", o: ["Everything, including plastic in the open", "Only waste that cannot be recycled, with pollution control", "Only wet kitchen waste", "Only paper"], answer: 1, why: "Recover is for leftover waste, in controlled plants — never open burning." },
      { q: "What does an Effluent Treatment Plant (ETP) clean?", o: ["Factory wastewater", "Air in classrooms", "Drinking water at home", "Old batteries"], answer: 0, why: "An ETP treats factory wastewater before it is reused or released." },
      { q: "A Sewage Treatment Plant (STP) cleans…", o: ["Dirty water from homes and toilets", "Factory smoke", "Plastic bottles", "Rainbows"], answer: 0, why: "STPs treat sewage from homes; ETPs treat factory water." },
      { q: "India's goal for clean (non-fossil) power capacity by 2030 is…", o: ["100 GW", "300 GW", "500 GW", "1,000 GW"], answer: 2, why: "500 GW by 2030 — India crossed 300 GW in July 2026." },
      { q: "In which year does India aim to reach net-zero emissions?", o: ["2030", "2047", "2070", "2100"], answer: 2, why: "By 2070, India wants to remove as much greenhouse gas from the air as it puts out — that is net zero. (Announced in 2021.)" },
      { q: "A solar panel changes…", o: ["Sunlight into electricity", "Wind into water", "Heat into ice", "Plastic into fuel"], answer: 0, why: "Solar (photovoltaic) cells turn light energy into electricity." },
      { q: "The tagline of Swachh Bharat is…", o: ["Ek Kadam Swachhata Ki Or", "Jai Jawan Jai Kisan", "Beti Bachao Beti Padhao", "Make in India"], answer: 0, why: "“Ek Kadam Swachhata Ki Or” — One step towards cleanliness." },
      { q: "Complete the saying: “The best waste is the waste we…”", o: ["recycle", "burn", "never create", "bury"], answer: 2, why: "If we never make the waste, there is nothing to clean up — so that is the best." },
    // 🏙️ Uttar Pradesh
      { q: "In Swachh Survekshan 2024-25, which was the first Uttar Pradesh city to get a 7-star Garbage Free City rating?", o: ["Gorakhpur", "Lucknow", "Agra", "Varanasi"], answer: 1, why: "Lucknow got the 7-star rating and was 3rd among cities with over 10 lakh people (awards on 17 July 2025)." },
      { q: "Indian Oil's compressed biogas plant at Dhuriapar, Gorakhpur district, mainly uses which farm waste?", o: ["Wheat husk only", "Paddy straw", "Coconut shells", "Tea leaves"], answer: 1, why: "It uses paddy straw, along with press mud and cow dung, about 200 tonnes a day." },
      { q: "From which date did Uttar Pradesh ban polythene bags and plastic cups?", o: ["2 October 2014", "15 July 2018", "1 July 2022", "26 January 2020"], answer: 1, why: "UP's ban started on 15 July 2018; the national single-use plastic ban came on 1 July 2022." },
      { q: "On 12 June 2026, UP started buses running on which clean fuel near Jewar airport?", o: ["Diesel", "Petrol", "Hydrogen", "Kerosene"], answer: 2, why: "Three hydrogen fuel-cell buses were started along with 45 electric buses." },
    // 🌫️ Haze & clean air
      { q: "On India's AQI scale, an AQI of 250 is called…", o: ["Good", "Moderate", "Poor", "Severe"], answer: 2, why: "201 to 300 is 'Poor' (orange). At this level, GRAP Stage 1 can begin in Delhi-NCR." },
      { q: "A human hair is about 70 micrometres thick. About how many times thinner is the biggest PM2.5 particle?", o: ["About 3 times", "About 30 times", "About 300 times", "About 3,000 times"], answer: 1, why: "PM2.5 particles are 2.5 micrometres or smaller, and 70 ÷ 2.5 = 28, which is about 30 times (US EPA)." },
      { q: "Why does a temperature inversion make winter haze worse?", o: ["A warm layer of air sits above cold air near the ground and traps smoke like a lid", "Cold air rises quickly and carries smoke away", "The Sun heats the ground strongly, so the air mixes well", "Rain falls and washes the dust out of the air"], answer: 0, why: "In an inversion, warm air above cold air stops the smoke from rising, so it stays near the ground where we breathe." },
      { q: "Which machine sows wheat straight through the paddy straw, so the straw need not be burnt?", o: ["Happy Seeder", "Trash skimmer", "Water filter", "Wind turbine"], answer: 0, why: "The Happy Seeder sows wheat seeds through the straw, and the straw stays on top as mulch that feeds the soil." },
      { q: "The word 'smog' joins which two words?", o: ["Smoke and fog", "Smell and fog", "Snow and fog", "Smoke and gas"], answer: 0, why: "Smog = smoke + fog. India's Health Ministry advisory on air pollution also explains SMOG as 'Smoke + Fog'." },
    // ♻️ E-waste
      { q: "From which date are India's E-Waste (Management) Rules, 2022 in force?", o: ["1 April 2022", "2 October 2022", "1 April 2023", "1 April 2026"], answer: 2, why: "The rules came into force on 1 April 2023 and replaced the 2016 rules." },
      { q: "Which of these is a harmful metal often found in e-waste?", o: ["Iron", "Lead", "Sodium", "Calcium"], answer: 1, why: "Lead (along with mercury and cadmium) can harm health if e-waste is burnt or broken open." },
      { q: "What is the right way to get rid of an old mobile phone?", o: ["Burn it to get the metals", "Put it in the wet waste bin", "Give it to a take-back point or registered recycler", "Put it into the plastic-to-energy machine"], answer: 2, why: "Registered recyclers recover metals safely without releasing toxic substances." }
    ],
    // 🧩 Model Memory — match each model part with what it does
    memory: [
      { a: "☀️ Solar panel", b: "Turns sunlight into electricity" },
      { a: "🔥 Biogas plant", b: "Turns wet waste into cooking gas" },
      { a: "🚆 Hydrogen train", b: "Gives out water vapour instead of smoke" },
      { a: "🌬️ Windmill", b: "Uses moving air (wind) to make electricity" },
      { a: "💧 Water filter", b: "Makes muddy water clearer (not drinkable yet)" },
      { a: "🔌 EV charging station", b: "Charges electric cars, which give out no smoke" },
      { a: "🗑️ Five dustbins", b: "Sorting waste at home into separate bins" },
      { a: "👨‍🔬 Plastic Man", b: "Waste plastic in roads" },
      { a: "🪔 Eco-friendly Ganesha", b: "Clay breaks down in water — safer for fish" },
      { a: "🏭 ETP (Effluent Treatment Plant)", b: "Cleans factory wastewater" },
      { a: "🚻 Toilets", b: "Stop open defecation" },
      { a: "💡 Plastic-to-energy machine", b: "Energy from waste that can't be recycled" }
    ]
  },

  /* ---------------- MARKING SCHEME (official, 40 marks) ----------------
     From the Vidya Bharati Akhil Bharatiya Vigyan Mela 2026-27 syllabus, Model Exhibition rule 6.
     Zone (kshetra) fairs normally use the same rules — confirm with Rajnish Ma'am. */
  marksSource: "Official Vidya Bharati Vigyan Mela 2026-27 rules (Model Exhibition). These are the rules for the national fair in Gorakhpur — confirm any last changes with Rajnish Ma'am.",
  marks: [
    { key: "tidy", name: "Neatness & order", hi: "सुघड़ता", icon: "🧹",
      tip: "Systematism & tidiness: a clean, well-arranged model. Labels straight and easy to read, no loose wires, nothing broken or dusty, everything in its place. Not more than 2 charts, and NO thermocol anywhere." },
    { key: "process", name: "Showing how it works", hi: "कार्यविधि प्रदर्शन", icon: "⚙️",
      tip: "Process presentation: show the demos working — the solar bulb, the EV light, water through the filter, the plastic-to-energy bulb. Go around in one path: City → Transport → Centre → Dustbins → Village → Water → Energy → Conclusion." },
    { key: "expression", name: "Explaining clearly", hi: "वर्णन अभिव्यक्ति", icon: "🗣️",
      tip: "Description & expression: explain in your own words with a clear, steady voice. Judge → model → judge eye contact. Answer questions honestly — if you don't know, say what you DO know." },
    { key: "written", name: "Written synopsis", hi: "लिखित प्रदर्श विवरणी", icon: "📝",
      tip: "Written details: give the judges 2 copies of your synopsis — content, principle, how it works, and the list of parts. Neat and correct. (See 📘 Project → Written synopsis.)" }
  ],

  /* ---------------- THINGS TO CONFIRM WITH RAJNISH MA'AM ----------------
     Until these are confirmed, the website shows them as “Ask Ma'am”. */
  confirmList: [
    { id: "phase2years", q: "The Phase 2 board on my model says “2020–2047”. Swachh Bharat Mission Phase 2 started in 2020-21 in villages (2021 in cities, as SBM-Urban 2.0) and was planned for about five years; 2047 is the “Viksit Bharat” goal. Should I change the board, or explain it as “Phase 2 started in 2020, and our dream is a clean, developed India by 2047”?" },
    { id: "redesign", q: "One 7R cloud on my model says “Redesign”, but my project file lists “Repurpose”. Which word should I use when I explain the 7Rs?" },
    { id: "qrstickers", q: "May I stick small QR code stickers next to the parts of my model at the fair (see 🏷️ QR stickers)?" },
    { id: "bins", q: "Does our model follow Chandigarh's bin system (BLACK = domestic hazardous waste, RED = sanitary waste)? And what does the YELLOW bin stand for — biomedical waste? Where do expired medicines go — black or red?" },
    { id: "ladder", q: "What does the LADDER below “Carbon Emission” represent?" },
    { id: "digger", q: "What does the DIGGER FIELD represent — a farm field being dug, a compost pit, a landfill, or something else?" },
    { id: "filter", q: "✅ Answered (31 Oct 2026): my model filter has NO sand layer — it is stones & gravel → charcoal → cotton." },
    { id: "machine", q: "Plastic-to-Energy: what does each of the TWO separate machines represent? Which one is the furnace/processing part and which is the generator + bulb?" },
    { id: "villagetoilet", q: "Is the village toilet connected to the biogas plant in our model, or is it a separate toilet?" },
    { id: "windmill", q: "Does the windmill actually turn / produce electricity in the model, or is it only a display?" },
    { id: "evbutton", q: "EV station: is the green light only a charging indicator, or does it also show the car battery getting charged?" },
    { id: "ganesha", q: "Eco-friendly Ganesha: which clay and which daals did I use, are the daals inside the idol or on it, what colours and size is it, and where does it sit on the model? (Write it here so the website can be updated.)" }
  ],

  /* ---------------- MODEL MAP ----------------
     zone: where it sits on the green base (city / centre / village / front)
     inModel:  what is physically there
     say:      key points to say (in your own words!)
     sample:   a sample line to peek at only AFTER you try
     how:      how it works (science)
     deeper:   extra knowledge for tricky viva questions
     careful:  things NOT to say / exaggerations to avoid
     point:    where to point, gestures, eye contact
     ask:      open questions about this part (status "ask")        */
  components: [
    {
      id: "solar", zone: "city", icon: "☀️", name: "Solar Panels (3 buildings)", status: "confirmed",
      inModel: "Three buildings. Two have handmade cardboard/paper solar panels. One has a REAL working solar panel that lights an LED/bulb in sunlight.",
      say: [
        "Solar energy is energy from sunlight.",
        "Solar panels change sunlight directly into electricity.",
        "It is renewable — the Sun will keep shining for billions of years.",
        "Using solar power means burning less coal for electricity, so less smoke and fewer greenhouse gases.",
        "Demonstrate: the real panel lights the bulb in sunlight."
      ],
      sample: "In my Smart City, the buildings use *solar panels*. / Two of them are handmade, / but this one is a *real* solar panel. / When sunlight falls on it, / it makes electricity / and the bulb glows.",
      how: [
        "A solar panel is made of many solar cells, usually made of silicon.",
        "When sunlight falls on a cell, its energy makes tiny charged particles (electrons) move.",
        "Moving electrons = electric current. So light energy → electrical energy.",
        "No burning happens, so no smoke comes out while it works."
      ],
      deeper: [
        "Scientific name: photovoltaic (PV) cell — ‘photo’ = light, ‘voltaic’ = electricity.",
        "Solar panels give direct current (DC). Homes often use an inverter to change it to AC.",
        "At night or on cloudy days they give little or no power, so batteries or the grid are needed.",
        "Coal power plants release carbon dioxide and smoke; solar panels do not while running."
      ],
      careful: [
        "Do NOT say solar energy has zero effect on the environment. Making panels uses energy and materials, and old panels must be recycled properly.",
        "Say “reduces” pollution, not “stops all” pollution."
      ],
      point: [
        "Open palm toward the two handmade panels, then move to the real panel.",
        "Show the glowing bulb, then LOOK AT THE JUDGE while saying “it is renewable”.",
        "If the room is dark, say calmly: “It needs sunlight or strong light to work.”"
      ]
    },
    {
      id: "citytoilets", zone: "city", icon: "🚻", name: "Toilets 1 & 2 (City)", status: "confirmed",
      inModel: "Two toilets in the Smart City (one male sign, one female sign).",
      say: [
        "Toilets are the sanitation part of the Clean India Mission.",
        "Using toilets stops open defecation.",
        "Human waste has germs. If it is left in the open, flies and rainwater carry germs to food and water.",
        "Separate toilets also give safety and dignity, especially to girls and women."
      ],
      sample: "Clean India is not only about garbage. / It is also about *sanitation*. / These toilets show that every person should use a toilet, / so that germs do not reach our *water* and *food*.",
      how: [
        "A toilet collects human waste and sends it safely to a sewer, septic tank or pit.",
        "This keeps germs away from people, drinking water, rivers and soil."
      ],
      deeper: [
        "Diseases spread by poor sanitation include diarrhoea, cholera and typhoid.",
        "Swachh Bharat Mission (Grameen) Phase 1 built over 10 crore (100 million) household toilets; villages across India declared themselves Open Defecation Free (ODF) by 2 October 2019.",
        "Phase 2 (from 2020) focuses on keeping villages ODF and on solid and liquid waste management — called ‘ODF Plus’.",
        "Handwashing with soap after using the toilet is also very important."
      ],
      careful: [
        "Don't say “there is no open defecation anywhere now”. Say “the mission greatly improved toilet access; we must keep using and maintaining them.”"
      ],
      point: [
        "Point to both toilets together, then look at the judge for the line about germs and water."
      ]
    },
    {
      id: "ev", zone: "city", icon: "🔌", name: "EV Charging Station + Car", status: "confirmed",
      inModel: "An EV charging station with a white car. When the button is pressed, a green light glows to show charging.",
      say: [
        "EV means Electric Vehicle. It runs on a battery and an electric motor, not petrol or diesel.",
        "It has no exhaust pipe smoke while running, so the air in the city stays cleaner.",
        "Demonstrate: press the button — the green light shows charging.",
        "The full benefit depends on how the electricity is made. Electricity from solar or wind makes EVs even cleaner."
      ],
      sample: "This is an *EV charging station*. / Let me press this button. / *(press)* / The green light shows the car is charging. / An electric car has *no smoke* coming out of it while it runs.",
      how: [
        "The charger sends electricity from the power supply into the car's battery.",
        "The battery stores it as chemical energy.",
        "When the car moves, the battery gives electricity to the motor, which turns the wheels."
      ],
      deeper: [
        "Petrol and diesel engines burn fuel and release carbon dioxide, carbon monoxide, nitrogen oxides and tiny particles (PM2.5).",
        "EVs have zero tailpipe emissions, but a power plant somewhere may still pollute if it burns coal.",
        "EV batteries need minerals like lithium; old batteries should be recycled.",
        "Solar panel + EV charging (like in my Smart City) is a good pair."
      ],
      careful: [
        "Don't say “EVs cause no pollution at all”. Say “no pollution from the exhaust while running” / “less local air pollution”."
      ],
      point: [
        "Hand toward the station → press the button → pause 1 second while the light glows → look at the judge."
      ],
      ask: ["evbutton"]
    },
    {
      id: "bus", zone: "city", icon: "🚌", name: "Electric Bus Stand", status: "confirmed",
      inModel: "A bus stand with two electric buses.",
      say: [
        "Public transport: one bus carries many people, so fewer cars are on the road.",
        "Electric buses have no tailpipe smoke.",
        "Fewer vehicles + no exhaust = cleaner air, less noise, less fuel burnt."
      ],
      sample: "One bus can carry *many* people. / If the bus is *electric*, / there is no smoke *and* fewer cars on the road.",
      how: [
        "Same as the EV: a big battery powers an electric motor. Buses are charged at depots or charging points."
      ],
      deeper: [
        "Electric motors are quiet, so they also reduce noise pollution.",
        "Many electric vehicles use ‘regenerative braking’ — when they slow down, the motor works like a generator and puts some energy back into the battery.",
        "Chandigarh itself runs electric buses in its public transport (CTU). (Check with Ma'am before mentioning your own city.)"
      ],
      careful: [
        "The benefit still depends partly on how the electricity is produced."
      ],
      point: [
        "Sweep your hand across both buses once. Keep this section short and move to the train."
      ]
    },
    {
      id: "train", zone: "front", icon: "🚆", name: "Hydrogen Train (Jind ↔ Sonipat)", status: "confirmed",
      inModel: "A hydrogen train on a railway track, labelled Jind ↔ Sonipat.",
      say: [
        "This is India's first hydrogen train, on the Jind–Sonipat route in Haryana.",
        "It uses hydrogen in fuel cells to make its own electricity.",
        "The main thing that comes out is water vapour, not diesel smoke.",
        "Whether it is really ‘green’ depends on how the hydrogen is made."
      ],
      sample: "This is a *hydrogen train*, / like the one between *Jind and Sonipat* in Haryana. / It does not burn diesel. / Hydrogen and oxygen react in a *fuel cell* / to make electricity, / and the main thing that comes out is / *water vapour*.",
      how: [
        "Fuel cell: hydrogen (from tanks on the train) + oxygen (from air) → electricity + water + heat.",
        "This is NOT burning; it is a chemical reaction that gives electricity directly.",
        "The electricity runs electric motors that move the train. Batteries on board help store extra power."
      ],
      deeper: [
        "VERIFIED (PIB, July 2026): The Prime Minister flagged off India's first hydrogen train at Jind railway station on 17 July 2026.",
        "Route: Jind – Gohana – Sonipat, about 89 km, Northern Railway, Haryana.",
        "10 coaches: 2 Hydrogen Driving Power Cars + 8 trailer coaches; about 2,600 passengers; operating speed 75 km/h, design speed 110 km/h. Designed and built in India (ICF Chennai, RDSO specifications).",
        "Indian Railways calls the Jind facility its largest hydrogen storage and refuelling station — about 3,000 kg of hydrogen, approved by PESO (safety organisation).",
        "Hydrogen at Jind is made by electrolysis — electricity splits water into hydrogen and oxygen (a 1 MW PEM electrolyser, about 430 kg of hydrogen a day, as per the supplier).",
        "Green hydrogen = made using renewable electricity. Grey hydrogen = made from natural gas, which releases CO₂. So the real benefit depends on the source of electricity.",
        "Regular passenger service started on 19 July 2026 (‘NaMo Green Rail’, trains 74009/74010; fare ₹25 for the full route). Check the news once before the fair for any change."
      ],
      careful: [
        "Don't say “it produces only water and no pollution at all”. Say “the main onboard by-product is water vapour”.",
        "Don't say hydrogen is burnt like diesel. It is used in a fuel cell.",
        "Don't give dates/numbers you are not sure of. The safe line is: “It was flagged off in July 2026 on the Jind–Sonipat route.”"
      ],
      point: [
        "Trace the track with your finger from one end to the other while saying “Jind to Sonipat”.",
        "Look at the judge for “water vapour” — it is your strongest point here."
      ]
    },
    {
      id: "india", zone: "centre", icon: "🇮🇳", name: "India Map + “Carbon Emission”", status: "confirmed",
      inModel: "An India-shaped tricolour design in the centre, with the words CARBON EMISSION written below it (with a city skyline).",
      say: [
        "Carbon emission means releasing carbon dioxide (CO₂) into the air.",
        "It mostly comes from burning fossil fuels — coal, petrol, diesel — and from burning garbage.",
        "Too much CO₂ traps heat and causes global warming.",
        "Many parts around this map — solar, wind, EVs, the hydrogen train, biogas — help reduce carbon emissions."
      ],
      sample: "In the centre is our *India*. / Below it, I have written *Carbon Emission*. / When we burn coal, petrol, diesel or garbage, / carbon dioxide goes into the air / and our Earth becomes *warmer*. / *Many parts* of my model show ways to *reduce* it.",
      how: [
        "Fuels like coal and petrol contain carbon. When they burn, carbon joins with oxygen and makes CO₂.",
        "CO₂ is a greenhouse gas: it lets sunlight in but traps some of the heat, like a blanket."
      ],
      deeper: [
        "Global warming: the long-term rise in Earth's average temperature, mainly due to more greenhouse gases from human activities.",
        "Other greenhouse gases: methane (from rotting waste in landfills, cattle), nitrous oxide.",
        "Methane from garbage dumps is a strong greenhouse gas — one more reason to compost or make biogas from wet waste.",
        "India has announced a target of Net Zero emissions by 2070."
      ],
      careful: [
        "Global warming is ‘mainly’ caused by human activities today — avoid saying ‘only’."
      ],
      point: [
        "Move to the centre and stand still here for a moment — this is the heart of your model.",
        "Hand toward the India map, then look at the judge while explaining global warming."
      ]
    },
    {
      id: "ladder", zone: "centre", icon: "🪜", name: "Ladder (centre)", status: "ask",
      inModel: "A ladder in the centre of the model, below the words Carbon Emission. It is NOT on the road.",
      say: [
        "(Ask Rajnish Ma'am what the ladder represents before you explain it.)"
      ],
      sample: "",
      how: [],
      deeper: [],
      careful: [
        "Do not invent a meaning. Once Ma'am tells you, write it here in content.js."
      ],
      point: [
        "Until Ma'am confirms, don't point to the ladder or explain it. Talk about carbon emission using the India map and the words ‘Carbon Emission’."
      ],
      ask: ["ladder"]
    },
    {
      id: "windmill", zone: "centre", icon: "🌬️", name: "Windmill", status: "confirmed",
      inModel: "ONE windmill (wind turbine).",
      say: [
        "A windmill (wind turbine) makes electricity from moving air.",
        "Wind is renewable — it will not run out.",
        "No smoke is produced while it runs."
      ],
      sample: "This *windmill* shows *wind energy*. / In a *real* wind turbine, / wind turns the blades, / and a generator inside makes electricity.",
      how: [
        "Wind pushes the blades → the blades turn a shaft → the shaft turns a generator → electricity.",
        "Kinetic energy of wind → mechanical energy → electrical energy."
      ],
      deeper: [
        "Limitation: wind does not blow at the same speed all the time, so wind power changes; it is often used with solar and batteries.",
        "Wind farms are usually built where the wind is strong, like coasts and open land."
      ],
      careful: [
        "Don't claim your model windmill makes electricity unless it really does."
      ],
      point: ["Quick point upward toward the windmill; one or two sentences only."],
      ask: ["windmill"]
    },
    {
      id: "pots", zone: "centre", icon: "🌸", name: "Two Flower Pots / Park", status: "confirmed",
      inModel: "TWO flower pots in the central park area.",
      say: [
        "Green spaces make a city healthier and more beautiful.",
        "Plants take in carbon dioxide and give out oxygen during photosynthesis."
      ],
      sample: "",
      how: ["Photosynthesis: plants use sunlight, water and CO₂ to make food, and release oxygen."],
      deeper: ["Flower pots can also be reused items — like old tins or bottles — which is the ‘Repurpose’ R."],
      careful: ["There are only TWO pots. Don't describe gardens or trees that are not in the model."],
      point: ["A small gesture only; don't spend long here."]
    },
    {
      id: "bins", zone: "front", icon: "🗑️", name: "Five Dustbins", status: "ask", binGuide: true,
      inModel: "Five bins: GREEN (Wet waste), BLUE (Dry waste), BLACK, RED and YELLOW.",
      say: [
        "Waste segregation at source means separating waste where it is created — at home, in school, in shops.",
        "GREEN = Wet waste — kitchen waste, peels, leftover food → compost or biogas.",
        "BLUE = Dry waste — paper, plastic, metal, glass → sent for sorting and recycling.",
        "BLACK = Domestic hazardous waste — batteries, bulbs/tube lights, broken glass, paint containers (Chandigarh system — confirm with Ma'am).",
        "RED = Sanitary waste — used sanitary pads and diapers, wrapped in paper; in Chandigarh also used masks, gloves and bandages (Chandigarh system — confirm with Ma'am).",
        "YELLOW = most likely biomedical waste from hospitals and clinics, like soiled bandages (confirm with Ma'am).",
        "If everything is mixed, recyclable things get dirty and wet waste cannot be composted properly. A lot of mixed waste ends up in landfills and open dumps."
      ],
      sample: "These are *five dustbins*. / *Green* is for wet waste, / *blue* for dry waste, / *black* for hazardous waste like batteries and bulbs, / *red* for sanitary waste, / and *yellow* for biomedical waste. / The most important idea is *segregation at source*. / Mixed waste / becomes *garbage*. / Separated waste / becomes a *resource*.",
      how: [
        "Wet waste rots quickly (microorganisms break it down) → compost / biogas.",
        "Dry waste does not rot quickly → sorted at a Material Recovery Facility (MRF) → recycled.",
        "Hazardous waste (batteries, bulbs, paint, medicines) can leak poisonous chemicals, so authorised agencies collect it separately.",
        "Sanitary waste carries germs, so it is wrapped and handled separately to protect sanitation workers.",
        "Biomedical waste from hospitals can spread infection, so it is treated in special facilities."
      ],
      deeper: [
        "VERIFIED (Chandigarh): Chandigarh Municipal Corporation uses GREEN for wet waste and BLUE for dry waste, and added BLACK bins for domestic hazardous waste (bulbs, dead batteries, broken glass) and RED bins for sanitary waste (Tribune, February 2022).",
        "VERIFIED (India): The Solid Waste Management Rules, 2026 (from 1 April 2026) make FOUR-stream segregation compulsory: Wet, Dry, Sanitary and Special care waste. The rules also say bins in public places must be GREEN for wet waste and BLUE for dry waste, and RED bins can be kept in public toilets for sanitary waste. The rules do not fix colours for bins at home, or a colour for special care waste — cities must set up special collection centres for it. Chandigarh uses BLACK bins for it.",
        "VERIFIED (Hospitals): Bio-Medical Waste Management Rules, 2016 use FOUR different colours: YELLOW (body parts, soiled dressings, expired medicines, chemical/lab waste), RED (contaminated plastic like tubes, bottles, IV sets, gloves), WHITE translucent (needles and sharps), BLUE (glassware and metal implants).",
        "Watch out: RED means sanitary waste in Chandigarh homes, but contaminated plastic in hospitals. That is why the same colour can mean different things in different systems.",
        "Special care waste under the 2026 rules (medicines, bulbs, batteries, paint containers) is similar to what Chandigarh calls domestic hazardous waste. But Chandigarh news reports differ on whether expired medicines go in the BLACK or the RED bin — ask Ma'am.",
        "VERIFIED (Chandigarh 2026): Chandigarh Municipal Corporation made the four-bin system compulsory from April 2026, with fines (challans) for people who do not separate their waste. The 2026 draft bye-laws also put home medical waste like used masks, gloves and bandages in the RED bin."
      ],
      careful: [
        "Say “in Chandigarh's system” when you explain black and red — colours can differ from city to city.",
        "Don't say “all dry waste is non-biodegradable” — paper and cardboard are dry but biodegradable.",
        "Don't mix the hospital meaning of RED (contaminated plastic) with the household meaning (sanitary waste)."
      ],
      point: [
        "Walk your hand along the bins left to right as you name each colour.",
        "Stop, look at the judge, and slowly say the ‘Mixed waste becomes garbage…’ line."
      ],
      ask: ["bins"]
    },
    {
      id: "plasticman", zone: "centre", icon: "👨‍🔬", name: "Plastic Man of India", status: "confirmed",
      inModel: "A picture of Professor Rajagopalan Vasudevan.",
      say: [
        "Professor Rajagopalan Vasudevan is called the Plastic Man of India.",
        "He found a way to use waste plastic to build roads.",
        "He received the Padma Shri in 2018."
      ],
      sample: "This is *Professor Rajagopalan Vasudevan*, / known as the *Plastic Man of India*. / He found a way to use *waste plastic* to build *roads*, / and he received the *Padma Shri* in 2018.",
      how: [
        "Waste plastic (like thin carry bags and cups) is cleaned and shredded into small pieces.",
        "The pieces are sprinkled on hot stones (aggregate). The plastic melts and coats the stones.",
        "Then the coated stones are mixed with bitumen (the black tar-like material) and laid as a road."
      ],
      deeper: [
        "He is a professor of chemistry at Thiagarajar College of Engineering, Madurai (Tamil Nadu).",
        "He developed the method around 2001; one of the first plastic roads was laid in 2002 (Jambulingam Street, Chennai).",
        "He shared the technology with the Government of India free of cost instead of selling it.",
        "Benefits: uses plastic that is difficult to recycle, and the plastic coating helps the road resist water, so fewer potholes.",
        "Plastic roads have been built in many states. Government data says more than 43,000 km of village roads were made using waste plastic by July 2025."
      ],
      careful: [
        "Don't say he ‘invented plastic’ or that plastic roads ‘solve the whole plastic problem’. Reducing plastic use is still most important."
      ],
      point: [
        "Point to the photo, then look at the judge while saying “build roads” — judges like this story."
      ]
    },
    {
      id: "hut", zone: "village", icon: "🛖", name: "Handmade Hut", status: "confirmed",
      inModel: "A handmade village hut.",
      say: [
        "The Smart Village shows that villages can also be clean, healthy and use renewable energy."
      ],
      sample: "Now let us go to my *Smart Village*.",
      how: [],
      deeper: ["A smart village uses what it already has — cow dung, crop waste, sunlight — to make energy and fertilizer."],
      careful: ["Don't describe extra things (solar lights, rainwater harvesting, crops) that are not in the model."],
      point: ["Move your body to the village side here — this is a clear ‘new chapter’."]
    },
    {
      id: "digger", zone: "village", icon: "🚜", name: "Digger Field", status: "ask",
      inModel: "A field area with a toy digger (JCB) and a fence.",
      say: ["(Ask Rajnish Ma'am what the digger field represents before you explain it.)"],
      sample: "",
      how: [],
      deeper: [],
      careful: ["Do not invent crops or technologies that are not in the model."],
      point: [],
      ask: ["digger"]
    },
    {
      id: "villagetoilet", zone: "village", icon: "🚽", name: "Village Toilet", status: "confirmed",
      inModel: "One toilet in the Smart Village.",
      say: [
        "Villages also need toilets — this was one of the main goals of Swachh Bharat Mission (Grameen).",
        "It prevents open defecation and protects ponds, wells and fields from germs."
      ],
      sample: "Just like the city, / my village also has a *toilet*, / because a clean village is a *healthy* village.",
      how: ["Human waste is kept in a closed pit or tank, away from water sources."],
      deeper: [
        "In villages, open defecation near ponds and wells can pollute drinking water.",
        "Twin-pit toilets: when one pit is full, the other is used; the waste in the first pit slowly turns into safe manure."
      ],
      careful: ["Don't say it is connected to the biogas plant unless it really is in your model."],
      point: ["Short point; connect to the city toilets: “just like the city”."],
      ask: ["villagetoilet"]
    },
    {
      id: "biogas", zone: "village", icon: "🔥", name: "Biogas Plant", status: "confirmed",
      inModel: "A biogas plant in the Smart Village, with a pipe to a stove/flame.",
      say: [
        "Biogas is made when cow dung, food waste and plant waste rot WITHOUT oxygen.",
        "This process is called anaerobic digestion.",
        "Biogas is mainly methane + carbon dioxide. It is used for cooking, heating or electricity.",
        "The leftover slurry is a good fertilizer.",
        "Quote: “Turn waste into energy, not pollution.”"
      ],
      sample: "This is a *biogas plant*. / Cow dung and kitchen waste are put inside. / *Without oxygen*, / tiny microorganisms break them down / and make *biogas*, / which is mainly *methane*. / It goes through this pipe / to the stove / for cooking. / *Turn waste into energy, / not pollution.*",
      how: [
        "Waste + water → put in a closed tank called a digester (no air inside).",
        "Anaerobic bacteria (bacteria that live without oxygen) break the waste down → biogas collects at the top.",
        "The gas travels through a pipe to the stove. The leftover liquid (slurry) is used as manure."
      ],
      deeper: [
        "Biogas is about 50–70% methane; the rest is mostly carbon dioxide, with small amounts of other gases.",
        "‘Anaerobic’ = without air/oxygen. ‘Aerobic’ = with oxygen (like composting in an open pit).",
        "It reduces cutting of trees for firewood, and reduces smoke inside kitchens, which harms women and children's lungs.",
        "Methane escaping from rotting waste is a strong greenhouse gas; a biogas plant captures it and uses it.",
        "The Government's GOBARdhan scheme supports turning cattle dung, crop waste and kitchen waste into biogas and manure. It started in 2018 under Swachh Bharat Mission (Grameen). In 2026 it was expanded into a bigger national bioenergy scheme for compressed biogas (CBG), now run by the Ministry of Petroleum and Natural Gas.",
        "Your prepared answer — “What if biogas is not available?” — is good: more firewood and fossil fuels, more smoke and greenhouse gases, and organic waste left to rot."
      ],
      careful: [
        "Biogas also produces CO₂ when burnt — say it is ‘cleaner than firewood/cow-dung cakes’, not ‘completely pollution-free’."
      ],
      point: [
        "Point to the tank, trace the pipe with your finger to the stove, then look at the judge for the quote."
      ]
    },
    {
      id: "factory", zone: "front", icon: "🏭", name: "Sugar & Leather Industry", status: "confirmed",
      inModel: "A factory labelled ‘Sugar & Leather Industry (Dirty Water)’ with chimneys, connected by pipes to a pump and the water treatment setup.",
      say: [
        "Factories like sugar mills and leather tanneries release dirty water (wastewater) full of chemicals.",
        "If it goes directly into rivers, it kills fish and pollutes drinking water.",
        "So industries must treat it in an Effluent Treatment Plant (ETP) before reusing or releasing it."
      ],
      sample: "Factories like *sugar* and *leather* industries / release *dirty water*. / This water must *never* go directly into a river. / It must first be treated in an / *Effluent Treatment Plant*, / or *ETP*.",
      how: [
        "ETP step 1 — Physical: screens remove big solids; settling tanks let mud settle; oil is skimmed off.",
        "ETP step 2 — Biological: useful bacteria ‘eat’ the dissolved organic matter.",
        "ETP step 3 — Final cleaning: filtering and disinfection. (In a real ETP, chemicals are added early, before the bacteria step, to balance the water and remove harmful things like chromium that could harm the useful bacteria.)"
      ],
      deeper: [
        "‘Effluent’ = liquid waste flowing out of a factory.",
        "Sugar-mill wastewater has a lot of organic matter (sugar). Bacteria use up the oxygen in rivers breaking it down, so fish die.",
        "Leather tanneries often use chromium salts to tan leather, so their wastewater may contain chromium, which is toxic and needs special chemical treatment.",
        "Small factories can share a Common Effluent Treatment Plant (CETP).",
        "Some industries aim for ‘Zero Liquid Discharge’ — treating and reusing all their water."
      ],
      careful: [
        "Don't mix up your simple filter demo with a full ETP. Say “my filter shows only the first, simple step of cleaning water”."
      ],
      point: [
        "Point to the factory, then follow the pipe with your hand toward the pump and the water plant."
      ]
    },
    {
      id: "filter", zone: "front", icon: "💧", name: "Water Treatment / Filtration", status: "confirmed",
      inModel: "Dirty water (pumped from the factory) → a multi-layer gravity filter → clean-looking water in a separate tank. Layers from TOP to BOTTOM: stones & gravel → charcoal → cotton (no sand layer).",
      say: [
        "This is a simple filtration demonstration — a basic water-cleaning step.",
        "Water flows from the COARSEST layer to the FINEST: stones & gravel → charcoal → cotton.",
        "Stones and gravel (top) hold back big particles like leaves, twigs and mud.",
        "Charcoal adsorbs some chemicals, colour and bad smell.",
        "Cotton (bottom) is the last barrier — it traps tiny particles and charcoal dust.",
        "The water looks cleaner, but it is NOT safe to drink yet — it may still have germs and dissolved chemicals.",
        "Quote: “Clean water is precious — treat it, reuse it, protect it.”"
      ],
      sample: "Here, the dirty water flows from the coarsest layer to the finest — / *stones and gravel*, / *charcoal* / and *cotton*. / See — / the water that comes out looks *cleaner*. / But clear water is *not always safe* water. / It may still have *germs* / and *dissolved* chemicals. / *Clean water is precious — / treat it, / reuse it, / protect it.*",
      how: [
        "Filtration = separating solid particles from a liquid by passing it through something with tiny gaps.",
        "Bigger gaps (stones) catch big particles; smaller gaps (cotton) catch smaller ones.",
        "Charcoal has a huge surface full of tiny holes; many impurities stick to it (adsorption)."
      ],
      deeper: [
        "To make water safe to drink you need more steps — and testing. Boiling, chlorination or UV kill germs, but they do not remove dissolved chemicals; RO purifiers can remove many of them. Factory wastewater is usually not made into drinking water — it is treated in an ETP and then reused or safely released.",
        "Filtration removes suspended (floating) particles; it usually cannot remove salt or chemicals that are dissolved.",
        "Activated charcoal is charcoal treated to have even more tiny pores.",
        "Big water plants also use thick sand beds; my small model uses stones, charcoal and cotton instead."
      ],
      careful: [
        "NEVER say “this makes water completely safe to drink”.",
        "My model filter has no sand layer, so don't say “sand” when you point at it."
      ],
      point: [
        "Point to the dirty water → the filter layers (top to bottom) → the clean water tank. Hold still on the clean tank and say “see…”.",
        "Look at the judge for “clear water is not always safe water” — this line shows real understanding."
      ],
      ask: ["filter"]
    },
    {
      id: "wte", zone: "front", icon: "💡", name: "Plastic-to-Energy Machine", status: "ask",
      inModel: "A handmade machine (with a red ‘fire’ chamber) and a separate unit with a bulb, placed apart with a visible gap. When activated, the bulb glows to show electricity.",
      say: [
        "This machine shows the idea of Waste-to-Energy.",
        "Plastic and waste that CANNOT be recycled is treated at very high temperature in special closed plants.",
        "The heat boils water into steam, the steam turns a turbine, the turbine turns a generator, and we get electricity.",
        "These plants must have pollution-control systems. We should NEVER burn plastic in the open.",
        "Recycling and reusing come first; energy recovery is for waste that cannot be recycled."
      ],
      sample: "This is my *Plastic-to-Energy* machine. / *(activate)* / See, the bulb glows. / But I want to say clearly — / we must *never* burn plastic in the open, / because it releases *poisonous* gases. / Only plastic that *cannot be recycled* / is treated in special plants / with *pollution control*. / The heat makes *steam*, / the steam turns a *turbine*, / and the generator makes *electricity*.",
      how: [
        "Waste → controlled high-temperature treatment in a closed furnace → heat",
        "Heat → boils water → steam",
        "Steam → spins a turbine → turbine turns a generator → electricity",
        "Smoke is cleaned by filters and scrubbers before it is released."
      ],
      deeper: [
        "This is the ‘Recover’ R — the LAST of the 7Rs, used only after Refuse, Reduce, Reuse, Repair, Repurpose and Recycle.",
        "Open burning of plastic releases harmful gases such as dioxins and furans, and black smoke.",
        "Another method is pyrolysis: heating plastic WITHOUT oxygen to turn it into oil and gas.",
        "RDF (Refuse-Derived Fuel) = dry, non-recyclable waste prepared as fuel, e.g. for cement factories."
      ],
      careful: [
        "NEVER say “we simply burn plastic and get electricity”.",
        "Confirm with Ma'am what each of the two separate machines represents."
      ],
      point: [
        "Activate the machine → wait for the bulb → look at the judge for “never burn plastic in the open”.",
        "Point to the first machine for ‘heat/steam’ and to the bulb unit for ‘electricity’ (after confirming)."
      ],
      ask: ["machine"]
    },
    {
      id: "ganesha", zone: "front", icon: "🪔", name: "Eco-friendly Ganesha (clay + daals)", status: "ask",
      inModel: "My eco-friendly Ganesha idol, made with clay that breaks down easily in water, and daals (pulses). (Still to write here: its size, colours, which clay, which daals, how the daals are used, and where it sits on the model.)",
      ask: ["ganesha"],
      say: [
        "Many Ganesha idols are made of Plaster of Paris (PoP), painted with chemical paints and decorated with plastic or thermocol.",
        "PoP does not dissolve easily in water. It stays in the water for a long time and slowly changes the water. Some chemical paints contain harmful metals. This can harm fish and other water animals.",
        "So I made my Ganesha with clay that breaks down easily in water, and daals (pulses), which are natural and biodegradable.",
        "The best way to immerse it is at home, in a bucket of water. The water can go to plants, and the mud can be reused.",
        "We can celebrate our festivals and protect our rivers too. This is also part of Clean India."
      ],
      sample: "This is my *eco-friendly Ganesha*. / Many idols are made of *Plaster of Paris*, / painted with *chemical colours* / and decorated with *plastic*. / PoP does *not dissolve easily*, / so it can harm *fish* and other water animals. / So I made my Ganesha with *clay* that breaks down easily in water, / and *daals*. / It can be immersed *at home* in a bucket, / and the water can go to our *plants*. / *We can celebrate our festivals / and protect our rivers too.*",
      how: [
        "PoP is made by heating a mineral called gypsum. When it is mixed with water, it sets back into hard gypsum, which does not dissolve easily. In a 2013 lab test by the Maharashtra Pollution Control Board (MPCB), a PoP idol kept in a tub of tap water had still not broken apart after 15 days. Only small cracks appeared and some paint came off.",
        "As PoP slowly dissolves bit by bit, calcium sulphate goes into the water and makes it ‘hard’. In the same test, the dissolved oxygen in the water went down from 7.4 to 5.7 mg per litre by the 5th day. Fish breathe the oxygen that is dissolved in water. In a small pond or lake, thousands of idols can change the water much more.",
        "Chemical paints on idols may contain harmful metals such as lead, mercury and cadmium (CPCB). Plastic and thermocol decorations do not break down easily. They float, sink or break into tiny pieces that animals can swallow.",
        "Unbaked natural clay soaks up water, softens and breaks apart into tiny particles. This is what people call ‘dissolving’. In the MPCB test, a natural clay (‘shadu’) idol broke apart in about 30 minutes. The particles make the water muddy for a while, then settle as mud.",
        "Daals are natural food, so microorganisms can break them down (they are biodegradable). Daals themselves have no harmful metals or plastic. But a lot of food rotting in still water is a problem: bacteria use up the oxygen while breaking it down, and the water starts to smell. So daals are best returned to the soil (a garden or compost pit), not dumped in a river."
      ],
      deeper: [
        "VERIFIED (CPCB): The Central Pollution Control Board made its first ‘Guidelines for Idol Immersion’ in 2010, after a Bombay High Court order in 2008. It issued the Revised Guidelines for Idol Immersion on 12 May 2020.",
        "The 2020 guidelines say idols should be made of natural, biodegradable materials like traditional clay, not PoP, plastic or thermocol, and that PoP idols ‘shall be banned’. Licences should go only to idol makers who use natural clay (not PoP or baked clay). In July 2026, CPCB told the Bombay High Court that these guidelines are advisory (advice, not a law), so states and cities make the actual rules.",
        "Colours and decorations: no toxic chemical dyes or oil paints. Use natural colours like turmeric (haldi), chandan and gerua. Ornaments should be made of dried flowers, straw and other natural things, and natural tree resins can be used to make the idol shine. Single-use plastic and thermocol are not allowed.",
        "Before immersion, flowers, leaves, cloth and decorations should be removed and put in separate colour-coded bins. The guidelines also list idols ‘stuffed with eco-friendly food materials such as corn, spinach, wheat and vegetable powder’ as eco-friendly. That is close to your idea of using daals.",
        "Where to immerse: as far as possible in artificial ponds or tanks, not directly in rivers and lakes. At home, put a small idol in a bucket of water until it dissolves completely and let the mud settle. CPCB says a little alum can be stirred in if needed, to help the mud settle. Use the water for gardening, and dry the mud to reuse it for a new idol or as garden soil.",
        "VERIFIED (Delhi, 2026): On 9 September 2026 the Delhi Pollution Control Committee (DPCC) said idols must not be immersed in the Yamuna or other water bodies except at designated sites, and that PoP idols must not be immersed in water bodies. Anyone who breaks this rule may have to pay ₹50,000 as environmental compensation. The Delhi government also set up 81 artificial ponds for Ganesh immersion in September 2026.",
        "VERIFIED (Mann Ki Baat, 28 June 2026, 135th episode): PM Narendra Modi asked people to choose clay Ganesh idols made by local artisans and said, ‘Do not buy idols made of Plaster of Paris at all.’",
        "Courts: In September 2023 the Supreme Court refused to interfere with a Madras High Court order that stopped the sale of PoP Ganesh idols in Tamil Nadu. In Maharashtra, the Bombay High Court finished hearing the PoP idol case and reserved its judgment on 14 August 2026. Check the latest news before saying what the rule in Maharashtra is. The rules are not the same in every state.",
        "Your project file (p27): never throw household trash, plastic bags or puja offerings directly into rivers or water bodies. Use dustbins or puja-material collection bins, like the 4-compartment box in your drawing."
      ],
      careful: [
        "Don't say PoP ‘never’ dissolves. Say it ‘does not dissolve easily’ or ‘takes a very long time’.",
        "Don't call PoP ‘poison’. Doctors use it for plaster casts, and the MPCB study says ‘PoP is not toxic’. The problem is that it does not dissolve easily and it changes the water. The harmful metals mainly come from chemical paints.",
        "Don't say a clay idol causes ‘zero’ pollution. Clay makes water muddy for a while, and thousands of idols add a lot of mud. That is why immersing at home or in an artificial pond is best.",
        "Don't say daals are ‘fish food’ or ‘good for the river’. Say they are natural and biodegradable, and best returned to the soil.",
        "Don't say ‘PoP is banned all over India’. Say: ‘CPCB's guidelines say PoP idols should be banned, but states and cities make the rules. In Delhi, PoP idols must not be immersed in water bodies.’",
        "At Malerkotla you said ‘dissolved clay’. Clay does not truly dissolve like sugar or salt: it soaks up water, breaks into tiny bits and settles as mud. So say ‘clay that breaks down easily in water’. Only call it ‘natural clay’ if it really is, and only describe the colours and daals you really used."
      ],
      point: [
        "Hold an open palm toward the Ganesha (its place on the model: confirm with Avni). Pause for a second so the judge can see it.",
        "Look at the judge when you say ‘PoP does not dissolve easily, so it can harm fish’.",
        "For the home-immersion idea, gently mime lowering it into a bucket with both hands. Keep it short and respectful.",
        "Finish by linking it to your rivers page: ‘This is how we keep our festivals clean too.’"
      ]
    }
  ],

  /* ---------------- PRESENTATION WALKTHROUGH ----------------
     done: true = already practised with the mentor.
     cover:  key points (try these in your own words)
     cues:   stage directions
     sample: peek only after trying                                */
  presentation: [
    {
      id: "p-open", title: "Opening", done: true, seconds: 45,
      cover: ["Jai Hind, name, class, topic", "Why I chose this topic", "Question: where does all this waste go?", "How I can help as a student"],
      cues: ["👀 Stand beside the model, facing the judge. Smile first, then speak.", "⏸ Pause BEFORE “Where does all this waste go?” and look at the judge.", "🖐️ Hands relaxed at your sides or lightly together."],
      sample: "Jai Hind, Ma'am. / I am *Avni Choudhary*, / I am in *Class 6*, / and my topic is *Clean India Mission and Waste Management*. / ... / Every day, we throw away things like plastic, food, fruit peels, paper and bottles. / But — / *where does all this waste go?*"
    },
    {
      id: "p-sbm", title: "Clean India Mission", done: true, seconds: 25,
      cover: ["Swachh Bharat Abhiyan", "2 October 2014", "PM Narendra Modi", "Gandhi Ji's birth anniversary", "Dream of a clean and healthy India"],
      cues: ["➡️ Transition: “So first, let us understand what the Clean India Mission actually is.”", "🔊 Stress the date and ‘Mahatma Gandhi’.", "Say it only ONCE — don't introduce the mission twice."],
      sample: "The Clean India Mission, / also known as *Swachh Bharat Abhiyan*, / was launched on *2 October 2014* / by Prime Minister Narendra Modi / on the birth anniversary of *Mahatma Gandhi*."
    },
    {
      id: "p-wm", title: "Waste Management", done: true, seconds: 30,
      cover: ["Definition", "Separate at source → Collect → Transport → Recycle/Treat → Safely Dispose", "What happens if we don't manage waste"],
      cues: ["🐢 Do NOT rush the 5-step sequence. Count the steps on your fingers if it feels natural.", "👀 Look at the judge for the ‘if not managed’ part."],
      sample: "Waste management means / *separating* waste where it is made, / *collecting*, / *transporting*, / *recycling or treating*, / and *safely disposing* of it."
    },
    {
      id: "p-types", title: "Types of Waste", done: true, seconds: 40,
      cover: ["Biodegradable — broken down by microorganisms (bacteria, fungi)", "Examples (wet + dry biodegradable)", "Non-biodegradable — does not break down easily", "Plastic in river example", "Segregation at source"],
      cues: ["Use ‘does not break down *easily*’ — not ‘never’."],
      sample: ""
    },
    {
      id: "p-7r", title: "The 7Rs", done: true, seconds: 35,
      cover: ["Refuse, Reduce, Reuse, Repair, Repurpose, Recycle, Recover", "Final line"],
      cues: ["🐢 Slow down and make eye contact for the final line.", "⏸ Pause after “The best waste…”"],
      sample: "These 7Rs teach us an important lesson: / *the best waste / is the waste we never create.*"
    },
    {
      id: "p-bridge", title: "Bridge to the Model", done: false, seconds: 10,
      cover: ["Tell the judge you will now show how these ideas look in a real city and village", "Name the two sides: Smart City and Smart Village"],
      cues: ["🖐️ Open your hand across the whole model once, left to right.", "🚶 Step toward the Smart City side."],
      sample: "Now, let me show you how these ideas can work / in a *Smart City* / and a *Smart Village*."
    },
    {
      id: "p-city", title: "Smart City — Solar Buildings", comp: "solar", done: false, seconds: 30,
      cover: ["Two handmade + one real solar panel", "Sunlight → electricity", "Renewable", "Less coal, less pollution (not zero impact)"],
      cues: ["👉 Point to handmade panels, then the real one.", "💡 DEMO: show the bulb glowing.", "👀 Look at the judge for ‘renewable’."]
    },
    {
      id: "p-ctoilet", title: "City Toilets", comp: "citytoilets", done: false, seconds: 15,
      cover: ["Sanitation is part of Clean India", "Stops open defecation", "Protects water and health"],
      cues: ["👉 Point to both toilets together.", "Keep it short."]
    },
    {
      id: "p-ev", title: "EV Charging Station", comp: "ev", done: false, seconds: 25,
      cover: ["What an EV is", "Charging (DEMO)", "No tailpipe smoke", "Depends on how electricity is made"],
      cues: ["🔘 DEMO: press the button, pause 1 second.", "👀 Look at the judge after the light glows."]
    },
    {
      id: "p-bus", title: "Electric Bus Stand", comp: "bus", done: false, seconds: 15,
      cover: ["One bus = many people", "No exhaust smoke", "Cleaner air, less noise"],
      cues: ["🖐️ One sweep of the hand across both buses."]
    },
    {
      id: "p-train", title: "Hydrogen Train", comp: "train", done: false, seconds: 30,
      cover: ["Jind ↔ Sonipat, Haryana — India's first", "Fuel cell: hydrogen + oxygen → electricity", "Main by-product: water vapour", "Depends on how hydrogen is made"],
      cues: ["👉 Trace the track with your finger.", "👀 Eye contact on ‘water vapour’."]
    },
    {
      id: "p-centre", title: "Centre — India & Carbon Emission", comp: "india", done: false, seconds: 35,
      cover: ["What carbon emission is", "Where it comes from", "Global warming", "Windmill = wind energy", "Many parts of the model help reduce emissions", "(Ladder — only after Ma'am confirms)"],
      cues: ["🚶 Move to the centre and stand still.", "⏸ Pause before ‘Many parts of my model show ways to reduce it’."]
    },
    {
      id: "p-bins", title: "Five Dustbins", comp: "bins", done: false, seconds: 35,
      cover: ["Segregation at source", "Wet → compost/biogas", "Dry → recycling", "Black / Red / Yellow (after confirming)", "Mixed waste becomes garbage; separated waste becomes a resource"],
      cues: ["🖐️ Move your hand bin by bin.", "👀 Stop and look at the judge for the last line."]
    },
    {
      id: "p-pman", title: "Plastic Man of India", comp: "plasticman", done: false, seconds: 20,
      cover: ["Prof. Rajagopalan Vasudevan", "Waste plastic in roads", "Padma Shri 2018"],
      cues: ["👉 Point to the photo; 👀 look at the judge on ‘roads’."]
    },
    {
      id: "p-village", title: "Smart Village — Hut, Field, Toilet", comp: "hut", done: false, seconds: 25,
      cover: ["Villages can be clean and use renewable energy", "Digger field (after confirming)", "Village toilet — sanitation"],
      cues: ["🚶 Move your body to the village side — a new ‘chapter’."]
    },
    {
      id: "p-biogas", title: "Biogas Plant", comp: "biogas", done: false, seconds: 35,
      cover: ["Dung + kitchen waste, no oxygen", "Anaerobic digestion", "Methane + CO₂", "Cooking / heating / electricity", "Slurry = fertilizer", "Quote"],
      cues: ["👉 Tank → trace pipe → stove.", "👀 Quote to the judge, slowly."]
    },
    {
      id: "p-water", title: "Factory + Water Filtration", comp: "filter", done: false, seconds: 40,
      cover: ["Sugar & leather industry wastewater", "ETP", "Simple filter: charcoal, stones, cotton", "Clear ≠ safe", "Quote"],
      cues: ["👉 Factory → pipe → pump → filter → clean tank.", "👀 ‘Clear water is not always safe water’ to the judge."]
    },
    {
      id: "p-wte", title: "Plastic-to-Energy", comp: "wte", done: false, seconds: 30,
      cover: ["Waste-to-energy idea (DEMO bulb)", "Never open burning", "Only non-recyclable waste, special plants, pollution control", "Heat → steam → turbine → generator → electricity", "Recycling first"],
      cues: ["💡 DEMO: activate, wait for the bulb.", "👀 ‘Never burn plastic in the open’ to the judge."]
    },
    {
      id: "p-close", title: "Conclusion", done: false, seconds: 30,
      cover: ["Summarise: segregate waste, save energy, clean water, use toilets", "What I as a student can do", "End with a strong line + Thank you"],
      cues: ["🚶 Step back to the centre, facing the judge.", "🖐️ Hands still. No pointing now — only eye contact.", "⏸ Pause before the final line. Smile."],
      sample: "(Try writing your own conclusion first! Then compare with your mentor.)"
    }
  ],

  /* ---------------- VIVA QUESTION BANK ----------------
     level: easy / medium / hard
     points:   what a good answer should include (hidden until you answer)
     keywords: words the website looks for in your typed/spoken answer
     follow:   a follow-up question a judge might ask                  */
  viva: [
    // --- From Avni's project file (stage Q&A)
    { topic: "Project file", level: "easy", q: "What is the difference between an ODF village and an ODF Plus village?",
      points: ["ODF: nobody defecates in the open; every household has and uses a toilet", "ODF Plus: stays ODF AND manages solid waste and liquid waste (dirty water)", "ODF Plus villages also stay visibly clean"],
      keywords: ["toilet", "open", "solid", "liquid", "garbage"], follow: "Name the three stages of ODF Plus." },
    { topic: "Project file", level: "medium", q: "What are the three stages of an ODF Plus village?",
      points: ["Aspiring — ODF + arrangements for solid OR liquid waste", "Rising — ODF + both solid and liquid waste managed", "Model — manages both, visibly clean, shows sanitation messages"],
      keywords: ["aspiring", "rising", "model"], follow: "Which stage is the highest?" },
    { topic: "Project file", level: "easy", q: "What is an eco-brick?",
      points: ["A plastic bottle packed tightly with clean, dry plastic waste", "Becomes hard enough to build with — benches, walls, garden borders", "Keeps non-recyclable plastic out of drains and rivers"],
      keywords: ["bottle", "plastic", "packed", "build"], follow: "Why must the plastic be clean and dry?" },
    { topic: "Project file", level: "easy", q: "What are single-use plastics? Give examples.",
      points: ["Plastic used once for a short time, then thrown away", "Made mostly from petroleum (fossil fuels)", "Examples: carry bags, straws, stirrers, wrappers, packaging"],
      keywords: ["once", "bags", "straws", "throw"], follow: "What can you use instead of a plastic carry bag?" },
    { topic: "Project file", level: "medium", q: "What is the difference between a sewage treatment plant and an effluent treatment plant?",
      points: ["STP treats sewage — dirty water from homes and toilets", "ETP treats effluent — chemical wastewater from factories", "Both stop dirty water from flowing straight into rivers"],
      keywords: ["sewage", "homes", "factories", "industries", "rivers"], follow: "Which one would a leather factory need?" },
    { topic: "Project file", level: "easy", q: "How can we keep our rivers clean?",
      points: ["Never throw garbage, plastic or puja waste into rivers — use collection bins", "Reduce single-use plastic", "Join clean-up drives; plant trees on riverbanks", "Government: sewage treatment plants, factory rules, trash skimmers"],
      keywords: ["throw", "plastic", "puja", "trees", "sewage"], follow: "Why do trees on riverbanks help?" },
    { topic: "Project file", level: "easy", q: "What is afforestation, and how is it different from reforestation?",
      points: ["Afforestation: planting a NEW forest where there was no forest before", "Reforestation: replanting trees where a forest was cut down", "Trees absorb CO₂, stop soil erosion, help rainfall and wildlife"],
      keywords: ["new", "planting", "trees", "carbon"], follow: "How does afforestation help with climate change?" },
    { topic: "Project file", level: "medium", q: "What is green hydrogen, and why is India interested in it?",
      points: ["Hydrogen made by splitting water using renewable electricity (solar/wind)", "Using it releases mainly water, not CO₂", "India's National Green Hydrogen Mission (launched January 2023) wants to cut fossil-fuel use", "India's first hydrogen train runs on the Jind–Sonipat route"],
      keywords: ["water", "renewable", "electricity", "mission", "train"], follow: "What is 'grey' hydrogen?" },
    { topic: "Project file", level: "medium", q: "Why does your filter go from stones at the top to cotton at the bottom?",
      points: ["Water should flow from the coarsest layer to the finest", "Big particles are caught first, so the fine layers don't clog", "Stones & gravel → charcoal → cotton", "Cotton at the bottom also stops charcoal dust coming out"],
      keywords: ["coarse", "fine", "big", "clog", "cotton"], follow: "Is the water safe to drink after your filter?" },
    { topic: "Project file", level: "hard", q: "Why is it important to segregate waste before it goes to a waste-to-energy plant?",
      points: ["Wet waste has a lot of moisture, so it burns badly and wastes energy", "Wet waste is better used for compost or biogas", "Recyclable dry waste should be recycled, not burnt", "Only non-recyclable waste should be used for energy"],
      keywords: ["wet", "moisture", "burn", "recycle", "compost"], follow: "What happens if mixed waste is burnt in the open?" },
    { topic: "Project file", level: "medium", q: "What has the Swachh Bharat Mission achieved in our cities?",
      points: ["About 63.8 lakh home toilets built — 108% of the target", "About 6.36 lakh community and public toilet seats — 125% of the target", "About 2,500 old dumpsites found; more than 1,000 fully cleared"],
      keywords: ["toilets", "lakh", "target", "dumpsite"], follow: "Why is clearing old dumpsites important?" },
    { topic: "Project file", level: "medium", q: "How is India doing on its clean-energy goals?",
      points: ["Goal: 500 GW of non-fossil power by 2030", "India crossed 300 GW in July 2026", "India is 4th in the world in wind power, 3rd in total renewable energy", "Net-zero emissions by 2070"],
      keywords: ["500", "300", "wind", "2070"], follow: "Which renewable source do you think suits Chandigarh best?" },
    { topic: "Project file", level: "hard", q: "Your file says manual sewer cleaning has been eliminated. Is that true?",
      points: ["No — not fully yet", "More than 500 cities have promised to use machines (SafaiMitra Surakshit Shehar)", "Sadly some sanitation workers still lose their lives in sewers", "Chandigarh has won an award for keeping its SafaiMitras safe"],
      keywords: ["no", "machines", "workers", "safe"], follow: "Who are SafaiMitras?" },
    { topic: "Project file", level: "easy", q: "Which single-use plastic items are banned in India?",
      points: ["19 items banned since 1 July 2022", "e.g. plastic straws, cutlery, ear-bud sticks, thermocol decorations", "Thin plastic carry bags are also not allowed"],
      keywords: ["2022", "straws", "banned", "19"], follow: "What do you use instead of a plastic straw?" },
    // --- Clean India / waste basics
    { topic: "Clean India", level: "easy", q: "When and why was the Swachh Bharat Mission launched?",
      points: ["2 October 2014", "Gandhi Ji's birth anniversary", "By PM Narendra Modi", "Clean and healthy India, end open defecation, better waste management"],
      keywords: ["2014", "october", "gandhi", "clean"], follow: "What does ‘Open Defecation Free’ mean?" },
    { topic: "Clean India", level: "medium", q: "What does ODF mean, and why was it important?",
      points: ["Open Defecation Free — everyone uses toilets", "Stops germs spreading to water and food", "Prevents diseases like diarrhoea and cholera", "Safety and dignity, especially for women"],
      keywords: ["open", "defecation", "toilet", "germs", "disease"], follow: "What is ODF Plus?" },
    { topic: "Waste basics", level: "easy", q: "What is the difference between biodegradable and non-biodegradable waste? Give examples.",
      points: ["Biodegradable: broken down by microorganisms — peels, leftover food, paper", "Non-biodegradable: does not break down easily — plastic, glass, metal"],
      keywords: ["microorganism", "bacteria", "plastic", "peel", "break"], follow: "Is all dry waste non-biodegradable?" },
    { topic: "Waste basics", level: "medium", q: "Is paper wet waste or dry waste? Is it biodegradable?",
      points: ["Paper goes in DRY waste", "But paper IS biodegradable", "So dry waste can have both biodegradable and non-biodegradable things"],
      keywords: ["dry", "biodegradable"], follow: "Then why do we put paper in the dry bin and not the wet bin?" },
    { topic: "Segregation", level: "easy", q: "What is waste segregation at source?",
      points: ["Separating waste where it is created — home, school, shop", "Into different bins", "Before it is mixed"],
      keywords: ["separate", "home", "source", "bin"], follow: "Why can't the municipality just separate it later?" },
    { topic: "Segregation", level: "medium", q: "Why is it a problem if we mix wet and dry waste?",
      points: ["Recyclable dry waste becomes dirty and wet — cannot be recycled easily", "Wet waste cannot be composted cleanly", "A lot of mixed waste goes to landfills and dumps → smell, methane, dirty liquid (leachate)", "Workers find it hard and unsafe to sort"],
      keywords: ["recycle", "dirty", "landfill", "compost"], follow: "What is a landfill?" },
    { topic: "Segregation", level: "hard", q: "India's new waste rules talk about four types of segregation. What are they?",
      points: ["Solid Waste Management Rules, 2026 (from 1 April 2026)", "Wet waste", "Dry waste", "Sanitary waste", "Special care waste (medicines, bulbs, paint containers)"],
      keywords: ["wet", "dry", "sanitary", "special"], follow: "Where would you throw an old medicine strip or a fused bulb?" },
    { topic: "Your dustbins", level: "medium", q: "Tell me about the black, red and yellow bins in your model.",
      points: ["Black = domestic hazardous waste (batteries, bulbs, broken glass, paint containers)", "Red = sanitary waste (pads, diapers) — in Chandigarh also used masks and bandages", "Yellow = biomedical waste (confirm with Ma'am)", "This follows Chandigarh's bin system — colours can differ between systems"],
      keywords: ["hazardous", "sanitary", "biomedical", "battery"], follow: "Why must medical waste be kept separate?" },
    { topic: "Your dustbins", level: "hard", q: "Does a red bin mean the same thing everywhere?",
      points: ["No — colours depend on the system", "In Chandigarh homes, red = sanitary waste (and used masks, bandages)", "In hospitals (Bio-Medical Waste Rules 2016), red = contaminated plastic like tubes and gloves", "So always read the label on the bin"],
      keywords: ["no", "sanitary", "hospital", "plastic", "depends"], follow: "Where should a used bandage from a clinic go?" },
    { topic: "7Rs", level: "easy", q: "Name the 7Rs in order.",
      points: ["Refuse", "Reduce", "Reuse", "Repair", "Repurpose", "Recycle", "Recover"],
      keywords: ["refuse", "reduce", "reuse", "repair", "repurpose", "recycle", "recover"], follow: "Which R is the best, and why?" },
    { topic: "7Rs", level: "medium", q: "What is the difference between Reuse and Repurpose? Give an example.",
      points: ["Reuse: use again for the same purpose — refill a water bottle", "Repurpose: use for a NEW purpose — old bottle as a flower pot / pen stand"],
      keywords: ["same", "new", "different", "bottle"], follow: "And Recycle?" },
    { topic: "7Rs", level: "hard", q: "Why is Refuse first and Recover last?",
      points: ["Refuse prevents waste from being created at all", "Recover (energy from waste) still uses up materials and needs special plants", "The earlier R saves more resources — ‘the best waste is the waste we never create’"],
      keywords: ["never", "create", "prevent", "energy"], follow: "Give one thing you personally refuse." },
    { topic: "Compost", level: "easy", q: "What is compost?",
      points: ["Nutrient-rich material", "Formed when biodegradable waste decomposes", "Used to improve soil / as manure"],
      keywords: ["soil", "decompose", "manure", "nutrient"], follow: "How is compost different from biogas slurry?" },

    // --- Model: solar
    { topic: "Solar", level: "easy", q: "How does a solar panel make electricity?",
      points: ["Made of solar (photovoltaic) cells, usually silicon", "Sunlight makes electrons move", "Moving electrons = electric current", "Light energy → electrical energy"],
      keywords: ["sunlight", "cell", "electricity", "silicon", "electron"], follow: "Why does your bulb not glow in a dark room?" },
    { topic: "Solar", level: "medium", q: "Why is solar energy called renewable?",
      points: ["Sunlight will not run out in human time", "Coal and petrol will run out and take millions of years to form"],
      keywords: ["run out", "sun", "again", "fossil"], follow: "Name two other renewable sources in your model." },
    { topic: "Solar", level: "hard", q: "Does solar energy have any disadvantages or environmental impact?",
      points: ["No power at night, less on cloudy days — needs batteries", "Making panels uses energy and materials", "Old panels must be recycled", "Needs space; costs money at the start", "But much less pollution than coal while running"],
      keywords: ["night", "cloud", "battery", "recycle", "cost"], follow: "So why do we still prefer solar over coal?" },

    // --- EV / bus
    { topic: "EV", level: "easy", q: "What is an EV and why is it better for the air?",
      points: ["Electric Vehicle — battery + electric motor", "No petrol/diesel burning", "No tailpipe smoke while running → cleaner city air"],
      keywords: ["battery", "motor", "smoke", "petrol"], follow: "Where does the electricity to charge it come from?" },
    { topic: "EV", level: "hard", q: "If the electricity comes from a coal power plant, is an EV still clean?",
      points: ["Pollution moves from the road to the power plant", "Still helps city air where people live", "Much cleaner if charged with solar/wind — like the solar panels in my model", "Battery making and recycling also matter"],
      keywords: ["coal", "power plant", "solar", "depends"], follow: "How does your model connect solar panels and EVs?" },
    { topic: "Bus", level: "medium", q: "Why is an electric bus better than many electric cars?",
      points: ["One bus carries many people", "Fewer vehicles → less traffic, less energy used per person", "Less space for parking", "Public transport is affordable for everyone"],
      keywords: ["many", "people", "traffic", "fewer"], follow: "What is regenerative braking?" },

    // --- Hydrogen train
    { topic: "Hydrogen train", level: "easy", q: "What comes out of a hydrogen train instead of smoke?",
      points: ["Mainly water vapour (and heat)"],
      keywords: ["water"], follow: "How is the water formed?" },
    { topic: "Hydrogen train", level: "medium", q: "How does a hydrogen fuel cell work?",
      points: ["Hydrogen from the tank + oxygen from the air", "React inside the fuel cell (not burning)", "Produce electricity + water + heat", "Electricity runs the motors"],
      keywords: ["hydrogen", "oxygen", "electricity", "water"], follow: "Is hydrogen burnt like diesel?" },
    { topic: "Hydrogen train", level: "hard", q: "Is a hydrogen train always completely green?",
      points: ["Depends on how the hydrogen is made", "Green hydrogen — electrolysis of water with renewable electricity", "Grey hydrogen — from natural gas, releases CO₂", "The Jind facility makes hydrogen by electrolysis"],
      keywords: ["depends", "made", "electrolysis", "renewable", "green"], follow: "What is electrolysis?" },
    { topic: "Hydrogen train", level: "medium", q: "Tell me about the Jind–Sonipat hydrogen train. Is it running?",
      points: ["India's first hydrogen train", "Flagged off by the Prime Minister at Jind on 17 July 2026", "About 89 km, Haryana, Northern Railway", "Made in India; about 2,600 passengers", "Hydrogen storage/refuelling facility at Jind"],
      keywords: ["jind", "sonipat", "2026", "haryana", "first"], follow: "Why do you think Haryana was chosen?" },

    // --- Toilets & sanitation
    { topic: "Sanitation", level: "easy", q: "Why did you put toilets in both the city and the village?",
      points: ["Sanitation is a main part of Clean India", "Everyone, everywhere needs toilets", "Stops open defecation, protects health and water"],
      keywords: ["sanitation", "open", "health", "everyone"], follow: "Which diseases spread due to poor sanitation?" },
    { topic: "Sanitation", level: "medium", q: "How can open defecation pollute drinking water?",
      points: ["Germs in faeces are washed by rain into ponds, rivers, wells", "Can seep into groundwater", "Flies carry germs to food", "Diarrhoea, cholera, typhoid"],
      keywords: ["rain", "water", "germs", "flies"], follow: "Apart from toilets, what simple habit stops these diseases?" },

    // --- Carbon & energy
    { topic: "Carbon emission", level: "easy", q: "What is carbon emission?",
      points: ["Release of carbon dioxide into the air", "Mainly by burning coal, petrol, diesel, wood, garbage"],
      keywords: ["carbon dioxide", "co2", "burn", "fuel"], follow: "Why is too much carbon dioxide a problem?" },
    { topic: "Carbon emission", level: "medium", q: "What is global warming?",
      points: ["Long-term rise in Earth's average temperature", "Mainly due to more greenhouse gases from human activities", "Like burning fossil fuels", "Greenhouse gases trap heat like a blanket"],
      keywords: ["temperature", "greenhouse", "heat", "fossil"], follow: "Name a greenhouse gas that comes from rotting waste." },
    { topic: "Carbon emission", level: "hard", q: "How is garbage connected to global warming?",
      points: ["Wet waste rotting in landfills makes methane — a strong greenhouse gas", "Burning garbage releases CO₂ and smoke", "Making new things uses energy — recycling/reusing saves it", "Composting and biogas reduce methane escaping"],
      keywords: ["methane", "landfill", "burn", "biogas"], follow: "How does your biogas plant help here?" },
    { topic: "Windmill", level: "easy", q: "How does a windmill make electricity?",
      points: ["Wind turns the blades", "Blades turn a shaft and a generator", "Generator makes electricity", "Kinetic energy → electrical energy"],
      keywords: ["wind", "blade", "generator", "turn"], follow: "What is one limitation of wind energy?" },
    { topic: "Compare", level: "hard", q: "Compare solar energy and wind energy. Which is better?",
      points: ["Both renewable, no smoke while running", "Solar needs sunlight — no power at night", "Wind needs strong wind — not steady everywhere", "Best to use both together, with batteries", "Choice depends on the place"],
      keywords: ["both", "night", "wind", "depends", "together"], follow: "Which one would suit Chandigarh better and why?" },

    // --- Plastic Man
    { topic: "Plastic Man", level: "easy", q: "Who is the Plastic Man of India and why is he famous?",
      points: ["Professor Rajagopalan Vasudevan", "Thiagarajar College of Engineering, Madurai", "Uses waste plastic to build roads", "Padma Shri 2018"],
      keywords: ["vasudevan", "road", "plastic", "padma"], follow: "How exactly is plastic used in a road?" },
    { topic: "Plastic Man", level: "medium", q: "How is plastic used in making roads?",
      points: ["Plastic shredded into small pieces", "Coated on hot stones — melts and sticks", "Mixed with bitumen", "Road resists water better, fewer potholes"],
      keywords: ["shred", "hot", "stone", "bitumen"], follow: "Does this mean we can use as much plastic as we like?" },
    { topic: "Plastic Man", level: "hard", q: "If plastic roads are possible, why do we still need to reduce plastic?",
      points: ["Not all plastic can be collected — much ends up in drains, rivers, oceans", "Roads use only a small part of plastic waste", "Plastic breaks into microplastics", "Refuse and Reduce come before Recover"],
      keywords: ["reduce", "river", "ocean", "microplastic", "refuse"], follow: "What single-use plastic do you avoid?" },

    // --- Biogas
    { topic: "Biogas", level: "easy", q: "What is biogas made from?",
      points: ["Cow dung, food/kitchen waste, plant/crop waste", "Rotting without oxygen"],
      keywords: ["dung", "waste", "oxygen"], follow: "What is this process called?" },
    { topic: "Biogas", level: "medium", q: "What is anaerobic digestion?",
      points: ["Breakdown of organic waste by microorganisms", "WITHOUT oxygen", "In a closed tank called a digester", "Produces biogas + slurry"],
      keywords: ["without oxygen", "bacteria", "microorganism", "digester"], follow: "What gases are in biogas?" },
    { topic: "Biogas", level: "hard", q: "What if biogas is not available in a village?",
      points: ["More firewood/fossil fuels → cutting trees, smoke, greenhouse gases", "Organic waste lies unused and pollutes", "Biogas turns waste into useful energy", "Quote: Turn waste into energy, not pollution"],
      keywords: ["wood", "fossil", "smoke", "waste", "energy"], follow: "Who is most harmed by smoky kitchens?" },
    { topic: "Compare", level: "hard", q: "What is the difference between compost and biogas?",
      points: ["Compost: aerobic (with oxygen), open pit, gives manure only", "Biogas: anaerobic (without oxygen), closed tank, gives fuel gas + slurry manure"],
      keywords: ["oxygen", "aerobic", "anaerobic", "gas", "manure"], follow: "Which one would you choose for a school canteen?" },

    // --- Water
    { topic: "Filtration", level: "easy", q: "What does each layer in your filter do?",
      points: ["Stones: stop bigger particles", "Charcoal: traps some colour, smell and impurities", "Cotton: traps fine particles, holds layers"],
      keywords: ["stone", "charcoal", "cotton", "particle"], follow: "Which layer is at the top in your model, and why?" },
    { topic: "Filtration", level: "medium", q: "The water from your filter looks clean. Can we drink it?",
      points: ["No — not guaranteed safe", "May still have germs (bacteria, viruses)", "May have dissolved chemicals", "Germs: boiling / chlorination / UV; dissolved chemicals: RO or special treatment — and testing"],
      keywords: ["no", "germs", "boil", "dissolved"], follow: "What is the difference between filtration and purification?" },
    { topic: "ETP", level: "medium", q: "How can wastewater from sugar or leather industries be treated?",
      points: ["Effluent Treatment Plant (ETP)", "Removes solids, harmful chemicals, impurities", "Physical, biological, chemical steps", "Treated water reused or discharged as per safety standards"],
      keywords: ["etp", "effluent", "treatment", "chemical"], follow: "Why is leather-industry water especially dangerous?" },
    { topic: "ETP", level: "hard", q: "Why is leather-industry wastewater especially harmful?",
      points: ["Tanning often uses chromium salts", "Chromium can be toxic to people and aquatic life", "Needs special chemical treatment in the ETP", "Also salts and other chemicals"],
      keywords: ["chromium", "tanning", "toxic"], follow: "And sugar-mill wastewater — what is its problem?" },
    { topic: "ETP", level: "hard", q: "Is your filter demonstration an ETP?",
      points: ["No — it shows only a simple physical filtration step", "A real ETP has physical, biological and chemical treatment", "Built on a large scale with testing"],
      keywords: ["no", "simple", "biological", "chemical"], follow: "What does the ‘biological’ step mean?" },

    // --- Waste-to-energy
    { topic: "Waste-to-energy", level: "medium", q: "Can we just burn plastic to make electricity?",
      points: ["NO open burning — poisonous gases (dioxins, furans), smoke", "Only non-recyclable waste", "In special closed plants with pollution control", "Heat → steam → turbine → generator → electricity"],
      keywords: ["no", "poison", "harmful", "control", "turbine"], follow: "Then why not recycle all plastic?" },
    { topic: "Waste-to-energy", level: "hard", q: "Which is better: recycling plastic or making energy from it?",
      points: ["Recycling/reuse is preferred for recyclable plastic", "Keeps the material in use, saves more energy", "Energy recovery (Recover) is the LAST R — for waste that cannot be recycled"],
      keywords: ["recycle", "better", "last", "cannot"], follow: "Give an example of plastic that is hard to recycle." },
    { topic: "Waste-to-energy", level: "medium", q: "Explain the path from waste to electricity in your machine.",
      points: ["Waste → controlled high-temperature treatment → heat", "Heat → water → steam", "Steam → turbine → generator → electricity", "Bulb shows the electricity"],
      keywords: ["heat", "steam", "turbine", "generator"], follow: "What happens to the smoke in a real plant?" },

    // --- Personal / big picture
    { topic: "You", level: "easy", q: "What can YOU do as a student for Clean India?",
      points: ["Segregate waste at home and school", "Carry a cloth bag and steel bottle — refuse single-use plastic", "Don't litter; use dustbins", "Save water and electricity", "Tell family and friends"],
      keywords: ["segregate", "bag", "bottle", "litter", "save"], follow: "What did you personally change after making this model?" },
    { topic: "You", level: "medium", q: "Which part of your model do you like the most and why?",
      points: ["Pick ONE part and explain it confidently", "Give a real reason (it works, it solves a real problem, you learnt something new)"],
      keywords: [], follow: "What was the hardest part to make?" },
    { topic: "You", level: "hard", q: "If you had more time, what would you add or improve in your model?",
      points: ["Any sensible idea, e.g. a compost pit, smart bin with a fill-level sensor, a label for each part", "Say WHY it would help"],
      keywords: [], follow: "How does a smart bin with a sensor work?" },
    { topic: "Smart tech", level: "medium", q: "How can technology like AI and IoT help in waste management?",
      points: ["IoT = Internet of Things", "Smart bins with sensors can tell when they are nearly full and send alerts", "Better collection routes, fewer overflowing bins", "AI cameras/robots can help identify and sort waste"],
      keywords: ["sensor", "full", "sort", "internet"], follow: "What does IoT stand for?" },
    // 🏅 Real questions from the Malerkotla level (asked) and likely Delhi follow-ups
    { topic: "Eco Ganesha", level: "easy", q: "Why did you make an eco-friendly Ganesha?", points: ["Idols made of PoP (Plaster of Paris) do not dissolve easily: they stay in the water for a long time and change the water", "Chemical paints can contain harmful metals (like lead and mercury), and plastic or thermocol decorations become litter", "This can harm fish and other aquatic animals", "So I made mine with clay that breaks down easily in water, and daals, which are natural and biodegradable", "Best immersed at home in a bucket; the water goes to plants and the mud can be reused"], keywords: ["plaster", "pop", "dissolve", "clay", "aquatic", "fish", "daal", "paint"], follow: "What is Plaster of Paris made of?", asked: "Malerkotla", said: "Ganesha made of plastic and POP is harmful to aquatic animals, so I used dissolved clay and daals to make it.", better: "✅ A good reason — the judges liked it! For Gorakhpur, say WHY PoP harms (it does not break down easily; chemical paints can contain harmful metals), and say ‘clay that breaks down easily in water’ instead of ‘dissolved clay’." },
    { topic: "Eco Ganesha", level: "medium", q: "What is Plaster of Paris made of, and why doesn't a PoP idol dissolve easily?", points: ["PoP is calcium sulphate hemihydrate, made by heating gypsum (at 373 K, about 100 °C, as in the NCERT Class 10 book)", "When mixed with water it sets back into hard gypsum", "Hard gypsum does not dissolve easily: in an MPCB lab test, a PoP idol had not broken apart even after 15 days", "In the same test, a natural clay idol broke apart in about 30 minutes"], keywords: ["gypsum", "calcium", "sulphate", "heating", "hard", "water"], follow: "Where else is Plaster of Paris used? (Plaster casts for broken bones, toys, decorations)" },
    { topic: "Eco Ganesha", level: "medium", q: "How exactly do PoP idols and chemical paints harm aquatic animals?", points: ["PoP stays in the water and slowly makes it ‘hard’, with more calcium, sulphate and dissolved solids", "Dissolved oxygen went down in the MPCB test (7.4 to 5.7 mg per litre by day 5), and fish need dissolved oxygen to breathe", "Chemical paints may contain harmful metals like lead, mercury and cadmium (CPCB)", "Plastic and thermocol decorations float, sink and break into tiny pieces that animals can swallow", "Thousands of idols in one lake or pond make the effect much bigger"], keywords: ["oxygen", "hard", "metals", "lead", "mercury", "plastic", "fish"], follow: "Which natural colours can be used instead of chemical paints?" },
    { topic: "Eco Ganesha", level: "hard", q: "Won't the daals in your Ganesha pollute the water?", points: ["Daals are natural and biodegradable: microorganisms break them down", "Daals themselves have no harmful metals or plastic, unlike some chemical paints and decorations", "But a lot of food rotting in still water uses up oxygen and smells, so even natural offerings should not be dumped in rivers", "That's why I would immerse it at home in a bucket and put the water, mud and daals into the garden soil or compost"], keywords: ["biodegradable", "natural", "oxygen", "rot", "bucket", "soil", "compost"], follow: "What happens to the daals in the garden soil?" },
    { topic: "Eco Ganesha", level: "hard", q: "If clay breaks down in water, why not just immerse your Ganesha in a river?", points: ["Even clay makes water muddy for a while and settles as mud; thousands of idols add a lot of mud", "Flowers, cloth, decorations and food offerings would also end up in the river", "CPCB guidelines: as far as possible, immerse in a bucket at home or in artificial ponds or tanks, not directly in rivers and lakes", "In Delhi, idols may be immersed in the Yamuna only at designated sites (DPCC, September 2026)", "At home, the mud can be reused for a new idol or as garden soil, so nothing is wasted"], keywords: ["muddy", "mud", "artificial", "pond", "bucket", "rules", "yamuna"], follow: "So is a clay idol completely pollution-free?" },
    { topic: "Eco Ganesha", level: "hard", q: "What do the official guidelines say about making and immersing idols?", points: ["CPCB Revised Guidelines for Idol Immersion, 12 May 2020 (the first guidelines came in 2010)", "Idols should be made of natural clay; PoP idols should be banned; no plastic or thermocol", "Natural colours (turmeric, chandan, gerua), not toxic chemical or oil paints", "Remove flowers, cloth and decorations before immersion and segregate them", "Immerse at home in a bucket or in artificial ponds, and reuse the mud"], keywords: ["cpcb", "2020", "clay", "ban", "natural", "colours", "artificial", "bucket"], follow: "Are these rules the same in every state? (No: CPCB's guidelines are advice, and states and cities make the rules. In Delhi, people who break the immersion rules may have to pay ₹50,000, and in Maharashtra the Bombay High Court reserved its judgment on PoP idols in August 2026.)" },
    { topic: "Eco Ganesha", level: "easy", q: "How should we immerse your eco-friendly Ganesha at home?", points: ["First remove the flowers, cloth and any decorations; flowers go to the green bin or compost", "Place the idol in a bucket of water and leave it until the clay breaks down", "Let the mud settle", "Pour the water on plants; use the mud in the garden or to make next year's idol"], keywords: ["bucket", "water", "settle", "plants", "garden", "mud", "flowers"], follow: "What would you do with the flowers and cloth?" },
    { topic: "Eco Ganesha", level: "medium", q: "How is your eco-friendly Ganesha linked to the Clean India Mission?", points: ["Clean India also means clean rivers, lakes and ponds, not only clean streets", "My project file (p27): never throw puja offerings into rivers; use collection bins", "It uses three of the 7Rs: Refuse PoP and plastic, Reduce waste, Reuse the clay", "It shows festivals can be celebrated in a clean, green way; PM Modi also asked for clay idols in Mann Ki Baat (June 2026)"], keywords: ["rivers", "puja", "7rs", "refuse", "reuse", "festival", "clean"], follow: "What other festival waste can we reduce?" },
    { topic: "Biogas", level: "easy", q: "Which gas is present in biogas?", points: ["Mainly methane (CH₄): about 50–70%, more than half", "Carbon dioxide (CO₂): most of the rest", "Small amounts of water vapour and hydrogen sulphide (rotten-egg smell), plus tiny traces of other gases", "It is a mixture, not pure methane; the amounts change with the waste used", "Methane is the gas that burns and gives heat for cooking"], keywords: ["methane", "carbon dioxide", "CH4", "mixture", "hydrogen sulphide", "burns"], follow: "Which of these gases actually burns?", asked: "Malerkotla", said: "methane and carbon dioxide", better: "✅ Correct! For Gorakhpur, add: it is MAINLY methane (about 50–70%), and methane is the gas that burns." },
    { topic: "Biogas", level: "medium", q: "Which of these gases burns, and why doesn't carbon dioxide burn?", points: ["Methane burns; carbon dioxide does not", "Methane + oxygen → carbon dioxide + water + heat (CH₄ + 2O₂ → CO₂ + 2H₂O)", "CO₂ is what you get after carbon has already burnt, so there is no fuel left in it", "More CO₂ in biogas means less heat; CO₂ is even used in some fire extinguishers"], keywords: ["methane", "burns", "oxygen", "already burnt", "fire extinguisher"], follow: "Then why don't we remove the carbon dioxide?" },
    { topic: "Biogas", level: "medium", q: "Methane has no smell. Then why does a biogas plant sometimes smell like rotten eggs?", points: ["The smell comes from hydrogen sulphide (H₂S), a tiny part of biogas made while the waste breaks down", "H₂S is a poisonous gas, and with water it can form acids that slowly corrode (eat away) stoves, pipes and engines", "At high levels, H₂S can stop you smelling it, so you can't rely on your nose", "Some plants remove it, for example with iron-oxide filters", "A closed, well-sealed digester keeps the smell inside"], keywords: ["hydrogen sulphide", "H2S", "rotten egg", "corrode", "filter"], follow: "Is it safe to breathe biogas?" },
    { topic: "Biogas", level: "hard", q: "Methane is a strong greenhouse gas. Isn't it wrong to make it on purpose?", points: ["In big dumps and landfills, wet waste rots without air and makes methane anyway, and there it escapes", "A biogas plant catches that methane in a closed tank and uses it", "Burning turns methane into CO₂ and water; over 20 years methane traps about 80 times more heat than CO₂", "Biogas also replaces firewood and dung cakes", "Tanks and pipes must not leak, or the benefit is lost"], keywords: ["anyway", "capture", "burn", "carbon dioxide", "leak", "dump"], follow: "So is biogas completely pollution-free?" },
    { topic: "Biogas", level: "medium", q: "Why must the digester be closed and airtight?", points: ["The methane-making microbes (methanogens, which belong to a group of microbes called archaea) need a place with no oxygen to grow", "Bacteria first break the waste into acids; the methanogens then make methane", "With too much air, oxygen-using microbes turn the waste mostly into CO₂ and water, like compost, so little methane is made", "A closed tank collects the gas for the stove and keeps it from escaping", "It also keeps the smell in and stops methane mixing with air, which is a fire risk"], keywords: ["oxygen", "methanogens", "anaerobic", "escape", "airtight"], follow: "How is this different from making compost?" },
    { topic: "Biogas", level: "hard", q: "What is the difference between biogas, LPG and CBG?", points: ["LPG: mainly propane and butane from petroleum and natural gas (fossil fuels); it turns into a liquid under pressure", "Biogas: about 50–70% methane made from today's waste, so it is renewable; a home plant sends it through a pipe to the stove", "CBG: biogas cleaned (CO₂, H₂S and water vapour removed) to at least 90% methane, then compressed to high pressure (up to about 250 times normal air pressure)", "CBG has almost the same properties as CNG, so CNG vehicles can use it"], keywords: ["propane", "butane", "fossil", "renewable", "90%", "CNG"], follow: "Why can't biogas be filled in an LPG cylinder?" },
    { topic: "Biogas", level: "medium", q: "Is biogas dangerous? What safety rules are needed near a biogas plant?", points: ["A well-built, well-run plant is safe, but methane burns easily, like LPG", "Keep flames, matches and smoking away from the tank and pipes", "Check for leaks with soapy water (bubbles), not with a flame", "Close the gas valve after cooking", "Do not climb into a biogas tank: there may be too little oxygen and poisonous gases. Sadly, there have been accidents in India when people went inside to clean tanks. Only trained adults with safety equipment should do it"], keywords: ["burns", "flame", "soap", "leak", "valve", "tank"], follow: "Why is a smell added to LPG?" },
    { topic: "7Rs", level: "easy", q: "What is Reduce?", points: ["Reduce means using LESS, so less waste is made", "Examples: write on both sides of each page, take only as much food as you can eat, choose things with less packaging", "Saying NO to things we don't need is Refuse (the 1st R); Reduce is the 2nd R", "Using less also saves water, energy and money"], keywords: ["less", "paper", "food", "packaging"], follow: "Then what is the difference between Refuse and Reduce?", asked: "Malerkotla", said: "saying no", better: "⚠️ Careful — “saying no” is REFUSE (the 1st R). REDUCE means using LESS. Next time: “Reduce means using less — for example, writing on both sides of the paper.” Remember: Refuse = say NO, Reduce = use LESS." },
    { topic: "Plastic", level: "medium", q: "What are the other ways to use waste plastic?", points: ["First, Refuse and Reduce single-use plastic — the best waste is the waste we never create", "Reuse or repurpose it (e.g. an old bottle as a plant pot)", "Recycle clean, segregated plastic into new things", "Plastic roads: shredded plastic coats hot stones, which are then mixed with bitumen (Prof. R. Vasudevan, the Plastic Man of India)", "Eco-bricks: clean, dry plastic packed tightly into a bottle to build benches and small walls", "Waste-to-energy (Recover) — only for plastic that cannot be recycled, in controlled plants, never open burning"], keywords: ["recycle", "road", "eco-brick", "energy", "reuse", "refuse"], follow: "Which is better: recycling plastic or making energy from it?", asked: "Malerkotla", said: "waste to energy and eco-brick", better: "✅ Good — both are real ways! For Gorakhpur, add recycling and plastic roads, and say waste-to-energy is only for plastic that cannot be recycled." },
    // 🏙️ Likely questions about Uttar Pradesh at the national fair
    { topic: "Uttar Pradesh", level: "easy", q: "Tell me two schemes of Uttar Pradesh under Clean India Mission.", points: ["Swachh Bharat Mission (Urban): Lucknow processes all its fresh waste (Jan 2026)", "Swachh Bharat Mission (Grameen): UP said all villages reached ODF Plus (Sept 2023)", "Bonus: UP's polythene ban from 15 July 2018; Swachh Survekshan awards"], keywords: ["SBM Urban", "SBM Grameen", "ODF Plus", "Lucknow"], follow: "What does ODF Plus mean? (Toilets plus solid and liquid waste management.)" },
    { topic: "Uttar Pradesh", level: "easy", q: "Which UP city came third among big cities in Swachh Survekshan 2024-25?", points: ["Lucknow", "3rd among cities with more than 10 lakh people", "First UP city with 7-star Garbage Free City rating", "Awards on 17 July 2025"], keywords: ["Lucknow", "third", "7-star"], follow: "Which cities came first and second? (Ahmedabad and Bhopal.)" },
    { topic: "Uttar Pradesh", level: "medium", q: "Is there any biogas plant near Gorakhpur like the one in your model?", points: ["Indian Oil CBG plant, Dhuriapar, Gorakhpur district", "Opened in March 2024", "About 200 tonnes a day of paddy straw, press mud, cow dung", "Makes compressed biogas and organic manure", "Helps reduce straw burning"], keywords: ["Dhuriapar", "CBG", "paddy straw", "manure"], follow: "How is CBG different from biogas? (Cleaned to remove CO2 and moisture, then compressed.)" },
    { topic: "Uttar Pradesh", level: "medium", q: "What is the difference between fresh waste and legacy waste? Give a UP example.", points: ["Fresh waste = collected every day", "Legacy waste = old waste piled up for years", "Lucknow processes all fresh waste (Jan 2026)", "At Shivri, about 12.86 of 18.5 lakh tonnes of old waste had been biomined by Jan 2026"], keywords: ["legacy", "biomining", "Shivri", "fresh waste"], follow: "What is biomining? (Sorting old waste with machines into soil, fuel and recyclables.)" },
    { topic: "Uttar Pradesh", level: "hard", q: "Your model has a hydrogen train. Is hydrogen transport used in Uttar Pradesh?", points: ["On 12 June 2026, UP started 3 hydrogen buses near Jewar airport", "Also 45 electric buses (11 to Lucknow)", "Hydrogen fuel cells give out mainly water vapour and heat — no smoke", "Hydrogen is clean only if made with clean energy"], keywords: ["hydrogen bus", "Jewar", "fuel cell", "green hydrogen"], follow: "Is all hydrogen green? (No; it is green only when made using renewable electricity.)" },
    { topic: "Uttar Pradesh", level: "hard", q: "What is UP's solar target, and how is it doing on rooftop solar?", points: ["UP Solar Energy Policy 2022: target 22,000 MW by 2026-27", "PM Surya Ghar: 74,796 rooftop plants in September 2026, most of any state", "More than 8.5 lakh rooftop plants by early October 2026", "Target is not yet confirmed as achieved"], keywords: ["22,000 MW", "PM Surya Ghar", "rooftop", "target"], follow: "Why is rooftop solar useful? (Power made where it is used; lower bills; less coal power.)" },
    // 🌫️ Likely haze / clean-air questions in Delhi
    { topic: "Haze", level: "easy", q: "What is the AQI, and who publishes it in India?", points: ["AQI means Air Quality Index", "It is published by the Central Pollution Control Board (CPCB)", "It gives one number from 0 to 500, one colour and one name", "Six bands: Good, Satisfactory, Moderate, Poor, Very Poor and Severe", "The worst pollutant decides the AQI; Delhi's official figure is the 24-hour average in CPCB's 4 pm bulletin"], keywords: ["air quality", "cpcb", "500", "poor", "severe"], follow: "Which AQI band is shown in dark red, and what does it mean for health?" },
    { topic: "Haze", level: "easy", q: "Why does Delhi's air get worse in October and November?", points: ["Delhi's own vehicles, road and building dust, factories and garbage fires pollute the air through the year", "After the paddy harvest, some farmers in Punjab and Haryana burn the straw (parali), and winds from the north-west can carry the smoke to Delhi", "Cool air and slow winds keep smoke and dust close to the ground; a layer of warmer air higher up, called an inversion, acts like a lid", "Delhi lies in a wide, flat plain, far from the sea, so on calm winter days the smoky air has no easy way out", "Firecrackers around Diwali (8 November 2026) add smoke for a few days"], keywords: ["vehicle", "dust", "burn", "inversion", "wind", "cracker"], follow: "Which of these causes does your model help to reduce?" },
    { topic: "Haze", level: "medium", q: "What is the difference between PM2.5 and PM10?", points: ["PM means particulate matter: tiny bits of dust, smoke and soot", "PM10 is 10 micrometres or smaller; PM2.5 is 2.5 micrometres or smaller", "A hair is about 70 micrometres thick, so PM2.5 is about 30 times thinner", "Smaller bits can go deeper into the lungs", "Smoke has many PM2.5 bits; road dust has many bigger PM10 bits", "The AQI uses the 24-hour average of each"], keywords: ["particulate", "micro", "hair", "lung", "2.5"], follow: "Which one comes more from smoke, and which more from road dust?" },
    { topic: "Haze", level: "medium", q: "What can farmers do with paddy straw instead of burning it?", points: ["In the field: a Super SMS (Super Straw Management System) chops and spreads the straw; a Happy Seeder or Surface Seeder sows wheat through it and leaves it as mulch, and a Super Seeder mixes it into the soil", "The straw returns nutrients to the soil (PAU: burning 1 tonne loses about 400 kg of organic carbon)", "Out of the field: balers press straw into bundles for compressed biogas (CBG) plants, like the one at Lehragaga in Sangrur", "Straw pellets replace some coal in power plants and brick kilns (at least 30% for brick kilns in Punjab and in Haryana outside the NCR, from 1 November 2026)", "Other uses: cattle bedding, fodder, mushroom growing, packaging", "Machines on subsidy, and custom hiring centres that rent out machines, help small farmers"], keywords: ["happy seeder", "super seeder", "mulch", "bale", "cbg", "pellet"], follow: "Why do some farmers still burn straw?" },
    { topic: "Haze", level: "hard", q: "What is GRAP, how does it work, and was it in force when you came to Delhi?", points: ["Graded Response Action Plan: the step-by-step plan for bad-air days in Delhi and the NCR (Delhi and the cities around it), run by CAQM; first notified in 2017", "Stage 1: AQI 201–300 (Poor); Stage 2: 301–400 (Very Poor); Stage 3: 401–450 (Severe); Stage 4: above 450 (Severe+). CAQM can start a stage early, using forecasts", "Each higher stage keeps the earlier actions and adds stricter ones", "Examples: strict checks on open burning and more CNG and electric buses (1); higher parking fees (2); most construction stops and older cars are restricted (3); even big public projects stop and older trucks are kept out of Delhi (4)", "CAQM revised it on 21 November 2025 and 28 September 2026; Stage 1 has 25 actions", "In 2026, stages were in force from January to 16 March (Stage 4 from 17 to 20 January), and Stage 1 again from 16 April to 4 May and from 19 to 29 May", "From 1 to 17 October 2026, Delhi's daily AQI stayed between 83 and 187, and no stage had been started as of 17 October 2026; check the news before you travel. GRAP is only for Delhi and the NCR — it does not apply in Gorakhpur"], keywords: ["graded", "caqm", "stage", "201", "poor", "450"], follow: "Which part of your model matches a GRAP Stage 1 action?" },
    { topic: "Haze", level: "hard", q: "Isn't burning straw pellets in power plants, or using CBG, also pollution?", points: ["Yes, burning any fuel that has carbon in it (coal, straw, biogas) makes CO₂. But in a power plant the pellets replace some coal, and the plant has dust filters, unlike an open field", "CBG comes from straw broken down in closed tanks, and it is used as vehicle fuel in place of fossil CNG or petrol", "The carbon in straw came from CO₂ the rice plant took in while growing, so it adds less new carbon than burning coal", "Open-field burning releases smoke at ground level over huge areas within a few weeks", "Collecting and moving straw needs diesel and money, so the system is not perfect", "Leftover slurry from CBG plants can become organic manure"], keywords: ["cleaner", "coal", "filter", "carbon dioxide", "closed", "manure"], follow: "Which is better: leaving straw in the soil, or sending it to a plant?" },
    // 🏅 Real questions from the North Zone level in Delhi, and e-waste practice
    { topic: "Delhi", level: "medium", q: "Tell me two schemes of Delhi.", points: ["Delhi Ko Koode Se Azaadi = Delhi Government campaign, started on 1 August 2025 by CM Rekha Gupta as a month-long drive to clean every street, colony and market.", "Ek Ped Maa Ke Naam = all-India campaign by PM Narendra Modi, started on 5 June 2024 (World Environment Day). He planted a peepal sapling at Buddha Jayanti Park, Delhi.", "Honest way to say it: 'One is Delhi's own campaign, and the other is a national campaign that was launched in Delhi.'", "Link to my model: both are about a clean and green city, which is what Swachh Bharat and waste segregation also aim for."], keywords: ["Delhi Ko Koode Se Azaadi", "1 August 2025", "Rekha Gupta", "Ek Ped Maa Ke Naam", "national campaign", "5 June 2024", "World Environment Day"], follow: "Who launched Ek Ped Maa Ke Naam, and is it only for Delhi?", asked: "Delhi", said: "Ek Ped Maa Ke Naam and Delhi Ko Kude Se Azadi", better: "⚠️ Half right. 'Delhi Ko Koode Se Azaadi' is a Delhi Government cleanliness campaign (launched by Chief Minister Rekha Gupta on 1 August 2025). 'Ek Ped Maa Ke Naam' is a national campaign launched by Prime Minister Narendra Modi in Delhi on World Environment Day, 5 June 2024, so it is not only for Delhi." },
    { topic: "Biogas", level: "easy", q: "Which gas is present in biogas?", points: ["Main gas: methane (CH4), usually about 50–70% (it changes with the waste used).", "Second gas: carbon dioxide (CO2), roughly 30–45%.", "Small traces: hydrogen sulphide (rotten-egg smell) and water vapour.", "Made when bacteria break down wet waste without air (anaerobic digestion).", "Leftover slurry is a good manure."], keywords: ["methane", "50–70%", "carbon dioxide", "burns", "anaerobic", "wet waste", "slurry manure"], follow: "Which of these two gases burns? Why is biogas better than burning cow dung cakes?", asked: "Delhi", said: "methane and carbon dioxide", better: "✅ Correct. Next level: say 'Mostly methane, about 50 to 70 percent, and the rest is mainly carbon dioxide. Methane is the gas that burns, so biogas works as a cooking fuel.'" },
    { topic: "Hydrogen train", level: "medium", q: "What is the waste (by-product) of a hydrogen train?", points: ["A fuel cell joins hydrogen with oxygen from the air to make electricity.", "PIB (16 July 2026): the process 'produces only water vapour and heat as byproducts'.", "No burning, so no smoke from the train.", "India's first hydrogen train was inaugurated on 17 July 2026 on the Jind–Sonipat section (Haryana).", "Honest note: it is fully clean only if the hydrogen itself is made with clean energy (green hydrogen)."], keywords: ["fuel cell", "hydrogen + oxygen", "water vapour", "heat", "by-product", "no smoke", "Jind–Sonipat"], follow: "Where does the oxygen come from? Is hydrogen 100% green?", asked: "Delhi", said: "water vapour and heat", better: "✅ Correct, and it matches the Government (PIB, 16 July 2026) wording exactly. Next level: 'by-product' is a better word than 'waste', because water vapour is harmless, and there is no smoke or carbon dioxide from the train itself." },
    { topic: "E-waste", level: "hard", q: "What is e-waste?", points: ["Definition: discarded electrical and electronic equipment (anything with a plug, battery or circuit).", "Examples: mobile phones, chargers, earphones, laptops, TVs, remote controls, CFL bulbs.", "Harmful: lead, mercury, cadmium and brominated flame retardants can harm soil, water and health if burnt or broken open.", "Valuable: copper, silver, gold and other metals can be recovered by proper recycling.", "Law: E-Waste (Management) Rules, 2022, in force from 1 April 2023 (106 types of equipment, EPR for companies, only registered recyclers).", "India made about 13.97 lakh tonnes of e-waste in 2024-25 (CPCB data, Lok Sabha reply, August 2025).", "What to do: give it to the company's take-back / collection point or a registered recycler."], keywords: ["discarded electronic equipment", "lead", "mercury", "gold copper silver", "E-Waste Rules 2022", "registered recycler", "EPR"], follow: "Why can't we put e-waste with dry waste or burn it? What does EPR mean?", asked: "Delhi", said: "e-waste is electronic waste", better: "⚠️ Correct but too short. Say: 'E-waste is old, broken or thrown-away electrical and electronic things, like mobile phones, chargers, laptops, TVs and bulbs. It has harmful metals like lead and mercury, but also useful metals like copper, silver and gold, so it must go to an authorised recycler, never to burning or open dismantling.'" },
    { topic: "E-waste", level: "medium", q: "What is EPR?", points: ["Extended Producer Responsibility", "The company that makes or sells a product is responsible for it even after we throw it", "Under E-Waste Rules 2022, producers must meet recycling targets through registered recyclers", "Recyclers give EPR certificates on the CPCB online portal"], keywords: ["Extended Producer Responsibility", "producer", "recycling target", "EPR certificate", "CPCB portal"], follow: "Give one example of a company's take-back system." },
    { topic: "E-waste", level: "medium", q: "What changed in the E-Waste Rules 2022 compared to 2016?", points: ["In force from 1 April 2023", "Covers 106 types of equipment, including solar panels", "Only registered manufacturers, producers, refurbishers and recyclers on the CPCB portal", "EPR targets met only through registered recyclers (EPR certificates)", "Environmental compensation for breaking the rules"], keywords: ["1 April 2023", "106 items", "solar panels", "registration", "EPR certificates", "environmental compensation"], follow: "Why were solar panels added?" },
    { topic: "E-waste", level: "easy", q: "Why should we not burn e-waste or break it open in the open?", points: ["Releases toxic smoke and metals like lead, mercury and cadmium", "Pollutes air, soil and water", "Harms the health of workers and children", "Valuable metals are wasted; proper recycling recovers them safely"], keywords: ["toxic smoke", "lead", "mercury", "pollution", "health", "safe recycling"], follow: "Who should recycle e-waste then?" },
    { topic: "E-waste", level: "hard", q: "How do the new Solid Waste Management Rules 2026 treat e-waste?", points: ["Notified on 27 January 2026, in force from 1 April 2026", "Four streams: wet, dry, sanitary, special care", "E-waste and battery waste are not covered by these rules — they have their own separate rules", "Special care waste at home includes CFLs, tube lights, mercury thermometers, waste batteries, expired medicines", "Material Recovery Facilities can act as deposition centres for e-waste"], keywords: ["SWM Rules 2026", "four streams", "special care waste", "separate rules", "Material Recovery Facility"], follow: "Which stream would a used tube light go into?" },
    { topic: "E-waste", level: "medium", q: "How can a student reduce e-waste?", points: ["Use gadgets longer and repair them", "Give working old phones to someone who needs them (reuse)", "Buy only what is needed", "Give dead gadgets to take-back points or registered recyclers", "Make others aware — like in this model"], keywords: ["repair", "reuse", "reduce", "take-back", "awareness"], follow: "What is the difference between refurbishing and recycling?" },
    // 🏫 About Vidya Bharati and the Vigyan Mela
    { topic: "Vidya Bharati", level: "easy", q: "Do you know where and when the first Vidya Bharati school started?", points: ["The first Saraswati Shishu Mandir started in 1952", "It was in Gorakhpur, at Pakki Bagh", "This national fair is being held at that same school"], keywords: ["1952", "Gorakhpur", "Pakki Bagh", "Saraswati Shishu Mandir"], follow: "When did Vidya Bharati become an all-India organisation? (1977)" },
    { topic: "Vidya Bharati", level: "easy", q: "Which levels did you cross to reach this national fair?", points: ["School level first", "Then sankul / district level", "Prant level at Malerkotla (1st prize)", "Kshetra level, North Zone, in Delhi (1st prize)", "Now Akhil Bharatiya level in Gorakhpur"], keywords: ["school", "prant", "kshetra", "Akhil Bharatiya"], follow: "Which kshetra are you from? (Uttar Kshetra / North Zone)" },
    { topic: "Vidya Bharati", level: "easy", q: "How will your model be judged?", points: ["Out of 40 marks", "Neatness and order (systematism and tidiness), 10", "Showing how it works (process presentation), 10", "Explaining it in my own words (expression), 10", "Written details of the model, 10, given as two written copies"], keywords: ["40 marks", "tidiness", "process", "expression", "written details"], follow: "How many charts are you allowed to use? (Only two)" }
  ],

  /* ---------------- VOICE & EXPRESSION TIPS ---------------- */
  voiceTips: [
    "Speak to the judge who is farthest from you — that gives a good volume without shouting.",
    "Slow down on numbers, names and quotes: 2 October 2014, Jind–Sonipat, Rajagopalan Vasudevan.",
    "Pause (count ‘one’ in your head) after every section, before you move to the next part of the model.",
    "Stress 1–2 key words in each sentence, not every word.",
    "End sentences with a steady voice — don't let your voice go up like a question.",
    "Drink water before you start. Breathe in once before your opening line."
  ],
  expressionTips: [
    "Judge → model → judge. Look at the model only while pointing, then come back to the judge.",
    "Point with an open palm or two fingers together — not a single sharp finger at people.",
    "Stand at the SIDE of the model, never block it with your body.",
    "When you demonstrate (solar bulb, EV button, plastic machine), stay silent for one second and let the judge see it.",
    "Smile at the start and at the end. In the middle, look interested and calm.",
    "If you forget, look at the model — it is your map. Continue from the part you are pointing at.",
    "If you don't know an answer: “I am not sure, Ma'am, but I think…” is better than guessing wildly."
  ],

  sources: [
    { text: "PIB — India's First Hydrogen-Powered Train (July 2026)", url: "https://www.pib.gov.in/FactsheetDetails.aspx?id=150774&NoteId=150774&ModuleId=16&reg=48&lang=1" },
    { text: "PIB — Hydrogen fuel cell train, ~2,600 passengers", url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2285240&reg=3&lang=1" },
    { text: "GreenH — Hydrogen production & refuelling station at Jind", url: "https://www.greenh.in/hydrogen-production-hydrogen-refueling-station-at-jind-haryana/" },
    { text: "PIB — New Solid Waste Management Rules, from 1 April 2026", url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2219676&reg=3&lang=1" },
    { text: "Tribune — Chandigarh MC makes 4-bin waste system mandatory (2026)", url: "https://www.tribuneindia.com/news/chandigarh/mc-makes-4-bin-waste-system-mandatory-warns-of-challans/" },
    { text: "Tribune — Chandigarh MC House approves draft solid waste bye-laws (2026)", url: "https://www.tribuneindia.com/news/chandigarh/chandigarh-mc-house-approves-draft-solid-waste-mgmt-bylaws/" },
    { text: "Solid Waste Management Rules, 2026 — Gazette text (PIB)", url: "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/jan/doc2026129773501.pdf" },
    { text: "Tribune — Chandigarh: after green, blue bins, now black and red (2022)", url: "https://www.tribuneindia.com/news/chandigarh/chandigarh-after-green-blue-waste-bins-now-black-and-red-372864/amp" },
    { text: "DD News — New waste rules from April 1: four-way segregation", url: "https://ddnews.gov.in/en/new-waste-rules-from-april-1-four-way-segregation-mandatory-strict-penalties-for-violations/" },
    { text: "AIIMS — Bio-medical waste colour coding (BMW Rules 2016)", url: "https://www.aiims.edu/images/pdf/Departments_Centers/BiomedicalWaste/Biomedical%20waste%20docs%20nurses.pdf" },
    { text: "Swachh Bharat Mission (Grameen) — About", url: "https://swachhbharatmission.ddws.gov.in/about_sbm" },
    { text: "PIB — SBM Grameen factsheet", url: "https://www.pib.gov.in/FactsheetDetails.aspx?Id=148579&reg=48&lang=2" },
    { text: "Rajagopalan Vasudevan (Wikipedia)", url: "https://en.wikipedia.org/wiki/Rajagopalan_Vasudevan" },
    { text: "Scroll.in — Padma Shri winner uses plastic waste to build roads", url: "https://scroll.in/article/866510/plastic-is-poor-mans-friend-padma-shri-winner-rajagopalan-vasudevan-uses-waste-to-build-roads" }
  ]
};
