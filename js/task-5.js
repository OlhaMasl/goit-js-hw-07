function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColour = document.querySelector("body");
const spanColor = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

const onClickBtn = () => {
  bodyColour.style.backgroundColor = getRandomHexColor();
  const currentColor = bodyColour.style.backgroundColor;
  spanColor.style.color = currentColor;
};

changeColorBtn.addEventListener("click", onClickBtn);