const items = document.querySelectorAll(".item");

console.log(`Numbers of categories: ${items.length}`);

items.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  const totalItem = item.querySelectorAll("li");
  console.log(`Elements: ${totalItem.length}`);
});
