// 1. ARRAYS

// A. CREATING ARRAYS

let hobbies = []; // Empty Array
let season = ['Spring', 'Summer', 'Autumn', 'Winter']; // Array of Strings
let codeEmployees = [12, 23, 45, 56]; // Array of numbers
let stuff = [true, 78, 'dog', null]; // Mixed array

// new Array(1,2,3,4) - create new array in the console

// B. ARRAYS INDICES

let soccerTeams = ['Millonarios', 'Nacional', 'America', 'Santafe'];

console.log(soccerTeams.length); // 4 - Using the length.property to know the index number
console.log(soccerTeams[soccerTeams.length - 1]); // "Santafe" - Accessing the last index with -1

console.log(soccerTeams[0]); // "Millonarios"
console.log(soccerTeams[1]); // "Nacional"
console.log(soccerTeams[2]); // "America"
console.log(soccerTeams[3]); // "Santafe"

// C. MODIFYING ARRAYS

let menuPizzas = ['Marguerita', 'Marinara', 'Hawaian'];

menuPizzas[2] = 'Calzone'; // Update a Value
menuPizzas[3] = 'Caprichosa'; // Using index to Add value

menuPizzas[menuPizzas.length] = 'Massese'; // Using lenght.property to Add value to the end

/* ----------------ARRAY METHODS ------------------ */

// D. PUSH & POP

let metallicaSongs = [
  'Master of Puppets',
  'Orion',
  'Fuel',
  'Nothing else Mather'
];

metallicaSongs.push('Blackened'); // Add value to the end
metallicaSongs.pop(); // Remove Value to the end - "nothing else matters"

const nextSong = metallicaSongs.pop(); // return the last value that I popped - "Nothing else matters"- insert the value into a new variable

//E. SHIFT & UNSHIFT

let dishesToDo = ['big plate'];

dishesToDo.unshift('large plate'); //unshift method add values at the start of the array
dishesToDo.unshift('small plate');
dishesToDo.unshift('cereal bowl');
dishesToDo.unshift('mug');
dishesToDo.unshift('dirty spoon');
dishesToDo.unshift('fork', 'knife'); // add multiples values

//Remove value from the start
dishesToDo.shift();
dishesToDo.shift();

// F. CONCAT

let fruits = ['apples', 'bananas'];
let veggies = ['asparagus', 'potatoes'];
let meats = ['steak', 'chicken'];

console.log(fruits.concat(veggies)); // merge fruits with veggies
console.log(veggies.concat(fruits));

const allFood = fruits.concat(veggies, meats); // creating new variable to merge all three arrays.
console.log(allFood);

// G. INCLUDE & indexOf

//INCLUDE
let ingredients = [
  'water',
  'corn',
  'flour',
  'cheese',
  'brown sugar',
  'shrimp',
  'eel',
  'butter'
];

console.log(ingredients.includes('fish')); // include method look for a value into the array an return a boolean
console.log(ingredients.includes('corn'));

if (ingredients.includes('flour')) {
  console.log('I AM GLUTEN FREE, I CANNOT EAT THAT!');
}

//indexOf
console.log(ingredients.indexOf('butter')); // indexOf show the index of that value into the array
console.log(ingredients.indexOf('apples')); // if that value is not into the array, it will return -1

//H. REVERSE AND JOIN

//REVERSE

let letters = ['A', 'E', 'I', 'O', 'U'];

console.log(letters.reverse()); // reverse the entire array
console.log(letters); // after reverse the entire array we have a new array with the reverse values.

// JOIN

let otherLetters = ['A', 'P', 'R', 'I', 'L'];

console.log(otherLetters.join()); // reverse method created a string from an array
console.log(otherLetters.join(' ')); // I can add a string between
console.log(otherLetters.reverse().join('.'));

// I. SLICE

let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

let swimmers = animals.slice(0, 3); //copy portion of the arr with started point and end point
console.log(swimmers);

let mammals = animals.slice(2, 4); // The last index is not showing - just showing the previous one
console.log(mammals);

let reptiles = animals.slice(4); //with only one parameter, it'll show starting from that index to the end
console.log(reptiles);

let quadruped = animals.slice(-3); // can also begin from the end of the array using negative sign
console.log(quadruped);

console.log(animals.slice()); // can be use also to make a copy of the existing array with a new variable.

// J. SPLICE - (splice(startIDX, deleteCount, itemsToInsert);

//Inserting with Splice - at index 1, delete 0 and insert 'octopus'
console.log(animals.splice(1, 0, 'octopues'));
console.log(animals);

// Deleting with splice - at index 5, delete 2 items
console.log(animals.splice(5, 2));
console.log(animals);

//Replacing with splice - at index 3, delete 2 items and replace them with 'orca' and 'grizzly'
console.log(animals.splice(3, 2, 'orca', 'grizzly'));
console.log(animals);

// K. SORTING

let people = ['Mrs.Robinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne'];

console.log(people.sort()); // sort alphabetically
console.log(people);

/*--------------------------------------------------------------------------------- */

// K. INTRO REFERENCE TYPES
// Primitive Types are store as the actual value on a variable
//Array stored a references to where that array is store in a memory.

let fruit = 'orange';
let color = fruit; // color = 'orange

fruit = 'watermelon'; // change the value
color; // still orange

let nums = [5, 6, 7, 8];
let otherNums = nums;
nums.push(9);
otherNums;

// L. USING CONST WITH ARRAYS

const myEggs = ['brown', 'brown'];
myEggs.push('purple');
myEggs[0] = 'green';

// myEggs = ['blue', 'pink']; // cannot reassign the variable

const food = ['milk'];
food.push('chocolate');

// M. NESTED ARRAYS

const colors = [
  ['red', 'crimson'],
  ['orange', 'dark orange'],
  ['yellow', 'golden rod'],
  ['green', 'olive'],
  ['blue', 'navy blue'],
  ['purple', 'orchid']
];

colors[2]; // third array
color[2][0]; // third array and 1 value.

color[0][1] = 'violet'; // replace a value

//board

const board = [
  ['o', null, 'x'],
  [null, 'x', 'o'],
  ['x', 'o', null]
];
