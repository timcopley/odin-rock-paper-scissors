let humanScore = 0, computerScore = 0;

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => { playRound('rock')});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => { playRound('paper')});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => { playRound('scissors')});

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

function playRound (humanChoice) {
    humanChoice = humanChoice.toLowerCase();
    const computerChoice = getComputerChoice();

    const results = document.querySelector('#results');

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

function playGame(roundsToPlay) {


 

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
