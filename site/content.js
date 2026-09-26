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
    fairDate: "2026-10-02",          // expected date (2 or 3 October 2026)
    targetMinutes: 5                 // aim for the full model explanation
  },

  quotes: [
    "The best waste / is the waste we *never* create.",
    "Turn waste into *energy*, / not pollution.",
    "Clean water is *precious* — / treat it, / reuse it, / protect it."
  ],

  /* ---------------- DAY-BY-DAY PLAN (date: YYYY-MM-DD) ---------------- */
  plan: [
    { date: "2026-09-26", label: "Sat 26 Sep", task: "Model tab: read every part. Write down the questions for Rajnish Ma'am." },
    { date: "2026-09-27", label: "Sun 27 Sep", task: "Walkthrough: Bridge → Solar → Toilets → EV → Bus → Hydrogen train → Centre. Practise at the real model." },
    { date: "2026-09-28", label: "Mon 28 Sep", task: "Ask Ma'am the questions. Walkthrough: Dustbins → Plastic Man → Village → Biogas → Water → Plastic-to-Energy → Conclusion." },
    { date: "2026-09-29", label: "Tue 29 Sep", task: "Full run with the timer. Record yourself once. Viva: easy + medium questions." },
    { date: "2026-09-30", label: "Wed 30 Sep", task: "Viva: hard questions and follow-ups. Self-score out of 50." },
    { date: "2026-10-01", label: "Thu 1 Oct", task: "Two full rehearsals in front of family. Test every demo: solar bulb, EV button, plastic machine. Check hydrogen-train news once." },
    { date: "2026-10-02", label: "Fri 2 Oct", task: "Fair day (or 3 Oct). Read only your 3 quotes. Carry spare batteries/torch for the solar demo. Smile!" }
  ],

  /* ---------------- DUSTBIN COLOUR GUIDE (shown on the Five Dustbins card) ----------------
     status "verified" = checked in an official/news source; "confirm" = check with Ma'am */
  binGuide: [
    { color: "#15803d", text: "#ffffff", name: "GREEN", stream: "Wet waste", examples: "Fruit & vegetable peels, leftover food, tea leaves, flowers", goesTo: "Compost / biogas", status: "verified" },
    { color: "#1d4ed8", text: "#ffffff", name: "BLUE", stream: "Dry waste", examples: "Paper, cardboard, plastic, metal cans, glass bottles", goesTo: "Sorting centre → recycling", status: "verified" },
    { color: "#111827", text: "#ffffff", name: "BLACK", stream: "Domestic hazardous (special care) waste", examples: "Dead batteries, bulbs & tube lights, broken glass, paint, expired medicines", goesTo: "Collected by authorised agencies", status: "confirm" },
    { color: "#b91c1c", text: "#ffffff", name: "RED", stream: "Sanitary waste", examples: "Used sanitary pads, diapers (wrapped in paper)", goesTo: "Separate safe disposal", status: "confirm" },
    { color: "#facc15", text: "#1f2937", name: "YELLOW", stream: "Biomedical waste (likely)", examples: "Soiled bandages & cotton, body waste from hospitals", goesTo: "Special treatment facility", status: "confirm" }
  ],
  binSystems: [
    { name: "Chandigarh Municipal Corporation (homes)", detail: "Green = wet · Blue = dry · Black = domestic hazardous · Red = sanitary", src: "Tribune, Feb 2022" },
    { name: "Solid Waste Management Rules, 2026 (all of India)", detail: "Four streams: Wet · Dry · Sanitary · Special care. Colours are chosen by each city.", src: "PIB / DD News, 2026" },
    { name: "Bio-Medical Waste Rules, 2016 (hospitals)", detail: "Yellow = infectious & body waste · Red = contaminated plastic · White = sharps · Blue = glass & metal implants", src: "BMW Rules 2016" }
  ],

  /* ---------------- VOICE COACH ---------------- */
  // Hard words to practise saying clearly. hint = how to say it.
  pronounce: [
    { word: "Swachh Bharat Abhiyan", hint: "SWUCH  BHAA-rut  ubh-YAAN" },
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
    { word: "Padma Shri", hint: "PUD-maa  SHREE" }
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
      "One windmill, two flower pots, five coloured dustbins"
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
    parts: {
      solar:        { concept: "Solar (photovoltaic) energy — sunlight → electricity", link: "Less coal burnt for electricity → cleaner air, fewer greenhouse gases", visitor: "Two buildings have handmade solar panels; the third has a real panel that lights a bulb in sunlight." },
      citytoilets:  { concept: "Sanitation and hygiene", link: "Toilets for everyone — a main goal of Swachh Bharat Mission", visitor: "Toilets keep germs away from our water and food." },
      ev:           { concept: "Battery + electric motor — no tailpipe exhaust", link: "Cleaner air on city roads", visitor: "Press the button — the green light shows the car is charging." },
      bus:          { concept: "Electric public transport", link: "One bus carries many people → fewer vehicles, less smoke and noise", visitor: "Two electric buses at a bus stand." },
      train:        { concept: "Hydrogen fuel cell — hydrogen + oxygen → electricity + water", link: "Main onboard by-product is water vapour instead of diesel smoke", visitor: "India's first hydrogen train was flagged off on the Jind–Sonipat route in Haryana in July 2026." },
      india:        { concept: "Carbon emissions and global warming", link: "Every part of the model shows a way to reduce carbon emissions", visitor: "India at the centre — protecting our country from pollution and global warming." },
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
      wte:          { concept: "Waste-to-energy — heat → steam → turbine → generator", link: "Only for waste that cannot be recycled, in special plants with pollution control — never open burning", visitor: "The bulb glows to show energy recovered from waste." }
    }
  },

  /* ---------------- MARKING SCHEME (50 marks) ---------------- */
  marks: [
    { key: "model", name: "Model", icon: "🏗️",
      tip: "Know every part: what it is, why it is there, how it works, and how it links to Clean India / waste management." },
    { key: "viva", name: "Viva", icon: "❓",
      tip: "Answer in your own words. If you don't know, say so honestly, then say what you DO know." },
    { key: "presentation", name: "Presentation", icon: "🧭",
      tip: "Go around the model in one logical path: City → Transport → Centre → Dustbins → Village → Water → Energy → Conclusion." },
    { key: "voice", name: "Voice", icon: "🔊",
      tip: "Clear volume, not too fast. Pause before important lines. Stress the key words." },
    { key: "expression", name: "Expression", icon: "🙂",
      tip: "Judge → model → judge. Point with an open hand, then look back at the judge. Smile naturally." }
  ],

  /* ---------------- THINGS TO CONFIRM WITH RAJNISH MA'AM ----------------
     Until these are confirmed, the website shows them as “Ask Ma'am”. */
  confirmList: [
    { id: "bins", q: "Does our model follow Chandigarh's bin system (BLACK = domestic hazardous waste, RED = sanitary waste)? And what does the YELLOW bin stand for — biomedical waste?" },
    { id: "ladder", q: "What does the LADDER below “Carbon Emission” represent?" },
    { id: "digger", q: "What does the DIGGER FIELD represent — a farm field being dug, a compost pit, a landfill, or something else?" },
    { id: "filter", q: "What is the exact ORDER of the filter layers from TOP to BOTTOM (charcoal, stones, cotton — any sand)?" },
    { id: "machine", q: "Plastic-to-Energy: what does each of the TWO separate machines represent? Which one is the furnace/processing part and which is the generator + bulb?" },
    { id: "villagetoilet", q: "Is the village toilet connected to the biogas plant in our model, or is it a separate toilet?" },
    { id: "windmill", q: "Does the windmill actually turn / produce electricity in the model, or is it only a display?" },
    { id: "evbutton", q: "EV station: is the green light only a charging indicator, or does it also show the car battery getting charged?" }
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
        "Everything around this map — solar, EVs, hydrogen train, biogas — is meant to reduce carbon emissions."
      ],
      sample: "In the centre is our *India*. / Below it, I have written *Carbon Emission*. / When we burn coal, petrol, diesel or garbage, / carbon dioxide goes into the air / and our Earth becomes *warmer*. / My whole model shows ways to *reduce* it.",
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
        "Until confirmed, just point to it when you speak about carbon emission, or skip it."
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
      sample: "This *windmill* shows *wind energy*. / Wind turns the blades, / and a generator inside makes electricity.",
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
        "BLACK = Domestic hazardous waste — batteries, bulbs/tube lights, broken glass, paint, expired medicines (Chandigarh system — confirm with Ma'am).",
        "RED = Sanitary waste — used sanitary pads and diapers, wrapped in paper (Chandigarh system — confirm with Ma'am).",
        "YELLOW = most likely biomedical waste from hospitals and clinics, like soiled bandages (confirm with Ma'am).",
        "If everything is mixed, recyclable things get dirty and wet waste cannot be composted. Mixed waste ends up in landfills."
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
        "VERIFIED (India): The Solid Waste Management Rules, 2026 (from 1 April 2026) make FOUR-stream segregation compulsory: Wet, Dry, Sanitary and Special care waste. The official announcement names the streams, not the colours — cities choose colours, and many use green, blue, red and black.",
        "VERIFIED (Hospitals): Bio-Medical Waste Management Rules, 2016 use FOUR different colours: YELLOW (body parts, soiled dressings, expired medicines, chemical/lab waste), RED (contaminated plastic like tubes, bottles, IV sets, gloves), WHITE translucent (needles and sharps), BLUE (glassware and metal implants).",
        "Watch out: RED means sanitary waste in Chandigarh homes, but contaminated plastic in hospitals. That is why the same colour can mean different things in different systems.",
        "Special care waste under the 2026 rules = what Chandigarh calls domestic hazardous waste (medicines, bulbs, batteries, paint containers)."
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
        "Plastic roads have been built in many states — reported as over 1 lakh km."
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
        "The Government's GOBARdhan scheme (under Swachh Bharat Mission Grameen) supports turning cattle dung and organic waste into biogas.",
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
        "ETP step 3 — Chemical & final cleaning: chemicals remove harmful substances; filtering and disinfection."
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
      id: "filter", zone: "front", icon: "💧", name: "Water Treatment / Filtration", status: "ask",
      inModel: "Dirty water (pumped from the factory) → filter container with layers of charcoal, stones and cotton → clean-looking water in a separate tank.",
      say: [
        "This is a simple filtration demonstration — a basic water-cleaning step.",
        "Stones hold back bigger dirt particles.",
        "Charcoal traps some colour, smell and some impurities.",
        "Cotton traps very fine particles and holds the layers in place.",
        "The water looks cleaner, but it is NOT safe to drink yet — it may still have germs and dissolved chemicals.",
        "Quote: “Clean water is precious — treat it, reuse it, protect it.”"
      ],
      sample: "Here, the dirty water passes through / *charcoal*, *stones* and *cotton*. / See — / the water that comes out looks *cleaner*. / But clear water is *not always safe* water. / It may still have *germs* / and *dissolved* chemicals. / *Clean water is precious — / treat it, / reuse it, / protect it.*",
      how: [
        "Filtration = separating solid particles from a liquid by passing it through something with tiny gaps.",
        "Bigger gaps (stones) catch big particles; smaller gaps (cotton) catch smaller ones.",
        "Charcoal has a huge surface full of tiny holes; many impurities stick to it (adsorption)."
      ],
      deeper: [
        "To make water safe to drink you need more steps: boiling, chlorination, UV treatment, or RO purifiers — and testing.",
        "Filtration removes suspended (floating) particles; it usually cannot remove salt or chemicals that are dissolved.",
        "Activated charcoal is charcoal treated to have even more tiny pores.",
        "Sand is also used in real filters, but only mention it if it is in your model."
      ],
      careful: [
        "NEVER say “this makes water completely safe to drink”.",
        "Confirm the exact order of layers with Ma'am before explaining which layer is on top."
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
      cover: ["Definition", "Collect → Separate → Transport → Recycle/Treat → Safely Dispose", "What happens if we don't manage waste"],
      cues: ["🐢 Do NOT rush the 5-step sequence. Count the steps on your fingers if it feels natural.", "👀 Look at the judge for the ‘if not managed’ part."],
      sample: "Waste management means / *collecting*, / *separating*, / *transporting*, / *recycling or treating*, / and *safely disposing* of waste."
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
      cover: ["What carbon emission is", "Where it comes from", "Global warming", "Windmill = wind energy", "Everything in the model reduces emissions", "(Ladder — only after Ma'am confirms)"],
      cues: ["🚶 Move to the centre and stand still.", "⏸ Pause before ‘My whole model shows ways to reduce it’."]
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
      points: ["Recyclable dry waste becomes dirty and wet — cannot be recycled easily", "Wet waste cannot be composted cleanly", "Mixed waste goes to landfill → smell, methane, leachate", "Workers find it hard and unsafe to sort"],
      keywords: ["recycle", "dirty", "landfill", "compost"], follow: "What is a landfill?" },
    { topic: "Segregation", level: "hard", q: "India's new waste rules talk about four types of segregation. What are they?",
      points: ["Solid Waste Management Rules, 2026 (from 1 April 2026)", "Wet waste", "Dry waste", "Sanitary waste", "Special care waste (medicines, bulbs, paint containers)"],
      keywords: ["wet", "dry", "sanitary", "special"], follow: "Where would you throw an old medicine strip or a fused bulb?" },
    { topic: "Your dustbins", level: "medium", q: "Tell me about the black, red and yellow bins in your model.",
      points: ["Black = domestic hazardous waste (batteries, bulbs, paint, medicines)", "Red = sanitary waste (pads, diapers)", "Yellow = biomedical waste (confirm with Ma'am)", "This follows Chandigarh's bin system — colours can differ between systems"],
      keywords: ["hazardous", "sanitary", "biomedical", "battery"], follow: "Why must medical waste be kept separate?" },
    { topic: "Your dustbins", level: "hard", q: "Does a red bin mean the same thing everywhere?",
      points: ["No — colours depend on the system", "In Chandigarh homes, red = sanitary waste", "In hospitals (Bio-Medical Waste Rules 2016), red = contaminated plastic like tubes and gloves", "So always read the label on the bin"],
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
    { topic: "Biogas", level: "medium", q: "What is biogas mainly made of?",
      points: ["Mostly methane (about 50–70%)", "Carbon dioxide", "Small amounts of other gases"],
      keywords: ["methane", "carbon dioxide"], follow: "Which of these gases burns?" },
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
      points: ["No — not guaranteed safe", "May still have germs (bacteria, viruses)", "May have dissolved chemicals", "Needs boiling / chlorination / UV / RO and testing"],
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
      keywords: ["sensor", "full", "sort", "internet"], follow: "What does IoT stand for?" }
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
    { text: "Tribune — Chandigarh: after green, blue bins, now black and red (2022)", url: "https://www.tribuneindia.com/news/chandigarh/chandigarh-after-green-blue-waste-bins-now-black-and-red-372864/amp" },
    { text: "DD News — New waste rules from April 1: four-way segregation", url: "https://ddnews.gov.in/en/new-waste-rules-from-april-1-four-way-segregation-mandatory-strict-penalties-for-violations/" },
    { text: "AIIMS — Bio-medical waste colour coding (BMW Rules 2016)", url: "https://www.aiims.edu/images/pdf/Departments_Centers/BiomedicalWaste/Biomedical%20waste%20docs%20nurses.pdf" },
    { text: "Swachh Bharat Mission (Grameen) — About", url: "https://swachhbharatmission.ddws.gov.in/about_sbm" },
    { text: "PIB — SBM Grameen factsheet", url: "https://www.pib.gov.in/FactsheetDetails.aspx?Id=148579&reg=48&lang=2" },
    { text: "Rajagopalan Vasudevan (Wikipedia)", url: "https://en.wikipedia.org/wiki/Rajagopalan_Vasudevan" },
    { text: "Scroll.in — Padma Shri winner uses plastic waste to build roads", url: "https://scroll.in/article/866510/plastic-is-poor-mans-friend-padma-shri-winner-rajagopalan-vasudevan-uses-waste-to-build-roads" }
  ]
};
