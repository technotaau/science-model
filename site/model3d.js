/* 🧊 3D model: a simple 3D version of Avni's real Clean India model (based on her photo and video).
   Spin it with a finger or mouse, pinch/scroll to zoom, tap a part to learn about it.
   three.js is loaded only when this page is opened. */
(function () {
  "use strict";
  const $ = s => document.querySelector(s);
  let started = false, esc;
  const LIBS = ["https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js",
    "https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"];
  function load(src) { return new Promise((ok, no) => { const s = document.createElement("script"); s.src = src; s.onload = ok; s.onerror = no; document.head.appendChild(s); }); }

  // Parts shown in 3D. comp = the matching page in 🗺️ My model (if there is one).
  const PARTS = {
    city: { name: "🏙️ Smart City buildings with solar panels", text: "Buildings with solar panels on the roofs: sunlight becomes electricity without smoke.", comp: "solar" },
    h2: { name: "⛽ Hydrogen station", text: "Fills hydrogen for clean vehicles. A fuel cell joins hydrogen with oxygen to make electricity; the main by-products are water vapour and heat." },
    train: { name: "🚆 Hydrogen train", text: "Like India's first hydrogen train on the Jind–Sonipat route in Haryana (July 2026): mainly water vapour comes out, not diesel smoke.", comp: "train" },
    bus: { name: "🚌 Electric buses", text: "One electric bus carries many people with no tailpipe smoke.", comp: "bus" },
    wte: { name: "💡 Waste to energy plant", text: "Conveyor belt → combustion chamber → turbine → electricity storage. Only for waste that cannot be recycled, in plants with pollution control — never open burning.", comp: "wte" },
    map: { name: "🇮🇳 Reducing carbon emission", text: "India's journey to cut pollution: clean energy, clean transport and less waste.", comp: "india" },
    rain: { name: "🌧️ Rain garden", text: "A garden that soaks up rainwater, so less dirty water runs off into drains." },
    mountain: { name: "🏔️ Mountain and river", text: "Clean rivers start in the mountains. Keeping waste out of rivers keeps the water clean for everyone." },
    windmill: { name: "🌬️ Windmill", text: "Uses moving air (wind) to make electricity without burning anything.", comp: "windmill" },
    filter: { name: "💧 Water filtration", text: "Dirty water flows through stones & gravel → charcoal → cotton and comes out clearer. Clearer is not the same as safe to drink.", comp: "filter" },
    hut: { name: "🛖 Village hut", text: "A smart village uses local resources and keeps its surroundings clean.", comp: "hut" },
    biogas: { name: "🔥 Biogas plant", text: "Cow dung and kitchen waste rot in a closed tank without air and make biogas (mainly methane) for cooking, plus manure.", comp: "biogas" },
    bins: { name: "🗑️ Dustbins for segregation", text: "Separate bins for different waste: wet waste can become compost or biogas, dry waste can be recycled.", comp: "bins" },
    factory: { name: "🏭 Industry", text: "Factories must treat their dirty water before it reaches rivers.", comp: "factory" },
    wwt: { name: "🌊 Waste water treatment", text: "Dirty water is cleaned before it is reused or sent to a river.", comp: "factory" },
    swachh: { name: "🧹 Swachh Bharat", text: "Swachh Bharat Mission was launched on 2 October 2014: toilets for all and clean surroundings." },
    boards: { name: "📋 Phase 1 and Phase 2 boards", text: "The goals of the Clean India Mission: toilets and an open-defecation-free India, then keeping it clean and managing all solid waste." }
  };

  function start() {
    if (started) return; started = true;
    const box = $("#m3d"), info = $("#m3dInfo");
    info.innerHTML = '<p class="small muted">Loading the 3D model…</p>';
    LIBS.reduce((p, u) => p.then(() => load(u)), Promise.resolve()).then(build).catch(() => {
      info.innerHTML = '<p>Could not load the 3D model. Check the internet and open this page again.</p>'; started = false;
    });
  }

  function textTex(T, text, bg, fg, w, h, size) {
    const c = document.createElement("canvas"); c.width = w; c.height = h; const g = c.getContext("2d");
    g.fillStyle = bg; g.fillRect(0, 0, w, h); g.fillStyle = fg; g.textAlign = "center"; g.textBaseline = "middle";
    const lines = text.split("\n"); g.font = "bold " + size + "px Nunito, sans-serif";
    lines.forEach((l, i) => g.fillText(l, w / 2, h / 2 + (i - (lines.length - 1) / 2) * size * 1.25));
    const t = new T.CanvasTexture(c); t.anisotropy = 4; return t;
  }

  function build() {
    const T = window.THREE, box = $("#m3d"), info = $("#m3dInfo");
    const W = () => box.clientWidth, H = () => Math.max(320, Math.min(560, Math.round(box.clientWidth * 0.75)));
    const renderer = new T.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1)); renderer.setSize(W(), H());
    box.innerHTML = ""; box.appendChild(renderer.domElement);
    const scene = new T.Scene();
    const dark = document.documentElement.dataset.theme === "dark";
    scene.background = new T.Color(dark ? 0x202725 : 0xf8f2e6);
    const cam = new T.PerspectiveCamera(45, W() / H(), 0.1, 200); cam.position.set(0, 8, 14.5);
    const ctl = new T.OrbitControls(cam, renderer.domElement);
    ctl.target.set(0, 1.1, 0); ctl.enableDamping = true; ctl.maxPolarAngle = Math.PI / 2.15; ctl.minDistance = 5; ctl.maxDistance = 24; ctl.update();
    scene.add(new T.HemisphereLight(0xffffff, 0x8a7a5a, 0.85));
    const sun = new T.DirectionalLight(0xffffff, 0.7); sun.position.set(6, 12, 8); scene.add(sun);

    const pick = [];
    const M = c => new T.MeshLambertMaterial({ color: c });
    function add(geo, color, x, y, z, part, opts) {
      const m = new T.Mesh(geo, Array.isArray(color) ? color : (color && color.isMaterial ? color : M(color)));
      m.position.set(x, y, z); if (opts && opts.ry) m.rotation.y = opts.ry; if (opts && opts.rx) m.rotation.x = opts.rx; if (opts && opts.rz) m.rotation.z = opts.rz;
      if (part) { m.userData.part = part; pick.push(m); }
      scene.add(m); return m;
    }
    const B = (w, h, d) => new T.BoxGeometry(w, h, d), C = (r1, r2, h, s) => new T.CylinderGeometry(r1, r2, h, s || 20);

    // table top + green base
    add(B(13.5, 0.3, 8), 0xc79a5b, 0, -0.35, 0);
    add(B(12, 0.25, 6.6), 0x3f8f3f, 0, -0.08, 0);
    // back boards
    const brd = (txt, bg, fg, x, ry) => add(new T.PlaneGeometry(3.9, 3.2), new T.MeshBasicMaterial({ map: textTex(T, txt, bg, fg, 512, 420, 40), side: T.DoubleSide }), x, 1.55, -3.35, "boards", { ry });
    brd("Clean India Mission\nand\nWaste Management\n\nGo Green", "#1d1d1d", "#9ee7d0", -4.4, 0.35);
    brd("Clean India Mission\nPhase-1\nMajor Goals\n\nशौचालय · Swachh Bharat", "#f6c9d3", "#1d6b35", 0, 0);
    brd("Reduce · Reuse · Recycle\n\nSEGREGATION\nDry waste · Wet waste\nCompost · Disposal", "#1d1d1d", "#ffd66b", 4.4, -0.35);
    ["Reduce", "Reuse", "Repair", "Redesign", "Recover"].forEach((w, i) => {
      add(new T.PlaneGeometry(1.25, 0.7), new T.MeshBasicMaterial({ map: textTex(T, w, "#ffffff", "#c2185b", 256, 140, 40), transparent: true }), 2.6 + i * 0.95 - 1.2, 3.6, -3.3, "boards");
    });

    // city buildings with solar panels (back-left)
    [[-4.9, 0x7fb3e0, 1.4], [-3.9, 0xe7d36b, 1.0], [-3.0, 0xe0a0c0, 1.2]].forEach(([x, c, h]) => {
      add(B(0.8, h, 0.8), c, x, h / 2, -2.0, "city");
      add(B(0.7, 0.04, 0.5), 0x1b3a7a, x, h + 0.12, -2.0, "city", { rx: -0.45 });
    });
    // hydrogen station
    add(B(0.9, 0.6, 0.6), 0xf2f2f2, -5.0, 0.3, -0.5, "h2");
    add(B(0.5, 0.35, 0.02), new T.MeshBasicMaterial({ map: textTex(T, "H₂", "#1e88e5", "#ffffff", 128, 90, 60) }), -5.0, 0.95, -0.19, "h2");
    add(C(0.06, 0.06, 0.7), 0x888888, -5.0, 0.65, -0.5);
    // buses
    add(B(1.1, 0.4, 0.4), 0x2e7d32, -3.6, 0.2, -0.5, "bus"); add(B(1.1, 0.4, 0.4), 0x1565c0, -2.3, 0.2, -0.5, "bus");
    // railway track + hydrogen train (moves)
    add(B(6.2, 0.04, 0.5), 0x5d4037, -3.0, 0.02, 1.1);
    const train = new T.Group(); scene.add(train);
    [0, 0.95, 1.9].forEach((dx, i) => { const car = new T.Mesh(B(0.85, 0.42, 0.4), M(i ? 0xffffff : 0x1e88e5)); car.position.set(dx, 0.27, 0); car.userData.part = "train"; pick.push(car); train.add(car); });
    train.position.set(-5.6, 0, 1.1);
    // waste to energy plant (front-left)
    add(B(1.6, 0.12, 0.35), 0x777777, -4.6, 0.25, 2.5, "wte");
    add(B(0.8, 0.8, 0.7), 0xf5f5f5, -3.4, 0.4, 2.5, "wte");
    const turbine = add(C(0.32, 0.32, 0.25, 24), 0xbdbdbd, -2.4, 0.5, 2.5, "wte", { rx: Math.PI / 2 });
    add(B(0.8, 0.7, 0.6), 0x212121, -1.4, 0.35, 2.5, "wte");
    add(new T.SphereGeometry(0.12, 16, 12), new T.MeshBasicMaterial({ color: 0xffee58 }), -1.4, 0.82, 2.5, "wte");
    add(B(3.8, 0.35, 0.02), new T.MeshBasicMaterial({ map: textTex(T, "WASTE TO ENERGY", "#d32f2f", "#ffffff", 512, 48, 34) }), -3.0, 0.15, 2.95, "wte");
    // India map / carbon sign and rain garden (centre-left)
    add(B(0.9, 0.9, 0.06), 0xff8f00, -1.3, 0.9, -1.6, "map"); add(C(0.04, 0.04, 0.5), 0x555555, -1.3, 0.25, -1.6);
    add(B(1.6, 0.06, 1.0), 0x66bb6a, -1.1, 0.03, -0.2, "rain");
    for (let i = 0; i < 6; i++) add(new T.ConeGeometry(0.1, 0.3, 8), 0x2e7d32, -1.7 + i * 0.24, 0.2, -0.2 + (i % 2 ? 0.25 : -0.25), "rain");
    // windmill (blades turn)
    add(C(0.05, 0.07, 1.8), 0xeeeeee, -2.0, 0.9, -2.6, "windmill");
    const blades = new T.Group(); blades.position.set(-2.0, 1.8, -2.5); scene.add(blades);
    for (let i = 0; i < 3; i++) { const b = new T.Mesh(B(0.08, 0.7, 0.02), M(0xffffff)); b.position.y = 0.35; const g = new T.Group(); g.rotation.z = i * 2.094; g.add(b); b.userData.part = "windmill"; pick.push(b); blades.add(g); }
    // cotton mountain + river
    add(new T.ConeGeometry(0.9, 2.2, 18), 0xf3f6fb, 0.6, 1.0, 0.2, "mountain");
    add(B(0.45, 0.03, 2.4), 0x64b5f6, 0.8, 0.02, 1.7, "mountain");
    // water filtration column: stones & gravel (top) → charcoal → cotton (bottom)
    add(B(0.7, 0.3, 0.7), 0xf5f5f5, 2.0, 0.15, 2.4, "filter");
    add(B(0.7, 0.3, 0.7), 0x212121, 2.0, 0.45, 2.4, "filter");
    add(B(0.7, 0.3, 0.7), 0x9e9e9e, 2.0, 0.75, 2.4, "filter");
    add(B(0.76, 1.0, 0.76), new T.MeshLambertMaterial({ color: 0xbbdefb, transparent: true, opacity: 0.25 }), 2.0, 0.5, 2.4, "filter");
    add(B(2.0, 0.35, 0.02), new T.MeshBasicMaterial({ map: textTex(T, "Water Filtration", "#212121", "#ffffff", 400, 70, 34) }), 2.0, 1.3, 2.05, "filter");
    // hut, cows, biogas dome
    add(B(0.9, 0.55, 0.8), 0x8d6e63, 3.2, 0.28, 0.1, "hut"); add(new T.ConeGeometry(0.75, 0.55, 4), 0xc8a165, 3.2, 0.82, 0.1, "hut", { ry: Math.PI / 4 });
    [[2.4, 0.9], [2.7, 1.2]].forEach(([x, z]) => add(B(0.35, 0.2, 0.15), 0xffffff, x, 0.15, z, "hut"));
    add(new T.SphereGeometry(0.4, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2), 0x8d8d8d, 2.2, 0.0, -0.8, "biogas");
    // Swachh Bharat sign
    add(B(1.1, 0.6, 0.06), new T.MeshBasicMaterial({ map: textTex(T, "Swachh\nBharat", "#ffffff", "#c2185b", 220, 120, 36) }), 2.4, 0.75, -1.9, "swachh");
    // dustbins
    [0x2e7d32, 0x1565c0, 0x212121, 0xc62828, 0xf9a825].forEach((c, i) => add(C(0.16, 0.13, 0.42), c, 3.4 + i * 0.4, 0.21, -1.9, "bins"));
    // industry + chimney, waste water treatment
    add(B(1.1, 1.1, 0.9), 0x263238, 4.9, 0.55, 0.6, "factory");
    for (let i = 0; i < 3; i++) add(B(0.22, 0.22, 0.02), 0x42a5f5, 4.6 + i * 0.3, 0.75, 1.06, "factory");
    add(C(0.1, 0.12, 0.9), 0x37474f, 5.25, 1.5, 0.4, "factory");
    add(C(0.45, 0.45, 0.3), 0x90caf9, 4.9, 0.15, 2.3, "wwt");
    add(B(1.9, 0.35, 0.02), new T.MeshBasicMaterial({ map: textTex(T, "WASTE WATER TREATMENT", "#d32f2f", "#ffffff", 512, 64, 30) }), 4.9, 0.55, 2.82, "wwt");

    // tap / click a part
    const ray = new T.Raycaster(), v = new T.Vector2();
    let downAt = null;
    renderer.domElement.addEventListener("pointerdown", e => { downAt = [e.clientX, e.clientY]; });
    renderer.domElement.addEventListener("pointerup", e => {
      if (!downAt || Math.hypot(e.clientX - downAt[0], e.clientY - downAt[1]) > 6) return;
      const r = renderer.domElement.getBoundingClientRect();
      v.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
      ray.setFromCamera(v, cam);
      const hit = ray.intersectObjects(pick, false)[0];
      if (hit) show(hit.object.userData.part, hit.point);
    });
    function show(id, point) {
      const p = PARTS[id]; if (!p) return;
      info.innerHTML = '<div class="m3d-card"><b>' + esc(p.name) + "</b><p>" + esc(p.text) + "</p>" + (p.comp ? '<a class="btn small" href="#model/' + p.comp + '">Learn this part →</a>' : "") + "</div>";
      if (point) { ctl.target.lerp(point, 0.5); }
    }
    $("#m3dParts").innerHTML = Object.keys(PARTS).map(k => '<button class="chip" data-p="' + k + '">' + esc(PARTS[k].name) + "</button>").join("");
    document.querySelectorAll("#m3dParts .chip").forEach(b => b.onclick = () => {
      const m = pick.find(x => x.userData.part === b.dataset.p); const wp = new T.Vector3(); if (m) m.getWorldPosition(wp);
      show(b.dataset.p, m ? wp : null);
    });
    info.innerHTML = '<p class="small">👆 Drag to spin · pinch or scroll to zoom · tap a part to learn about it.</p>';
    $("#m3dReset").onclick = () => { cam.position.set(0, 8, 14.5); ctl.target.set(0, 1.1, 0); ctl.update(); };

    const still = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    let dir = 1;
    (function loop() {
      if (!document.body.contains(renderer.domElement)) return;
      requestAnimationFrame(loop);
      if (!$("#tab-3d") || $("#tab-3d").hidden) return;
      if (!still) {
        blades.rotation.z += 0.03; turbine.rotation.y += 0.08;
        train.position.x += 0.01 * dir; if (train.position.x > -2.2 || train.position.x < -5.6) dir *= -1;
      }
      ctl.update(); renderer.render(scene, cam);
    })();
    window.addEventListener("resize", () => { renderer.setSize(W(), H()); cam.aspect = W() / H(); cam.updateProjectionMatrix(); });
  }

  window.Model3D = { init(o) { esc = o.esc; }, start };
})();
