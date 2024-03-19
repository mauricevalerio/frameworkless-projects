import { catsData } from "./data.js"


const emotionRadios = document.getElementById("emotion-radios");
const radioList = document.getElementsByClassName("radio");
const getImgBtn = document.getElementById("get-image-btn");
const gifCheckBox = document.getElementById("gifs-only-option");
const oneImageOnlyCheckBox = document.getElementById("one-image-only-option");
const memeModalInner = document.getElementById("meme-modal-inner");
const memeModal = document.querySelector(".meme-modal");
const memeModalCloseBtn = document.getElementById("meme-modal-close-btn");
const errorText = document.querySelector("h4")

memeModalCloseBtn.addEventListener("click", closeModal)

function closeModal() {
    memeModal.classList.remove("open");
}

emotionRadios.addEventListener("change", (e) => {
    for (let radio of radioList) {
        radio.classList.remove("highlight");
    }
    document.getElementById(e.target.id).parentElement.classList.add("highlight");
})

document.addEventListener("click", (e) => {
    if (e.target == document.body || e.target == document.querySelector("main")
        || e.target == document.querySelector("header") || e.target == document.querySelector(".header-inner")
        || e.target == document.querySelector(".pumpkin-img") || e.target == document.querySelector("h1") ||
        e.target == document.querySelector("h2")) {
        closeModal();
    }
})

getImgBtn.addEventListener("click", renderCat)

function renderCat() {

    while (memeModalInner.firstChild) {
        memeModalInner.removeChild(memeModalInner.firstChild)
    }

    if (document.querySelector("input[type=radio]:checked")) {
        errorText.textContent = "";
        memeModal.classList.add("open");
        const catObject = getCatObject();

        for (let cat of catObject) {
            const img = document.createElement("img");

            if (catObject.length === 1) {
                img.style.width = "340px";
                img.style.height = "420px";
                img.style.transform = "scale(1)";

            }

            setAttributes(img, { "class": "cat-img", "src": `./images/${cat.image}`, "alt": `${cat.alt}` });
            memeModalInner.append(img);
        }

    } else {
        errorText.textContent = "Please select an emotion below!"
    }
}

function getCatObject() {
    const catsArray = getMatchingCatsArray();
    if (oneImageOnlyCheckBox.checked) {
        return [catsArray[Math.floor(Math.random() * catsArray.length)]]
    } else {
        return catsArray;
    }
}

function getMatchingCatsArray() {
    const isGif = gifCheckBox.checked


    const selectedEmotion = document.querySelector("input[type=radio]:checked").value;
    const matchedCatsArray = catsData.filter(cat => {
        if (isGif) {
            return cat.emotionTags.includes(selectedEmotion) && cat.isGif;
        } else {
            return cat.emotionTags.includes(selectedEmotion);
        }

    })
    return matchedCatsArray;


}

function getEmotionsArray(emotions) {
    const emotionsArray = [];
    for (let emotion of emotions) {
        for (let tag of emotion.emotionTags) {
            if (!emotionsArray.includes(tag)) emotionsArray.push(tag);
        }
    }
    return emotionsArray;
}

function renderEmotionsRadios(cats) {
    const emotions = getEmotionsArray(cats);

    for (let emotion of emotions) {
        const divEmotionItem = document.createElement("div");
        const radioEmotion = document.createElement("input");
        const radioLabel = document.createElement("label");

        setAttributes(radioEmotion, { "type": "radio", "id": emotion, "name": "emotion", "value": emotion });
        setAttributes(radioLabel, { "for": emotion });
        radioLabel.textContent = `${emotion}`
        divEmotionItem.classList.add("radio");


        divEmotionItem.append(radioLabel);
        divEmotionItem.append(radioEmotion);
        emotionRadios.append(divEmotionItem);

    }

}

function setAttributes(el, attributes) {
    for (let key in attributes) {
        el.setAttribute(key, attributes[key])
    }
}

renderEmotionsRadios(catsData);

