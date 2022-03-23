AzkarFileRoqia();
function AzkarFileRoqia() {
  fetch("../azkar.json")
    .then((res) => res.json())
    .then((rep) => {
      for (let i = 304; i <= 304 + 32; i++) {
        let rowRoqia = document.getElementById("row-roqia");
        let div = document.createElement("div");
        div.className = "item";

        let text = document.createElement("p");
        text.className = "zekr";
        let textNode = document.createTextNode(rep[i].zekr);
        text.appendChild(textNode);

        let reference = document.createElement("p");
        reference.className = "text-start h5 m-2";
        reference.style.cssText = "border-top: 1px solid rgba(0,0,0,.125);";
        let referenceNode = document.createTextNode(`${rep[i].reference}`);
        reference.appendChild(referenceNode);

        div.appendChild(text);
        div.appendChild(reference);
        rowRoqia.appendChild(div);
      }
    });
}
