function generateActivity() {
    fetch('https://www.boredapi.com/api/activity')
        .then(response => response.json())
        .then(data => {
            document.getElementById('random-activity-text').textContent = data.activity
        })

    document.querySelector('h1').classList.toggle('animate-emoji')
    document.body.style.background = getRandomBg()

    document.querySelector('h1').style.color = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
    document.querySelector('h2').style.color = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
}

function getRandomBg() {
    return `linear-gradient(to right, 
        rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()}),
        rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})
    )`
}

function randomNumber() {
    return Math.floor((Math.random() * 255))
}

document.getElementById('generate-activity-button').addEventListener('click', generateActivity)