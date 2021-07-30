// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]


var fizzBuzz = function(arr) {
    for (var i = 0; i < num.length; i++) {
      var currentNumber = num[i];
  
      if (currentNumber % 15 === 0) {
        console.log(`${currentNumber} is divisible by 3 and 5 = Fizz Buzz`);
      } else if (currentNumber % 3 === 0) {
        console.log(`${currentNumber} is divisible by 3 = Fizz`);
      } else if (currentNumber % 5 === 0) {
        console.log(`${currentNumber} is divisible by 5 = Buzz`);
      } else {
        console.log(currentNumber);
      }
    }
  };
  
  fizzBuzz();
