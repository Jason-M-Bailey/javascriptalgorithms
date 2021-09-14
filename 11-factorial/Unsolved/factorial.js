// Write code to create a function that returns the factorial of `num`

// If given `0`, the factorial should be `1`. Otherwise, assume that the given number will be a whole positive number.

var factorial = function (num) {
  if (num === 0) {
    return 1;
  } else return num * factorial(num - 1);
};

// SOLVED