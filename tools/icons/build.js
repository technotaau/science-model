/* Builds site/icons.js: the Lucide icon sprite (ISC licence) + the emoji → icon map.
   Usage:  npm install lucide-static@0.460.0   (anywhere)  then
           node tools/icons/build.js <path-to-node_modules/lucide-static/icons>
   Map format: "emoji": "lucide-icon-name|colour-class"  ("" = just remove the emoji). */
const fs = require("fs"), path = require("path");
const dir = process.argv[2]; if (!dir) { console.error("Give the lucide-static/icons folder"); process.exit(1); }
const map = JSON.parse(fs.readFileSync(path.join(__dirname, "emoji-map.json"), "utf8"));
const extra = ["arrow-left", "chevron-right", "sun", "moon", "house", "x", "check"];
const names = [...new Set(Object.values(map).filter(Boolean).map(v => v.split("|")[0]).concat(extra))].sort();
let sym = "";
for (const n of names) {
  const s = fs.readFileSync(path.join(dir, n + ".svg"), "utf8").replace(/<!--[\s\S]*?-->/g, "");
  const inner = s.slice(s.indexOf(">", s.indexOf("<svg")) + 1, s.lastIndexOf("</svg>")).replace(/\s+/g, " ").replace(/> </g, "><").trim();
  sym += '<symbol id="i-' + n + '" viewBox="0 0 24 24">' + inner + "</symbol>";
}
const tpl = fs.readFileSync(path.join(__dirname, "icons.template.js"), "utf8");
fs.writeFileSync(path.join(__dirname, "../../site/icons.js"), tpl.replace("__SPRITE__", JSON.stringify(sym)).replace("__MAP__", JSON.stringify(map)));
console.log("site/icons.js:", names.length, "icons");
