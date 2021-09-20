let menuButton = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");

menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("active");
  menu.classList.toggle("active");
});

let links = document.querySelectorAll('a[href*="#"]');

for (let link of links) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const blockId = link.getAttribute("href");
    document.querySelector("" + blockId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

console.log("Здравствуй, уважаемый проверяющий!=) \n Самооценка CV: 145 / 150");
