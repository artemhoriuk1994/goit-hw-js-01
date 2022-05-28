const colors = document.querySelector(".color");
const changeBtn = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
changeBtn.addEventListener("click", () => {
  const colorStyle = getRandomHexColor();
  document.body.style.background = colorStyle;
  colors.textContent = colorStyle;
});
