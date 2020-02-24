let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = ()_=> {
    return Math.floor(Math.random() * 10);
}


function compareGuesses(humanGuess, computerGuess, targetNumber){
    if (humanGuess === computerGuess){
        return true;
    } else if(((target - currentHumanGuess) * -1) < ((target - computerGuess) * -1)) {
        return true;
    } else { 
        return false;
    }
}

const updateScore = winner => {
    if (winner = 'human') {
        return humanscore + 1;
    } else {
        return computerScore + 1;
    }
}

function advanceRound() {
    currentRoundNumber += 1 ;
}
