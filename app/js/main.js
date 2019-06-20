
let rng = document.getElementById('myRange');
let power = document.getElementById('power');
let cost = document.getElementById('cost');
 rng.oninput = function calc() {
 power.value=rng.value;
 cost.value=power.value*3.30;
}

/*из библ. Powerange вставляем ползунок*/
 //находим наш класс в ползунке
 //устанавл. нач. и конеч. знач в ползунке, скрываем их с экрана, шаг ползунка 1000000
 //отслеживаеть радиокнопку в html через data-month="" data-per=""
 var elem = document.querySelector('.slider'); 
 var init = new Powerange(elem, {
   min: 0,
   max: 9999,
   klass: '.slider',
   decimal: true,
   start: 500,
   hideRange: true,
   step: 100 
  });