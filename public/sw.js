
const PREFIX = "V2";
const CACHED_FILES = [];

self.addEventListener("install", (event) => {
    self.skipWaiting();
    event.waitUntil(
        (async () => {
        const cache = await caches.open(PREFIX);
        await Promise.all(
            [...CACHED_FILES, "./offline.html"].map((path) => {
                return cache.add(new Request(path));
            })
        );
    }));
});

self.addEventListener("activate", (event) => {
    clients.claim();
    event.waitUntil(
        (async () => {
            const keys = await caches.keys();
            await Promise.all(
                keys.map((key) => {
                    if (!key.includes(PREFIX)) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
})

self.addEventListener("fetch", (event) => {
    if (event.request.mode === "navigate") {
        event.respondWith(
            (async () => {
                try {
                    const preloadResponse = await event.preloadResponse
                    if (preloadResponse) {
                        return preloadResponse;
                    }
                    return await fetch(event.request);
                }
                catch (e) {
                    const cache = await caches.open(PREFIX);
                    //return await cache.match("./offline.html");
                    return new Response("Vous êtes hors ligne, veuillez recharger la page !");
                }
            })()
        );
    }
    else if (CACHED_FILES.includes(event.request.url)) {
        event.respondWith(caches.match(event.request));
    }
});