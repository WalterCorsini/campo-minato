const btnStart = document.getElementById("btn-start");
const containerElem = document.querySelector(".grid-container");
const cell = 100;
let point;

// create cell
for(let i=1; i<=100; i++){
    const currElem = containerElem.append(createElem(i));
}

const divElem = document.querySelectorAll(".cell");
for(let i=0; i<100; i++){
    divElem[i].addEventListener("click", checkCell);
}