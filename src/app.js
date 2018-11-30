const rockPaperScissor = document.addEventListener('DOMContentLoaded', () => {
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');
    let computer = document.getElementById('computer');
    let choice = document.getElementById('choice');
    let result = document.getElementById('result');
    let humanscore = document.getElementById('humanscore');
    let computerscore = document.getElementById('computerscore');
    let random = 0;
    const randomizer = () => {
        random = Math.floor(Math.random()*3)
        if(random === 0){
            computer.innerHTML = "<img id='computerrock' src='images/rock.jpeg' alt='no image'>"
        }else if(random === 1){
            computer.innerHTML = "<img id='computerpaper' src='images/paper.jpg' alt='no image'>"
        }else{
            computer.innerHTML = "<img id='computerscissors' src='images/scissors.jpg' alt='no image'>"
        }
    };
    const evaluate = () => {
        if(choice === random){
            result.innerHTML = 'The game is a tie'
        } else if(choice === 0 && random === 2){
            result.innerHTML = 'You have won'
        } else if(choice === 2 && random === 1){
            result.innerHTML = 'You have won'
        } else if(choice === 1 && random === 0){
            result.innerHTML = 'You have won'
        } else{
            result.innerHTML = 'You have lost'
        }
    };
    const addToScore = () =>{
        if(result.innerHTML === 'You have won'){
            let points = parseInt(humanscore.innerHTML)
            points += 1
            humanscore.innerHTML = points
        }else if(result.innerHTML === 'You have lost'){
            let points = parseInt(computerscore.innerHTML)
            points += 1
            computerscore.innerHTML = points
        }
    }
    rock.addEventListener('click', () => {
        randomizer();
        choice = 0;
        evaluate();
        addToScore()
    });
    paper.addEventListener('click', () => {
        randomizer();
        choice = 1;
        evaluate();
        addToScore()
    });
    scissors.addEventListener('click', () => {
        randomizer();
        choice = 2;
        evaluate();
        addToScore()
    });
})