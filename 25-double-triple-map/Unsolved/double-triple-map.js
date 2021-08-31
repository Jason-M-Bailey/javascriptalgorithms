// Write code to create a function that accepts an array of numbers and returns a new array that corresponds to the original array
// If a element in the original array is even, the element at the same index in the new array should be double the original element
// If an element in the original array is odd, the element at the same index of the new array should be triple the original element

const arr = [-3, 3, -4, 0, -7, 9];

var doubleTripleMap = function (arr) {
  const newArray = arr.map((num, index) => {
    if (num % 2 === 0) {
      return num * 2;
    } else {
      return num * 3;
    }
  });
  console.log(newArray);

  return newArray;
};

doubleTripleMap(arr);
