let playerSelection;
let computerSelection;

function computerPlay () {
    let rpsValues = ['Rock', 'Paper', 'Scissors'];
    let randRpsValue = rpsValues[Math.floor(Math.random()*rpsValues.length)].toLowerCase();
    return randRpsValue;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' & computerSelection == 'scissors') {
        return 'You win! Rock beats scissors.';
    } else if (playerSelection == 'rock' & computerSelection == 'paper') {
        return 'You lose! Paper beats rock.';
    } else if (playerSelection == 'paper' & computerSelection == 'scissors') {
        return 'You lose! Scissors beats paper.';
    } else if (playerSelection == 'paper' & computerSelection == 'rock') {
        return 'You win! Paper beats rock.';
    } else if (playerSelection == 'scissors' & computerSelection == 'rock') {
        return 'You lose! Rock beats scissors.';
    } else if (playerSelection == 'scissors' & computerSelection == 'paper') {
        return 'You win! Scissors beats paper.';
    } else if (playerSelection == computerSelection) {
        return 'Play again.';
    } else {
        return 'Not a valid choice - please select again.';
    }
}

let win = 0;
let loss = 0;

function game() {
    if (playRound(playerSelection, computerSelection) == 'You win! Paper beats rock.') {
        win++;
        document.getElementById('round_result').innerHTML = 'You win! Paper beats rock.';
    } else if (playRound(playerSelection, computerSelection) == 'You win! Rock beats scissors.') {
        win++;
        document.getElementById('round_result').innerHTML = 'You win! Rock beats scissors.';
    } else if (playRound(playerSelection, computerSelection) == 'You win! Scissors beats paper.') {
        win++;
        document.getElementById('round_result').innerHTML = 'You win! Scissors beats paper.';
    } else if (playRound(playerSelection, computerSelection) == 'You lose! Paper beats rock.') {
        loss++;
        document.getElementById('round_result').innerHTML = 'You lose! Paper beats rock.';
    } else if  (playRound(playerSelection, computerSelection) == 'You lose! Scissors beats paper.') {
        loss++;
        document.getElementById('round_result').innerHTML = 'You lose! Scissors beats paper.';
    } else if (playRound(playerSelection, computerSelection) == 'You lose! Rock beats scissors.') {
        loss++;
        document.getElementById('round_result').innerHTML = 'You lose! Rock beats scissors.';
    }
    //Displaying score
    console.log(`Player score = ${win}`);
    console.log(`Computer score = ${loss}`);
    
    if (win == 5 & loss < win) {
        document.getElementById('game_result').innerHTML = 'You win! Click reset to play again.';
        document.getElementById('round_result').innerHTML = '';
    } else if (loss == 5 & win < loss) {
        document.getElementById('game_result').innerHTML = 'You lose! Click reset to play again.';
        document.getElementById('round_result').innerHTML = '';
    } else if (win == loss & win == 5 & loss == 5) {
        document.getElementById('game_result').innerHTML = 'Draw! Click reset to play again.';
        document.getElementById('round_result').innerHTML = '';
    }

    document.getElementById('wins').innerHTML = win;
    document.getElementById('loses').innerHTML = loss;
}

function reset() {
    win = 0;
    loss = 0;
    document.getElementById('wins').innerHTML = 0;
    document.getElementById('loses').innerHTML = 0;
    document.getElementById('game_result').innerHTML = '';
    document.getElementById('round_result').innerHTML = '';
}

const btnRock = document.querySelector('#btn_rock');
btnRock.addEventListener('click', () => {
    playerSelection = 'rock';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    game();
})

const btnPaper = document.querySelector('#btn_paper');
btnPaper.addEventListener('click', () => {
    playerSelection = 'paper';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    game();
}) 

const btnScissors = document.querySelector('#btn_scissors');
btnScissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    game();
})