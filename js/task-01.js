const categoriesEl = document.querySelector("#categories");
const categoriesItems = categoriesEl.children;
const amountCategories = categoriesItems.length;
console.log('Number of categories:', amountCategories);

const categoriesItemsEl = document.querySelectorAll(".item");
categoriesItemsEl.forEach((category) =>
  console.log(
    "Category:",
    category.firstElementChild.textContent,
    "Elements:",
    category.lastElementChild.children.length)
);
