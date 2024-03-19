const navBurger = document.getElementById("btn-hamburger-menu")

/* Disable scrolling when hamburger menu is opened */
function disableScroll() {
    // Get the current page scroll position
    let scrollTop = window.scrollY || document.documentElement.scrollTop
    let scrollLeft = window.scrollX || document.documentElement.scrollLeft

    // if any scroll is attempted, set this to the previous value
    window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop)
    };
}

function enableScroll() {
    window.onscroll = function () { }
}

navBurger.addEventListener("click", function () {
    const imgHamburgerMenu = document.getElementById("img-hamburger-menu")
    const header = document.getElementById("header")

    this.classList.toggle("is-active")
    header.classList.toggle("is-active")

    if (this.classList.contains("is-active")) {
        imgHamburgerMenu.setAttribute("src", "./images/icon-close.svg")
    } else {
        imgHamburgerMenu.setAttribute("src", "./images/icon-hamburger.svg")
    }

    if (header.classList.contains("is-active")) {
        disableScroll()
    } else {
        enableScroll()
    }
})

