const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let computerChoice
let userChoice
let output
// Main game
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    declareWinner(computerChoice, userChoice)
    resultDisplay.innerHTML = output
}))

// Computer Choice
function generateComputerChoice() {

    // Choosing
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    if (randomNumber === 0 ) {
        computerChoice = 'rock'
    } else if (randomNumber === 1) {
        computerChoice = 'paper'
    } else {
        computerChoice = 'scissor'
    }

    // Update computer choice in web page
    computerChoiceDisplay.innerHTML = computerChoice
}

function declareWinner(computerChoice, userChoice) {

    if (computerChoice === userChoice) {
        output = 'draw'
    } else if ((computerChoice === 'rock' && userChoice === 'paper') || (computerChoice === 'paper' && userChoice === 'scissor') || (computerChoice === 'scissor' && userChoice === 'rock') ) {
        output = 'win'
    } else {
        output = 'lose'
    }

}

