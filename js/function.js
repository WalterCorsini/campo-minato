// desscription create cell
function createElem(number){
    const elem = document.createElement("div");
    elem.classList.add("cell");
    elem.innerHTML = number;
    return elem;
}

// description click event cell
function checkCell(){
    console.log(this.innerHTML);
    const currElem = parseInt(this.innerHTML);
    if(bombElem.includes(currElem)){
        this.style.backgroundColor = "red";
    } else {
        this.style.backgroundColor = "blue";
        point++;
        const resultElem = document.getElementById("result");
        resultElem.innerHTML = point;
        
    }
}

// create random bomb under cell
function createBomb(max,arraylength){
const resultArray=[];
while(resultArray.length < arraylength){
	const rndNum = Math.floor(Math.random() * max) + 1;
	if(!resultArray.includes(rndNum)){
		resultArray.push(rndNum);
    }
} 
console.log(resultArray);
return resultArray;
}