const keys = document.querySelectorAll('.key');
/*variavel array criado para capturar as teclas utilizadas no piano */

const playnote = (note) => {
    const audio = new Audio(`./notas/notes_${note}.wav`);
    audio.play();

}
/*captura dos arquivos de audio */

const checkbox = document.querySelector('.checkbox--keys');
const switcher = document.querySelector('.switcher');
const keysSection = document.querySelector('.piano-keys' );

const keymousedown = (key) => {
    
    playnote(key.getAttribute('data-note'));

    if (key.className.includes('black')){
        key.classList.add('black--press');
        return;
    };
    key.style.background = '#ddd';
    /*assi, que a tecla for pressionada haverá uma mudança de cor */
};

const keymouseup = (key) => {
    if (key.className.includes('black')){
       key.classList.remove('black--press');
        return;
    };
    key.style.background = 'white';
    
};

keys.forEach((key) => {

    key.addEventListener('mousedown', () => keymousedown(key))

    key.addEventListener('mouseup', () => keymouseup(key))

    /* seção utilizada para percorrer a array keys e add um addeventlistener em cada tecla do piano.*/ 
});


checkbox.addEventListener('change', ({ target }) => {
    if (target.checked) {
        switcher.classList.add('switcher--ativo');
        keysSection.classList.remove('disabled-keys');
        return;
    }

    switcher.classList.remove('switcher--ativo');
    keysSection.classList.add('disabled-keys');
});

const keyDownMapper = {
    "q": () => keymousedown(keys[0]),
    "a": () => keymousedown(keys[1]),
    "w": () => keymousedown(keys[2]),
    "s": () => keymousedown(keys[3]),
    "e": () => keymousedown(keys[4]),
    "d": () => keymousedown(keys[5]),
    "r": () => keymousedown(keys[6]),
    "f": () => keymousedown(keys[7]),
    "t": () => keymousedown(keys[8]),
    "g": () => keymousedown(keys[9]),
    "y": () => keymousedown(keys[10]),
    "h": () => keymousedown(keys[11]),
    "u": () => keymousedown(keys[12]),
    "j": () => keymousedown(keys[13]),
    "i": () => keymousedown(keys[14]),
    "k": () => keymousedown(keys[15]),
    "o": () => keymousedown(keys[16]),
    "l": () => keymousedown(keys[17]),
    "p": () => keymousedown(keys[18]),
    "ç": () => keymousedown(keys[19]),
    "z": () => keymousedown(keys[20]),
    "x": () => keymousedown(keys[21]),
    "c": () => keymousedown(keys[22]),
    "v": () => keymousedown(keys[23]),
   
};

const keyUpMapper = {
    "q": () => keymouseup(keys[0]),
    "a": () => keymouseup(keys[1]),
    "w": () => keymouseup(keys[2]),
    "s": () => keymouseup(keys[3]),
    "e": () => keymouseup(keys[4]),
    "d": () => keymouseup(keys[5]),
    "r": () => keymouseup(keys[6]),
    "f": () => keymouseup(keys[7]),
    "t": () => keymouseup(keys[8]),
    "g": () => keymouseup(keys[9]),
    "y": () => keymouseup(keys[10]),
    "h": () => keymouseup(keys[11]),
    "u": () => keymouseup(keys[12]),
    "j": () => keymouseup(keys[13]),
    "i": () => keymouseup(keys[14]),
    "k": () => keymouseup(keys[15]),
    "o": () => keymouseup(keys[16]),
    "l": () => keymouseup(keys[17]),
    "p": () => keymouseup(keys[18]),
    "ç": () => keymouseup(keys[19]),
    "z": () => keymouseup(keys[20]),
    "x": () => keymouseup(keys[21]),
    "c": () => keymouseup(keys[22]),
    "v": () => keymouseup(keys[23]),
   
};

document.addEventListener('keydown', (event) => {
    event.preventDefault();
    keyDownMapper[event.key]()
});

document.addEventListener('keyup', (event) => {
    event.preventDefault();
    keyUpMapper[event.key]()
});