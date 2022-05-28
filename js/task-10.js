const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const remove = document.querySelector("button[data-remove]");
const boxes = document.getElementById("boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  createBtn.addEventListener("click", () => {
    amount = inpu.value;
    for (let i = 0; i <= amount; i++) {
      let div = document.createElement("div");
      div.innerHTML = i;
      parent.appendChild(div);
    }
  });
}
