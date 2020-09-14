// Mobile menu
document.querySelector(".burger-wrap").onmouseout = function () {
  document.querySelector(".burger").classList.toggle("burger_active");
};
document.querySelector(".burger-wrap").onmouseover = function () {
  document.querySelector(".burger").classList.toggle("burger_active");
};

const burger = document.querySelector("#burger");
const mobileMenu = document.querySelector("#mobileMenu");
const cross = document.querySelector("#mobileMenuCross");
const backg = document.querySelector("#mobMBg");
const body = document.querySelector("body");

function burgerMenu(e) {
  if (e.target === burger) {
    burger.classList.toggle("menu-icon_active");
  }
  mobileMenu.classList.toggle("mobile-menu_active");
  backg.classList.toggle("mobile-menu__bg_active");
  body.classList.toggle("lock");
  function DetectMobile() {
    let uagent = navigator.userAgent.toLowerCase();
    if (uagent.search("mobile") == -1) body.classList.toggle("hideScrl");
  }
  DetectMobile();
}

burger.addEventListener("click", burgerMenu);
cross.addEventListener("click", burgerMenu);
backg.addEventListener("click", burgerMenu);
