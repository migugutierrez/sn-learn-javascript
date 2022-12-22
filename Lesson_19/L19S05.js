//
// L19S05 - Global variables and local
//
//var convertTo = 'F';

function toCelsius(f) {

    var c = (5 / 9) * (f - 32);
        
    return c;
}

function toFahrenheit(c) {

    var f = c * 9 / 5 + 32;
        
    return f;
}

function convertTemp(convertTo, temp) {
  //updated to local variable  
  var convertTo = '';
  // use the global variable to determine conversion
  if (convertTo == 'C') {
    return toCelsius(temp);
  } 
    //removed 'else'
  return toFahrenheit(temp);
  
}
//pass in either 'F' or 'C' to convert selected temp.
gs.info(convertTemp('F', 100));
