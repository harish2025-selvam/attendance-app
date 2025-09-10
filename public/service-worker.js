const CACHE = 'att-v1';
const ASSETS = ['/', '/index.html', '/teacher.html', '/student.html', '/style.css', '/manifest.json'];

self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(()=>self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
    return caches.open(CACHE).then(c => { c.put(e.request, resp.clone()); return resp; });
  })).catch(()=>caches.match('/index.html')));
});
