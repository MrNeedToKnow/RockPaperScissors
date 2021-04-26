//define user's button
const Rock = document.querySelector("#playerimgRock");
const Paper = document.querySelector("#playerimgPaper");
const Scissors = document.querySelector("#playerimgScissors");
const buttons= document.querySelectorAll(".playerimg");

//define computer's button
const computerRock = document.querySelector("#computerimgROCK");
const computerPaper = document.querySelector("#computerimgPAPER");
const computerScissors = document.querySelector("#computerimgSCISSORS");

//define Scores and start score with 0
const playerPoint = document.querySelector(".playerScore")
const computerPoint = document.querySelector(".computerScore")
playerScore = 0
computerScore = 0
playerPoint.textContent=`Player Score: ${playerScore}`;
computerPoint.textContent=`Computer Score: ${computerScore}`;

//define result and start with game start
const Result = document.querySelector(".resultContainer")
Result.textContent="Game Start"

//define game restart button
const Restart= document.querySelector(".restart")
Restart.textContent="";

//define # of Round and start with round 0
const Rounds = document.querySelector(".rounds")
round = 0
Rounds.textContent=`${round}`


//add event listener 3 player selection buttons
//Rock.addEventListener("click", playerSelection);
//Paper.addEventListener("click", playerSelection);
//Scissors.addEventListener("click", playerSelection);
buttons.forEach(selection => selection.addEventListener('click', playerSelection));

//function of player's Selection
function playerSelection(e){
    let playerPick = e.target;
    if (playerPick === Rock){
        playerPick = "ROCK"
    } else if (playerPick === Paper){
        playerPick = "PAPER"
    } else {
        playerPick = "SCISSORS"
    }
        playerButtonAnimation(playerPick);
        playRound(computerChoice(), playerPick);
}


//function to make computer's selection
function computerChoice() {
    let choice = Math.random();
    if (choice < 0.34){
        pcChoice="ROCK"
    } else if(choice < 0.67){
        pcChoice="PAPER";
    } else{
        pcChoice="SCISSORS";   
   }
    computerButtonAnimation(pcChoice);
    return(pcChoice);
}


//function to add computer's button animation
function computerButtonAnimation(computerSelection){
    if (computerSelection === "ROCK"){
        computerButtonAnimationRemove();
        computerRock.classList.add("computerimgSelect")
    } 
    else if (computerSelection === "PAPER" ){
        computerButtonAnimationRemove();
        computerPaper.classList.add("computerimgSelect")
    }
    else if (computerSelection === "SCISSORS"){
        computerButtonAnimationRemove();
        computerScissors.classList.add("computerimgSelect")
    }
}


//function to remove computer's button animation
function computerButtonAnimationRemove(){
    computerRock.classList.remove ("computerimgSelect")
    computerPaper.classList.remove ("computerimgSelect")
    computerScissors.classList.remove ("computerimgSelect")
}
    

//function to add user button animation
function playerButtonAnimation(playerSelection){
    if (playerSelection === "ROCK"){
        playerButtonAnimationRemove();
        Rock.classList.add("playerimgSelect")
    } 
    else if (playerSelection === "PAPER" ){
        playerButtonAnimationRemove();
        Paper.classList.add("playerimgSelect")
    } 
    else if (playerSelection === "SCISSORS"){
        playerButtonAnimationRemove();
        Scissors.classList.add("playerimgSelect")
    }
}


//function to remove user button animation
function playerButtonAnimationRemove(){
    Rock.classList.remove ("playerimgSelect")
    Paper.classList.remove ("playerimgSelect")
    Scissors.classList.remove ("playerimgSelect")
}


//function for comparing player's selection and computer's selection. and increase score accordingly
function playRound(computerSelection, playerSelection){
    if (playerSelection === computerSelection){
        Result.textContent= "Tie";
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER"){
        playerScore++;
        Result.textContent="You are the Winner for this Round!"
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK"){
        computerScore++;
        Result.textContent="Computer is the Winner for this Round!"
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER"){
        computerScore++;
        Result.textContent="Computer is the Winner for this Round!"
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS"){
        playerScore++;
        Result.textContent="You are the Winner for this Round!"
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS"){
        computerScore++;
        Result.textContent="Computer is the Winner for this Round!"
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK"){
        playerScore++;
        Result.textContent="You are the Winner for this Round!"
    }
    playerPoint.textContent=`Player Score: ${playerScore}`;
    computerPoint.textContent=`Computer Score: ${computerScore}`;
    round++
    Rounds.textContent=`${round}`;
    makeWinner();
}


// function for annoucing the final winner if reached 5 scores
function makeWinner(){
    if ((playerScore === 5 && playerScore > computerScore)|| playerScore>=5){
        Result.textContent="Player is the Final Winner"
        Restart.textContent="Restart"
        Restart.addEventListener('click', gameRestart);
        playerButtonRemove()
    }
    else if ((computerScore ===5 && computerScore>playerScore) || computerScore>=5){
        Result.textContent="Computer is the Final Winner"
        Restart.textContent="Restart"
        Restart.addEventListener('click', gameRestart);
        playerButtonRemove()
    }
}


// function for restarting the game
function gameRestart(){
   window.location.reload();
}

   
//function to remove event Listener and hoverstate for player Selection = to stop the game
function playerButtonRemove(){
    buttons.forEach(selection => selection.removeEventListener('click', playerSelection));
    buttons.forEach(selection => selection.classList.remove("playerimg"))

    //Rock.removeEventListener("click", playerSelection);
    //Paper.removeEventListener("click", playerSelection);
    //Scissors.removeEventListener("click", playerSelection);
    //Rock.classList.remove("playerimg");
    //Paper.classList.remove("playerimg");
    //Scissors.classList.remove("playerimg");
}


