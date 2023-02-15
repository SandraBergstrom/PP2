

// Get buttons
let enterNameBtn = document.querySelector("#submit-name-btn");
let letsPlayBtn = document.querySelector("#lets-play-button");

// Get characters
let unicorn = document.querySelector("#unicorn");
let teddy = document.querySelector("#teddy");
let dragon = document.querySelector("#dragon");

let msg = document.querySelector("#msg");

let boxes = document.querySelectorAll(".board-box");



enterNameBtn.addEventListener("click", displayName);

// Will get the username and place it on the board. 
function displayName() {
    let username = document.getElementById("uname-input").value;
    document.getElementById("displayName").innerHTML = username;
}


// Puts and "O" to the box clicked on the board
boxes.forEach((box) => box.addEventListener("click", boxCheck));

function boxCheck() {
    this.innerHTML = "<h2>O</h2>";
}