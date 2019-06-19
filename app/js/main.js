
let rng = document.getElementById('myRange');
let power = document.getElementById('power');
let cost = document.getElementById('cost');
 rng.oninput = function calc() {
 power.value=rng.value;
 cost.value=power.value*3.30;
}
