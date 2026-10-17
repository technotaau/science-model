# Clean India Model Coach

A practice website for **Avni Choudhary** (Class 6, Sharda Sarvhitkari Senior Secondary School, Chandigarh) for the science-fair project **Clean India Mission and Waste Management**.

Built by the **TechnoTaau Team**.

## What's on the website

**Finding your way:** the 🏠 **Home** page is the menu: a "Today" card with the day's task, then big tiles in four groups. Every page starts with **← Home**. On a phone there is also a bar at the bottom: 🏠 Home · 🎤 Stage · 🗺️ Model · ❓ Viva · 🤖 Ask. The 🌙/☀️ button (top right) switches between soft light and soft dark colours, and the phone remembers the choice.

| Group | Page | What it does |
|---|---|---|
| 🚀 Get ready for Delhi | 🎤 Stage talk | The speech part by part, rehearsal mode, cue card |
| | 🏙️ Delhi updates | Fact-checked Clean India news from Delhi and India, in English and Hindi |
| | 🌫️ Haze & clean air | An estimated live AQI for Delhi and Chandigarh, the AQI colour scale, why haze comes, GRAP, health tips for the trip, and how the model helps clean air |
| | 🧳 Trip checklist | What to pack and the official fair rules |
| 📚 Learn my project | 🗺️ My model | Tap the numbers on the model photo: what each part is, what to say, how it works, what **not** to say, where to point |
| | 🧭 Walkthrough | The presentation in order, with a timer and 🎬 full rehearsal |
| | 📘 Project report | Printable report, the written synopsis (2 copies for the judges) and the stall QR card |
| | 💭 Thoughts · विचार | Lines in English and Hindi to open, link, recover and close |
| 🎯 Practise and play | ❓ Viva questions | One question at a time; 🎧 Judge mode asks aloud and listens; 🏅 the questions real judges asked |
| | 🤖 Ask Eco-Dost | Ask anything about the file and the model; quick checks, ⭐ points and badges |
| | 🎮 Games | Bin Sorter, 7R Match, Swachh Champion Quiz, Model Memory |
| | 🎙️ Voice coach | Listen & repeat, record & check, pronunciation, mirror, warm-up |
| | 📊 Score myself | Mark a practice on the 4 official Vigyan Mela heads (out of 40) |
| 👩‍🏫 For Rajnish Ma'am | 📝 Ask Ma'am | Questions to confirm with the teacher |

Progress, scores and answers are saved **only in the browser on that device**.

### Colour key (used everywhere)

| Colour | Meaning |
|---|---|
| ✅ Green | Confirmed — say this |
| ❓ Amber | Ask Ma'am first |
| ⚠️ Red | Careful — don't say |
| 👉 Blue | Point / demonstrate |
| 🧠 Purple | Extra viva knowledge |

### Voice features — which browser?

Speaking (the website reads aloud) works in almost every browser. **Listening** (speaking your answers) needs **Google Chrome or Microsoft Edge** on a laptop or Android phone, with an internet connection. On iPhone, typing always works.

## How to change the content

All the words are in **`site/content.js`**. You don't need to touch the other files.

1. Open `site/content.js` on GitHub and click the ✏️ pencil icon.
2. Change the text inside the `"double quotes"`. Keep the commas at the ends of lines.
3. In sample lines, `*word*` shows a word to **stress** and ` / ` shows a **pause**.
4. When Ma'am confirms something, write her answer into that part and change `status: "ask"` to `status: "confirmed"`.
5. Click **Commit changes**. The website updates by itself in about 1–2 minutes.

Examples:

```js
// add a new viva question
{ topic: "Biogas", level: "easy", q: "Name one use of biogas.",
  points: ["Cooking", "Heating", "Electricity"],
  keywords: ["cook", "heat", "electric"], follow: "Which gas in biogas burns?" },
```

To change the photo, replace `site/model.jpg`. If the numbered dots end up in the wrong places, change the `hotspots` positions near the top of the model-map section in `site/app.js` (they are percentages from the left and from the top).

## Publishing (GitHub Pages)

The workflow in `.github/workflows/pages.yml` publishes the `site/` folder every time you push.

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

The website will then be at `https://technotaau.github.io/science-model/`.

## Try it on your computer

Open `site/index.html` in a browser, or run:

```bash
cd site && python3 -m http.server 8000
```

## Ask Eco-Dost 🤖

- **On the website** (`#ecodost`): an offline chat buddy. Its answers are the fact-checked cards in `site/ecodost-data.js`; `site/ecodost.js` finds the best card for a question (it copes with spelling mistakes, short forms and Hinglish), and runs the quick checks, quiz, ⭐ points, levels and badges.
- **Eco-Dost Live** (real AI, opens on claude.ai while signed in): built from `live/eco-dost-live.template.html` with `node live/build.js live/project-file.md`, which adds a knowledge pack made from `site/content.js` and the project-file transcription. Rebuild and republish it whenever the content changes.

### Measuring Eco-Dost

`tests/ecodost/questions.json` holds 150 realistic student/judge questions (written separately from the cards) and `labels.json` the reviewer-chosen correct card for each. Run `node tests/ecodost/tune.js tests/ecodost/labels.json --report` after adding or changing cards: it shows right answers, "did you mean" hits, wrong answers and off-topic slips. At release: 122 right + 5 offered as a choice out of 137 on-topic questions, 2 hard-wrong, 0 off-topic answered.
