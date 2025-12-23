function getComputerChoice() {
    let randNum = Math.floor((Math.random() * 3) + 1);

    return randNum;
}

console.log(getComputerChoice());