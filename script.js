const body = document.body;
body.style["background-image"] = "url('rps-bg.jpg')";
body.style["background-repeat"] = "repeat-x repeat-y";

// Get DOM elements
const rockButton = document.querySelector("#rock-button");
const scissorsButton = document.querySelector("#scissors-button");
const paperButton = document.querySelector("#paper-button");
const computerChoiceContainer = document.querySelector(".computer-choice-container");
const humanChoiceContainer = document.querySelector(".human-choice-container");
const computerChoiceTitle = document.querySelector(".computer-choice-title");
const humanChoiceTitle = document.querySelector(".human-choice-title");
const computerChoiceText = document.querySelector(".computer-choice");
const humanChoiceText = document.querySelector(".human-choice");
const resultText = document.querySelector(".results-text");
const computerScoreElement = document.querySelector(".computer-score");
const humanScoreElement = document.querySelector(".human-score");

// Game state
let humanChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;

// Computer's random choice function
const getComputerAction = () => {
    let compChoice = Math.floor(Math.random() * 3);
    switch(compChoice) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
};

// Update the UI with choices and result
const updateUI = () => {
    computerChoiceContainer.style.display = computerChoice? "flex" : "none";
    humanChoiceContainer.style.display = humanChoice? "flex" : "none";
    resultText.style.display = humanChoice && computerChoice? "block" : "none";
    computerChoiceTitle.textContent = computerChoice? "Computer Choice" : "";
    humanChoiceTitle.textContent = humanChoice? "Your Choice" : "";
    computerScoreElement.textContent = computerScore;
    humanScoreElement.textContent = humanScore; 
    computerChoiceText.textContent = computerChoice || "";
    humanChoiceText.textContent = humanChoice || "";
    
    
    // Add game logic here to determine the winner
    if(humanChoice != computerChoice){
        switch(humanChoice){
            case "rock":
                humanChoiceText.style["color"] = "#fbd165";
                if (computerChoice === "scissors" ){
                    computerChoiceText.style["color"] = "#a9cc8a";
                    resultText.textContent = "You Win! Rock beats Scissors";
                    resultText.style.color = "#a9cc8a";
                    humanScore++;
                }
                else{
                    computerChoiceText.style["color"] = "#f4b0bf";
                    resultText.textContent = "You Lose! Paper beats Rock";
                    resultText.style.color = "#f4b0bf";
                    computerScore++;
                } 
                break;
            case "paper":
                humanChoiceText.style["color"] = "#f4b0bf";
                if (computerChoice === "rock" ){
                    computerChoiceText.style["color"] = "#fbd165";
                    resultText.textContent = "You Win! Paper beats Rock";
                    resultText.style.color = "#a9cc8a";
                    humanScore++;
                }
                else{
                    computerChoiceText.style["color"] = "#a9cc8a";
                    resultText.textContent = "You Lose! Scissors beats Paper";
                    resultText.style.color = "#f4b0bf";
                    computerScore++;
                }
                break;
            case "scissors":
                humanChoiceText.style["color"] = "#a9cc8a";
                if (computerChoice === "paper" ){
                    computerChoiceText.style["color"] = "#f4b0bf";
                    resultText.textContent = "You Win! Scissors beat Paper";
                    resultText.style.color = "#a9cc8a";
                    humanScore++;
                }
                else{
                    computerChoiceText.style["color"] = "#fbd165";
                    resultText.textContent = "You Lose! Rock beat Scissors";
                    resultText.style.color = "#f4b0bf";
                    computerScore++;
                }
                break;
            default:
                break;
        }
        // Update score display
        computerScoreElement.textContent = computerScore;
        humanScoreElement.textContent = humanScore;
    }
    else if (humanChoice || computerChoice) {
        computerChoiceText.style["color"] = "gray";
        humanChoiceText.style["color"] = "gray";
        resultText.textContent = "TIE";
        resultText.style.color = "gray";
    }
};

// Event listeners for buttons
const buttonClickHandler = (choice) => {
    humanChoice = choice;
    computerChoice = getComputerAction();
    updateUI();
};

rockButton.addEventListener("click", () => buttonClickHandler("rock"));
scissorsButton.addEventListener("click", () => buttonClickHandler("scissors"));
paperButton.addEventListener("click", () => buttonClickHandler("paper"));

// Initialize UI
updateUI();