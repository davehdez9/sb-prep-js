/* --------------- 4. OBJECTS --------------------- */

// A. INTRO TO OBJECTS ---------------------------

// B. Object - Creating Object Literals
const fitBitData = {
  totalSteps: 182839,
  totalMiles: 1231.9,
  avgCalorieBurn: 123,
  workoutThisWeek: '5 of 7',
  avgGoodSleep: '2:13'
};

console.log(fitBitData.totalMiles); // Accessing Data using the dot syntax

let data = { a: 1 }; // If I only have 1 property, I do not need to put the coma after the value.

let otherData = { a: 1, b: 2 }; // I can add comas if i have  more properties into the object.

//C. Accessing Data Properties

const numbers = {
  100: 'one hundred',
  16: 'sixteen'
};
// console.log(number.100); //unexpected number if wwe put a number after the dot

const palette = {
  red: '#eb4d4b',
  yellow: '#f9ca24',
  blue: '#30336b'
};

console.log(palette.red);
console.log(palette['blue']);

let color = 'yellow';
console.log(palette[color]);

// D. UPDATING & ADDING PROPERTIES --------------------------------

const userReviews = {};

userReviews['queenBee49'] = 4.0; // add using square brackets
userReviews.mrSmith78 = 3.5; // add using dot syntax

userReviews['queenBee49'] += 2; // Updating the properties using square brackets
userReviews.mrSmith78++; // Updating the properties using dot syntax

// D. NESTED ARRAYS AND OBJECTS -------------------------------

const student = {
  firstName: 'David',
  lastName: 'Hernandez',
  strengths: ['Music', 'Art'],
  exams: {
    midterm: 92,
    final: 88
  }
};

const avg = (student.exams.midterm + student.exams.final) / 2; // Access into the object using dot syntax
student.strengths[1]; // 'Art'

const shoppingCart = [
  // 3 object into an array
  {
    product: 'Jenga Classic',
    price: 6.88,
    quantity: 1
  },
  {
    product: 'Echo Dot',
    price: 29.99,
    quantity: 3
  },
  {
    product: 'Fire Stick',
    price: 39.99,
    quantity: 2
  }
];

const game = {
  player1: {
    username: 'Blue',
    playingAs: 'X'
  },
  player2: {
    username: 'Red',
    playingAs: 'O'
  },
  board: [
    ['O', null, 'X'],
    ['X', 0, 'X'],
    [null, 0, 'X']
  ]
};

// E. OBJECTS & REFERENCE TYPES --------------------------

// const palette = {
//   red: '#eb4d4b',
//   yellow: '#f9ca24',
//   blue: '#30336b'
// };

const palette2 = palette;
palette2.green = '#ebf876';

// F. ARRAY & OBJECT EQUALITY

let nums = [1, 2, 3];
let mystery = [1, 2, 3];

// They look the same, nut refer to different arrays
nums === mystery; // false
nums == mystery; // false

//nums -> 456456456456
//mystery -> 564564564 compare their references not the sames values inside them.

// These two arrays reference the exact same array, so we get true.
let moreNums = nums; // true
moreNums.push(4);

const user = {
  username: 'Cherry90',
  email: 'cherry@email.com',
  notifications: []
};

if (!user.notifications.length) {
  console.log('No new notifications');
}
