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

// ---------- 012. Fundamentals: Pop

// Write a function called pop which accepts an array.

// The function should remove the last value in the array and return the value removed or undefined if the array is empty.

// Do not use the built in Array.pop() function!

// function pop(arr) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     const newArray = arr.slice(0, -1);
//     console.log(`array: ${newArray}`);
//     const removeArray = newArray;
//     if (arr.length < 1 || arr === undefined) {
//       return undefined;
//     }
//     return arr[i];
//   }
// }

function pop(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let lastValue = arr[arr.length - 1];
  arr = arr.splice(-1, 1);
  // console.log('removed?: ', arr);
  // console.log(lastValue);
  return lastValue;
}

// Examples:

var arr = [1, 2, 3, 4];
pop(arr); // 4
arr; // [1, 2, 3]

var emptyArr = [];
pop(emptyArr); // undefined
emptyArr.length; // 0
