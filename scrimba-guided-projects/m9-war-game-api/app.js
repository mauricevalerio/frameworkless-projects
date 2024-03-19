let deckId, computerScore = 0, playerScore = 0
document.getElementById('draw-cards').disabled = true

function handleNewDeckClick() {
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
        .then(response => response.json())
        .then(data => {
            document.getElementById('remaining').textContent = `Remaining cards: ${data.remaining}`
            deckId = data.deck_id
            document.getElementById('draw-cards').disabled = false
            document.getElementById('header-title').textContent = 'Game of War'
            document.getElementById('header-title').classList.remove('animate-winner-text')
        })
}

document.getElementById('new-deck').addEventListener('click', handleNewDeckClick)

function displayWinner() {
    const winnerText = document.getElementById('header-title')
    if (computerScore > playerScore) {
        winnerText.textContent = 'Computer Won! 🤖'
    } else if (computerScore < playerScore) {
        winnerText.textContent = 'You Won! 💪'
    } else {
        winnerText.textContent = 'GAME OF WAR! TIED! ⚔️'
    }
    winnerText.classList.add('animate-winner-text')
    document.getElementById('card-winner').textContent = ''
}

function updateScoreHtml() {
    document.getElementById('computer-score').textContent = `Computer score: ${computerScore}`
    document.getElementById('my-score').textContent = `My score: ${playerScore}`
}

function checkIsDeckEmpty(remainingCards) {
    if (!Number(remainingCards)) {
        document.getElementById('draw-cards').disabled = true
        displayWinner()
    }
}

function compareCards(firstCard, secondCard) {
    const cardValuesArray = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"]

    const firstCardValue = cardValuesArray.findIndex(value => value === firstCard.value)
    const secondCardValue = cardValuesArray.findIndex(value => value === secondCard.value)

    if (firstCardValue > secondCardValue) {
        computerScore += 1
        return 'Computer Wins! 🤖'
    } else if (firstCardValue < secondCardValue) {
        playerScore += 1
        return 'Player Wins! 💪'
    } else {
        return 'War! Tied! ⚔️'
    }
}

function getCardsHtml(promiseData) {
    promiseData.then(data => {

        data.cards.forEach((card, index) => {
            document.querySelectorAll('.card-slot')[index].innerHTML = `<img src=${card.image} class="card">`
        })

        document.getElementById('remaining').textContent = `Remaining cards: ${data.remaining}` //update remaining cards
        document.getElementById('card-winner').textContent = compareCards(...data.cards)
        checkIsDeckEmpty(data.remaining) //check if deck is empty
        updateScoreHtml()
    })
}

function handleDrawClick() {
    const cardsUrl = new URL(`deckofcards/api/deck/${deckId}/draw/?count=2`, 'https://apis.scrimba.com/')
    getCardsHtml(fetch(cardsUrl.href)
        .then(response => response.json())
        .then(data => data))
}

document.getElementById('draw-cards').addEventListener('click', handleDrawClick)