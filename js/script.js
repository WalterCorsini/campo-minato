const btnStart = document.getElementById("btn-start");
const containerElem = document.querySelector(".grid-container");
const cell = 100;
let point;

// create cell
for(let i=0; i<100; i++){
    containerElem.append(createElem(i));

}