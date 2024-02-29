const menu = document.getElementById("menu") as HTMLUListElement
const hamburgerMenu = document.getElementById("hamburger-menu") as HTMLButtonElement
const shortenBtn = document.getElementById("shorten-it-btn") as HTMLButtonElement
const urlInput = document.getElementById("url-string") as HTMLInputElement

hamburgerMenu.addEventListener("click", () => { menu.classList.toggle("active") })

shortenBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log(JSON.stringify({
        url: encodeURIComponent(urlInput.value)
    }))

    try {
        const resp = await fetch(`https://cleanuri.com/api/v1/shorten?url=${encodeURIComponent(urlInput.value)}`, {
            method: "POST",
            mode: "no-cors",
        })
        console.log(resp)
    } catch (e) {
        console.log(e)
    }
})

// try {
//     const resp = await fetch(`https://cleanuri.com/api/v1/shorten`, {
//         method: "POST",
//         mode: "no-cors",
//         body: JSON.stringify({
//             url: encodeURIComponent(urlInput.value)
//         })
//     })
//     console.log(resp)
// } catch (e) {
//     console.log(e)
// }


// headers: {
//     'Accept': 'application/json;charset=utf-8',
//     'Content-Type': 'application/json;charset=utf-8',
//     'Access-Control-Allow-Origin': '*'
// },