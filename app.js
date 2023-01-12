// Initialize variablesz;
const choices = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;


// Apply loop to 5 points - higher level - Prompt
while (playerScore < 5 && computerScore < 5) {
    // Get players choice
      let playerSelection = prompt('Type Rock, Paper or Scissors: ');

    //Check if input is a valid choice
       if (choices.indexOf(playerSelection) === -1) {
           alert('Invalid input. Please try again, choose one of listed options.');
        // continue skips next loop == Restarts - Fixes bug of adding computerScore++ on invalid input
           continue;
     }

    // Generate computers choice
    let computerSelection = choices[Math.floor(Math.random() * 3)];
    //console.log(Math.floor(Math.random() * 3));

    // Play a round of the game - set up var - call playRound() for game to progress beyond initial prompt == within WHILE loop
    let result = playRound(playerSelection, computerSelection);
    //console.log(result);
    alert(result);
}

// Define playROund()
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! You have both selected ${playerSelection}. Try again!`
    } 
    // Check for win
    else if (playerSelection == 'rock' && computerSelection == 'scissors'   
        ||
        playerSelection == 'paper' && computerSelection == 'rock'
        ||
        playerSelection == 'scissors' && computerSelection == 'paper'
        ) {
        playerScore++;
        return `You win! Current score: ${playerScore} to ${computerScore}`;
    } 
    
    // Lost rounds == rest of possible outcomes - Refactor, eliminated several lines
    else {
        computerScore++;
        return `You lose! Current score: ${playerScore} to ${computerScore}`
    }
}

// Gameover 
if (playerScore === 5) {
    alert(`WINNER! You have defeated the computer.
    Final score: ${playerScore} to ${computerScore}`)
} else {
    alert(`You lost. AGI is superior. 
    Final score: ${playerScore} to ${computerScore}`)
}    


//Revisiting RPS -- Adding UI
// 3 buttons -- eventListeners to call playRound()