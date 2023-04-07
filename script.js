let playerScore = 0;
let computerScore = 0;
let score = playerScore + ' : ' + computerScore

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let computerSelection = choices[Math.floor(3 * Math.random())];

    return computerSelection;
}



function playRound() {
    let playerSelection = prompt("Rock, paper, scissors?").toLowerCase();
    let computerSelection = getComputerChoice();
    let result = '';


    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {
        playerScore ++;
        result = `You win! ${playerSelection} beats ${computerSelection}`;
        console.log(result);
        console.log(`The score is ${score}`)

    } else if (computerSelection == playerSelection) {
        result = 'It\'s a draw!';
        console.log(result);
        console.log(`The score is ${score}`)
    } else {
        computerScore ++;
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
        console.log(result);
        console.log(`The score is ${score}`);
    }
}




function playGame() {
    while (playerScore < 5 && computerScore < 5) {
        playRound();
    };

    if (playerScore = 5) {
        console.log(`You win the game! The score was ${score}`)
    } else {
        console.log(`You lose the game you utter noob! The score was ${score}`)
    }
}

playGame();
