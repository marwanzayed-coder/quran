AzkarFileRoqia();
AzkarFilerowOther();
AzkarFilerowEvening();
AzkarFile();
function AzkarFile() {
  fetch("../azkar.json")
    .then((res) => res.json())
    .then((rep) => {
      for (let i = 0; i <= 30; i++) {
        let row = document.getElementById("row");
        let div = document.createElement("div");
        div.className = "item";

        let count = document.createElement("p");
        count.className = "text-start h5 m-2";
        count.style.cssText = "border-bottom: 1px solid rgba(0,0,0,.125);";
        let countNode = document.createTextNode(
          `التكرار: ${rep[i].count.toLocaleString("AR-EG")}`
        );
        count.appendChild(countNode);

        let text = document.createElement("p");
        text.className = "zekr";
        let textNode = document.createTextNode(rep[i].zekr);
        text.appendChild(textNode);

        let btn = document.createElement("button");
        let btnCountSpan = document.createElement("span");
        btnCountSpan.className = "btnCount";
        let btnCountText = document.createTextNode(
          rep[i].count.toLocaleString("AR-EG")
        );
        let btnText = document.createTextNode("التكرارات المتبقية: ");
        btnCountSpan.appendChild(btnCountText);
        btn.appendChild(btnText);
        btn.appendChild(btnCountSpan);

        btn.onclick = () => {
          if (btnCountSpan.innerText != 0) {
            btnCountSpan.innerText--;
          } else {
            btn.classList.add("done");
          }
        };

        let reference = document.createElement("p");
        reference.className = "text-start h5 m-2";
        reference.style.cssText = "border-top: 1px solid rgba(0,0,0,.125);";
        let referenceNode = document.createTextNode(`${rep[i].reference}`);
        reference.appendChild(referenceNode);

        div.appendChild(count);
        div.appendChild(text);
        div.appendChild(btn);
        div.appendChild(reference);
        row.appendChild(div);
      }
    });
}

function AzkarFilerowEvening() {
  fetch("../azkar.json")
    .then((res) => res.json())
    .then((rep) => {
      for (let i = 31; i <= 60; i++) {
        let rowEvening = document.getElementById("row-evening");
        let div = document.createElement("div");
        div.className = "item";

        let count = document.createElement("p");
        count.className = "text-start h5 m-2";
        count.style.cssText = "border-bottom: 1px solid rgba(0,0,0,.125);";
        let countNode = document.createTextNode(
          `التكرار: ${rep[i].count.toLocaleString("AR-EG")}`
        );
        count.appendChild(countNode);

        let text = document.createElement("p");
        text.className = "zekr";
        let textNode = document.createTextNode(rep[i].zekr);
        text.appendChild(textNode);

        let btn = document.createElement("button");
        let btnCountSpan = document.createElement("span");
        btnCountSpan.className = "btnCount";
        let btnCountText = document.createTextNode(
          rep[i].count.toLocaleString("AR-EG")
        );
        let btnText = document.createTextNode("التكرارات المتبقية:");
        btnCountSpan.appendChild(btnCountText);
        btn.appendChild(btnText);
        btn.appendChild(btnCountSpan);

        btn.onclick = () => {
          if (btnCountSpan.innerText != 0) {
            btnCountSpan.innerText--;
          } else {
            btn.classList.add("done");
          }
        };

        let reference = document.createElement("p");
        reference.className = "text-start h5 m-2";
        reference.style.cssText = "border-top: 1px solid rgba(0,0,0,.125);";
        let referenceNode = document.createTextNode(`${rep[i].reference}`);
        reference.appendChild(referenceNode);

        div.appendChild(count);
        div.appendChild(text);
        div.appendChild(btn);
        div.appendChild(reference);
        rowEvening.appendChild(div);
      }
    });
}

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
