function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let computerSelection = choices[Math.floor(3 * Math.random())];

    return computerSelection;
}



function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You win! Rock beats scissors.')
        playerScore++;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You lose! Paper covers rock.');
        computerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You win! Scissors cut paper.');
        playerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You lose! Rock beats scissors.');
        computerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You win! Paper covers rock.');
        playerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('You lose! Scissors cut paper.')
        computerScore++;
    } else {
        return;
    }
}


let playerSelection = prompt("Rock, paper, scissors?").toLowerCase();
let computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);

