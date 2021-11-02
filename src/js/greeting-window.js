const refs = {
    backDrop: document.querySelector('.backdrop'),
    startBtn: document.querySelector('.greet_btn[data-action="start"]'),
    exitBtn: document.querySelector('.greet_btn[data-action="exit"]'),
    ruleWindow: document.querySelector('.rule_cover'),
    
}
let clikSound= new Audio('././audio/блюп.wav')
//functions
const StartGame = () => {
   // refs.backDrop.classList.toggle('is-hidden');
   // refs.ruleWindow.classList.remove('is-hidden');
    clikSound.play();
}

const ExitGame = () => {
    window.location.reload();
}

//listeners
refs.startBtn.addEventListener('click', StartGame)

refs.exitBtn.addEventListener('click', () => {
    ExitGame();
})