
//function where computer returns random option rock, paper, scissors
let computerPlay = function() {
    let options = [['rock'], ['paper'], ['scissors']]
    let random = options[Math.floor(Math.random()*options.length)];
    return random;
};

// variables
const typedPlayerSelection = 'rock';
const playerSelection = typedPlayerSelection.toLowerCase();
const computerSelection = computerPlay();
const playerWin = 'You Win!';
const compWin = 'You Lose!'
let playerScore = 0;
let compScore = 0;


//plays one round of rock paper scissors, outputs who wins
let playRound = function(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return `${playerWin} Rock beats Scissors!` + ` Player Score: ${playerScore} `;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return `${compWin} Paper beats Rock!`;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return `${playerWin} Paper beats Rock!` + ` Player Score: ${playerScore} `;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return `${compWin} Scissors beats Paper!`;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return `${playerWin} Scissors beats Paper!` + ` Player Score: ${playerScore} `;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return `${compWin} Rock beats Scissors!`;
    } else if (playerSelection == ' ' && computerSelection == 'rock' || 'paper' || 'scissors') {
        return 'Let\'s Play';
    } else if (playerSelection ===  computerSelection) {
        return 'Draw!'
    }
    /*
    if (`${playerWin}`) {
        return playerScore++;            //code for decoration
    } else if (`${compWin}`) {
        return compScore++;
    } */
 };

 //function to play the game 5 times
const game = function() {
    console.log(playRound(playerSelection, computerSelection));
    
  
};

game();