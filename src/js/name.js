const refs = {
    inp: document.querySelector('#player_name'),
    nameBtn: document.querySelector('.name_confirm'),
    gameScreen: document.querySelector('.game_field'),
    heroName: document.querySelector('.player_name'),
    rules: document.querySelector('.rule_cover'),
    names: document.querySelector('.name_block'),
    forms: document.querySelector('.name_form')
}

const screens =[];
screens.push(refs.rules);
screens.push(refs.forms);

const NameConfirming = () => {
    if(refs.inp.value === ""){
        refs.inp.style.borderBottomColor = "red";
        refs.inp.placeholder = "Enter name!";
    } 
    else{
        console.log("Good name!");
        refs.names.classList.toggle('is-none')
        refs.heroName.textContent = refs.inp.value;
        refs.gameScreen.classList.toggle('is')
        screens.forEach(element => {
            element.classList.add('is-end');
        });
    }
}

refs.nameBtn.addEventListener('click', NameConfirming);