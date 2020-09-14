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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1vYmlsZSBtZW51XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyLXdyYXBcIikub25tb3VzZW91dCA9IGZ1bmN0aW9uICgpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlclwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYnVyZ2VyX2FjdGl2ZVwiKTtcclxufTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXItd3JhcFwiKS5vbm1vdXNlb3ZlciA9IGZ1bmN0aW9uICgpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlclwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYnVyZ2VyX2FjdGl2ZVwiKTtcclxufTtcclxuXHJcbmNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnVyZ2VyXCIpO1xyXG5jb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGVNZW51XCIpO1xyXG5jb25zdCBjcm9zcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlTWVudUNyb3NzXCIpO1xyXG5jb25zdCBiYWNrZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iTUJnXCIpO1xyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcblxyXG5mdW5jdGlvbiBidXJnZXJNZW51KGUpIHtcclxuICBpZiAoZS50YXJnZXQgPT09IGJ1cmdlcikge1xyXG4gICAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoXCJtZW51LWljb25fYWN0aXZlXCIpO1xyXG4gIH1cclxuICBtb2JpbGVNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJtb2JpbGUtbWVudV9hY3RpdmVcIik7XHJcbiAgYmFja2cuY2xhc3NMaXN0LnRvZ2dsZShcIm1vYmlsZS1tZW51X19iZ19hY3RpdmVcIik7XHJcbiAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibG9ja1wiKTtcclxuICBmdW5jdGlvbiBEZXRlY3RNb2JpbGUoKSB7XHJcbiAgICBsZXQgdWFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgaWYgKHVhZ2VudC5zZWFyY2goXCJtb2JpbGVcIikgPT0gLTEpIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVTY3JsXCIpO1xyXG4gIH1cclxuICBEZXRlY3RNb2JpbGUoKTtcclxufVxyXG5cclxuYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidXJnZXJNZW51KTtcclxuY3Jvc3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJ1cmdlck1lbnUpO1xyXG5iYWNrZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYnVyZ2VyTWVudSk7Il0sImZpbGUiOiJtYWluLmpzIn0=
