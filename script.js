let computerPlay = function() {
    let options = [['rock'], ['paper'], ['scissors']]
    let random = options[Math.floor(Math.random()*options.length)];
    return random;
}

let playRound = function(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You Win! Rock beats Scissors!'
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
        return 'Let\'s Play!'
    }
}

const playerSelection = 'scissors';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
