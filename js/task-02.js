const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const listItems = ingredients.map((ingredient) => {
  const li = document.createElement("li");

  li.textContent = ingredient;
  li.classList.add("item");

  return li;
});

list.append(...listItems);

console.log(list);
