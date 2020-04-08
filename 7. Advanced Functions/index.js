/*---------- ADVANCED FUNCTIONS ----------*/

/*----- 1. FUNCTIONS SCOPE -----*/

//Ex 1
// function helpMe() {
//   let msg = 'I am on fire!';
//   msg; // "I am on fire!"
//msg is scoped to the helpMe function
// }

// msg; // NOT DEFINED

//Ex 2
// function lol() {
//   let person = 'Tom';
//   const age = 45;
//   var color = 'teal';
//   console.log(age);
// }

// function changeColor() {
//   let color = 'purple';
//   const age = 19;
//   console.log(age);
// }

// lol(); //45
// changeColor(); // 19
// console.log(color); // NOT DEFINED

//Ex 3
//bird is scoped to birdWatch function

// let bird = 'mandarin duck';

// function birdWatch() {
//   let bird = 'golden pheasant';
//   console.log(bird); // "golden pheasant"
// }

// birdWatch(); // "golden pheasant"
// console.log(bird); // "mandarin duck"

/*---------- 2. BLOCK SCOPED ----------*/

// Ex 1 -> PI & circ are scoped to the BLOCK
// let radius = 8;

// if (radius > 0) {
//   const PI = 3.14;

//   let circ = 2 * PI * radius;
// }

// console.log(radius); //8
// console.log(PI);//NOT DEFINED
// console.log(circ); //NOT DEFINED

// Ex 2 ->

// if (true) {
//   const animal = 'ell';
//   console.log(animal); // ell;
// }

// console.log(animal); // Not defined , out of the block of if statement

// Ex 3 ->
// if (true) {
//   var animal = 'ell'; // changed to var - there is not block scope for Var
//   console.log(animal); // ell;
// }

// console.log(animal); // ell

// Ex 4-> (Question)
// let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
// var i = 10; //
// for (var i = 0; i < animals.length; i++) {
//   console.log(i, animals[i]); // i is inside the block scoped
// }

// console.log(i); // 3 -> for loop still work. length of the block

// Ex 5->
// let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
// let i = 10; //
// for (let i = 0; i < animals.length; i++) {
//   console.log(i, animals[i]); // i is inside the block scoped
// }

// console.log(i); // 10 -> this i is outside the block

// Ex 6 ->
// function doubleArr(arr) {
//   const result = [];
//   for (let num of arr) {
//     let double = num * 2;
//     result.push(double);
//   }
//   return result;
// }
// console.log(doubleArr([1, 2, 3]));

/*---------- 3. LEXICAL SCOPE ----------*/

//Ex 1 ->
// function outer() {
//   let hero = 'Black Panther';

//   function inner() {
//     let cryForHelp = `${hero}, please save me!`;
//     console.log(cryForHelp);
//   }

//   inner();
// }

// Ex 2 ->
// function outer() {
//   let movie = 'Amadeus';

//   function inner() {
//     let movie = 'The Shinning';
//     console.log(movie.toUpperCase());
//   }

//   inner();
// }

//Ex 3 ->
// function outer() {
//   let movie = 'Amadeus';

//   function inner() {
// let movie = 'The Shinning';

//     function extraInner() {
//       console.log(movie.toUpperCase());
//     }
//     extraInner();
//   }

//   inner();
// }

/*---------- 4. FUNCTION EXPRESSIONS ----------*/

// Ex 1 ->
// const square = function (num) {
//   return num * num;
// };

// square(7); //49

//Ex 2 ->
// function add(x, y) {
//   return x + y;
// }

// const sum = function (x, y) {
//   return x + y;
// };

// console.dir(sum); // Inspect the function
// console.dir(add); // Inspect the function

/*---------- 5. HIGHER ORDER FUNCTIONS ----------*/

// function add(x, y) {
//   return x + y;
// }

// const subtract = function (x, y) {
//   return x - y;
// };

// function multiply(x, y) {
//   return x * y;
// }

// const divide = function (x, y) {
//   return x / y;
// };

// const operations = [add, subtract, multiply, divide]; // function store in an array

// operations[1]; // show the function

// console.log(operations[1](100, 4)); //96 -> subtract

// for (let func of operations) {
// function store dynamically
//   let result = func(30, 5);
//   console.log(result);
// } // will call all the function inside the array

// by adding a function to an object we are creating a method.
// const thing = {
//   doSomething: multiply,
// }; // function stored in an object

// console.log(thing.doSomething(4, 5));

/*---------- 6. FUNCTIONS AS ARGUMENTS ----------*/

//Ex 1->
// function callTwice(func) {
//   func();
//   func();
// }

// function laugh() {
//   console.log('HAHAHAHAHAHAHAHAHHA');
// }

// callTwice(laugh);

//Ex 2 ->
// function callThreeTimes(f) {
//   f();
//   f();
//   f();
// }

// function cry() {
//   console.log("BOO HOO I'M SO SAD!");
// }

// function rage() {
//   console.log('I HATE EVERYTHING');
// }

// function repeatNTimes(action, num) {
//   for (let i = 0; i < num; i++) {
//     action();
//   }
// } // I can use this function with the functions above

// console.log(repeatNTimes(cry, 20));

// function pickOnes(f1, f2) {
//   let rand = Math.random();
//   if (rand < 0.5) {
//     f1();
//   } else {
//     f2();
//   }
// }

/*---------- 7. FUNCTIONS AS ARGUMENTS ----------*/

// -> returning Functions

//Ex 1 ->
// function multiplyBy(num) {
//   return function (x) {
//     return x * num;
//   };
// }

// const triple = multiplyBy(3);
// const double = multiplyBy(2);
// const halve = multiplyBy(0.5);

// Ex 2 ->

// function makeBetweenFunc(x, y) {
//   return function (num) {
//     return num >= x && num <= y;
//   };
// }

// const isChild = makeBetweenFunc(0, 18);
// const isNineties = makeBetweenFunc(1990, 1999);
// const isNiceWeather = makeBetweenFunc(60, 79);

/*---------- 8. CALLBACKS ----------*/

//Ex 1->
// function grumpus() {
//   alert('GAHH GO AWAY');
// }

// setTimeout(grumpus, 4000);

//Ex 2->
// setTimeout(function () {
//   alert('WELCOME');
// }, 5000);

// const btn = document.querySelector('button');
// btn.addEventListener('click', grumpus);

// const btn = document.querySelector('button');
// btn.addEventListener('click', function () {
//   alert('WHY DID YOU CLICK ME');
// });

/*---------- 9. HOSTING ----------*/

// Ex 1 ->
// var animal = 'Tapir';
// console.log(animal);

// console.log(animal);

//Ex 2 -> variables declaration with let are not hoisted like var.

// const shrimp = 'Harlenin ajsas';
// console.log(shrimp);

// Ex 3 -> Functions declaration are hoisted

// function howl() {
//   console.log('AWOOOO');
// }
// howl();

// Ex 4 -> function declarations are  not hoisted - the variable is hoisted the function is not
// hool;
// var hool = function () {
//   console.log('HOOOO HOOOOO');
// };
