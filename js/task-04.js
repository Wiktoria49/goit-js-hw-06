let counterValue = 0;
const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');
const countClickEl = document.querySelector('#value');

decBtn.addEventListener('click', onDecBtnClick);
function onDecBtnClick() {
  counterValue -= 1;
  console.log((countClickEl.textContent = counterValue));
}

incBtn.addEventListener('click', onIncBtnClick);
function onIncBtnClick() {
  counterValue += 1;
  console.log((countClickEl.textContent = counterValue));
}