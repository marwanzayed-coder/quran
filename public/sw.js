const cacheName = "Quran-v8";
const assets = [
  "/",
  "/citationForMorning",
  "/eveningPrayers",
  "/otherRemembrancesAndOtherSupplications",
  "/roqia",
  "/quran",
  "/quran/:id",
  "/css/bootstrap.rtl.min.css",
  "/css/style.css",
  "/css/all.min.css",
  "/js/homePage.js",
  "/js/all.min.js",
  "/js/bootstrap.bundle.min.js",
  "/js/main.js",
  "/js/quran.js",
  "/js/sora.js",
  "/js/azkar.js",
  "/js/AzkarFileRoqia.js",
  "/js/AzkarFilerowEvening.js",
  "/js/AzkarFilerowOther.js",
  "/azkar.json",
  "/quran.json",
  "/images/morning.svg",
  "/images/evening.svg",
  "/fonts/QuranRegular.ttf",
  "https://fonts.gstatic.com/s/changa/v17/2-c79JNi2YuVOUcOarRPgnNGooxCZ62xcjLj9ytf.woff2",
  "https://fonts.gstatic.com/s/changa/v17/2-c79JNi2YuVOUcOarRPgnNGooxCZ62xcjfj9w.woff2",
  "https://fonts.googleapis.com/css2?family=Changa&display=swap",
  "/fonts/icomoon.ttf?hm7g0k",
];
self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        cache
          .addAll(assets)
          .then((result) => {})
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      })
  );
});
self.addEventListener("activate", (activateEvent) => {
  activateEvent.waitUntil(
    caches
      .keys()
      .then((keys) => {
        return Promise.all(
          keys
            .filter((key) => key != cacheName)
            .map((key) => caches.delete(key))
        );
      })
      .catch((err) => {
        console.log(err);
      })
  );
});
self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches
      .match(fetchEvent.request)
      .then((res) => {
        return (
          res ||
          fetch(fetchEvent.request)
            .then((fetchRes) => {
              return caches
                .open(cacheName)
                .then((cache) => {
                  cache.put(fetchEvent.request, fetchRes.clone());
                  return fetchRes;
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((err) => {
              console.log(err);
            })
        );
      })
      .catch((err) => {
        console.log(err);
      })
  );
});
