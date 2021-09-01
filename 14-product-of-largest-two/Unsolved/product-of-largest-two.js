// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function (arr) {
  // sort array max to min
  var sortedArray = arr.sort(function (a, b) {
      return b - a
  })

  // multiple array[0] * array[1]
  return sortedArray[0] * sortedArray[1];
  
};

// https://www.w3schools.com/js/js_array_sort.asp

var numbers = [4, 8, 15, 16, 23, 42];
console.log(`raw array: ${numbers}`);

var sortedArray = numbers.sort(function (a, b) {
    return b - a
})

console.log(`sorted array: ${sortedArray}`);
console.log(sortedArray[0]);
console.log(sortedArray[1]);
console.log(sortedArray[0] * sortedArray[1]);