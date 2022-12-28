const inputEl = document.querySelector("#validation-input");
console.log(inputEl);
const inputLength = Number(inputEl.dataset.length);
console.log(inputLength);

const checkInputLength = (event) => {
  if (event.currentTarget.value.length === inputLength) {
    console.log(event.currentTarget.value.length);
    inputEl.classList.remove("invalid");
   inputEl.classList.add("valid");
  }else
  if (event.currentTarget.value !== inputLength) {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
};  


inputEl.addEventListener("blur", checkInputLength);
