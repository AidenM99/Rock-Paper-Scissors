let playerScoreValue = 0;
let computerScoreValue = 0;


/*****Player selection*****/
const choice = document.querySelectorAll(".choice");
choice.forEach(function(item) {
    item.addEventListener("click", (e) => {
        const playerSelection = e.target.id;
        playRound(playerSelection);
    });
});


/*****Computer selection*****/
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random()*choices.length);
    const computerChoice = choices[randomNumber];

    const computerIcon = document.querySelector (".computer-icon");
    computerIcon.classList.remove ("fa-hand-rock", "fa-hand-paper", "fa-hand-scissors");
    computerIcon.classList.add (`fa-hand-${computerChoice}`, "active");
    
    return computerChoice;
};


/*****Player selection is compared to computer selection*****/
function playRound(playerSelection) {  
    const playerScore = document.querySelector(".player-score-value");
    const computerScore = document.querySelector(".computer-score-value");

    const text = document.querySelector(".choice-text");

    const playerIcon = document.querySelector (".player-icon");
    playerIcon.classList.remove  ("fa-hand-rock", "fa-hand-paper", "fa-hand-scissors");
    playerIcon.classList.add (`fa-hand-${playerSelection}`, "active");

    const computerSelection = computerPlay();

    /*****Checks score before conditionals are assessed*****/
    if (playerScoreValue == 5) {
        playerScoreValue=0;
        computerScoreValue=0;
    }else if (computerScoreValue == 5) {
        computerScoreValue=0;
        playerScoreValue=0;
    };

    if (playerSelection==computerSelection) {
        text.innerText = "It's a tie!";
    }
    else if (playerSelection=="rock") {
        if (computerSelection=="paper") {
            text.innerText = "You lose, paper covers rock!";
            computerScoreValue++;
        }else{
            text.innerText = "You win, rock smashes scissors!";
            playerScoreValue++;
        }
    }
    else if (playerSelection=="paper") {
        if (computerSelection=="scissors") {
            text.innerText = "You lose, scissors cuts paper!";
            computerScoreValue++;
        }else{
            text.innerText = "You win, paper covers rock!";
            playerScoreValue++;
        }
    }
    else if (playerSelection=="scissors") {
        if (computerSelection=="rock") {
            text.innerText = "You lose, rock smashes scissors!";
            computerScoreValue++;
        }else{
            text.innerText = "You win, scissors cuts paper!";
            playerScoreValue++;
        }
    }
    playerScore.innerText = playerScoreValue;
    computerScore.innerText = computerScoreValue; 
    checkScore(playerScoreValue, computerScoreValue)
};

/*****Check score function*****/
function checkScore(playerScoreValue, computerScoreValue) {
    const text = document.querySelector(".choice-text");
    if (playerScoreValue == 5) {
        text.innerText = "Player One Wins!";
    }else if (computerScoreValue == 5) {
        text.innerText = "Computer Wins!";
    };
};









