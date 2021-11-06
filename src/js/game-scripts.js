
    const refs = {
        generateBtn: document.querySelector('.generate_btn'),
        numberSpanPlayer: document.querySelector('.num_now_pl'),
        numberSpanComputer: document.querySelector('.num_now_ai'),
        healthBarPlayer: document.querySelector('.round_list_player'),
        healthBarComputer: document.querySelector('.round_list_computer'),
        //liComp: document.querySelector('.player_round_box'),
        liComp: document.querySelector('.comp_round_box'),
        winWeb: document.querySelector('.backdrop_win'),
        looseWeb: document.querySelector('.backdrop_loose'),
        bossBtn: document.querySelector('.boss_fight_btn'),
        retryBTN: document.querySelector('.retry'),
        hitSound: document.querySelector('.hit')
    }
    /////<a href="https://files.fm/u/kcjykfzcz#/view/hp.jpg"><img src="https://files.fm/thumb_show.php?i=ybwxand52"></a>
    //<a href="https://files.fm/u/kcjykfzcz#/view/hp.jpg"><img src="https://files.fm/thumb_show.php?i=uupdvbcvj"></a>
    //<a href="https://files.fm/f/qz6h7drxh"><img src="https://files.fm/thumb_show.php?i=qz6h7drxh"></a>
    const HP ={
        src: 'https://files.fm/thumb_show.php?i=ybwxand52',
        description: "Hit Point",
    };

    
    /*let item = document.createElement('li');
    item.classList.add('player_round_box');
    item.textContent = 34;
    refs.healthBarPlayer.appendChild(item);*/
    refs.healthBarPlayer.innerHTML = `<li class="round_item">
    <span class="player_round_box"><img class="hp" src="${HP.src}" alt="${HP.description}"></span>
</li>
<li class="round_item">
    <span class="player_round_box"><img class="hp" src="${HP.src}" alt="${HP.description}"></span>
</li>
<li class="round_item">
    <span class="player_round_box"><img class="hp" src="${HP.src}" alt="${HP.description}"></span>
</li>`
    refs.healthBarComputer.innerHTML = `<li class="round_item">
    <span class="comp_round_box"><img class="hp" src="${HP.src}" alt="${HP.description}"></span>
</li>
<li class="round_item">
    <span class="comp_round_box"><img class="hp" src="${HP.src}" alt="${HP.description}"></span>
</li>
<li class="round_item">
    <span class="comp_round_box"><img class="hp" src="${HP.src}" alt="${HP.description}"> </span>
</li>`
    ////
    
    const generator = () =>{
        refs.hitSound.play();
        setTimeout(()=>{
            let a = getRandInt(900);
        let b = getRandInt(900);
        refs.numberSpanPlayer.textContent = a;
        refs.numberSpanComputer.textContent = b;
        if(a < b){
            setTimeout(()=>{
                refs.healthBarPlayer.removeChild(refs.healthBarPlayer.lastElementChild);
                   if(refs.healthBarPlayer.childElementCount < 1){
                       refs.looseWeb.classList.remove('is-end');
                   }
            }, 600)
        }
        else{
            setTimeout(()=>{
                refs.healthBarComputer.removeChild(refs.healthBarComputer.lastElementChild);
                if(refs.healthBarComputer.childElementCount < 1){
                    refs.winWeb.classList.remove('is-end');
                }
            }, 600)
        }
        },600)
    }
    
    const getRandInt = (x) =>{
        return Math.floor(Math.floor(x) * Math.random())
    }

    const RETRY = () =>{
        window.location.reload();
    }

    refs.retryBTN.addEventListener('click', RETRY);
    refs.generateBtn.addEventListener('click', generator);

