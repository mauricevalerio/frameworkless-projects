const navBurger = document.getElementById('hamburger-menu')
const header = document.getElementById('header')

const contentTabs = document.getElementsByClassName('tabcontent')
const featureTabs = document.getElementsByClassName('btn-tablinks')

const accordions = document.getElementsByClassName("btn-accordion")

const subscribe = document.getElementById("subscribe")
const inputEmailDiv = document.querySelector(".subscribe .email-container")

/* tabs */
function clearFeatureTabsClass() {
    for (let i = 0; i < featureTabs.length; i++) {
        featureTabs[i].classList.remove('is-active')
    }
}

function openTabContent(datasetTabName) {
    document.getElementById(datasetTabName).style.display = "flex"
    clearFeatureTabsClass()
    document.querySelector(`button[data-tab=${datasetTabName}]`).classList.add('is-active')
}

function loadDatasetTabName() {
    contentTabs[0].style.display = "flex"
    featureTabs[0].classList.add('is-active')

    for (let i = 0; i < featureTabs.length; i++) {
        featureTabs[i].addEventListener('click', () => {
            for (let i = 0; i < contentTabs.length; i++) {
                contentTabs[i].style.display = "none"
            }
            openTabContent(featureTabs[i].dataset.tab)
        })
    }
}

loadDatasetTabName()

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

/* NAV */

navBurger.addEventListener('click', () => {
    navBurger.classList.toggle('is-active')
    header.classList.toggle('is-active')

    if (header.classList.contains('is-active')) {
        disableScroll()
    } else {
        enableScroll()
    }
})

/* accordions */
function accordionEventListeners() {
    for (let i = 0; i < accordions.length; i++) {

        accordions[i].addEventListener("click", function () {
            this.classList.toggle("active")

            let panel = accordions[i].nextElementSibling

            if (panel.style.display === "block") {
                panel.style.display = "none"
            } else {
                panel.style.display = "block"
            }
        })


    }
}

accordionEventListeners()

/* subscribe */

function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
}

subscribe.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(subscribe)

    if (validateEmail(Object.fromEntries(formData).email)) {
        inputEmailDiv.classList.remove("error")
        subscribe.reset()
    } else {
        inputEmailDiv.classList.add("error")
    }
})