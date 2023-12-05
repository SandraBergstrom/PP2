// Get buttons
let enterNameBtn = document.querySelector("#submit-name-btn");
let letsPlayBtn = document.querySelector("#lets-play-button");

// Get characters
let unicorn = document.querySelector("#unicorn");
let teddy = document.querySelector("#teddy");
let dragon = document.querySelector("#dragon");

let msgName = document.querySelector("#msg-name");
let msgWin = document.querySelector("#msg-win");
let boxes = document.querySelectorAll(".board-box");
let turnCounter = 0;

let currentPlayer = "X";
let winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Flag game over to not run the robotosTurn function
let gameOver = false;

document.querySelector("#uname-input").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            displayName();
        }
    });

// Will get the username, place it on the board and show next section.
enterNameBtn.addEventListener("click", displayName);

function displayName() {
    let username = document.getElementById("uname-input").value;
    document.getElementById("displayName").innerHTML = `<h2>${username}</h2>`;
    if (username.trim() == "") {
        msgName.textContent = `Please let me know your name!`;
        msgName.style.color = "#F6A38E";
        setTimeout(eraseName, 3000);
    } else {
        // Show pick Character section and hide name section. 
        let pickCharacter = document.querySelector("#character-area");
        pickCharacter.style.display = "flex";
        let nameArea = document.querySelector("#name-area");
        nameArea.style.display = "none";
    }

    function eraseName() {
        msgName.style.color = "white";
    }
}

// Will pick the unicorn character and show the game section
unicorn.addEventListener("click", letsPlayUnicorn);

function letsPlayUnicorn() {
    let board = document.querySelector("#game-section");
    board.style.display = "flex";

    let gameMsg = document.querySelector("#game-msg");
    gameMsg.style.display = "flex";

    let playerIcon = document.querySelector("#display-character-icon");
    playerIcon.innerHTML = ` 
        <img 
            src = "assets/images/unicorn.png" 
            alt = "unicorn icon" 
            style = "
                width: 75px;
                background-color: #FDB0D1;
                border: none;
                height: auto;
                padding: 15px;
                border-radius: 25%;
            "
        />
    `;
    let nameArea = document.querySelector("#name-area");
        nameArea.style.display = "none";
    let pickCharacter = document.querySelector("#character-area");
        pickCharacter.style.display = "none";
}

// Will pick the teddy bear character and show the game section
teddy.addEventListener("click", letsPlayTeddy);

function letsPlayTeddy() {
    let board = document.querySelector("#game-section");
    board.style.display = "flex";

    let gameMsg = document.querySelector("#game-msg");
    gameMsg.style.display = "flex";

    let playerIcon = document.querySelector("#display-character-icon");
    playerIcon.innerHTML = ` 
        <img 
            src = "assets/images/teddy-bear.png" 
            alt = "teddy bear icon" 
            style = "
                width: 75px;
                background-color: #FFF1AD;
                border: none;
                height: auto;
                padding: 15px;
                border-radius: 25%;
            "
        />
    `;
    let nameArea = document.querySelector("#name-area");
        nameArea.style.display = "none";
    let pickCharacter = document.querySelector("#character-area");
        pickCharacter.style.display = "none";
}

// Will pick the dragon bear character and show the game section
dragon.addEventListener("click", letsPlayDragon);

function letsPlayDragon() {
    let board = document.querySelector("#game-section");
    board.style.display = "flex";
    let gameMsg = document.querySelector("#game-msg");
    gameMsg.style.display = "flex";
    let playerIcon = document.querySelector("#display-character-icon");
    playerIcon.innerHTML = ` 
        <img 
            src = "assets/images/dragon.png" 
            alt = "dragon icon" 
            style = "
                width: 75px;
                background-color: #64A6BD;
                border: none;
                height: auto;
                padding: 15px;
                border-radius: 25%;
            "
        />
    `;
    let nameArea = document.querySelector("#name-area");
        nameArea.style.display = "none";
    let pickCharacter = document.querySelector("#character-area");
        pickCharacter.style.display = "none";
}

// Will clear the board
letsPlayBtn.addEventListener("click", playAgain);

function playAgain() {
    msgWin.innerHTML = "<h2>Let's play!</h2>";
    letsPlayBtn.style.backgroundColor = "white";
    msgWin.style.color = "#F6A38E";
    msgWin.style.fontSize = "48px";
    // msgWin.style.color = "white";
    gameOver = false;
    boxes.forEach((box) => {
        box.innerText = "";
        box.addEventListener("click", boxCheck);
    });
    turnCounter = 0;
    currentPlayer = "X";
}

// Check if the the latest box that was checked will win or be a draw
function checkIfWin() {
    winCombos.forEach(function (combination) {
        let check = combination.every(
            (i) => boxes[i].innerText.trim() == currentPlayer
        );
        if (check) {
            msgWin.style.color = "#F6A38E";
            letsPlayBtn.innerText = "Play again!";
            letsPlayBtn.style.backgroundColor = "#F6A38E";
            letsPlayBtn.style.borderRadius = "5px";
            letsPlayBtn.style.padding = "10px 15px";
            letsPlayBtn.style.color = "white";
            letsPlayBtn.style.fontSize = "24px";

            let winner = `${currentPlayer}`;
            if (winner === "X") {
                increasePlayerScore();
                let username = document.getElementById("uname-input").value;
                msgWin.textContent = `The winner is ${username}!`;
                gameOver = true; // Set gameOver to true
                return true;
                // turnCounter = ++1;
            } else if (winner === "O") {
                increaseRobotoScore();
                msgWin.textContent = `The winner is Roboto!`;
                gameOver = true; // Set gameOver to true
                return true;
                // turnCounter = ++1;
            } 
        } else if (isFilled()) {
            // make it impossible to click in any box
            boxes.forEach((box) => box.removeEventListener("click", boxCheck));
            gameOver = true; // Set gameOver to true
            msgWin.textContent = `It's a draw!`;
            msgWin.style.color = "#F6A38E";
            letsPlayBtn.innerText = "Play again!";
            letsPlayBtn.style.backgroundColor = "#F6A38E";
            letsPlayBtn.style.borderRadius = "5px";
            letsPlayBtn.style.padding = "10px 15px";
            letsPlayBtn.style.color = "white";
            letsPlayBtn.style.fontSize = "24px";
            
        } 
    });
    // If there's no winner, return false
    return false;
}

let isFilled = () => {
    return Array.from(boxes).filter(box => box.textContent !== "").length === 8;
};

// Below functions will increase winners score
function increasePlayerScore() {
    let oldScore = parseInt(document.querySelector("#player-score").innerText);
    document.querySelector("#player-score").innerText = ++oldScore;
}

function increaseRobotoScore() {
    let oldScoreRoboto = parseInt(document.querySelector("#roboto-score").innerText);
    document.querySelector("#roboto-score").innerText = ++oldScoreRoboto;
}

// Puts and "O" to the box clicked on the board and then make it Robotos turn
boxes.forEach((box) => box.addEventListener("click", boxCheck));

function boxCheck() {
    // If the box is already filled
    if (this.innerText.trim() !== "" || gameOver) return;

    this.innerText = currentPlayer;
    if (checkIfWin()) {
        gameOver = true;
        return;
    }
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    turnCounter++;
    if(turnCounter < 9 && !gameOver){
        // make it impossible to click in any box
        boxes.forEach((box) => box.removeEventListener("click", boxCheck));
        // wait 2 seconds before playing
        setTimeout(function () {
        robotosTurn();
        }, 1000); 
    }
}

// Makes Roboto play 
function robotosTurn() {
    if (gameOver) return;
    turnCounter++;
    let play = -1;
    do {play = Math.floor(Math.random() * 9);} 
    while (boxes[play].textContent !== "");
    boxes[play].textContent = "O";
    checkIfWin();
    currentPlayer = currentPlayer === "O" ? "X" : "O";
    // make it possible to click empty boxes again
    boxes.forEach((box) => box.addEventListener("click", boxCheck));
}