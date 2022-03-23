SoraFile();
function SoraFile() {
  fetch("../quran.json")
    .then((res) => res.json())
    .then((rep) => {
      // let num = location.href.slice(37); // 28
      let num;
      if (location.href.startsWith("http://localhost:3000/")) {
        num = location.href.slice(28);
      } else {
        num = location.href.slice(37);
      }
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
