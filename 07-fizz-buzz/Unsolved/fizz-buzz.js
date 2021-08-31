// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

var fizzBuzz = function (arr) {
  for (let index = 0; index < arr.length; index++) {
    // if div by 15 print fizz Buzz
    if (arr[index] % 5 === 0 && arr[index] % 3 === 0) {
      console.log("Fizz Buzz");
    }

    // if div by 5 print Buzz
    else if (arr[index] % 5 === 0) {
      console.log("Buzz");
    }
    // if div by 3 print fizz
    else if (arr[index] % 3 === 0) {
      console.log("Fizz");
    }
    // else print number
    else {
      console.log(arr[index]);
    }
  }
};


// const fizzBuzz = (i) => {
//     if (Number.isInteger(i / 15)) return 'FizzBuzz';
//     if (Number.isInteger(i / 3)) return 'Fizz';
//     if (Number.isInteger(i / 5)) return 'Buzz';
//     return i;
//   };