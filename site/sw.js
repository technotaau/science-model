/* Offline support: keeps a copy of the website on the phone so it works on the train without internet.
   Network first (so updates arrive when online), saved copy when offline or very slow. */
const CACHE = "coach-v20";
const CORE = ["./", "index.html", "styles.css", "content.js", "videos.js", "newfile.js", "ecodost-data.js", "ecodost.js", "voice.js", "games.js", "fun.js",
  "icons.js", "model3d.js", "avni-recording.js", "avni-ai.js", "mockstage.js", "hindi.js", "extras.js", "practice.js", "qr-parts.js", "coach2.js", "app.js", "media/model.webp", "qr.svg", "media/real-model.webp", "media/model-tour.jpg"];
const EXTRA = ["https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js",
  "https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE).then(() => Promise.all(EXTRA.map(u => c.add(u).catch(() => {}))))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET" || r.headers.has("range") || /\.mp4($|\?)/.test(r.url)) return; // video streams from the internet
  const own = r.url.startsWith(self.location.origin);
  const ok = own || /cdnjs\.cloudflare\.com|cdn\.jsdelivr\.net|fonts\.(googleapis|gstatic)\.com/.test(r.url);
  if (!ok) return;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    // our own files: always ask the server for the newest version (skip the browser's short-term cache)
    const net = fetch(own ? new Request(r, { cache: "no-cache" }) : r).then(res => { if (res && (res.ok || res.type === "opaque")) cache.put(r, res.clone()); return res; });
    const saved = await cache.match(r, { ignoreSearch: r.mode === "navigate" });
    if (!saved) return net.catch(() => caches.match("index.html"));
    if (!own) return saved; // libraries and fonts never change
    // newest version when online; the saved copy only if there is no internet or it takes very long
    return Promise.race([net.catch(() => saved), new Promise(res => setTimeout(() => res(saved), 10000))]);
  })());
});
