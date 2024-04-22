function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberOfEl = document.querySelector("input");
const createBtn = document.querySelector(".create-btn");
const destroyBtn = document.querySelector(".destroy-btn");
const boxesEl = document.querySelector("#boxes");

function createBoxes(amount) {
  const arrayOfCreateBoxes = [];
  let sideSquare = 30;
  
  for (let i = 1; i <= amount; i++) {
   const createSquare = document.createElement("div");
  createSquare.style.width = `${sideSquare}px`;
  createSquare.style.height = `${sideSquare}px`;
  createSquare.classList.add("box-square");
  createSquare.style.backgroundColor = getRandomHexColor();
  sideSquare += 10; 
  arrayOfCreateBoxes.push(createSquare);
  }

  boxesEl.append(...arrayOfCreateBoxes); 
};

function destroyBoxes() {
  boxesEl.innerHTML = "";
};

const onClickCreate = () => {
  const getNumberOfEl = numberOfEl.value;
  if (getNumberOfEl >= 1 && getNumberOfEl <= 100) {
    numberOfEl.value = "";
    createBoxes(getNumberOfEl);
  }
}; 

createBtn.addEventListener("click", onClickCreate);
destroyBtn.addEventListener("click", () => {
  return destroyBoxes();
});
