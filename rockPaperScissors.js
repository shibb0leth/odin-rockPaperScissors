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
    playerSelection = prompt("Hi! Let's play Rock, Paper, Scissors. It's your move!")

    if (playerSelection === null) {
        return;
    }
    
    while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
       playerSelection = prompt("Sorry, " + playerSelection + " is not valid. Please pick: rock, paper, or scissors.");
    }

    return playerSelection
}


function playRound (playerSelection, computerSelection) {
    userScore = 0; 
    computerScore = 0;

    playerSelection = getPlayerChoice()
    computerSelection = getComputerChoice()

    if (playerSelection === computerSelection) {
        alert("It's a tie, play again!")
        return playRound()
    }
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            console.log("Player wins!")
            return userScore++;
        } else {
            console.log("Computer wins!")
            return computerScore++;
        }
    }
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            console.log("Player wins!")
            return userScore++;
        } else {
            console.log("Computer wins!")
            return computerScore++;
        }
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            console.log("Player wins!")
            return userScore++;
        } else {
            console.log("Computer wins!")
            return computerScore++;
        }
    }
}

playRound()