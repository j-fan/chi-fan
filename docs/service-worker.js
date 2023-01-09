const r = [
  "/chi-fan/_app/immutable/start-e8ab501d.js",
  "/chi-fan/_app/immutable/components/pages/_layout.svelte-d7e1bad1.js",
  "/chi-fan/_app/immutable/assets/_layout-a568b42d.css",
  "/chi-fan/_app/immutable/components/error.svelte-64295a2d.js",
  "/chi-fan/_app/immutable/components/pages/_page.svelte-2680030b.js",
  "/chi-fan/_app/immutable/assets/_page-549026eb.css",
  "/chi-fan/_app/immutable/components/pages/about/_page.svelte-8ab1f50e.js",
  "/chi-fan/_app/immutable/components/pages/doors/_page.svelte-469a6f58.js",
  "/chi-fan/_app/immutable/assets/_page-389d1576.css",
  "/chi-fan/_app/immutable/components/pages/sugar-cane-water/_page.svelte-e77b08e9.js",
  "/chi-fan/_app/immutable/assets/_page-464d4bb6.css",
  "/chi-fan/_app/immutable/components/pages/sugar-cane-water/intro/_page.svelte-83c0ff7c.js",
  "/chi-fan/_app/immutable/assets/_page-ceb021c6.css",
  "/chi-fan/_app/immutable/modules/pages/_layout.ts-b8ee4d7c.js",
  "/chi-fan/_app/immutable/modules/pages/about/_page.ts-6f405366.js",
  "/chi-fan/_app/immutable/chunks/singletons-ccad5925.js",
  "/chi-fan/_app/immutable/chunks/paths-d2a11cad.js",
  "/chi-fan/_app/immutable/chunks/index-eecdb0a3.js",
  "/chi-fan/_app/immutable/chunks/stores-71ca60b9.js",
  "/chi-fan/_app/immutable/chunks/_layout-1daba58d.js",
  "/chi-fan/_app/immutable/chunks/Button-9de61417.js",
  "/chi-fan/_app/immutable/assets/Button-8ca56c60.css",
  "/chi-fan/_app/immutable/chunks/_page-a84837a2.js",
  "/chi-fan/_app/immutable/chunks/index-9f715646.js",
  "/chi-fan/_app/immutable/chunks/0-eb40300c.js",
  "/chi-fan/_app/immutable/chunks/1-340c1afe.js",
  "/chi-fan/_app/immutable/chunks/2-a440d8e6.js",
  "/chi-fan/_app/immutable/chunks/3-330aaeb8.js",
  "/chi-fan/_app/immutable/chunks/4-1dcb4849.js",
  "/chi-fan/_app/immutable/chunks/5-7369d572.js",
  "/chi-fan/_app/immutable/chunks/6-672e87f9.js"
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
], p = "1673275418428", t = self, h = `cache${p}`, i = r.concat(
  m.filter((a) => a !== "/.nojekyll")
), g = new Set(i);
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
async function f(a) {
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
  const e = new URL(a.request.url), c = e.protocol.startsWith("http"), n = e.hostname === self.location.hostname && e.port !== self.location.port, s = e.host === self.location.host && g.has(e.pathname), o = a.request.cache === "only-if-cached" && !s;
  c && !n && !o && a.respondWith(
    (async () => s && await caches.match(a.request) || f(a.request))()
  );
});
