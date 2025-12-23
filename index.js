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

console.log(getHumanChoice());