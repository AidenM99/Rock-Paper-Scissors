/*****Computer will pick either rock paper or scissors*****/
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random()*choices.length);
    const computerChoice = choices[randomNumber];
    console.log(computerChoice);
}


