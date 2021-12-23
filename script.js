let computerPlay = function() {
    let options = [['rock'], ['paper'], ['scissors']]
    let random = options[Math.floor(Math.random()*options.length)];
    return random;
}

let playRound = function(playerSelection, computerSelection) {
    if ('rock', 'scissors') {
        return 'You Win! Rock beats Scissors!'
    } else if ('rock', 'paper') {
        return 'You Lose! Paper beats Rock!';
    } else if ('paper', 'rock') {
        return 'You Win! Paper beats Rock!';
    } else if ('paper', 'scissors') {
        return 'You Lose! Scissors beats Paper!';
    } else if ('scissors', 'paper') {
        return 'You Win! Scissors beats Paper!';
    } else if ('scissors', 'rock') {
        return 'You Lose! Rock beats Scissors!';
    } else {
        return 'Let\'s Play!'
    }
}

const playerSelection = 'rock';
const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));
