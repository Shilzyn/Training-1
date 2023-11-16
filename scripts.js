function appendToResult(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function calculateResult() {
    const result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
}

function generateQuote() {
    const quotes = [
        "Life is what happens when you're busy making other plans. - John Lennon",
        "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
        "The purpose of our lives is to be happy. - Dalai Lama",
        "Life is really simple, but we insist on making it complicated. - Confucius",
        "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
        "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll"
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    document.getElementById("quote").innerText = randomQuote;
}

// Existing functions from previous examples (calculator and quote generator)

function addTodo() {
    const todoItem = document.getElementById("todo-item").value;
    if (todoItem.trim() !== "") {
        const todoList = document.getElementById("todo-list-items");
        const listItem = document.createElement("li");
        listItem.innerText = todoItem;
        todoList.appendChild(listItem);
        document.getElementById("todo-item").value = "";
    } else {
        alert("Please enter a valid todo item.");
    }
}

let currentPlayer = 'X';
let gameActive = true;
const gameState = ['', '', '', '', '', '', '', '', ''];
const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function placeMark(cellIndex) {
    if (gameActive && gameState[cellIndex] === '') {
        gameState[cellIndex] = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;

        if (checkWin()) {
            document.getElementById('game-status').innerText = `Player ${currentPlayer} wins!`;
            gameActive = false;
        } else if (!gameState.includes('')) {
            document.getElementById('game-status').innerText = `It's a draw!`;
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('game-status').innerText = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWin() {
    return winningConditions.some(condition => {
        return condition.every(index => {
            return gameState[index] === currentPlayer;
        });
    });
}

function resetGame() {
    currentPlayer = 'X';
    gameActive = true;
    gameState.fill('');
    document.getElementById('game-status').innerText = `Player ${currentPlayer}'s turn`;

    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerText = '';
    }
}
