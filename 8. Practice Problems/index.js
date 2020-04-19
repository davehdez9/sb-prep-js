/*---------- PRACTICE PROBLEMS ----------*/

// ---------- 001. Fundamentals: AppendToString
// Write a function called appendToString, which accepts two strings.

// The function should return a new string which consists of the second string appended to the first string.

// My solution
// function appendToString(str1, str2) {
//   return str1.concat(str2);
// }

// Teacher Solution
// function appendToString(str1, str2) {
//   return str1 + str2;
// }

// appendToString("Hello", " World!"); // "Hello World!"
// appendToString("Foo", "bar"); // "Foobar"
// appendToString("bar", "Foo"); // "barFoo"
// appendToString("", "test"); // "test"
// appendToString("other test", ""); // "other test"

// ---------- 002. Fundamentals: prependToString

// Write a function called prependToString, which accepts two strings.

// The function should return a new string with the second string prepended to the first string.

// My solution
// function prependToString(str1, str2) {
//   return str2 + str1;
// }

// prependToString('awesome', 'very') // 'veryawesome'
// prependToString('world', 'hello ') // 'hello world'
// prependToString('nothing', '') // 'nothing'

// ---------- 003. Fundamentals: chartAt

// Write a function called charAt which accepts a string and an index (number) and returns the character at that index.

// The function should return an empty string if the number is greater than the length of the string.

// Do not use the built in charAt method - the tests will fail if you do!

// My solution
// function charAt(str, num) {
//   const char = '';

//   for (let i = 0; i < str.length; i++) {
//     if (num > str.length) {
//       return char;
//     } else {
//       return str[num];
//     }
//   }
// }

// Teacher Solution
// function chartAt(str, idx) {
//   //One line solution using a ternary operator (condensed if/else)
//   return idx < str.length ? str[idx] : '';
// }

// charAt('awesome', 2) // 'e'
// charAt('awesome', 12) // ''

// ---------- 004. Fundamentals: stringIncludes

// Write a function called stringIncludes, which accepts two strings: the first string is a word and the second string is a single character.

// The function should return true if the first string includes the character, otherwise it should return false.

// Do not use the built in String.includes() function!

//My Solution
// function stringIncludes(word, char) {
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === char) {
//       return true;
//     }
//   }
//   return false;
// }

// Teacher Solution
// function stringIncludes(str, char) {
//   // the ES2015 keyword 'let' is preferable for loop iterator variables
//   //  since it is scoped to that block
//   //   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       return true;
//     }
//   }
//   return false;
// }

// stringIncludes('awesome', 'e'); // true
// stringIncludes('awesome', 'z'); // false

// ---------- 005. Fundamentals: string indexOf

// Write a function called stringIndexOf, which accepts two strings: the first is a word and the second is a single character.

// The function should return the first index in the word at which the character exists or -1 if the character is not found.

// Do not use the built in String.indexOf() function!

// Examples:

// function stringIndexOf(str, char) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       return i;
//     }
//   }
//   return -1;
// }
// }

// stringIndexOf('awesome', 'e') // 2
// stringIndexOf('awesome', 'z') // -1

// ---------- 006. Fundamentals: string lastIndexOf

// Write a function called stringLastIndexOf, which accepts two strings: the first is a word and the second is a single character.

// The function should return the last index at which the character exists or -1 if the character is not found.

// Do not use the built in String.lastIndexOf() function!

// // My solution
// function stringLastIndexOf(word, char) {
//   for (let i = word.length - 1; i > 0; i--) {
//     if (word[i] === char) {
//       return i;
//     }
//   }
//   return -1;
// }

//Teacher SOlution
// function stringLastIndexOf(str, char) {
//   // the approach is the same as the last problem, except
//   //  the loop goes backwards
//   for (let i = str.length - 1; i >= 0; i--) {
//     if (str[i] === char) {
//       return i;
//     }
//   }
//   return -1;
// }

// stringLastIndexOf('awesome', 'e'); // 6
// stringLastIndexOf('awesome', 'z'); // -1

// ---------- 007. Fundamentals: repeat

// Write a function called repeat, which accepts a string and a number and returns a new string with the string repeated that number of times.

// Do not use the built in repeat method - the tests will fail if you do!

// Examples:

//My Solution
// function repeat(str, num) {
//   let newStr = '';
//   while (num > 0) {
//     newStr += str;
//     num--;
//   }
//   return newStr;
// }

// //Teacher Solution
// function repeat(str, num) {
//   var newStr = ''; // string we will build up

//   for (let i = 0; i < num; i++) {
//     // note that this creates a new string every iteration of the loop
//     //  because JavaScript strings are immutable
//     newStr += str;
//   }

//   return newStr;
// }

// repeat('Matt', 3) // 'MattMattMatt'
// repeat('Elie', 2) // 'ElieElie'
// repeat('Michael', 0) // ''

// ---------- 008. Fundamentals: removeFromString

// Write a function called removeFromString, which accepts a string, a starting index (number) and a number of characters to remove.

// The function should return a new string with the characters removed.

//My Solution
// function removeFromString(str, start, removeCount) {
//   debugger;
//   let newStr = '';
//   for (let i = 0; i < str.length; i++) {
//     if (i < start || i >= start + removeCount) {
//       newStr += str[i];
//     }
//   }
//   return newStr;
// }

// Model Solution
// function removeFromString(str, start, removeCount) {
//   let arr = str.split('');
//   arr.splice(start, removeCount);
//   return arr.join('');
// }

// Examples:

// removeFromString('Elie', 2, 2); // 'El'
// removeFromString('Elie', 0, 1) // 'lie'
// removeFromString('Rithm School', 0, 6) // 'School'
// removeFromString('Rithm School', 2, 4) // 'RiSchool'
// removeFromString('Rithm School', 6, 400) // 'Rithm '

// ---------- 009. Fundamentals: Includes

// Write a function called includes, which accepts an array and a number.

// The function should return true if the value exists in the array and false if it does not.

// Do not use the built in Array.includes() function!

// My Solution
// function includes(arr, num) {
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr.indexOf(num) > -1) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// Model Solution
// function includes(arr, val) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === val) {
//       return true;
//     }
//   }
//   return false;
// }

// Examples:

// includes([1, 2, 3, 4], 4); // true
// includes([1, 2, 3, 4], 14); // false
// includes([], 14); // false

// ---------- 010. Fundamentals: indexOf

// Write a function called indexOf, which accepts an array and a number.

// The function should return the first index at which the value exists or -1 if the value is not found.

// Do not use the built in Array.indexOf() function!

// function indexOf(arr, val) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === val) {
//       return i;
//     }
//   }
//   return -1;
// }

// Examples:

// var arr = [5, 10, 15, 20];
// indexOf(arr, 20); // 3

// var arr2 = [1, 2, 3, 4, 5];
// indexOf(arr2, 2); // 1

// var arr3 = [1, 2];
// indexOf(arr3, 10); // -1

// ---------- 011. Fundamentals: lastIndexOf

// Write a function called lastIndexOf, which accepts an array and a number.

// The function should return the last index at which the value exists, or -1 if the value is not found.

// Do not use the built in Array.lastIndexOf() function!

// // My solution
// function lastIndexOf(arr, num) {
//   for (let i = arr.length - 1; i > 0; i--) {
//     if (arr[i] === num) {
//       return i;
//     }
//   }
//   return -1;
// }

// Model Solution
// function lastIndexOf(arr, val) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] === val) {
//       return i;
//     }
//   }
//   return -1;
// }

// Examples:

// lastIndexOf([1, 2, 3, 4], 2); // 1
// lastIndexOf([1, 2, 3, 4, 2], 2); // 4
// lastIndexOf([1, 2, 3, 4], 22); // -1

// ---------- 012. Fundamentals: Push

// Write a function called push which accepts two parameters, an array and any value.

// The function should add the value to the end of the array and then return the new length of the array.

// Do not use the built in Array.push() function!

// function push(array, val) {
//   array[array.length] = val;
//   return array.length;
// }

// Examples:

// var arr = [1, 2, 3];
// push(arr, 10); // 4

// arr; // [1, 2, 3, 10]

// var secondArr = [5, 2, 1, 6];
// push(secondArr, 20); // 5

// secondArr; // [5, 2, 1, 6, 20]

// ---------- 013. Fundamentals: Pop

// Write a function called pop which accepts an array.

// The function should remove the last value in the array and return the value removed or undefined if the array is empty.

// Do not use the built in Array.pop() function!

// function pop(arr) {
//   if (arr.length === 0) {
//     return undefined;
//   }
//   let lastValue = arr[arr.length - 1];
//   arr = arr.splice(-1, 1);
//   return lastValue;
// }

// Teacher Example
// function pop(arr) {
//   if (arr.length === 0) {
//     return; // default function return value is undefined
//   }
//stored the last value
//   let finalVar = arr[arr.length - 1];
// decreasing the length will automatically shrink the array
//   arr.length = arr.length - 1;

//   return finalVar;
// }

// Examples:

// var arr = [1, 2, 3, 4];
// pop(arr); // 4
// arr; // [1, 2, 3]

// var emptyArr = [];
// pop(emptyArr); // undefined
// emptyArr.length; // 0

// ---------- 014. Fundamentals: unshift

// Write a function called unshift which accepts an array and a value and adds the value to the beginning of the array.

// This function should return the new length of the array.

// Do not use the built in Array.unshift() function!

// function unshift(arr, val) {
//add value beginning of the array
//   let newArray = [val, ...arr];
//   arr = arr.slice();

//   return newArray.length; //new length of the array
// }

// Solution
// function unshift(arr, val) {
//   debugger;
//   for (i = arr.length - 1; i >= 0; --i) {
//     arr[i + 1] = arr[i];
//   }
//   arr[0] = val;
//   return arr.length;
// }

//Model Solution
// function unshift(arr, val) {
//   debugger;
// starting from the end of the array,
//each item has to be moved one to account for the new element at the beginning
//   for (let i = arr.length; i >= 0; i--) {
//     arr[i] = arr[i - 1];
//   }
//   arr[0] = val;
//   return arr.length;
// }

// Examples:

// var arr = [1, 2, 3];
// unshift(arr, 0); // 4
// arr; // [0, 1, 2, 3]

// unshift([4, 5, 6], 10); // 4

// ---------- 015. Fundamentals: shift

// Write a function called shift which accepts an array and removes the first value in the array and then returns the value removed. It should return undefined if the array is empty.

// Do not use the built in shift function!

//My solution
function shift(arr) {
  // return undefined if the array is empty
  if (arr.length === 0) {
    return undefined;
  }
  let firstValue = arr[0];
  //remove first value in the array
  arr = arr.splice(0, 1);

  //return value removed
  return firstValue;
}

// Model Solution
function shift(arr) {
  if (arr.length === 0) {
    return;
  }
  let firstVal = arr[0];
  //Have to move up each element to account for missing first element
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr.length = arr.length - 1;
  return firstVal;
}

// Examples:

var arr = ['a', 'b', 'c'];
// shift(arr); // "a"
// arr; // ["b","c"]

// var emptyArr = [];
// shift(emptyArr); // undefined
// emptyArr.length; //

// ---------- 016. Fundamentals: reverse

// Write a function called reverse, which accepts an array and returns the same array with all of the values reversed. In other words, do not solve this by creating a new array.

// Note: returning the same array is called an in-place operation, since no additional space is used. https://en.wikipedia.org/wiki/In-place_algorithm

// Do not use the built in Array.reverse() function!

// function reverse(arr) {
//   for (var i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
//     let el = arr[i];
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = el;
//   }
//   return arr;
//   // return same array with all the values reversed
// }

// Model Solution
// /*
//  * swap each value in the array starting from the
//  *  beginning and going to the middle. Note the middle element
//  *  itself does not need to be swapped
//  */

// function reverse(arr) {
//   // debugger;
//   // midpoint is length / 2, floored to account for odd lengths
//   let middle = Math.floor(arr.length / 2);

//   for (let i = 0; i < middle; i++) {
//     let end = arr.length - 1;
//     //make a temporary variable to store a value closer to the beginning
//     let temp = arr[i];
//     // swap the value closer to the beginning with a value the same distance from the end
//     arr[i] = arr[end - i];
//     //swap the value closer to the end with the temporary variable
//     arr[end - i] = temp;
//   }
//   return arr;
// }

// Examples:

// reverse([5, 4, 3, 2, 1]); // [1, 2, 3, 4, 5]
// reverse([]); // []

// var arr = [1, 2, 3];
// reverse(arr); // [3, 2, 1]
// arr; // [3, 2, 1]

// ---------- 017. Fundamentals: max

// Write a function called max, which accepts an array and returns the highest value.

// Do not use the built-in Math.max() function!

// const max = (arr) => {
//   let highest = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > highest) {
//       highest = arr[i];
//     }
//   }
//   return highest;
// };

// model solution

// function max(arr) {
// we can use the first element as the default maximum
//   let maximum = arr[0];
// then if we encounter a larger element in the rest of the array, replace the value. Note we can start our loop at index 1
//   for (var i = 1; i < arr.length; i++) {
//     if (arr[i] > maximum) {
//       maximum = arr[i];
//     }
//   }
//   return maximum;
// }
// // Examples:

// max([5, 1, 4, 7, 1, 2]); // 7
// max([3, 4, 12, 1, 8]); // 12
// max([-1, 6, 3, 2.2, -10, -4]); // 6

// ---------- 018. Fundamentals: min

// Write a function called min, which accepts an array of numbers and returns the lowest value.

// Do note use the built-in Math.min() function!
// function min(arr) {
//   let minimum = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < minimum) {
//       minimum = arr[i];
//     }
//   }
//   return minimum;
//   // return the lowest value
// }

// // Examples:

// min([5, 1, 4, 7, 1, 2]); // 1
// min([-1, 6, 3, 2.2, -10, -4]); // -10

// ---------- 019. Fundamentals: slice

// Write a function called slice, which accepts an array, and two numbers.

// The function should return a new array with the elements starting at the index of the first number and going until the index of the second number.

// If a third parameter is not passed to the function, it should slice until the end of the array by default.

// If the third parameter is greater than the length of the array, it should slice until the end of the array.

// Do not use the built in Array.slice() function!

// My Solution
// function slice(arr, num1, num2) {
//   // debugger;
//   let newArr = [];

//   // check to see if num2 is greater than length of array, OR if num2 is undefined:
//   if (num2 > arr.length || num2 === undefined) {
//     // if true, loop through array, start loop at index of num1, end loop and last element of the array (when i < arr.length)
//     for (let i = num1; i < arr.length; i++) {
//       // push all elements in loop to newArr
//       newArr.push(arr[i]);
//     }

//     // check to see if num2 is less than length of array AND if num2 is not undefined
//   } else if (num2 < arr.length && num2 !== undefined) {
//     // if true, start loop at index of num1, end loop at index of num2
//     for (let i = num1; i < num2; i++) {
//       // push all elements in loop to newArr
//       newArr.push(arr[i]);
//     }
//   }

//   return newArr;
// }

// //Model Solution
// function slice(arr, start, end) {
//   let newArr = [];

//   if (end > arr.length || end === undefined) {
//     end = arr.length;
//   }

//   for (let i = start; i < end; i++) {
//     // push all elements in loop to newArr
//     newArr.push(arr[i]);
//   }

//   return newArr;
// }

// Examples: slice([1, 2, 3, 4, 5], 0, 2); // [1, 2]
// slice([1, 2, 3, 4, 5], 2, 4); // [3, 4]
// slice([1, 2, 3, 4, 5], 2); // [3, 4, 5]
// slice([1, 2, 3, 4, 5], 2, 10); // [3, 4, 5]

// ---------- 020. Fundamentals: SquareEvenNumbers
// Write a function called squareEvenNumbers which accepts an array and returns the sum of all of the even numbers in the array squared.

//My Solution
// function squareEvenNumbers(array) {
//   debugger;
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       sum += Math.pow(array[i], 2);
//     }
//   }

//   return sum;
// }

// // Model Solution
// function squareEvenNumbers(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sum += arr[i] ** 2;
//     }
//   }
//   return sum;
// }

// // Examples:

// squareEvenNumbers([1, 2, 3, 4, 5]); // 20
// squareEvenNumbers([1, 3, 5, 7]); // 0
// squareEvenNumbers([5, 6, 7]); // 36

// ---------- 021. Fundamentals: keys
// Write a function called keys, which accepts an object and returns an array of all of the keys in the object.

// Do not use the built in Object.keys() function!

//My Solution
// function keys(obj) {
//   return Object.getOwnPropertyNames(obj);
// }

// Model Solution
// function keys(obj) {
//   debugger;
//   let arr = [];
//   for (let key in obj) {
//     arr.push(key);
//   }
//   return arr;
// }

// // Examples:

// var obj = { a: 1, b: 2, c: 3 };
// keys(obj); // ["a", "b", "c"]

// var obj2 = { first: 'Matt', last: 'Lane' };
// keys(obj); // ["first", "last"]

// var obj3 = {};
// keys(obj); // []

// ---------- 022. Fundamentals: values

// Write a function called values, which accepts an object and returns an array of all of the values in the object.

// Do not use the built in Object.values() function!

//My Solution
// function values(obj) {
//   let array = [];
//   for (var o in obj) {
//     array.push(obj[o]);
//   }
//   return array;
// }

// // Model Solution
// function values(obj) {
//   let valuesArr = [];
//   for (let key in obj) {
//     valuesArr.push(obj[key]);
//   }
//   return valuesArr;
// }

// Examples: var obj = { a: 1, b: 2, c: 3 };
// values(obj); // [1,2,3]

// var obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// values(obj2); // ["Matt", "Lane", true]

// var obj3 = {};
// values(obj3); // []

// ---------- 023. Fundamentals: swapKeyAndValue

// Write a function called swapKeyAndValue, which accepts an object and a key.

// The function should return a new object with the given key and its value flipped, and all the other key/value pairs unchanged.

// Solution 1
// function swapKeyAndValue({ ...obj }, key) {
//   if (obj.hasOwnProperty(key)) {
//     const newKey = obj[key];
//     obj[newKey] = key;
//     delete obj[key];
//   }
//   return obj;
// }

// // Model Solution
// function swapKeyAndValue(obj, swapKey) {
//   debugger;
//   let newObj = {};

//   //Loop through old object
//   for (let key in obj) {
//     if (key === swapKey) {
//       // The one key to be swapped with its value
//       newObj[obj[key]] = key;
//     } else {
//       //The other keys and values just need to be copied over
//       newObj[key] = obj[key];
//     }
//   }
//   return newObj;
// }

// // Examples:

// var instructor = { name: 'Elie', job: 'Instructor' };

// swapKeyAndValue(instructor, 'name');
// // {Elie: 'name', job: "Instructor"}

// swapKeyAndValue(instructor, 'job');
// // {name: "Elie", Instructor: 'job'}

// ---------- 024. Fundamentals: entries

// Write a function called entries, which accepts an object and returns an array of arrays of key-value pairs.

// In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value.

// Do not use the built in Object.entries() function!

// //My Solution
// function entries(obj) {
//   let array = [];

//   for (let key in obj) {
//     array.push([key, obj[key]]);
//   }

//   return array;
// }

// //Model Solution
// function entries(obj) {
//   let container = [];
//   for (let key in obj) {
//     // push a sub-array of [key, obj] into the parent array
//     container.push([key, obj[key]]);
//   }
//   return container;
// }

// // Examples:

// var obj = { a: 1, b: 2, c: 3 };
// entries(obj);
// // [["a",1], ["b",2], ["c",3]]

// var obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// entries(obj2);
// // [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]

// var obj3 = {};
// entries(obj3); // []

// ---------- 025. Fundamentals: countValues
// Write a function called countValues which accepts an array and a number and returns the number of times that value appears in the array.

//My Solution
// function countValues(arr, num) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       count++;
//     }
//   }
//   return count;
// }

// // Model Solution
// function countValues(arr, val) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === val) {
//       count++;
//     }
//   }
//   return count;
// }

// Examples: countValues([4, 1, 4, 2, 3, 4, 4], 4); // 4
// countValues([4, 1, 4, 2, 3, 4, 4], 100); // 0
// countValues([], 1); // 0

// ---------- 026. Problem Solving: GeneratePairs

// Write a function generatePairs that accepts an integer and generates an array containing the pairs of integers [a, b]. The pairs should be sorted by increasing values of a then increasing values of b.

// function generatePairs(int) {
//   let array = [];
//   for (i = 0; i <= int; i++) {
//     for (j = i; j <= int; j++) {
//       array.push([i, j]);
//     }
//   }
//   return array;
// }

// //Solution Model
// function generatePairs(n) {
//   var result = [];
//   for (i = 0; i <= n; i++) {
//     for (j = i; j <= n; j++) {
//       result.push([i, j]);
//     }
//   }
//   return result;
// }

// // Examples: generatePairs(3); // [ [0, 0], [0, 1], [0, 2], [0, 3], [1, 1], [1, 2], [1, 3], [2, 2], [2, 3], [3, 3] ]
// // generatePairs(2); // [ [0, 0], [0, 1], [0, 2], [1, 1], [1, 2], [2, 2] ]
// generatePairs(1); // [ [0, 0], [0, 1], [1,1]]
// generatePairs(0); // [ [0, 0]]

// ---------- 027. Problem Solving 1 : multiples

// Implement a function called multiples that accepts two numbers: x and n.

// The function should return the first n multiples of the number x.

// Assume that x is a positive integer.

// function multiples(x, n) {
//   debugger;
//   const multip = [];
//   for (let i = 1; i <= n; i++) {
//     multip.push(x * i);
//   }
//   return multip;
// }

// //Model Solution

// Examples: multiples(3, 4); // [3, 6, 9, 12]
// multiples(2, 5); // [2, 4, 6, 8, 10]

// ---------- 028. Problem Solving 1 : pluck

// Write a function called pluck, which takes an array of objects and the name of a key.

// The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.

// function pluck(arrObj, keyName) {
//   // debugger;
//   const array = [];
//   for (var i = 0; i < arrObj.length; i++) {
//     array.push(arrObj[i][keyName]);
//   }

//   return array;
// }

// // Examples:

// pluck([{ name: 'Tim' }, { name: 'Matt' }, { name: 'Elie' }], 'name');
// // ["Tim", "Matt", "Elie"]

// pluck(
//   [
//     { name: 'Tim', isBoatOwner: true },
//     { name: 'Matt', isBoatOwner: false },
//     { name: 'Elie' },
//   ],
//   'isBoatOwner'
// );
// [true, false, undefined]

// ---------- 029. Problem Solving 1 : twoHighest

// Write a function called twoHighest that takes an array of numbers as its argument and returns the two highest numbers within the array.

// The returned value should be an array in the following format: [secondHighest, highest]

// The order of the numbers passed in could be any order.

// Do not use the build in sort() method - the tests will fail!

//My Solution
// function twoHighest(arr) {
//   let highest = 0;
//   let secondHighest = 0;

//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] >= highest) {
//       secondHighest = highest;
//       highest = arr[i];
//     } else if (arr[i] >= secondHighest && arr[i] < highest) {
//       secondHighest = arr[i];
//     }
//   }
//   return [secondHighest, highest];
// }

//Model Solution
/**
 * This approach takes 1 single sweep of the array with two pointers.
 *  The highest and secondHighest are initialized to negative Infinity
 *  so that any numbers in the array will be eligible. Then set the
 *  secondHighest first, and if it's greater than the highest, swap.
 */
// function twoHighest(nums) {
//   // initialize both to the lowest possible values
//   let highest = -Infinity;
//   let secondHighest = -Infinity;

//   for (let num of nums) {
//     // set secondHighest first
//     if (num > secondHighest) {
//       secondHighest = num;
//     }
//     // see if we need to set highest
//     if (secondHighest >= highest) {
//       // if so, swap
//       let tmp = highest;
//       highest = secondHighest;
//       secondHighest = tmp;
//     }
//   }

//   return [secondHighest, highest];
// }

// Examples: twoHighest([1, 2, 10, 8]); // [8, 10]
// twoHighest([6, 1, 9, 10, 4]); // [9,10]
// twoHighest([4, 25, 3, 20, 19, 5]); // [20,25]
// twoHighest([1, 2, 2]); // [2, 2];

// ---------- 030. Problem Solving 1 : minMaxKeyInObject
// Write a function called minMaxKeyInObject that accepts an object with numeric keys.*

// The function should return an array with the following format: [lowestKey, highestKey]
// function minMaxKeyInObject(obj) {
//   let arrayKey = Object.keys(obj);
//   return [Math.min(...arrayKey), Math.max(...arrayKey)];
// }

// //Model Solution
// /**
//  * Standard approach looping through object with two pointers
//  */
// function minMaxKeyInObject(obj) {
//   let minKey = Infinity;
//   let maxKey = -Infinity;

//   for (let key in obj) {
//     // convert key to number and compare
//     let keyNum = +key; // this is shorthand for Number(key)
//     if (keyNum < minKey) {
//       minKey = keyNum;
//     }
//     if (keyNum > maxKey) {
//       maxKey = keyNum;
//     }
//   }

//   return [minKey, maxKey];
// }

// /**
//  * Advanced approach. Declarative 1-liner using Object.keys
//  *  and Array spread operator (...)
//  */
// function minMaxKeyInObjectDeclarative(obj) {
//   return [Math.min(...Object.keys(obj)), Math.max(...Object.keys(obj))];
// }

// // Examples:

// minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });
// [1, 10]

// minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' });
// [1, 4]

// Remember all object keys are strings, even if they hold numeric values.

// ---------- 031. Problem Solving 1 : stringFromObject

// Write a function called stringFromObject that generates a string from an object's key/value pairs.

// The format should be "key = value, key = value".

// Each key/value pair should be separated by a comma and space except for the last pair.

// function stringFromObject(obj) {
//   debugger;
//   let result = '';
//   for (let key in obj) {
//     result += `${key} = ${obj[key]}, `;
//   }
//   return result.slice(0, -2);
// }

//Model Solution
/**
 * Loop thru keys building a string with ' = ' between
 *  key and value and ', ' between each entry,
 *  then slice off the comma and space at the end
 */
// function stringFromObject(obj) {
//   let finalStr = '';
//   for (let key in obj) {
//     finalStr += key + ' = ' + obj[key] + ', ';
//   }
//   return finalStr.slice(0, -2);
// }

/**
 * This is a very advanced approach that you might see in production code.
 *  Get entries of an object (an array of arrays with [key, value]), then
 *  turn it into an array of strings like ['key = value', 'key = value'],
 *  then finally join the array on comma + space
 */
// function stringFromObjectDeclarative(obj) {
//   return Object.entries(obj)
//     .map((pair) => pair.join(' = '))
//     .join(', ');
// }

// Examples:

// stringFromObject({ a: 1, b: '2' });
// // "a = 1, b = 2"

// stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false });
// // "name = Elie, job = Instructor, isCatOwner = false"

// stringFromObject({});

// ---------- 032. Problem Solving 1 : queryString
// A query string, is a way to send data in an HTTP request, you may see it in a URL starting with a question mark.

// Write a function called toQueryString, which accepts an object and returns a string with each key and value separated by a = and each pair separated by a &. If the value is an array, add another pair to the string with each value

//My Solution
// function toQueryString(obj) {
//   // debugger;
//   let str = [];
//   for (let key in obj) {
//     if (Array.isArray(obj[key]) === true) {
//       for (let i = 0; i < obj[key].length; i++) {
//         str.push(`${key}=${obj[key][i]}`);
//       }
//     } else {
//       str.push(`${key}=${obj[key]}`);
//     }
//   }
//   return str.join('&');
// }

//Model Solution
// function toQueryString(obj) {
//   // debugger;
//   var str = '';
//   for (let key in obj) {
//     if (Array.isArray(obj[key])) {
//       for (var i = 0; i < obj[key].length; i++) {
//         str += '&' + key + '=' + obj[key][i];
//       }
//     } else {
//       str += '&' + key + '=' + obj[key];
//     }
//   }
//   return str.slice(1);
// }

// // Examples:

// toQueryString({}); // ""
// toQueryString({ bar: [2, 3], foo: 1 }); // "bar=2&bar=3&foo=1"
// toQueryString({ name: 'Elie', nums: [1, 2, 3, 4] }); // "name=Elie&nums=1&nums=2&nums=3&nums=4"

// ---------- 033. Problem Solving 1 : countNumbers
// Write a function called countNumbers, which accepts an array of strings. The function should return a count of the number of strings in the array that can be successfully converted into a number. For example, the string "1" can be successfully converted to the number 1, but the string "hello" cannot be converted into a number.

//My Solution
// const isNum = (n) => !isNaN(parseInt(n));
// const countNumbers = (arr) => arr.filter(isNum).length;

//Model Solution
// function countNumbers(arr) {
//   // debugger;
//   let count = 0;
//   for (let val of arr) {
//     let valToNumber = parseInt(val);
//     let isValNan = isNaN(valToNumber);
//     if (isValNan === false) {
//       count++;
//     }
//   }
//   return count;
// }

//Another Option
// function countNumbers(arr) {
//   debugger;
//   //return an array of values that are not NaN when converted and calculate the length
//   return arr.filter((val) => !isNaN(parseInt(val))).length;
// }

// // Examples:

// countNumbers(['a', 'b', '3', 'awesome', '4']); // 2
// countNumbers(['32', '55', 'awesome', 'test', '100']); // 3
// countNumbers([]); // 0
// countNumbers(['4', '1', '0', 'NaN']); // 3
// countNumbers(['7', '12', 'a', '', '6', '8', ' ']); // 4

// ---------- 034. Problem Solving 1 : totalCaps
// Write a function called totalCaps, which accepts an array of strings and returns the total number of capitals in each of the strings. Do not convert the array into a string.

// function totalCaps(arr) {
//   let capCount = 0;

//   arr.forEach((word) => {
//     word.split('').forEach((char) => {
//       if (char === char.toUpperCase()) {
//         capCount += 1;
//       }
//     });
//   });
//   return capCount;
// }

//Model Solution 1
// function totalCaps(arr) {
//   // debugger;
//   var count = 0;
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//       if (arr[i].charCodeAt(j) > 64 && arr[i].charCodeAt(j) <= 90) {
//         count++;
//       }
//     }
//   }
//   return count;
// }

//Model Solution 2
// function countCaps(str) {
//   debugger;
//   const caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   let count = 0;
//   for (let char of str) {
//     if (caps.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

// function totalCaps(arr) {
//   debugger;
//   let finalCount = 0;
//   for (let str of arr) {
//     finalCount += countCaps(str);
//   }
//   return finalCount;
// }

// Examples:

// totalCaps(['AwesomE', 'ThIngs', 'hAppEning', 'HerE']); // 8
// totalCaps(['Elie', 'Matt', 'Tim']); // 3
// totalCaps(['hello', 'world']); // 0

// ---------- 035. Problem Solving 1 : rankingSystem

// Given an array of unique numbers, return a new array of rankings of the original array. For example, if your input array is [10, 5, 20], the output should be [2, 3, 1], since 10 is the second largest number, 5 is the third largest, and 20 is the largest.

// function rankings(arr) {
//   // add whatever parameters you deem necessary....good luck!
//   var sorted = arr.slice().sort(function (a, b) {
//     return b - a;
//   });
//   var ranks = arr.slice().map(function (v) {
//     return sorted.indexOf(v) + 1;
//   });
//   return ranks;
// }

//Model Solution
function rankings(arr) {
  // debugger;
  let rankingArr = [];
  for (let i = 0; i < arr.length; i++) {
    let rank = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        rank++;
      }
    }
    rankingArr.push(rank);
  }
  return rankingArr;
}

Examples: rankings([10, 5, 20]); // [2, 3, 1]
rankings([6, 8, 1, 12, 4, 3, 9]); // [4, 3, 7, 1, 5, 6, 2]
rankings([100]); // [1]
rankings([4, 2, 3, 1]); // [1, 3, 2, 4]

function generatePairs(num) {
  let result = [];
  let pair = [];
  // if param is 2, output is [0,0], [0,1], [0,2], [1,1], [1,2], [2,2]
  if (num === 0) {
    result = [[0, 0]];
  } else {
    for (let i = 0; i < num; i++) {
      pair.push(i);
      pair.push(i);
      result.push(pair);
      pair = [];

      pair.push(i);
      pair.push(i + 1);
      result.push(pair);
      pair = [];

      // pair.push(i + 1);
      // pair.push(i + 1);
      // result.push(pair);
      // pair = [];
    }
    pair.push(num);
    pair.push(num);
    result.push(pair);
  }

  console.log(result);
  console.log(pair);
}

// generatePairs(0);
generatePairs(2);
