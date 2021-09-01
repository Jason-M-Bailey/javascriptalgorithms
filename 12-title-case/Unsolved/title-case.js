// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function (str) {
  var result = [];

  // split the string based on spaces --> " "
  var words = str.split(" ");

  // for loop through each word in the array
  for (var i = 0; i < words.length; i++) {
    var word = words[i].split("");

    // toUpperCase the first letter [0] of the string
    word[0] = word[0].toUpperCase();

    // now the words are capitalized but are in an array rather than a string

    // use .join to combine the word back together
    result.push(word.join(""));
  }

  // combine the array back into a string
  return result.join(" ");
};

// https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/
