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
    

    //plays game until winner has 5 points
    if (playerScore !==5 || compScore !== 5) {
        if (gameResult == `${playerWin} Rock beats Scissors!` + ' Player Score: ' + `${playerScore}`) {
            playerScore++;
        } if (gameResult == `${compWin} Paper beats Rock!` + ' Computer Score: ' + `${compScore}`) {
            compScore++;
        }
    }

    console.log(playRound(playerSelection, computerSelection));
    
    let gameScore = `Your Score: ${playerScore} - Computer Score: ${compScore}`;
    console.log(gameScore);

    
    // Output to declare winner
    
    /* switch (true) {
        case playerScore == 5:
            console.log('Congratulations! You win!');
            break;
        case compScore == 5:                                    //second try
            console.log('Computer Wins! Let\'s Play again!')
            break;
        default:
            playRound(playerSelection, computerSelection);
    }

    
    if (playerScore > compScore) {
        console.log('Congratulations! You win!');               //first try
    } else if (compScore > playerScore) {
        console.log('Computer Wins! Let\'s play again!');
    } */
}


game();
game();
game();
game();
game();

if (playerScore > compScore) {
    console.log('Congratulations! You win!');               //first try
} else if (compScore > playerScore) {
    console.log('Computer Wins! Let\'s play again!');
}

//let gameScore = `Your Score: ${playerScore} - Computer Score: ${compScore}`;
  //  console.log(gameScore);
