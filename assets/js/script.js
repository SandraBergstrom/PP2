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

// Will get the username, place it on the board and show next section.
enterNameBtn.addEventListener("click", displayName);

function displayName() {
  let username = document.getElementById("uname-input").value;
  document.getElementById("displayName").innerHTML = username;
  if (username == "") {
    msgWin.textContent = `Please let me know your name!`;
    msgWin.style.color = "#F6A38E";
    setTimeout(eraseName, 3000);
  } else {
    let pickCharacter = document.querySelector("#character-area");
    pickCharacter.style.display = "flex";
  }
  setTimeout(noName, 2000);
  function eraseName() {
    msgWin.style.color = "white";
  }
}

// Will show the game section
letsPlayBtn.addEventListener("click", letsPlay);

function letsPlay() {
  let board = document.querySelector("#game-section");
  board.style.display = "flex";
}

/*
First part of this function is very inspired from https://www.youtube.com/watch?v=GTLLnF30up4&t=501s and will 
check if the the latest box that was checked will win
*/
function checkIfWin() {
  winCombos.forEach(function (combination) {
    let check = combination.every(
      (idx) => boxes[idx].innerText.trim() == currentPlayer
    );
    if (check) {
      msgWin.textContent = `The winner is ${currentPlayer}!`;
      msgWin.style.color = "#F6A38E";
      let winner = `${currentPlayer}`;
        if (winner === "X") {
            increasePlayerScore();
        } else if (winner === "O") {
            increaseRobotoScore();
        }
    }
  });
}

function increasePlayerScore() {
    let oldScore = parseInt(document.querySelector("#player-score").innerText);
    document.querySelector("#player-score").innerText = ++oldScore;
}

function increaseRobotoScore() {
    let oldScoreRoboto = parseInt(document.querySelector("#roboto-score").innerText);
    document.querySelector("#roboto-score").innerText = ++oldScoreRoboto;
}

/* /function checkIfDraw() {
    if (boxes.some(box => box.textContent == "")) {
        msgWin.textContent = `It's a draw!`;
        msgWin.style.color = "#F6A38E";
    }
} */

// Puts and "O" to the box clicked on the board and then make it Robotos turn
boxes.forEach((box) => box.addEventListener("click", boxCheck));

function boxCheck() {
  if (this.innerText.trim() != "") return;
  this.innerText = currentPlayer;
  checkIfWin();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  robotosTurn();
}

function robotosTurn() {
  let play = 0;
  do {
    play = Math.floor(Math.random() * 9);
  } while (boxes[play].textContent !== "");
  boxes[play].textContent = "O";
  checkIfWin();
  currentPlayer = currentPlayer === "O" ? "X" : "O";
}
