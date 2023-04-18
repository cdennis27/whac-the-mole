let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;



window.onload = function() {
    setGame();
}

function setGame() {
    for(let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);

    }

    setInterval(setMole, 1000); //2 seconds
    setInterval(setPlant, 500); //2 seconds
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {

    if (gameOver) {
        return;
    }

    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";

    let num = getRandomTile();
    if(currPlantTile && currPlantTile.id === num) {
        num = getRandomTile();
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);

}

function setPlant() {

    if (gameOver) {
        return;
    }

    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png";

    let num = getRandomTile();
    if(currMoleTile && currMoleTile.id === num) {
        num = getRandomTile();
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);

}

function selectTile() {

    if (gameOver) {
        return;
    }

    if (this == currMoleTile) {
        score += 1;
        document.getElementById("score").innerText = score.toString();
    } else if (this == currPlantTile) {
        gameOver = true;
        document.getElementById("score").innerText = "Game Over: " + score.toString();
    }

}


