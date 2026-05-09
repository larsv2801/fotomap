self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v2').then((cache) => {
      return cache.addAll([
        '/fotomap/index.html',
        '/fotomap/manifest.json',
        '/fotomap/fotomaplogo144.png',
        '/fotomap/fotomaplogo192.png',
        '/fotomap/fotomaplogo.png',
        '/fotomap/cleanfotomap1.png',
        '/fotomap/cleanfotomap2.png',
        '/fotomap/cleanfotomap3.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
