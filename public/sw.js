
const PREFIX = "V4";

self.addEventListener("install", (event) => {
    self.skipWaiting();
    event.waitUntil((async () => {
        const cache = await caches.open(PREFIX);
        cache.add(new Request("/offline"));
    }));
})

self.addEventListener("activate", () => {
    clients.claim();
})

self.addEventListener("fetch", (event) => {
    console.log(`Fetching : ${event.request.url}, Mode : ${event.request.mode}`);
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
                    //return await cache.match("/offline");
                    //return new Response("Vous êtes hors ligne");
                    return new Response(
                        <main className="Home">
                            <h1>Vous êtes hors ligne !</h1>
                        </main>);
                }
            })()
        );
    }
});