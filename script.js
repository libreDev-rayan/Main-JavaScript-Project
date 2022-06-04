function computerPlay(){
    if (Math.floor(Math.random() * 3) === 0) {
        return 'rock';
    }
    else if (Math.floor(Math.random() * 3) === 1) {
        return 'paper';
    }
    else if (Math.floor(Math.random() * 3) === 2) {
        return 'scissor';
    }

    // randomly return either 
    // ‘Rock’, ‘Paper’ or ‘Scissors’.
}
function singleRound(playerSelection, computerSelection){
    // return a string that declares the winner
    //  of the round like so: "You Lose! Paper beats Rock"
    
    computerSelection = computerPlay();
    //Rock
    if (playerSelection == "rock" && computerSelection == "rock"){
        return "the result is draw becouse You chose 'Rock'\n & computerSelection chosen'Rock' "
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose becouse You chose 'Rock'\n & computerSelection chosen 'Paper' "
    }
    else if (playerSelection == "rock" && computerSelection == "scissor") {
        return "You win becouse You chose 'Rock'\n & computerSelection chosen 'Scissor' "
    }
    //Paper
    else if (playerSelection == "paper" && computerSelection == "paper") {
        return "the result is draw becouse You chose 'Rock'\n & computerSelection chosen'Rock' "
    }
    else if (playerSelection == "paper" && computerSelection == "scissor") {
        return "You lose becouse You chose 'Rock'\n & computerSelection chosen 'Paper' "
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win becouse You chose 'Rock'\n & computerSelection chosen 'Scissor' "
    }
    //Scissor
    else if (playerSelection == "scissor" && computerSelection == "scissor") {
        return "the result is draw becouse You chose 'Rock'\n & computerSelection chosen'Rock' "
    }
    else if (playerSelection == "scissor" && computerSelection == "rock") {
        return "You lose becouse You chose 'Rock'\n & computerSelection chosen 'Paper' "
    }
    else if (playerSelection == "scissor" && computerSelection == "paper") {
        return "You win becouse You chose 'Rock'\n & computerSelection chosen 'Scissor' "
    }
    else{
        return "May The input is wrong !"
    }
}
function game(){
    for(let i=0 ; i<5;i++){
        playerSelection = prompt("Chose either 'Scissor' or 'Paper' or 'Rock'")         //computerPlay();//"Rock";
        alert("chosen");
        playerSelectiontext.toLowerCase();
        console.log((i+1) + " " + singleRound(playerSelection, computerSelection));
    }
}
alert("welcome to the game");
let playerSelection ;// playerSelection = window.prompt(); // open the blank prompt window
// playerSelection = prompt();

const computerSelection = computerPlay();
// console.log(" chose by write below Rock or Paper or Scissors");
console.log(game());
// console.log(computerPlay());