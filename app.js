document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  const computerChoiceDisplay = document.getElementById("computer-choice");
  const userChoiceDisplay = document.getElementById("user-choise");
  const resultDisplay = document.getElementById("game-result");
  const possibleChoices = document.querySelectorAll("button");

  let userChoice;
  let computerChoice;

  possibleChoices.forEach((possibleChoices) =>
    possibleChoices.addEventListener("click", (e) => {
      userChoice = e.target.id;
      userChoiceDisplay.innerHTML = userChoice;

      generateComputerChoiceDisplay();
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
});
