// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function (str) {
  let reversed = str.split("").reverse().join("");

  if (str === reversed) {
    return true;
  } else return false;
};

// SOLVED