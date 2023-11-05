let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 1;
const rounds = document.querySelector('#rounds');
const output = document.querySelector('#output');
let score = document.querySelector('#score');

    function computerSelection() {
        let computerChoice = Math.floor(Math.random() * 3);
        
        if (computerChoice === 0) {
            return 'rock'
        }
        else if (computerChoice === 1) {
            return 'scissors' 
        }  
        else if (computerChoice === 2) {
            return 'paper' 
        };
    };
        computerSelection();
        let computerChoice = computerSelection();
    
    function playerSelection() {
        const playerChoiceRock = document.querySelector('#choiceRock');
            playerChoiceRock.onclick = () => {
                const playerChoice = 'rock';                
                const computerChoice = computerSelection();
                determineWinner(playerChoice, computerChoice);
            };
        const playerChoicePaper = document.querySelector('#choicePaper');
            playerChoicePaper.onclick = () => { 
                const playerChoice = 'paper';
                const computerChoice = computerSelection();
                determineWinner(playerChoice, computerChoice);
            };

        const playerChoiceScissors = document.querySelector('#choiceScissors');
            playerChoiceScissors.onclick = () => {
                const playerChoice = 'scissors';
                const computerChoice = computerSelection();
                determineWinner(playerChoice, computerChoice);        
            };
    };
    playerSelection();
    
        function updateScore() {
            score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
        };
    
        function determineWinner(playerChoice, computerChoice) {
            
            if (playerScore === 5 || computerScore === 5) {
                playerChoiceRock.onclick = null;
                playerChoicePaper.onclick = null;
                playerChoiceScissors.onclick = null;
            };
        
            if (playerChoice === computerChoice) {
                output.textContent = `It\'s a draw! Computer chose ${computerChoice}.`;
            }
            else if (
                (playerChoice === 'rock' && computerChoice === 'scissors') ||
                (playerChoice === 'scissors' && computerChoice === 'paper') ||
                (playerChoice === 'paper' && computerChoice === 'rock') 
            )   
                {output.textContent = `You win! Computer chose ${computerChoice}.`;
                playerScore++;
            }   
            else {
                output.textContent =`You lose! Computer chose ${computerChoice}.`; 
                computerScore++;
            };
        
            rounds.textContent = `Round: ${roundsPlayed}`;
            roundsPlayed++;
                if (playerScore === 5) {
                    endGame()
                }
                else if (computerScore === 5) {
                    endGame()
                };
            updateScore();
        };
    
        function endGame() {
            if (playerScore === 5) {
                output.textContent = 'You win the game! Refresh to play again.';
            }
            else if (computerScore === 5) {
                output.textContent = 'You lose the game! Refresh to play again.';
            } 
            else {
            output.textContent = 'It\'s a draw!';
            };
            updateScore();
        };


        
   

   

