const btnHamburger = document.getElementById("header__btn--hamburger");

btnHamburger.addEventListener("click", function (e) {
    const imgHamburger = document.getElementById("btn__hamburger--img");

    this.classList.toggle("is__active");

    if (this.classList.contains("is__active")) {
        imgHamburger.setAttribute("src", "assets/header/icon-close.svg");
    } else {
        imgHamburger.setAttribute("src", "assets/header/icon-hamburger.svg");
    }
})