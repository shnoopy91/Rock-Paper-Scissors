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
        }
        
    }
    computerSelection()
    let computerChoice = computerSelection();
   
    const output = document.querySelector('#output');
    
    function determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            output.textContent = `It\'s a draw! Computer chose ${computerChoice}.`
        }
        else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'scissors' && computerChoice === 'paper') ||
            (playerChoice === 'paper' && computerChoice === 'rock')  
            ) 
            {output.textContent = `You win! Computer chose ${computerChoice}.`
        } 
    
        else {
            output.textContent =`You lose! Computer chose ${computerChoice}.`; 
        }
    }
    
      function playerSelection() {
        const playerChoiceRock = document.querySelector('#choiceRock');
        playerChoiceRock.onclick = () => {
        const playerChoice = 'rock';                
        const computerChoice = computerSelection();
        determineWinner(playerChoice, computerChoice);
        }

    
        const playerChoicePaper = document.querySelector('#choicePaper');
        playerChoicePaper.onclick = () => { 
        const playerChoice = 'paper';
        const computerChoice = computerSelection();
        determineWinner(playerChoice, computerChoice);
    }

        const playerChoiceScissors = document.querySelector('#choiceScissors');
        playerChoiceScissors.onclick = () => {
        const playerChoice = 'scissors';
        const computerChoice = computerSelection();
        determineWinner(playerChoice, computerChoice);
         
}

};
   playerSelection();
   

   

