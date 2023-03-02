const pontHr = document.querySelector('.ponteiros-hr');
const pontMin = document.querySelector('.ponteiros-min');
const pontSec = document.querySelector('.ponteiros-seg');


const getTime = () => {
    const data = new Data();
    const obj = {
      hours: data.getHours(),
      minutes: data.getMinutes(),
      seconds: data.getSeconds(),

    }

   return obj;
};

setInterval(() => {

  const {seconds, minutes, hours} = getTime()

  pontSec.style.transform = `transform(0, -50%) rotate(${seconds * 6 }deg)`;

  pontMin.style.transform = `transform(0, -50%) rotate(${minutes * 6 }deg)`;

  pontHr.style.transform = `transform(0, -50%) rotate(${hours * 30 }deg)`;

}, 1000);