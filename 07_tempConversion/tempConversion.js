const convertToCelsius = function(fht) {
  return Math.round((fht - 32) * 5 / 9 * 10) / 10;
};

const convertToFahrenheit = function(cel) {
  return Math.round((cel * 9 / 5 + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
