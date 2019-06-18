var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

function fun1() {
 var rng=document.getElementById('myRange'); //rng - это ползунок
var i1=document.getElementById('i1'); // i1 - input
i1.value=rng.value;
}s