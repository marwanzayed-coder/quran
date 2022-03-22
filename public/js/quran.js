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
      ` \ufd3f${rep[n].verses[total_verses].id.toLocaleString("AR-EG")}\ufd3e `
    );
    console.log(rep[n].verses[total_verses].id);

    parent.appendChild(archTwo);

    ayah.appendChild(ayahtext);
    ayah.appendChild(parent);
  });

SoraFile();
QuranFile();

function QuranFile() {
  fetch("../quran.json")
    .then((res) => res.json())
    .then((rep) => {
      let quran = document.getElementById("quran");
      rep.forEach((sora) => {
        let soraBox = document.createElement("a");
        soraBox.className = "col item text-center";
        soraBox.id = "soraBox";
        soraBox.href = `/quran/${sora.id}`;
        soraBox.setAttribute("data-name", sora.transliteration);
        let soraName = document.createElement("h2");
        let soraNameText = document.createTextNode(sora.id + " - " + sora.name);
        soraName.appendChild(soraNameText);

        let soraVerses = document.createElement("h4");
        let soraVersesText = document.createTextNode(
          `عدد الايات: ${sora.total_verses}`
        );
        soraVerses.appendChild(soraVersesText);

        soraBox.appendChild(soraName);
        soraBox.appendChild(soraVerses);
        quran.appendChild(soraBox);
      });
    });
}

function SoraFile(params) {
  fetch("../quran.json")
    .then((res) => res.json())
    .then((rep) => {
      let num = location.href.slice(28);
      let name = document.createElement("h1");
      name.className = "text-center mt-5 p-3";
      let NameText = document.createTextNode(rep[num - 1].name);
      sora.appendChild(name);
      name.appendChild(NameText);
      let div = document.createElement("div");
      rep[num - 1].verses.forEach((e) => {
        let sora = document.getElementById("sora");
        div.className = "h3";
        let soraText = document.createTextNode(
          e.text + ` \ufd3f${e.id.toLocaleString("AR-EG")}\ufd3e `
        );
        div.appendChild(soraText);
        sora.appendChild(div);
      });
    });
}
