//function where computer returns random option rock, paper, scissors
function computerPlay() {
    let options = [
        ['rock'],
        ['paper'],
        ['scissors']
    ]
    let random = options[Math.floor(Math.random() * options.length)];
    return random;
}

// variables
const playerWin = 'You Win!';
const compWin = 'You Lose!'


//plays one round of rock paper scissors, outputs who wins
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return `${playerWin} Rock beats Scissors!` + ' Player Score: ' + `${playerScore}`;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return `${compWin} Paper beats Rock!` + ' Computer Score: ' + `${compScore}`;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return `${playerWin} Paper beats Rock!` + ' Player Score: ' + `${playerScore}`;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return `${compWin} Scissors beats Paper!` + ' Computer Score: ' + `${compScore}`;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return `${playerWin} Scissors beats Paper!` + ' Player Score: ' + `${playerScore}`;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return `${compWin} Rock beats Scissors!` + ' Computer Score: ' + `${compScore}`;
    } else if (playerSelection == computerSelection) {
        return 'Draw!'
    } else {
        return 'I do not understand.'
    }
}

let playerScore = 0;
let compScore = 0

//function to play the game 
function game() {
    const typedPlayerSelection = prompt('Please select Rock, Paper, or Scissors', 'rock')
    const playerSelection = typedPlayerSelection.toLowerCase();
    let computerSelection = computerPlay();
    let gameResult = playRound(playerSelection, computerSelection)
    

    //plays game and tracks points
    if (playerScore !==5 || compScore !== 5) {
        if (gameResult == `${playerWin} Rock beats Scissors!` + ' Player Score: ' + `${playerScore}`) {
            playerScore++;
        } if (gameResult == `${compWin} Paper beats Rock!` + ' Computer Score: ' + `${compScore}`) {
            compScore++;
        } if (gameResult == `${playerWin} Paper beats Rock!` + ' Player Score: ' + `${playerScore}`) {
            playerScore++;
        } if (gameResult == `${compWin} Scissors beats Paper!` + ' Computer Score: ' + `${compScore}`) {
            compScore++;
        } if (gameResult == `${playerWin} Scissors beats Paper!` + ' Player Score: ' + `${playerScore}`) {
            playerScore++;
        } if (gameResult == `${compWin} Rock beats Scissors!` + ' Computer Score: ' + `${compScore}`) {
            compScore++;
        }
    }

    console.log(playRound(playerSelection, computerSelection));  //outputs round result to console
    
    let gameScore = `Your Score: ${playerScore} - Computer Score: ${compScore}`;
    console.log(gameScore);                        //tracks score
}


game();
game();
game();
game();
game();

// output to declare winner
if (playerScore > compScore) {
    console.log('Congratulations! You win!');               
} else if (compScore > playerScore) {
    console.log('Computer Wins! Let\'s play again!');
}
