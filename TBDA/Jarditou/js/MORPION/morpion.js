var currentPlayer = "X";
var squares = document.querySelectorAll(".square");

function changePlayer() {
    if (currentPlayer === "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
}

function checkWin() {
    var winningCombos = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    for (var i = 0; i < winningCombos.length; i++) {
        var combo = winningCombos[i];
        var square1 = document.getElementById("square-" + combo[0]);
        var square2 = document.getElementById("square-" + combo[1]);
        var square3 = document.getElementById("square-" + combo[2]);

        if (square1.innerHTML !== "" && square1.innerHTML === square2.innerHTML && square1.innerHTML === square3.innerHTML) {
            return true;
        }
    }

    return false;
}

function handleClick() {
    if (this.innerHTML !== "") {
        return;
    }

    this.innerHTML = currentPlayer;

    if (checkWin()) {
        alert(currentPlayer + " wins!");
        return;
        location.reload();
    }

    changePlayer();
}

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", handleClick);
}
