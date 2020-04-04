/*----------------------- LOOPS------------------- */

/*---------- 2. FOR LOOPS  */

// Syntax :

// for (
// 	[initialExpression];
// 	[condition];
// 	[incrementExpression];
// )

//Ex 1 ->
// for (let i = 1; i <= 10; i++) {
//   console.log('Hello ', i);
// }

//Ex 2 ->
// for (let i = 1; i <= 10; i += 3) {
//   console.log('Hello ', i);
// }

//Ex 3 ->
// for (let num = 1; num <= 20; num++) {
//   console.log(`${num}x${num} = ${num * num}`);
// }

//Ex 4 ->
// for (let i = 50; i >= 0; i -= 10) {
//   console.log(i);
// }

//Ex 5 ->
// for (let i = 200; i >= 0; i -= 25) {
//   console.log(i);
// }

/*---------- 3. INFINITE LOOPS */

//Ex 1 ->
// DO NOT RUN THIS LOOP
// for (let i = 20; i >= 0; i++) {
//   console.log(i);
// } // BAD

//Ex 2 ->
// DO NOT RUN THIS!
// for(let i = 1; i != 20; i += 2) {
// 	console.log(i);
// }

/*---------- 4. FOR LOOPS AN ARRAYS */

//Ex 1 ->
// const animals = ['lions', 'tigers', 'bears'];

// for (let i = 0; i < animals.length; i++) {
//   console.log(i, animals[i]);
// }

//Ex 2 ->
// const examScore = [98, 77, 84, 91, 57, 66];

// for (let i = 0; i < examScore.length; i++) {
//   console.log(i, examScore[i]);
// }

// //Ex 3 ->
// const myStudents = [
//   {
//     firstName: 'Zeus',
//     grade: 86
//   },
//   {
//     firstName: 'Atemis',
//     grade: 97
//   },
//   {
//     firstName: 'Hera',
//     grade: 72
//   },
//   {
//     firstName: 'Apollo',
//     grade: 90
//   }
// ];

// for (let i = 0; i < myStudents.length; i++) {
//   let student = myStudents[i];
//   console.log(`${student.firstName} scored ${student.grade}`);
// }

// //Ex 4 ->
// let total = 0;
// for (let i = 0; i < myStudents.length; i++) {
//   let student = myStudents[i];
//   total += student.grade;
// }
// console.log(total / myStudents.length);

// //Ex 5 ->
// const word = 'stressed';
// let reversedWord = '';
// for (let i = word.length - 1; i >= 0; i--) {
//   reversedWord += word[i];
//   //   console.log(reversedWord);
// }
// console.log(reversedWord);

/*---------- 5. NESTED FOR LOOPS */

//EX 1 ->
// for (let i = 1; i <= 10; i++) {
//   console.log(`OUTER LOOP:`, i);
//   for (let j = 10; j >= 0; j -= 2) {
//     console.log(`	INNER LOOP`, j);
//   }
// }

//Ex 2->
// const gameBoard = [
//   [4, 32, 8, 4],
//   [64, 8, 32, 2],
//   [8, 32, 16, 4],
//   [2, 8, 4, 2]
// ];

// let totalScore = 0;
// for (let i = 0; i < gameBoard.length; i++) {
//   let row = gameBoard[i];
//   for (let j = 0; j < row.length; j++) {
//     totalScore += row[j];
//   }
// }

// console.log(totalScore);

/*---------- 6. INTRO TO WHILE LOOPS */

// Ex 1 ->
// let num = 0;
// while (num < 10) {
//   console.log(num);
//   num++;
// }

// Ex 2 ->
// for (let i = 0; i <= 5; i++) {
//   console.log(`For Loop`, i);
// }

// let j = 0;
// while (j <= 5) {
//   console.log(`While Loop`, j);
//   j++;
// }

/*---------- 7. MORE WHILE LOOPS */

// Ex 1 ->
// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);

// while (guess != target) {
//   console.log(`Target: ${target} Guess: ${guess}`);
//   guess = Math.floor(Math.random() * 10);
// }
// console.log(`Target: ${target} Guess: ${guess}`);
// console.log(`CONGRATS YOU WIN`);

/*---------- 8. BREAK KEYWORD */
// Ex 1 -> Not common use in for loops!
// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   if (i === 5) {
//     break;
//   }
// }

// Ex 2 ->
// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);

// while (true) {
//   if (target === guess) break;
//   console.log(`Target: ${target} Guess: ${guess}`);
//   guess = Math.floor(Math.random() * 10);
// }
// console.log(`Target: ${target} Guess: ${guess}`);
// console.log(`CONGRATS YOU WIN`);

/*---------- 9. FOR... OF INTRO */
// Syntax -->
// for (Variable of iterable) [
// 	statement
// ]

// Ex 1 ->
// let subreddits = ['soccer', 'popheads', 'cringe', 'books'];

// for (let i = 0; i < subreddits.length; i++) {
//   console.log(subreddits[i]);
// }

// Ex 2 ->
// for (let sub of subreddits) {
//   console.log(sub);
// }

// Ex 3 ->
// for (let char of 'cockadoodledoo') {
//   console.log(char.toUpperCase());
// }

/*---------- 10. COMPARING FOR & FOR ... OF */

// Ex 1 ->
// const magicSquare = [
//   [2, 7, 6],
//   [9, 5, 1],
//   [4, 3, 8]
// ];

// for (let i = 0; i < magicSquare.length; i++) {
//   let row = magicSquare[i];
//   let sum = 0;
//   for (let j = 0; j < row.length; j++) {
//     sum += row[j];
//   }
//   console.log(`${row} summed to ${sum}`);
// }

// Ex 2 ->
// for (let row of magicSquare) {
//   let sum = 0;
//   for (let num of row) {
//     sum += num;
//   }
//   console.log(`${row} summed to ${sum}`);
// }

//Ex 3 -> not good to make with for of...
// const words1 = ['mail', 'milk', 'bath', 'black'];
// const words2 = ['box', 'shake', 'tub', 'berry'];

// for (let i = 0; i < words1.length; i++) {
//   console.log(`${words1[i]}${words2[i]}`);
// }

/*---------- 11. FOR...OF WITH OBJECTS */

// const movieReview = {
//   Arrival: 9.5,
//   Alien: 7.5,
//   Amelie: 9.5,
//   'In Burges': 9.5,
//   Amadeus: 5.5,
//   'Kill Bill': 9.5,
//   'Little Miss Sunshine': 9.5,
//   Coraline: 1.5
// };

//Ex 1 -> not good use of for .. of
// for(let x for movieReview) {
// 	console.log(x);
// }

//Ex 2 ->
// for (let movie of Object.keys(movieReview)) {
//   console.log(movie, movieReview[movie]);
// }

// const ratings = Object.values(movieReview);
// let total = 0;
// for (let r of ratings) {
//   total += r;
// }
// let avg = total / ratings.length;
// console.log(avg);
