const g = [
  "/chi-fan/_app/immutable/assets/_page-549026eb.css",
  "/chi-fan/_app/immutable/assets/_page-2a5d9d09.css",
  "/chi-fan/_app/immutable/assets/_page-389d1576.css",
  "/chi-fan/_app/immutable/assets/_layout-a568b42d.css",
  "/chi-fan/_app/immutable/assets/Button-8ca56c60.css",
  "/chi-fan/_app/immutable/assets/_page-38e4c183.css",
  "/chi-fan/_app/immutable/chunks/4-2b790709.js",
  "/chi-fan/_app/immutable/modules/pages/about/_page.ts-08c78b37.js",
  "/chi-fan/_app/immutable/chunks/2-416ecd4d.js",
  "/chi-fan/_app/immutable/components/error.svelte-30d123a6.js",
  "/chi-fan/_app/immutable/chunks/0-06ac33ca.js",
  "/chi-fan/_app/immutable/chunks/index-6188c6ed.js",
  "/chi-fan/_app/immutable/chunks/stores-e5fde2bb.js",
  "/chi-fan/_app/immutable/chunks/3-c9b37feb.js",
  "/chi-fan/_app/immutable/chunks/5-fbc4c8b2.js",
  "/chi-fan/_app/immutable/chunks/6-d9e2b70c.js",
  "/chi-fan/_app/immutable/chunks/Button-730b59c7.js",
  "/chi-fan/_app/immutable/chunks/_layout-da46b06b.js",
  "/chi-fan/_app/immutable/components/pages/about/_page.svelte-380391fc.js",
  "/chi-fan/_app/immutable/chunks/singletons-df472dcd.js",
  "/chi-fan/_app/immutable/modules/pages/_layout.ts-9cbb603b.js",
  "/chi-fan/_app/immutable/chunks/_page-3afc52e2.js",
  "/chi-fan/_app/immutable/components/pages/doors/_page.svelte-66b00ab9.js",
  "/chi-fan/_app/immutable/chunks/1-eaa0f01c.js",
  "/chi-fan/_app/immutable/chunks/paths-b4419565.js",
  "/chi-fan/_app/immutable/components/pages/_page.svelte-ce97ee2a.js",
  "/chi-fan/_app/immutable/components/pages/_layout.svelte-5f1d8405.js",
  "/chi-fan/_app/immutable/components/pages/sugar-cane-water/_page.svelte-bac8232d.js",
  "/chi-fan/_app/immutable/chunks/index-a33fa324.js",
  "/chi-fan/_app/immutable/start-e4f47291.js",
  "/chi-fan/_app/immutable/components/pages/sugar-cane-water/intro/_page.svelte-4d6dca36.js"
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
  "/chi-fan/img/recipe2/interior.jpg",
  "/chi-fan/img/recipe3/interior.jpg",
  "/chi-fan/img/sugar-cane-water/board.jpg",
  "/chi-fan/img/sugar-cane-water/cane.png",
  "/chi-fan/img/sugar-cane-water/cane3.jpg",
  "/chi-fan/img/sugar-cane-water/canes-background.png",
  "/chi-fan/img/sugar-cane-water/carrot.jpg",
  "/chi-fan/img/sugar-cane-water/cleaver2.png",
  "/chi-fan/img/sugar-cane-water/clippers-closed.png",
  "/chi-fan/img/sugar-cane-water/clippers.png",
  "/chi-fan/img/sugar-cane-water/cooking-in-pot.jpg",
  "/chi-fan/img/sugar-cane-water/cut-cane.png",
  "/chi-fan/img/sugar-cane-water/cutting-cane-1.png",
  "/chi-fan/img/sugar-cane-water/cutting-cane-2.png",
  "/chi-fan/img/sugar-cane-water/cutting-cane-3.png",
  "/chi-fan/img/sugar-cane-water/cutting-cane-4.png",
  "/chi-fan/img/sugar-cane-water/cutting-cane-together.jpg",
  "/chi-fan/img/sugar-cane-water/cutting-cane.jpg",
  "/chi-fan/img/sugar-cane-water/grandpa-cane.jpg",
  "/chi-fan/img/sugar-cane-water/interior.jpg",
  "/chi-fan/img/sugar-cane-water/pot.jpg",
  "/chi-fan/img/sugar-cane-water/save-for-later.jpg",
  "/chi-fan/img/sugar-cane-water/scrub.png",
  "/chi-fan/img/sugar-cane-water/tub.jpg",
  "/chi-fan/img/sugar-cane-water/washing-cane-clean.png",
  "/chi-fan/img/sugar-cane-water/washing-cane-dirty.png",
  "/chi-fan/manifest.json",
  "/chi-fan/robots.txt"
], p = "1673354493120", t = self, r = `cache${p}`, s = g.concat(
  // Exclude this github pages related file, breaks the service worker
  o.filter((a) => a !== "/.nojekyll")
), m = new Set(s);
t.addEventListener("install", (a) => {
  a.waitUntil(
    caches.open(r).then(async (e) => {
      try {
        await e.addAll(s);
      } catch {
        console.warn("cache.addAll failed, attempting to add files individually");
        for await (const n of s)
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
        c !== r && await caches.delete(c);
      t.clients.claim();
    })
  );
});
async function u(a) {
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
  const e = new URL(a.request.url), c = e.protocol.startsWith("http"), n = e.hostname === self.location.hostname && e.port !== self.location.port, i = e.host === self.location.host && m.has(e.pathname), h = a.request.cache === "only-if-cached" && !i;
  c && !n && !h && a.respondWith(
    (async () => i && await caches.match(a.request) || u(a.request))()
  );
});
