self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("currency-converter-v1").then(function (cache) {
      return cache.addAll([
        "/",
        "index.html",
        "icon.png",
        // Add any other assets you want to cache here
      ]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
