const h = [
  "/chi-fan/_app/immutable/assets/Button-8ca56c60.css",
  "/chi-fan/_app/immutable/assets/_page-f8c4be9b.css",
  "/chi-fan/_app/immutable/assets/_page-9270ebd8.css",
  "/chi-fan/_app/immutable/assets/_page-0474a705.css",
  "/chi-fan/_app/immutable/assets/_layout-1b75bc95.css",
  "/chi-fan/_app/immutable/assets/_page-c6131e37.css",
  "/chi-fan/_app/immutable/chunks/4-8365757d.js",
  "/chi-fan/_app/immutable/chunks/paths-b4419565.js",
  "/chi-fan/_app/immutable/modules/pages/_layout.ts-9cbb603b.js",
  "/chi-fan/_app/immutable/chunks/stores-eae1ee91.js",
  "/chi-fan/_app/immutable/modules/pages/about/_page.ts-08c78b37.js",
  "/chi-fan/_app/immutable/chunks/3-4afc747e.js",
  "/chi-fan/_app/immutable/components/pages/_page.svelte-59ab13b5.js",
  "/chi-fan/_app/immutable/chunks/1-25da7940.js",
  "/chi-fan/_app/immutable/components/error.svelte-19874d42.js",
  "/chi-fan/_app/immutable/components/pages/about/_page.svelte-36882516.js",
  "/chi-fan/_app/immutable/chunks/Button-56f11305.js",
  "/chi-fan/_app/immutable/chunks/2-8b763159.js",
  "/chi-fan/_app/immutable/chunks/5-f59a8473.js",
  "/chi-fan/_app/immutable/chunks/singletons-98408e58.js",
  "/chi-fan/_app/immutable/chunks/0-dcf9bd1f.js",
  "/chi-fan/_app/immutable/chunks/_layout-da46b06b.js",
  "/chi-fan/_app/immutable/chunks/index-0d1e6808.js",
  "/chi-fan/_app/immutable/chunks/6-9d8cac0e.js",
  "/chi-fan/_app/immutable/chunks/_page-3afc52e2.js",
  "/chi-fan/_app/immutable/chunks/index-ab16b1b5.js",
  "/chi-fan/_app/immutable/start-05e7bd24.js",
  "/chi-fan/_app/immutable/components/pages/doors/_page.svelte-e0f1cd59.js",
  "/chi-fan/_app/immutable/components/pages/sugar-cane-water/_page.svelte-d37be9e0.js",
  "/chi-fan/_app/immutable/components/pages/_layout.svelte-f00c78b5.js",
  "/chi-fan/_app/immutable/components/pages/sugar-cane-water/intro/_page.svelte-734b9ebf.js"
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
  "/chi-fan/robots.txt"
], p = "1675766478316", t = self, g = `cache${p}`, s = h.concat(
  // Exclude this github pages related file, breaks the service worker
  o.filter((a) => a !== "/.nojekyll")
), m = new Set(s);
t.addEventListener("install", (a) => {
  a.waitUntil(
    caches.open(g).then(async (e) => {
      try {
        await e.addAll(s);
      } catch {
        console.warn("cache.addAll failed, attempting to add files individually");
        for await (const c of s)
          try {
            await e.add(c);
          } catch {
            console.warn("This file could not be added:", c);
          }
      }
    }).then(() => {
      t.skipWaiting();
    })
  );
});
t.addEventListener("activate", (a) => {
  a.waitUntil(
    caches.keys().then(async (e) => {
      for (const n of e)
        n !== g && await caches.delete(n);
      t.clients.claim();
    })
  );
});
async function u(a) {
  const e = await caches.open(`offline${p}`);
  try {
    const n = await fetch(a);
    return e.put(a, n.clone()), n;
  } catch (n) {
    const c = await e.match(a);
    if (c)
      return c;
    throw n;
  }
}
t.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET" || a.request.headers.has("range"))
    return;
  const e = new URL(a.request.url), n = e.protocol.startsWith("http"), c = e.hostname === self.location.hostname && e.port !== self.location.port, i = e.host === self.location.host && m.has(e.pathname), r = a.request.cache === "only-if-cached" && !i;
  n && !c && !r && a.respondWith(
    (async () => i && await caches.match(a.request) || u(a.request))()
  );
});
