const keys = document.querySelectorAll('.key');
/*variavel array criado para capturar as teclas utilizadas no piano */

const playnote = (nota) => {
    const audio = new Audio(`./notas/notes-piano/notes_1.wav`);
    audio.play();

}
/*captura dos arquivos de audio */

const checkbox = document.querySelector('.checkbox--keys');
const switcher = document.querySelector('.switcher');
const keysSection = document.querySelector('.piano-keys')

const keymousedown = (key) => {
    
    playnote();

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


checkbox.addEventListener('change', ({target}) => {
    if (target.checked){
        switcher.classList.add('switcher--ativo');
        keysSection.classList.remove('disabled-keys');
        return;
    }
    switcher.classList.remove('switcher--ativo');
    keysSection.classList.add('disabled-keys');

});

