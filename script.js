const container = document.querySelector(".container");

let gridSize = 32;

function generateGrid(gridSize = 16) {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", addColor)

            row.appendChild(square);
        }

    container.appendChild(row);
    }
} 

generateGrid();

function addColor() {
    this.classList.add("mouseover");
}