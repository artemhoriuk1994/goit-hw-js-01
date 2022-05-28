const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach((ingredient) => {
  const newLi = document.createElement("li");
  newLi.classList.add("item");
  newLi.textContent = ingredient;
  const ul = document.getElementById("ingredients");
  ul.appendChild(newLi);
});
