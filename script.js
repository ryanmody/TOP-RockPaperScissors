let computerChoiceNumber;
let playerChoice;
let computerChoiceName;
let roundCounter = 0;
let playerWins = 0;
let computerWins = 0;


function computerPicksRPS() {
    computerChoiceNumber = Math.floor(Math.random() * 3 + 1);
    if (computerChoiceNumber == 1) {
        computerChoiceName = "Rock";
    } else if (computerChoiceNumber == 2) {
        computerChoiceName = "Paper";
    } else {
        computerChoiceName = "Scissors";
    }
}

computerPicksRPS();

console.log(computerChoiceName);

function playerVsComputer () {
    // Code for player choosing RPS, and determining outcome
    let playerChoice = prompt("Choose Rock, Paper, or Scissors");
    if (playerChoice == "Rock" && computerChoiceName == "Scissors") {
        alert("You win!");
        playerWins++;
        roundCounter++;
    } else if (playerChoice == "Rock" && computerChoiceName == "Paper") {
        alert("You lose!");
        computerWins++;
        roundCounter++;
    } else if (playerChoice == "Paper" && computerChoiceName == "Rock") {
        alert("You win!");
        playerWins++;
        roundCounter++;
    } else if (playerChoice == "Paper" && computerChoiceName == "Scissors") {
        alert("You lose!");
        computerWins++;
        roundCounter++;
    } else if (playerChoice == "Scissors" && computerChoiceName == "Paper") {
        alert("You win!");
        playerWins++;
        roundCounter++;
    } else if (playerChoice == "Scissors" && computerChoiceName == "Rock") {
        alert("You lose!");
        computerWins++;
        roundCounter++;
    } else {
        alert("It's a tie!");
    }
}

playerVsComputer();
computerPicksRPS();

console.log(computerWins);
console.log(playerWins);
console.log(roundCounter);

