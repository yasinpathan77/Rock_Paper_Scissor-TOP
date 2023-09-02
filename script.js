getComputerChoice = () => {
    let random = Math.floor(Math.random()*10);
    let computerChoice;
    
    if(random >= 0 && random <= 2){
        computerChoice = "ROCK";
    }
    else if(random >= 3 && random <= 5){
        computerChoice = "PAPER";
    }
    else if(random >= 6 && random <= 8){
        computerChoice = "SCISSOR"
    }

    if(random == 9)
        return getComputerChoice();
    else
        return computerChoice;
}

getConsumerChoice = () => {
    let consumerChoice = prompt("Rock, Paper or Scissor ? ");
    return consumerChoice.toUpperCase();
}

playRound = (playerSelection,computerSelection) => {
    if((playerSelection == "ROCK" && computerChoice == "SCISSOR") ||
        (playerSelection == "SCISSOR" && computerChoice == "PAPER") ||
        (playerSelection == "PAPER" && computerChoice == "ROCK")
    ){
        alert("player won!");
        return 1;
    }
    else if(playerSelection == computerChoice)
    {
        alert("Draw!");
        return 2;
    }
    else{
        alert("You Lose! " + computerChoice + " beats " + playerSelection);
        return 0;
    }
}


let consumerChoice,computerChoice;
let playerStreak=0,computerStreak = 0;

while((playerStreak < 5) && (computerStreak < 5)){
    consumerChoice = getConsumerChoice();
    console.log("consumerChoice : " + consumerChoice);
    
    computerChoice = getComputerChoice();
    console.log("computerChoice : " + computerChoice);
    
    let isPlayerWon = playRound(consumerChoice,computerChoice);
    if(isPlayerWon == true) 
        playerStreak++;
    else if(isPlayerWon == false)
         computerStreak++;

    alert("playerStreak : " + playerStreak + "\ncomputerStreak : " + computerStreak);
}