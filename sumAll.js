var sumAll = function(num_a, num_b) {
  if (num_a < 0 || num_b < 0){
    return 'ERROR';
  } else if (!Number.isInteger(num_a) || !Number.isInteger(num_b)) {
    return 'ERROR';
  } else {
    return (num_a + num_b) * ((Math.abs(num_a - num_b) + 1) / 2);
  } // return - formula for a sum of numbers without a loop
}

module.exports = sumAll
