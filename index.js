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

function playGame(roundsToPlay) {
    let humanScore = 0, computerScore = 0;

    function playRound (humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

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

    for (let i = 1; i < roundsToPlay + 1; i++) {
        console.log(`Round ${i} of ${roundsToPlay}!`)
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore === computerScore) {
        console.log(`It's a tie! Final score: ${humanScore} to ${computerScore}`)
    }
    else if (humanScore > computerScore) { 
        console.log(`You win! Final score: ${humanScore} to ${computerScore}`)
    }
    else { console.log(`You lose! Final score: ${humanScore} to ${computerScore}`) }
}

playGame(5);