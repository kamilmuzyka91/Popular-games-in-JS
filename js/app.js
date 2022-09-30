document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  const computerChoiceDisplay = document.getElementById("computer-choice");
  const userChoiceDisplay = document.getElementById("user-choice");
  const resultDisplay = document.getElementById("game-result");

  const possibleChoices = document.querySelectorAll("button");

  const userScoreDisplay = document.getElementById("user-score");
  const computerScoreDisplay = document.getElementById("computer-score");
  const drawDisplay = document.getElementById("draw");
  const roundNumberDisplay = document.getElementById("round");

  let userChoice;
  let computerChoice;
  let result;
  let userScore = 0;
  let computerScore = 0;
  let draw = 0;
  let clickCounter = 0;

  // placeholder list
  computerChoiceDisplay.innerText = "************";
  userChoiceDisplay.innerText = "************";
  resultDisplay.innerText = "************";
  userScoreDisplay.innerText = "0";
  computerScoreDisplay.innerText = "0";
  drawDisplay.innerText = "0";
  roundNumberDisplay.innerText = "0";

  possibleChoices.forEach((possibleChoices) =>
    possibleChoices.addEventListener("click", (e) => {
      userChoice = e.target.id;
      userChoiceDisplay.innerHTML = userChoice;

      clickCounter += 1;

      generateComputerChoiceDisplay();
      getResult();
    })
  );

  function generateComputerChoiceDisplay() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1); // form 0 to 2 + 1 never give 0

    if (randomNumber === 1) {
      computerChoice = "rock";
    }
    if (randomNumber === 2) {
      computerChoice = "paper";
    }
    if (randomNumber === 3) {
      computerChoice = "scissors";
    }

    computerChoiceDisplay.innerHTML = computerChoice;
  }

  function getResult() {
    if (computerChoice === userChoice) {
      result = "Remis !";
      draw += 1;
    }
    if (computerChoice === "rock" && userChoice === "paper") {
      result = "Wygrałeś !";
      userScore += 1;
    }
    if (computerChoice === "rock" && userChoice === "scissors") {
      result = "Przegrałeś !";
      computerScore += 1;
    }
    if (computerChoice === "paper" && userChoice === "rock") {
      result = "Przegrałeś !";
      computerScore += 1;
    }
    if (computerChoice === "paper" && userChoice === "scissors") {
      result = "Wygrałeś !";
      userScore += 1;
    }
    if (computerChoice === "scissors" && userChoice === "rock") {
      result = "Wygrałeś !";
      userScore += 1;
    }
    if (computerChoice === "scissors" && userChoice === "paper") {
      result = "Przegrałeś!";
      computerScore += 1;
    }

    resultDisplay.innerHTML = result;
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
    drawDisplay.innerHTML = draw;
    roundNumberDisplay.innerHTML = clickCounter;
  }
});
