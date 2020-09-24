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
const overlay = document.querySelector("#mobMBg");
const body = document.querySelector("body");

function DetectMobile() {
  let uagent = navigator.userAgent.toLowerCase();
  if (uagent.search("mobile") == -1) body.classList.toggle("hideScrl");
}
function burgerMenu(e) {
  if (e.target === burger) {
    burger.classList.toggle("menu-icon_active");
  }
  mobileMenu.classList.toggle("mobile-menu_active");
  overlay.classList.toggle("overlay_active");
  body.classList.toggle("lock");
  DetectMobile();
}

burger.addEventListener("click", burgerMenu);
cross.addEventListener("click", burgerMenu);
overlay.addEventListener("click", burgerMenu);

// Popup
const btnPopup = document.querySelector("#contacts");
const popup = document.querySelector("#popupForm");
const popupClose = document.querySelector("#popupClose");
const overlay2 = document.querySelector("#overlay2");

function popupActions(e) {
  popup.classList.toggle("popup_active");
  overlay2.classList.toggle("overlay_active");
  body.classList.toggle("lock");
  DetectMobile();
}

btnPopup.addEventListener("click", popupActions);
popupClose.addEventListener("click", popupActions);
overlay2.addEventListener("click", popupActions);

// AJAX
const form = document.querySelector("#popupForm");
const popupForm = document.querySelector(".popup__form");
const done = document.querySelector(".popup__done");
const error = document.querySelector(".popup__error");

form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const formData = {
    name: document.querySelector("#popupName").value,
    email: document.querySelector("#popupEmail").value,
  };

  const request = new XMLHttpRequest();

  function popupDone() {
    popupForm.classList.toggle("popup__item_active");
    done.classList.toggle("popup__item_active");
  }
  function popupError() {
    popupForm.classList.toggle("popup__item_active");
    error.classList.toggle("popup__item_active");
  }

  // Обработчик ответа сервера
  request.addEventListener("load", function () {
    if (request.readyState == 4) {
      if (request.status == 200) {
        popupDone();
      } else {
        popupError();
      }
    }
  });
  // Инициализация соединения с сервером
  request.open("POST", "", true);
  request.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded; charset=UTF-8"
  );
  // Отправка запроса серверу
  request.send(
    "name=" +
      encodeURIComponent(formData.name) +
      "&email=" +
      encodeURIComponent(formData.email)
  );
});
