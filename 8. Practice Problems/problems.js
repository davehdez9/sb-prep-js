/*001 - Fundamentals: appendToString
Write a function called appendToString, which accepts two strings. 

The function should return a new string which consists of the second string appended to the first string.

Examples:

appendToString("Hello", " World!"); // "Hello World!"
appendToString("Foo", "bar"); // "Foobar"
appendToString("bar", "Foo"); // "barFoo"
appendToString("", "test"); // "test"
appendToString("other test", ""); // "other test"
*/

function appendToString(str1, str2) {
  let append = str1 + str2;
  return append;
}

// Model Solution:
// function appendToString(str1, str2){
//   return str1.concat(str2);
// }

/*002 - Fundamentals: prependToString
Write a function called prependToString, which accepts two strings.

The function should return a new string with the second string prepended to the first string.

Examples:

prependToString('awesome', 'very') // 'veryawesome'
prependToString('world', 'hello ') // 'hello world'
prependToString('nothing', '') // 'nothing'
*/

function prependToString(str1, str2) {
  let prepend = str2 + str1;
  return prepend;
}

/* 003 - Fundamentals: charAt
Write a function called charAt which accepts a string and an index (number) and returns the character at that index. 

The function should return an empty string if the number is greater than the length of the string.

Do not use the built in charAt method - the tests will fail if you do! 

Examples:

charAt('awesome', 2) // 'e'
charAt('awesome', 12) // ''
*/

function charAt(str, idx) {
  // if idx > str. length - return an empty string
  if (idx > str.length) {
    return '';
  }

  for (let i = 0; i < str.length; i++) {
    let value = str[i];
    // console.log(value);
    if (i === idx) {
      return value;
    }
  }
}

/*004 - Fundamentals: stringIncludes
Write a function called stringIncludes, which accepts two strings: the first string is a word and the second string is a single character. 

The function should return true if the first string includes the character, otherwise it should return false.

Do not use the built in String.includes() function!

Examples:

stringIncludes('awesome', 'e'); // true
stringIncludes('awesome', 'z'); // false
*/

function stringIncludes(word, char) {
  for (let i = 0; i < word.length; i++) {
    let value = word[i];
    //if the first string includes the character = return true
    if (value === char) {
      return true;
    }
  }
  // Otherwise = return false
  return false;
}

/*005 - Fundamentals: stringIndexOf
Write a function called stringIndexOf, which accepts two strings: the first is a word and the second is a single character.

The function should return the first index in the word at which the character exists or -1 if the character is not found.

Do not use the built in String.indexOf() function!

Examples:

stringIndexOf('awesome', 'e') // 2
stringIndexOf('awesome', 'z') // -1
*/

function stringIndexOf(word, char) {
  for (let i = 0; i < word.length; i++) {
    let value = word[i];
    // return the first index in the word at which the character exists
    if (value === char) {
      return i;
    }
  }
  //-1 if the character is not found.
  return -1;
}

/* 006 - Fundamentals: stringLastIndexOf
Write a function called stringLastIndexOf, which accepts two strings: the first is a word and the second is a single character.

The function should return the last index at which the character exists or -1 if the character is not found.

Do not use the built in String.lastIndexOf() function!

Examples:

stringLastIndexOf('awesome', 'e'); // 6
stringLastIndexOf('awesome', 'z'); // -1
*/

function stringLastIndexOf(word, char) {
  for (let i = word.length - 1; i >= 0; i--) {
    let value = word[i];
    console.log(value);
    if (value === char) {
      return i;
    }
  }
  //return the last index at which the character exists
  //return -1 if the character is not found.
  return -1;
}

/*007 - Fundamentals: repeat (REVIEW)
Write a function called repeat, which accepts a string and a number and returns a new string with the string repeated that number of times.

Do not use the built in repeat method - the tests will fail if you do!

Examples:

repeat('Matt', 3) // 'MattMattMatt'
repeat('Elie', 2) // 'ElieElie'
repeat('Michael', 0) // ''
*/

function repeat(str, num) {
  let newStr = '';
  while (num > 0) {
    newStr += str;
    num--;
  }
  return newStr;
  // return new string with the string repeated that number of times
}

/* 008 - Fundamentals: removeFromString
Write a function called removeFromString, which accepts a string, a starting index (number) and a number of characters to remove. 

The function should return a new string with the characters removed. 

Examples:

removeFromString('Elie', 2, 2) // 'El'
removeFromString('Elie', 0, 1) // 'lie'
removeFromString('Rithm School', 0, 6) // 'School'
removeFromString('Rithm School', 2, 4) // 'RiSchool'
removeFromString('Rithm School', 6, 400) // 'Rithm '
*/

function removeFromString(str, starIdx, charRem) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    let value = str[i];
    console.log(value);
    if (i < starIdx || i >= starIdx + charRem) {
      newStr += value;
    }
  }
  return newStr;
  //return a new string with the characters removed.
}

/* 009 - Fundamentals: includes
Write a function called includes, which accepts an array and a number. 

The function should return true if the value exists in the array and false if it does not. 

Do not use the built in Array.includes() function!

Examples:

includes([1, 2, 3, 4], 4) // true
includes([1, 2, 3, 4], 14) // false
includes([], 14) // false
*/

function includes(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (value === num) {
      // return true if the value exists in the array
      return true;
    }
  }
  // return false if it does not.
  return false;
}

/* 010 - Fundamentals: indexOf
Write a function called indexOf, which accepts an array and a number. 

The function should return the first index at which the value exists or -1 if the value is not found.

Do not use the built in Array.indexOf() function!

Examples:

var arr = [5, 10, 15, 20];
indexOf(arr, 20); // 3

var arr2 = [1, 2, 3, 4, 5];
indexOf(arr2, 2); // 1

var arr3 = [1, 2];
indexOf(arr3, 10); // -1
*/

function indexOf(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (value === num) {
      // return the first index at which the value exists
      return i;
    }
  }
  // return -1 if the value is not found.
  return -1;
}

/* 011 - Fundamentals: lastIndexOf
Write a function called lastIndexOf, which accepts an array and a number.

The function should return the last index at which the value exists, or -1 if the value is not found.

Do not use the built in Array.lastIndexOf() function!

Examples:

lastIndexOf([1, 2, 3, 4], 2); // 1
lastIndexOf([1, 2, 3, 4, 2], 2); // 4
lastIndexOf([1, 2, 3, 4], 22); // -1
*/

function lastIndexOf(arr, num) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let value = arr[i];
    if (value === num) {
      //return the last index at which the value exists
      return i;
    }
  }
  // return -1 if the value is not found.
  return -1;
}

/* 012 - Fundamentals: push
Write a function called push which accepts two parameters, an array and any value. 

The function should add the value to the end of the array and then return the new length of the array.

Do not use the built in Array.push() function!

Examples:

var arr = [1, 2, 3];
push(arr, 10); // 4

arr; // [1, 2, 3, 10]

var secondArr = [5, 2, 1, 6];
push(secondArr, 20); // 5

arr; // [5, 2, 1, 6, 20]
*/

function push(array, value) {
  //add the value to the end of the array
  array[array.length] = value;
  //return the new length of the array
  return array.length;
}

/* 013 - Fundamentals: pop
Write a function called pop which accepts an array.

The function should remove the last value in the array and return the value removed or undefined if the array is empty.

Do not use the built in Array.pop() function!

Examples:

var arr = [1, 2, 3, 4];
pop(arr); // 4
arr; // [1, 2, 3]

var emptyArr = [];
pop(emptyArr); // undefined
emptyArr.length; // 0
*/

function pop(array) {
  if (array.length === 0) {
    // return undefined if the array is empty.
    return undefined;
  }

  let lastValue = array[array.length - 1];
  //remove the last value in the array
  array.length = array.length - 1;

  //return the value removed ||
  return lastValue;
}

/* 014 - Fundamentals: unshift
Write a function called unshift which accepts an array and a value and adds the value to the beginning of the array.

This function should return the new length of the array.

Do not use the built in Array.unshift() function!

Examples:

var arr = [1, 2, 3];
unshift(arr, 0); // 4
arr; // [0, 1, 2, 3]

unshift([4, 5, 6], 10); // 4
*/

function unshift(arr, value) {
  for (let i = arr.length; i >= 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = value;
  // adds the value to the beginning of the array.
  //return the new length of the array.
  return arr.length;
}
