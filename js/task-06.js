const inputEl = document.querySelector("#validation-input");
console.log(inputEl);
const inputLength = Number(inputEl.dataset.length);
console.log(inputLength);

const checkInputLength = (event) => {
  if (event.currentTarget.value.length > inputLength) {
    return inputEl.classList.add("invalid");
  }
  if (event.currentTarget.value === "") {
    return inputEl.classList.remove("valid");
  }
  inputEl.classList.remove("invalid");
  return inputEl.classList.add("valid");
};

inputEl.addEventListener("blur", checkInputLength);
