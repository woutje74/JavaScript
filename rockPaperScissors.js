//line 2 is a concise body arrow function with one parameter
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
      return userInput
    } else {
      console.log('Error');
    }
  }
  
  const getComputerChoice = computerInput => {
    computerInput = Math.floor(Math.random() * 3);
    switch (computerInput){
      case 0: 
        return 'rock';
      case 1: 
        return 'paper';
      case 2: 
        return 'scissors';
      default: 
        return 'none';
        }
  }
    
  function determineWinner(userChoice, computerChoice){
    if (userChoice === 'bomb'){
      return 'User Wins!';
    } else if (userChoice === computerChoice){
      return 'It\'s a Tie';
    } else if (userChoice === 'rock'){
      if (computerChoice === 'paper'){
        return 'Computer Wins!';
      } else { 
      return 'User Wins!';
      }
    } else if (userChoice === 'paper'){
      if (computerChoice === 'scissors') {
        return 'Computer Wins!';
      } else {
        return 'User Wins!';
      }
    } else { 
      if (userChoice === 'scissors') {
          if (computerChoice === 'rock') {
            return 'Computer Wins!';
          } else {
            return 'User Wins!';
          }
        }
    } 
  } 
  
  
  
  const playGame = () => {
    const userChoice = getUserChoice('scissors');
    console.log('Users choice: ' + userChoice);
    const computerChoice = getComputerChoice();
    console.log('Computers choice: ' + computerChoice);
    console.log('Result: ' + determineWinner(userChoice, computerChoice));
    }
  
  playGame();
  