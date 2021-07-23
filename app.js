/*****Player selection*****/
const choice = document.querySelectorAll(".choice");
choice.forEach(function(item) {
    item.addEventListener("click", (e) => {
        const playerSelection = e.target.id;
        playRound(playerSelection);
    })
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
    const playerIcon = document.querySelector (".player-icon");
    playerIcon.classList.remove  ("fa-hand-rock", "fa-hand-paper", "fa-hand-scissors");
    playerIcon.classList.add (`fa-hand-${playerSelection}`, "active");

    const text = document.querySelector (".choice-text")

    const computerSelection = computerPlay();
    if (playerSelection==computerSelection) {
        text.innerText = "It's a tie!";
    }
    else if (playerSelection=="rock") {
        if (computerSelection=="paper") {
            text.innerText = "You lose, paper covers rock!";
        }else{
            text.innerText = "You win, rock beats scissors!";
        }
    }
    else if (playerSelection=="paper") {
        if (computerSelection=="scissors") {
            text.innerText = "You lose, scissors cut paper!";
        }else{
            text.innerText = "You win, paper covers rock!";
        }
    }
    else if (playerSelection=="scissors") {
        if (computerSelection=="rock") {
            text.innerText = "You lose, rock beats scissors!";
        }else{
            text.innerText = "You win, scissors cut paper!";
        }
    }
};


/*****Invokes playRound function five times*****/
function playGame() {
    for (i=0; i<5; i++) {
        playRound(playerSelection)
    }
}








