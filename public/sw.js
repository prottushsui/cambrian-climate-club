// The offline shell is deliberately small and self-contained so it can render
// even when the React app and its remote assets are unavailable.
const CACHE_NAME = 'cambrian-climate-club-v1';
const OFFLINE_URL = '/offline.html';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      // A service worker must cache its fallback before it can safely activate.
      await cache.add(new Request(OFFLINE_URL, { cache: 'reload' }));
      await self.skipWaiting();
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(keys =>
        Promise.all(
          // Remove only this app's older caches; leave unrelated site caches alone.
          keys
            .filter(
              key =>
                key.startsWith('cambrian-climate-club-') && key !== CACHE_NAME
            )
            .map(key => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);

  // Never intercept writes or third-party requests; the site is a static app.
  if (request.method !== 'GET' || url.origin !== self.location.origin) {
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(async response => {
          // A reachable server can still be unhealthy; show the cached fallback
          // for server errors while preserving ordinary client-side 4xx responses.
          if (response.status >= 500) {
            const cache = await caches.open(CACHE_NAME);
            return (await cache.match(OFFLINE_URL)) || response;
          }

          // Save successful pages so a previously visited route can load offline.
          if (response.ok) {
            const copy = response.clone();
            event.waitUntil(
              caches.open(CACHE_NAME).then(cache => cache.put(request, copy))
            );
          }
          return response;
        })
        .catch(async () => {
          // Prefer the exact page requested; use the friendly shell as a fallback.
          const cache = await caches.open(CACHE_NAME);
          return (
            (await cache.match(request)) || (await cache.match(OFFLINE_URL))
          );
        })
    );
    return;
  }

  // Cache successful same-origin static assets for repeat visits and offline use.
  event.respondWith(
    caches.match(request).then(
      cached =>
        cached ||
        fetch(request).then(response => {
          if (response.ok && response.type === 'basic') {
            const copy = response.clone();
            event.waitUntil(
              caches.open(CACHE_NAME).then(cache => cache.put(request, copy))
            );
          }
          return response;
        })
    )
  );
});
