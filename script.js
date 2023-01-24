let size = prompt('How much number of squares per side do you want?')
let color = "black"
createBoard(size)

function createBoard(size){
    let board = document.querySelector('.board')

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for(let i=0; i<size*size; i++){
        let square = document.createElement('div');
        square.style.backgroundColor ='white';
        square.onmouseover = function(){
            this.style.backgroundColor = color;
        }
        square.onmouseout = function(){
            this.style.backgroundColor = "white";
        }
        board.appendChild(square);
    }
}

// function paint(size){
//     let board = document.querySelector('.board')

//     board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
//     board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
//     for(let i=0; i<size*size; i++){
//         let square = document.createElement('div');
//         square.style.backgroundColor ='white';
//         square.onmouseover = function(){
//             this.style.backgroundColor = color;
//         }
//         board.appendChild(square);
//     }
// }


// function colorSquare(){
//     this.style.backgroundColor = color;
// }

// function colorWhite(){
//     this.style.backgroundColor = "white";
// }

function changeColor(choice){
    color = choice;
}

function changeSize(input){
    if(input >=2 && input<=100){
        createBoard(input)
    }else {
        console.log("Number not available")
    }
}

// function changeColorRed(){
//     const redButton = document.querySelector('.redButton');
//     let square = document.querySelectorAll('.square')
    
//     redButton.addEventListener('click', function (event) {
//         let square = document.getElementsByClassName('square')
//         event.square.classList.add("blue-square")
//         })
// }

//      square.classList.add("blue-square");
//      console.log(list)
// })



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