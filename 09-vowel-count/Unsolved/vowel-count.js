// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
  if (str.length === 0) {
    return 0;
  } else return str.match(/[aeiou]/gi).length;
};


// SOLVED
// todo: can also solve with a for loop, check i is included in a vowel array, count++