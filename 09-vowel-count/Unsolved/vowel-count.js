// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
  // define array of vowels ["a", "e", "i", "o", "u"]
  // split? array of str into individual letters to check against
  // for loop to check if letter is a vowel
  // if vowel, count++
  // if not vowel, count = 0
};

var vowelTotal = 0;
var vowels = ["a", "e", "i", "o", "u"];
for (let i = 0; i < vowels.length; i++) {
  console.log(vowels[i]);
}
console.log("---");
var str1 = "programmer";

console.log(str1);
console.log("---");

const myArr1 = str1.split("");
console.log(myArr1);
console.log("---");

for (let i = 0; i < myArr1.length; i++) {
  console.log(myArr1[i]);
  console.log(vowelTotal);
}

