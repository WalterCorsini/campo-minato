const btnStart = document.getElementById("btn-start");
const containerElem = document.querySelector(".grid-container");
const cell = 100;
const bomb = 16;
let maxPoints = cell - bomb;
let point = 0;

btnStart.addEventListener("click", function () {
  const resultElem = document.getElementById("result-container");
  const resultpoint = document.getElementById("result");
  containerElem.classList.remove("hidden");
  containerElem.innerHTML = "";
  resultpoint.innerHTML = "0";
  point = 0;

  resultElem.classList.remove("hidden");

  // create cell
  for (let i = 1; i <= cell; i++) {
    const currElem = containerElem.append(createElem(i));
  }
  // creat event listener for cell
  const divElem = document.querySelectorAll(".cell");
  for (let i = 0; i < 100; i++) {
    divElem[i].addEventListener("click", checkCell);
  }
});

// create bomb
const bombElem = createBomb(cell, bomb);
