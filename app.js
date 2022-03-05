document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  const computerChoiceDisplay = document.getElementById("computer-choice");
  const userChoiceDisplay = document.getElementById("user-choise");
  const resultDisplay = document.getElementById("game-result");
  const possibleChoices = document.querySelectorAll("button");

  let userChoice;

  possibleChoices.forEach((possibleChoices) =>
    possibleChoices.addEventListener("click", (e) => {
      userChoice = e.target.id;
      userChoiceDisplay.innerText = userChoice;

      generateComputerChoiseDisplay();
    })
  );

  function generateComputerChoiseDisplay() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1); // form 0 to 2 + 1 never give 0
    console.log(randomNumber);
  }
});
