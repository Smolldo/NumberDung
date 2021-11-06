import list from "../templates/list.hbs";
import menu from "../templates/img.json";
import '../sass/main.scss';

const refs = {
    bossField: document.querySelector('.boss_fight_cover'),
    dialogWindow: document.querySelector('.boss_dialog'),
    bossPhraseBlock: document.querySelector('.boss_phrase'),
    heroPhraseBlock: document.querySelector('.hero_dialog'),
    bossText: document.querySelector('.boss_text'),
    heroText: document.querySelector('.hero_boss_text'),
    nextBtn: document.querySelector('.phrase_after_boss'),
    bossFightBtn: document.querySelector('.push_battle'),
    gameWindow: document.querySelector('.game_boss'),
    healthBarPlayer: document.querySelector('.round_list_playerBoss'),
    healthBarComputer: document.querySelector('.round_list_bossBoss'),
    generateBtn: document.querySelector('.generate_btnBoss'),
    numberSpanPlayer: document.querySelector('.num_now_plBoss'),
    numberSpanComputer: document.querySelector('.num_now_aiBoss'),
};


//Hit Point builder

const markUp = menu.map((element) => list(element)).join('');
refs.healthBarPlayer.insertAdjacentHTML('beforeend', markUp);
refs.healthBarComputer.insertAdjacentHTML('beforeend', markUp);


//phrases
const text = ["Your sister was so hot in bed =D",
    "But not much as your mother XD"
];
//writer
let i = 0, j = 0;
let speed = 30;

 export const textWriter = () => {
  if (i < text[0].length) {
    refs.bossText.textContent += text[0].charAt(i);
    i++;
    setTimeout(textWriter, speed);
  }
}

const heroBossWriter = () => {
    if (j < text[1].length) {
      refs.heroText.textContent += text[1].charAt(j);
      j++;
      setTimeout(heroBossWriter, speed);
    }
  }

  const NEXTPHRASE = () =>{
      refs.bossPhraseBlock.classList.toggle('is-end');
      refs.heroPhraseBlock.classList.toggle('is-end');
      heroBossWriter();
  }

  refs.nextBtn.addEventListener('click', NEXTPHRASE);

  //Start fight w/ boss
  const FIGHT = () =>{
      refs.dialogWindow.classList.toggle('is-end');
      refs.gameWindow.classList.remove('is-end');
  }

  refs.bossFightBtn.addEventListener('click', FIGHT);

  //Fighter
  const Fighter = () =>{
    
    setTimeout(()=>{
        let a = getRandInt(900);
    let b = getRandInt(900);
    refs.numberSpanPlayer.textContent = a;
    refs.numberSpanComputer.textContent = b;
    if(a < b){
        setTimeout(()=>{
            refs.healthBarPlayer.removeChild(refs.healthBarPlayer.lastElementChild);
               if(refs.healthBarPlayer.childElementCount < 1){
                   alert("U Lose");
               }
        }, 600)
    }
    else{
        setTimeout(()=>{
            refs.healthBarComputer.removeChild(refs.healthBarComputer.lastElementChild);
            if(refs.healthBarComputer.childElementCount < 1){
                alert("U WIN");
            }
        }, 600)
    }
    },600)
}

const getRandInt = (x) =>{
    return Math.floor(Math.floor(x) * Math.random())
}

refs.generateBtn.addEventListener('click',Fighter);