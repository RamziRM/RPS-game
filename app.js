// Initialize variablesz;
const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

let playerScoreElement = document.getElementById("player-score");
let computerScoreElement = document.getElementById("computer-score");

let resultElement1 = document.getElementById("result1");
let gameoverElement = document.getElementById("gameover");

// 3 buttons -- eventListeners to call playRound()
let rockBtn = document.getElementById("rock-btn");
rockBtn.addEventListener('click', () => playRound('rock'));

let paperBtn = document.getElementById("paper-btn");
paperBtn.addEventListener('click', () => playRound('paper'));

let scissorsBtn = document.getElementById('scissors-btn');
scissorsBtn.addEventListener('click', () => playRound('scissors'));


// Define playROund() -- Include iterations and end of loop within f()
function playRound(playerSelection) {

    // Generate computers choice
    let computerSelection = choices[Math.floor(Math.random() * 3)];

    if (playerSelection === computerSelection) {
        console.log(`It's a tie! You have both selected ${playerSelection}. Try again!`)
    } 
    // Check for win
    else if (playerSelection == 'rock' && computerSelection == 'scissors'   
        ||
        playerSelection == 'paper' && computerSelection == 'rock'
        ||
        playerSelection == 'scissors' && computerSelection == 'paper'
        ) {
        playerScore++;
        console.log (`You win! Current score: ${playerScore} to ${computerScore} (${playerSelection} vs ${computerSelection})`);
    } 
    // Lost rounds == rest of possible outcomes - Refactor, eliminated several lines
    else {
        computerScore++;
        console.log(`You lose! Current score: ${playerScore} to ${computerScore} (${playerSelection} vs ${computerSelection})`);
    }

    playerScoreElement.innerHTML = playerScore;
    computerScoreElement.innerHTML = computerScore;
    resultElement1.innerHTML = ` ${playerSelection}`;

    if (playerScore === 5) {
    gameoverElement.innerHTML = `WINNER! You have defeated the computer.
    Final score: ${playerScore} to ${computerScore}`;
    } 
    else if(computerScore === 5) {
    gameoverElement.innerHTML = `You lost. AGI is superior. 
    Final score: ${playerScore} to ${computerScore}`;
    }
    if (playerScore === 5 || computerScore === 5) {
        rockBtn.style.display = 'none';
        paperBtn.style.display = 'none';
        scissorsBtn.style.display = 'none';
        }

}