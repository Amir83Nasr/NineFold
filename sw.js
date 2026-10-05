// ── CACHE / OFFLINE ────────────────────────────────────────────
const CACHE = "ninefold-v4";
const ASSETS = [
  "./",
  "./index.html",
  "./game.js",
  "./app.css",
  "./manifest.webmanifest",
  "./vendor/capacitor.js",
  "./vendor/capacitor-preferences.js",
  "./vendor/capacitor-status-bar.js",
  "./assets/icons/icon-180.png",
  "./assets/icons/icon-512.png",
  "./assets/icons/icon-1024.png",
  "./assets/fonts/outfit-var.woff2",
  "./assets/fonts/cinzel-var.woff2",
];
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE)
      .then((c) => c.addAll(ASSETS))
      .then(() => self.skipWaiting()),
  );
});
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(
      (hit) =>
        hit ||
        fetch(e.request)
          .then((res) => {
            if (res.ok && new URL(e.request.url).origin === location.origin) {
              const copy = res.clone();
              caches.open(CACHE).then((c) => c.put(e.request, copy));
            }
            return res;
          })
          .catch(() => caches.match("./index.html")),
    ),
  );
});
