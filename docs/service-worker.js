const r = [
  "/chi-fan/_app/immutable/assets/_page-2a5d9d09.css",
  "/chi-fan/_app/immutable/assets/_layout-a568b42d.css",
  "/chi-fan/_app/immutable/assets/_page-549026eb.css",
  "/chi-fan/_app/immutable/assets/_page-389d1576.css",
  "/chi-fan/_app/immutable/assets/Button-8ca56c60.css",
  "/chi-fan/_app/immutable/assets/_page-137dc8ad.css",
  "/chi-fan/_app/immutable/chunks/2-6f9a4484.js",
  "/chi-fan/_app/immutable/chunks/stores-fac256f9.js",
  "/chi-fan/_app/immutable/chunks/paths-b4419565.js",
  "/chi-fan/_app/immutable/chunks/_layout-da46b06b.js",
  "/chi-fan/_app/immutable/modules/pages/_layout.ts-9cbb603b.js",
  "/chi-fan/_app/immutable/chunks/6-75304648.js",
  "/chi-fan/_app/immutable/chunks/singletons-9422537f.js",
  "/chi-fan/_app/immutable/chunks/4-cd21df70.js",
  "/chi-fan/_app/immutable/chunks/1-3225573d.js",
  "/chi-fan/_app/immutable/chunks/3-d8cf868e.js",
  "/chi-fan/_app/immutable/chunks/_page-3afc52e2.js",
  "/chi-fan/_app/immutable/chunks/index-4899a8ee.js",
  "/chi-fan/_app/immutable/modules/pages/about/_page.ts-08c78b37.js",
  "/chi-fan/_app/immutable/chunks/5-f4f44456.js",
  "/chi-fan/_app/immutable/components/pages/about/_page.svelte-a08d7139.js",
  "/chi-fan/_app/immutable/components/error.svelte-b0a49901.js",
  "/chi-fan/_app/immutable/chunks/Button-73296b33.js",
  "/chi-fan/_app/immutable/chunks/0-b3486c62.js",
  "/chi-fan/_app/immutable/components/pages/doors/_page.svelte-426aeae7.js",
  "/chi-fan/_app/immutable/components/pages/_page.svelte-ec153285.js",
  "/chi-fan/_app/immutable/chunks/index-16264e69.js",
  "/chi-fan/_app/immutable/components/pages/_layout.svelte-600f225f.js",
  "/chi-fan/_app/immutable/start-eb1665e7.js",
  "/chi-fan/_app/immutable/components/pages/sugar-cane-water/_page.svelte-c8293424.js",
  "/chi-fan/_app/immutable/components/pages/sugar-cane-water/intro/_page.svelte-7492bec5.js"
], m = [
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
  "/chi-fan/img/recipe2/interior.jpg",
  "/chi-fan/img/recipe3/interior.jpg",
  "/chi-fan/img/sugar-cane-water/board.jpg",
  "/chi-fan/img/sugar-cane-water/cane.png",
  "/chi-fan/img/sugar-cane-water/cane3.jpg",
  "/chi-fan/img/sugar-cane-water/canes-background.png",
  "/chi-fan/img/sugar-cane-water/carrot.jpg",
  "/chi-fan/img/sugar-cane-water/cleaver2.png",
  "/chi-fan/img/sugar-cane-water/clippers.jpg",
  "/chi-fan/img/sugar-cane-water/cooking-in-pot.jpg",
  "/chi-fan/img/sugar-cane-water/cut-cane.png",
  "/chi-fan/img/sugar-cane-water/cutting-cane-together.jpg",
  "/chi-fan/img/sugar-cane-water/cutting-cane.jpg",
  "/chi-fan/img/sugar-cane-water/grandpa-cane.jpg",
  "/chi-fan/img/sugar-cane-water/interior.jpg",
  "/chi-fan/img/sugar-cane-water/pot.jpg",
  "/chi-fan/img/sugar-cane-water/save-for-later.jpg",
  "/chi-fan/img/sugar-cane-water/scrub.jpg",
  "/chi-fan/img/sugar-cane-water/tub.jpg",
  "/chi-fan/manifest.json",
  "/chi-fan/robots.txt"
], p = "1673346694578", t = self, h = `cache${p}`, i = r.concat(
  // Exclude this github pages related file, breaks the service worker
  m.filter((a) => a !== "/.nojekyll")
), f = new Set(i);
t.addEventListener("install", (a) => {
  a.waitUntil(
    caches.open(h).then(async (e) => {
      try {
        await e.addAll(i);
      } catch {
        console.warn("cache.addAll failed, attempting to add files individually");
        for await (const n of i)
          try {
            await e.add(n);
          } catch {
            console.warn("This file could not be added:", n);
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
      for (const c of e)
        c !== h && await caches.delete(c);
      t.clients.claim();
    })
  );
});
async function g(a) {
  const e = await caches.open(`offline${p}`);
  try {
    const c = await fetch(a);
    return e.put(a, c.clone()), c;
  } catch (c) {
    const n = await e.match(a);
    if (n)
      return n;
    throw c;
  }
}
t.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET" || a.request.headers.has("range"))
    return;
  const e = new URL(a.request.url), c = e.protocol.startsWith("http"), n = e.hostname === self.location.hostname && e.port !== self.location.port, s = e.host === self.location.host && f.has(e.pathname), o = a.request.cache === "only-if-cached" && !s;
  c && !n && !o && a.respondWith(
    (async () => s && await caches.match(a.request) || g(a.request))()
  );
});
