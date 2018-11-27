const rockPaperScissor = document.addEventListener('DOMContentLoaded', () => {
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');
    let ai = document.getElementById('ai');
    let choice = document.getElementById('choice');
    let result = document.getElementById('result');
    let random = 0;
    const randomizer = () => {
        random = Math.floor(Math.random()*3)
        if(random === 0){
            ai.innerHTML = "<img src='images/rock.jpeg' alt='no image'>"
        }else if(random === 1){
            ai.innerHTML = "<img src='images/paper.jpg' alt='no image'>"
        }else{
            ai.innerHTML = "<img src='images/scissors.jpg' alt='no image'>"
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
    rock.addEventListener('click', () => {
        randomizer();
        choice = 0
        evaluate()
    });
    paper.addEventListener('click', () => {
        randomizer();
        choice = 1
        evaluate()
    });
    scissors.addEventListener('click', () => {
        randomizer();
        choice = 2
        evaluate()
    });
})