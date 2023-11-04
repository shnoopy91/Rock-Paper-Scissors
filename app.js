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
    
    let playerChoice = prompt('Select your fighter. [Rock, Paper, Scissors]').toLowerCase();
    
    if (playerChoice === computerChoice) {
        alert ('It\'s a draw!')
    }
    else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        alert ('You win!')
    }
    else if (playerChoice === 'scissors' && computerChoice === 'paper'){
        alert ('You win!')
    }
    else if (playerChoice === 'paper' && computerChoice === 'rock') {
        alert ('You win!')
    }
    else {
        alert ('You lose!')
    }

    const playerChoiceRock = document.querySelector('#choiceRock');
    playerChoiceRock.onclick = () => alert('Player chose rock!');

    const playerChoicePaper = document.querySelector('#choicePaper');
    playerChoicePaper.onclick = () => alert('Player choice Paper!');

    const playerChoiceScissors = document.querySelector('#choiceScissors');
    playerChoiceScissors.onclick = () => alert('Player chose Scissors!')

