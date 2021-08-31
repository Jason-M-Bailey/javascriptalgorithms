// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
  // start count at zero
  let count = 0;

  // define array of vowels
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  // for loop to check each character in the string
  for (let char of str) {

    // use includes to check if array contains the character
    if (vowels.includes(char)) {

      // if vowel, count++
      count++;
    }
  }

  // return count of vowels
  return count;
};



// example of the for ... of loop
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"