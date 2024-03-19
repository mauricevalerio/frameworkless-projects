/**************** UNSPLASHED API ****************************/
fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
    .then(res => {
        if (!res.ok) throw Error("Something went wrong :(")
        return res.json()
    })
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.full})`
        document.getElementById("bg-image-author").innerHTML = `
        By: <a href="${data.links.html}" target="_blank" class="author-photo-link">${data.user.name}</a>`
    })
    .catch(err => {
        document.body.style.background = '#000'
        console.err(err)
    })

/**************** CRYPTO API ****************************/
function getCryptoDropDownData() {
    let cryptoNames = ['bitcoin', 'dogecoin', 'ethereum', 'solana', 'cardano', 'polygon', 'decentraland', 'fantom', 'enjincoin']
    cryptoNames.forEach(name => {
        document.getElementById('crypto-dropdown').innerHTML += `
        <option value="${name}">${name.toUpperCase()}</option>
        `
    })
}

function handleDropdownCrypto() {
    fetch(`https://api.coingecko.com/api/v3/coins/${document.getElementById('crypto-dropdown').value}`)
        .then(res => {
            if (!res.ok) throw Error("Something went wrong")
            return res.json()
        })
        .then(data => {
            document.getElementById('crypto-data').innerHTML = `
            <img src="${data.image.thumb}" alt="${data.name} Logo" class="crypto-logo"/>
            <p>💸 : $${data.market_data.current_price.usd.toLocaleString("en-US")}</p>
            <p>⬆️ : $${data.market_data.high_24h.usd.toLocaleString("en-US")}</p>
            <p>⬇️ : $${data.market_data.low_24h.usd.toLocaleString("en-US")}</p>
        `
        })
        .catch(e => console.error("Something went wrong :("))
}

getCryptoDropDownData()

document.getElementById('crypto-dropdown').addEventListener('change', handleDropdownCrypto)

window.addEventListener('load', handleDropdownCrypto)

/**************** TIME LOGIC ****************************/
setInterval(() => {
    document.getElementById("time").textContent = new Date().toLocaleTimeString("en-US",
        {
            timeStyle: "medium"
        })
}, 1000)
/**************** WEATHER AND LOCATION API ****************************/
const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function resolved(position) {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
        .then(res => {
            if (!res.ok) throw Error("Weather data not available")
            return res.json()
        })
        .then(data => {
            document.getElementById("weather").innerHTML = `
        <div class="icon-and-temperature">
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" class="icon"/>
            <span class="temperature">${data.main.temp.toFixed(0)}°</span>
        </div>
        <p class="city-name">${data.name}</p>
        `
        })
        .catch(err => console.err(err))
}

function rejected(err) {
    console.log(err.code, err.message)
}

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(resolved, rejected, options)
}

/**************** QUOTES API ****************************/

fetch('https://api.goprogram.ai/inspiration')
    .then(res => {
        if (!res.ok) throw Error("Something went wrong")
        return res.json()
    })
    .then(data => {
        document.getElementById("quote").innerHTML = `
        ${data.quote}
        <span>- ${data.author}</span>
        `
    })
    .catch(err => console.err(err))