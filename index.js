let humanScore = 0, computerScore = 0;

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => { playRound('rock')});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => { playRound('paper')});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => { playRound('scissors')});

displayResults();

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
        displayResults(`Both sides threw ${humanChoice} -- Round is a draw.`);
    }
    else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore += 1;            
            displayResults(`You lose: ${computerChoice} beats ${humanChoice}!`)
        }
        else { 
            humanScore += 1;
            displayResults(`You win: ${humanChoice} beats ${computerChoice}!`)
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore += 1;
            displayResults(`You lose: ${computerChoice} beats ${humanChoice}!`)
        }
        else { 
            humanScore += 1;
            displayResults(`You win: ${humanChoice} beats ${computerChoice}!`)
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore += 1;            
            displayResults(`You lose: ${computerChoice} beats ${humanChoice}!`)
        }
        else { 
            humanScore += 1;            
            displayResults(`You win: ${humanChoice} beats ${computerChoice}!`)
        }
    }      
}   

function displayResults(message = '') {
    const results = document.querySelector('#results');

    if (message) {
        results.textContent = `${message} ||| `
    }
    

    results.textContent += `You: ${humanScore}  Computer: ${computerScore}`;

    if (humanScore >= 5 || computerScore >= 5) {
        results.textContent += ' ||| ' + ((humanScore >=5) ? 'Player' : 'Computer' ) + ' wins!';
    }
}