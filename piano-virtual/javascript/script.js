const keys = document.querySelectorAll('.key');

/*variavel array criado para capturar as teclas utilizadas no piano */

const presskey = (key) => {
    key.style,background = '#ddd'
    /*assi, que a tecla for pressionada haverá uma mudança de cor */
}

keys.forEach((key) => {

    key.addEventListener('click', () => presskey(key))

    /* seção utilizada para percorrer a array keys e add um addeventlistener em cada tecla do piano.*/ 
});