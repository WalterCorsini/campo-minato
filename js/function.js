function createElem(number){
    const elem = document.createElement("div");
    elem.classList.add("cell");
    elem.innerHTML = number;
    return elem;
}