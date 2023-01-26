const h = [
  "/chi-fan/_app/immutable/assets/_page-549026eb.css",
  "/chi-fan/_app/immutable/assets/_page-7a24537a.css",
  "/chi-fan/_app/immutable/assets/Button-8ca56c60.css",
  "/chi-fan/_app/immutable/assets/_page-9270ebd8.css",
  "/chi-fan/_app/immutable/assets/_layout-a568b42d.css",
  "/chi-fan/_app/immutable/assets/_page-39d79571.css",
  "/chi-fan/_app/immutable/chunks/_layout-da46b06b.js",
  "/chi-fan/_app/immutable/chunks/1-25da7940.js",
  "/chi-fan/_app/immutable/modules/pages/about/_page.ts-08c78b37.js",
  "/chi-fan/_app/immutable/chunks/paths-b4419565.js",
  "/chi-fan/_app/immutable/chunks/2-99e434e3.js",
  "/chi-fan/_app/immutable/components/pages/_page.svelte-d40d0562.js",
  "/chi-fan/_app/immutable/chunks/5-1788c2bb.js",
  "/chi-fan/_app/immutable/chunks/6-bd18a82f.js",
  "/chi-fan/_app/immutable/chunks/_page-3afc52e2.js",
  "/chi-fan/_app/immutable/modules/pages/_layout.ts-9cbb603b.js",
  "/chi-fan/_app/immutable/chunks/index-0d1e6808.js",
  "/chi-fan/_app/immutable/components/pages/about/_page.svelte-36882516.js",
  "/chi-fan/_app/immutable/chunks/Button-56f11305.js",
  "/chi-fan/_app/immutable/chunks/stores-eae1ee91.js",
  "/chi-fan/_app/immutable/chunks/singletons-98408e58.js",
  "/chi-fan/_app/immutable/chunks/4-c0b89a6d.js",
  "/chi-fan/_app/immutable/chunks/0-c1632bf6.js",
  "/chi-fan/_app/immutable/chunks/3-4afc747e.js",
  "/chi-fan/_app/immutable/components/pages/doors/_page.svelte-437128db.js",
  "/chi-fan/_app/immutable/components/error.svelte-19874d42.js",
  "/chi-fan/_app/immutable/chunks/index-ab16b1b5.js",
  "/chi-fan/_app/immutable/components/pages/_layout.svelte-b52b2cd9.js",
  "/chi-fan/_app/immutable/start-fe5d846b.js",
  "/chi-fan/_app/immutable/components/pages/sugar-cane-water/_page.svelte-641ed864.js",
  "/chi-fan/_app/immutable/components/pages/sugar-cane-water/intro/_page.svelte-2d00cfb2.js"
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
  "/chi-fan/img/sugar-cane-water/almond-bowl.png",
  "/chi-fan/img/sugar-cane-water/almond-flake.png",
  "/chi-fan/img/sugar-cane-water/board-bg.jpg",
  "/chi-fan/img/sugar-cane-water/board.jpg",
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
  "/chi-fan/img/sugar-cane-water/cutting-cane-together.jpg",
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
], p = "1674738161459", i = self, g = `cache${p}`, s = h.concat(
  // Exclude this github pages related file, breaks the service worker
  o.filter((a) => a !== "/.nojekyll")
), m = new Set(s);
i.addEventListener("install", (a) => {
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
      i.skipWaiting();
    })
  );
});
i.addEventListener("activate", (a) => {
  a.waitUntil(
    caches.keys().then(async (e) => {
      for (const n of e)
        n !== g && await caches.delete(n);
      i.clients.claim();
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
i.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET" || a.request.headers.has("range"))
    return;
  const e = new URL(a.request.url), n = e.protocol.startsWith("http"), c = e.hostname === self.location.hostname && e.port !== self.location.port, t = e.host === self.location.host && m.has(e.pathname), r = a.request.cache === "only-if-cached" && !t;
  n && !c && !r && a.respondWith(
    (async () => t && await caches.match(a.request) || u(a.request))()
  );
});
