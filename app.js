const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result > p");
const rockbtn = document.getElementById("r");
const paperbtn = document.getElementById("p");
const scissorsbtn = document.getElementById("s");
const newGameBtn = document.getElementById("newgame");

let userScores = 0;
let computerScores = 0;

/* generate random choice for computer */
function randomComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choice.length);
  return choice[randomChoice];
}

result.textContent = ""; /* Start page with no one win or lose */

/* Convert r,p,s to real words */
function indexToWords(index) {
  if (index === "r") {
    return "Rock";
  }
  if (index === "p") {
    return "Paper";
  } else {
    return "Scissors";
  }
}

/* functions for DOM. Defining what user pick and what computer pick with parameters*/
function win(userPick, computerPick) {
  userScores++; /* increment userscore by 1 */
  userScore.textContent = userScores; /* write it to span */
  computerScores = computerScores; /* computer score is same */
  result.textContent =
    indexToWords(userPick) + " beat " + computerPick + " you Win!";
}

function lose(userPick, computerPick) {
  computerScores++; /* increment computerscore by 1 */
  computerScore.textContent = computerScores; /* write it to span */
  userScores = userScores; /* user score is same */
  result.textContent =
    indexToWords(userPick) + " doesn't beat " + computerPick + " you Lose!";
}

function draw(userPick, computerPick) {
  computerScores++; /* increment computerscore by 1 */
  userScores++; /* increment computerscore by 1 */
  userScore.textContent = userScores; /* write it to span */
  computerScore.textContent = computerScores; /* write it to span */
  result.textContent =
    indexToWords(userPick) + " equal to " + computerPick + " it's Draw!";
}

/* Game play comparision all statements */
function play(userPick) {
  const computerPick = randomComputerChoice();

  if (
    (userPick === "r" && computerPick === "scissors") ||
    (userPick === "p" && computerPick === "rock") ||
    (userPick === "s" && computerPick === "paper")
  ) {
    win(userPick, computerPick); /* calling the function win with parameters */
  } else if (
    (userPick === "r" && computerPick === "paper") ||
    (userPick === "p" && computerPick === "scissors") ||
    (userPick === "s" && computerPick === "rock")
  ) {
    lose(userPick, computerPick); /* calling the function win with parameters */
  } else {
    draw(userPick, computerPick); /* calling the function win with parameters */
  }
}

/* make btn works */
rockbtn.addEventListener("click", function () {
  play("r"); /* calling the function with parameter */
});

paperbtn.addEventListener("click", function () {
  play("p");
});

scissorsbtn.addEventListener("click", function () {
  play("s");
});

newGameBtn.addEventListener("click", function () {
  result.textContent = "";
  userScores = 0;
  computerScores = 0;
  userScore.textContent = userScores;
  computerScore.textContent = computerScores;
});
