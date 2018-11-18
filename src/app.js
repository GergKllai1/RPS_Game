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
    test.addEventListener('click', () => {
        randomizer();
    })
})