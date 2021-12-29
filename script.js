
//function where computer returns random option rock, paper, scissors
let computerPlay = function() {
    let options = [['rock'], ['paper'], ['scissors']]
    let random = options[Math.floor(Math.random()*options.length)];
    return random;
};

// variables
const typedPlayerSelection = prompt('Rock, Paper or Scissors?');
const playerSelection = typedPlayerSelection.toLowerCase();
let computerSelection = computerPlay();
const playerWin = 'You Win!';
const compWin = 'You Lose!'
let playerScore = 0;
let compScore = 0;



//plays one round of rock paper scissors, outputs who wins
let playRound = function(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return `${playerWin} Rock beats Scissors!` + ' Player Score: ' + ++playerScore;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return `${compWin} Paper beats Rock!` + ' Computer Score: ' + ++compScore;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return `${playerWin} Paper beats Rock!` + ' Player Score: ' + ++playerScore;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return `${compWin} Scissors beats Paper!` + ' Computer Score: ' + ++compScore;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return `${playerWin} Scissors beats Paper!` + ' Player Score: ' + ++playerScore;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return `${compWin} Rock beats Scissors!` + ' Computer Score: ' + ++compScore;
    } else if (playerSelection == computerSelection) {
        return 'Draw!' 
    } else {
        return 'I do not understand.'
    }

 };

 //function to play the game 5 times
const game = function() {
    let playerScore = 0;
    let compScore = 0;
    const computerSelection = computerPlay();
    const playerSelection = typedPlayerSelection.toLowerCase();

    console.log(playRound(playerSelection, computerSelection));
}

game();
game();
game();
game();
game();

// Output to declare winner
if (playerScore > compScore) {
    console.log('Congratulations! You win!');
} else if (compScore > playerScore) {
    console.log('Computer Wins! Let\'s play again!');
}