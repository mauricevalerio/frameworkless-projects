import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import './index.scss'

const hamburgerMenu = document.getElementById('hamburger-menu') as HTMLImageElement
const headerNav = document.getElementById('header-nav') as HTMLElement
const gsRevealArray = document.getElementsByClassName('gs-reveal')

const toggleNavbar = (e: Event) => {
    e.preventDefault()
    headerNav.classList.toggle('header-nav-show')
}

hamburgerMenu.addEventListener('click', toggleNavbar)


function animateFrom(elem: HTMLElement, direction?: number) {
    direction = direction || 1
    let x = 0,
        y = direction * 100
    if (elem.classList.contains("gs-reveal-fromLeft")) {
        x = -100
        y = 0
    } else if (elem.classList.contains("gs-reveal-fromRight")) {
        x = 100
        y = 0
    } else if (elem.classList.contains("gs-reveal-fromBottom")) {
        x = 0
        y = 100
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)"
    elem.style.opacity = "0"
    gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto"
    })
}

function hide(elem: HTMLElement) {
    gsap.set(elem, { autoAlpha: 0 })
}

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger)

    gsap.utils.toArray(gsRevealArray).forEach(function (elem: any) {
        hide(elem) // assure that the element is hidden when scrolled into view

        ScrollTrigger.create({
            trigger: elem,
            onEnter: function () { animateFrom(elem) }
        })
    })
})
