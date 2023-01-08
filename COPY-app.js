// Task: REdo RPS game, test style. Avoid checking other code

// initialize variables

const choices = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;

// create loop to 5 points -- + round game

while (playerScore < 5 && computerScore < 5) {

    // Computer choice
    let computerChoice = choices[Math.floor(Math.random() * 3)];

    // PLayer choice - prompt
    let playerPrompt = prompt('Type your choice. Rock, Paper, Scissors: ');
    let playerChoice = playerPrompt.toLowerCase();

    // Check if input is valid
    if (choices.indexOf(playerChoice) === -1) {
        alert('Input valid choice, to play. Rock, Paper or Scissors');
        continue; // Skips loop iteration, when input invalid
    }

    let result = aRound(playerChoice, computerChoice);

    gameOver();
}

// Round/Game structure -- Outcomes
function aRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        alert(`It's a tie. You have both selected ${playerChoice}. Try again!`);
    } else if (playerChoice == 'rock' && computerChoice == 'scissors' ||
        playerChoice == 'paper' && computerChoice == 'rock' ||
        playerChoice == 'scissors' && computerChoice == 'paper') {
            playerScore++;
            alert(`You win this round. ${playerChoice} beats ${computerChoice}
            Current score: ${playerScore} to ${computerScore}`)
        } else {
            computerScore++;
            alert(`You lost this round. ${computerChoice} beats ${playerChoice}
            Current score: ${playerScore} to ${computerScore}`)
        }
}

function gameOver() {
    if (playerScore == 5) {
        alert(`You won! Final score ${playerScore} to ${computerScore}
        You have defeated the computer, one more contribution towards resisting AGI dominance.`)
    } else if (computerScore == 5) {
        alert(`You lost! Final score ${playerScore} to ${computerScore}
        You have been defeated by the computer, one more step towards AGI dominance.`)
    }
}