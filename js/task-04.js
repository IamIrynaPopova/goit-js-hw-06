const valueEl = document.getElementById("value");
const btnDecrementEl = document.querySelector('button[data-action="decrement"]');
const btnIncrementEl = document.querySelector(
  'button[data-action="increment"]'
);


let counterValue = 0;

const buttonClickDecrement = () => {
if (valueEl.textContent>0) { 
counterValue += Number(btnDecrementEl.textContent);
return valueEl.textContent = counterValue;
}};

const buttonClickIncrement = () => {
counterValue += Number(btnIncrementEl.textContent);
return valueEl.textContent = counterValue;
 };


btnDecrementEl.addEventListener('click',buttonClickDecrement);
btnIncrementEl.addEventListener("click",buttonClickIncrement);
