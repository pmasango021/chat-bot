const input = require('sync-input');

console.log("Hello! My name is Aid.")
console.log("I was created in 2020.")
console.log("Please, remind me your name.")

let name = input()

console.log("What a great name you have, " + name + "!")
console.log("Let me guess your age.")
console.log("Enter remainders of dividing your age by 3, 5 and 7.")

let rem3 = Number(input());
let rem5 = Number(input());
let rem7 = Number(input());

//alternative way to do it

// const remainder3 = parseInt(input());
// const remainder5 = parseInt(input());
// const remainder7 = parseInt(input());

let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;

console.log("Your age is " + age + "; that's a good time to start programming!");
console.log("Now I will prove to you that I can count to any number you want.");

// read a number and count to it here
const input = require('sync-input');

console.log("Hello! My name is Aid.")
console.log("I was created in 2020.")
console.log("Please, remind me your name.")

let name = input()

console.log("What a great name you have, " + name + "!")
console.log("Let me guess your age.")
console.log("Enter remainders of dividing your age by 3, 5 and 7.")

let rem3 = Number(input());
let rem5 = Number(input());
let rem7 = Number(input());

let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;

console.log("Your age is " + age + "; that's a good time to start programming!");
console.log("Now I will prove to you that I can count to any number you want.");

// read a number and count to it here
let num = Number(input()); // read a number and count to it here

for (let i =0; i <= num; i++) { // i++ is the same as i = i + 1
    console.log(i + "!"); // print numbers from 0 to num
}


console.log("Completed, have a nice day!");
