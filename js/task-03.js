const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// var1--------------------------------------------------

// const listEl = document.querySelector(".gallery");
// console.log(listEl);
// for (const image of images) {
//   const createEl = document.createElement("li");
//   listEl.insertAdjacentElement("afterbegin", createEl);
//   const createImg = document.createElement("img");
//   const createElImg = createEl.insertAdjacentElement("beforeend", createImg);
//   createElImg.setAttribute("src", image.url);
//   createElImg.setAttribute("alt", image.alt);
// }
 
// var2--------------------------------------------------
const listEl = document.querySelector(".gallery");
console.log(listEl);

const createListItem = images.map(
  (image) => listEl.insertAdjacentHTML("beforeend", `<li><img src=${image.url} alt = ${image.alt}></li>`)).join("");

