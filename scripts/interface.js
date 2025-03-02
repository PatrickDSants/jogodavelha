document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    });

    let button = document.getElementById("button");
    button.addEventListener("click", resetGame);
});

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        setTimeout(() => {
            alert("O jogo acabou! O vencedor foi: " + symbols[playerTime]);
        }, 10);
    }
    updateSquare(position);
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    
    if (symbol !== '') {
        square.innerHTML = `<div class='${symbol}'></div>`;
    }
}

function updateSquares() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol !== '') {
            square.innerHTML = `<div class='${symbol}'></div>`;
        }
    });
}

function resetGame() {
    let squares = document.querySelectorAll(".square");
    
    squares.forEach(square => square.innerHTML = '');

    board = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;
    playerTime = 0;
}
