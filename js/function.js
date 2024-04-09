/**
 * Description: create cell
 * @param {number} number
 * @returns {object}  // element HTML
 */
function createElem(number) {
  
  const elem = document.createElement("div");
  switch(difficult){
    case "easy":
        elem.classList.add("easy", "cell"); break;  
    case "medium":
        elem.classList.add("medium","cell"); break; 
    case "hard":
        elem.classList.add("hard","cell"); break;   
  }
  elem.innerHTML = number;
  return elem;
}

// description controll Cell with bomb or Not
function checkCell() {
  console.log(this.innerHTML);
  const currElem = parseInt(this.innerHTML);

  if (bombElem.includes(currElem)) {
    this.style.backgroundColor = "red";
    const cellElems = document.querySelectorAll(".cell");
    console.log(cellElems);
    for (let i = 0; i < cellElems.length; i++) {
      const elem = cellElems[i];
      elem.style.pointerEvents = "none";
    }
    endGame("Looser");
  } else {
    this.style.pointerEvents = "none";
    this.style.backgroundColor = "blue";
    point++;
    const resultElem = document.getElementById("result");
    resultElem.innerHTML = point;
    if (point === maxPoints) endGame("Winner");
  }
}

/**
 * Description
 * @param {string} text
 *
 */
function endGame(text) {
  if (text === "Looser") {
    alert(
      "hai perso!!! hai totalizzato " + point + " punti");
  } else if (text === "Winner") {
    alert("hai vinto!!!!!");
  }
}

// create random bomb under cell
/**
 * Description
 * @param {number} max  // max number random
 * @param {number} arraylength //  max number of bomb
 * @returns {object} // elemnt of bombArray
 */
function createBomb() {
  const resultArray = [];
  while (resultArray.length < bomb) {
    const rndNum = Math.floor(Math.random() * cell) + 1;
    if (!resultArray.includes(rndNum)) {
      console.log(typeof resultArray);
      resultArray.push(rndNum);
    }
  }
  console.log(resultArray ,"array bomb");
  return resultArray;
}
