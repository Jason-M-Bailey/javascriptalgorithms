// Write code to add all the numbers in `arr` and return the total

var sumArray = function (arr) {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;

  var sum = arr.reduce(reducer);

  return sum;
};


// SOLVED
// todo: can also use a for loop