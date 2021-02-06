let navBar = document.querySelector(".first-ul > ul")
document.querySelector(".fa-bars").onclick = function() {
    navBar.classList.add("mobileNav")
    navBar.classList.remove("d-none")
}
document.querySelector(".fa-times-circle").onclick = function() {
    navBar.classList.remove("mobileNav")
    navBar.classList.add("d-none")
}
var screenSize = window.matchMedia("(max-width: 769px)")
function responsivNav(x) {
    if (!x.matches) { 
        navBar.classList.remove("mobileNav")
    } else {
        navBar.classList.add("mobileNav")
    }
  }
responsivNav(screenSize)
screenSize.addListener(responsivNav)
// end navbar 