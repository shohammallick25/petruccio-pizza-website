const CACHE_NAME = 'petruccio-pizza-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/Pizza website.css',
  '/js/Pizza website.js',
  '/img/logo.png',
  '/img/m1.jpg',
  '/img/m2.jpg',
  '/img/m3.jpg',
  '/img/m4.jpg'
];

// Install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
