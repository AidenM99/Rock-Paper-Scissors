const playerSelection = "paper";

/*****Computer will pick either rock paper or scissors*****/
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random()*choices.length);
    const computerChoice = choices[randomNumber];
    return computerChoice;
}

/*****Player's selection will be compared against the computer's selection*****/
function playRound(playerSelection) {
    const computerSelection = computerPlay();
    if (playerSelection==computerSelection) {
        console.log ("It's a tie!");
    }
    else if (playerSelection=="rock") {
        if (computerSelection=="paper") {
            console.log ("You lose, paper covers rock!");
        }else{
            console.log ("You win, rock beats scissors!")
        }
    }
    else if (playerSelection=="paper") {
        if (computerSelection=="scissors") {
            console.log ("You lose, scissors cut paper!");
        }else{
            console.log ("You win, paper covers rock!");
        }
    }
    else if (playerSelection=="scissors") {
        if (computerSelection=="rock") {
            console.log ("You lose, rock beats scissors!");
        }else{
            console.log ("You win, scissors cut paper!");
        }
    }
}

/*****Function to playRound a total of five times*****/
function playGame() {
    for (i=0; i<5; i++) {
        playRound(playerSelection)
    }
}
playGame();







