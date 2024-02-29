"use strict";
const menu = document.getElementById("menu");
const hamburgerMenu = document.getElementById("hamburger-menu");
const shortenBtn = document.getElementById("shorten-it-btn");
const urlInput = document.getElementById("url-string");
hamburgerMenu.addEventListener("click", () => { menu.classList.toggle("active"); });
shortenBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({
        url: encodeURIComponent(urlInput.value)
    }));
    try {
        const resp = await fetch(`https://cleanuri.com/api/v1/shorten?url=${encodeURIComponent(urlInput.value)}`, {
            method: "POST",
            mode: "no-cors",
        });
        console.log(resp);
    }
    catch (e) {
        console.log(e);
    }
});
