const inputEl = document.getElementById("name-input");
const valueName = document.getElementById("name-output");

const setName = (event) => {
  inputEl.value !== ""
    ? (valueName.textContent = event.currentTarget.value)
    : (valueName.textContent = "Anonymous");
};

inputEl.addEventListener("input", setName);
