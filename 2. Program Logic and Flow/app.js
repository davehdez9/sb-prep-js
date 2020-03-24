// PROGRAM LOGIC  & FLOW

// A. Running Code from a file

// alert('It is Working');

// console.log(3 + 4);
// console.error('Ohhh Noo!');
// console.log(3+4, "Hello", true);

// B. Comparison Operators ---------------------------------------------------

// >  Greater than
10 > 1;
// < less than
-10 < 0;
// >= Greater than or equal to
99 >= 4;
// <= less than or equal to
0.5 <= 0.5;

// ==  equality
5 == 5; //true
'b' == 'c'; //false

// === strict equality
5 === 5; //true
1 === 2; //false
2 === '2'; //false
false === 0; //false

// !== strict non equality
(10 !== //true
  // !=  not equal
  10) !=
  '10'; //false

// C. Conditional Statements -----------------------------------------------

// If Statement, else if, else - Nested Conditionals

//Example of if statement
if (1 !== 1) {
  // if
  console.log('It is true');
}

//Example of if statement
let num = 381;

if (num % 2 === 0) {
  console.log('ODD NUMBER');
}

//Example of if , else if & else statement
let rating = '2';

if (rating === 3) {
  // if
  console.log('You are a superstart');
} else if (rating === 2) {
  // else if
  console.log('Meet Expectations');
} else if (rating === 1) {
  // else if
  console.log('Need Improvement');
} else {
  // else
  console.log('Invalid Rating');
}

//Example if & else statement

let highScore = 1430;
let userScore = 100;

if (userScore >= highScore) {
  console.log(`Congrats, you have the new high score of ${userScore}`);
  highScore = userScore;
} else {
  console.log(
    `Good game, Your score of ${userScore} did not beat the high score of ${highScore}`
  );
}

// Example of Nested conditionals

let password = 'cdo gasdasda';

if (password.length >= 6) {
  if (password.indexOf(' ') !== -1) {
    console.log('Password cannot include spaces!');
  } else {
    console.log('Valid Password!');
  }
} else {
  console.log('Password too short');
}

// D. Truthy & Falsy values -----------------------------------------------

let mystery = '1';

if (mystery) {
  console.log('TRUTY');
} else {
  console.log('FALSY');
}

// let loggedInUser = null;
let loggedInUser = ' ';

if (loggedInUser) {
  console.log('You are logged In!'); // Truthy
} else {
  console.log('please log in'); // Falsy
}

// E. Logical Operators -----------------------------------------------

// AND (&&)
1 <= 4 && 'a' === 'a'; //true
9 > 10 && 9 >= 9; //false
'abc'.length === 3 && 1 + 1 === 4; //false

// Example 1 of &&
let password1 = 'chicken gal';

if (password1.length >= 8 && password1.indexOf(' ') === -1) {
  console.log('VALID PASSWORD');
} else {
  console.log('INVALID PASSWORD');
}

// Example 2 of &&
let num1 = 1;

if (num1 >= 1 && num1 <= 10) {
  console.log('Number is between 1 and 10');
} else {
  console.log('Please guess a number between 1 and 10');
}

//OR(||)
1 !== 1 || 10 === 10; //True
10 / 2 === 5 || null; // True
0 || undefined; // False

//Example 1 of ||
let age = 50;

if (age < 6 || age >= 65) {
  console.log('You get in for free');
} else {
  console.log('You must pay');
}

//Example 2 of ||
let color = 'blue';

if (color === 'purple' || color === 'lilac' || color === 'violet') {
  console.log('Great Choice');
}

// NOT (!)
!null; // true
!(0 === 0); // false
!(3 <= 4); // false

// example 1 of !
let loggedInUser1;

// if there is not a logged in user....
if (!loggedInUser1) {
  console.log('Get out of here');
}

// Example 2 of !
let flavor = 'Watermelon';

if (flavor !== 'grape' && flavor !== 'cherry') {
  console.log('We dont have that flavor');
}

if (!(flavor === 'grape' || flavor === 'cherry')) {
  console.log('we only have grape and fruit');
}

//F. Operator Precedence --!--&&--||-----------------------------------------

let x = 7;
x == 7 || (x === 3 && x > 10); // every symbol has their own precedence

// G. The Switch Statement ----------------------------------------------

let day = 1;

// if (day === 1) {
//   console.log('MONDAY');
// } else if (day === 2) {
//   console.log('TUESDAY');
// } else if (day === 3) {
//   console.log('WEDNESDAY');
// } else if (day === 4) {
//   console.log('THURSDAY');
// } else if (day === 5) {
//   console.log('FRIDAY');
// } else if (day === 6) {
//   console.log('SATURDAY');
// } else if (day === 7) {
//   console.log('SUNDAY');
// } else {
//   console.log('INVALID DAY');
// }

//Example with Switch the las code with If else statement
switch (day) {
  case 1:
    console.log('MONDAY');
    break;
  case 2:
    console.log('TUESDAY');
    break;
  case 3:
    console.log('WEDNESDAY');
    break;
  case 4:
    console.log('THURSDAY');
    break;
  case 5:
    console.log('FRIDAY');
    break;
  case 6:
    console.log('SATURDAY');
    break;
  case 7:
    console.log('SUNDAY');
    break;

  default:
    console.log('INVALID DAY');
}

// Example 2 of Switch

let emoji = 'heart';

switch (emoji) {
  case 'sad face':
  case 'happy face':
    console.log('yellow');
    break;
  case 'eggplant':
    console.log('purple');
    break;
  case 'heart':
  case 'lips':
    console.log('red');
    break;
}

// H. Ternary Operator --------------------------------------------------

let num3 = 2;

// if (num3 === 7) {
//   console.log('lucky');
// } else {
//   console.log('BAD');
// }

//Example of changing  the code above to Ternary Operator
num3 === 7 ? console.log('lucky') : console.log('BAD');

// Example 2 of ternary operator

let status = 'offline';

// let colory;
// if (status === 'offline') {
//   colory = 'red';
// } else {
//   colory = 'green';
// }

// console.log(colory);

let colory = status === 'offline' ? 'red' : 'green';

console.log(colory);
