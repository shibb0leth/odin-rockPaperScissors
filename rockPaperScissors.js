function getComputerChoice() {
    randomWholeNumber = Math.floor(Math.random() * 3);
    if (randomWholeNumber === 0) {
        choice = 'Rock';
    } else if (randomWholeNumber === 1) {
        choice = 'Paper';
    } else {
        choice = 'Scissors'
    }
    return choice
}

console.log(getComputerChoice())