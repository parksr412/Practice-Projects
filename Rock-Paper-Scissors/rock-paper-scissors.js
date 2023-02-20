const computerChoiceEl = document.getElementById("computer-choice");
const playerChoiceEl = document.getElementById("player-choice");
const resultEl = document.getElementById("result");

const possibleChoices = document.querySelectorAll(".choice-button");
let playerChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (event) => {
    playerChoice = event.target.id
    playerChoiceEl.innerHTML = playerChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)

    if (randomNumber === 0){
        computerChoice = "rock"
    }

    if (randomNumber === 1){
        computerChoice = "paper"
    }

    if (randomNumber === 2){
        computerChoice = "scissors"
    }
    computerChoiceEl.innerHTML = computerChoice
}

function getResult(){
    if (computerChoice === playerChoice){
        result = "TIE!!!!"
    }

    if (computerChoice === "rock" && playerChoice === "paper"){
        result = "YOU WIN!!!!"
    }
    if (computerChoice === "rock" && playerChoice === "scissors"){
        result = "YOU LOSE!!!!"
    }
    if (computerChoice === "paper" && playerChoice === "scissors"){
        result = "YOU WIN!!!!"
    }
    if (computerChoice === "paper" && playerChoice === "rock"){
        result = "YOU LOSE!!!!"
    }
    if (computerChoice === "scissors" && playerChoice === "paper"){
        result = "YOU LOSE!!!!"
    }
    if (computerChoice === "scissors" && playerChoice === "rock"){
        result = "YOU WIN!!!!"
    }
    resultEl.innerHTML = result
}
