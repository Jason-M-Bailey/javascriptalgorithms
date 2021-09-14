// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

// https://www.tabnine.com/academy/javascript/how-to-use-the-touppercase-method/

var titleCase = function (str) {
  const stringToArray = str.split(" ");
  const firstLetterUC = stringToArray.map(
    (word) => word[0].toUpperCase() + word.substring(1)
  );

  return (newString = firstLetterUC.join(" "));
};

// SOLVED

const str = "welcome friend, i am so glad to see you!";

// split string into an array based on spaces
const strToArr = str.split(" ");
console.log(strToArr);
// expected output: ["welcome", "friend,", "i", "am", "so", "glad", "to", "see", "you!"]

// iterate through array
// of index 0, toUpperCase
// combine index 0 + rest of substring
const allFirstToUC = strToArr.map(
  (word) => word[0].toUpperCase() + word.substring(1)
);
console.log(allFirstToUC);
// expected output: ["Welcome", "Friend,", "I", "Am", "So", "Glad", "To", "See", "You!"]

// combine array into a string
const newStr = allFirstToUC.join(" ");
console.log(newStr);
// expected output: Welcome Friend, I Am So Glad To See You!
