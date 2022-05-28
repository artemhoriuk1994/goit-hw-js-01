const input = document.getElementById("font-size-control");
const text = document.getElementById("text");
input.addEventListener("input", () => {
  let size = input.value;
  text.style.fontSize = size + "px";
});
