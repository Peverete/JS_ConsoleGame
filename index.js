function computerPlay(){
    options = ['rock', 'paper','scissors'];
    return(options[Math.floor(Math.random()*3)]);
}

function playerSelection(){
    let selection;
    try {
        selection = prompt(`Play a game of Rock, Paper, Scissors.
    What is your selection`).toString().toLocaleLowerCase();        
        if(selection =='rock' || selection =='paper' || selection =='scissors'){
            
        } else {
            alert(`Please enter a valid answer`);
        }
    } catch (error){
        alert(`Please enter a valid answer.`);
    };
    console.log(`Player selection is ${selection}`)
    return selection;
}

function computerSelection(){
    let round = computerPlay();
    console.log(round);
    return round;
}

function playRound(){
    player = playerSelection();
    computer = computerSelection();
    let winner = `It is a tie. Go another round.`;
    if (computer == 'rock'){
        if (player == 'scissors'){
            winner = `You Lose! Rock beats Scissors`;
        } else {
            winner = `You Win! Paper beats Rock`;        
        }        
    }
    console.log(winner);
    return winner;
}

function game(){
    let wincount = 0;
    for (let i=0; i < 5; i++){
        let result = playRound();
        if (result.includes('Win')){
            wincount++;
        } else if (result.includes('Lose')){
            wincount--;
        } else if (result.includes('tie')){
          wincount + 0;
        }
    };    
    if (wincount>2){
        alert(`Congratulations. You've won 3 out of 5!`);
    } else if (wincount < -2){
        alert(`You Lose. It was 3 out of 5!`);        
    } else if (wincount == 0){
        alert(`Achievement unlocked: Unbelievable odds`)
    } else {
        alert(`Thank you for playing!`)
    };
}

game();