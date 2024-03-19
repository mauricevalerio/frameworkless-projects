const btnTabs = document.getElementsByClassName("btn-tab")
const rootTab = document.getElementById("root-tab")

const tabContents = [
    {
        tabName: "bookmark",
        imgPath: "./images/illustration-features-tab-1.svg",
        imgAlt: "Simple bookmarking illustration",
        title: "Bookmark in one click",
        content: `Organize your bookmarks however you like. Our simple drag-and-drop interface
        gives you complete control over how you manage your favourite sites.`
    },
    {
        tabName: "search",
        imgPath: "./images/illustration-features-tab-2.svg",
        imgAlt: "Speedy searching illustration",
        title: "Intelligent search",
        content: `Our powerful search feature will help you find saved sites in no time at all.
        No need to trawl through all of your bookmarks.`
    },
    {
        tabName: "share",
        imgPath: "./images/illustration-features-tab-3.svg",
        imgAlt: "Easy sharing illustration",
        title: "Share your bookmarks",
        content: `Easily share your bookmarks and collections with others. Create a shareable
        link that you can send at the click of a button.`
    },
]

function updateActiveTabBtnStyle(tabName) {
    for (let i = 0; i < btnTabs.length; i++) {
        if (btnTabs[i].dataset.tab === tabName) {
            btnTabs[i].classList.add("is-active")
        } else {
            btnTabs[i].classList.remove("is-active")
        }
    }
}

function removePrevTab() {
    while (rootTab.firstChild) {
        rootTab.firstChild.remove()
    }
}

function loadTabContent(tabName) {
    removePrevTab()
    const currentTab = tabContents.find(tabItem => tabItem.tabName === tabName)

    rootTab.innerHTML = `
    <div id="bookmark" class="tabcontent">
        <img src=${currentTab.imgPath} alt=${currentTab.imgAlt} />

        <div class="tabcontent-text">
        <h3>${currentTab.title}</h3>
        <p>${currentTab.content}</p>
        <button class="btn-blue">More Info</button>
        </div>
    </div>
    `
    updateActiveTabBtnStyle(tabName)
}

function btnTabsAddClickEvent() {
    let currentTabName = ""
    for (let i = 0; i < btnTabs.length; i++) {
        btnTabs[i].addEventListener("click", e => {
            if (e.target.dataset.tab !== currentTabName) {
                loadTabContent(e.target.dataset.tab)
                currentTabName = e.target.dataset.tab
            }
        })
    }
}

btnTabsAddClickEvent()
btnTabs[0].click()