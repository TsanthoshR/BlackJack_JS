let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
console.log(messageEl)

// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let player = {
    name: "Player1",
    chips: 4000
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function renderGame() {

    sumEl.textContent = "Score: " + sum
    // cardsEl.textContent = "Cards: " + firstCard + " " + secondCard + " "
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }


    if (sum <= 20) {
        message = "Do you want to draw a new card?" //🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!" //🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"// 😭"
        isAlive = false
    }

    messageEl.textContent = message

    console.log("clicked")
    // window.alert("clicked")
    console.log(message)
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function newCard() {
    if (isAlive && sum <21){

        console.log("Drawing a new card ")

        let nextCard = getRandomCard();

        cards.push(nextCard)
        console.log(nextCard)

        sum += nextCard

        renderGame()
    }

}

function getRandomCard() {

    let card = Math.floor( Math.random()*13 ) + 1
    if (card === 1) {
        return 11
    } else if (card >10) {
        return 10
    } else {
        return card
    }
    // return 5;

}