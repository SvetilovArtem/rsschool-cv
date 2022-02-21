const cards = document.querySelectorAll('.memory-card')
let hasFlippedCard = false
let boardLocked = false
let firstCard
let secondCard
let count = document.querySelector('.counter')
let sumSteps = 0
const flipCard = (e) => {

    if(boardLocked) {
        return
    }
    const clickedCard = e.target.parentElement
    clickedCard.classList.add('active')

    if(clickedCard === firstCard) return

    sumSteps++
    count.innerHTML = `Total number of steps: ${sumSteps}`

    if(!hasFlippedCard) {
        hasFlippedCard = true
        firstCard = clickedCard
    } else {
        hasFlippedCard = false
        secondCard = clickedCard

        checkForMatch()
    }
}

const checkForMatch = () => {
    if(firstCard.dataset.picture === secondCard.dataset.picture) {
        firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)
    } else {
        boardLocked = true
        setTimeout(() => {
            firstCard.classList.remove('active')
            secondCard.classList.remove('active')
            boardLocked = false
        }, 1000)
        
    }
}


cards.forEach(card => {
    card.addEventListener('click', flipCard)

    const randomIndex = Math.floor(Math.random() * cards.length)
    card.style.order = randomIndex
})





