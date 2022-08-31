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

alert('Please press OK then cancel first and read the instructions below!')

for(let i = 5; i > 0; i--) {
    //getRandomInt sets a limit up to 3 digits, 0-2 since 0, 1, and 2
    let getComputerChoice = getRandomInt(3);
    //this is the user's choices
    let userPick = prompt("You only have " + i + " attempts. Rock, Paper, or Scissor?").toLowerCase();
    //this will use the pickFunction from above to choose between rock, paper, and scissor
    let getUserChoice = pickFunction(userPick);

    //prints out the choices of both players/
    //console.log(getUserChoice);
    //console.log(getComputerChoice);

    //game logic
    function gameRound(teamA, teamB) {
        if (teamA == teamB){
            return "It's a tie";
        }
        else if (teamA == rock) {
            if (teamB == scissor) {
                return "Rock Beats Scissors, You Win!";
            }
            else if (teamB == paper) {
                return "Paper Beats Rock, You Lose!";
            }
        }
        else if (teamA == paper) {
            if (teamB == rock) {
                return "Paper Beats Rock, You Win!";
            }
            else if (teamB == scissor) {
                return "Scissor Beats Paper, You Lose!";
            }
        }
        else if (teamA == scissor) {
            if (teamB == paper) {
                return "Scissor Beats Paper, You Win!";
            }
            else if (teamB == rock) {
                return "Rock Beats Scissor, You Lose!";
            }
        }
    }

    console.log(gameRound(getUserChoice, getComputerChoice));
}

alert('Thank you for playing my basic javascript game!');



