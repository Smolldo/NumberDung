import './greeting-window';
import './rule';
import './name';
import './fight';
import './game-scripts';
import './boss-fight';



const m = document.querySelector('.mus');
m.volume = 0.1;
const b = document.querySelector('.sound_btn');

const PLAYER = () =>{
    m.play();
}

b.addEventListener('click', PLAYER);
