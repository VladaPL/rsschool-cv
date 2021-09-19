let menuButton = document.querySelector(".menu-btn");
let menu = document.querySelector('.menu');

menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("active");
  menu.classList.toggle("active");
});

