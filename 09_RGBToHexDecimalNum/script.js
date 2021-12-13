var redValEl = document.getElementById('redValue');
var greenValEl = document.getElementById('greenValue');
var blueValEl = document.getElementById('blueValue');
var hexaValue = document.getElementById('hexaDecimal');

var rgb = document.getElementById('rgbResult');



function convert(){
    var red = redValEl.value;
    var green = greenValEl.value;
    var blue = blueValEl.value;

    var hexaColorCode = '#' + Hexa(red) + Hexa(green)  + Hexa(blue);

    hexaValue.value = hexaColorCode; 

    rgb.style.background = `rgb(${red}, ${green}, ${blue})`;

};

function Hexa(value){
   var hexa = parseInt(value).toString(16);
   return hexa.length == 1 ? "0" + hexa : hexa;
}
