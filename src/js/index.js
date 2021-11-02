const b = document.querySelectorAll('button');
const start = document.querySelector('.greet_btn');
const a = new Audio('./audio/backtrack.wav');
const a2 = new Audio('./audio/блюп.wav');
const a3 = new Audio('./audio/boss.mp3');

const PlayM = () => {
    a.play();
}



for(let i = 0; i <b.length; i++){
    const btn = b[i];
    btn.addEventListener('click', PlayM)
}



