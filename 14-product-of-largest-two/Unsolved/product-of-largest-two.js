// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function (arr) {
  // descending = b - a
  arr.sort(function (a, b) {
    return b - a;
  });

  return arr[0] * arr[1];
};

// SOLVED