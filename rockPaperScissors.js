function getComputerChoice() {
    randomWholeNumber = Math.floor(Math.random() * 3);
    if (randomWholeNumber === 0) {
        choice = 'rock';
    } else if (randomWholeNumber === 1) {
        choice = 'paper';
    } else {
        choice = 'scissors'
    }
    return choice
}

function getPlayerChoice() {
    playerSelection = prompt("Hi! Let's play Rock, Paper, Scissors. It's your move!").toLowerCase()
    
    while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
       playerSelection = prompt(playerSelection + " is not valid. Please pick: rock, paper, or scissors.");
    }
    
    return playerSelection 
}


function playRound (playerSelection, computerSelection) {
    playerSelection = getPlayerChoice()
    computerSelection = getComputerChoice()

    console.log(playerSelection, computerSelection)
}

playRound()