const input = document.getElementById("validation-input");
input.addEventListener("blur", inputBlur);
const maxInputLength = parseInt(input.dataset.length);

function inputBlur() {
  if (input.value.length === maxInputLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
