let computerPlay = function() {
    let options = [['rock'], ['paper'], ['scissors']]
    let random = options[Math.floor(Math.random()*options.length)];
    return random;
}

let playRound = function(playerSelection, computerSelection) {
    if (playerSelection == ' ' && computerSelection == 'rock' || 'paper' || 'scissors') {
        return 'Let\'s Play!'
    } else if (playerSelection == 'rock' && computerSelection ==  'paper') {
        return 'You Lose! Paper beats Rock!';
    } else if (playerSelection == 'paper' && computerSelection ==   'rock') {
        return 'You Win! Paper beats Rock!';
    } else if (playerSelection == 'paper' && computerSelection ==   'scissors') {
        return 'You Lose! Scissors beats Paper!';
    } else if (playerSelection == 'scissors' && computerSelection ==   'paper') {
        return 'You Win! Scissors beats Paper!';
    } else if (playerSelection == 'scissors' && computerSelection ==   'rock') {
        return 'You Lose! Rock beats Scissors!';
    } else {
        return 'You Win! Rock beats Scissors!';
    }
}

const playerSelection = '';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
