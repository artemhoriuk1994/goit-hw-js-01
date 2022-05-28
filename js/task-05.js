const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", () => {
  const anon = "Anonymous";
  if (input.value === "") {
    output.innerHTML = anon;
  } else {
    output.innerHTML = input.value.trim(" ");
  }
});
