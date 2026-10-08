// Measure the Eco-Dost matcher against reviewer labels, and grid-search its confidence settings.
// Usage: node tests/ecodost/tune.js tests/ecodost/labels.json [--report]
global.window = {};
require(require('path').join(__dirname, '../../site/ecodost-data.js'));
require(require('path').join(__dirname, '../../site/ecodost.js'));
const E = window.EcoDost, cards = window.ECODOST.cards;
const idx = E.buildIndex(cards);
const tests = require('./questions.json');
const labels = require(require('path').resolve(process.argv[2]));
const lab = new Map(labels.map(l => [l.i, l]));
const found = tests.map(t => E.search(t.question, idx));

function evaluate(T, detail) {
  const m = { correct: 0, maybeHit: 0, wrong: 0, offAnswered: 0, offOk: 0, miss: 0, gapAnswered: 0, n: 0 };
  const rows = [];
  tests.forEach((t, i) => {
    const L = lab.get(i); if (!L) return;
    m.n++;
    const d = E.decide(found[i], T);
    const ok = new Set([L.best].concat(L.alsoOk || []));
    let res;
    if (L.best === 'OFF-TOPIC') { res = d.kind === 'answer' ? 'offAnswered' : 'offOk'; }
    else if (L.best === 'GAP') { res = d.kind === 'answer' ? 'gapAnswered' : 'offOk'; }
    else if (d.kind === 'answer') res = ok.has(d.r.card.id) ? 'correct' : 'wrong';
    else if (d.kind === 'maybe') res = d.options.some(o => ok.has(o.card.id)) ? 'maybeHit' : 'miss';
    else res = 'miss';
    m[res]++;
    if (detail) rows.push({ i, q: t.question, label: L.best, got: d.kind === 'answer' ? d.r.card.id : d.kind, res, top: found[i].results.slice(0, 3).map(r => r.card.id + ':' + r.score.toFixed(1) + '/' + r.cover.toFixed(2)), known: +found[i].known.toFixed(2) });
  });
  m.score = m.correct + 0.5 * m.maybeHit - 2 * m.wrong - 2 * m.offAnswered - 1 * m.gapAnswered;
  return detail ? { m, rows } : m;
}

if (process.argv.includes('--report')) {
  const { m, rows } = evaluate(E.TUNE, true);
  console.log('CURRENT', JSON.stringify(E.TUNE), JSON.stringify(m));
  rows.filter(r => !['correct', 'offOk', 'maybeHit'].includes(r.res)).forEach(r => console.log(r.res.padEnd(12), '|', r.q, '| label', r.label, '| got', r.got, '| known', r.known, '|', r.top.join(' ')));
} else {
  let best = null;
  for (const knownMin of [0.34, 0.4, 0.5, 0.6, 0.67])
    for (const sure of [3, 4, 5, 6, 8, 10])
      for (const coverSure of [0.25, 0.3, 0.34, 0.4, 0.5])
        for (const maybe of [1.5, 2, 3])
          for (const coverMaybe of [0.15, 0.2, 0.25]) {
            const T = { knownMin, sure, coverSure, maybe, coverMaybe, related: 0.75 };
            const m = evaluate(T);
            if (!best || m.score > best.m.score) best = { T, m };
          }
  console.log('CURRENT', JSON.stringify(evaluate(E.TUNE)));
  console.log('BEST   ', JSON.stringify(best.T), JSON.stringify(best.m));
}
