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
    fairDate: "2026-10-24",          // next event (start day)
    achievements: ["🏆 First prize — Malerkotla level (October 2026)"],
    nextEvent: { name: "North Zone level", place: "Delhi", start: "2026-10-24", end: "2026-10-26" },
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
    { date: "2026-10-15", go: "viva", label: "Thu 15 Oct", task: "Celebrate! 🎉 Then write down EVERY question the Malerkotla judges asked, what you answered, and anything they said. Send it to your mentor." },
    { date: "2026-10-16", go: "viva", label: "Fri 16 Oct", task: "❓ Viva → 🎧 Judge mode: 10 questions. Then 🤖 Eco-Dost → 🎲 Quiz me: 10 questions. Ask Rajnish Ma'am about the parent consent letter, the participation proforma and your synopsis copies." },
    { date: "2026-10-17", go: "trip", label: "Sat 17 Oct", task: "Check the model: repair anything loose, test all 4 demos (solar bulb, EV light, filter, plastic-to-energy bulb). Measure the model (not bigger than 5 × 3 ft) and check that NO part uses thermocol. Start the 🧳 trip kit." },
    { date: "2026-10-18", go: "walk", label: "Sun 18 Oct", task: "Two full explanations with the timer, standing beside the model. Record one and check speed, filler words and volume." },
    { date: "2026-10-19", go: "delhi", label: "Mon 19 Oct", task: "Zone-level questions: what is NEW in your model, its limitations, how you would improve it, and what it cost. Then learn the ⭐ top lines in 🏙️ Delhi updates and tick the ones you can say, and read 🌫️ Haze & clean air." },
    { date: "2026-10-20", go: "thoughts", label: "Tue 20 Oct", task: "Hindi practice: explain three parts of your model in Hindi (judges may ask in Hindi). Use 💭 Thoughts → हिंदी. Start writing your 📝 synopsis: 2 neat copies, with the list of parts." },
    { date: "2026-10-21", go: "score", label: "Wed 21 Oct", task: "Mock judging at home or school: full explanation + 10 surprise questions from a family member or teacher. Mark yourself in 📊 Score." },
    { date: "2026-10-22", go: "trip", label: "Thu 22 Oct", task: "Light revision only. Pack the model safely for travel (see 🧳 trip checklist). Charge everything. Ask a grown-up to check the Delhi news once more for anything new." },
    { date: "2026-10-23", go: "stage", label: "Fri 23 Oct", task: "Rest and travel. Read only your headings, favourite thoughts and the 3 quotes. Sleep early." },
    { date: "2026-10-24", go: "stage", label: "Sat 24 Oct", task: "North Zone, Delhi — day 1. Set up early, test every demo, warm-up, smile. Note any new questions the judges ask." },
    { date: "2026-10-25", go: "stage", label: "Sun 25 Oct", task: "Day 2. Same calm routine. Be friendly with other participants — learn from their models too." },
    { date: "2026-10-26", go: "stage", label: "Mon 26 Oct", task: "Day 3. Last day — give it your best and enjoy every moment! 🌟" }
  ],

  /* ---------------- 🧳 DELHI TRIP CHECKLIST ---------------- */
  trip: [
    { id: "box", group: "Model", item: "Strong box or carton for the model, with padding (old cloth, newspaper or bubble wrap); write your name and school on it" },
    { id: "loose", group: "Model", item: "Pack small loose parts (bins, buses, car, train, pots, windmill) in a separate labelled bag" },
    { id: "photo", group: "Model", item: "Photos of the full model from above, so you can rebuild it the same way" },
    { id: "bulbs", group: "Spares", item: "Spare bulbs/LEDs for the solar demo and the plastic-to-energy machine" },
    { id: "cells", group: "Spares", item: "Spare batteries/cells for the EV light and the machine bulb" },
    { id: "wires", group: "Spares", item: "Spare wires, insulation tape, glue, double-sided tape, scissors and a few pieces of cardboard" },
    { id: "lamp", group: "Spares", item: "A strong lamp for the solar demo — exhibition halls are often indoors. Test at home that it lights the bulb" },
    { id: "filter", group: "Filter demo", item: "Extra charcoal, stones, sand (if used) and cotton; a bottle of muddy water or soil to make it; a tray, tissues and a small towel for spills" },
    { id: "file", group: "Papers", item: "Your project file (with the sticky-note corrections), printed project report and the QR card" },
    { id: "cue", group: "Papers", item: "Your cue card with headings and favourite thoughts" },
    { id: "power", group: "Power", item: "Extension board and phone charger/power bank (if the model or demos need power)" },
    { id: "self", group: "You", item: "Water bottle, light snacks, school ID card, comfortable shoes" },
    { id: "synopsis", group: "Fair rules (official)", item: "2 written copies of your synopsis, with the list of parts (Bal Varg must list the parts)" },
    { id: "consent", group: "Fair rules (official)", item: "Parent consent letter — needed at every level" },
    { id: "proforma", group: "Fair rules (official)", item: "Participation proforma signed by the sanyojaks — ask your school" },
    { id: "uniform", group: "Fair rules (official)", item: "School uniform — must be worn during the competition" },
    { id: "nothermo", group: "Fair rules (official)", item: "Check every part: NO thermocol in any form (strictly banned). Replace any with cardboard" },
    { id: "size", group: "Fair rules (official)", item: "Measure the model: not bigger than 5 ft × 3 ft (about 152 cm × 91 cm)" },
    { id: "charts", group: "Fair rules (official)", item: "Not more than 2 charts" },
    { id: "masks", group: "Health (haze season)", item: "2–3 close-fitting N95 masks, in case Delhi's air is Poor (ask your parents first). Cloth masks don't stop the tiny particles" },
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
      "💧 Dirty water passes through charcoal, stones and cotton and comes out clearer (a first cleaning step — not drinking-safe).",
      "💡 The plastic-to-energy machine lights a bulb to show the idea of recovering energy from waste that cannot be recycled."
    ],
    materials: [
      "One large green wooden base (the whole model is on one level)",
      "Cardboard and paper — buildings, two handmade solar panels, hut",
      "One real solar panel with a bulb/LED",
      "EV charging station with a toy car, a button and a green light",
      "Two model electric buses, and a hydrogen train on a railway track",
      "Charcoal, stones and cotton in a container (water filter)",
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
        "Filtration: water passes from coarse to fine layers — stones and gravel → sand → charcoal → cotton — which hold back particles; charcoal also traps some chemicals and smells. Filtered water is clearer but not safe to drink without more treatment.",
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
        "Water: the sugar and leather industry shows that factory wastewater must be treated in an Effluent Treatment Plant (ETP). In the demonstration filter, dirty water flows through stones and gravel, sand, charcoal and cotton and comes out clearer.",
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
      filter:       { concept: "Filtration — separating particles from water", link: "A first cleaning step; clear water is not always safe water", visitor: "Dirty water passes through charcoal, stones and cotton and comes out clearer." },
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
      note: "Point down the filter layer by layer: stones first, then sand (only if your model has it), then charcoal, then cotton. Say 'clearer', not 'safe to drink', because filtered water still needs boiling or purifying before drinking." },
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

  /* ---------------- 🎤 STAGE PRESENTATION (4 October 2026) ----------------
     The speech is built from Avni's own project file and her practised opening.
     versions: "full" (about 5–6 min), "medium" (about 3 min). The 1-minute version is "short".
     Avni: change any line into your own words — just keep the facts. */
  stage: {
    date: "2026-10-24",
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
        cover: ["Multi-layer filter: coarsest → finest", "Stones & gravel → sand → charcoal → cotton", "Clearer is not always safe", "Factories: effluent treatment plants; cities: sewage treatment plants", "Never throw garbage or puja waste into rivers"],
        cues: ["✋ Show the layers going down with your hand, top to bottom.", "👀 Say “clear water is not always safe” directly to the judges."],
        sample: "Clean water is *precious*. / In my project, I made a *multi-layer filter*. / Water flows from the coarsest layer to the finest: / *stones and gravel*, / then *sand*, / then *charcoal*, / and finally *cotton*. / The water comes out *clearer* — / but clear water is *not always safe* to drink. / Factories must treat their wastewater / in *effluent treatment plants*, / and cities need *sewage treatment plants*, / so that dirty water never flows straight into our rivers. / And we must never throw garbage or puja waste into rivers — / it should go into special collection bins." },
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

  /* ---------------- 🌫️ HAZE & CLEAN AIR ----------------
     Fact-checked for the 2026 haze season. aqi + pmBreakpoints = CPCB National AQI (the live widget uses
     them to ESTIMATE an AQI from forecast PM2.5/PM10). comp = the model part a line links to. */
  haze: {
    intro: "Avni, you present your model in Delhi on 24–26 October 2026, when North India's winter haze season usually begins, so judges may ask you about smog and clean air. At the top you can see an estimate of Delhi's air. Below it, read why haze comes, how your model helps, and lines you can say on stage, and check the health tips before your trip.",
    officialNote: "This number is only an estimate made from PM2.5 and PM10 forecast data (CAMS, through Open-Meteo), not CPCB's official AQI. For Delhi's official AQI, check CPCB's SAMEER app or CPCB's 4 pm bulletin.",
    aqi: [{"name": "Good", "hi": "अच्छा", "min": 0, "max": 50, "color": "#00B050", "health": "Minimal impact. No special care is needed."}, {"name": "Satisfactory", "hi": "संतोषजनक", "min": 51, "max": 100, "color": "#92D050", "health": "A few sensitive people, like those with weak lungs, may feel a little breathing discomfort."}, {"name": "Moderate", "hi": "मध्यम", "min": 101, "max": 200, "color": "#FFFF00", "health": "People with asthma, lung disease or heart disease may find it uncomfortable to breathe."}, {"name": "Poor", "hi": "ख़राब", "min": 201, "max": 300, "color": "#FFA500", "health": "Most people may feel breathing discomfort if they stay out in this air for a long time."}, {"name": "Very Poor", "hi": "बहुत ख़राब", "min": 301, "max": 400, "color": "#FF0000", "health": "Staying out in this air for a long time can make people ill with breathing problems."}, {"name": "Severe", "hi": "गंभीर", "min": 401, "max": 500, "color": "#C00000", "health": "Even healthy people are affected, and people who are already ill can get much worse."}],
    pmBreakpoints: {"pm25": [[0, 30], [31, 60], [61, 90], [91, 120], [121, 250], [251, 380]], "pm10": [[0, 50], [51, 100], [101, 250], [251, 350], [351, 430], [431, 510]], "source": "CPCB's National Air Quality Index, 24-hour breakpoints in µg/m³ (CPCB 'About National Air Quality Index': https://cpcb.gov.in/displaypdf.php?id=bmF0aW9uYWwtYWlyLXF1YWxpdHktaW5kZXgvQWJvdXRfQVFJLnBkZg==). PM2.5: 0–30, 31–60, 61–90, 91–120, 121–250, 250+. PM10: 0–50, 51–100, 101–250, 251–350, 351–430, 430+. IMPORTANT: CPCB gives the Severe band no upper limit. The caps of 380 (PM2.5) and 510 (PM10) are NOT in the CPCB table; they carry the Very Poor slope forward so that Severe maps onto 401–500, which fits the explanation that PM2.5 of 380 µg/m³ or more is reported as AQI 500 (Santosh Harish, The Quint, 14 Nov 2019). Cap the AQI at 500. Method: round C to a whole number; sub-index = Ilo + (C − Blo) × (Ihi − Ilo) / (Bhi − Blo), linear inside each band; AQI = the larger of the PM2.5 and PM10 sub-indices (CPCB uses the worst sub-index). An official AQI needs 24-hour averages and at least 3 pollutants, one of them PM2.5 or PM10, so an AQI made from forecast PM data is only an estimate. Colours and health text: CPCB daily NCR AQI bulletins (#00B050, #92D050, #FFFF00, #FFA500, #FF0000, #C00000), e.g. https://cpcb.gov.in/upload/Downloads/Delhi-NCR/NCR_AQI_Bulletin_2026_10_16.pdf (the old cpcb.nic.in links redirect to cpcb.gov.in). 'Moderate' is called 'Moderately Polluted' in the 2014 NAQI report."},
    grap: [{"stage": "Stage I", "aqi": "201–300 (Poor)", "actions": ["Strict checks so that no garbage, leaves or crop waste is burnt in the open (in Delhi this is banned on every day of the year)", "Machines sweep roads and spray water, and building sites must use water sprays and covers to stop dust", "More CNG and electric buses and Metro trips, running more often, so that people can leave their cars at home", "No coal or firewood in hotel and dhaba tandoors, limits on diesel generators, and checks that vehicles have a valid pollution-check (PUC) certificate"]}, {"stage": "Stage II", "aqi": "301–400 (Very Poor)", "actions": ["Parking fees go up, to make people think twice before taking the car", "Roads are swept and sprinkled with water every day, with dust-settling sprays at dusty hotspots", "Government offices in Delhi and nearby cities may start at different times, so that roads are less crowded"]}, {"stage": "Stage III", "aqi": "401–450 (Severe)", "actions": ["Non-essential construction and demolition work stops, and stone crushers and mines close", "Older cars are restricted in Delhi and nearby districts: BS-III or older petrol and BS-IV or older diesel ('BS' means Bharat Stage, India's pollution rules for vehicles; a higher number is cleaner). Sonipat was added on 28 September 2026", "Classes up to Class 5 can be held in hybrid mode (in school or online)", "Offices may work with half their staff in office and the rest working from home"]}, {"stage": "Stage IV", "aqi": "Above 450 (Severe+)", "actions": ["Trucks are stopped from entering Delhi, except cleaner ones that run on CNG, LNG or electricity, or are BS-VI diesel", "Construction stops even on big public projects like highways and flyovers", "Classes 6 to 9 and 11 can move to hybrid mode", "State governments may take extra emergency steps, like closing colleges or 'odd-even', where cars with odd and even number plates run on different days"]}],
    grapSource: "CAQM's Graded Response Action Plan (GRAP) for Delhi-NCR, as revised on 21 November 2025 and 28 September 2026 (Tribune, 22 Nov 2025; News On AIR, 29 Sep 2026; GKToday, 30 Sep 2026), and CPCB's daily 4 pm AQI bulletins. The AQI levels of the four stages did not change. The actions shown are simple examples, not the full list. Check caqm.nic.in on 23 October 2026 for any change.",
    grapMentor: "GRAP was first notified under MoEFCC in 2017. Version used: CAQM's revised schedule of 13 Dec 2024 (approved by the Supreme Court on 12 Dec 2024), revised on 21 Nov 2025 (several actions moved one stage earlier: CNG/electric public transport augmentation with higher frequency and off-peak fares moved from Stage II to Stage I; staggered office timings from Stage III to Stage II; 50% work from home from Stage IV to Stage III; ratified at CAQM's 26th meeting on 22 Dec 2025; Tribune 22 Nov 2025; News On AIR 22 Nov 2025; TeamLease RegTech summary of the CAQM order). Modified again at CAQM's 30th Full Commission meeting on 28 Sep 2026: 48 actions (25 in Stage I, 8 in II, 10 in III, 5 in IV), repeated measures merged into Stage I, Stage III curbs on BS-III petrol and BS-IV diesel light vehicles extended to Sonipat, over 1,800 closure orders (News On AIR, 29 Sep 2026, https://newsonair.gov.in/caqm-approves-revised-grap-schedule-for-national-capital-region/). Diesel-generator and inter-state BS-IV bus actions moved from Stage II to Stage I and citizen-charter actions rose from 22 to 34 (ThePrint, 29 Sep 2026; GKToday, 30 Sep 2026). Removal of the essential-goods exemption for BS-IV and older goods vehicles (light/medium at Stage III, heavy at Stage IV): GKToday, 30 Sep 2026 only, so 'likely'. Thresholds unchanged: Stage I 201–300, II 301–400, III 401–450, IV above 450 (CAQM Stage-I order of 19 May 2026; CAQM press release of 29 May 2026; ETV Bharat, 16 Apr 2026). Supreme Court orders of 5 Dec 2024 briefly used AQI 350 and 400 as triggers; its order of 17 Feb 2025 relaxed these back to the approved schedule. Stages can be invoked in advance on IMD/IITM forecasts. From 1 to 17 Oct 2026, CPCB's 4 pm bulletins gave Delhi an AQI between 83 (12 Oct) and 187 (4 Oct), and no GRAP stage was invoked; the latest Stage I spell found was 19 to 29 May 2026.",
    causes: [{"icon": "🚗", "name": "Vehicles", "text": "Petrol and diesel vehicles give out smoke with tiny particles and harmful gases on every day of the year. Slow, heavy traffic adds even more, because engines keep running while vehicles crawl."}, {"icon": "🚧", "name": "Road and building dust", "text": "Dust from roads, open ground, and building and demolition sites is thrown into the air by wheels and wind."}, {"icon": "🏭", "name": "Factories and power plants", "text": "Factories and power plants that burn coal and other fuels send smoke and gases into the air."}, {"icon": "🔥", "name": "Burning garbage and leaves", "text": "Burning garbage, dry leaves and plastic in the open makes thick smoke. Burning wood, coal or dung cakes for cooking and heating adds smoke too."}, {"icon": "🌾", "name": "Burning crop stubble (parali)", "text": "After the paddy (rice) harvest in October and November, some farmers in Punjab and Haryana burn the leftover straw, because they have only a short time before sowing wheat. Winds from the north-west can carry the smoke towards Delhi. How much of it reaches Delhi changes from day to day with the wind."}, {"icon": "❄️", "name": "Cold air and temperature inversion", "text": "On cold winter nights, a layer of cold air stays near the ground with warmer air above it. The warm layer works like a lid on a pot, so smoke and dust cannot rise and spread out."}, {"icon": "🍃", "name": "Slow winds", "text": "In winter the wind is often weak. Without a good wind, smoke and dust are not blown away, so they pile up day after day."}, {"icon": "🎆", "name": "Firecrackers", "text": "Firecrackers fill the air with smoke for a few days around festivals. In 2026, Diwali falls on Sunday, 8 November, after the Vigyan Mela."}],
    pm: "PM means 'particulate matter': tiny bits of dust, smoke and soot floating in the air, measured in micrograms per cubic metre (µg/m³), which means millionths of a gram in a box of air 1 metre on each side. PM10 bits are 10 micrometres or smaller, about 7 times thinner than a human hair, which is about 70 micrometres thick. PM2.5 bits are 2.5 micrometres or smaller, about 30 times thinner than a hair, so they can go deep into our lungs.",
    health: ["Check Delhi's AQI each morning on the SAMEER app or website of the Central Pollution Control Board (CPCB) before you plan the day.", "On days when the AQI is above 200 (Poor or worse), don't run, jog or play hard games outside, especially in the early morning and late evening.", "On those days, stay indoors as much as you can, and keep doors and windows shut in the early morning and late evening.", "Keep away from roads with slow, heavy traffic and from dusty building sites.", "If your parents or teacher advise it, wear a close-fitting N95 or N99 mask (a special mask that filters tiny particles) outside. Cloth masks, paper masks, handkerchiefs and scarves don't stop the tiny particles.", "Drink enough water, and eat fresh fruits and vegetables.", "After being outside, wash your eyes with clean running water and gargle with warm water.", "If you feel breathless or dizzy, cough a lot, have chest pain, or your eyes turn red and watery, tell your teacher or parent at once so they can take you to a doctor. If you have asthma, keep your medicines with you."],
    healthSource: "Health Ministry (MoHFW/NCDC) 'Health Advisory on Air Pollution', October 2025 (ncdc.mohfw.gov.in/uploads/pdf/air2.pdf), and WHO India's 'Advisory for Air Pollution'. This is general advice, not medical advice.",
    healthMentor: "MoHFW/NCDC 'Health Advisory on Air Pollution' under the National Programme on Climate Change and Human Health (NPCCHH), dated October 2025 and sent to States/UTs on 01.11.2025 (https://ncdc.mohfw.gov.in/uploads/pdf/air2.pdf). Tips come from Annexure I (IEC messages) and Annexure II (social media messages): check the daily AQI; when AQI is above 200, avoid outdoor walks, jogging and hard exercise in the morning and late evening; keep doors and windows shut at those hours and ventilate, if necessary, between 12 noon and 4 pm; avoid busy roads and construction sites; a close-fitting N95/N99 mask is optional and helpful, while paper masks, handkerchiefs, scarves and cloth are not effective; drink enough water and eat fruit and vegetables; wash eyes and gargle with warm water; see a doctor for breathlessness, giddiness, cough, chest pain or red/watery eyes; people with lung or heart disease should keep prescribed medicines ready; wet mopping instead of sweeping. WHO India (SEARO) 'Advisory for Air Pollution': an N95 must fit tightly, and paper 'dust' masks, scarves and bandanas do not stop PM2.5 (https://cdn.who.int/media/docs/default-source/searo/india/news-pdf/advisory-for-air-pollution.pdf). CPCB's SAMEER app gives hourly National AQI updates (data.gov.in catalogue 'Sameer (National Air Quality Index)'). Caveat: a 2019 study (PMC6908682) notes that few masks are designed and tested for children, so an adult should check the fit.",
    modelLinks: [
      { id: "hz-ml-ev", comp: "ev", say: "An electric car has no exhaust pipe, so it gives out no smoke on the road. If more people in Delhi drive electric cars and scooters, there can be less exhaust smoke in the air. Charging them with electricity from solar panels, like the ones in my Smart City, is even better.", hi: "इलेक्ट्रिक गाड़ी में धुआँ छोड़ने वाला पाइप ही नहीं होता, इसलिए सड़क पर उससे धुआँ नहीं निकलता। अगर उसे सौर ऊर्जा से चार्ज किया जाए — मेरे मॉडल में भी सोलर पैनल लगे हैं — तो और भी अच्छा है।", mentor: "Her EV charger 'sends electricity from the power supply'; the solar panels are separate (on three buildings), so never say her charger is solar-powered. OECD, 'Non-exhaust Particulate Emissions from Road Transport' (Dec 2020): EVs remove exhaust emissions, but tyre wear, road wear and road dust thrown back into the air remain big PM sources (regenerative braking cuts brake wear). In 2025, coal was India's biggest source of electricity (1,247 TWh; Argus, from CEA data, Jan 2026). So 'no tailpipe smoke' is correct and 'no pollution' is wrong. Delhi EV Policy 2026 (notified 1 Jul 2026) covers NEW registrations only (electric autos from 1 Jan 2027, electric two-wheelers from 1 Apr 2028; on her d-ev-policy card), so never say petrol scooters are banned. Do NOT say 'EVs are pollution-free'.", source: "https://www.oecd.org/en/publications/non-exhaust-particulate-emissions-from-road-transport_4a4dc6ca-en.html ; https://www.argusmedia.com/en/news-and-insights/latest-market-news/2776029-india-posts-first-coal-power-output-fall-in-5-years", sourceDate: "Dec 2020; Jan 2026", confidence: "confirmed" },
      { id: "hz-ml-bus", comp: "bus", say: "One electric bus carries many people at once and gives out no tailpipe smoke, so fewer cars and less smoke are on the road. When Delhi's air turns Poor, Stage 1 of GRAP, Delhi's emergency plan for bad air, asks for more CNG and electric buses that run more often, so that more people can leave their cars at home.", hi: "एक इलेक्ट्रिक बस एक साथ बहुत से लोगों को ले जाती है और उससे धुआँ नहीं निकलता। जब दिल्ली की हवा 'ख़राब' हो जाती है, तो ख़राब हवा से निपटने की योजना (ग्रैप) के पहले चरण में ज़्यादा सीएनजी और इलेक्ट्रिक बसें चलाई जाती हैं, ताकि ज़्यादा लोग अपनी कारें घर पर छोड़ सकें।", mentor: "CAQM's revision of 21 Nov 2025 moved 'augmenting CNG and electric public transport fleets with higher service frequency' (with off-peak fares) from Stage II to Stage I (Tribune, 22 Nov 2025; TeamLease RegTech summary of the CAQM order). The 28 Sep 2026 revision merged repeated transport measures into Stage I (News On AIR, 29 Sep 2026; GKToday, 30 Sep 2026). Higher parking fees remain a Stage II (Very Poor) example. The 150 new e-buses of 13 Oct 2026 (5,238 e-buses in all; ETV Bharat/UNI) are on her d-ebuses card, so don't repeat them here. Do NOT give a 'one bus = X cars' number; none was verified.", source: "https://www.tribuneindia.com/news/delhi/caqm-makes-grap-more-stringent-in-delhi-ncr-amid-worsening-air-quality", sourceDate: "22 Nov 2025; 29 Sep 2026", confidence: "confirmed" },
      { id: "hz-ml-train", comp: "train", say: "My hydrogen train makes no diesel smoke, so a train like it adds no smoke to the haze along its route. The real one in Haryana runs to Sonipat, a city in the National Capital Region, where Delhi's GRAP plan for bad air also applies.", hi: "मेरी हाइड्रोजन ट्रेन से डीज़ल का धुआँ नहीं निकलता, इसलिए ऐसी ट्रेन अपने रास्ते में धुंध में धुआँ नहीं जोड़ती।", mentor: "The flag-off of 17 Jul 2026 on the 89 km Jind–Gohana–Sonipat route (IANS; DT Next) is on her d-hydrogen-train card, so don't repeat it here. How clean hydrogen is depends on how it is made, so say 'no smoke from the train', never 'pollution-free'. If a judge asks: at the 28 Sep 2026 GRAP revision, Stage III curbs on BS-III petrol and BS-IV diesel cars were extended to Sonipat (News On AIR, 29 Sep 2026; GKToday, 30 Sep 2026). Do not mention ridership.", source: "https://newsonair.gov.in/caqm-approves-revised-grap-schedule-for-national-capital-region/", sourceDate: "17 Jul 2026; 29 Sep 2026", confidence: "confirmed" },
      { id: "hz-ml-solar", comp: "solar", say: "My solar panels make electricity from sunlight without burning anything. In 2025, coal was the biggest source of India's electricity, so more solar panels can mean less coal is burnt in power plants.", hi: "मेरे सोलर पैनल धूप से बिना कुछ जलाए बिजली बनाते हैं। 2025 में भारत की सबसे ज़्यादा बिजली कोयले से बनी थी, इसलिए जितने ज़्यादा सोलर पैनल होंगे, उतना कम कोयला जलाना पड़ सकता है।", mentor: "Coal-power generation in 2025 was 1,247 TWh, down 3.4% from 2024, India's first fall in coal power in five years (Argus, from CEA data, Jan 2026; CREA India Power Sector Review 2025). Haze and dust on panels cut their output: in a Duke University and IIT Gandhinagar study (Environmental Science & Technology Letters, 23 Jun 2017), efficiency jumped about 50% when panels left uncleaned for weeks were cleaned. So in smoggy weather, panels need regular cleaning. Don't quote percentages on stage. The Delhi rooftop-solar plan (Sep 2026) is on her Delhi cards.", source: "https://www.argusmedia.com/en/news-and-insights/latest-market-news/2776029-india-posts-first-coal-power-output-fall-in-5-years ; https://energyandcleanair.org/wp/wp-content/uploads/2026/01/CREA_India-Power-Sector-Review-2025.pdf ; https://phys.org/news/2017-09-air-pollution-india-solar-success.html", sourceDate: "Jan 2026; 23 Jun 2017", confidence: "confirmed" },
      { id: "hz-ml-windmill", comp: "windmill", say: "My windmill shows wind energy: a real wind turbine makes electricity from moving air, without burning anything. Wind matters for haze too: a strong wind blows smoke away, while calm winter air lets it pile up.", hi: "मेरी पवनचक्की पवन ऊर्जा दिखाती है — असली पवन टरबाइन चलती हवा से बिना कुछ जलाए बिजली बनाती है। तेज़ हवा धुंध को उड़ा ले जाती है, जबकि सर्दियों की रुकी हुई हवा में धुआँ जमा होता रहता है।", mentor: "Her model windmill is not confirmed to make electricity (component note; card md-windmill-working), so say it 'shows wind energy'. CAQM's assessment of 30 Nov 2023: low temperatures caused frequent inversions that reduced the mixing height, and low-speed north-westerly winds brought pollutants in. Down To Earth: low wind speed and moisture trap pollutants. Example, only if asked: CAQM's press release of 29 May 2026 says Delhi's AQI 'recorded 207 on 28.05.2026 … improved to 123 on 29.05.2026', helped by 'strong winds accompanied by light rain', and GRAP Stage I was lifted. Do NOT say her windmill blows smog away: the wind point is about weather, the windmill point is about clean electricity.", source: "https://caqm.nic.in/WriteReadData/LINKS/30112023-f1eb783c-9a74-432a-9326-d06934b79cef.pdf ; https://www.downtoearth.org.in/news/air/rising-moisture-low-wind-speed-trap-pollutants-in-delhi-s-air-67276 ; CAQM press release, 29 May 2026 (caqm.nic.in)", sourceDate: "30 Nov 2023; 29 May 2026", confidence: "confirmed" },
      { id: "hz-ml-biogas", comp: "biogas", say: "Burning dung cakes, wood or crop waste makes smoke. My biogas plant shows a cleaner way: cow dung and kitchen waste rot in a closed tank and give gas for cooking, so less smoke goes into the air. Paddy straw can be turned into biogas in the same way, instead of being burnt in the fields.", hi: "गोबर के उपले, लकड़ी या फ़सल का कचरा जलाने से धुआँ होता है। मेरा बायोगैस प्लांट एक साफ़ तरीक़ा दिखाता है: गोबर और रसोई का कचरा बंद टैंक में सड़ता है और खाना पकाने की गैस बनती है, जिससे हवा में कम धुआँ जाता है। धान की पराली से भी इसी तरह बायोगैस बनाई जा सकती है, उसे खेतों में जलाने की जगह।", mentor: "The MoHFW/NCDC advisory (Oct 2025) lists burning of biomass (wood, dung cakes, crop residue) for cooking and heating as a household air-pollution source. Her biogas plant takes cow dung and kitchen waste (component script), not straw. Straw biogas: the VERBIO India plant at Bhutal Kalan, Lehragaga (Sangrur) began producing CBG in April 2022 and opened on 18 Oct 2022 (names not for stage). It was built for about 1 lakh tonnes of paddy straw a year (300 t a day) and about 33 t of CBG a day, with 8 digesters, plus fermented organic manure. Early output was far below capacity and no 2026 figure was found, so always say 'built to'. The cost is reported as Rs 220 or Rs 230 crore, so don't quote it. The Sangrur plant is on the stage line hz-s-punjab-straw. Biogas is cleaner but not pollution-free, because burning it makes CO2 (her card bw-biogas-not-zero).", source: "https://verbio.de/en/press/news/press-releases/detail/verbio-betreibt-indiens-erste-und-groesste-bioraffinerie-zur-herstellung-von-biomethan-aus-stroh ; https://ncdc.mohfw.gov.in/uploads/pdf/air2.pdf", sourceDate: "Oct 2022; Oct 2025", confidence: "confirmed" },
      { id: "hz-ml-wte", comp: "wte", say: "Burning garbage in the open fills the air with smoke and tiny particles, and in Delhi it is not allowed on any day. My plastic-to-energy machine shows that waste which cannot be recycled should go to a proper plant with pollution control. When the air turns Poor, Stage 1 of GRAP, Delhi's emergency plan for bad air, adds strict checks against open burning.", hi: "खुले में कूड़ा जलाने से हवा में धुआँ और बहुत छोटे कण भर जाते हैं, और दिल्ली में ऐसा किसी भी दिन करने की इजाज़त नहीं है। मेरी प्लास्टिक-से-ऊर्जा मशीन दिखाती है कि जो कचरा रीसायकल नहीं हो सकता, उसे प्रदूषण-नियंत्रण वाले सही प्लांट में भेजना चाहिए।", mentor: "Open burning is banned all year: NGT orders (2016) across India and the Delhi Environment Department order of Dec 2025 (Rs 5,000 on-the-spot fine; on her d-no-burning and dl-burning-fine cards, so don't repeat the fine here). GRAP Stage I (AQI 201–300) adds strict enforcement against open burning of biomass and municipal solid waste, with environmental compensation under NGT orders (CAQM Stage-I texts, 2023–2026). The MoHFW advisory (Oct 2025) asks people to avoid burning wood, leaves, crop residue and waste in the open. Never call her machine 'burning plastic'; say 'proper plant with pollution control'.", source: "CAQM GRAP Stage-I order, 19 May 2026 (caqm.nic.in); https://ncdc.mohfw.gov.in/uploads/pdf/air2.pdf ; https://www.tribuneindia.com/news/delhi/pay-5k-fine-for-burning-leaves-garbage-plastic-in-open", sourceDate: "19 May 2026; Oct 2025; 10 Dec 2025", confidence: "confirmed" },
      { id: "hz-ml-bins", comp: "bins", say: "When waste goes into the right dustbin, wet waste can become compost or biogas, and dry waste can be recycled. Then fewer garbage heaps are left lying around for someone to set on fire. So my five dustbins help keep smoke out of the air.", hi: "जब कचरा सही डस्टबिन में जाता है, तो गीले कचरे से खाद या बायोगैस बन सकती है और सूखा कचरा रीसायकल हो सकता है। तब ऐसे ढेर कम बचते हैं, जिनमें कोई आग लगा सके।", mentor: "The MoHFW/NCDC advisory (Oct 2025) lists 'refuse burning (garbage, horticulture wastes, crop residues)' among India's major outdoor air-pollution sources. The 2023 GRAP Stage-I text also asks for 'strict vigil' so that there is no burning at landfills and dumpsites ('likely' for the 2026 wording). Link to her four-bin and segregation cards, and don't claim segregation alone stops haze.", source: "https://ncdc.mohfw.gov.in/uploads/pdf/air2.pdf", sourceDate: "Oct 2025", confidence: "confirmed" },
      { id: "hz-ml-pots", comp: "pots", say: "My two flower pots stand for green spaces. In a real city, grass and plants cover bare soil, so less dust blows into the air. But plants alone cannot clean a whole city's air, so we have to stop smoke and dust where they start.", hi: "मेरे दो गमले हरियाली को दिखाते हैं। असली शहर में घास और पौधे खुली मिट्टी को ढक लेते हैं, जिससे कम धूल उड़ती है। पर अकेले पौधे पूरे शहर की हवा साफ़ नहीं कर सकते, इसलिए धुएँ और धूल को वहीं रोकना होगा, जहाँ से वे पैदा होते हैं।", mentor: "Her model has only TWO flower pots; don't describe gardens or trees that are not there. CAQM's July 2022 'Policy to curb air pollution in the NCR' lists greening and plantation under road and open-area dust control. Mentor-only ('likely', foreign studies: urban species in Beijing; UK trees, Univ. of Southampton): leaves can trap some particles, but rain can wash them off or wind can blow them back, and the effect at city scale is small compared with cutting emissions. Do NOT say 'plants clean the air' or repeat 'indoor plants purify air' claims.", source: "https://indiaenvironmentportal.org.in/reports-and-documents/policy-to-curb-air-pollution-in-the-national-capital-region", sourceDate: "Jul 2022", confidence: "confirmed" }
    ],
    updates: [
      { id: "hz-u-grap-2026", comp: "general", say: "GRAP, the Graded Response Action Plan, is Delhi-NCR's step-by-step plan for bad-air days. In 2026, GRAP stages were in force from January to 16 March. On 17 January 2026, Delhi's AQI reached 400 and was rising fast, so Stage 4, the strictest stage, was used as a precaution until 20 January. Stage 1 came back from 16 April to 4 May 2026, and from 19 to 29 May 2026.", hi: "ग्रैप (ग्रेडेड रिस्पॉन्स एक्शन प्लान) दिल्ली-एनसीआर में ख़राब हवा वाले दिनों के लिए चरणबद्ध योजना है। 2026 में जनवरी से 16 मार्च तक ग्रैप के चरण लागू रहे। 17 जनवरी 2026 को जब दिल्ली का एक्यूआई 400 तक पहुँचकर तेज़ी से बढ़ रहा था, तब एहतियात के तौर पर सबसे सख़्त, यानी चौथा चरण 20 जनवरी तक लागू किया गया। पहला चरण फिर 16 अप्रैल से 4 मई 2026 तक और 19 से 29 मई 2026 तक लागू रहा।", mentor: "Stage I ran without a break from 14 Oct 2025 until it was revoked on 16 Mar 2026 (CAQM press release, AQI 119). Stage II stayed until 18 Feb 2026 (CAQM press release, 18 Feb 2026). Stage IV: Delhi's AQI was 400 at 4 pm on 17 Jan 2026 and 428 by 8 pm; CAQM invoked Stage IV across NCR as a precaution because the AQI was rising fast and forecasts were bad (ETV Bharat/PTI and UNI, 17 Jan 2026; News On AIR, 18 Jan 2026); it was lifted on 20 Jan 2026. At that time BS-IV trucks were barred except those carrying essential goods. CAQM can start a stage before the AQI reaches that stage's band, using forecasts, so don't say 'Stage 4 starts only above 450'. Stage I was re-invoked by a sub-committee order of 16 Apr 2026 and revoked on 4 May 2026 when AQI fell from 175 to 88 after rain (IANS, 4 May 2026); invoked again on 19 May 2026 at AQI 208 and revoked on 29 May 2026 at AQI 123 (News On AIR, 30 May 2026). As of 17 Oct 2026 no October 2026 invocation was found. Don't say GRAP 'stops pollution'; it limits extra pollution on bad days.", source: "https://newsonair.gov.in/grap-stage-i-revoked-across-ncr-following-improvement-in-delhis-air-quality/", sourceDate: "2026-05-30", confidence: "confirmed" },
      { id: "hz-u-grap-revised", comp: "general", say: "On 28 September 2026, the Commission for Air Quality Management (CAQM) approved a stricter GRAP for Delhi-NCR, with 48 actions in total. Its first stage, for 'Poor' air, has 25 actions, so more steps start earlier. The AQI levels for the four stages stayed the same.", hi: "28 सितंबर 2026 को वायु गुणवत्ता प्रबंधन आयोग (CAQM) ने दिल्ली-एनसीआर के लिए ग्रैप के और सख़्त नियमों को मंज़ूरी दी, जिनमें कुल 48 कदम हैं। 'ख़राब' हवा वाले पहले चरण में 25 कदम हैं, यानी ज़्यादा कदम जल्दी शुरू होते हैं। चारों चरणों के एक्यूआई स्तर पहले जैसे ही रहे।", mentor: "News On AIR (29 Sep 2026; PIB): 48 actions (Stage I 25, II 8, III 10, IV 5); repeated measures merged into Stage I; Stage III limits on BS-III petrol / BS-IV diesel light vehicles extended to Sonipat (besides Gurugram, Faridabad, Ghaziabad, Gautam Budh Nagar); dust-control web-portal monitoring extended to construction sites beyond municipal limits; over 1,800 violating units got closure orders. ThePrint (29 Sep 2026) and GKToday (30 Sep 2026): DG-set actions and entry of BS-IV and older buses from NCR and adjoining states moved from Stage II to Stage I; citizen-charter actions rose from 22 to 34. GKToday only ('likely'): the essential-goods exemption for BS-IV and older goods vehicles removed at Stage III (light/medium) and Stage IV (heavy). Stage I applies only when CAQM invokes it (AQI 201–300, or on forecast). Don't say 'GRAP Stage 1 is in force' unless the news says so on the day.", source: "https://newsonair.gov.in/caqm-approves-revised-grap-schedule-for-national-capital-region/", sourceDate: "2026-09-29", confidence: "confirmed" },
      { id: "hz-u-delhi-aqi-oct", comp: "general", say: "From 1 to 17 October 2026, Delhi's daily AQI stayed between 83 and 187, which is 'Satisfactory' to 'Moderate'. The worst day was 4 October 2026, at 187. On 17 October 2026, Delhi's AQI was 159, while Noida (203) and Ghaziabad (206) were 'Poor'. Chandigarh, my city, was at 59.", hi: "1 से 17 अक्टूबर 2026 तक दिल्ली का रोज़ का एक्यूआई 83 से 187 के बीच रहा, यानी 'संतोषजनक' से 'मध्यम'। सबसे ख़राब दिन 4 अक्टूबर 2026 था, जब एक्यूआई 187 था। 17 अक्टूबर 2026 को दिल्ली का एक्यूआई 159 था, जबकि नोएडा (203) और गाज़ियाबाद (206) 'ख़राब' श्रेणी में थे। मेरे शहर चंडीगढ़ का एक्यूआई 59 था।", mentor: "From CPCB's official daily AQI bulletins (24-hour average at 4 pm), read for each day: 1 Oct 166, 2 Oct 174, 3 Oct 171, 4 Oct 187, 5 Oct 184, 6 Oct 179, 7 Oct 136, 8 Oct 162, 9 Oct 176, 10 Oct 122, 11 Oct 111, 12 Oct 83 (Satisfactory), 13 Oct 158, 14 Oct 181, 15 Oct 149, 16 Oct 90 (Satisfactory), 17 Oct 159 (main pollutant PM2.5; 55 of 59 stations reporting). Her region on 17 Oct 2026: Chandigarh 59, Ludhiana 80, Amritsar 79, Patiala 69 (Satisfactory), Bathinda 138 (Moderate). Delhi's daily average did not reach 'Poor' (201+) in this window, which fits with no GRAP stage invoked in October 2026 up to 17 Oct. Single stations can be much higher (IANS on 17 Oct gave Anand Vihar 348). Private apps often use the US scale, which gives different numbers; quote CPCB. Air usually gets worse from late October, so check cpcb.gov.in on 23 Oct before quoting a number.", source: "https://cpcb.gov.in/aqi_report.php", sourceDate: "2026-10-17", confidence: "confirmed" },
      { id: "hz-u-punjab-fires", comp: "general", say: "Satellites start counting farm fires in Punjab on 15 September every year. By 13 October 2026, they had spotted 174 farm fires in Punjab. On 13 October alone there were 51, the highest for a single day in the 2026 season until that date. Most were in Amritsar and Tarn Taran districts.", hi: "हर साल 15 सितंबर से उपग्रह पंजाब के खेतों में लगी आग गिनते हैं। 13 अक्टूबर 2026 तक उन्होंने पंजाब में 174 जगह आग देखी। अकेले 13 अक्टूबर को 51 मामले आए, जो 2026 के मौसम में उस तारीख़ तक एक दिन में सबसे ज़्यादा थे। ज़्यादातर मामले अमृतसर और तरनतारन ज़िलों में थे।", mentor: "CAQM report via Rozana Spokesman (16 Oct 2026) and NewsBytes: 174 by 13 Oct 2026; 51 on 13 Oct; Amritsar 77, Tarn Taran 61, Ferozepur 8, Gurdaspur 5, Muktsar 5, Moga 3, Patiala 3, Sangrur 3. PPCB: 126 by the same date in 2025, so 2026 had 48 more (about 38% higher) on 13 Oct (another report gives 134 for 2025). On 17 Oct 2026, CAQM sent show-cause notices to officials in Amritsar and Tarn Taran: from 15 Sep to 14 Oct 2026, Amritsar had 78 farm fires (68 in the same period of 2025) and Tarn Taran 68 (47); replies were due by 5 pm on 21 Oct (ETV Bharat, 17 Oct 2026). No Punjab count after 13/14 Oct was found up to 17 Oct. Rozana lists Malerkotla among districts with no fire by 13 Oct 2026 (one source only; check before saying it on stage). IARI's CREAMS counted 88 by 6 Oct 2026 (Down To Earth, 7 Oct 2026). Fires peak from late Oct to mid-Nov, so the total will be much higher by 24 Oct: always say the date with the number. Don't call farmers criminals, don't claim 2026 is better than 2025, and don't say farm fires keep falling every year.", source: "https://www.rozanaspokesman.com/farming/farmers-issues/161026/punjab-logs-nearly-70-spike-in-farm-fires-in-a-week.html", sourceDate: "2026-10-16", confidence: "confirmed" },
      { id: "hz-u-fires-trend", comp: "general", say: "Satellites count farm fires in other states too. In the 2025 season, they counted 17,067 in Madhya Pradesh and 7,290 in Uttar Pradesh. A satellite counts fire spots, not how much land was burnt.", hi: "उपग्रह दूसरे राज्यों में भी खेतों की आग गिनते हैं। 2025 के मौसम में उन्होंने मध्य प्रदेश में 17,067 और उत्तर प्रदेश में 7,290 मामले गिने। उपग्रह आग की जगहें गिनता है, यह नहीं कि कितनी ज़मीन जली।", mentor: "IARI CREAMS full season 2025 (15 Sep–30 Nov), via Down To Earth (7 Oct 2026): Madhya Pradesh 17,067, Uttar Pradesh 7,290, Punjab 5,114, Rajasthan 2,890, Haryana 662, Delhi 5. By 6 Oct 2026: MP 118, Punjab 88, UP 65. Punjab: 10,909 in 2024 to 5,114 in 2025 (on the stage line hz-s-punjab-fall). Mentor-only: MP's 2025 count was more than three times Punjab's, but MP's smoke does not reach Delhi the way Punjab–Haryana smoke can, so don't say MP 'causes Delhi's smog' and don't use the comparison to shift blame. Satellites can miss fires lit late in the evening or under cloud.", source: "https://www.downtoearth.org.in/air/stubble-burning-season-begins-madhya-pradesh-ranks-first-punjab-second-and-uttar-pradesh-third", sourceDate: "2026-10-07", confidence: "confirmed" },
      { id: "hz-u-haryana", comp: "general", say: "Haryana, our neighbour, had very few farm fires early in the 2026 season. From 15 September to 8 October 2026, it had only 5, compared with 7 in the same days of 2025. In the whole 2025 season, Haryana had 662 farm fires.", hi: "हमारे पड़ोसी हरियाणा में 2026 के मौसम की शुरुआत में खेतों में आग के बहुत कम मामले आए। 15 सितंबर से 8 अक्टूबर 2026 तक वहाँ सिर्फ़ 5 मामले आए, जबकि 2025 में इन्हीं दिनों में 7 थे। 2025 के पूरे मौसम में हरियाणा में 662 मामले थे।", mentor: "ICAR data in The Tribune (12 Oct 2026), for the window 15 Sep–8 Oct 2026 (re-checked): 5 fires (Palwal 2; Faridabad, Panchkula, Hansi 1 each) against 7 in the same window of 2025; 177 in 2024 and 277 in 2023. At the 13 Oct 2026 Centre–states review, data showed incidents from 15 Sep to 12 Oct down 53.3% in Haryana and about 32% in UP compared with 2025 (KNN India, 14 Oct 2026). Sirsa's first case of 2026 led to an FIR (Amar Ujala, 16 Oct 2026). The 662 figure for 2025 is IARI CREAMS (Down To Earth, 7 Oct 2026). Haryana's fires usually rise in late October; don't say Haryana has 'stopped' burning.", source: "https://www.tribuneindia.com/news/haryana/after-7-cases-last-year-only-5-reported-so-far-as-farm-fires-in-haryana-dry-up", sourceDate: "2026-10-12", confidence: "confirmed" },
      { id: "hz-u-watch", comp: "general", say: "From 1 October to 30 November 2026, the Commission for Air Quality Management sent flying squads, teams that travel to check fields, to 18 districts of Punjab and 16 of Haryana. On 30 July 2026, it also asked states to use drones, because satellites can miss fires that start late in the evening.", hi: "1 अक्टूबर से 30 नवंबर 2026 तक वायु गुणवत्ता प्रबंधन आयोग ने पंजाब के 18 और हरियाणा के 16 ज़िलों में उड़न दस्ते, यानी खेतों की जाँच करने वाली टीमें, भेजीं। 30 जुलाई 2026 को उसने राज्यों से ड्रोन इस्तेमाल करने को भी कहा, क्योंकि शाम को देर से लगी आग कई बार उपग्रहों की नज़र से छूट जाती है।", mentor: "News On AIR (5 Oct 2026) and Business Today (5 Oct 2026): 34 districts; squads work with farmers, Punjab's Parali Protection Force, district officials, state pollution boards and the CAQM Cell at SAS Nagar (Mohali), and report daily. PTI via ThePrint (30 Jul 2026): CAQM wrote to the chief secretaries of Punjab, Haryana, UP and Rajasthan asking for drone surveys of hotspot villages and mapping of burnt fields on land maps, with an action-taken report due by 14 Aug 2026; the letter refers to 'reports of stubble burning during late evening hours to evade satellite-based detection' (keep this wording off stage; don't accuse farmers of hiding). The Centre (13 Oct 2026) also asked for ground patrols after 3 pm. Don't claim drones are used 'for the first time ever' or give numbers of farmers caught by drones: neither is verified.", source: "https://newsonair.gov.in/caqm-deploys-flying-squads-in-punjab-and-haryana-to-curb-stubble-burning/", sourceDate: "2026-10-05", confidence: "confirmed" },
      { id: "hz-u-cbg-punjab", comp: "biogas", say: "Punjab expected about 1.9 crore tonnes of paddy straw in 2026. Punjab's 2026-27 plan aims to end stubble burning by 2030. Six compressed biogas (CBG) plants were running in Punjab, and more were planned. They turn straw into gas fuel and manure, much as my biogas plant does with cow dung.", hi: "पंजाब में 2026 में लगभग 1.9 करोड़ टन पराली निकलने का अनुमान था। पंजाब की 2026-27 की योजना का लक्ष्य 2030 तक पराली जलाना बंद करना है। पंजाब में छह कंप्रेस्ड बायोगैस (सीबीजी) प्लांट चल रहे थे, और कई नए प्लांट लगाने की योजना थी। ये पराली से ईंधन गैस और खाद बनाते हैं, जैसे मेरा बायोगैस प्लांट गोबर से बनाता है।", mentor: "PPCB's 85-page 'Comprehensive Plan for Prevention and Control of Stubble Burning in the State of Punjab for 2026-27', sent to CAQM (Hindustan Times via BioEnergy Times, 18 Sep 2026; one secondary source, so 'likely'): 18.81 million tonnes of straw expected from 3.1 million hectares of paddy; target of no stubble burning by 2030; cut paddy area by 7 lakh ha by 2030; 1,58,898 subsidised in-field machines; six CBG projects running (107 tonnes/day in total), five more (37.5 t/day) due in 2026-27, and 46 more (incl. GAIL, HPCL, BPCL) 'at various stages' over 2–3 years, together using about 2.8 million tonnes of straw a year; pellets for 2.5–3 million t; industrial boilers about 6 million t. PEDA (HT via BioEnergy Times, 27 Apr 2026): 58 CBG plants sanctioned. These are plans and targets, so say 'aims' and 'planned', never 'being built'. BioEnergy Times has reported resistance to CBG plants in some villages.", source: "https://bioenergytimes.com/punjab-targets-zero-stubble-burning-by-2030-with-biomass-cbg-and-crop-diversification-push/", sourceDate: "2026-09-18", confidence: "likely" },
      { id: "hz-u-machines", comp: "general", say: "Punjab Agricultural University, in Ludhiana, suggests machines that let farmers sow wheat without burning straw. The Happy Seeder sows seeds through the straw and leaves it on top as a blanket called mulch, which then feeds the soil. Using a Surface Seeder costs about ₹700 to ₹800 an acre.", hi: "लुधियाना का पंजाब कृषि विश्वविद्यालय (PAU) ऐसी मशीनें सुझाता है, जिनसे पराली जलाए बिना गेहूँ बोया जा सके। हैप्पी सीडर पराली के बीच से बीज बो देता है, और पराली ऊपर मल्च की चादर बनकर रह जाती है, जो बाद में मिट्टी का भोजन बनती है। सरफ़ेस सीडर से बुवाई का ख़र्च लगभग ₹700 से ₹800 प्रति एकड़ है।", mentor: "The Tribune (Ludhiana, 22 Sep 2026), PAU KVK advice (PAU gave the same Surface Seeder cost in 2023): Super SMS (Super Straw Management System) on the combine harvester chops and spreads straw; Happy Seeder covers 6–7 acres/day and leaves straw as mulch; Super Seeder (a rotavator mixes straw into the soil) 4.5–5.5 acres/day; Smart Seeder mixes 15–20% of straw in, 7–8 acres/day; Surface Seeder Rs 700–800/acre, 45 HP tractor, about 1.5 acres/hour, sowing late Oct to mid-Nov. Nutrients: 1 tonne of paddy straw CONTAINS about 5.5 kg N, 2.3 kg P2O5, 25 kg K2O and 1.2 kg S; burning loses about 400 kg of carbon and much of the nitrogen and sulphur, while most potassium and phosphorus stay in the ash (UN-CSAM straw report), so don't say all 25 kg of potassium is lost. Centre (KNN India, 14 Oct 2026): over 3.54 lakh crop-residue machines given to states since 2018-19, 26,109 of them in 2026-27; Punjab got Rs 2,056.50 crore of Rs 4,266.47 crore released from 2018-19 to 2025-26. Penalties since Nov 2024: Rs 5,000 (under 2 acres), Rs 10,000 (2–5 acres), Rs 30,000 (over 5 acres) per incident (Down To Earth; LiveLaw). Don't say machines alone explain the fall in fires.", source: "https://www.tribuneindia.com/news/ludhiana/punjab-agricultural-university-suggests-sustainable-paddy-straw-management-methods-for-farmers/", sourceDate: "2026-09-22", confidence: "confirmed" },
      { id: "hz-u-pellets", comp: "wte", say: "Paddy straw can also be pressed into small pellets. Coal power plants within 300 km of Delhi must burn some straw pellets along with coal, so less coal is used. From 1 November 2026, brick kilns in Punjab, and in the parts of Haryana outside the National Capital Region (NCR, the area around Delhi), are to get at least 30% of their fuel from paddy-straw pellets. Like my plastic-to-energy machine, this turns waste into energy.", hi: "पराली को दबाकर छोटे-छोटे ठोस टुकड़े, यानी पेलेट, भी बनाए जाते हैं। दिल्ली से 300 किलोमीटर के अंदर के कोयला बिजलीघरों को कोयले के साथ कुछ पराली पेलेट जलाने होते हैं, ताकि कोयला कम लगे। 1 नवंबर 2026 से पंजाब के, और हरियाणा में एनसीआर से बाहर के, ईंट-भट्ठों को अपने ईंधन का कम से कम 30% पराली पेलेट से लेना है। मेरी प्लास्टिक से ऊर्जा बनाने वाली मशीन की तरह, यह भी कचरे को ऊर्जा में बदलता है।", mentor: "CAQM Direction No. 42 (17 Sep 2021): coal power plants within 300 km of Delhi must co-fire paddy-straw-based pellets or briquettes, target 5% (threshold above 3% for 2024-25). In April 2026, CAQM imposed about Rs 61.85 crore environmental compensation on six plants for 2024-25 non-compliance (News On AIR); by Aug 2026 half had been recovered (PSU Watch). CAQM Direction No. 92 (3 Jun 2025; CAQM press release) applies to brick kilns in Punjab and in the non-NCR districts of Haryana: 20% by 1 Nov 2025, 30% by 1 Nov 2026, 40% by 1 Nov 2027, 50% by 1 Nov 2028 (Krishi Jagran; The Tribune). Burning pellets in a plant with dust filters is cleaner than open-field burning, but it still makes CO2: don't call it 'pollution-free'. Her factory part (sugar & leather, dirty water) is about wastewater, so link pellets to the plastic-to-energy machine, not the factory.", source: "https://krishijagran.com/news/caqm-issues-directive-for-mandatory-use-of-paddy-straw-based-biomass-fuel-in-brick-kilns-across-punjab-and-haryana", sourceDate: "2025-06-03", confidence: "confirmed" },
      { id: "hz-u-winter-plan", comp: "general", say: "Delhi's Winter Action Plan 2026-27 was announced on 28 September 2026. From 1 November 2026 to 31 January 2027, most outdoor building and demolition work that raises dust will be stopped, and an even stricter ban will apply from 10 December 2026 to 20 January 2027. From 1 November 2026, offices are to let half their staff work from home, so fewer cars will be on the road.", hi: "दिल्ली के विंटर एक्शन प्लान 2026-27 की घोषणा 28 सितंबर 2026 को हुई। 1 नवंबर 2026 से 31 जनवरी 2027 तक धूल उड़ाने वाले ज़्यादातर बाहरी निर्माण और तोड़-फोड़ के काम रोके जाएँगे, और 10 दिसंबर 2026 से 20 जनवरी 2027 तक और भी सख़्त रोक रहेगी। 1 नवंबर 2026 से दफ़्तरों के आधे कर्मचारी घर से काम करेंगे, ताकि सड़कों पर कम गाड़ियाँ हों।", mentor: "Announced on Monday 28 Sep 2026 by Delhi's Environment Minister after a meeting with the Union Environment Minister and the CM (names not for stage; ThePrint/PTI, Outlook, Hans India and Republic World, 28 Sep 2026; Republic's 29 Sep article is a later report, so her d-no-burning note's '29 Sep' should read 28 Sep). Points not in her Delhi block: essential projects exempt from the 1 Nov–31 Jan curbs, indoor work allowed; reports disagree on exceptions to the 10 Dec–20 Jan ban (urgent government and emergency work per Hans India and Outlook; none per CSR Journal), so say 'even stricter ban'; 50% work from home for government and private offices (1 Nov–31 Jan per some reports, 1 Nov–28 Feb per Hans India); staggered office hours (MCD 8:30 am–5 pm, Delhi government 10 am–6:30 pm); parking fees doubled at authorised sites from 1 Nov 2026 (Delhi Metro sites exempt); fitness tests for about 2.5 lakh vehicles at three automated stations; daily evening AQI bulletins; 42 of 62 hotspots reported under control. Reports disagree on whether the 1 Nov vehicle-entry ban covers BS-IV or all non-BS-VI vehicles from outside Delhi: don't quote it. 'No PUC, No Fuel' was first enforced in Delhi on 18 Dec 2025 (News On AIR) and spread across Delhi-NCR from 1 Oct 2026 by CAQM Direction No. 101 (Business Today, 30 Sep 2026). Reports give an e-bus figure of 'over 700' that does not match the 5,200+ in her Delhi block: don't use it. These measures start after her fair, so say 'will', and check the news on 23 Oct in case of changes.", source: "https://www.republicworld.com/india/staggered-office-timings-ban-on-polluting-vehicles-last-mile-connectivity-form-core-of-delhis-winter-air-pollution-action-plan-2026-09-28-137854", sourceDate: "2026-09-28", confidence: "confirmed" },
      { id: "hz-u-diwali", comp: "ganesha", say: "Diwali is on Sunday, 8 November 2026, after the Vigyan Mela. In October 2026, the Supreme Court was hearing the case on firecrackers in Delhi-NCR. On 12 October 2026, it kept the existing ban in place and asked the Commission for Air Quality Management (CAQM) for its view. So the final rule for Diwali 2026 has to be checked in the news.", hi: "दिवाली रविवार, 8 नवंबर 2026 को है, विज्ञान मेले के बाद। अक्टूबर 2026 में सुप्रीम कोर्ट में दिल्ली-एनसीआर में पटाखों के मामले की सुनवाई चल रही थी। 12 अक्टूबर 2026 को कोर्ट ने पटाखों पर लगी मौजूदा रोक को बनाए रखा और वायु गुणवत्ता प्रबंधन आयोग (CAQM) से उसकी राय माँगी। इसलिए दिवाली 2026 का आख़िरी नियम ख़बरों में देखना होगा।", mentor: "Re-check on 23 Oct before saying anything about Diwali 2026 crackers. Diwali (Deepavali) is Sunday 8 Nov 2026 on the central government holiday list (DoPT order of 3 Jul 2025); Dhanteras 6 Nov, Bhai Dooj 10 Nov. Supreme Court, 12 Oct 2026: no new directions, the existing Delhi-NCR ban stays, CAQM to take a view, next hearing 15 Oct 2026 (Millennium Post, 13 Oct; LawBeat, 12 Oct). The CJI favoured awareness and fixed hours over coercive orders; the amicus opposed any relaxation. Separately, on 30 Sep 2026 a bench led by Justice M M Sundresh (Arjun Gopal case, for the rest of India) rejected both a blanket ban and round-the-clock bursting and accepted joint ('ladi') crackers under safeguards; the barium issue was listed for 15 Oct (News On AIR, 1 Oct 2026; Telangana Today, 30 Sep 2026). The result of the 15 Oct hearing was not found by 17 Oct. For comparison, in 2025 the SC allowed NEERI-certified green crackers from 18 to 21 Oct 2025, bursting 6–7 am and 8–10 pm. Don't say crackers are 'banned' or 'allowed' for Diwali 2026 without checking. The stage call to action is hz-s-diwali.", source: "https://www.millenniumpost.in/delhi/sc-urges-responsible-celebration-leaves-firecracker-ban-unchanged-679587", sourceDate: "2026-10-13", confidence: "confirmed" }
    ],
    stage: [
      { id: "hz-s-opener", comp: "general", say: "I have come to Delhi at the start of the haze season. Every year from late October, cool air and slow winds trap smoke and dust over North India like a grey blanket. My model shows how we can make less smoke in our cities and our villages.", hi: "मैं धुंध के मौसम की शुरुआत में दिल्ली आई हूँ। हर साल अक्टूबर के आख़िर से ठंड बढ़ती है और हवा धीमी हो जाती है, इसलिए धुआँ और धूल उत्तर भारत के ऊपर एक सलेटी चादर की तरह रुक जाते हैं। मेरा मॉडल दिखाता है कि हम अपने शहरों और गाँवों में धुआँ कैसे कम कर सकते हैं।", mentor: "CPCB daily AQI (24-hour average at 4 pm) for Delhi from 1 to 17 Oct 2026 stayed between 83 and 187 (Satisfactory to Moderate); 159 on 17 Oct 2026. 'Poor' starts at 201. Haze grows from late October because of cooler air and temperature inversions, slow winds, farm-fire smoke, Diwali crackers and local sources (vehicles, dust, garbage burning) (CAQM assessment, 30 Nov 2023). IITM Pune's Decision Support System estimates the shares each day and they swing a lot, so don't quote one percentage. Her model shows a Smart City and a Smart Village, not farms. Don't say 'Delhi is the most polluted city in the world'.", source: "https://cpcb.gov.in/aqi_report.php", sourceDate: "2026-10-17", confidence: "confirmed" },
      { id: "hz-s-punjab-straw", comp: "biogas", say: "I come from Chandigarh, close to Punjab's rice fields. After the rice harvest, some farmers burn the leftover straw, called parali. But straw is not waste! At Lehragaga in Sangrur, Punjab, a big plant was built to turn up to 300 tonnes of paddy straw a day into compressed biogas. My biogas plant shows the same idea: waste goes in, useful gas and manure come out.", hi: "मैं चंडीगढ़ से आई हूँ, जो पंजाब के धान के खेतों के पास है। धान की कटाई के बाद कुछ किसान बची हुई पराली जला देते हैं। पर पराली कचरा नहीं है! पंजाब के संगरूर ज़िले के लहरागागा में एक बड़ा प्लांट रोज़ 300 टन तक पराली से कंप्रेस्ड बायोगैस बनाने के लिए तैयार किया गया था। मेरा बायोगैस प्लांट भी यही दिखाता है: कचरा अंदर जाता है, और काम की गैस और खाद बाहर आती है।", mentor: "VERBIO India (German company VERBIO AG) plant at Lehragaga, Sangrur, opened on 18 Oct 2022 (names not for stage; VERBIO press release; The Tribune): designed for 300 t of paddy straw a day (about 1 lakh t a year) and 33 t of CBG a day; output at opening was about 6 t/day. Its 2026 output is not verified, so say 'was built to'. Don't repeat the 2022 claim 'Asia's largest' or quote the cost. Her own biogas plant takes cow dung and kitchen waste. PPCB's 2026-27 plan (one secondary source, 'likely'; keep off stage): six CBG plants running in Punjab with 107 t/day in total, more planned.", source: "https://verbio.de/en/press/news/press-releases/detail/verbio-betreibt-indiens-erste-und-groesste-bioraffinerie-zur-herstellung-von-biomethan-aus-stroh", sourceDate: "2022-10-18", confidence: "confirmed" },
      { id: "hz-s-punjab-fall", comp: "general", say: "In Punjab, farm fires fell by about half in one year, from 10,909 in 2024 to 5,114 in 2025. Machines like the Happy Seeder can sow wheat straight through the straw, so it need not be burnt. My smart village shows the same idea: a village's waste can become a resource.", hi: "पंजाब में खेतों में आग लगने के मामले एक साल में लगभग आधे रह गए: 2024 में 10,909 से घटकर 2025 में 5,114। हैप्पी सीडर जैसी मशीनें पराली के बीच से ही गेहूँ बो सकती हैं, इसलिए उसे जलाने की ज़रूरत नहीं पड़ती। मेरा स्मार्ट गाँव भी यही दिखाता है: गाँव का कचरा भी काम की चीज़ बन सकता है।", mentor: "5,114 for 2025 is IARI CREAMS data (Down To Earth, 7 Oct 2026); 10,909 for 2024 is the PTI/PPCB figure, also in PPCB's 2026-27 plan (HT via BioEnergy Times, 18 Sep 2026). Counts differ slightly by agency (Tribune/PRSC: 5,085 vs 10,443); both show about half, so keep 'about half'. Don't say why the number fell. Careful: by 13 Oct 2026 Punjab had 174 fires against 126 by the same date in 2025, so don't say 2026 is going better. The Happy Seeder is a PAU-recommended machine; PAU also recommends Super SMS, Super Seeder, Smart Seeder and Surface Seeder (The Tribune, 22 Sep 2026). Her model has no farm machines or crops.", source: "https://www.downtoearth.org.in/air/stubble-burning-season-begins-madhya-pradesh-ranks-first-punjab-second-and-uttar-pradesh-third", sourceDate: "2026-10-07", confidence: "confirmed" },
      { id: "hz-s-bins-burning", comp: "bins", say: "Haze is not only smoke from farms. Burning garbage and dry leaves in our own streets adds smoke too. My five dustbins show that wet waste and leaves can become compost instead of smoke.", hi: "धुंध सिर्फ़ खेतों के धुएँ से नहीं बनती। हमारी अपनी गलियों में कूड़ा और सूखे पत्ते जलाने से भी धुआँ बढ़ता है। मेरे पाँच डस्टबिन दिखाते हैं कि गीला कचरा और पत्ते जलाने की जगह खाद बन सकते हैं।", mentor: "Delhi's Winter Action Plan 2026-27 adds monitoring at dumping sites, cremation grounds and construction-waste sites to stop burning of garbage and biomass (The Hans India, 28 Sep 2026). The MoHFW/NCDC advisory (Oct 2025) lists refuse burning among major outdoor sources. The Rs 5,000 on-the-spot fine and the 311 helpline / Green Delhi App are in her Delhi block (d-no-burning). Don't give a percentage for garbage burning's share of Delhi's pollution.", source: "https://www.thehansindia.com/news/national/delhi-winter-pollution-plan-2026-no-puc-no-fuel-150-more-e-buses-50-wfh-1126638", sourceDate: "2026-09-28", confidence: "confirmed" },
      { id: "hz-s-bus-grap", comp: "bus", say: "When Delhi's air turns 'Poor', a plan called GRAP starts, step by step. Under the stricter plan approved on 28 September 2026, its very first stage can stop buses from outside Delhi built to the older BS-4 pollution standard, or older. Electric buses, like the ones in my model, keep people moving with less smoke.", hi: "जब दिल्ली की हवा 'ख़राब' होती है, तो ग्रैप नाम की योजना चरण-दर-चरण लागू होती है। 28 सितंबर 2026 को मंज़ूर हुई सख़्त योजना के पहले ही चरण में दिल्ली के बाहर से आने वाली बीएस-4 और उससे पुरानी बसें रोकी जा सकती हैं। मेरे मॉडल जैसी इलेक्ट्रिक बसें कम धुएँ में लोगों को शहर में एक जगह से दूसरी जगह पहुँचाती रहती हैं।", mentor: "CAQM approved the revised GRAP on 28 Sep 2026 (News On AIR, 29 Sep 2026; PIB); Stage I has 25 actions. Entry of BS-IV and older buses from NCR and adjoining states, and DG-set actions, moved from Stage II to Stage I (ThePrint, 29 Sep 2026; GKToday, 30 Sep 2026). 'BS' means Bharat Stage, India's vehicle pollution rules; a higher number is cleaner. Stage I starts at AQI 201–300. Up to 17 Oct 2026, no October invocation was found (Delhi's daily AQI 83–187). Check caqm.nic.in or the news on the day; don't say 'GRAP is in force' unless it is.", source: "https://newsonair.gov.in/caqm-approves-revised-grap-schedule-for-national-capital-region/", sourceDate: "2026-09-29", confidence: "confirmed" },
      { id: "hz-s-diwali", comp: "ganesha", say: "Diwali is on Sunday, 8 November 2026. On Diwali, many families worship Lakshmi Ji and Ganesha Ji. My clay Ganesha shows that festivals can be kind to nature, and Diwali can be too. Let's light diyas, make rangoli, share sweets, and help keep the air cleaner for little children and grandparents.", hi: "दिवाली रविवार, 8 नवंबर 2026 को है। दिवाली पर कई परिवार लक्ष्मी जी और गणेश जी की पूजा करते हैं। मेरे मिट्टी के गणेश जी दिखाते हैं कि त्योहार प्रकृति के दोस्त बन सकते हैं, और दिवाली भी। आइए दीये जलाएँ, रंगोली बनाएँ, मिठाई बाँटें, और छोटे बच्चों और दादा-दादी के लिए हवा को साफ़ रखने में मदद करें।", mentor: "Diwali (Deepavali) is Sunday 8 Nov 2026 on the central government holiday list (DoPT order of 3 Jul 2025). As of 17 Oct 2026, Delhi-NCR's Diwali 2026 cracker rule was not final (see hz-u-diwali): keep the Supreme Court out of this stage line. Don't say crackers are 'banned' or 'allowed' without checking the news on 23 Oct. Don't call green crackers pollution-free.", source: "https://www.gconnect.in/news/holidays-to-be-observed-in-central-government-offices-during-the-year-2026.html", sourceDate: "2025-07-03", confidence: "confirmed" }
    ]
  },

  /* ---------------- 🏙️ DELHI UPDATES ----------------
     Fact-checked Clean India news from Delhi and India for the North Zone level (24–26 Oct 2026).
     comp = the model part it links to ("general" = whole model). top = learn these by heart.
     "say" is the stage line; "mentor" has exact figures, caveats and what NOT to say. */
  delhi: {
    checked: "15 October 2026",
    intro: "Avni, these are fact-checked Clean India updates from Delhi and from India, each written as a short line you can say. Don't read them out as a list: pick one or two, and say them when you reach the matching part of your model, like the Anupam Colony line at your dustbins or the 81 ponds line at your Ganesha. The top lines are the best ones to learn by heart, and the details under each card are for you and your mentor.",
    opener: "Here in Delhi, old garbage mountains are being cleared, every home is being asked to separate its waste, and thousands of electric buses run on the roads. My model shows these same ideas in a Smart City and a Smart Village: my five dustbins, my biogas plant, solar power and a water filter.",
    items: [
      { id: "d-landfills", comp: "bins", area: "Garbage mountains", top: true, say: "Delhi is clearing its three big garbage mountains, at Okhla, Bhalswa and Ghazipur. By early October 2026, more than 200 lakh tonnes of old garbage had been dug out and cleared. Nearly 100 acres of land was free again. On 3 October 2026, foundation stones were laid for new plants. These plants will treat fresh garbage every day, so that new mountains do not grow.", hi: "दिल्ली ओखला, भलस्वा और गाज़ीपुर में कूड़े के तीन बड़े पहाड़ हटा रही है। अक्टूबर 2026 की शुरुआत तक 2 करोड़ टन से ज़्यादा पुराना कूड़ा निपटाया जा चुका था, और लगभग 100 एकड़ ज़मीन फिर से खाली हो गई थी।", link: "This is why my five dustbins matter: when every home separates its waste, much less of it ends up on a garbage mountain.", mentor: "Exact figure: 217.17 lakh MT disposed of from Okhla, Bhalswa and Ghazipur, freeing nearly 100 acres (CM Rekha Gupta, 3 Oct 2026; ThePrint, Daily Pioneer 4 Oct). By site on 31 Aug 2026: Okhla about 70 lakh MT/35 acres, Bhalswa about 102 lakh MT/45 acres, Ghazipur about 44 lakh MT/20 acres. The total covers work since July 2022, so never say 'in 18 months' or 'this year'. It grows every week, so keep 'more than 200 lakh tonnes' plus the month. Foundation stones on 3 Oct 2026: fresh-waste plants at Okhla (1,400 TPD), Ghazipur (800 TPD) and Singhola (700 TPD), plus a 300 TPD biogas plant at Ghazipur. Contracts for about 5,900 TPD at five sites were awarded in July 2026 (including Bhalswa 1,800 and Narela-Bawana 1,200). These plants are being built and are not running yet. Do NOT say any landfill is 'finished'. Do NOT say bamboo is growing there: that claim was dropped because ThePrint (2 Oct 2026) found the Bhalswa bamboo patch under a new mound. Avoid the activist criticism that waste is 'moved, not removed'. Web re-check on 15 Oct 2026: no figure newer than 217.17 lakh MT (Business Today, 31 Aug, gave 216 lakh MT) and no 'Bhalswa cleared' announcement. Re-check on 23 Oct.", source: "https://theprint.in/india/delhi-cm-lays-foundation-stone-for-waste-processing-plants-says-217-lakh-tonnes-of-landfill-waste-cleared/3061106/", sourceDate: "2026-10-03" },
      { id: "d-okhla-park", comp: "pots", area: "Garbage mountains", top: false, say: "By early October 2026, about 70 lakh tonnes of old garbage had been cleared from the Okhla landfill. About 35 acres of land was free again, and it is being made into a park. The target to clear Okhla and Bhalswa is December 2026.", hi: "अक्टूबर 2026 की शुरुआत तक ओखला लैंडफ़िल से लगभग 70 लाख टन पुराना कूड़ा हटाया जा चुका था। वहाँ खाली हुई लगभग 35 एकड़ ज़मीन पर पार्क बनाया जा रहा है। ओखला और भलस्वा को दिसंबर 2026 तक साफ़ करने का लक्ष्य है।", link: "Old garbage land can turn green again, like the park with two flower pots at the centre of my model.", mentor: "The Hans India (4 Oct 2026), on the CM's visit of 3 Oct: about 70 lakh MT biomined, nearly 35 acres freed, and the area 'being developed into a park'. The MCD target for final clearance of Okhla and Bhalswa is December 2026. The Tribune (9 Jul 2026) confirms the target and says the Okhla site is about 62 acres in all. Daily Pioneer (4 Oct) says almost all of Okhla's pre-January-2025 legacy waste has been processed. Bhalswa: about 70-acre site; 99.07 lakh MT remediated by 31 Jul 2026 (DD India/AIR); fresher figure about 102 lakh MT and 45 acres by 31 Aug 2026 (CM, ETV Bharat 31 Aug). The Mayor said 4–5 lakh tonnes were left on 29 Aug 2026. AIR/Construction World (1 Aug 2026) said the remaining mound was 'expected' by 15 Oct and all waste up to March 2026 would be cleared by 31 Dec 2026; a web re-check on 15 Oct 2026 found no 'cleared' or 'completed' announcement. Deadlines have slipped before, so say 'target', never 'finished'. Don't mention bamboo (dropped claim).", source: "https://www.thehansindia.com/news/cities/new-delhi/delhi-cm-inspects-okhla-landfill-says-garbage-mountain-is-going-1128494", sourceDate: "2026-10-04" },
      { id: "d-landfill-reuse", comp: "wte", area: "Garbage mountains", top: false, say: "The garbage dug out of Delhi's landfills is not wasted. Most of it becomes fuel for cement factories and paper mills. Broken bricks and concrete become tiles and paver blocks, and the soil is used to fill low land. The target to clear the Ghazipur landfill is December 2027.", hi: "दिल्ली के लैंडफ़िल से निकाला गया कूड़ा बेकार नहीं जाता। इसका ज़्यादातर हिस्सा सीमेंट कारखानों और कागज़ मिलों का ईंधन बनता है, मलबे से टाइलें और पेवर ब्लॉक बनते हैं, और मिट्टी से नीची ज़मीन भरी जाती है। गाज़ीपुर लैंडफ़िल को दिसंबर 2027 तक साफ़ करने का लक्ष्य है।", link: "This is the 'Recover' idea behind my plastic-to-energy machine: waste that cannot be recycled becomes fuel.", mentor: "From Delhi's presentation at the SBM-Urban 2.0 national review, 19–20 May 2026 (TheNewsMill/ANI, 21 May). 70–75% of biomined material is refuse-derived fuel (RDF), sent to cement factories in Chittorgarh and paper mills in Shamli and Muzaffarnagar. 15–20% is construction and demolition waste, made into tiles, paver blocks and stone dust. 5–10% is inert soil, used for low-lying land, NTPC eco-park pits and NHAI highways. The work is funded with Rs 776.47 crore under SBM-U 2.0. Ghazipur: heights were cut by 10–15 m in places, NTPC began lifting about 40 lakh MT of inert material to its eco-park about 23 km away, and the target for complete remediation is December 2027 (Tribune, 9 Jul 2026). 'Burns less coal' is our inference, not a quote, so say 'used as fuel'. Ghazipur's date is a target. Don't call Ghazipur 'the biggest' or 'the hardest' site on stage: the by-site figures (Bhalswa about 102 lakh MT cleared, Ghazipur about 44 lakh MT by 31 Aug 2026) invite a challenge.", source: "https://thenewsmill.com/2026/05/delhi-presents-landfill-remediation-model-at-swachh-bharat-mission-u-conference/", sourceDate: "2026-05-21" },
      { id: "d-india-81", comp: "general", area: "Garbage mountains", top: false, say: "In 2014, India's cities processed only 16% of their waste. By May 2026, they processed about 81%. Processing means turning waste into compost, recycled things or energy. By May 2026, 97% of city wards also had door-to-door garbage collection.", hi: "2014 में भारत के शहर अपने कचरे का सिर्फ़ 16% हिस्सा ही खाद, ऊर्जा या रीसायकल की चीज़ों में बदल पाते थे। मई 2026 तक यह बढ़कर लगभग 81% हो गया।", link: "My biogas plant and my plastic-to-energy machine show two of these ways to process waste.", mentor: "MoHUA national review of SBM-Urban 2.0, 19–20 May 2026, Vigyan Bhawan (Tribune 21 May; Construction World 25 May). Processing rose from 16% (2014) to 81% (2026), and door-to-door collection covers 97% of wards. About 65% of roughly 26 crore tonnes of legacy waste at 2,482 dumpsites has been remediated, reclaiming nearly 9,000 acres. DD India (21 Sep 2026): 3.66 crore MT was remediated in calendar 2025, and 459 cities in 29 states have fully cleared their dumpsites. The percentage is based on processing capacity reported by cities, not an independent audit (an earlier Rajya Sabha reply gave about 80.26%), so say 'about 81%'. Note: 459 counts CITIES (ULBs) that have cleared ALL their dumpsites; her dumpsite card's 'more than 1,000 cleared' counts DUMPSITES (out of about 2,500). They are different measures, so don't combine them.", source: "https://www.tribuneindia.com/news/india/waste-processing-improved-from-16-in-2014-to-81-in-2026-under-swachh-bharat-mission-urban-2-0-govt/", sourceDate: "2026-05-21" },
      { id: "d-four-bins", comp: "bins", area: "Segregation & compost", top: true, say: "Since 1 April 2026, India's new waste rules say every home must separate its garbage into four types: wet, dry, sanitary and special care. On 2 October 2026, the Municipal Corporation of Delhi (MCD) held a special meeting to make this work in every ward of the city. Delhi's target is that all its waste is separated by January 2027.", hi: "1 अप्रैल 2026 से नए नियमों के अनुसार हर घर को अपना कचरा चार हिस्सों में बाँटना है — गीला, सूखा, सैनिटरी और विशेष देखभाल वाला। दिल्ली का लक्ष्य है कि जनवरी 2027 तक हर जगह कचरा अलग-अलग किया जाए।", link: "All four types fit my dustbins. In Chandigarh's system, green is for wet, blue for dry, red for sanitary, and black for special-care waste like bulbs and batteries.", mentor: "SWM Rules 2026: notified by MoEFCC on 27 Jan 2026 and in force from 1 Apr 2026, replacing the 2016 rules. They set four streams: wet, dry, sanitary and special care. Bulk generators (100 kg/day, 20,000 sq m or 40,000 L of water a day) must treat wet waste on site. Unsegregated waste pays a higher landfill fee, and a central portal will track waste. Bin colours at home are NOT fixed nationally (only public bins have rule colours: green for wet, blue for dry, and red for sanitary in public toilets), so black and red at home follow Chandigarh's system: confirm with Rajnish Ma'am. MCD special meeting on 2 Oct 2026, chaired by Deputy Mayor Monika Pant; no deadlines were announced (Tribune, 3 Oct). Delhi Economic Survey 2025-26 (24 Mar 2026): segregation is about 92% in NDMC, up to 90% in Cantonment and about 59% in MCD. January 2027 is a target, not an achievement. Mayor Pravesh Wahi urged four-category segregation on 29 Aug 2026.", source: "https://www.tribuneindia.com/news/delhi/councillors-discuss-waste-segregation-sanitation-workers-welfare-at-mcd-meet/amp", sourceDate: "2026-10-03" },
      { id: "d-anupam", comp: "bins", area: "Segregation & compost", top: true, say: "The New Delhi Municipal Council (NDMC) gives the title 'Anupam Colony' to colonies that aim for zero waste. These colonies separate their waste into five types: dry, wet, sanitary, garden waste and e-waste. They make compost from wet waste and sort dry waste for recycling. In June 2026, Sangli Apartments became the eighth Anupam Colony.", hi: "नई दिल्ली में NDMC उन कॉलोनियों को 'अनुपम कॉलोनी' का ख़िताब देती है, जो अपना कचरा पाँच हिस्सों में बाँटती हैं — सूखा, गीला, सैनिटरी, बगीचे का कचरा और ई-कचरा।", link: "Like my model, these colonies use five separate groups for waste instead of mixing everything in one bin.", mentor: "Daily Pioneer (23 Jun 2026): Sangli Apartments, Copernicus Marg, was certified on 22 Jun 2026 as NDMC's eighth Anupam Colony. Criteria: 100% segregation into five categories (dry, wet, sanitary, horticulture, e-waste), on-site composting of wet and garden waste, a Material Recovery Facility for dry waste, a Reduce-Reuse-Recycle centre and a 'Neki Ki Diwar' (a wall where people leave things for others to reuse). Jor Bagh was also reported as one, but this was not verified. Her five bins are a DIFFERENT five (hazardous and (probably) biomedical instead of garden waste and e-waste; confirm the yellow bin with Rajnish Ma'am), so say 'five groups, like my model', never 'the same five bins'. Say 'aim for zero waste', not 'zero-waste colonies'. NDMC segregation is about 92% (Economic Survey, March 2026). This is a good link to her 'Reduce' answer.", source: "https://dailypioneer.com/news/sangli-apartment-certified-as-anupam-colony", sourceDate: "2026-06-23" },
      { id: "d-ndmc-compost", comp: "pots", area: "Segregation & compost", top: false, say: "The New Delhi Municipal Council (NDMC) makes compost from wet waste and garden leaves at its nursery in Chanakyapuri, New Delhi. By early October 2026, it had given 1,250 kg of this compost to 11 schools. It planned to give 3,000 kg more to 30 schools.", hi: "NDMC चाणक्यपुरी की अपनी नर्सरी में गीले कचरे और पत्तों से खाद बनाती है। अक्टूबर 2026 की शुरुआत तक उसने 1,250 किलो खाद 11 स्कूलों को दी थी।", link: "Compost from wet waste feeds plants, like the two flower pots in the park of my model.", mentor: "Millennium Post (9 Oct 2026) and UNI (8 Oct): the compost is made at NDMC's Hi-Tech Nursery, Madhu Limaye Marg, Chanakyapuri, in wire-mesh 'rounders', and it matures in 2–3 months. On 8 Oct 2026, 1,000 kg went to Lok Niwas (the Lieutenant Governor's office). Under Swachhata Hi Seva 2026, 1,250 kg went to 11 schools, and 3,000 kg was planned for 30 more (the research detail says '30 more schools'; its source check says '30 schools', so the stage line says only '30 schools', which is true either way). A related report says NDMC workers made about 13,000 kg of compost in the past year (Sep 2026). Composting uses air (aerobic) and biogas does not (anaerobic), which is a good viva contrast. Say '3,000 kg was planned', not 'given'.", source: "https://www.millenniumpost.in/delhi/ndmc-hands-over-1000-kg-of-organic-compost-to-lok-niwas-679085", sourceDate: "2026-10-09" },
      { id: "d-wte-plants", comp: "wte", area: "Biogas & waste-to-energy", top: true, say: "Delhi has four waste-to-energy plants, at Okhla, Ghazipur, Narela-Bawana and Tehkhand. Delhi's Economic Survey (March 2026) says that together they can make about 84 megawatts of electricity from garbage. Delhi plans to make two of these plants bigger and to build two new ones, with target dates in 2027 and 2028.", hi: "दिल्ली के ओखला, गाज़ीपुर, नरेला-बवाना और तेहखंड में कचरे से बिजली बनाने वाले चार प्लांट हैं, जो मिलकर लगभग 84 मेगावाट बिजली बना सकते हैं।", link: "My plastic-to-energy machine is a model of the same idea: heat from waste makes steam, and the steam helps make electricity.", mentor: "Delhi Economic Survey 2025-26 (Daily Pioneer, 24 Mar 2026): four WtE plants with 6,550 TPD capacity and about 84 MW. Delhi generates about 11,862 TPD (MCD 11,500, NDMC 300, Cantonment 62), but installed processing is only 7,641 TPD (about 64%). Planned targets: Okhla +1,000 TPD to 2,950 by 2027 (ThePrint: by March 2027), Tehkhand +1,000 to 3,000 by 2027, a new 3,000 TPD plant at Narela-Bawana by Dec 2027, and a new 2,000 TPD plant at Ghazipur by Dec 2028. An MCD affidavit to the NGT said the Ghazipur plant did not operate from April to December 2025, so don't claim all four always run, and don't say garbage powers the Delhi Metro. Capacity figures differ a little between sources, so '4 plants, about 84 MW' is safest. Only non-recyclable dry waste should go for energy. India's first WtE plant, at Timarpur in Delhi (1987), failed; experts say a big reason was that the waste was too wet and poor to burn well (as on her WtE card).", source: "https://dailypioneer.com/news/delhi-faces-4200-tonne-daily-waste-processing-gap", sourceDate: "2026-03-24" },
      { id: "d-dung-biogas", comp: "biogas", area: "Biogas & waste-to-energy", top: true, say: "Delhi's first big biogas plant is at Nangli Dairy. It is built to turn 200 tonnes of cow dung a day into biogas and compost. In July 2026, the Municipal Corporation of Delhi (MCD) signed an agreement to collect dung from about 1.25 lakh cattle. The plan is to turn this dung into biogas and manure, so that it does not go into the Yamuna.", hi: "दिल्ली की नांगली डेयरी का बायोगैस प्लांट रोज़ 200 टन गोबर को गैस और खाद में बदलने के लिए बनाया गया है। जुलाई 2026 में MCD ने लगभग सवा लाख पशुओं का गोबर इकट्ठा करने का समझौता किया, ताकि उससे बायोगैस और खाद बने और गोबर यमुना में न जाए।", link: "It is the same science as the biogas plant in my Smart Village: dung rots without oxygen and gives methane gas.", mentor: "Nangli: inaugurated on 20 Sep 2025 by CM Rekha Gupta (commissioned 17 Oct 2025, per a World Biogas Association brief). It is designed for 200 MT/day, cost Rs 16 crore, is on 2.7 acres and was part-funded by MoHUA. Planned output is about 5,600 kg of compressed biogas for Indraprastha Gas Ltd by pipeline, plus about 30 t of compost a day. The dung comes from Nangli (about 13,000 cattle) and Kakrola (about 7,000) dairies. It ran on trial at about 25 TPD at launch, and no 2026 output data was found, so always say 'built to'. Say 'biogas', not 'clean gas' (biogas also contains CO2; her biogas careful note says 'cleaner', not pollution-free). MoU: MCD and the National Dairy Development Board, 15 Jul 2026 (Amit Shah, the CM, the LG and the Mayor were present; names not for stage). It covers about 1,500 MT of dung a day. Owners are to get Rs 1/kg (a plan, so say 'will get'). Processing will be at Nangli, Ghogha-Goyla and Ghazipur. The goal is no untreated wastewater in the Yamuna by Dec 2028. National link: in August 2026 the Union Cabinet approved the Rs 23,731 crore GOBARdhan National Circular Bioenergy Scheme (PIB 7 Aug; some say 6 Aug), running FY2026-27 to 2035-36 under the Ministry of Petroleum and Natural Gas. It is already on her biogas page.", source: "https://indianmasterminds.com/news/delhi-mou-cbg-plants-yamuna-cleaning-amit-shah-zero-dirty-water-2028-217280/", sourceDate: "2026-07-16" },
      { id: "d-wetwaste-gas", comp: "biogas", area: "Biogas & waste-to-energy", top: false, say: "In September 2025, a plant opened at Ghogha Dairy in Delhi that can turn 100 tonnes of city garbage a day into biogas fuel. In July 2026, MCD and Oil India agreed to build two more plants, at Tehkhand and Okhla. Together, they are meant to take 800 tonnes of wet waste a day, such as kitchen waste. These plants will make Bio-CNG: biogas that is cleaned so it can be used like CNG.", hi: "सितंबर 2025 में दिल्ली की घोघा डेयरी में एक प्लांट शुरू हुआ, जो रोज़ शहर के 100 टन कचरे से बायोगैस ईंधन बना सकता है। जुलाई 2026 में तेहखंड और ओखला में दो नए बायो-सीएनजी प्लांट बनाने का समझौता हुआ, जिनमें रोज़ 800 टन गीले कचरे से गैस बनेगी।", link: "This is why wet waste must go in the green bin: clean, separated kitchen waste is what a biogas plant needs.", mentor: "Ghogha Dairy: a 100 TPD municipal-solid-waste-to-CBG plant opened by the CM about 26 Sep 2025 (BioEnergy Times, 27 Sep 2025). It makes about 4 t of gas a day, has two digesters (6,000 cubic metres) and a CBG-CNG fuel station, and came from a 2022 MCD–IGL agreement. This fact is about a year old and was not re-confirmed in 2026, so say 'opened', not 'runs'. Oil India MoU, 30 Jul 2026 (NSE filing; Asianet 31 Jul; Biltrax): Tehkhand 500 TPD (about 10 acres) and Okhla 300 TPD (about 7 acres) of segregated wet waste. Oil India will invest about Rs 400 crore, and about 30–32 TPD of CBG will go through its pipeline network. Some reports call Tehkhand 'Tughlakabad'. It is an agreement, not a working plant, so never say Delhi 'is making' gas from kitchen waste. Also: a foundation stone for a 300 TPD biogas plant for biodegradable waste at Ghazipur was laid on 3 Oct 2026. Vision only, with no timeline: Union Minister Nitin Gadkari said on 6 Jul 2026 that segregated garbage could make hydrogen for Delhi's buses. Don't present that as a plan.", source: "https://newsable.asianetnews.com/india/delhi-green-future-begins-waste-to-wealth-project-to-reduce-garbage-mountains-and-boost-clean-energy-articleshow-bvpi05z", sourceDate: "2026-07-31" },
      { id: "d-ebuses", comp: "bus", area: "Clean air & transport", top: true, say: "On 13 October 2026, 150 new electric buses started running in Delhi. After that, Delhi had more than 5,200 electric buses. The Delhi Government says no other city in India has so many electric buses.", hi: "13 अक्टूबर 2026 को 150 नई इलेक्ट्रिक बसें जुड़ने के बाद दिल्ली में 5,200 से ज़्यादा इलेक्ट्रिक बसें हो गईं। दिल्ली सरकार के अनुसार भारत के किसी और शहर में इतनी इलेक्ट्रिक बसें नहीं हैं।", link: "One electric bus carries many people without tailpipe smoke, like the two electric buses at my bus stand.", mentor: "ETV Bharat and UNI (12–13 Oct 2026): on 13 Oct 2026, CM Rekha Gupta and Union Environment Minister Bhupender Yadav flagged off 150 e-buses at Anand Vihar ISBT. This took the electric fleet to 5,238 out of about 6,988 buses (about 1,750 run on CNG). The new buses are low-floor AC with CCTV, panic buttons, live tracking and disability access. Earlier there were 5,088 e-buses from 40 depots (21–23 Sep 2026). 'Biggest fleet' is the Delhi Government's own claim (ThePrint/PTI, Feb 2026; Electrive repeats it; the 13 Oct ETV Bharat report does not repeat it), so keep 'the Delhi Government says'. ETV Bharat (13 Oct) also confirms 5 public EV charging stations (naming only Anand Vihar ISBT), 13 new air-quality stations (60 in all) and 34 Air-Guardian teams. Plans: make the whole DTC fleet electric and reach about 14,000 buses by 2028-29 (repeated on 13 Oct). The nearer target is 7,500 buses, including 5,800 electric, by March 2027. DEVI (Delhi Electric Vehicle Interconnector) uses 9-metre e-buses for narrow lanes, linking homes to Metro stations (since 2025). Delhi–Karnal AC e-buses started from Kashmere Gate in Aug 2026 (5 buses, 10 trips each way a day, per AIR 19 Aug). School e-buses: 24 for Sardar Patel Vidyalaya (Aug 2025, no 2026 update). A pre-event report (Swarajya, 10 Oct) spoke of 200 buses on 14 Oct and a 7,000 fleet, but no report confirmed it. Re-check on 23 Oct for any new flag-off: 'more than 5,200' stays true if the fleet grows.", source: "https://www.etvbharat.com/amp/en/state/delhi-launches-150-new-electric-buses-13-caqms-stations-5-ev-charging-stations-to-curb-pollution-enn26101302856", sourceDate: "2026-10-13" },
      { id: "d-hydrogen-bus", comp: "train", area: "Clean air & transport", top: false, say: "In May 2026, Delhi Metro and IndianOil started a trial service of two hydrogen buses near India Gate in New Delhi. A fuel cell in each bus joins hydrogen with oxygen from the air to make electricity. So the main thing that comes out is water vapour, not smoke.", hi: "मई 2026 में नई दिल्ली में इंडिया गेट के पास दो हाइड्रोजन बसों की ट्रायल सेवा शुरू हुई, जिनसे धुएँ की जगह मुख्य रूप से जलवाष्प निकलती है।", link: "These buses use fuel cells, the same idea as the hydrogen train in my model.", mentor: "ETV Bharat (15 May 2026): launched on 15 May 2026 by DMRC with IndianOil, jointly with MoHUA and the Ministry of Petroleum. Route: Central Secretariat to Seva Teerth Metro stations, looping past Kartavya Bhawan, Vigyan Bhawan, Nirman Bhawan, National Stadium and India Gate. There are 2 buses, 12 m long with 35 seats each, using a 70 kW PEM fuel cell with hydrogen stored at 350 bar. They ran on weekdays, 8:30am–12:30pm and 3:30–6:30pm, every 30 minutes, with fares of Rs 10/15. It was described as a trial. Media called it 'India's first hydrogen shuttle', but earlier hydrogen bus trials ran (for example in Leh and earlier IndianOil trials), so don't say 'India's first'. No Sep–Oct 2026 report confirms it is still running: say 'started in May 2026', never 'runs' or 'there are hydrogen buses in Delhi'.", source: "https://www.etvbharat.com/en/state/india-first-hydrogen-powered-shuttle-bus-service-launched-in-delhi-central-vista-enn26051503670", sourceDate: "2026-05-15" },
      { id: "d-hydrogen-train", comp: "train", area: "Clean air & transport", top: false, say: "On 17 July 2026, India's first hydrogen train was flagged off between Jind and Sonipat in Haryana, close to Delhi. The main thing that comes out of it is water vapour, not diesel smoke.", hi: "17 जुलाई 2026 को दिल्ली के पास, हरियाणा में जींद और सोनीपत के बीच, भारत की पहली हाइड्रोजन ट्रेन को हरी झंडी दिखाई गई। इससे डीज़ल के धुएँ की जगह मुख्य रूप से जलवाष्प निकलती है।", link: "This is the train in my model, the one with the Jind–Sonipat label.", mentor: "IANS and DT Next (17 Jul 2026): PM Narendra Modi flagged it off at Jind. The route is 89 km Jind–Gohana–Sonipat, about 2 hours, with 12 intermediate stations. It has 10 coaches (2 power cars and 8 passenger coaches) for about 2,600 passengers, and was built at ICF Chennai. Commercial service was due to start on 19 Jul 2026 (Northern Railway CPRO, Republic World 18 Jul), with fares of Rs 10–25. Power ratings differ between sources, so don't quote kW or HP. Likely only (ThePrint/PTI, 17 Sep 2026): Railways is studying an extension to Azadpur in Delhi, because only 40–60 people ride per trip and it makes one return trip a day; the decision will be taken 'after due consideration'. This is mentor-only (a 'likely' item): do not raise it on stage, and never mention low ridership. As of 15 Oct 2026 no decision had been reported (latest: ThePrint/PTI 17 Sep; Business Today 20 Sep). Check the news again on 23 Oct.", source: "https://www.dtnext.in/news/national/pm-modi-flags-off-indias-first-hydrogen-powered-train-from-haryanas-jind", sourceDate: "2026-07-17" },
      { id: "d-ev-policy", comp: "ev", area: "Clean air & transport", top: false, say: "Delhi's new EV Policy, for electric vehicles, started on 1 July 2026. From 1 January 2027, every new auto registered in Delhi must be electric. From 1 April 2028, every new scooter and motorbike must be electric too. On 13 October 2026, five new public charging stations for electric vehicles opened in Delhi, including one at the Anand Vihar bus terminal.", hi: "दिल्ली की नई इलेक्ट्रिक वाहन (EV) नीति 1 जुलाई 2026 से लागू हुई। 1 जनवरी 2027 से दिल्ली में सिर्फ़ इलेक्ट्रिक ऑटो का नया रजिस्ट्रेशन होगा, और 1 अप्रैल 2028 से सिर्फ़ इलेक्ट्रिक स्कूटर और मोटरसाइकिल का।", link: "My EV charging station shows why charging points matter: electric vehicles need them the way petrol cars need petrol pumps.", mentor: "Delhi EV Policy 2026 was notified on 1 Jul 2026 (DTNext; ThePrint/PTI). It is valid to 31 Mar 2030, with about Rs 15,000 crore over four years. From 1 Jan 2027, only electric autos (and N1 goods vehicles, per Electrive) can be newly registered; from 1 Apr 2028, only electric two-wheelers. The e-two-wheeler subsidy is Rs 30,000, then 20,000, then 10,000 in years 1–3. E-cars up to Rs 30 lakh are exempt from road tax and the registration fee, and there is a scrappage incentive. More than 30,000 charging points are planned (the CM and Electrive say 32,000 by 2030). The count of existing chargers is disputed (about 9,000 per the CM in July 2026; '10,000+' in one PTI report that includes private chargers), so don't quote a current number. On 13 Oct 2026, five public charging stations were inaugurated; the post-event ETV Bharat report (13 Oct) names only Anand Vihar ISBT. The DTC depots (Nand Nagri, Rohini Sector-37, Nangloi, Keshopur) come from UNI's pre-event report of 12 Oct, written in the future tense, so name only Anand Vihar on stage. The rules are for NEW registrations: never say petrol scooters are banned.", source: "https://www.dtnext.in/news/business/delhi-government-notifies-delhi-ev-policy-2026", sourceDate: "2026-07-01" },
      { id: "d-no-burning", comp: "wte", area: "Clean air & transport", top: false, say: "In Delhi, burning garbage, leaves or plastic in the open is not allowed. Anyone who does it can be fined ₹5,000 on the spot. Delhi's Winter Action Plan 2026-27 asks people to report such burning on the 311 helpline or the Green Delhi App.", hi: "दिल्ली में खुले में कूड़ा, पत्ते या प्लास्टिक जलाना मना है। ऐसा करने पर मौके पर ही ₹5,000 का जुर्माना लग सकता है। ऐसी आग दिखे, तो 311 हेल्पलाइन या ग्रीन दिल्ली ऐप पर शिकायत की जा सकती है।", link: "At my plastic-to-energy machine I say the same thing: never burn plastic in the open; put it in the right dustbin.", mentor: "The Tribune (10 Dec 2025): a Delhi Environment Department order set a Rs 5,000 on-the-spot environmental fine for burning leaves, garbage, plastic or rubber in the open. It follows NGT orders (Vardhaman Kaushik vs Union of India, 2014–15). Sanitary inspectors and deputy tehsildars collect it, and MCD, NDMC, the Cantonment and the districts report monthly to DPCC. Open burning is a major local source of PM2.5 and PM10. The Winter Action Plan 2026-27 was announced on 29 Sep 2026 by Environment Minister Manjinder Singh Sirsa (name not for stage; Republic/ANI). It includes the 311 helpline and Green Delhi App, 334 enforcement teams, 'No PUCC – No Fuel' at 500 pumps and an AI command centre. On 13 Oct 2026, 13 new air-quality monitoring stations opened, making 60 in all, and 34 'Air-Guardian' teams watch burning hotspots (ETV Bharat). Most winter measures start on 1 Nov 2026, after her event, so don't say they are in force. The national NGT 2016 fines (Rs 5,000, or Rs 25,000 for bulk burning) are on her open-burning card.", source: "https://www.tribuneindia.com/news/delhi/pay-5k-fine-for-burning-leaves-garbage-plastic-in-open", sourceDate: "2025-12-10" },
      { id: "d-delhi-rooftop", comp: "solar", area: "Solar & clean energy", top: true, say: "In September 2026, the Delhi Government announced a new solar plan. Homes that use up to 400 units of electricity a month can get a 3-kilowatt solar system on their roof. They pay nothing at the start. Help comes from the Government of India's PM Surya Ghar scheme and from the Delhi Government. The goal is about 2.3 lakh homes and 500 megawatts by March 2027.", hi: "सितंबर 2026 में दिल्ली सरकार ने घोषणा की कि जो घर हर महीने 400 यूनिट तक बिजली इस्तेमाल करते हैं, उन्हें छत पर 3 किलोवाट का सोलर सिस्टम बिना शुरुआती खर्च के मिल सकता है।", link: "The buildings in my Smart City have solar panels too, and one of them is a real panel that lights a bulb.", mentor: "Energetica India and SolarQuarter (2 Sep 2026): the Delhi Cabinet approved the second amendment to the Delhi Solar Energy Policy 2023 on 1 Sep 2026. The subsidy is Rs 78,000 from the Centre (PM Surya Ghar) plus Rs 78,000 from Delhi, and Delhi covers the rest. A 3 kW system costs about Rs 1.75 lakh (not separately confirmed). There are 5 years of free maintenance and no fee up to 10 kW, and net-metering approval was cut from 75 to 25 days. IPGCL runs the scheme by competitive bidding. There were about 10,073 rooftop installations in Delhi at that time. 2.3 lakh homes / 500 MW by March 2027 is a target. No October rollout update was found, so say 'announced', not 'homes have got it'. On stage say 'the Government of India's PM Surya Ghar scheme', not 'the Centre's'. Extra Delhi solar facts (2025) if a judge asks: Delhi Metro has rooftop solar on 93 stations and 15 depots, and it opened India's first vertical bifacial solar plant at Okhla Vihar station on 18 Feb 2025. About one-third of Metro power is renewable, mostly from the Rewa solar park in Madhya Pradesh (Tribune, Oct 2025).", source: "https://www.energetica-india.net/news/delhi-offers-up-to-3-kw-rooftop-solar-at-zero-upfront-cost-under-new-solar-energy-policy", sourceDate: "2026-09-02" },
      { id: "d-surya-ghar", comp: "solar", area: "Solar & clean energy", top: false, say: "By August 2026, about 50 lakh homes across India had rooftop solar panels under the PM Surya Ghar Muft Bijli Yojana. In July 2026 alone, about 5 lakh homes got panels, the most in any month up to then.", hi: "अगस्त 2026 तक पीएम सूर्य घर मुफ़्त बिजली योजना के तहत भारत के लगभग 50 लाख घरों की छतों पर सोलर पैनल लग चुके थे।", link: "If more roofs had solar panels like the buildings in my Smart City, we would need to burn less coal.", mentor: "MNRE via IANS and Mercom (4 Aug 2026): more than 50.06 lakh households and 14.8 GW. But the same Mercom article quotes the minister giving 39.7 lakh systems benefiting about 48 lakh households in July, so say 'about 50 lakh'. July 2026 had 5.06 lakh installations (about 16,328 a day, up from 5,038 a day in Oct 2025), the highest month at that time. A web re-check on 15 Oct 2026 found no Aug or Sep 2026 monthly figure, so July may since have been beaten: say 'the most in any month up to then', never 'the record month'. Rs 28,024 crore has been paid by DBT out of a Rs 75,021 crore outlay, and the target is 1 crore homes by March 2027. Delhi: 17,481 PM Surya Ghar installations, 69.81 MW (May 2026). National clean energy (already on her site): 300.5 GW of non-fossil capacity by 31 Jul 2026. Likely only, so mentor-only: solar crossed 171 GW by end-September 2026 (SolarQuarter citing MNRE). Capacity is not the same as electricity generated.", source: "https://mercomindia.com/pm-surya-ghar-powers-5-million-homes-total-capacity-hits-15-gw", sourceDate: "2026-08-04" },
      { id: "d-okhla-stp", comp: "filter", area: "Yamuna & clean water", top: true, say: "Delhi has one of Asia's biggest sewage treatment plants, at Okhla. Sewage is the dirty water from our homes. This plant can clean 564 million litres of it a day, from about 40 lakh people. It can also make 4.8 megawatts of electricity from biogas!", hi: "दिल्ली के ओखला में एशिया के सबसे बड़े सीवेज ट्रीटमेंट प्लांटों में से एक है। यह रोज़ लगभग 56 करोड़ लीटर गंदा पानी साफ़ कर सकता है, और बायोगैस से 4.8 मेगावाट बिजली भी बना सकता है।", link: "My filter shows only the first, simple step of cleaning water. A big plant like Okhla does much more, and it can even make biogas, like my Smart Village.", mentor: "The Tribune (10 Apr 2025) and Millennium Post (24 Sep 2025): 564 MLD (about 124 MGD), called 'Asia's largest single-stage' wastewater plant, so say 'one of Asia's biggest'. It serves about 40 lakh people in Old, Central and South Delhi and NDMC areas. It uses activated sludge (bacteria), disc filters and UV disinfection, with SCADA monitoring. 4.8 MW from sludge biogas meets nearly half its own power needs. It makes India's first 'Class-A' sludge, usable as fertiliser. It intercepts about 35 MGD of sewage from the Barapullah and Maharani Bagh drains, and about 40 MLD of treated water has been used for horticulture since June 2024. Cost Rs 1,161 crore, 40 acres, built under Yamuna Action Plan-III (85% Centre, 15% Delhi). These facts are from 2025, so the stage line says 'can clean' and 'can make'; an October 2026 Ganga task-force meeting (ANI, 8 Oct) mentions river flows from the Okhla STP, so it is operating. Treated water is NOT drinking water. 1 MGD is about 4.5 million litres; 564 million litres is about 56 crore litres.", source: "https://www.tribuneindia.com/news/delhi/wastewater-treatment-plant-at-delhis-okhla-now-fully-operational/", sourceDate: "2025-04-10" },
      { id: "d-sewage", comp: "filter", area: "Yamuna & clean water", top: false, say: "In August 2026, Delhi's sewage treatment plants could clean about 814 million gallons of dirty water a day. A gallon is about four and a half litres. The target is about 1,041 million gallons a day by the end of 2027. Delhi is also setting up 28 new small sewage plants.", hi: "अगस्त 2026 में दिल्ली के सीवेज प्लांटों में रोज़ लगभग 814 मिलियन गैलन गंदा पानी साफ़ करने की क्षमता थी। एक गैलन लगभग साढ़े चार लीटर होता है। 2027 के अंत तक इसे लगभग 1,041 मिलियन गैलन रोज़ तक ले जाने का लक्ष्य है।", link: "My filter shows only the first, simple step of cleaning water; sewage plants do much more, and they stop dirty water from going straight into the river.", mentor: "PTI (29 Jan 2026): 37 STPs. Capacity rose from 707 MGD (Feb 2025) to 814 MGD (Nov 2025), and plants meeting the stricter 10/10 standard rose from 16 to 28 of 37. The Delhi Jal Board told the Delhi High Court on 24 Aug 2026 that capacity was 814.26 MGD, with a target of 1,041.10 MGD by 31 Dec 2027 (SCC Online, 27 Aug). DJB's 179th meeting (Jul 2026) approved 15 new decentralised STPs (about 103.5 MGD, about Rs 2,000 crore); with 13 approved earlier, 28 are under implementation (completion around 2028). It also approved 989 km of sewers in 244 colonies and 57 villages, and Rs 274 crore for sludge. Sources differ on how much the 28 plants add, and 1,041 needs ALL approved projects, not only the 28, so don't link the two. 814 is installed CAPACITY, not sewage actually treated. Delhi makes about 1,000 MGD, some colonies have no sewers, and the river is still polluted, so never say the Yamuna is clean. Do NOT quote the January 2026 '1,500 MGD / Mission 2028' figure on stage. Dropped: the NMCG approval of Rohini and Pappankalan STPs (one outlet, 13 Oct 2026); don't use it unless an official release appears. Namami Gange (Ganga basin, including the Yamuna): 147 sewerage projects completed, 4,339 MLD (as of Aug 2026), and drones survey Delhi's drains. MGD here means million (imperial) gallons a day; 1 gallon is about 4.5 litres.", source: "https://www.scconline.com/blog/post/2026/08/27/delhi-hc-immediate-measures-yamuna-pollution-waterlogging-sewage-treatment-industrial-redevelopment/", sourceDate: "2026-08-27" },
      { id: "d-skimmers", comp: "filter", area: "Yamuna & clean water", top: false, say: "In April 2026, Delhi put two trash-skimmer machines on the Najafgarh drain. They pick up floating plastic and water weeds before they can reach the Yamuna.", hi: "अप्रैल 2026 में दिल्ली ने नजफ़गढ़ नाले पर दो ट्रैश-स्किमर मशीनें लगाईं। ये मशीनें तैरते प्लास्टिक और जलकुंभी को यमुना तक पहुँचने से पहले ही निकाल लेती हैं।", link: "They work like the top layer of stones in my filter: catch the big rubbish first.", mentor: "The Tribune and Daily Pioneer (5 Apr 2026): two dual-purpose weed-harvester-cum-trash-skimmers (Rs 2.90 crore for both, 112 HP, about 14 cubic metres of storage each) were flagged off on Sat 4 Apr 2026 near Punjabi Bagh by Irrigation & Flood Control Minister Parvesh Sahib Singh (name not for stage). They remove floating trash and water hyacinth (jalkumbhi). The Najafgarh drain is a major source of pollution entering the Yamuna. No tonnage was published, so don't claim amounts. Her existing trash-skimmer card covers Namami Gange skimmers on the Ganga.", source: "https://www.tribuneindia.com/news/delhi/govt-deploys-trash-skimmer-machines-at-najafgarh-drain/", sourceDate: "2026-04-05" },
      { id: "d-cetp", comp: "factory", area: "Yamuna & clean water", top: false, say: "Delhi's industrial areas have shared plants that clean dirty water from factories. In August 2026, the Delhi Government announced that it will choose expert companies to run these plants day and night. The aim is to clean factory water before it can reach the Yamuna.", hi: "दिल्ली के औद्योगिक इलाकों में साझा प्लांट फ़ैक्ट्रियों का गंदा पानी साफ़ करते हैं। अगस्त 2026 में दिल्ली सरकार ने घोषणा की कि इन्हें दिन-रात चलाने के लिए विशेषज्ञ कंपनियाँ चुनी जाएँगी।", link: "In my model, the factory's dirty water goes through a pipe to a simple filter. A real factory must clean its water in an Effluent Treatment Plant (ETP), and when many factories share one, it is called a CETP (Common Effluent Treatment Plant).", mentor: "PTI via The Patriot (7 Aug 2026): officials said Delhi 'will empanel' agencies through competitive bidding to operate, maintain and monitor the common effluent treatment plants (CETPs) in 11 industrial areas (for example Nariana, Badli, Wazirpur, Nangloi, GT Karnal Road and Jhilmil). Industry societies run them now, and DSIIDC will assign them to the agencies. Agencies must run them 24x7, keep pH and dissolved oxygen right, do jar tests for chemical dosing, and meet DPCC/CPCB standards. Background: 13 CETPs with about 212 MLD design capacity serve 17 of Delhi's 24 industrial areas, and past reviews found them used far below capacity. It is an announced plan and a reform, not a result, so say 'announced that it will choose'. Her model's 'Sugar & Leather' factory fits: leather units need chromium treatment. Never say her filter does an ETP's job (her factory/filter careful notes and card md-filter-vs-etp).", source: "https://thepatriot.in/delhi-ncr/delhi-govt-to-take-over-industrial-effluent-treatment-plants-to-curb-yamuna-pollution-88289", sourceDate: "2026-08-07" },
      { id: "d-dpcc-idols", comp: "ganesha", area: "Festivals & idols", top: true, say: "On 9 September 2026, the Delhi Pollution Control Committee (DPCC) gave an order. Idols must not be immersed in the Yamuna or any other river, lake or pond, except at special immersion sites. Idol makers were told to use natural clay and natural colours, and Plaster of Paris idols must not go into the water. Anyone who breaks the rule may have to pay ₹50,000.", hi: "9 सितंबर 2026 को दिल्ली प्रदूषण नियंत्रण समिति (DPCC) ने आदेश दिया कि मूर्तियाँ यमुना या किसी और नदी, झील या तालाब में नहीं, सिर्फ़ तय जगहों पर ही विसर्जित की जाएँ। मूर्तियाँ प्राकृतिक मिट्टी और प्राकृतिक रंगों से बनें, और प्लास्टर ऑफ़ पेरिस की मूर्तियाँ पानी में न डाली जाएँ। नियम तोड़ने पर ₹50,000 देने पड़ सकते हैं।", link: "My clay Ganesha follows the same idea: it is made with clay that breaks down easily in water, and daals.", mentor: "DPCC directions dated 9 Sep 2026 under Section 33A of the Water Act, 1974 (Millennium Post/PTI 17 Sep; Deccan Chronicle 16 Sep; Tribune 17 Sep). They ban immersion in the Yamuna or other Delhi water bodies except at designated sites, with Rs 50,000 environmental compensation. Makers and sellers must use natural clay, biodegradable materials and natural dyes, and PoP idols are not allowed for immersion. Chemical paints may carry mercury, chromium, lead and cadmium. The order covers Ganeshotsav and Durga Puja, and cites the CPCB 2020 guidelines and NGT 2015 orders. Water Act violations can mean up to 6 years in jail; DMs enforce the order, and police check vehicles bringing banned idols. 'Special sites' means designated ponds, pits or tanks. Don't call PoP poison, and don't say 'PoP is banned all over India' (CPCB told the Bombay HC in July 2026 that its guidelines are advisory; LiveLaw 28 Jul 2026). Her Ganesha was made before this order, so say it 'follows the same idea', never that she made it because of the order. Mentor only: Oneindia (20 Sep) found ponds not ready at Kalindi Kunj and some idols still going into the river; don't raise it. This matches the DPCC note already on her Ganesha page.", source: "https://www.millenniumpost.in/delhi/no-idol-immersion-in-yamuna-other-water-bodies-dpcc-676274", sourceDate: "2026-09-17" },
      { id: "d-ponds", comp: "ganesha", area: "Festivals & idols", top: false, say: "For Ganesh Visarjan in September 2026, the Delhi Government set up 81 artificial ponds in all 13 districts. People could immerse idols there without polluting the Yamuna. Flowers and decorations had to be taken off first. Broken idols and old puja items could go to collection points called 'Visarjan Patras', to be recycled.", hi: "सितंबर 2026 में गणेश विसर्जन के लिए दिल्ली सरकार ने सभी 13 ज़िलों में 81 कृत्रिम तालाब बनवाए। टूटी मूर्तियों और पुरानी पूजा सामग्री के लिए 'विसर्जन पात्र' भी रखे गए, ताकि उन्हें रीसायकल किया जा सके।", link: "My clay Ganesha can be immersed in a bucket at home or in an artificial pond, and puja flowers can go in the green bin.", mentor: "81 artificial ponds across 13 districts (ANI via webindia123, 23 Sep 2026; ThePrint and Asianet, 22–24 Sep) is the government figure; one report said 'about 90'. The main Visarjan day was Anant Chaturdashi, Fri 25 Sep 2026. Visarjan Patras: ANI said 110 collection centres in 18 clusters and Asianet said more than 250, so give no number. 'Processed for scientific recycling' is the plan, and no results were published. The DPCC order (Tribune, 17 Sep) says flowers and decorations are removed before immersion, biodegradable waste is composted and non-biodegradable waste goes for safe disposal (matching CPCB 2020 colour-coded bins). Durga Puja: the same order covered it. On 6 Oct 2026, the Delhi Government asked the Irrigation & Flood Control Department to prepare immersion pits and water, plan artificial ponds and clean the sites afterwards (Tribune). Dussehra was Tue 20 Oct 2026, so by 24 Oct Durga Puja is over: use the past tense, say what was arranged, and don't claim results. Look for a post-Dussehra report on 23 Oct. Chhath arrangements: single-window permissions from 15 Oct 2026. Her Ganesha is clay + daals with no flowers, so the link says 'puja flowers'.", source: "https://news.webindia123.com/news/Articles/India/20260923/4502230.html", sourceDate: "2026-09-23" },
      { id: "d-shs-2026", comp: "general", area: "Campaigns & awards", top: false, say: "Swachhata Hi Seva 2026 started on 17 September 2026. Its theme is 'Swachhata Mein Sahbhag; Swachh Bharat, Viksit Bharat'. It means that when everyone takes part in cleanliness, India becomes clean and developed. On 1 October 2026, people cleaned about 300 places across Delhi under the slogan 'Ek Din, Ek Ghanta, Ek Saath' (One Day, One Hour, Together).", hi: "स्वच्छता ही सेवा 2026 अभियान 17 सितंबर 2026 को शुरू हुआ। इसकी थीम है — 'स्वच्छता में सहभाग; स्वच्छ भारत, विकसित भारत'। 1 अक्टूबर 2026 को 'एक दिन, एक घंटा, एक साथ' के नारे के साथ दिल्ली में लगभग 300 जगहों पर सफ़ाई हुई।", link: "My whole model is my 'sahbhag', my way of taking part in Swachh Bharat.", mentor: "AIR (16 Sep 2026): SHS 2026 began on 17 Sep 2026 with the theme 'Swachhata Mein Sahbhag; Swachh Bharat, Viksit Bharat'. It is run by MoHUA and the Jal Shakti ministry (DDWS), and has been held every year since 2017. The end date is unclear (UGC/CBSE say 2 Oct; AIR/PTI say 17 Oct), so say only 'started on 17 September'. Her older card ci-swachhata-hi-seva says SHS usually ends on 2 October (Gandhi Jayanti); for 2026, give only the start date. The five pillars include Swachh Paathshala (students and youth), Jan Bhagidari ('Swachh Parv, Harit Parv' for green festivals) and Swachhata se Samriddhi ('Kabaad Se Jugaad', 'Kabaad Se Kala'). The 'Class 6–12 Swachhata Gyan Yatra' detail comes from one secondary source (likely), so keep it off stage. On 1 Oct 2026, about 300 Delhi locations were cleaned (PTI via The Patriot), and the CM joined at Kamla Nehru Ridge. Separately, the Jal Shakti Ministry's drive at Kalindi Kunj Ghat had more than 1,100 volunteers. Avoid the political quotes in some reports. On Swachh Bharat Diwas, 2 Oct 2026, special Gram Sabhas across India discussed the SWM Rules 2026, with 'Ek Ped Maa Ke Naam' tree planting. Special Campaign 6.0 for government offices runs 2–31 Oct 2026.", source: "https://newsonair.gov.in/swachhata-hi-seva-2026-campaign-will-be-observed-from-sep-17-across-the-country/", sourceDate: "2026-09-16" },
      { id: "d-kude-azadi", comp: "general", area: "Campaigns & awards", top: false, say: "From 17 August to 2 October 2026, the Delhi Government ran a cleanliness campaign called 'Delhi Ko Kude Se Azadi', which means 'Freedom from Garbage'. Each month, the cleanest ward, or part of the city, could win ₹1 crore. There was also a special drive for government schools called 'Mera School, Sabse Sundar', which means 'My School, the Most Beautiful'.", hi: "17 अगस्त से 2 अक्टूबर 2026 तक दिल्ली में 'दिल्ली को कूड़े से आज़ादी' अभियान चला, जिसमें हर महीने सबसे साफ़ वार्ड को ₹1 करोड़ मिल सकते थे।", link: "Prizes for clean wards show that cleanliness is everyone's job, which is the message of my model.", mentor: "The Tribune and Daily Pioneer (18 Aug 2026): 'Delhi Ko Kude Se Azadi – Swachhta Abhiyan 2026' was launched by CM Rekha Gupta at MCD headquarters on Monday 17 Aug 2026 and ran to 2 Oct 2026. The best ward each month gets Rs 1 crore. Exceptional work can earn up to Rs 2 crore extra, and a ward can get up to Rs 12 crore a year from the CM Development Fund. Ranking is by an independent agency, inspections and citizen complaints. The focus is the 'four Cs' (collection, cleaning, conversion, circular economy), with 70 mechanical sweepers and litter pickers and 125 C&D waste collection centres. 'Mera School, Sabse Sundar' (17 Sep–2 Oct) was for government schools, with a zero-waste campus initiative; the sources only schedule it, and no report on participation was found, so say 'there was a drive', not 'schools took part'. No winners list was found, so don't name wards. Keep it neutral: 'the Delhi Government ran it'.", source: "https://www.tribuneindia.com/news/delhi/delhi-govt-launches-cleanliness-campaign-announces-rs-1-crore-monthly-incentive-for-best-performing-wards/", sourceDate: "2026-08-18" },
      { id: "d-ndmc-award", comp: "citytoilets", area: "Campaigns & awards", top: false, say: "In India's cleanliness survey, Swachh Survekshan 2024-25, the New Delhi Municipal Council (NDMC) was named a 'Super Swachh League City'. This puts it among India's cleanest cities. The President of India gave the award on 17 July 2025. NDMC reported a 100% score for clean public toilets.", hi: "स्वच्छ सर्वेक्षण 2024-25 में नई दिल्ली नगर पालिका परिषद (NDMC) को 'सुपर स्वच्छ लीग सिटी' चुना गया, और यह पुरस्कार 17 जुलाई 2025 को भारत की राष्ट्रपति ने दिया।", link: "Clean public toilets are part of Clean India, like the two toilets in my Smart City.", mentor: "The Tribune (18 Jul 2025): presented by President Droupadi Murmu at Vigyan Bhawan on 17 Jul 2025, in the 50,000–3 lakh population category. NDMC's own figures: 99% door-to-door collection, 87% segregation, 100% waste disposal and 100% public-toilet cleanliness (a survey score, so say 'a 100% score', not 'every toilet was clean'). The 2024-25 theme was 'Reduce, Reuse, Recycle'. Skip MCD's rank, because its category was reported inconsistently. Swachh Survekshan 2025-26 (10th edition, about 4,900 cities, theme 'Swachhata Ki Nayi Pehel – Badhayein Haath, Karein Safai Saath') had no results as of 15 Oct 2026 (web re-check; the 'SS 2025' hits are the 2024-25 awards). Check swachhsurvekshan.gov.in on 23 Oct, and if new results are out, don't present this one as the newest. On 1 Oct 2026, NDMC opened its largest community toilet at Jodhpur Mess, Pandara Road (about Rs 1 crore, NBCC CSR).", source: "https://www.tribuneindia.com/news/delhi/ndmc-bags-super-swachh-league-city-award/", sourceDate: "2025-07-18" }
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
      { e: "😷", item: "Used face mask", bin: "red", why: "In Chandigarh, used masks go with sanitary waste in the red bin." }
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
      { q: "In your filter, which layer is at the TOP?", o: ["Cotton", "Charcoal", "Stones and gravel", "Sand"], answer: 2, why: "Water flows from coarsest to finest: stones → sand → charcoal → cotton." },
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
    // 🏙️ Delhi
      { q: "Delhi's three big 'garbage mountains' (landfills) are at…", o: ["Okhla, Bhalswa and Ghazipur", "Chandni Chowk, Karol Bagh and Lajpat Nagar", "Noida, Gurugram and Faridabad", "Rohini, Dwarka and Saket"], answer: 0, why: "Okhla, Bhalswa and Ghazipur are Delhi's three big landfills. They are being cleared by biomining." },
      { q: "Under Delhi's DPCC order of 9 September 2026, where must idols NOT be immersed?", o: ["In an artificial pond", "In the Yamuna river", "In a bucket of water at home", "At a special immersion site set up by the government"], answer: 1, why: "Idols must not be immersed in the Yamuna or other water bodies, except at special immersion sites such as artificial ponds. A bucket of water at home is also fine." },
      { q: "NDMC calls a colony an 'Anupam Colony' when it…", o: ["Has the tallest buildings in New Delhi", "Sends all its waste to a landfill", "Separates its waste into five types and composts wet waste", "Burns its dry leaves every evening"], answer: 2, why: "Anupam Colonies aim for zero waste: they separate dry, wet, sanitary, garden waste and e-waste, and make compost." },
      { q: "What is Delhi's Nangli Dairy plant built to make from cow dung?", o: ["Plastic bottles", "Petrol", "Cement", "Biogas and compost"], answer: 3, why: "It is built to turn about 200 tonnes of cow dung a day into biogas and compost: the same science as the biogas plant in your Smart Village." },
      { q: "In Delhi, what is the on-the-spot fine for burning garbage or leaves in the open?", o: ["₹50", "₹500", "₹5,000", "No fine: it is allowed"], answer: 2, why: "Delhi's December 2025 order set an on-the-spot fine of ₹5,000. Burning garbage pollutes the air, so waste should go in the right dustbin." },
    // 🌫️ Haze & clean air
      { q: "On India's AQI scale, an AQI of 250 is called…", o: ["Good", "Moderate", "Poor", "Severe"], answer: 2, why: "201 to 300 is 'Poor' (orange). At this level, GRAP Stage 1 can begin in Delhi-NCR." },
      { q: "A human hair is about 70 micrometres thick. About how many times thinner is the biggest PM2.5 particle?", o: ["About 3 times", "About 30 times", "About 300 times", "About 3,000 times"], answer: 1, why: "PM2.5 particles are 2.5 micrometres or smaller, and 70 ÷ 2.5 = 28, which is about 30 times (US EPA)." },
      { q: "Why does a temperature inversion make winter haze worse?", o: ["A warm layer of air sits above cold air near the ground and traps smoke like a lid", "Cold air rises quickly and carries smoke away", "The Sun heats the ground strongly, so the air mixes well", "Rain falls and washes the dust out of the air"], answer: 0, why: "In an inversion, warm air above cold air stops the smoke from rising, so it stays near the ground where we breathe." },
      { q: "Which machine sows wheat straight through the paddy straw, so the straw need not be burnt?", o: ["Happy Seeder", "Trash skimmer", "Water filter", "Wind turbine"], answer: 0, why: "The Happy Seeder sows wheat seeds through the straw, and the straw stays on top as mulch that feeds the soil." },
      { q: "The word 'smog' joins which two words?", o: ["Smoke and fog", "Smell and fog", "Snow and fog", "Smoke and gas"], answer: 0, why: "Smog = smoke + fog. India's Health Ministry advisory on air pollution also explains SMOG as 'Smoke + Fog'." }
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
  marksSource: "Official Vidya Bharati Vigyan Mela 2026-27 rules (Model Exhibition). Zone fairs normally use the same rules — confirm with Rajnish Ma'am.",
  marks: [
    { key: "tidy", name: "Neatness & order", hi: "सुघड़ता", icon: "🧹",
      tip: "Systematism & tidiness: a clean, well-arranged model. Labels straight and easy to read, no loose wires, nothing broken or dusty, everything in its place. Only 2 charts, and NO thermocol anywhere." },
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
    { id: "bins", q: "Does our model follow Chandigarh's bin system (BLACK = domestic hazardous waste, RED = sanitary waste)? And what does the YELLOW bin stand for — biomedical waste? Where do expired medicines go — black or red?" },
    { id: "ladder", q: "What does the LADDER below “Carbon Emission” represent?" },
    { id: "digger", q: "What does the DIGGER FIELD represent — a farm field being dug, a compost pit, a landfill, or something else?" },
    { id: "filter", q: "My project file says the filter layers from TOP to BOTTOM are: stones & gravel → sand → charcoal → cotton. Does my MODEL filter also have the SAND layer?" },
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
        "Jind has India's largest railway hydrogen storage and refuelling facility — about 3,000 kg of hydrogen, approved by PESO (safety organisation).",
        "Hydrogen at Jind is made by electrolysis — electricity splits water into hydrogen and oxygen (a 1 MW PEM electrolyser, about 430 kg of hydrogen a day, as per the supplier).",
        "Green hydrogen = made using renewable electricity. Grey hydrogen = made from natural gas, which releases CO₂. So the real benefit depends on the source of electricity.",
        "Before the fair, check the news once for the latest status of regular daily service."
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
      inModel: "Dirty water (pumped from the factory) → a multi-layer gravity filter → clean-looking water in a separate tank. Layers from TOP to BOTTOM (as in my project file): stones & gravel → sand → charcoal → cotton.",
      say: [
        "This is a simple filtration demonstration — a basic water-cleaning step.",
        "Water flows from the COARSEST layer to the FINEST: stones & gravel → sand → charcoal → cotton.",
        "Stones and gravel (top) hold back big particles like leaves, twigs and mud.",
        "Sand removes smaller dirt particles.",
        "Charcoal adsorbs some chemicals, colour and bad smell.",
        "Cotton (bottom) is the last barrier — it traps tiny particles and charcoal dust.",
        "The water looks cleaner, but it is NOT safe to drink yet — it may still have germs and dissolved chemicals.",
        "Quote: “Clean water is precious — treat it, reuse it, protect it.”"
      ],
      sample: "Here, the dirty water flows from the coarsest layer to the finest — / *stones and gravel*, / *sand*, / *charcoal* / and *cotton*. / See — / the water that comes out looks *cleaner*. / But clear water is *not always safe* water. / It may still have *germs* / and *dissolved* chemicals. / *Clean water is precious — / treat it, / reuse it, / protect it.*",
      how: [
        "Filtration = separating solid particles from a liquid by passing it through something with tiny gaps.",
        "Bigger gaps (stones) catch big particles; smaller gaps (cotton) catch smaller ones.",
        "Charcoal has a huge surface full of tiny holes; many impurities stick to it (adsorption)."
      ],
      deeper: [
        "To make water safe to drink you need more steps — and testing. Boiling, chlorination or UV kill germs, but they do not remove dissolved chemicals; RO purifiers can remove many of them. Factory wastewater is usually not made into drinking water — it is treated in an ETP and then reused or safely released.",
        "Filtration removes suspended (floating) particles; it usually cannot remove salt or chemicals that are dissolved.",
        "Activated charcoal is charcoal treated to have even more tiny pores.",
        "Sand is also used in real filters, but only mention it if it is in your model."
      ],
      careful: [
        "NEVER say “this makes water completely safe to drink”.",
        "If your model filter has no sand layer, skip the word “sand” when you point at it."
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
      points: ["Water should flow from the coarsest layer to the finest", "Big particles are caught first, so the fine layers don't clog", "Stones & gravel → sand → charcoal → cotton", "Cotton at the bottom also stops charcoal dust coming out"],
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
    { topic: "Eco Ganesha", level: "easy", q: "Why did you make an eco-friendly Ganesha?", points: ["Idols made of PoP (Plaster of Paris) do not dissolve easily: they stay in the water for a long time and change the water", "Chemical paints can contain harmful metals (like lead and mercury), and plastic or thermocol decorations become litter", "This can harm fish and other aquatic animals", "So I made mine with clay that breaks down easily in water, and daals, which are natural and biodegradable", "Best immersed at home in a bucket; the water goes to plants and the mud can be reused"], keywords: ["plaster", "pop", "dissolve", "clay", "aquatic", "fish", "daal", "paint"], follow: "What is Plaster of Paris made of?", asked: "Malerkotla", said: "Ganesha made of plastic and POP is harmful to aquatic animals, so I used dissolved clay and daals to make it.", better: "✅ A good reason — the judges liked it! For Delhi, say WHY PoP harms (it does not break down easily; chemical paints can contain harmful metals), and say ‘clay that breaks down easily in water’ instead of ‘dissolved clay’." },
    { topic: "Eco Ganesha", level: "medium", q: "What is Plaster of Paris made of, and why doesn't a PoP idol dissolve easily?", points: ["PoP is calcium sulphate hemihydrate, made by heating gypsum (at 373 K, about 100 °C, as in the NCERT Class 10 book)", "When mixed with water it sets back into hard gypsum", "Hard gypsum does not dissolve easily: in an MPCB lab test, a PoP idol had not broken apart even after 15 days", "In the same test, a natural clay idol broke apart in about 30 minutes"], keywords: ["gypsum", "calcium", "sulphate", "heating", "hard", "water"], follow: "Where else is Plaster of Paris used? (Plaster casts for broken bones, toys, decorations)" },
    { topic: "Eco Ganesha", level: "medium", q: "How exactly do PoP idols and chemical paints harm aquatic animals?", points: ["PoP stays in the water and slowly makes it ‘hard’, with more calcium, sulphate and dissolved solids", "Dissolved oxygen went down in the MPCB test (7.4 to 5.7 mg per litre by day 5), and fish need dissolved oxygen to breathe", "Chemical paints may contain harmful metals like lead, mercury and cadmium (CPCB)", "Plastic and thermocol decorations float, sink and break into tiny pieces that animals can swallow", "Thousands of idols in one lake or pond make the effect much bigger"], keywords: ["oxygen", "hard", "metals", "lead", "mercury", "plastic", "fish"], follow: "Which natural colours can be used instead of chemical paints?" },
    { topic: "Eco Ganesha", level: "hard", q: "Won't the daals in your Ganesha pollute the water?", points: ["Daals are natural and biodegradable: microorganisms break them down", "Daals themselves have no harmful metals or plastic, unlike some chemical paints and decorations", "But a lot of food rotting in still water uses up oxygen and smells, so even natural offerings should not be dumped in rivers", "That's why I would immerse it at home in a bucket and put the water, mud and daals into the garden soil or compost"], keywords: ["biodegradable", "natural", "oxygen", "rot", "bucket", "soil", "compost"], follow: "What happens to the daals in the garden soil?" },
    { topic: "Eco Ganesha", level: "hard", q: "If clay breaks down in water, why not just immerse your Ganesha in a river?", points: ["Even clay makes water muddy for a while and settles as mud; thousands of idols add a lot of mud", "Flowers, cloth, decorations and food offerings would also end up in the river", "CPCB guidelines: as far as possible, immerse in a bucket at home or in artificial ponds or tanks, not directly in rivers and lakes", "In Delhi, idols may be immersed in the Yamuna only at designated sites (DPCC, September 2026)", "At home, the mud can be reused for a new idol or as garden soil, so nothing is wasted"], keywords: ["muddy", "mud", "artificial", "pond", "bucket", "rules", "yamuna"], follow: "So is a clay idol completely pollution-free?" },
    { topic: "Eco Ganesha", level: "hard", q: "What do the official guidelines say about making and immersing idols?", points: ["CPCB Revised Guidelines for Idol Immersion, 12 May 2020 (the first guidelines came in 2010)", "Idols should be made of natural clay; PoP idols should be banned; no plastic or thermocol", "Natural colours (turmeric, chandan, gerua), not toxic chemical or oil paints", "Remove flowers, cloth and decorations before immersion and segregate them", "Immerse at home in a bucket or in artificial ponds, and reuse the mud"], keywords: ["cpcb", "2020", "clay", "ban", "natural", "colours", "artificial", "bucket"], follow: "Are these rules the same in every state? (No: CPCB's guidelines are advice, and states and cities make the rules. In Delhi, people who break the immersion rules may have to pay ₹50,000, and in Maharashtra the Bombay High Court reserved its judgment on PoP idols in August 2026.)" },
    { topic: "Eco Ganesha", level: "easy", q: "How should we immerse your eco-friendly Ganesha at home?", points: ["First remove the flowers, cloth and any decorations; flowers go to the green bin or compost", "Place the idol in a bucket of water and leave it until the clay breaks down", "Let the mud settle", "Pour the water on plants; use the mud in the garden or to make next year's idol"], keywords: ["bucket", "water", "settle", "plants", "garden", "mud", "flowers"], follow: "What would you do with the flowers and cloth?" },
    { topic: "Eco Ganesha", level: "medium", q: "How is your eco-friendly Ganesha linked to the Clean India Mission?", points: ["Clean India also means clean rivers, lakes and ponds, not only clean streets", "My project file (p27): never throw puja offerings into rivers; use collection bins", "It uses three of the 7Rs: Refuse PoP and plastic, Reduce waste, Reuse the clay", "It shows festivals can be celebrated in a clean, green way; PM Modi also asked for clay idols in Mann Ki Baat (June 2026)"], keywords: ["rivers", "puja", "7rs", "refuse", "reuse", "festival", "clean"], follow: "What other festival waste can we reduce?" },
    { topic: "Biogas", level: "easy", q: "Which gas is present in biogas?", points: ["Mainly methane (CH₄): about 50–70%, more than half", "Carbon dioxide (CO₂): most of the rest", "Small amounts of water vapour and hydrogen sulphide (rotten-egg smell), plus tiny traces of other gases", "It is a mixture, not pure methane; the amounts change with the waste used", "Methane is the gas that burns and gives heat for cooking"], keywords: ["methane", "carbon dioxide", "CH4", "mixture", "hydrogen sulphide", "burns"], follow: "Which of these gases actually burns?", asked: "Malerkotla", said: "methane and carbon dioxide", better: "✅ Correct! For Delhi, add: it is MAINLY methane (about 50–70%), and methane is the gas that burns." },
    { topic: "Biogas", level: "medium", q: "Which of these gases burns, and why doesn't carbon dioxide burn?", points: ["Methane burns; carbon dioxide does not", "Methane + oxygen → carbon dioxide + water + heat (CH₄ + 2O₂ → CO₂ + 2H₂O)", "CO₂ is what you get after carbon has already burnt, so there is no fuel left in it", "More CO₂ in biogas means less heat; CO₂ is even used in some fire extinguishers"], keywords: ["methane", "burns", "oxygen", "already burnt", "fire extinguisher"], follow: "Then why don't we remove the carbon dioxide?" },
    { topic: "Biogas", level: "medium", q: "Methane has no smell. Then why does a biogas plant sometimes smell like rotten eggs?", points: ["The smell comes from hydrogen sulphide (H₂S), a tiny part of biogas made while the waste breaks down", "H₂S is a poisonous gas, and with water it can form acids that slowly corrode (eat away) stoves, pipes and engines", "At high levels, H₂S can stop you smelling it, so you can't rely on your nose", "Some plants remove it, for example with iron-oxide filters", "A closed, well-sealed digester keeps the smell inside"], keywords: ["hydrogen sulphide", "H2S", "rotten egg", "corrode", "filter"], follow: "Is it safe to breathe biogas?" },
    { topic: "Biogas", level: "hard", q: "Methane is a strong greenhouse gas. Isn't it wrong to make it on purpose?", points: ["In big dumps and landfills, wet waste rots without air and makes methane anyway, and there it escapes", "A biogas plant catches that methane in a closed tank and uses it", "Burning turns methane into CO₂ and water; over 20 years methane traps about 80 times more heat than CO₂", "Biogas also replaces firewood and dung cakes", "Tanks and pipes must not leak, or the benefit is lost"], keywords: ["anyway", "capture", "burn", "carbon dioxide", "leak", "dump"], follow: "So is biogas completely pollution-free?" },
    { topic: "Biogas", level: "medium", q: "Why must the digester be closed and airtight?", points: ["The methane-making microbes (methanogens, which belong to a group of microbes called archaea) need a place with no oxygen to grow", "Bacteria first break the waste into acids; the methanogens then make methane", "With too much air, oxygen-using microbes turn the waste mostly into CO₂ and water, like compost, so little methane is made", "A closed tank collects the gas for the stove and keeps it from escaping", "It also keeps the smell in and stops methane mixing with air, which is a fire risk"], keywords: ["oxygen", "methanogens", "anaerobic", "escape", "airtight"], follow: "How is this different from making compost?" },
    { topic: "Biogas", level: "hard", q: "What is the difference between biogas, LPG and CBG?", points: ["LPG: mainly propane and butane from petroleum and natural gas (fossil fuels); it turns into a liquid under pressure", "Biogas: about 50–70% methane made from today's waste, so it is renewable; a home plant sends it through a pipe to the stove", "CBG: biogas cleaned (CO₂, H₂S and water vapour removed) to at least 90% methane, then compressed to high pressure (up to about 250 times normal air pressure)", "CBG has almost the same properties as CNG, so CNG vehicles can use it"], keywords: ["propane", "butane", "fossil", "renewable", "90%", "CNG"], follow: "Why can't biogas be filled in an LPG cylinder?" },
    { topic: "Biogas", level: "medium", q: "Is biogas dangerous? What safety rules are needed near a biogas plant?", points: ["A well-built, well-run plant is safe, but methane burns easily, like LPG", "Keep flames, matches and smoking away from the tank and pipes", "Check for leaks with soapy water (bubbles), not with a flame", "Close the gas valve after cooking", "Do not climb into a biogas tank: there may be too little oxygen and poisonous gases. Sadly, there have been accidents in India when people went inside to clean tanks. Only trained adults with safety equipment should do it"], keywords: ["burns", "flame", "soap", "leak", "valve", "tank"], follow: "Why is a smell added to LPG?" },
    { topic: "7Rs", level: "easy", q: "What is Reduce?", points: ["Reduce means using LESS, so less waste is made", "Examples: write on both sides of each page, take only as much food as you can eat, choose things with less packaging", "Saying NO to things we don't need is Refuse (the 1st R); Reduce is the 2nd R", "Using less also saves water, energy and money"], keywords: ["less", "paper", "food", "packaging"], follow: "Then what is the difference between Refuse and Reduce?", asked: "Malerkotla", said: "saying no", better: "⚠️ Careful — “saying no” is REFUSE (the 1st R). REDUCE means using LESS. Next time: “Reduce means using less — for example, writing on both sides of the paper.” Remember: Refuse = say NO, Reduce = use LESS." },
    { topic: "Plastic", level: "medium", q: "What are the other ways to use waste plastic?", points: ["First, Refuse and Reduce single-use plastic — the best waste is the waste we never create", "Reuse or repurpose it (e.g. an old bottle as a plant pot)", "Recycle clean, segregated plastic into new things", "Plastic roads: shredded plastic coats hot stones, which are then mixed with bitumen (Prof. R. Vasudevan, the Plastic Man of India)", "Eco-bricks: clean, dry plastic packed tightly into a bottle to build benches and small walls", "Waste-to-energy (Recover) — only for plastic that cannot be recycled, in controlled plants, never open burning"], keywords: ["recycle", "road", "eco-brick", "energy", "reuse", "refuse"], follow: "Which is better: recycling plastic or making energy from it?", asked: "Malerkotla", said: "waste to energy and eco-brick", better: "✅ Good — both are real ways! For Delhi, add recycling and plastic roads, and say waste-to-energy is only for plastic that cannot be recycled." },
    // 🏙️ Likely questions from Delhi judges (see the Delhi updates page)
    { topic: "Delhi", level: "easy", q: "Do you know about any Clean India work happening here in Delhi?", points: ["Delhi is clearing its three garbage mountains at Okhla, Bhalswa and Ghazipur: more than 200 lakh tonnes of old garbage dug out and cleared by early October 2026", "Since 1 April 2026 homes must separate waste into four types; NDMC's 'Anupam Colonies' separate it into five", "More than 5,200 electric buses after 13 October 2026 (the Delhi Government says it is India's biggest e-bus fleet)", "Idols must not be immersed in the Yamuna or other water bodies, except at special sites such as artificial ponds (DPCC, 9 September 2026); 81 artificial ponds for Ganesh Visarjan", "Swachhata Hi Seva 2026: about 300 places cleaned across Delhi on 1 October 2026"], keywords: ["landfill", "okhla", "segregation", "anupam", "electric", "buses", "ponds", "yamuna"], follow: "Which of these is shown in your model?" },
    { topic: "Delhi", level: "medium", q: "What is Delhi doing about its landfills, the garbage mountains?", points: ["Biomining: machines dig out the old garbage and sort it at Okhla, Bhalswa and Ghazipur", "By early October 2026, more than 200 lakh tonnes dug out and cleared, and nearly 100 acres of land freed", "The garbage is reused: fuel (RDF) for cement factories, tiles and paver blocks, soil to fill low land", "New plants to treat fresh garbage every day (foundation stones laid on 3 October 2026), so new mountains don't grow", "Targets: Okhla and Bhalswa by December 2026, Ghazipur by December 2027"], keywords: ["biomining", "okhla", "bhalswa", "ghazipur", "lakh tonnes", "acres", "fuel", "target"], follow: "How can families help so that new garbage mountains don't grow?" },
    { topic: "Delhi", level: "medium", q: "How does Delhi handle festival waste, like Ganesh and Durga idols?", points: ["DPCC order of 9 September 2026: no idol immersion in the Yamuna or other water bodies except at special sites; ₹50,000 environmental compensation", "Idol makers told to use natural clay and natural colours; Plaster of Paris idols must not go into water", "81 artificial ponds in all 13 districts for Ganesh Visarjan (September 2026); the same order covered Durga Puja", "Flowers and decorations to be taken off first; flowers to be composted and other waste sent for safe disposal; 'Visarjan Patra' collection points for broken idols and puja items", "My clay Ganesha can be immersed in a bucket at home, and the mud reused"], keywords: ["dpcc", "yamuna", "ponds", "clay", "50,000", "flowers", "compost", "bucket"], follow: "Is a clay idol completely pollution-free?" },
    { topic: "Delhi", level: "medium", q: "Your model has electric buses and an EV station. What is Delhi doing for clean transport?", points: ["More than 5,200 electric buses after 150 were added on 13 October 2026", "Small 9-metre DEVI e-buses link narrow lanes to Metro stations", "Delhi EV Policy (from 1 July 2026): only electric autos newly registered from 1 January 2027, only electric two-wheelers from 1 April 2028", "More than 30,000 charging points planned; five new public charging stations, including one at Anand Vihar, opened on 13 October 2026", "A trial of two hydrogen buses near India Gate started in May 2026"], keywords: ["electric", "buses", "5,200", "devi", "ev policy", "autos", "charging", "hydrogen"], follow: "Are electric buses completely pollution-free?" },
    { topic: "Delhi", level: "hard", q: "Delhi already has waste-to-energy plants. So why does it still have garbage mountains?", points: ["The mountains are old (legacy) garbage, piled up over many years", "Delhi makes nearly 12,000 tonnes of waste a day, but its plants could handle only about 64% of it (Delhi Economic Survey, March 2026)", "Mixed, wet garbage burns badly, so separation at home must come first", "Wet waste should go to compost or biogas, recyclables should be recycled, and only leftover dry waste should go for energy", "Bigger waste-to-energy plants (targets 2027–2028) and new fresh-waste plants are planned"], keywords: ["old", "legacy", "gap", "capacity", "segregation", "wet", "recycle", "biogas"], follow: "What should go into a waste-to-energy plant, and what should not?" },
    { topic: "Delhi", level: "hard", q: "Is the Yamuna clean? What is Delhi doing to clean it?", points: ["No, the Delhi stretch is still polluted", "A big cause is sewage from homes that flows in through drains like the Najafgarh drain", "Sewage plants could clean about 814 million gallons a day (August 2026); the target is about 1,041 million gallons a day by the end of 2027", "Okhla's plant can clean 564 million litres a day and can even make electricity from biogas", "Trash skimmers on the Najafgarh drain (April 2026), shared plants for factory water (CETPs), and keeping cow dung and idols out of the river"], keywords: ["sewage", "drains", "najafgarh", "stp", "814", "okhla", "skimmer", "polluted"], follow: "How is your filter different from a sewage treatment plant?" },
    // 🌫️ Likely haze / clean-air questions in Delhi
    { topic: "Haze", level: "easy", q: "What is the AQI, and who publishes it in India?", points: ["AQI means Air Quality Index", "It is published by the Central Pollution Control Board (CPCB)", "It gives one number from 0 to 500, one colour and one name", "Six bands: Good, Satisfactory, Moderate, Poor, Very Poor and Severe", "The worst pollutant decides the AQI; Delhi's official figure is the 24-hour average in CPCB's 4 pm bulletin"], keywords: ["air quality", "cpcb", "500", "poor", "severe"], follow: "Which AQI band is shown in dark red, and what does it mean for health?" },
    { topic: "Haze", level: "easy", q: "Why does Delhi's air get worse in October and November?", points: ["Delhi's own vehicles, road and building dust, factories and garbage fires pollute the air through the year", "After the paddy harvest, some farmers in Punjab and Haryana burn the straw (parali), and winds from the north-west can carry the smoke to Delhi", "Cool air and slow winds keep smoke and dust close to the ground; a layer of warmer air higher up, called an inversion, acts like a lid", "Delhi lies in a wide, flat plain, far from the sea, so on calm winter days the smoky air has no easy way out", "Firecrackers around Diwali (8 November 2026) add smoke for a few days"], keywords: ["vehicle", "dust", "burn", "inversion", "wind", "cracker"], follow: "Which of these causes does your model help to reduce?" },
    { topic: "Haze", level: "medium", q: "What is the difference between PM2.5 and PM10?", points: ["PM means particulate matter: tiny bits of dust, smoke and soot", "PM10 is 10 micrometres or smaller; PM2.5 is 2.5 micrometres or smaller", "A hair is about 70 micrometres thick, so PM2.5 is about 30 times thinner", "Smaller bits can go deeper into the lungs", "Smoke has many PM2.5 bits; road dust has many bigger PM10 bits", "The AQI uses the 24-hour average of each"], keywords: ["particulate", "micro", "hair", "lung", "2.5"], follow: "Which one comes more from smoke, and which more from road dust?" },
    { topic: "Haze", level: "medium", q: "What can farmers do with paddy straw instead of burning it?", points: ["In the field: a Super SMS (Super Straw Management System) chops and spreads the straw; a Happy Seeder or Surface Seeder sows wheat through it and leaves it as mulch, and a Super Seeder mixes it into the soil", "The straw returns nutrients to the soil (PAU: burning 1 tonne loses about 400 kg of organic carbon)", "Out of the field: balers press straw into bundles for compressed biogas (CBG) plants, like the one at Lehragaga in Sangrur", "Straw pellets replace some coal in power plants and brick kilns (at least 30% for brick kilns in Punjab and in Haryana outside the NCR, from 1 November 2026)", "Other uses: cattle bedding, fodder, mushroom growing, packaging", "Machines on subsidy, and custom hiring centres that rent out machines, help small farmers"], keywords: ["happy seeder", "super seeder", "mulch", "bale", "cbg", "pellet"], follow: "Why do some farmers still burn straw?" },
    { topic: "Haze", level: "hard", q: "What is GRAP, how does it work, and was it in force when you came to Delhi?", points: ["Graded Response Action Plan: the step-by-step plan for bad-air days in Delhi and the NCR (Delhi and the cities around it), run by CAQM; first notified in 2017", "Stage 1: AQI 201–300 (Poor); Stage 2: 301–400 (Very Poor); Stage 3: 401–450 (Severe); Stage 4: above 450 (Severe+). CAQM can start a stage early, using forecasts", "Each higher stage keeps the earlier actions and adds stricter ones", "Examples: strict checks on open burning and more CNG and electric buses (1); higher parking fees (2); most construction stops and older cars are restricted (3); even big public projects stop and older trucks are kept out of Delhi (4)", "CAQM revised it on 21 November 2025 and 28 September 2026; Stage 1 has 25 actions", "In 2026, stages were in force from January to 16 March (Stage 4 from 17 to 20 January), and Stage 1 again from 16 April to 4 May and from 19 to 29 May", "From 1 to 17 October 2026, Delhi's daily AQI stayed between 83 and 187, and no stage had been started as of 17 October 2026; check the news on the day"], keywords: ["graded", "caqm", "stage", "201", "poor", "450"], follow: "Which part of your model matches a GRAP Stage 1 action?" },
    { topic: "Haze", level: "hard", q: "Isn't burning straw pellets in power plants, or using CBG, also pollution?", points: ["Yes, burning any fuel that has carbon in it (coal, straw, biogas) makes CO₂. But in a power plant the pellets replace some coal, and the plant has dust filters, unlike an open field", "CBG comes from straw broken down in closed tanks, and it is used as vehicle fuel in place of fossil CNG or petrol", "The carbon in straw came from CO₂ the rice plant took in while growing, so it adds less new carbon than burning coal", "Open-field burning releases smoke at ground level over huge areas within a few weeks", "Collecting and moving straw needs diesel and money, so the system is not perfect", "Leftover slurry from CBG plants can become organic manure"], keywords: ["cleaner", "coal", "filter", "carbon dioxide", "closed", "manure"], follow: "Which is better: leaving straw in the soil, or sending it to a plant?" }
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
