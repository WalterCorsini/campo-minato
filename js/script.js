const btnStart = document.getElementById("btn-start");
const containerElem = document.querySelector(".grid-container");
let cell = 0;
let bomb = 0;
let point = 0;
let difficult;
let resultElem;
let resultpoint;
let maxPoints;
let bombElem;

btnStart.addEventListener("click", function () {
  difficult = document.getElementById("option").value;
  resultElem = document.getElementById("result-container");
  resultpoint = document.getElementById("result");
//  reset game
  containerElem.classList.remove("hidden");
  resultElem.classList.remove("hidden");
  containerElem.innerHTML = "";
  resultpoint.innerHTML = "0";
  point = 0;
// /reset game
if(difficult == "easy"){
  cell = 49;
  bomb = 8;
} else if(difficult == "medium"){
  cell = 81;
  bomb = 12;
} else {
  cell = 100;
  bomb = 16;
}
maxPoints = cell - bomb;
  // create cell
  for (let i = 1; i <= cell; i++) {
    const currElem = containerElem.append(createElem(i));
  }
  // creat event listener for cell
  const divElem = document.querySelectorAll("."+difficult);
  for (let i = 0; i < cell; i++) {
    console.log(i);
    divElem[i].addEventListener("click", checkCell);
  }
  
  // create bomb
  bombElem = createBomb();
});

