






//going to play aginst a computer, that will randomly return rock, paper, or scissors.
function computerChoice() {
    let Choice = Math.random();
    if (Choice < 0.34){
    Choice="Rock";
   } else if(Choice < 0.67){
    Choice="Paper";
   } else{
    Choice="Scissors";
   }
   return(Choice.toUpperCase());
}


//player pick input rock, paper, or scissors. (input should be case insensitive)
//const  playerChoice = prompt("Choose Your Move: Rock, Paper, or Scissors").toUpperCase();
//this is being added to the loop no need to be included here


//give outcome by comparing both functions. computers random choice and players pick.
//also state who is the winner (eg: "You Lose! Paper beats Rock")
//we want to record the score here, so that we dont have to give conditional statement again in the loop.

let playerScore = 0;
let computerScore = 0;

function playRound(computerSelection, playerSelection){
    if (playerSelection === computerSelection){
        return ("Ties")
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER"){
        playerScore++;
        return ("You Picked Scissors and the computer picked Paper, You are the Winner!");
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK"){
        computerScore++;
        return ("You Picked Scissors and the computer picked Rock, The computer is the winner...");
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER"){
        computerScore++;
        return ("You Picked Rock, and the computer picked Paper, The computer is the winner...");
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS"){
        playerScore++;
        return ("You Picked Rock, and the computer picked Scissors, You are the Winner!");
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS"){
        computerScore++;
        return ("You Picked Paper, and the computer picked Scissors, The computer is the winner...")
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK"){
        playerScore++;
        return ("You Picked Paper, and the computer picked Rock, You are the Winner!");
    }

}

//play 5 rounds, keeps the score, and reports winner and loser at the end.
for (let step=0; step<5; step++){
    const computerSelection = computerChoice();
    const playerSelection = prompt("Choose Your Move: Rock, Paper, or Scissors").toUpperCase();
    console.log(playRound(computerSelection, playerSelection));
    console.log("Your Score is" + " " + playerScore);
    console.log("Computer Score is" + " " + computerScore);
}

//declare who is the final winner by comparing score results
if (playerScore > computerScore){
        console.log("Final Result: Player has a Score of" + " " + playerScore + ", and " + "computer has a Score of" + " " + computerScore + ", thus Player is the Winner!");
    } else if (playerScore<computerScore){
        console.log("Final Result: Player has a Score of" + " " + playerScore + ", and " + "computer has a Score of" + " " + computerScore + ", thus Computer is the Winner!");
    } else {
        console.log ("Final Result: Player has a Score of" + " " + playerScore + ", and " + "computer has a Score of" + " " + computerScore + ", thus its a Tie!");
    }























 