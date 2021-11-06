import './greeting-window';
import './rule';
import './name';
import './fight';
import './game-scripts';
import './boss-fight';



export const AUDIO = {
    buttons: document.querySelectorAll("button"),
    bossMusic: document.querySelector('.boss_music'),
    hitSound: document.querySelector('.hit'),
    backTrack: document.querySelector('.back'),
    clickSound: document.querySelector('.clik'),
};


const CLICKING = () => {
    AUDIO.clickSound.play();
    AUDIO.clickSound.volume = 0.1;
}

AUDIO.buttons.forEach(e =>
    e.addEventListener('click', CLICKING));