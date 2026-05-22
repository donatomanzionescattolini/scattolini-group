// Bump this version whenever the build output changes so old clients drop the stale cache.
const CACHE_NAME = "scattolini-static-v3";
const APP_SHELL = ["/manifest.json"];

// Only assets that almost never change are served cache-first.
const CACHE_FIRST_DESTINATIONS = new Set(["image", "font"]);

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .catch(() => undefined)
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

function isSameOrigin(request) {
  try {
    return new URL(request.url).origin === self.location.origin;
  } catch (e) {
    return false;
  }
}

function networkFirst(request) {
  return fetch(request)
    .then((response) => {
      if (response && response.ok && isSameOrigin(request)) {
        const clone = response.clone();
        caches
          .open(CACHE_NAME)
          .then((cache) => cache.put(request, clone))
          .catch(() => undefined);
      }
      return response;
    })
    .catch(() => caches.match(request));
}

function cacheFirst(request) {
  return caches.match(request).then((cached) => {
    if (cached) return cached;
    return fetch(request).then((response) => {
      if (response && response.ok && isSameOrigin(request)) {
        const clone = response.clone();
        caches
          .open(CACHE_NAME)
          .then((cache) => cache.put(request, clone))
          .catch(() => undefined);
      }
      return response;
    });
  });
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  // Navigations (HTML) -> network-first so deploys are picked up immediately.
  if (request.mode === "navigate" || request.destination === "document") {
    event.respondWith(networkFirst(request));
    return;
  }

  // JS / CSS / manifests -> network-first so newly built bundles always load.
  if (
    request.destination === "script" ||
    request.destination === "style" ||
    request.destination === "manifest" ||
    request.destination === "worker"
  ) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Images and fonts -> cache-first (they rarely change).
  if (CACHE_FIRST_DESTINATIONS.has(request.destination)) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Default: network-first, fall back to cache.
  event.respondWith(networkFirst(request));
});
