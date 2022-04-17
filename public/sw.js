const cacheName = "Quran-v12";
const assets = [
  "/",
  "/citationForMorning",
  "/eveningPrayers",
  "/otherRemembrancesAndOtherSupplications",
  "/roqia",
  "/quran",
  "/quran/1",
  "/quran/2",
  "/quran/3",
  "/quran/4",
  "/quran/5",
  "/quran/6",
  "/quran/7",
  "/quran/8",
  "/quran/9",
  "/quran/10",
  "/quran/11",
  "/quran/12",
  "/quran/13",
  "/quran/14",
  "/quran/15",
  "/quran/16",
  "/quran/17",
  "/quran/18",
  "/quran/19",
  "/quran/20",
  "/quran/21",
  "/quran/22",
  "/quran/23",
  "/quran/24",
  "/quran/25",
  "/quran/26",
  "/quran/27",
  "/quran/28",
  "/quran/29",
  "/quran/30",
  "/quran/31",
  "/quran/32",
  "/quran/33",
  "/quran/34",
  "/quran/35",
  "/quran/36",
  "/quran/37",
  "/quran/38",
  "/quran/39",
  "/quran/40",
  "/quran/41",
  "/quran/42",
  "/quran/43",
  "/quran/44",
  "/quran/45",
  "/quran/46",
  "/quran/47",
  "/quran/48",
  "/quran/49",
  "/quran/50",
  "/quran/51",
  "/quran/52",
  "/quran/53",
  "/quran/54",
  "/quran/55",
  "/quran/56",
  "/quran/57",
  "/quran/58",
  "/quran/59",
  "/quran/60",
  "/quran/61",
  "/quran/62",
  "/quran/63",
  "/quran/64",
  "/quran/65",
  "/quran/66",
  "/quran/67",
  "/quran/68",
  "/quran/69",
  "/quran/70",
  "/quran/71",
  "/quran/72",
  "/quran/73",
  "/quran/74",
  "/quran/75",
  "/quran/76",
  "/quran/77",
  "/quran/78",
  "/quran/79",
  "/quran/80",
  "/quran/81",
  "/quran/82",
  "/quran/83",
  "/quran/84",
  "/quran/85",
  "/quran/86",
  "/quran/87",
  "/quran/88",
  "/quran/89",
  "/quran/90",
  "/quran/91",
  "/quran/92",
  "/quran/93",
  "/quran/94",
  "/quran/95",
  "/quran/96",
  "/quran/97",
  "/quran/98",
  "/quran/99",
  "/quran/100",
  "/quran/101",
  "/quran/102",
  "/quran/103",
  "/quran/104",
  "/quran/105",
  "/quran/106",
  "/quran/107",
  "/quran/108",
  "/quran/109",
  "/quran/110",
  "/quran/111",
  "/quran/112",
  "/quran/113",
  "/quran/114",
  "/quran/115",
  "/quran/116",
  "/quran/117",
  "/quran/118",
  "/quran/119",
  "/quran/120",
  "/quran/121",
  "/quran/122",
  "/quran/123",
  "/quran/124",
  "/quran/125",
  "/quran/126",
  "/quran/127",
  "/quran/128",
  "/quran/129",
  "/quran/130",
  "/quran/131",
  "/quran/132",
  "/quran/133",
  "/quran/134",
  "/quran/135",
  "/quran/136",
  "/quran/137",
  "/quran/138",
  "/quran/139",
  "/quran/140",
  "/quran/141",
  "/quran/142",
  "/quran/143",
  "/quran/144",
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
