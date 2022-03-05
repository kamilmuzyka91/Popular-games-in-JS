document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  const computerChoiceDisplay = document.getElementById("computer-choice");
  const userChoiceDisplay = document.getElementById("user-choise");
  const resultDisplay = document.getElementById("game-result");
  const possibleChoices = document.querySelectorAll("button");

  let userChoice;
  let computerChoice;
  let result;

  possibleChoices.forEach((possibleChoices) =>
    possibleChoices.addEventListener("click", (e) => {
      userChoice = e.target.id;
      userChoiceDisplay.innerHTML = userChoice;

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
    }
    if (computerChoice === "rock" && userChoice === "paper") {
      result = "Wygrałeś !";
    }
    if (computerChoice === "rock" && userChoice === "scissors") {
      result = "Przegrałeś !";
    }
    if (computerChoice === "paper" && userChoice === "rock") {
      result = "Przegrałeś !";
    }
    if (computerChoice === "paper" && userChoice === "scissors") {
      result = "Wygrałeś !";
    }
    if (computerChoice === "scissors" && userChoice === "rock") {
      result = "Wygrałeś !";
    }
    if (computerChoice === "scissors" && userChoice === "paper") {
      result = "Przegrałeś!";
    }

    resultDisplay.innerHTML = result;
  }
});
