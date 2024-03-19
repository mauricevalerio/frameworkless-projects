const hamburgerMenu = document.getElementById("hamburger-menu");
const headerNav = document.getElementById("header-nav");

const toggleNavbar = () => headerNav.classList.toggle("header-nav-show");

hamburgerMenu.addEventListener("click", toggleNavbar);