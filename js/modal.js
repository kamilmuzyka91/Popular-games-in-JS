const primary__btn = document.querySelector(".btn-primary");
const primary__warning = document.querySelector(".btn-warning");
const modal = document.querySelector(".modal");

primary__btn.addEventListener("click", () => {
  const wrapper = document.querySelector(".wrapper");
  const modal = document.querySelector(".modal");

  wrapper.style = "display:none";
  modal.style = "display:block";
  window.open("game.html");
  window.close();
});

primary__warning.addEventListener("click", () => {
  localStorage.clear();
  window.close();
});
