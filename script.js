console.log('hello world')
console.log('says the bear')
//game mechanics
let rock = 0;
let paper = 1;
let scissor = 2;

//computer generates a number
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function pickFunction(rpp) {
    switch (rpp) {
        case "rock":
            choice = rock;
            return choice;
        case "paper":
            choice = paper;
            return choice;
        case "scissor":
            choice = scissor;
            return choice;
    }
}

//alert('Please press OK then cancel first and read the instructions below!')

//getRandomInt sets a limit up to 3 digits, 0-2 since 0, 1, and 2
    //this is the user's choices
    //this will use the pickFunction from above to choose between rock, paper, and scissor
    //let getUserChoice = pickFunction(userPick);

    //prints out the choices of both players/
    //console.log(getUserChoice);
    //console.log(getComputerChoice);

    //game scoring 
    
    let pcScore = 0;
    let userScore = 0;
    let rounds = 5;

    //game logic
    function gameRound(teamA, teamB) {
        if (teamA == teamB){
            return "It's a tie";
        }
        else if (teamA == rock) {
            if (teamB == scissor) {    
                userScore++;
                return "Rock Beats Scissors, You Win!";
            }
            else if (teamB == paper) {
                pcScore++;
                return "Paper Beats Rock, You Lose!";
            }
        }
        else if (teamA == paper) {
            if (teamB == rock) {
                userScore++;
                return "Paper Beats Rock, You Win!";
            }
            else if (teamB == scissor) {
                pcScore++;
                return "Scissor Beats Paper, You Lose!";
            }
        }
        else if (teamA == scissor) {
            if (teamB == paper) {
                userScore++;
                return "Scissor Beats Paper, You Win!";
            }
            else if (teamB == rock) {
                pcScore++;
                return "Rock Beats Scissor, You Lose!";
            }
        }
    }

    //console.log(gameRound(getUserChoice, getComputerChoice));

    const btnRock = document.querySelector('#rock');
    const btnPaper = document.querySelector('#paper');
    const btnScissor = document.querySelector('#scissor');

    btnRock.addEventListener('click', () => {
        gameStart('rock');
    });

    btnPaper.addEventListener('click', () => {
        gameStart('paper');
    });
    
    btnScissor.addEventListener('click', () => {
        gameStart('scissor');
    });

    //result

    let winner = '';

    function gameStart(gamePick){
        let getComputerChoice = getRandomInt(3);
        let userPick = gamePick;
        getUserChoice = pickFunction(userPick);
        contentScore.textContent = 'Computer: ' + pcScore + ' | User: ' + userScore;
        contentResult.textContent = gameRound(getUserChoice, getComputerChoice);
        rounds--;

        if(rounds == 0){
            btnRock.setAttribute("disabled", true);
            btnPaper.setAttribute("disabled", true);
            btnScissor.setAttribute("disabled", true);

            if(pcScore > userScore){
                winner = 'computer!';
            } else{
                winner = 'you!'
            }

            contentResult.textContent = 'The winner is ' + winner;
            contentWinner.textContent = 'Thank you for playing my game!'
        }
    }

    const containerResult = document.querySelector('#result');
    const contentResult = document.createElement('h3');
    const contentScore = document.createElement('h4');
    const contentWinner = document.createElement('h3');

    contentScore.textContent = 'Computer: ' + pcScore + ' | User: ' + userScore;

    containerResult.appendChild(contentScore);
    containerResult.appendChild(contentResult);
    containerResult.appendChild(contentWinner);

    containerResult.style.display = 'flex';
    containerResult.style.flexDirection = 'column';
    containerResult.style.alignItems = 'center';
    containerResult.style.gap = '10px';



    

