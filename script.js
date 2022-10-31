function computerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    switch (choice) {
        case 1: return "Rock"; break;
        case 2: return "Paper"; break;
        case 3: return "Scissors"; break;
    }
}

function playerChoice() {
    let playerChoice = prompt("What do u choose? Rock, paper or scissors?", "Rock");
    let playerChoiceLowerCase = playerChoice.toLowerCase();;
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoiceLowerCase.slice(1) 
    return playerChoice;
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return `It's a draw, you both chose ${playerChoice}`
    } else if (
        (playerChoice == "Rock" && computerChoice == "Scissors") ||
        (playerChoice == "Scissors" && computerChoice == "Paper") ||
        (playerChoice == "Paper" && computerChoice == "Rock")) {
            return `You won! ${playerChoice} beats ${computerChoice}`
    } else return `You lost ${playerChoice} loses to ${computerChoice}`
}


console.log(playRound(playerChoice(), computerChoice()));