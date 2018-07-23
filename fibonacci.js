var fibonacci = function(fib) {
  if (typeof fib === 'string') {
    fib = parseInt(fib);
  }
  if (fib < 1) {
    return "OOPS";
  }
  if (fib === 1 || fib === 2) {
    return 1;
  }
  return fib = fibonacci(fib - 1) + fibonacci(fib - 2);
}

module.exports = fibonacci
