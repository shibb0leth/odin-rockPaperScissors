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
    playerSelection = getPlayerChoice()
    computerSelection = getComputerChoice()

    if (playerSelection === computerSelection) {
        alert("It's a tie, play again!")
        return playRound()
    }
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            console.log("Rock beats scissors! Player wins!")
            return userScore++;
        } else {
            console.log("Paper beats rock! Computer wins!")
            return computerScore++;
        }
    }
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            console.log("Paper beats rock! Player wins!")
            return userScore++;
        } else {
            console.log("Scissors beats paper! Computer wins!")
            return computerScore++;
        }
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            console.log("Scissors beats paper! Player wins!")
            return userScore++;
        } else {
            console.log("Rock beats scissors! Computer wins!")
            return computerScore++;
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound()
    }

    if (userScore >= 3) {
        console.log("Congratulations player! You have defeated your mechanical opponent and proven yourself superior!");
    } else {
        console.log("You couldn't beat a computer at rock, paper, scissors? You are a disgrace!")
    }
}

let userScore = 0;
let computerScore = 0;

game()