function myFunction(x) {
  x.classList.toggle("change");
}

function toggleNav() {
  var element = document.getElementById("mySidenav");
  if (element.style.width == "97%") {
    element.style.width = "0px";
  } else {
    element.style.width = "97%";
  }
}
