game();

function computerPlay() {
    let choice = ['Rock', 'Paper', 'Scissors'];
    return choice[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    console.log(computerSelection);
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    switch (playerSelection) {
        case "rock":
            switch(computerSelection) {
                case "rock":
                    return "TIED!";
                    break;
                case "paper":
                    return "You lose! Paper beats rock";
                    break;
                case "scissors":
                    return "You win! Rock beats scissors";
                    break;
            }
            break;
        case "paper":
            switch(computerSelection) {
                case "rock":
                    return "You win! Paper beats rock";
                    break;
                case "paper":
                    return "TIED!";
                    break;
                case "scissors":
                    return "You lose! Scissors beats paper";
                    break;
            }
            break;
        case "scissors":
            switch(computerSelection) {
                case "rock":
                    return "You lose! Rock beats scissors";
                    break;
                case "paper":
                    return "You win! Scissors beats paper";
                    break;
                case "scissors":
                    return "TIED!";
                    break;
            }
            break;
        default:
            return "Please enter a valid option (rock, paper or scissors)";
    }

}

function game() {
    let playerScore = 0, computerScore = 0;
    for(var i = 0; i < 5; i++)
    {
        

        let result = playRound(prompt("Enter your choice"), computerPlay());

        if(result.includes("win"))
            playerScore++;
        else if(result.includes("lose"))
            computerScore++;
    }
    console.log(`Final score: \n You: ${playerScore}\n Computer: ${computerScore}`);
}