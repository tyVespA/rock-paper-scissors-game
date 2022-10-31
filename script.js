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
        result = `It's a draw, you both chose ${playerChoice}`
    } else if (
        (playerChoice == "Rock" && computerChoice == "Scissors") ||
        (playerChoice == "Scissors" && computerChoice == "Paper") ||
        (playerChoice == "Paper" && computerChoice == "Rock")) {
            result = `You won! ${playerChoice} beats ${computerChoice}`
    } else result = `You lost ${playerChoice} loses to ${computerChoice}`
    return result;
}

 function game() {
    let playerScore = 0;
    let computerScore = 0;

    for(i = 0; i < 5; i++) {
        playRound(playerChoice, computerChoice)
        console.log(result)
        if (result.charAt(4) == "w") {
            playerScore++           
        } else if (result.charAt(4) == "l") {
            computerScore++         
        } console.log(`Player score: ${playerScore}, computer score: ${computerScore}`)
    }
    console.log("THE FINAL SCORE IS: you " + playerScore + ", computer " + computerScore)
    if (playerScore > computerScore) {
      console.log("You won the game")
    } else if (playerScore < computerScore){
      console.log("You lost the game")
    } else {
      console.log("It's a draw")
    }
}
 

game();