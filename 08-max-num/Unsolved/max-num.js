// Write code to return the largest number in the given array

var maxNum = function(arr) {
    // console.log(Math.max(...arr));
    return Math.max(...arr);
};

var arr = [2, 3, -2, 99, 100, 2222, 321];

console.log("*");
console.log(`using Math.max(...arr): ${Math.max(...arr)}`);
console.log("*");
console.log(Math.max(arr)); // returns NaN

// Math.max(...arr) documentation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max