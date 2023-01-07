

function getComputerChoice() {
    let number =(Math.random() * 3);
    if (number <= 1) {
        return 'rock';
    }
    else if (number >= 2) {
        return 'paper';
    }
    else return 'scissors';
}
//console.log(getComputerChoice());

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! You have both selected ${playerSelection}. Try again!`
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;
        return `You lose! Current score: ${playerScore} to ${computerScore}`
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return `You win! Current score: ${playerScore} to ${computerScore}`
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        return `You lose! Current score: ${playerScore} to ${computerScore}`
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        return `You win! Current score: ${playerScore} to ${computerScore}`
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        computerScore++;
        return `You lose! Current score: ${playerScore} to ${computerScore}`
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        return `You lose! Current score: ${playerScore} to ${computerScore}` 
    }
}

const computerSelection = getComputerChoice();
//const playerSelection =

//console.log(playRound(playerSelection, computerSelection));


function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Type Rock, Paper or Scissors: ')
        playerSelection = playerSelection.toLowerCase();
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
    }
    // Final score after loop - Display winner/loser
    if (playerScore > computerScore) {
        return `WINNER! You have defeated the computer.
        Final score: ${playerScore} to ${computerScore}`
    } else if (playerScore < computerScore) {
        return `You lost. AGI is superior. 
        Final score: ${playerScore} to ${computerScore}`
    }
}

game();