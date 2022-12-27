function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const buttonEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const colorEl = document.querySelector(".color");

const getBackgroundColor = () => {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor= color;
  colorEl.textContent = color;
 }

buttonEl.addEventListener("click", getBackgroundColor);
