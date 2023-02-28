const pontHr = document.querySelector('.ponteiros-hr');
const pontMin = document.querySelector('.ponteiros-min');
const pontSec = document.querySelector('.ponteiros-seg');

const getTime = () => {
    const data = new Data();
   return {
        horas: data.getHours(),
        minutos: data.getMinutes(),
        segundos: data.getSeconds(),

    };

};

setInterval(() => {

  const { segundos, minutos, horas } = getTime(); 

  pontSec.style.transform = `translate(0, -50%) rotate(${segundos * 6}deg)`; 

  pontMin.style.transform = `translate(0, -50%) rotate(${minutos * 6}deg)`;

  pontHr.style.transform = `translate(0, -50%) rotate(${horas * 30}deg)`;

}, 1000);