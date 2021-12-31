//function where computer returns random option rock, paper, scissors
function computerPlay() {
    let options = [['rock'], ['paper'], ['scissors']]
    let random = options[Math.floor(Math.random()*options.length)];
    return random;
}

// variables
const typedPlayerSelection = 'rock' || 'paper' || 'scissors'
const playerSelection = typedPlayerSelection.toLowerCase();
let computerSelection = computerPlay();
const playerWin = 'You Win!';
const compWin = 'You Lose!'
let playerScore = 0;
let compScore = 0;
let round = 6;


//plays one round of rock paper scissors, outputs who wins
function playRound(playerSelection, computerSelection) {
    

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
}

 //function to play the game 5 times
function game() {
    let playerScore = 0;
    let compScore = 0;
  
    //plays game for 5 rounds
    if(round < 5) {
        let playerSelection = prompt('Please select Rock, Paper, or Scissors')
    
        let computerSelection = computerPlay();
        let gameResult = playRound(playerSelection, computerSelection)

        if(gameResult == `${playerWin}`) {
            playerScore++ round++;
        } else if(gameResult == `${compWin}`)
    }

        // Output to declare winner
    if (playerScore > compScore) {
        console.log('Congratulations! You win!');
    } else if (compScore > playerScore) {
        console.log('Computer Wins! Let\'s play again!');
    }
}


