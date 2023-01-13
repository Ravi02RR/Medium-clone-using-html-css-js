window.onscroll = function () { myFunction() };


var navbar = document.getElementById("navbar");
var btn = document.getElementById("btn")







function myFunction() {
    if (window.pageYOffset >= 350) {
        btn.classList.remove("btn-dark")
        btn.classList.add("btn-success")
        navbar.classList.remove("bg-warning")
        navbar.classList.add("bg-light")
    }
    else {
        btn.classList.add("btn-dark")
        btn.classList.remove("btn-success")
        navbar.classList.remove("bg-light")
        navbar.classList.add("bg-warning")
    }
}
