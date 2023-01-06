const f = [
  "/chi-fan/_app/immutable/start-55cb6d0d.js",
  "/chi-fan/_app/immutable/components/pages/_layout.svelte-0b0ee37a.js",
  "/chi-fan/_app/immutable/assets/_layout-3e91ff86.css",
  "/chi-fan/_app/immutable/components/error.svelte-b75a8547.js",
  "/chi-fan/_app/immutable/components/pages/_page.svelte-3601b42e.js",
  "/chi-fan/_app/immutable/assets/_page-04228c89.css",
  "/chi-fan/_app/immutable/components/pages/about/_page.svelte-7e5f3452.js",
  "/chi-fan/_app/immutable/components/pages/doors/_page.svelte-2bf5877b.js",
  "/chi-fan/_app/immutable/assets/_page-389d1576.css",
  "/chi-fan/_app/immutable/components/pages/sugar-cane-water/_page.svelte-ed2732d8.js",
  "/chi-fan/_app/immutable/assets/_page-c63aaf09.css",
  "/chi-fan/_app/immutable/components/pages/sugar-cane-water/intro/_page.svelte-fd7bb858.js",
  "/chi-fan/_app/immutable/assets/_page-2c0872ed.css",
  "/chi-fan/_app/immutable/modules/pages/_layout.ts-b8ee4d7c.js",
  "/chi-fan/_app/immutable/modules/pages/about/_page.ts-6f405366.js",
  "/chi-fan/_app/immutable/chunks/singletons-2bef23f3.js",
  "/chi-fan/_app/immutable/chunks/paths-d2a11cad.js",
  "/chi-fan/_app/immutable/chunks/index-077db8d7.js",
  "/chi-fan/_app/immutable/chunks/stores-953a7f76.js",
  "/chi-fan/_app/immutable/chunks/_layout-1daba58d.js",
  "/chi-fan/_app/immutable/chunks/Button-ef240925.js",
  "/chi-fan/_app/immutable/assets/Button-8ca56c60.css",
  "/chi-fan/_app/immutable/chunks/_page-a84837a2.js",
  "/chi-fan/_app/immutable/chunks/index-94a3dd3c.js",
  "/chi-fan/_app/immutable/chunks/0-6f4f491c.js",
  "/chi-fan/_app/immutable/chunks/1-21fad4fa.js",
  "/chi-fan/_app/immutable/chunks/2-303e1ed1.js",
  "/chi-fan/_app/immutable/chunks/3-d344bc25.js",
  "/chi-fan/_app/immutable/chunks/4-fb0f0c1b.js",
  "/chi-fan/_app/immutable/chunks/5-e882036a.js",
  "/chi-fan/_app/immutable/chunks/6-39169ec7.js"
], r = [
  "/chi-fan/.nojekyll",
  "/chi-fan/favicon.png",
  "/chi-fan/icon/icon-192x192.png",
  "/chi-fan/icon/icon-256x256.png",
  "/chi-fan/icon/icon-384x384.png",
  "/chi-fan/icon/icon-512x512.png",
  "/chi-fan/img/door-left.jpg",
  "/chi-fan/img/door-right.jpg",
  "/chi-fan/img/home-bg.jpg",
  "/chi-fan/img/recipe2/interior.jpg",
  "/chi-fan/img/recipe3/interior.jpg",
  "/chi-fan/img/sugar-cane-water/board.jpg",
  "/chi-fan/img/sugar-cane-water/cane.png",
  "/chi-fan/img/sugar-cane-water/cane3.jpg",
  "/chi-fan/img/sugar-cane-water/carrot.jpg",
  "/chi-fan/img/sugar-cane-water/cleaver2.png",
  "/chi-fan/img/sugar-cane-water/cut-cane.png",
  "/chi-fan/img/sugar-cane-water/cutting-cane.jpg",
  "/chi-fan/img/sugar-cane-water/grandpa-cane.jpg",
  "/chi-fan/img/sugar-cane-water/interior.jpg",
  "/chi-fan/img/sugar-cane-water/pot.jpg",
  "/chi-fan/img/sugar-cane-water/scrub.jpg",
  "/chi-fan/img/sugar-cane-water/tub.jpg",
  "/chi-fan/manifest.json",
  "/chi-fan/robots.txt"
], p = "1672987181256", s = self, o = `cache${p}`, i = f.concat(
  r.filter((a) => a !== "/.nojekyll")
), m = new Set(i);
s.addEventListener("install", (a) => {
  a.waitUntil(
    caches.open(o).then(async (e) => {
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
      s.skipWaiting();
    })
  );
});
s.addEventListener("activate", (a) => {
  a.waitUntil(
    caches.keys().then(async (e) => {
      for (const c of e)
        c !== o && await caches.delete(c);
      s.clients.claim();
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
s.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET" || a.request.headers.has("range"))
    return;
  const e = new URL(a.request.url), c = e.protocol.startsWith("http"), n = e.hostname === self.location.hostname && e.port !== self.location.port, t = e.host === self.location.host && m.has(e.pathname), h = a.request.cache === "only-if-cached" && !t;
  c && !n && !h && a.respondWith(
    (async () => t && await caches.match(a.request) || u(a.request))()
  );
});
