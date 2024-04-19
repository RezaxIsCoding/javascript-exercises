const convertToCelsius = function(tempFahren) {
  let celsius = Math.round(((tempFahren - 32) * 5/9) * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function(tempCelsius) {
  let fahren = Math.round(((tempCelsius * 9/5) + 32) * 10) / 10;
  return fahren;
};
convertToCelsius(32);
convertToCelsius(100);
convertToCelsius(-100);
convertToFahrenheit(0);
convertToFahrenheit(73.2);
convertToFahrenheit(-10);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
