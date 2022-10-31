let result = "";
let playerScore = 0, computerScore = 0;

function computerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    switch (choice) {
        case 1: return "rock"; break;
        case 2: return "paper"; break;
        case 3: return "scissors"; break;
    }
}


const btnRock = document.querySelector(".buttons--rock")
btnRock.addEventListener("click", () => {playRound("rock", computerChoice())});

const btnPaper = document.querySelector(".buttons--paper")
btnPaper.addEventListener("click", () => {playRound("paper", computerChoice())});

const btnScissors = document.querySelector(".buttons--scissors")
btnScissors.addEventListener("click", () => {playRound("scissors", computerChoice())});

const results = document.querySelector(".results");
const score = document.querySelector(".score")

function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        result = `It's a draw, you both chose ${playerChoice}`
    } else if (
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "scissors" && computerChoice == "paper") ||
        (playerChoice == "paper" && computerChoice == "rock")) {
            result = `You won! ${playerChoice} beats ${computerChoice}`
            ++playerScore
    } else { result = `You lost ${playerChoice} loses to ${computerChoice}`
    ++computerScore;
    } 
    results.textContent = result;
    score.textContent = `You: ${playerScore}, Poke: ${computerScore}`

    if (playerScore == 5) {
        score.textContent = "YOU WON THE GAME! You're safe!"
    } else if (computerScore == 5) {
        score.textContent = "POKE WON, run."
    }
}




 /* function game() {
    let playerScore = 0;
    let computerScore = 0;

    for(i = 0; i < 5; i++) {
        playRound(playerChoice(), computerChoice())
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

*/
