var el = document.querySelector("ul > li > p");

window.addEventListener("scroll", function () {
  el.style.transform = "rotate(" + window.pageYOffset + "deg)";
  el.style.transform = "rotate(-" + window.pageYOffset + "deg)";
});
