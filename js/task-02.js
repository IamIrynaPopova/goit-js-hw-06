const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.getElementById("ingredients");
console.log(listEl);
 
for(const ingredient of ingredients){
 const createEl = document.createElement("li");
 createEl.textContent = ingredient;
 createEl.classList.add("item");
 listEl.append(createEl); 
}
