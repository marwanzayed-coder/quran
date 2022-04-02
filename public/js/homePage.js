homePage();
function homePage() {
  fetch("../quran.json")
    .then((res) => res.json())
    .then((rep) => {
      let n = Math.floor(Math.random() * 114);
      let total_verses = Math.floor(Math.random() * rep[n].total_verses);
      let ayah = document.getElementById("ayah");
      let text = rep[n].verses[total_verses];
      let name = document.getElementById("surahName");
      let nametext = document.createTextNode(
        `سُورَةُ ${rep[n].name} - ${rep[n].total_verses} أية `
      );
      name.appendChild(nametext);
      let ayahtext = document.createTextNode(text.text);
      let parent = document.createElement("span");

      let archTwo = document.createTextNode(
        ` \ufd3f${rep[n].verses[total_verses].id.toLocaleString(
          "AR-EG"
        )}\ufd3e `
      );

      parent.appendChild(archTwo);

      ayah.appendChild(ayahtext);
      ayah.appendChild(parent);
    });
}

let city = window.localStorage.getItem("city") || "cairo";
let country = window.localStorage.getItem("country") || "egypt";
let url = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}`;

function PrayerTimesAPI() {
  fetch(url)
    .then((res) => res.json())
    .then((rep) => {
      let prayerTimes = document.getElementById("prayerTimes");
      console.log(rep.data.timings);
      prayerTimes.innerHTML = `${rep.data.date.hijri.weekday.ar}, ${
        rep.data.date.hijri.day
      } من شهر ${
        rep.data.date.hijri.month.ar
      } لعام ${rep.data.date.hijri.year.toLocaleString("AR-EG")} هجريًا.`;

      let timings = rep.data.timings;

      let colFajr = document.getElementById("fajr");
      colFajr.innerHTML = tConvert(timings.Fajr);

      let colSunrise = document.getElementById("sunrise");
      colSunrise.innerHTML = tConvert(timings.Sunrise);

      let colDhuhr = document.getElementById("dhuhr");
      colDhuhr.innerHTML = tConvert(timings.Dhuhr);

      let colAsr = document.getElementById("asr");
      colAsr.innerHTML = tConvert(timings.Asr);

      let colMaghrib = document.getElementById("maghrib");
      colMaghrib.innerHTML = tConvert(timings.Maghrib);

      let colIsha = document.getElementById("isha");
      colIsha.innerHTML = tConvert(timings.Isha);
    });
}
function tConvert(time) {
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    time,
  ];

  if (time.length > 1) {
    // If time format correct
    time = time.slice(1); // Remove full string match value
    time[5] = +time[0] < 12 ? "AM" : "PM"; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join(""); // return adjusted time or original string
}
PrayerTimesAPI();
