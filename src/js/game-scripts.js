
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
        retryBTN: document.querySelector('.retry')
    }
    /////
    let item = document.createElement('li');
    item.classList.add('player_round_box');
    item.textContent = 34;
    refs.healthBarPlayer.appendChild(item);
    ////
    
    const generator = () =>{
        setTimeout(()=>{
            let a = getRandInt(900);
        let b = getRandInt(900);

        refs.numberSpanPlayer.textContent = a;
        refs.numberSpanComputer.textContent = b;
        if(a < b){
            item.cloneNode(true);
        }
        else{
            refs.healthBarPlayer.appendChild(item);
        }
        },400)
    }
    
    const getRandInt = (x) =>{
        return Math.floor(Math.floor(x) * Math.random())
    }

    const RETRY = () =>{
        window.location.reload();
    }

    refs.retryBTN.addEventListener('click', RETRY);
    refs.generateBtn.addEventListener('click', generator);

