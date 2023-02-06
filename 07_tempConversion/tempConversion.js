const convertToCelsius = function(c) {
  let f = (c - 32) * .5556;
  let rounded = Math.round(f * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(f) {
  let c = f * 1.8 + 32;
  let rounded = Math.round(c * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
