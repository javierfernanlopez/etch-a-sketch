let size = prompt('How much number of squares per side do you want?')

let board = document.querySelector('.board')

board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

for(let i=0; i<size*size; i++){
    let square = document.createElement('div');
    square.classList.add("square");
    board.appendChild(square);
}


// let redButton = document.querySelector('.redButton');
// redButton.addEventListener('mouseenter', function(event) {
//     event.target.style.color = "red";
// }, false)

// redButton.addEventListener('mouseleave', function(event) {
//     event.target.style.color = "";
// }, false)


// function createGrid(){
//     for(let i=0; i<16; i++){
//         let grid = document.createElement('div')
//         grid.classList.add('grid-element')
//         container.appendChild(grid)
//     }
// }

// createGrid()