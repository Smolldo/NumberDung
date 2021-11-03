import './greeting-window';
import './rule';
import './name';



const m = document.querySelector('.mus');
m.volume = 0.5;
const b = document.querySelector('.sound_btn');

const PLAYER = () =>{
    m.play();
}

b.addEventListener('click', PLAYER);

