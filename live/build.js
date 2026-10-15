// Builds eco-dost-live.html: the live (Claude-powered) Eco-Dost page, with a knowledge pack
// made from the website content (site/content.js) and the project-file transcription.
// Usage: node live/build.js <project-file.md>
const fs = require("fs"), path = require("path");
global.window = {};
require(path.join(__dirname, "../site/content.js"));
const S = window.SITE;
const file = fs.readFileSync(process.argv[2], "utf8");
const L = [];
L.push("=== 1. AVNI'S HANDWRITTEN PROJECT FILE (transcribed; pages 9-28; pages 1-8 were not provided) ===");
L.push(file.replace(/^# .*\n/, ""));
L.push("\n=== 2. CORRECTIONS TO HER FILE (fact-checked Oct 2026 — these WIN over the file) ===");
S.stage.fileFixes.forEach(f => L.push(`- [${f.page}] File says: "${f.wrote}" → CORRECT: ${f.say} (why: ${f.why})`));
L.push("\n=== 3. VERIFIED FACTS ===");
S.stage.fileGood.forEach(x => L.push("- " + x));
L.push("\n=== 4. HER MODEL (one green wooden base, all on one level) ===");
S.components.forEach(c => {
  L.push(`* ${c.name} [${c.zone}${c.status === "ask" ? ", some details still to confirm with Rajnish Ma'am" : ""}]: ${c.inModel}`);
  (c.say || []).slice(0, 4).forEach(x => L.push("   - " + x));
  (c.careful || []).forEach(x => L.push("   ! careful: " + x));
});
L.push("Still to confirm with Rajnish Ma'am: " + S.confirmList.map(a => a.q).join(" | "));
L.push("\n=== 5. DUSTBIN COLOURS ===");
S.binGuide.forEach(b => L.push(`- ${b.name}: ${b.stream} — ${b.examples} (${b.status === "verified" ? "verified" : "confirm with Ma'am"})`));
S.binSystems.forEach(b => L.push(`- ${b.name}: ${b.detail}`));
L.push("\n=== 6. HER STAGE SPEECH OUTLINE (4 Oct 2026) ===");
S.stage.sections.forEach(s => L.push(`- ${s.title}: ${s.cover.join("; ")}`));
L.push("\n=== 7. HER FAVOURITE QUOTES ===");
S.thoughts.filter(t => t.kind === "avni").forEach(t => L.push(`- ${t.en} / ${t.hi}`));
L.push("\n=== 8. REAL JUDGE QUESTIONS AT MALERKOTLA (she won 1st prize) — what she said, and how to answer better in Delhi ===");
S.viva.filter(v => v.asked).forEach(v => L.push(`- Q: ${v.q} | She said: "${v.said}" | Coach: ${v.better} | Ideal points: ${v.points.join("; ")}`));
L.push("\n=== 9. NEXT LEVEL AND OFFICIAL RULES ===");
const ev = S.student.nextEvent;
if (ev) L.push(`- Next: ${ev.name}, ${ev.place}, ${ev.start} to ${ev.end}. Same model.`);
L.push("- Official marking (40): " + S.marks.map(m => `${m.name} (${m.hi}) 10 — ${m.tip}`).join(" | "));
L.push("- " + (S.marksSource || ""));
(S.trip || []).filter(t => /official/i.test(t.group)).forEach(t => L.push("- Rule: " + t.item));
if (S.delhi && S.delhi.items) {
  L.push(`\n=== 10. DELHI AND INDIA UPDATES (fact-checked ${S.delhi.checked}; she may mention ONE or TWO, linked to a model part) ===`);
  L.push("- Opening line: " + S.delhi.opener);
  S.delhi.items.forEach(d => L.push(`- [${d.area}${d.top ? ", top line" : ""}; links to: ${d.comp}] SAY: ${d.say} | LINK: ${d.link} | MENTOR NOTE: ${d.mentor}`));
}
const pack = L.join("\n");
const tpl = fs.readFileSync(path.join(__dirname, "eco-dost-live.template.html"), "utf8");
if (!tpl.includes('/*PACK*/""')) throw new Error("PACK placeholder missing");
const out = tpl.replace('/*PACK*/""', JSON.stringify(pack).replace(/<\/script/gi, "<\\/script"));
fs.writeFileSync(path.join(__dirname, "eco-dost-live.html"), out);
console.log("built eco-dost-live.html —", pack.length, "chars of knowledge,", out.length, "bytes");
