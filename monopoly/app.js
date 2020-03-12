var board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160];
console.log(board);

// PLAYER 1

var player1_button = document.getElementById('player-1');

console.log(player1_button);

player1_button.addEventListener('click', rollDice_1);

// PLAYER 2

var player2_button = document.getElementById('player-2');

console.log(player2_button);

player2_button.addEventListener('click', rollDice_2);

var player1 = ["shiva ", 0, 1000];
var player2 = ["jeeva", 0, 1000];

function rollDice_1() {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("PLAYER 1 DICE", position);
    changeposition_1(player1[1], position);
}

function changeposition_1(oldposition, currentposition) {
    var newposition = oldposition + currentposition;
    player1[1] = newposition;
    console.log(player1[1]);
    updateMoney_1(player1[1]);
}

function updateMoney_1(p1) {
    var updateMoney = 0;
    if (p1 < board.length) {
        updateMoney = player1[2] - board[p1 - 1];
    } else {
        p1 = p1 % 15;
        updateMoney = player1[2] - board[p1 - 1];
    }
    console.log(updateMoney);
}

// PLAYER 2

function rollDice_2() {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("PLAYER 1 DICE", position);
    changeposition_1(player2[1], position);
}

function changeposition_1(oldposition, currentposition) {
    var newposition = oldposition + currentposition;
    player2[1] = newposition;
    console.log(player2[1]);
    updateMoney_1(player2[1]);
}

function updateMoney_1(p2) {
    var updateMoney = 0;
    if (p2 < board.length) {
        updateMoney = player2[2] - board[p2 - 1];
    } else {
        p2 = p2 % 15;
        updateMoney = player2[2] - board[p2 - 1];
    }
    console.log(updateMoney);
}