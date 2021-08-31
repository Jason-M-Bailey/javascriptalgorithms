const num1 = 3;
const num2 = 5;

const add = function (num1, num2) {
    return num1 + num2;
}

const subtract = function (num1, num2) {
    return num1 - num2;
}

const subtract2 = function (num2, num1) {
    return num2 - num1;
}

var multiply = function(num1, num2) {
    return num1 * num2;
};

var divide = function(num1, num2) {
    return num1 / num2;
};

console.log(`add num1 + num2 = ${num1 + num2}`);
console.log(`subtract num1 - num2 = ${num1 - num2}`);
console.log(`subtract num2 - num1 = ${num2 - num1}`);
console.log(`multiply num1 * num2 = ${num1 * num2}`);
console.log(`divide num1 / num2 = ${num1 / num2}`)
console.log(`divide num2 / num1 = ${num2 / num1}`)