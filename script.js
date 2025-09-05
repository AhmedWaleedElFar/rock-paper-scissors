const getComputerAction = () => {
    let compChoice = Math.floor(Math.random() * 3) + 1;
    switch(compChoice){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

const getHumanChoice = () => {
    const humanChoice = prompt("Choose rock, paper, or scissors");
    return humanChoice.toLowerCase();
}

let humanScore = 0
let computerScore = 0

const playRound = (humanChoice, computerChoice) => {
    console.log("You chose: ", humanChoice);
    console.log("Computer chose: ", computerChoice);
    if(humanChoice != computerChoice){
        switch(humanChoice){
            case "rock":
                if (computerChoice === "scissors" ){
                    humanScore++;
                    console.log("You win! rock beats scissors");
                }
                else{
                    computerScore++;
                    console.log("You lose! paper beat rock");
                } 
                break;
            case "paper":
                if (computerChoice === "rock" ){
                    humanScore++;
                    console.log("You win! paper beats rock");
                }
                else{
                    computerScore++;
                    console.log("You lose! scissors beats paper");
                }
                break;
            case "scissors":
                if (computerChoice === "paper" ){
                    humanScore++;
                    console.log("You win! scissors beat paper");
                }
                else{
                    computerScore++;
                    console.log("You lose! rock beat scissors");
                }
                break;
            default:
                break;
        }
    }
    else {
        console.log("Tie!");
    }
}

const playGame = () => {
    for(let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerAction());
    }
    console.log("Final Score: ", humanScore, " - ", computerScore);
    if(humanScore > computerScore){
        console.log("You win!");
    }
    else if(computerScore > humanScore){
        console.log("You lose!");
    }
    else {
        console.log("Tie!");
    }
}

playGame();
