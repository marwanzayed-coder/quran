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
