AzkarFilerowOther();
function AzkarFilerowOther() {
  fetch("../azkar.json")
    .then((res) => res.json())
    .then((rep) => {
      for (let i = 61; i <= 303; i++) {
        let rowOther = document.getElementById("row-other");
        let div = document.createElement("div");
        div.className = "item";

        let reference = document.createElement("p");
        reference.className = "text-start h5 m-2";
        reference.style.cssText = "border-bottom: 1px solid rgba(0,0,0,.125);";
        let referenceNode = document.createTextNode(`${rep[i].category}`);
        reference.appendChild(referenceNode);

        let text = document.createElement("p");
        text.className = "zekr";
        let textNode = document.createTextNode(rep[i].zekr);
        text.appendChild(textNode);

        div.appendChild(reference);
        div.appendChild(text);
        rowOther.appendChild(div);
      }
    });
}
