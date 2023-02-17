const h = [
  "/chi-fan/_app/immutable/assets/_page-f8c4be9b.css",
  "/chi-fan/_app/immutable/assets/Button-8ca56c60.css",
  "/chi-fan/_app/immutable/assets/_page-0474a705.css",
  "/chi-fan/_app/immutable/assets/_page-9270ebd8.css",
  "/chi-fan/_app/immutable/assets/_layout-1b75bc95.css",
  "/chi-fan/_app/immutable/assets/_page-543ee0e7.css",
  "/chi-fan/_app/immutable/components/pages/about/_page.svelte-7fcf4298.js",
  "/chi-fan/_app/immutable/chunks/3-bcd510a7.js",
  "/chi-fan/_app/immutable/chunks/5-98a34d71.js",
  "/chi-fan/_app/immutable/modules/pages/about/_page.ts-08c78b37.js",
  "/chi-fan/_app/immutable/chunks/stores-fc6bd72c.js",
  "/chi-fan/_app/immutable/chunks/2-fa5fe84d.js",
  "/chi-fan/_app/immutable/chunks/4-7a39f6f0.js",
  "/chi-fan/_app/immutable/chunks/6-850d230b.js",
  "/chi-fan/_app/immutable/chunks/0-0815e176.js",
  "/chi-fan/_app/immutable/components/error.svelte-85d67817.js",
  "/chi-fan/_app/immutable/chunks/index-8aaa977a.js",
  "/chi-fan/_app/immutable/chunks/_page-3afc52e2.js",
  "/chi-fan/_app/immutable/chunks/paths-b4419565.js",
  "/chi-fan/_app/immutable/components/pages/_page.svelte-3b884f29.js",
  "/chi-fan/_app/immutable/chunks/singletons-ee5d0f7d.js",
  "/chi-fan/_app/immutable/chunks/_layout-da46b06b.js",
  "/chi-fan/_app/immutable/chunks/1-4200a692.js",
  "/chi-fan/_app/immutable/modules/pages/_layout.ts-9cbb603b.js",
  "/chi-fan/_app/immutable/chunks/Button-815f03c7.js",
  "/chi-fan/_app/immutable/components/pages/_layout.svelte-5a14b05e.js",
  "/chi-fan/_app/immutable/chunks/index-39773980.js",
  "/chi-fan/_app/immutable/components/pages/doors/_page.svelte-5aa9d312.js",
  "/chi-fan/_app/immutable/components/pages/sugar-cane-water/_page.svelte-70ec9767.js",
  "/chi-fan/_app/immutable/start-de9375a2.js",
  "/chi-fan/_app/immutable/components/pages/sugar-cane-water/intro/_page.svelte-22785f81.js"
], o = [
  "/chi-fan/.nojekyll",
  "/chi-fan/favicon.png",
  "/chi-fan/icon/icon-192x192.png",
  "/chi-fan/icon/icon-256x256.png",
  "/chi-fan/icon/icon-384x384.png",
  "/chi-fan/icon/icon-512x512.png",
  "/chi-fan/img/door-left.jpg",
  "/chi-fan/img/door-right.jpg",
  "/chi-fan/img/home-banner.png",
  "/chi-fan/img/home-bg.jpg",
  "/chi-fan/img/speaker-off.png",
  "/chi-fan/img/speaker-on.png",
  "/chi-fan/img/sugar-cane-water/almond-bowl.png",
  "/chi-fan/img/sugar-cane-water/almond-flake.png",
  "/chi-fan/img/sugar-cane-water/board-bg.jpg",
  "/chi-fan/img/sugar-cane-water/board.jpg",
  "/chi-fan/img/sugar-cane-water/cane-cutting-equipment.jpg",
  "/chi-fan/img/sugar-cane-water/cane-piece.png",
  "/chi-fan/img/sugar-cane-water/cane-split-1.png",
  "/chi-fan/img/sugar-cane-water/cane-split-2.png",
  "/chi-fan/img/sugar-cane-water/cane.png",
  "/chi-fan/img/sugar-cane-water/cane3.jpg",
  "/chi-fan/img/sugar-cane-water/canes-background.png",
  "/chi-fan/img/sugar-cane-water/carrot-chopped.png",
  "/chi-fan/img/sugar-cane-water/carrot.png",
  "/chi-fan/img/sugar-cane-water/cleaver2.png",
  "/chi-fan/img/sugar-cane-water/clippers-closed.png",
  "/chi-fan/img/sugar-cane-water/clippers.png",
  "/chi-fan/img/sugar-cane-water/cooking-in-pot.jpg",
  "/chi-fan/img/sugar-cane-water/cut-cane.png",
  "/chi-fan/img/sugar-cane-water/cutting-cane-1.png",
  "/chi-fan/img/sugar-cane-water/cutting-cane-2.png",
  "/chi-fan/img/sugar-cane-water/cutting-cane-3.png",
  "/chi-fan/img/sugar-cane-water/cutting-cane-4.png",
  "/chi-fan/img/sugar-cane-water/cutting-cane.jpg",
  "/chi-fan/img/sugar-cane-water/figs.png",
  "/chi-fan/img/sugar-cane-water/grandpa-cane.jpg",
  "/chi-fan/img/sugar-cane-water/interior.jpg",
  "/chi-fan/img/sugar-cane-water/pot.jpg",
  "/chi-fan/img/sugar-cane-water/rock-sugar.png",
  "/chi-fan/img/sugar-cane-water/save-for-later.jpg",
  "/chi-fan/img/sugar-cane-water/scrub.png",
  "/chi-fan/img/sugar-cane-water/tub.png",
  "/chi-fan/img/sugar-cane-water/washing-cane-clean.png",
  "/chi-fan/img/sugar-cane-water/washing-cane-dirty.png",
  "/chi-fan/manifest.json",
  "/chi-fan/robots.txt",
  "/chi-fan/sound/sugar-cane.mp3"
], p = "1676592336804", i = self, g = `cache${p}`, t = h.concat(
  // Exclude this github pages related file, breaks the service worker
  o.filter((a) => a !== "/.nojekyll")
), f = new Set(t);
i.addEventListener("install", (a) => {
  a.waitUntil(
    caches.open(g).then(async (n) => {
      try {
        await n.addAll(t);
      } catch {
        console.warn("cache.addAll failed, attempting to add files individually");
        for await (const c of t)
          try {
            await n.add(c);
          } catch {
            console.warn("This file could not be added:", c);
          }
      }
    }).then(() => {
      i.skipWaiting();
    })
  );
});
i.addEventListener("activate", (a) => {
  a.waitUntil(
    caches.keys().then(async (n) => {
      for (const e of n)
        e !== g && await caches.delete(e);
      i.clients.claim();
    })
  );
});
async function m(a) {
  const n = await caches.open(`offline${p}`);
  try {
    const e = await fetch(a);
    return n.put(a, e.clone()), e;
  } catch (e) {
    const c = await n.match(a);
    if (c)
      return c;
    throw e;
  }
}
i.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET" || a.request.headers.has("range"))
    return;
  const n = new URL(a.request.url), e = n.protocol.startsWith("http"), c = n.hostname === self.location.hostname && n.port !== self.location.port, s = n.host === self.location.host && f.has(n.pathname), r = a.request.cache === "only-if-cached" && !s;
  e && !c && !r && a.respondWith(
    (async () => s && await caches.match(a.request) || m(a.request))()
  );
});
