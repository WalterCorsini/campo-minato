/**
 * Description: create cell
 * @param {number} number
 * @returns {object}  // element HTML
 */
function createElem(number) {
  const elem = document.createElement("div");
  elem.classList.add("cell");
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
function createBomb(max, arraylength) {
  const resultArray = [];
  while (resultArray.length < arraylength) {
    const rndNum = Math.floor(Math.random() * max) + 1;
    if (!resultArray.includes(rndNum)) {
      console.log(typeof resultArray);
      resultArray.push(rndNum);
    }
  }
  console.log(resultArray);
  return resultArray;
}
