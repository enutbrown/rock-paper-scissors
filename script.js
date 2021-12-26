let computerPlay = function() {
    let options = [['rock'], ['paper'], ['scissors']]
    let random = options[Math.floor(Math.random()*options.length)];
    return random;
};

let playRound = function(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You Win! Rock beats Scissors!';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You Lose! Paper beats Rock!';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'You Win! Paper beats Rock!';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You Lose! Scissors beats Paper!';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You Win! Scissors beats Paper!';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You Lose! Rock beats Scissors!';
    } else if (playerSelection == ' ' && computerSelection == 'rock' || 'paper' || 'scissors') {
        return 'Let\'s Play';
    } else if (playerSelection ===  computerSelection) {
        return 'Draw!'
    }
 };

let game = function() {
    let result;
    result = playRound(playerSelection, computerSelection);
    return result;
};

const typedPlayerSelection = 'PaPer';
const playerSelection = typedPlayerSelection.toLowerCase();
const computerSelection = computerPlay();
const playerScore = 0;
const compScore = 0;
console.log(playRound(playerSelection, computerSelection));
console.log(game());
