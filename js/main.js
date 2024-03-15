var menuOpen = false;

function myFunction() {
  var x = document.getElementById("navbar-mobile-menu");

  if (!menuOpen) {
    x.classList.add("show");
    menuOpen = true;
  } else {
    x.classList.remove("show");
    menuOpen = false;
  }
}
