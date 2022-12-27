const inputEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

const getFontSize = () => {    
return textEl.style.fontSize = inputEl.value + "px";     
}

inputEl.addEventListener("input", getFontSize);