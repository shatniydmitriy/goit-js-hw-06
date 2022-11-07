const refs = {
  btn: document.querySelector('.change-color'),
  bodyColor: document.querySelector('body'),
  spanColor: document.querySelector('.color'),

};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
refs.btn.addEventListener("click", onClickBtnChangeColor);
function onClickBtnChangeColor(event) {
  refs.bodyColor.style.backgroundColor = getRandomHexColor();
  refs.spanColor.textContent = refs.bodyColor.style.backgroundColor;
}
