let countValue = 0;
const counter = document.getElementById("value");

const incrementBtn = document.querySelector('button[ data-action="increment"]');
const decrementBtn = document.querySelector('button[ data-action="decrement"]');

incrementBtn.addEventListener("click", () => {
  countValue += 1;
  counter.innerHTML = countValue;
});

decrementBtn.addEventListener("click", () => {
  countValue -= 1;
  counter.innerHTML = countValue;
});
