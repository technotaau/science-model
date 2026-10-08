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
    fairDate: "2026-10-04",          // stage presentation day
    targetMinutes: 5                 // aim for the full model explanation
  },

  quotes: [
    "The best waste / is the waste we *never* create.",
    "Turn waste into *energy*, / not pollution.",
    "Clean water is *precious* — / treat it, / reuse it, / protect it."
  ],

  /* ---------------- DAY-BY-DAY PLAN (date: YYYY-MM-DD) ---------------- */
  plan: [
    { date: "2026-10-03", label: "Sat 3 Oct", task: "Follow 🎤 Stage → Today's practice plan. Learn the KEY POINTS of each part, rehearse on your feet, record once, then rest." },
    { date: "2026-10-04", label: "Sun 4 Oct", task: "Stage day! 1-minute warm-up, read only your headings and quotes, breathe, smile, and enjoy it." }
  ],

  /* ---------------- DUSTBIN COLOUR GUIDE (shown on the Five Dustbins card) ----------------
     status "verified" = checked in an official/news source; "confirm" = check with Ma'am */
  binGuide: [
    { color: "#15803d", text: "#ffffff", name: "GREEN", stream: "Wet waste", examples: "Fruit & vegetable peels, leftover food, tea leaves, flowers", goesTo: "Compost / biogas", status: "verified" },
    { color: "#1d4ed8", text: "#ffffff", name: "BLUE", stream: "Dry waste", examples: "Paper, cardboard, plastic, metal cans, glass bottles", goesTo: "Sorting centre → recycling", status: "verified" },
    { color: "#111827", text: "#ffffff", name: "BLACK", stream: "Domestic hazardous (special care) waste", examples: "Dead batteries, bulbs & tube lights, broken glass, paint containers", goesTo: "Collected by authorised agencies", status: "confirm" },
    { color: "#b91c1c", text: "#ffffff", name: "RED", stream: "Sanitary waste", examples: "Used sanitary pads & diapers (wrapped in paper); in Chandigarh also used masks, gloves & bandages", goesTo: "Separate safe disposal", status: "confirm" },
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
      wte:          { concept: "Waste-to-energy — heat → steam → turbine → generator", link: "Only for waste that cannot be recycled, in special plants with pollution control — never open burning", visitor: "The bulb glows to show energy recovered from waste." }
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
      hi: "स्वच्छ भारत की शुरुआत एक स्वच्छ सोच से होती है, ज़िम्मेदार काम से वह आगे बढ़ता है, और कचरा-मुक्त कल में वह चमकता है।", hiRoman: "Swachh Bharat ki shuruaat ek swachh soch se hoti hai, zimmedaar kaam se vah aage badhta hai, aur kachra-mukt kal mein vah chamakta hai." },
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
      hi: "साफ़ पानी अनमोल है — इसे साफ़ करें, दोबारा इस्तेमाल करें, और बचाएँ।", hiRoman: "Saaf paani anmol hai — ise saaf karein, dobaara istemaal karein, aur bachaayein." },
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
      hi: "प्लास्टिक मैन ने बेकार प्लास्टिक का नया उपयोग खोजा; 7R हमें सात और रास्ते दिखाते हैं।", hiRoman: "Plastic Man ne bekaar plastic ka naya upyog khoja; 7R (saat R) hamein saat aur raaste dikhaate hain.",
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
      hi: "विज्ञान हमें कई हल देता है, पर असली बदलाव तब आता है, जब हम सब मिलकर आगे आएँ।", hiRoman: "Vigyaan hamein kai hal deta hai, par asli badlaav tab aata hai, jab hum sab milkar aage aayein.",
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
      hi: "एक शिक्षक ने दिखाया कि प्लास्टिक कचरा सड़कें बनाने में काम आ सकता है। सोचिए, हम सब मिलकर क्या-क्या कर सकते हैं!", hiRoman: "Ek shikshak ne dikhaaya ki plastic kachra sadken banaane mein kaam aa sakta hai. Sochiye, hum sab milkar kya-kya kar sakte hain!",
      hiMeaning: "One teacher showed that plastic waste can be useful in building roads. Just think how much we can all do together!",
      note: "Use it to introduce the 'Plastic Man of India', Prof. Rajagopalan Vasudevan, a chemistry professor from Madurai. Shredded plastic is melted onto hot stones and then mixed with bitumen, so plastic is only a small part of the road mix. The road is not made only of plastic." },
    { id: "e09", kind: "original", topic: "plastic", use: ["bridge"],
      en: "Plastic that can't be recycled can still be recovered as energy, but refusing it is even better.",
      hi: "जो प्लास्टिक रीसाइकिल न हो सके, उससे ऊर्जा ली जा सकती है, पर उसे पहले ही 'ना' कहना और भी अच्छा है।", hiRoman: "Jo plastic recycle na ho sake, usse oorja li ja sakti hai, par use pehle hi 'na' kehna aur bhi achchha hai.",
      hiMeaning: "Energy can be obtained from plastic that cannot be recycled, but saying 'no' to it in the first place is even better.",
      note: "A link into the plastic-to-energy machine. It keeps the 7Rs order: Recover is the LAST R and needs special controlled plants with pollution control. Do not call it 'burning plastic'." },
    { id: "e10", kind: "original", topic: "water", use: ["bridge"],
      en: "Layer by layer, water becomes clearer; step by step, our world becomes better.",
      hi: "परत-दर-परत पानी निखरे, कदम-दर-कदम दुनिया सँवरे।", hiRoman: "Parat-dar-parat paani nikhre, kadam-dar-kadam duniya sanvare.",
      hiMeaning: "Layer by layer the water becomes clearer; step by step the world becomes better.",
      note: "Point down the filter layer by layer: stones first, then sand (only if your model has it), then charcoal, then cotton. Say 'clearer', not 'safe to drink', because filtered water still needs boiling or purifying before drinking." },
    { id: "e11", kind: "original", topic: "water", use: ["closing", "anytime"],
      en: "Every drop we save today can quench someone's thirst tomorrow.",
      hi: "आज बचाई गई हर बूँद कल किसी की प्यास बुझा सकती है।", hiRoman: "Aaj bachaai gayi har boond kal kisi ki pyaas bujha sakti hai.",
      hiMeaning: "Every drop saved today can quench someone's thirst tomorrow.",
      note: "Use it after the water filter or as a closing thought. Simple tips to add: turn off the tap while brushing, and reuse RO waste water for mopping or flushing." },
    { id: "e12", kind: "original", topic: "energy", use: ["bridge"],
      en: "The sun shares its light with everyone; let's use it to power our homes.",
      hi: "सूरज सबको रोशनी देता है, आओ उसी से अपने घर रोशन करें।", hiRoman: "Sooraj sabko roshni deta hai, aao usi se apne ghar roshan karen.",
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
      hi: "धुआँ घटाएँ, आसमान नीला पाएँ।", hiRoman: "Dhuaan ghataayen, aasmaan neela paayen.",
      hiMeaning: "Let us reduce smoke and get a blue sky.",
      note: "Use it at the centre India map and carbon emission part, or when showing the electric buses and EVs. It is short and easy to remember." },
    { id: "e16", kind: "original", topic: "nature", use: ["anytime"],
      en: "Plant one tree, and you plant shade, fresh air and a home for birds.",
      hi: "एक पेड़ लगाओ, पाओ छाया, ताज़ी हवा और पंछियों का बसेरा।", hiRoman: "Ek ped lagaao, paao chhaaya, taazi hawa aur panchhiyon ka basera.",
      hiMeaning: "Plant one tree, and get shade, fresh air and a home for birds.",
      note: "Count the three gifts on your fingers: shade, fresh air, home for birds. In sunlight, leaves take in carbon dioxide and give out oxygen." },
    { id: "e17", kind: "original", topic: "nature", use: ["closing"],
      en: "Nature gives us so much for free; the least we can give back is a clean Earth.",
      hi: "प्रकृति हमें इतना कुछ मुफ़्त में देती है; बदले में हम कम से कम एक साफ़ धरती तो लौटा ही सकते हैं।", hiRoman: "Prakriti hamen itna kuchh muft mein deti hai; badle mein hum kam se kam ek saaf dharti to lauta hi sakte hain.",
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
      hi: "किसी और का इंतज़ार क्यों करें? सफ़ाई की पहल हम ख़ुद करें।", hiRoman: "Kisi aur ka intezaar kyon karen? Safaai ki pahal hum khud karen.",
      hiMeaning: "Why wait for someone else? Let us take the first step in cleaning ourselves.",
      note: "An inspiring call to action for the ending. Stress the word 'be'." },
    { id: "e24", kind: "original", topic: "7rs", use: ["bridge"],
      en: "Seven Rs, one goal: less waste and a better tomorrow.",
      hi: "सात आर, एक लक्ष्य: कम कचरा, बेहतर कल।", hiRoman: "Saat R, ek lakshya: kam kachra, behtar kal.",
      hiMeaning: "Seven Rs, one goal: less waste, a better tomorrow.",
      note: "Say it just before listing Refuse, Reduce, Reuse, Repair, Repurpose, Recycle, Recover. Hold up seven fingers, then one." },
    { id: "e25", kind: "original", topic: "7rs", use: ["anytime"],
      en: "Repair before you replace; repurpose before you throw away.",
      hi: "बदलने से पहले मरम्मत करें, फेंकने से पहले नया उपयोग सोचें।", hiRoman: "Badalne se pehle marammat karen, phenkne se pehle naya upyog sochen.",
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
      hi: "शहर हो या गाँव, स्वच्छता की हो हर जगह छाँव।", hiRoman: "Shehar ho ya gaanv, swachhta ki ho har jagah chhaanv.",
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
      hiMeaning: "Peels, leaves and leftover food — by becoming compost, they nourish the soil.",
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
      hi: "शौचालय भी बैठक (ड्रॉइंग-रूम) जितना साफ़ होना चाहिए।", hiRoman: "Shauchaalay bhi baithak (drawing-room) jitna saaf hona chaahiye.",
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
    date: "2026-10-04",
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
    { id: "bins", q: "Does our model follow Chandigarh's bin system (BLACK = domestic hazardous waste, RED = sanitary waste)? And what does the YELLOW bin stand for — biomedical waste? Where do expired medicines go — black or red?" },
    { id: "ladder", q: "What does the LADDER below “Carbon Emission” represent?" },
    { id: "digger", q: "What does the DIGGER FIELD represent — a farm field being dug, a compost pit, a landfill, or something else?" },
    { id: "filter", q: "My project file says the filter layers from TOP to BOTTOM are: stones & gravel → sand → charcoal → cotton. Does my MODEL filter also have the SAND layer?" },
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
