/**
 * Description: create cell
 * @param {number} number
 * @returns {object}  // element HTML
 */
function createElem(number) {
  const elem = document.createElement("div");
  switch (difficult) {
    case "easy":
      elem.classList.add("easy", "cell");
      break;
    case "medium":
      elem.classList.add("medium", "cell");
      break;
    case "hard":
      elem.classList.add("hard", "cell");
      break;
  }
  elem.innerHTML = number;
  return elem;
}

// description controll Cell with bomb or Not
function checkCell() {
  const currElem = parseInt(this.innerHTML);

  if (bombElem.includes(currElem)) {
    this.style.backgroundColor = "red";
    const cellElems = document.querySelectorAll(".cell");
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
    if (point === maxPoints) {
      endGame("Winner");
    }
  }
}

/**
 * Description
 * @param {string} text
 *
 */
function endGame(text) {
  if (text === "Looser") {
    alert("hai perso!!! hai totalizzato " + point + " punti");
  } else if (text === "Winner") {
    alert("hai vinto!!!!!");
  }
}

// create random bomb under cell
/**
 * Description
 * @param {number} max  // max number random
 * @returns {object} // elemnt of bombArray
 */
function createBomb(max) {
  const resultArray = [];
  while (resultArray.length < max) {
    const rndNum = Math.floor(Math.random() * cell) + 1;
    if (!resultArray.includes(rndNum)) {
      resultArray.push(rndNum);
    }
  }
  return resultArray;
}
