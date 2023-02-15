const keys = document.querySelectorAll('.key');

/*variavel array criado para capturar as teclas utilizadas no piano */

const keymousedown = (key) => {

    if (key.className.includes('black')){}
    key.style.background = '#ddd';
    /*assi, que a tecla for pressionada haverá uma mudança de cor */
};

const keymouseup = (key) => {
    key.style.background = 'white';
    
};

keys.forEach((key) => {

    key.addEventListener('mousedown', () => keymousedown(key))

    key.addEventListener('mouseup', () => keymouseup(key))

    /* seção utilizada para percorrer a array keys e add um addeventlistener em cada tecla do piano.*/ 
});

