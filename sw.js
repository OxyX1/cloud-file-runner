self.addEventListener("install", (event) => {
    console.log("Service Worker installed");
    event.waitUntil(
        caches.open("v1").then((cache) => {
            return cache.addAll([
                "/",
                "/dist/home/index.html",
                "/dist/home/style.css",
                "/dist/home/winhandler.js",
                "/dist/home/dragability.js",
                "/dist/home/taskbarhandler.js",
                "/dist/home/filemanagementhandler.js",
                "/dist/home/fileopenerhandler.js",
                "/dist/home/guimanagement.js"
            ]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});
