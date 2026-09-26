# Clean India Model Coach

A practice website for **Avni Choudhary** (Class 6, Sharda Sarvhitkari Senior Secondary School, Chandigarh) for the science-fair project **Clean India Mission and Waste Management**.

Built by the **TechnoTaau Team**.

## What's on the website

| Tab | What it does |
|---|---|
| 🏠 Home | Countdown to the fair, the 50-mark scheme, three quotes, day-by-day plan, progress |
| 🗺️ Model | Tap the numbers on the model photo. Each part shows what it is, what to say, how it works, deeper viva knowledge, what **not** to say, and where to point |
| 🧭 Walkthrough | The presentation in order, with stage directions, a timer and a sample line you can peek at after trying |
| ❓ Viva | One question at a time (easy / medium / hard). Type or speak your answer first, then check the key points and the judge's follow-up |
| 🎙️ Voice | Record yourself, listen back, and check your speaking speed (words per minute) |
| 📊 Score | Mark yourself out of 50 after each full practice |
| 📝 Ask Ma'am | Questions to confirm with Rajnish Ma'am, and the sources used to check the facts |

Progress, scores and answers are saved **only in the browser on that device**.

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
