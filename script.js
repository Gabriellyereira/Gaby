document.addEventListener("DOMContentLoaded", function () {
    const board = document.getElementById("board");
    const cells = document.querySelectorAll(".cell");
    const result = document.getElementById("result");
    const resetBtn = document.getElementById("resetBtn");

    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    const checkWinner = () => {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (gameBoard[a] !== "" && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]) {
                return gameBoard[a];
            }
        }

        return gameBoard.includes("") ? null : "T"; // Retorna 'T' se houver empate
    };

    const handleClick = (index) => {
        if (gameBoard[index] === "" && !checkWinner()) {
            gameBoard[index] = currentPlayer;
            cells[index].textContent = currentPlayer;

            const winner = checkWinner();
            if (winner) {
                if (winner === "T") {
                    result.textContent = "Empate!";
                } else {
                    result.textContent = `Jogador ${winner} venceu!`;
                }
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        }
    };

    const resetGame = () => {
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        cells.forEach(cell => cell.textContent = "");
        result.textContent = "";
        currentPlayer = "X";
    };

    cells.forEach((cell, index) => {
        cell.addEventListener("click", () => handleClick(index));
    });

    resetBtn.addEventListener("click", resetGame);
});

    
