//function where computer returns random option rock, paper, scissors
function computerPlay() {
    let options = [['rock'], ['paper'], ['scissors']]
    let random = options[Math.floor(Math.random()*options.length)];
    return random;
}

// variables
//const typedPlayerSelection = prompt('Please select Rock, Paper, or Scissors')
//const playerSelection = typedPlayerSelection.toLowerCase();
//let computerSelection = computerPlay();
const playerWin = 'You Win!';
const compWin = 'You Lose!'
//let playerScore = 0;
//let compScore = 0;
//let moves = 1;


//plays one round of rock paper scissors, outputs who wins
function playRound(playerSelection, computerSelection) {
    if (playerSelection = null || undefined) {
        return 'You did not choose a weapon'
    }else if (playerSelection == 'rock' && computerSelection == 'scissors') {
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

 //function to play the game until winner
function game() {
    let playerScore = 0;
    let compScore = 0;
  
    //plays game for 5 rounds
    if(playerScore || compScore !== 5) {
        let computerSelection = computerPlay();
        let gameResult = playRound(playerSelection, computerSelection)

        if(gameResult == `${playerWin} Rock beats Scissors!` + ' Player Score: ' + ++playerScore) {
            moves++;
        } else if(gameResult == `${compWin} Paper beats Rock!` + ' Computer Score: ' + ++compScore) {
            moves++
        }
    }

        console.log(playRound(playerSelection, computerSelection));

        // Output to declare winner
    if (playerScore = 5) {
        console.log('Congratulations! You win!');
    } else if (compScore =5) {
        console.log('Computer Wins! Let\'s play again!');
    }
}


game();