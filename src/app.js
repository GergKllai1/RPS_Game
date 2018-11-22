const rockPaperScissor = document.addEventListener('DOMContentLoaded', () => {
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissor = document.getElementById('scissor');
    let ai = document.getElementById('ai');
    let choice = document.getElementById('choice');
    let result = document.getElementById('result');
    const test = document.getElementById('testbutton');
    const randomizer = () => {
        let random = 0
        random = Math.floor(Math.random()*3)
        if(random === 0){
            ai.innerHTML = "Rock"
        }else if(random === 1){
            ai.innerHTML = "Paper"
        }else{
            ai.innerHTML = "Scissor"
        }
    };
    const evaluate = () => {
        if(choice.innerHTML === ai.innerHTML){
            result.innerHTML = 'The game is a tie'
        } else if(choice.innerHTML === 'Rock' && ai.innerHTML === 'Scissor'){
            result.innerHTML = 'You have won'
        } else if(choice.innerHTML === 'Scissor' && ai.innerHTML === 'Paper'){
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
    scissor.addEventListener('click', () => {
        randomizer();
        choice.innerHTML = "Scissor"
        evaluate()
    });
})