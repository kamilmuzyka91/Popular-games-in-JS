let userId = document.querySelector("#name");
const button = document.querySelector(".button");

let newName = "";

button.addEventListener("click", (e) => {
  e.preventDefault;

  userId.dataset.user = userId.value;
  newName = userId.value;

  saveNamToLocalStorage();
  window.open("game.html");
  window.close();
});

function saveNamToLocalStorage() {
  localStorage.setItem("name", newName);
}
