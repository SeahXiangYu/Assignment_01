/* Fullscreen NavBar */
function toggleNav() {
  var element = document.getElementById("myNav");
  if (element.style.height == "100%") {
    element.style.height = "0%";
  } else {
    element.style.height = "100%";
  }
}
/* Animated Menu Icon */
function myFunction(x) {
  x.classList.toggle("change");
}
