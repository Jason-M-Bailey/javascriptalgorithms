// FizzBuzz without using %
// Nearly every FizzBuzz answer you see uses the remainder (%) operator.

// For this challenge we have removed the remainder (%) operator so you have to find an alternative way to check if a number should have Fizz, Buzz and or FizzBuzz logged to the console instead.

// Log each number / Fizz / Buzz / FizzBuzz to the console without using %.


const oneToOneHundred = Array.from({ length: 100 }, (_, i) => i + 1);

const fizzBuzz = (i) => {
  if (Number.isInteger(i / 15)) return 'FizzBuzz';
  if (Number.isInteger(i / 3)) return 'Fizz';
  if (Number.isInteger(i / 5)) return 'Buzz';
  return i;
};

console.log(oneToOneHundred.map((i) => fizzBuzz(i)).join('\n'));