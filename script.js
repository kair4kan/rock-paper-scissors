//SET a function that will get the random computer choice
function getComputerChoice(){
    //CALL Math.random and Math.floor to create random 3 options
    let random = Math.floor(Math.random()*3);
    if(random==0){
        return "rock";
    }else if(random==1){
        return "paper";
    }else if(random==2){
        return "scissors";
    }
}
//SET a function that takes two variables and plays a round based on the values
function playRound(playerSelection, computerSelection){
    //SET playerSelection to lowered case of itself
    playerSelection = playerSelection.toLowerCase();
    //CONDITIONS Rock paper scissors game conditions
    if(playerSelection=="rock"){
        if(computerSelection=="rock"){
            return "Tie!"
        }else if(computerSelection=="paper"){
            return "You Lose! Paper beats Rock"
        }else if(computerSelection="scissors"){
            return "You Win! Rock beats Scissors"
        }
    }else if(playerSelection=="paper"){
        if(computerSelection=="rock"){
            return "You Win! Paper beats Rock"
        }else if(computerSelection=="paper"){
            return "Tie!"
        }else if(computerSelection=="scissors"){
            return "You Lose! Scissors beat Paper"
        }
    }else if(playerSelection=="scissors"){
        if(computerSelection=="rock"){
            return "You Lose! Rock beats scissors"
        }else if(computerSelection=="paper"){
            return "You Win! Scissors beat Paper"
        }else if(computerSelection=="scissors"){
            return "Tie!"
        }
    }else{
        return "Please enter a valid option!"
    }
}

//SET a new function that plays a 5 round game of rock paper scissors
function game(){
    let i=0;
    while(i<5){
        //GET playerSelection from user
        let playerSelection = prompt("Rock Paper Scissors: ");
        //GET computerSelection from getComputerChoice function
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
        i++
        console.log(`Round count: ${i}`)
    }
}
game()