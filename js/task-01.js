// Task 1
const navItem = document.querySelectorAll(".item");

console.log("Number of categories: ", navItem.length);

navItem.forEach((item) => {
  const navTitles = item.querySelector("h2");
  console.log("Category: ", navTitles.textContent);

  const amount = item.querySelectorAll("ul > li");
  console.log("Elements: ", amount.length);
});
