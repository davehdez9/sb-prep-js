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

// 8. Function Challenge 2 - Average
// 9. Function Challenge 3 - Pangrams
// 10. Function Challenge 4 - Get Playing Card
