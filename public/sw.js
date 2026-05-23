// Bump this version whenever the build output changes so old clients drop the stale cache.
const CACHE_NAME = "scattolini-static-v4";
const APP_SHELL = ["/", "/index.html", "/manifest.json"];

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
      .catch(() => undefined)
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
  } catch {
    return false;
  }
}

function fallbackResponse(request) {
  if (request.mode === "navigate" || request.destination === "document") {
    return new Response(
      "<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>Offline</title></head><body><h1>Offline</h1><p>The app is temporarily unavailable. Please retry.</p></body></html>",
      {
        status: 503,
        statusText: "Service Unavailable",
        headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
      }
    );
  }

  return new Response("", {
    status: 504,
    statusText: "Gateway Timeout",
    headers: { "Cache-Control": "no-store" },
  });
}

async function readFromCache(request) {
  try {
    return (await caches.match(request)) || null;
  } catch {
    return null;
  }
}

async function writeToCache(request, response) {
  if (!response || !response.ok || !isSameOrigin(request)) return;

  try {
    const cache = await caches.open(CACHE_NAME);
    await cache.put(request, response.clone());
  } catch {
    // Ignore cache write failures.
  }
}

async function networkFirst(request, options = {}) {
  const { cacheable = true } = options;

  try {
    const response = await fetch(request);
    if (cacheable) {
      await writeToCache(request, response);
    }
    return response;
  } catch {
    const cached = await readFromCache(request);
    if (cached) return cached;

    if (request.mode === "navigate" || request.destination === "document") {
      const appShell = (await readFromCache("/")) || (await readFromCache("/index.html"));
      if (appShell) return appShell;
    }

    return fallbackResponse(request);
  }
}

async function cacheFirst(request) {
  const cached = await readFromCache(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    await writeToCache(request, response);
    return response;
  } catch {
    return fallbackResponse(request);
  }
}

async function handleRequest(request) {
  if (request.method !== "GET") {
    return fetch(request).catch(() => fallbackResponse(request));
  }

  // Navigations (HTML) -> network-first so deploys are picked up immediately.
  if (request.mode === "navigate" || request.destination === "document") {
    return networkFirst(request, { cacheable: false });
  }

  // JS / CSS / manifests -> network-first so newly built bundles always load.
  if (
    request.destination === "script" ||
    request.destination === "style" ||
    request.destination === "manifest" ||
    request.destination === "worker"
  ) {
    return networkFirst(request);
  }

  // Images and fonts -> cache-first (they rarely change).
  if (CACHE_FIRST_DESTINATIONS.has(request.destination)) {
    return cacheFirst(request);
  }

  // Default: network-first, fall back to cache.
  return networkFirst(request);
}

self.addEventListener("fetch", (event) => {
  event.respondWith(
    handleRequest(event.request).catch(() => fallbackResponse(event.request))
  );
});
