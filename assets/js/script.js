

// Get buttons
let enterNameBtn = document.querySelector("#submit-name-btn");
let letsPlayBtn = document.querySelector("#lets-play-button");

// Get characters
let unicorn = document.querySelector("#unicorn");
let teddy = document.querySelector("#teddy");
let dragon = document.querySelector("#dragon");

let msg = document.querySelector("#msg");

let boxes = document.querySelectorAll(".board-box");
console.log(boxes);


enterNameBtn.addEventListener("click", displayName);

// Will get the username and place it on the board. 
function displayName() {
    let username = document.getElementById("uname-input").value;
    document.getElementById("displayName").innerHTML = username;
}