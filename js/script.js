// INPUT
// declaration variable
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
  difficult = document.getElementById("option").value;              //  DIFFICULT IN THE TAG SELECT.VALUE
  resultElem = document.getElementById("result-container");         //  CONTAINER POINT OF GAME
  resultpoint = document.getElementById("result");                  //  DISPLAY POINT
//  reset game
  containerElem.classList.remove("hidden");                         // REMOVE CLASS HIDDEN TO GAME CONTAINER
  resultElem.classList.remove("hidden");                            // REMOVE CLASS HIDDER TO POINT CONTAINER
  containerElem.innerHTML = "";                                     // CLEAR GAME CONTAINER
  resultpoint.innerHTML = "0";                                      // RESET DISPLAY POINT
  point = 0;                                                        // RESET POINT
// /reset game
if(difficult == "easy"){                                            // VALUE CELL AND BOMB BASED OF DIFFICULT CHOICE
  cell = 49;
  bomb = 5;
} else if(difficult == "medium"){
  cell = 81;
  bomb = 10;
} else {
  cell = 100;
  bomb = 30;
}
maxPoints = cell - bomb;                                            //CALC MAX GOOD CLICK ON GAME
  // create cell
  for (let i = 1; i <= cell; i++) {                       
    const currElem = containerElem.append(createElem(i));           // CREATE CELL
  }
  // creat event listener for cell
  const divElem = document.querySelectorAll("."+difficult);         // CREATE CLICK ON CELL FOR CLASS CHOICE
  for (let i = 0; i < cell; i++) {
    divElem[i].addEventListener("click", checkCell);                // EVENT CLICK ON CELL
  }
  
  // create bomb
  bombElem = createBomb(bomb);                                          // CREATE BOMB
});

