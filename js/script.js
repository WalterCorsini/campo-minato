const btnStart = document.getElementById("btn-start");
const containerElem = document.querySelector(".grid-container");
const bombElem =[];
const cell = 100;
const bomb = 16;
let point;

// create cell
for(let i=1; i<=100; i++){
    const currElem = containerElem.append(createElem(i));
}

// creat event listener for cell
const divElem = document.querySelectorAll(".cell");
for(let i=0; i<100; i++){
    divElem[i].addEventListener("click", checkCell);
}

// create bomb
createBomb(cell,bomb);
