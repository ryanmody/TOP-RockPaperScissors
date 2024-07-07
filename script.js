let computerChoiceNumber;
let playerChoice;
let computerChoiceName;
let roundCounter = 0;
let playerWins = 0;
let computerWins = 0;

let playerWinsText = document.querySelector("#playerWins");
let computerWinsText = document.querySelector("#computerWins");
let roundCounterText = document.querySelector("#roundCounter");

const buttonrock = document.querySelector("#buttonrock");
const buttonpaper = document.querySelector("#buttonpaper");
const buttonscissors = document.querySelector("#buttonscissors");

// Initializing the buttons
buttonrock.onclick = rockVsComputer;
buttonpaper.onclick = paperVsComputer;
buttonscissors.onclick = scissorsVsComputer;


// Computer picks Rock, Paper, or Scissors
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


// Player makes their choice via buttons
function rockVsComputer() {
    playerChoice = "Rock"
    playerVsComputer();
}

function paperVsComputer() {
    playerChoice = "Paper"
    playerVsComputer();
}

function scissorsVsComputer() {
    playerChoice = "Scissors"
    playerVsComputer();
}


function playerVsComputer () {
// Code for player choosing RPS, and determining outcome
    if (playerChoice == "Rock" && computerChoiceName == "Scissors") {
        alert("You win!");
        playerWins++;
        roundCounter++;
        computerPicksRPS();
        playerWinsText.innerText = playerWins;
        roundCounterText.innerText = roundCounter;
        computerWinsText.innerText = computerWins;
    } else if (playerChoice == "Rock" && computerChoiceName == "Paper") {
        alert("You lose!");
        computerWins++;
        roundCounter++;
        computerPicksRPS();
        playerWinsText.innerText = playerWins;
        roundCounterText.innerText = roundCounter;
        computerWinsText.innerText = computerWins;
    } else if (playerChoice == "Paper" && computerChoiceName == "Rock") {
        alert("You win!");
        playerWins++;
        roundCounter++;
        computerPicksRPS();
        playerWinsText.innerText = playerWins;
        roundCounterText.innerText = roundCounter;
        computerWinsText.innerText = computerWins;
    } else if (playerChoice == "Paper" && computerChoiceName == "Scissors") {
        alert("You lose!");
        computerWins++;
        roundCounter++;
        computerPicksRPS();
        playerWinsText.innerText = playerWins;
        roundCounterText.innerText = roundCounter;
        computerWinsText.innerText = computerWins;
    } else if (playerChoice == "Scissors" && computerChoiceName == "Paper") {
        alert("You win!");
        playerWins++;
        roundCounter++;
        computerPicksRPS();
        playerWinsText.innerText = playerWins;
        roundCounterText.innerText = roundCounter;
        computerWinsText.innerText = computerWins;
    } else if (playerChoice == "Scissors" && computerChoiceName == "Rock") {
        alert("You lose!");
        computerWins++;
        roundCounter++;
        computerPicksRPS();
        playerWinsText.innerText = playerWins;
        roundCounterText.innerText = roundCounter;
        computerWinsText.innerText = computerWins;
    } else {
        alert("It's a tie!");
        roundCounter++;
        roundCounterText.innerText = roundCounter;
    }

    //Code for checking if the game is done
    if (roundCounter > 4) {
        if (playerWins > computerWins) {
            alert("You won the set");
        } else if (playerWins < computerWins) {
            alert("You lost the set");
        } else {}
    }
}