self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('bookly-cache').then(cache => cache.addAll([
      '/',
      '/index.html',
      '/static/homes.css'
    ]))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});