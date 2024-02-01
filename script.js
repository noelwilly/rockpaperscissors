const buttons = document.querySelector("#buttons");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const winText = document.querySelector("#win");
const loseText = document.querySelector("#lose");
const drawText = document.querySelector("#draw");

buttons.addEventListener("click", function (e) {
  console.log(e.target.className);

  if (e.target.className == "rock") {
    playerschoice = "rock";
  } else if (e.target.className == "paper") {
    playerschoice = "paper";
  } else if (e.target.className == "scissors") {
    playerschoice = "scissors";
  }

  computerChoose();
  playGame();
  startHandAnimation();
});

function computerChoose() {
  let number = Math.floor(Math.random() * 3);
  if (number == 0) {
    computerschoice = "rock";
  } else if (number == 1) {
    computerschoice = "paper";
  } else if (number == 2) {
    computerschoice = "scissors";
  }
  console.log(computerschoice);
  return computerschoice;
}

function playGame() {
  if (playerschoice === computerschoice) {
    console.log("draw");
    result = "draw";
  } else if ((playerschoice === "rock" && computerschoice === "scissors") || (playerschoice === "scissors" && computerschoice === "paper") || (playerschoice === "paper" && computerschoice === "rock")) {
    console.log("win");
    result = "win";
  } else {
    console.log("lose");
    result = "lose";
  }
}

function startHandAnimation() {
  player1.classList.add("shake");
  player2.classList.add("shake");
  player1.addEventListener("animationend", handAnimationEnd);
}

function handAnimationEnd() {
  player1.classList.remove("shake");
  player2.classList.remove("shake");

  player1.classList.add(playerschoice);
  player2.classList.add(computerschoice);
}
