/*
let rng = document.getElementById('myRange');
let power = document.getElementById('power');
let cost = document.getElementById('cost');
 rng.oninput = function calc() {
 power.value=rng.value;
 cost.value=power.value*3.30;
}
*/
/*из библ. Powerange вставляем ползунок*/
 
 let elem = document.querySelector('.slider'); 
 let init = new Powerange(elem, {
   min: 0,
   max: 9999,
   //klass: '',
   //decimal: true,
   start: 500,
   hideRange: true,
   step: 100 
  });


let power = document.getElementById('power');
let cost = document.getElementById('cost');
elem.onchange = function() {
  power.value = elem.value;
  cost.value=(power.value*3.30).toFixed(2);
};
 
