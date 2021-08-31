// Write code to add all the numbers in `arr` and return the total
// var arr = [4, 8, 15, 16, 23, 42];
// console.log("array = " + arr);

var sum = 0;
// console.log("-----");
// console.log("sum = " + sum);
// console.log("-----");

var sumArray = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    // console.log("for loop looking at number: " + arr[i]);
    // console.log((sum += arr[i]));
    // console.log("-----");
    // sum += arr[i];
    sum += arr[i];
  }
  return sum;
};

// console.log("-----");
// console.log(sum);

// https://www.delftstack.com/howto/javascript/javascript-sum-of-array/

// var sumArray = arr.reduce(function(a, b){
//     return a + b;
// }, 0);

// console.log(sumArray);
