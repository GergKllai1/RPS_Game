const rockPaperScissor = document.addEventListener('DOMContentLoaded', () => {
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');
    let ai = document.getElementById('ai');
    let choice = document.getElementById('choice');
    let result = document.getElementById('result');
    const randomizer = () => {
        let random = 0
        random = Math.floor(Math.random()*3)
        if(random === 0){
            ai.innerHTML = "Rock"
        }else if(random === 1){
            ai.innerHTML = "Paper"
        }else{
            ai.innerHTML = "Scissors"
        }
    };
    const evaluate = () => {
        if(choice.innerHTML === ai.innerHTML){
            result.innerHTML = 'The game is a tie'
        } else if(choice.innerHTML === 'Rock' && ai.innerHTML === 'Scissors'){
            result.innerHTML = 'You have won'
        } else if(choice.innerHTML === 'Scissors' && ai.innerHTML === 'Paper'){
            result.innerHTML = 'You have won'
        } else if(choice.innerHTML === 'Paper' && ai.innerHTML === 'Rock'){
            result.innerHTML = 'You have won'
        } else{
            result.innerHTML = 'You have lost'
        }
    };
    rock.addEventListener('click', () => {
        randomizer();
        choice.innerHTML = "Rock"
        evaluate()
    });
    paper.addEventListener('click', () => {
        randomizer();
        choice.innerHTML = "Paper"
        evaluate()
    });
    scissors.addEventListener('click', () => {
        randomizer();
        choice.innerHTML = "Scissors"
        evaluate()
    });
})