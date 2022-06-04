var yourScore = 0;
var combuterScore = 0;

function random(){
    return Math.floor(Math.random() * 3);
}
function computerPlay(){
    let number=random();
    if (number == 0) {
        return "rock";
    }
    else if (number == 1) {
        return "paper";
    }
    else if (number == 2) {
        return "scissor";
    }
}

function singleRound(playerSelection, computerSelection){
    computerSelection = computerPlay()
    
    console.log("Computer select " + computerSelection + " this time!" )
    alert("Combuter choose "+ computerSelection );
    let state; // state =1 you won state =0 you lose -1 for draw /////////

    //equals 
    if (playerSelection === computerSelection){
        state = -1;    
        
        console.log("the result is draw\n 'in this round'\n becouse You chose becuse it's same ")
        return calculateTheWiner(state); //+ {state} ;
    }
     //Rock
    else if (playerSelection == "rock" && computerSelection == "paper") {
        state = 0;
        
        console.log("You lose 'in this round'\n becouse You chose 'Rock'\n & computerSelection chosen 'Paper' ");
        return calculateTheWiner(state); // + { state };
    }
    else if (playerSelection == "rock" && computerSelection == "scissor") {
        state = 1;
        
        console.log("You win 'in this round'\n becouse You chose 'Rock'\n & computerSelection chosen 'Scissor' ");
        return calculateTheWiner(state);// + { state };
    }
    //Paper
    
    else if (playerSelection == "paper" && computerSelection == "scissor") {
        state = 0;

        console.log("You lose 'in this round'\n becouse You chose 'Rock'\n & computerSelection chosen 'Paper' ");
        return calculateTheWiner(state); // + { state };
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        state = 1;
        
        console.log("You win 'in this round'\n becouse You chose 'Rock'\n & computerSelection chosen 'Scissor' ");
        return calculateTheWiner(state); // + { state };
    }
    //Scissor
    else if (playerSelection == "scissor" && computerSelection == "rock") {
        state = 0
        console.log("You lose 'in this round'\n becouse You chose 'Rock'\n & computerSelection chosen 'Paper' ");
        return calculateTheWiner(state); // + { state };
    }
    else if (playerSelection == "scissor" && computerSelection == "paper") {
        state = 1;
        console.log("You win 'in this round'\n becouse You chose 'Rock'\n & computerSelection chosen 'Scissor' ");
        return calculateTheWiner(state); //+ { state };
    }
    else{
        return "May The input is wrong !"
    }
}
function game(){
    for(let i=0 ; i<5;i++){
        alert("Round " + (i + 1) );
        console.log("Round " + (i + 1));
        playerSelection = prompt("Chose either 'Scissor' or 'Paper' or 'Rock'");               
        playerSelection = playerSelection.toLowerCase();
        alert("You choose " + playerSelection);
        console.log("You choose " + playerSelection);
        
        console.log((i + 1) + " " + calculateTheWiner(singleRound(playerSelection, computerSelection)));
    }
    if (yourScore > combuterScore)
        console.log("you won becose your score : " + yourScore + " bigger than combuterScore : " + combuterScore)
    if (yourScore < combuterScore)
        console.log("you loose becose your score : " + yourScore + " less than combuterScore : " + combuterScore)
}

function calculateTheWiner(state){
    if (state == 1){
        yourScore++;
        return console.log("Your score : "+yourScore ,"Computer score : " + combuterScore)    
    }
    else if(state == 0){
        combuterScore++;      
        return console.log("Your score : " + yourScore, "Computer score : " + combuterScore)      // return yourScore + `-> your score`, combuterScore '+-> combuter Score';
    }
    else if (state == -1) {
        return console.log("Your score : " + yourScore, "Computer score : " + combuterScore)        // -> combuter Score";
    }
    else{
        return console.log("There is a problem")   
    }
}
alert("Welcome to the game");
console.log("Welcome to the game \n")

let playerSelection ;
let computerSelection; // = computerPlay();
console.log(game());
