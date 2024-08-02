const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
    if (selection !== ROCK &&
         selection !== PAPER &&
          selection !== SCISSORS) {
            alert(`Invalid choice input! We chose ${DEFAULT_USER_CHOICE} for you`);
            return DEFAULT_USER_CHOICE;
          }
          return selection;
}

const startGame = () => {
  if (gameIsRunning) {
    
  }
    console.log('Game is starting...');
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
}

startGameBtn.addEventListener('click', startGame);