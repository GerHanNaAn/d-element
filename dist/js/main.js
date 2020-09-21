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
const popupDone = document.querySelector(".popup__text");

form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const formData = {
    name: document.querySelector("#popupName").value,
    email: document.querySelector("#popupEmail").value,
  };

  const request = new XMLHttpRequest();

  function popupTogle() {
    popupForm.classList.toggle("popup__item_active");
    popupDone.classList.toggle("popup__item_active");
  }

  request.addEventListener("load", function () {
    // В этой части кода можно обрабатывать ответ от сервера
    console.log(request.response);
    popupActions();
    setTimeout(popupTogle, 600);
    // popupActions();
    setTimeout(popupActions, 700);
  });

  request.open("POST", "", true);
  request.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded; charset=UTF-8"
  );
  request.send(
    "name=" +
      encodeURIComponent(formData.name) +
      "&email=" +
      encodeURIComponent(formData.email)
  );
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1vYmlsZSBtZW51XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyLXdyYXBcIikub25tb3VzZW91dCA9IGZ1bmN0aW9uICgpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlclwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYnVyZ2VyX2FjdGl2ZVwiKTtcclxufTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXItd3JhcFwiKS5vbm1vdXNlb3ZlciA9IGZ1bmN0aW9uICgpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlclwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYnVyZ2VyX2FjdGl2ZVwiKTtcclxufTtcclxuXHJcbmNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnVyZ2VyXCIpO1xyXG5jb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGVNZW51XCIpO1xyXG5jb25zdCBjcm9zcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlTWVudUNyb3NzXCIpO1xyXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JNQmdcIik7XHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuXHJcbmZ1bmN0aW9uIERldGVjdE1vYmlsZSgpIHtcclxuICBsZXQgdWFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xyXG4gIGlmICh1YWdlbnQuc2VhcmNoKFwibW9iaWxlXCIpID09IC0xKSBib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlU2NybFwiKTtcclxufVxyXG5mdW5jdGlvbiBidXJnZXJNZW51KGUpIHtcclxuICBpZiAoZS50YXJnZXQgPT09IGJ1cmdlcikge1xyXG4gICAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoXCJtZW51LWljb25fYWN0aXZlXCIpO1xyXG4gIH1cclxuICBtb2JpbGVNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJtb2JpbGUtbWVudV9hY3RpdmVcIik7XHJcbiAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwib3ZlcmxheV9hY3RpdmVcIik7XHJcbiAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibG9ja1wiKTtcclxuICBEZXRlY3RNb2JpbGUoKTtcclxufVxyXG5cclxuYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidXJnZXJNZW51KTtcclxuY3Jvc3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJ1cmdlck1lbnUpO1xyXG5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidXJnZXJNZW51KTtcclxuXHJcbi8vIFBvcHVwXHJcbmNvbnN0IGJ0blBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0c1wiKTtcclxuY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwRm9ybVwiKTtcclxuY29uc3QgcG9wdXBDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXBDbG9zZVwiKTtcclxuY29uc3Qgb3ZlcmxheTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJsYXkyXCIpO1xyXG5cclxuZnVuY3Rpb24gcG9wdXBBY3Rpb25zKGUpIHtcclxuICBwb3B1cC5jbGFzc0xpc3QudG9nZ2xlKFwicG9wdXBfYWN0aXZlXCIpO1xyXG4gIG92ZXJsYXkyLmNsYXNzTGlzdC50b2dnbGUoXCJvdmVybGF5X2FjdGl2ZVwiKTtcclxuICBib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJsb2NrXCIpO1xyXG4gIERldGVjdE1vYmlsZSgpO1xyXG59XHJcblxyXG5idG5Qb3B1cC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcG9wdXBBY3Rpb25zKTtcclxucG9wdXBDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcG9wdXBBY3Rpb25zKTtcclxub3ZlcmxheTIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBvcHVwQWN0aW9ucyk7XHJcblxyXG4vLyBBSkFYXHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwRm9ybVwiKTtcclxuY29uc3QgcG9wdXBGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybVwiKTtcclxuY29uc3QgcG9wdXBEb25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fdGV4dFwiKTtcclxuXHJcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIGNvbnN0IGZvcm1EYXRhID0ge1xyXG4gICAgbmFtZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cE5hbWVcIikudmFsdWUsXHJcbiAgICBlbWFpbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cEVtYWlsXCIpLnZhbHVlLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgZnVuY3Rpb24gcG9wdXBUb2dsZSgpIHtcclxuICAgIHBvcHVwRm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwicG9wdXBfX2l0ZW1fYWN0aXZlXCIpO1xyXG4gICAgcG9wdXBEb25lLmNsYXNzTGlzdC50b2dnbGUoXCJwb3B1cF9faXRlbV9hY3RpdmVcIik7XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vINCSINGN0YLQvtC5INGH0LDRgdGC0Lgg0LrQvtC00LAg0LzQvtC20L3QviDQvtCx0YDQsNCx0LDRgtGL0LLQsNGC0Ywg0L7RgtCy0LXRgiDQvtGCINGB0LXRgNCy0LXRgNCwXHJcbiAgICBjb25zb2xlLmxvZyhyZXF1ZXN0LnJlc3BvbnNlKTtcclxuICAgIHBvcHVwQWN0aW9ucygpO1xyXG4gICAgc2V0VGltZW91dChwb3B1cFRvZ2xlLCA2MDApO1xyXG4gICAgLy8gcG9wdXBBY3Rpb25zKCk7XHJcbiAgICBzZXRUaW1lb3V0KHBvcHVwQWN0aW9ucywgNzAwKTtcclxuICB9KTtcclxuXHJcbiAgcmVxdWVzdC5vcGVuKFwiUE9TVFwiLCBcIlwiLCB0cnVlKTtcclxuICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXHJcbiAgICBcIkNvbnRlbnQtVHlwZVwiLFxyXG4gICAgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIlxyXG4gICk7XHJcbiAgcmVxdWVzdC5zZW5kKFxyXG4gICAgXCJuYW1lPVwiICtcclxuICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KGZvcm1EYXRhLm5hbWUpICtcclxuICAgICAgXCImZW1haWw9XCIgK1xyXG4gICAgICBlbmNvZGVVUklDb21wb25lbnQoZm9ybURhdGEuZW1haWwpXHJcbiAgKTtcclxufSk7Il0sImZpbGUiOiJtYWluLmpzIn0=
