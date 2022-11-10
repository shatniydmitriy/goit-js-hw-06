const inputElm = document.querySelector("#validation-input");
inputElm.addEventListener("blur", onBlur);

function onBlur(event) {
  const input = event.currentTarget;
  const inputLength = Number(input.dataset.length);

  if (input.value.length === inputLength) {
    inputChenge();
  } else {
    elseInputChange();
  }
}
 
function inputChenge() {
input.classList.remove("invalid");
    input.classList.add("valid");
}
function elseInputChange() {
  input.classList.remove("valid");
    input.classList.add("invalid");
}




