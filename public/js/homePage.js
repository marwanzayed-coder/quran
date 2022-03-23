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
