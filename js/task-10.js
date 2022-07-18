function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const controlsContainer = document.querySelector('#controls');
const inputBtn = controlsContainer.firstElementChild;
const boxesContainer = document.querySelector('#boxes');

let sizeBoxes = 30;

createBtn.addEventListener('click', createBoxes);
const shapeEl = document.createElement('div');

function createBoxes() {
  const amountBoxes = inputBtn.value;

  for (let i = 0; i < amountBoxes; i++) {
    sizeBoxes += 10;
    const shapeEl = document.createElement('div');
    shapeEl.style.backgroundColor = getRandomHexColor();
    shapeEl.style.width = `${sizeBoxes}px`;
    shapeEl.style.height = `${sizeBoxes}px`;
    boxesContainer.appendChild(shapeEl);
    inputBtn.value = '';
  }
}

destroyBtn.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  while (boxesContainer.firstChild) {
    boxesContainer.firstChild.remove();
  }
  return;
}