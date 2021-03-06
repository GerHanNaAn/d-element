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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1vYmlsZSBtZW51XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyLXdyYXBcIikub25tb3VzZW91dCA9IGZ1bmN0aW9uICgpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlclwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYnVyZ2VyX2FjdGl2ZVwiKTtcclxufTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXItd3JhcFwiKS5vbm1vdXNlb3ZlciA9IGZ1bmN0aW9uICgpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlclwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYnVyZ2VyX2FjdGl2ZVwiKTtcclxufTtcclxuXHJcbmNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnVyZ2VyXCIpO1xyXG5jb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGVNZW51XCIpO1xyXG5jb25zdCBjcm9zcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlTWVudUNyb3NzXCIpO1xyXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JNQmdcIik7XHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuXHJcbmZ1bmN0aW9uIERldGVjdE1vYmlsZSgpIHtcclxuICBsZXQgdWFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xyXG4gIGlmICh1YWdlbnQuc2VhcmNoKFwibW9iaWxlXCIpID09IC0xKSBib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlU2NybFwiKTtcclxufVxyXG5mdW5jdGlvbiBidXJnZXJNZW51KGUpIHtcclxuICBpZiAoZS50YXJnZXQgPT09IGJ1cmdlcikge1xyXG4gICAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoXCJtZW51LWljb25fYWN0aXZlXCIpO1xyXG4gIH1cclxuICBtb2JpbGVNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJtb2JpbGUtbWVudV9hY3RpdmVcIik7XHJcbiAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwib3ZlcmxheV9hY3RpdmVcIik7XHJcbiAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibG9ja1wiKTtcclxuICBEZXRlY3RNb2JpbGUoKTtcclxufVxyXG5cclxuYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidXJnZXJNZW51KTtcclxuY3Jvc3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJ1cmdlck1lbnUpO1xyXG5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidXJnZXJNZW51KTtcclxuXHJcbi8vIFBvcHVwXHJcbmNvbnN0IGJ0blBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0c1wiKTtcclxuY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwRm9ybVwiKTtcclxuY29uc3QgcG9wdXBDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXBDbG9zZVwiKTtcclxuY29uc3Qgb3ZlcmxheTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJsYXkyXCIpO1xyXG5cclxuZnVuY3Rpb24gcG9wdXBBY3Rpb25zKGUpIHtcclxuICBwb3B1cC5jbGFzc0xpc3QudG9nZ2xlKFwicG9wdXBfYWN0aXZlXCIpO1xyXG4gIG92ZXJsYXkyLmNsYXNzTGlzdC50b2dnbGUoXCJvdmVybGF5X2FjdGl2ZVwiKTtcclxuICBib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJsb2NrXCIpO1xyXG4gIERldGVjdE1vYmlsZSgpO1xyXG59XHJcblxyXG5idG5Qb3B1cC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcG9wdXBBY3Rpb25zKTtcclxucG9wdXBDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcG9wdXBBY3Rpb25zKTtcclxub3ZlcmxheTIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBvcHVwQWN0aW9ucyk7XHJcblxyXG4vLyBBSkFYXHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwRm9ybVwiKTtcclxuY29uc3QgcG9wdXBGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybVwiKTtcclxuY29uc3QgZG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2RvbmVcIik7XHJcbmNvbnN0IGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZXJyb3JcIik7XHJcblxyXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBjb25zdCBmb3JtRGF0YSA9IHtcclxuICAgIG5hbWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXBOYW1lXCIpLnZhbHVlLFxyXG4gICAgZW1haWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXBFbWFpbFwiKS52YWx1ZSxcclxuICB9O1xyXG5cclxuICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gIGZ1bmN0aW9uIHBvcHVwRG9uZSgpIHtcclxuICAgIHBvcHVwRm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwicG9wdXBfX2l0ZW1fYWN0aXZlXCIpO1xyXG4gICAgZG9uZS5jbGFzc0xpc3QudG9nZ2xlKFwicG9wdXBfX2l0ZW1fYWN0aXZlXCIpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBwb3B1cEVycm9yKCkge1xyXG4gICAgcG9wdXBGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJwb3B1cF9faXRlbV9hY3RpdmVcIik7XHJcbiAgICBlcnJvci5jbGFzc0xpc3QudG9nZ2xlKFwicG9wdXBfX2l0ZW1fYWN0aXZlXCIpO1xyXG4gIH1cclxuXHJcbiAgLy8g0J7QsdGA0LDQsdC+0YLRh9C40Log0L7RgtCy0LXRgtCwINGB0LXRgNCy0LXRgNCwXHJcbiAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgIHBvcHVwRG9uZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBvcHVwRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIC8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINGB0L7QtdC00LjQvdC10L3QuNGPINGBINGB0LXRgNCy0LXRgNC+0LxcclxuICByZXF1ZXN0Lm9wZW4oXCJQT1NUXCIsIFwiXCIsIHRydWUpO1xyXG4gIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcclxuICAgIFwiQ29udGVudC1UeXBlXCIsXHJcbiAgICBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiXHJcbiAgKTtcclxuICAvLyDQntGC0L/RgNCw0LLQutCwINC30LDQv9GA0L7RgdCwINGB0LXRgNCy0LXRgNGDXHJcbiAgcmVxdWVzdC5zZW5kKFxyXG4gICAgXCJuYW1lPVwiICtcclxuICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KGZvcm1EYXRhLm5hbWUpICtcclxuICAgICAgXCImZW1haWw9XCIgK1xyXG4gICAgICBlbmNvZGVVUklDb21wb25lbnQoZm9ybURhdGEuZW1haWwpXHJcbiAgKTtcclxufSk7Il0sImZpbGUiOiJtYWluLmpzIn0=
