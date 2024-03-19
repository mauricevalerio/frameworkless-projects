"use strict";
const menu = document.getElementById("menu");
const hamburgerMenu = document.getElementById("hamburger-menu");
const shortenBtn = document.getElementById("url-btn");
const urlInput = document.getElementById("url-string");
const urlForm = document.getElementById("url-form");
const publicApiKey = "ND8WzSw3cJZmFMa8x6X3kkQsjRBKefoqQThwkqfiYiiOERWlqV1h0DjOmavR";
const removeFormError = () => urlInput.value !== "" && urlInput.classList.remove("invalid");
function clearActiveBtns() {
    const resultBtns = document.getElementsByClassName('url-result-btn');
    for (let i = 0; i < resultBtns.length; i++) {
        resultBtns[i].classList.remove("active");
        resultBtns[i].textContent = "Copy";
    }
}
async function copyToClipBoard(shortUrl, urlResultBtn) {
    await navigator.clipboard.writeText(shortUrl);
    clearActiveBtns();
    urlResultBtn.classList.add("active");
    if (urlResultBtn.classList.contains("active")) {
        urlResultBtn.textContent = "Copied!";
    }
}
const createUrlElement = (shortUrl, longUrl) => {
    const urlResultDiv = document.createElement("div");
    const longUrlSpan = document.createElement("span");
    const shortUrlSpan = document.createElement("span");
    const urlResultBtn = document.createElement("button");
    longUrlSpan.textContent = longUrl;
    shortUrlSpan.textContent = shortUrl;
    urlResultBtn.textContent = "Copy";
    urlResultDiv.classList.add("url-result");
    shortUrlSpan.classList.add("url-result-short");
    urlResultBtn.classList.add("url-result-btn");
    urlResultDiv.append(longUrlSpan, shortUrlSpan, urlResultBtn);
    urlForm.insertAdjacentElement('afterend', urlResultDiv);
    urlResultBtn.addEventListener("click", () => copyToClipBoard(shortUrl, urlResultBtn));
};
urlInput.addEventListener("keypress", removeFormError);
urlInput.addEventListener("change", removeFormError);
hamburgerMenu.addEventListener("click", () => { menu.classList.toggle("active"); });
shortenBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    if (urlInput.value === "") {
        urlInput.classList.add("invalid");
        return;
    }
    try {
        const resp = await fetch("https://api.tinyurl.com/create", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${publicApiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                url: urlInput.value.toString()
            })
        });
        const dataObj = await resp.json();
        urlInput.value = "";
        createUrlElement(dataObj.data.tiny_url, dataObj.data.url);
    }
    catch (e) {
        console.log(e);
    }
});
