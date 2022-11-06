const input = require('sync-input');

console.log("Hello! My name is Aid.");
console.log("I was created in 2020.");
console.log("Please, remind me your name.");

let name = input();

console.log("What a great name you have, " + name + "!");
console.log("Let me guess your age.");
console.log("Enter remainders of dividing your age by 3, 5 and 7.");

// reading all remainders

const remainder3 = parseInt(input());
const remainder5 = parseInt(input());
const remainder7 = parseInt(input());

let your_age = (remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105

console.log("Your age is", your_age, "; that's a good time to start programming!");
