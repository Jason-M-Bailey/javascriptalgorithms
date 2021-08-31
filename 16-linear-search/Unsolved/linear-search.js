// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

var linearSearch = function (arr, target) {
  //0 <5  =>arr[index]=>3 compare with target of equals return index
  //1 <5
  //2 <5
  //3 <5
  //4 <5
  //5 <5

  //return -1
  for (let index = 0; index < arr.length; index++) {
    if (target === arr[index]) {
      return index;
    }
  }
  return -1;
};
