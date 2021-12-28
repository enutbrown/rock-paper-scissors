let computerPlay = function() {
    let options = [['rock'], ['paper'], ['scissors']]
    let random = options[Math.floor(Math.random()*options.length)];
    return random;
};

let playRound = function(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return `${playerWin} Rock beats Scissors!`;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return `${compWin} Paper beats Rock!`;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return `${playerWin} Paper beats Rock!`;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return `${compWin} Scissors beats Paper!`;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return `${playerWin} Scissors beats Paper!`;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return `${compWin} Rock beats Scissors!`;
    } else if (playerSelection == ' ' && computerSelection == 'rock' || 'paper' || 'scissors') {
        return 'Let\'s Play';
    } else if (playerSelection ===  computerSelection) {
        return 'Draw!'
    }
 };

let game = function() {
    result = playRound(playerSelection, computerSelection);
    
};

const typedPlayerSelection = 'PaPer';
const playerSelection = typedPlayerSelection.toLowerCase();
const computerSelection = computerPlay();
const playerWin = 'You Win!';
const compWin = 'You Lose!'
const playerScore = 0;
const compScore = 0;
console.log(playRound(playerSelection, computerSelection));
console.log(game());
