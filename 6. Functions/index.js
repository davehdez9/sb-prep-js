//---------- 1. Your First Function

// Define a function ->

// function funcName(){
// 	do something
// }

// function grumpus() {
//   console.log('ugh... you again...');
//   console.log('for the last time');
//   console.log('LEAVE ME ALONE');
// }

// Run the Function ->

// funcName(); // run once
// funcName(); // run again!
// grumpus();

// for (let i = 0; i < 10; i++) {
//   grumpus();
// }

//---------- 2. Dice Roll Function

// function roolDie() {
//   let roll = Math.floor(Math.random() * 6) + 1;
//   console.log(`Rolled: ${roll}`);
// }

// roolDie();

// function throwDice() {
//   //We can call functions inside other functions
//   roolDie();
//   roolDie();
//   roolDie();
//   roolDie();
//   roolDie();
//   roolDie();
// }

// throwDice();

//---------- 3. Introducing Arguments

//No inputs
// 'hello'.toUpperCase();

//Arguments!
// 'hello'.indexOf('h'); // Different Inputs // 0
// 'hello'.indexOf('o'); // Different outputs // 4

// function greet(person) {
//   console.log(`Hi, ${person}!`);
// }

// greet('Arya');
// greet('Ned');

// function roolDie() {
//   let roll = Math.floor(Math.random() * 6) + 1;
//   console.log(`Rolled: ${roll}`);
// }
// // roolDie();

// function throwDice(numRolls) {
//   for (let i = 0; i < numRolls; i++) {
//     roolDie();
//   }
// }

// throwDice(10);

//----------  4. Functions with Multiple Arguments
// function square(num) {
//   console.log(num * num);
// }

// square(4);

// function sum(x, y) {
//   console.log(x + y);
// }

// sum(4, 5);

// function divide(a, b) {
//   console.log(a / b);
// }

// divide(1, 4);

//---------- 5. The Return Statement

// const yell = 'I will end you'.toUpperCase();
// console.log(yell); //'I WILL END YOU'

// const idx = ['a', 'b', 'c'].indexOf('c');
// console.log(idx); //2

//---
// function add(x, y) {
//   console.log(x + y);
// }

// const sum = add(10, 16);
// sum; // undefined

//--
// function add(x, y) {
//   return x + y;
// }

// const sum = add(10, 16);
// sum; // 26

// const answer = add(100, 200);

//---------- 6. More on Return Values

// function square(x) {
//   return x * x;
//   console.log('WELL DONE'); // will not show up
// }

// function isPurple(color) {
//   if (color.toLowerCase() === 'purple') {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isPurple(color) {
//   if (color.toLowerCase() === 'purple') {
//     return true;
//   }
//   return false;
// }

// function isPurple(color) {
//   return color.toLoweCase() === 'purple';
// }

// function containsPurple(arr) {
//   for (let color of arr) {
//     if (color === 'purple' || color === 'magenta') {
//       return true;
//     }
//   }
//   return false;
// }

//---------- 7. Function Challenge 1 - passwordValidator

// 7.1 Write a function isValidPassword function
// It accepts 2 arguments: password and username
// password must:
// 	- be at least 8 charaters
// 	- cannot contain spaces
// 	- cannot contain the username
// If all requirements are met, return true
// Otherwise: false

// isValidPassword('89Fjjlnms', 'dogLuvr'); //true
// isValidPassword('dogLuvr123', 'dogLuvr'); //false

// Ex 1 ->
// function isValidPassword(password, username) {
//   if (password.length < 8) {
//     return false;
//   }
//   if (password.indexOf(' ') !== -1) {
//     return false;
//   }
//   if (password.indexOf(username) !== -1) {
//     return false;
//   }
//   return true;
// }

// Ex 2 ->
// function isValidPassword(password, username) {
//   if (
//     password.length < 8 ||
//     password.indexOf(' ') !== -1 ||
//     password.indexOf(username) !== -1
//   ) {
//     return false;
//   }
//   return true;
// }

// Ex 3 ->
// function isValidPassword(password, username) {
//   const tooShort = password.length < 8;
//   const hasSpace = password.indexOf(' ') !== -1;
//   const tooSimilar = password.indexOf(username) !== -1;
//   if (tooShort || hasSpace || tooSimilar) return false;
//   return true;
// }

// Ex 4 ->
// function isValidPassword(password, username) {
//   const tooShort = password.length < 8;
//   const hasSpace = password.indexOf(' ') !== -1;
//   const tooSimilar = password.indexOf(username) !== -1;
//   return !tooShort && !hasSpace && !tooSimilar;
// }

//---------- 8. Function Challenge 2 - Average

// Write a function to find the average value in an array of numbers
// avg([0,50]) //25
// avg([75,76,80,95,100]) //85.2

// function avg(arr) {
//   let total = 0;
//loop over each num
//   for (let num of arr) {
//add them together
//     total += num;
//   }
//divide by number of nums
//   return total / arr.length;
// }

//---------- 9. Function Challenge 3 - Pangrams

// a pangram is a sentences that contains every letter of the alphabet, like;
// "The quick brown fox jumps over the lazy dog"

// Write a function call is pangram, which check to see if a given sentecens contains every letter of the alphabet. Make sure you ignore string casing!

// isPangram('the five boxing wizards jump quickly');
// isPangram('the five boxing wizards jump quick');

// Ex 1 ->
// function isPangram(sentence) {
//   let lowerCased = sentence.toLowerCase();
//   for (let char of 'abcdefghijklmnopqrstuvwxyz') {
//     if (lowerCased.indexOf(char) === -1) {
//       return false;
//     }
//   }
//   return true;
// }

// Ex 2 ->
// function isPangram(sentence) {
//   let lowerCased = sentence.toLowerCase();
//   for (let char of 'abcdefghijklmnopqrstuvwxyz') {
//     if (!lowerCased.includes(char)) {
//       return false;
//     }
//   }
//   return true;
// }

//---------- 10. Function Challenge 4 - Get Playing Card

// Write a getCard() function which returns a random playing card object, like:
// {
// 	value: 'K'
// 	suit: 'clubs'
// }
// Pick a random value from:
// -----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
// Pick a random suit from:
// -----clubs, spaced, hearts, diamons
// return both in an object

function pick(arr) {
  //return random element from arr
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function getCard() {
  const values = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
  ];

  // option  1 ->
  //   const idx = Math.floor(Math.random() * values.length);
  //   const value = values[idx];

  //option 1.1 ->
  //   const value = pick(values);

  const suits = ['clubs', 'spades', 'hearts', 'diamonds'];

  //option 2
  //   const suitIdx = Math.floor(Math.random() * suits.length);
  //   const suit = suits[suitIdx];

  // option 2.1
  //   const suit = pick(suits);

  //   return { value: value, suit: suit };
  return { value: pick(values), suit: pick(suits) }; // other option of return
}
