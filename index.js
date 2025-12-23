let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    let randNum = Math.floor((Math.random() * 3) + 1);

    switch (randNum) {
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Choose rock, paper, or scissors: ");
}

function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice + " " + computerChoice);
    if (humanChoice === computerChoice) {
        console.log(`Both sides threw ${humanChoice} -- Round is a draw.`);
    }
    else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log(`You lose: ${computerChoice} beats ${humanChoice}!`)
            computerScore += 1;
        }
        else { 
            console.log(`You win: ${humanChoice} beats ${computerChoice}!`)
            humanScore += 1;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            console.log(`You lose: ${computerChoice} beats ${humanChoice}!`)
            computerScore += 1;
        }
        else { 
            console.log(`You win: ${humanChoice} beats ${computerChoice}!`)
            humanScore += 1;
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log(`You lose: ${computerChoice} beats ${humanChoice}!`)
            computerScore += 1;
        }
        else { 
            console.log(`You win: ${humanChoice} beats ${computerChoice}!`)
            humanScore += 1;
        }
    }        
}

playRound(getHumanChoice(), getComputerChoice());