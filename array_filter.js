// use array.filter to find different answers

const words = ['banana', 'spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log("*");
console.log("*");
console.log(words);
console.log(`words greater than 6 letters: ${result}`);
console.log("*");
console.log("*");

// find numbers greater than 3

const numbers = [1, 2, 3, 4, 5, 6];

const greaterThanThree = numbers.filter(number => number > 3);

console.log(numbers);
console.log(`numbers greater than 3: ${greaterThanThree}`);
console.log("*");
console.log("*");

// find numbers between 2 and 6

const betweenTwoAndSix = numbers.filter(number => number > 2 && number < 6);

console.log(betweenTwoAndSix);
console.log(`numbers between 2 and 6: ${betweenTwoAndSix}`);