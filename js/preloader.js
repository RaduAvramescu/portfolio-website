var preloader = document.getElementsByClassName("preloader")[0];
window.addEventListener("load", function () {
  preloader.classList.remove("d-flex");
  var elements = document.getElementsByClassName("d-none");
  while (elements.length > 0) {
    elements[0].classList.remove("d-none");
  }
  preloader.classList.add("d-none");
});
