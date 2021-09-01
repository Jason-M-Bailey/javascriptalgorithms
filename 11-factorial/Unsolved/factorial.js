// Write code to create a function that returns the factorial of `num`
// factorial: the product of an integer and all the integers below it; e.g. factorial four ( 4! ) is equal to 24.

var factorial = function (num) {
  // edge case of negative integer
  if (num < 0) return -1;

  // edge case if integer = 0
  else if (num == 0) return 1;

  // all other instances of an integer
  else {
    return num * factorial(num - 1);
  }
};

// Three Ways to Factorialize a Number in JavaScript
// https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/#:~:text=function%20factorialize(num)%20%7B%20%2F%2F%20If%20num%20%3D%200%20OR,num%20*%3D%20i%3B%20%2F*%20num
