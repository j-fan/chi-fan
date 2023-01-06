const f = [
  "/chi-fan/_app/immutable/assets/fira-mono-greek-400-normal-a8be01ce.woff2",
  "/chi-fan/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal-3df7909e.woff2",
  "/chi-fan/_app/immutable/assets/fira-mono-cyrillic-400-normal-c7d433fd.woff2",
  "/chi-fan/_app/immutable/assets/fira-mono-greek-ext-400-normal-9e2fe623.woff2",
  "/chi-fan/_app/immutable/assets/fira-mono-latin-400-normal-e43b3538.woff2",
  "/chi-fan/_app/immutable/assets/fira-mono-latin-ext-400-normal-6bfabd30.woff2",
  "/chi-fan/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff",
  "/chi-fan/_app/immutable/start-c5d4269c.js",
  "/chi-fan/_app/immutable/components/pages/_layout.svelte-2df0d085.js",
  "/chi-fan/_app/immutable/assets/_layout-20df1867.css",
  "/chi-fan/_app/immutable/components/error.svelte-1907852f.js",
  "/chi-fan/_app/immutable/components/pages/_page.svelte-b3e16916.js",
  "/chi-fan/_app/immutable/assets/_page-04228c89.css",
  "/chi-fan/_app/immutable/components/pages/about/_page.svelte-7e5f3452.js",
  "/chi-fan/_app/immutable/components/pages/doors/_page.svelte-da616471.js",
  "/chi-fan/_app/immutable/assets/_page-389d1576.css",
  "/chi-fan/_app/immutable/components/pages/sugar-cane-water/_page.svelte-8a499771.js",
  "/chi-fan/_app/immutable/assets/_page-ed35b26f.css",
  "/chi-fan/_app/immutable/components/pages/sugar-cane-water/intro/_page.svelte-d8a3a428.js",
  "/chi-fan/_app/immutable/assets/_page-2c0872ed.css",
  "/chi-fan/_app/immutable/modules/pages/_layout.ts-b8ee4d7c.js",
  "/chi-fan/_app/immutable/modules/pages/about/_page.ts-6f405366.js",
  "/chi-fan/_app/immutable/chunks/singletons-bea4f6a1.js",
  "/chi-fan/_app/immutable/chunks/paths-d2a11cad.js",
  "/chi-fan/_app/immutable/chunks/index-077db8d7.js",
  "/chi-fan/_app/immutable/chunks/stores-297c86a5.js",
  "/chi-fan/_app/immutable/chunks/_layout-1daba58d.js",
  "/chi-fan/_app/immutable/chunks/Button-d9a2d830.js",
  "/chi-fan/_app/immutable/assets/Button-4fed2903.css",
  "/chi-fan/_app/immutable/chunks/_page-a84837a2.js",
  "/chi-fan/_app/immutable/chunks/index-94a3dd3c.js",
  "/chi-fan/_app/immutable/chunks/0-9a503cec.js",
  "/chi-fan/_app/immutable/chunks/1-8f374e3b.js",
  "/chi-fan/_app/immutable/chunks/2-e03bddfd.js",
  "/chi-fan/_app/immutable/chunks/3-d344bc25.js",
  "/chi-fan/_app/immutable/chunks/4-e05f5763.js",
  "/chi-fan/_app/immutable/chunks/5-133d026c.js",
  "/chi-fan/_app/immutable/chunks/6-eb98ee13.js"
], h = [
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
], i = "1672980506230", c = self, p = `cache${i}`, o = f.concat(h), r = new Set(o);
c.addEventListener("install", (a) => {
  a.waitUntil(
    caches.open(p).then((e) => e.addAll(o)).then(() => {
      c.skipWaiting();
    })
  );
});
c.addEventListener("activate", (a) => {
  a.waitUntil(
    caches.keys().then(async (e) => {
      for (const s of e)
        s !== p && await caches.delete(s);
      c.clients.claim();
    })
  );
});
async function u(a) {
  const e = await caches.open(`offline${i}`);
  try {
    const s = await fetch(a);
    return e.put(a, s.clone()), s;
  } catch (s) {
    const n = await e.match(a);
    if (n)
      return n;
    throw s;
  }
}
c.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET" || a.request.headers.has("range"))
    return;
  const e = new URL(a.request.url), s = e.protocol.startsWith("http"), n = e.hostname === self.location.hostname && e.port !== self.location.port, t = e.host === self.location.host && r.has(e.pathname), m = a.request.cache === "only-if-cached" && !t;
  s && !n && !m && a.respondWith(
    (async () => t && await caches.match(a.request) || u(a.request))()
  );
});
