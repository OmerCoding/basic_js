var ftoc = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9);
  return Math.round(celsius * 10) / 10;
}

var ctof = function(celsius) {
  let fahrenheit = 1.8 * celsius + 32;
  return Math.round(fahrenheit * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
