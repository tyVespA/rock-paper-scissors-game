let result = "";
let playerScore = 0, computerScore = 0;

const btnRock = document.querySelector(".buttons--rock")
btnRock.addEventListener("click", () => {playRound("rock", computerChoice())});

const btnPaper = document.querySelector(".buttons--paper")
btnPaper.addEventListener("click", () => {playRound("paper", computerChoice())});

const btnScissors = document.querySelector(".buttons--scissors")
btnScissors.addEventListener("click", () => {playRound("scissors", computerChoice())});

const results = document.querySelector(".results");
const score = document.querySelector(".score");
const portrait = document.querySelector(".portrait");

function computerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    switch (choice) {
        case 1: return "rock"; break;
        case 2: return "paper"; break;
        case 3: return "scissors"; break;
    }
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        result = `It's a draw, you both chose ${playerChoice}`
    } else if (
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "scissors" && computerChoice == "paper") ||
        (playerChoice == "paper" && computerChoice == "rock")) {
            result = `You won! ${playerChoice} beats ${computerChoice}`
            ++playerScore
    } else { 
        result = `You lost ${playerChoice} loses to ${computerChoice}`
    ++computerScore;
    } 
    results.textContent = result;
    score.textContent = `You: ${playerScore}, Poke: ${computerScore}`

    if (playerScore == 5) {
        score.textContent = "YOU WON THE GAME! Poke will let you go!"
    } else if (computerScore == 5) {
        score.textContent = "POKE WON, RUN."
    }
}
