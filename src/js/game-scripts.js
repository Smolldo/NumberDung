const refs = {
    generateBtn: document.querySelector('.generate_btn'),
    numberSpanPlayer: document.querySelector('.num_now_pl'),
    numberSpanComputer: document.querySelector('.num_now_ai'),
    healthBarPlayer: document.querySelector('.round_list_player'),
    healthBarComputer: document.querySelector('.round_list_computer')
}

const GENER = () => {
    
    let a = Math.floor(Math.random() * 1000);
    let b  = Math.floor(Math.random() * 1000);
    refs.numberSpanPlayer.innerHTML = a;
    refs.numberSpanComputer.innerHTML =b
        if(a > b){
            DeleteComp();
        }else{
            DeletePlayer();  
        }

    };


const DeletePlayer = () =>{
    if(refs.healthBarPlayer.childElementCount == 0){
        alert("U Loose");
        refs.healthBarPlayer = false;
    }
    else{
        refs.healthBarPlayer.removeChild(refs.healthBarPlayer.lastChild)
    }
}

const DeleteComp = () =>{
    if(refs.healthBarComputer.childElementCount == 0){
        alert("U WIN")
        refs.numberSpanComputer = false;
    }
    else{
        refs.healthBarComputer.removeChild(refs.healthBarComputer.lastChild)
    }
}
refs.generateBtn.addEventListener('click', GENER);
