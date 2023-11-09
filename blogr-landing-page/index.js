let width = window.innerWidth
const navbarBurger = document.querySelector('.navbar-burger')
const navbarItem = document.querySelectorAll('.navbar-link')

function hamburgerDropdown(el) {
    const target = el.dataset.target
    const $target = document.getElementById(target)
    el.classList.toggle('is-active')
    $target.classList.toggle('is-active')
}

window.addEventListener('resize', () => {
    width = window.innerWidth

    if (width > 1023) {
        navbarItem.forEach(el => {
            const target = el.dataset.target
            const $target = document.getElementById(target)
            el.classList.remove('is-active')
            $target.classList.remove('is-active')
        })
    }
})

document.addEventListener('DOMContentLoaded', () => {
    navbarBurger.addEventListener('click', () => {
        const target = navbarBurger.dataset.target
        const $target = document.getElementById(target)
        navbarBurger.classList.toggle('is-active')
        $target.classList.toggle('is-active')
    })

    navbarItem.forEach(el => {
        el.addEventListener('click', () =>
            hamburgerDropdown(el)
        )
    })
})