/*---------- PRACTICE PROBLEMS ----------*/

//---------- 001. FUNDAMENTALS: appendToString
/*Write a function called appendToString, which accepts two strings. 

The function should return a new string which consists of the second string appended to the first string.
*/

//Ex 1
function appendToString(str1, str2) {
  let append = str1.concat(str2);
  return append;
}

//Ex 2
function appendToString(str1, str2) {
  return str1 + str2;
}

//---------- 002. FUNDAMENTALS: prependToString

/*Write a function called prependToString, which accepts two strings.

The function should return a new string with the second string prepended to the first string.
 */

function prependToString(str1, str2) {
  let prepend = str2 + str1;
  return prepend;
}

//---------- 003. FUNDAMENTALS: charAt

/*Write a function called charAt which accepts a string and an index (number) and returns the character at that index. 

The function should return an empty string if the number is greater than the length of the string.

Do not use the built in charAt method - the tests will fail if you do!  */

//Ex 1
function charAt(str, index) {
  let charAt = '';

  for (let i = 0; i < str.length; i++) {
    if (index > str.length) {
      return charAt;
    } else {
      return str[index];
    }
  }
}

//Ex 2
function charAt(str, idx) {
  return idx < str.length ? str[idx] : '';
}

//---------- 004. FUNDAMENTALS: stringIncludes

/*Write a function called stringIncludes, which accepts two strings: the first string is a word and the second string is a single character. 

The function should return true if the first string includes the character, otherwise it should return false.

Do not use the built in String.includes() function! */

function stringIncludes(word, singleChar) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === singleChar) {
      return true;
    }
  }
  return false;
}

//---------- 005. FUNDAMENTALS: stringIndexOf

/*Write a function called stringIndexOf, which accepts two strings: the first is a word and the second is a single character.

The function should return the first index in the word at which the character exists or -1 if the character is not found.

Do not use the built in String.indexOf() function! */

//Ex 1
function stringIndexOf(word, singleChar) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === singleChar) {
      return i;
    }
  }
  return -1;
}

//---------- 006. FUNDAMENTALS: stringLastIndexOf

/* Write a function called stringLastIndexOf, which accepts two strings: the first is a word and the second is a single character.

The function should return the last index at which the character exists or -1 if the character is not found.

Do not use the built in String.lastIndexOf() function!*/
function stringLastIndexOf(word, singleChar) {
  for (let i = word.length - 1; i >= 0; i--) {
    if (word[i] === singleChar) {
      return i;
    }
  }
  return -1;
}

//---------- 007. FUNDAMENTALS: repeat

/* Write a function called repeat, which accepts a string and a number and returns a new string with the string repeated that number of times.

Do not use the built in repeat method - the tests will fail if you do!*/

//Ex 1
function repeat(str, times) {
  let newStr = '';
  while (times > 0) {
    newStr += str;
    times--;
  }

  return newStr; // str repeat that number of times
}

//Ex 2
function repeat(str, num) {
  let newStr = '';
  for (let i = 0; i < num; i++) {
    newStr += str;
  }
  return newStr;
}

//---------- 008. FUNDAMENTALS: removeFromString

/* Write a function called removeFromString, which accepts a string, a starting index (number) and a number of characters to remove. 

The function should return a new string with the characters removed. */

//Ex1
function removeFromString(str, starIdx, remChar) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (i < starIdx || i >= starIdx + remChar) {
      newStr += str[i];
    }
  }
  return newStr; // char remove
}

//Ex2
function removeFromString(str, start, removeCount) {
  let arr = str.split('');
  arr.splice(start, removeCount);
  return arr.join('');
}

//---------- 009. FUNDAMENTALS: includes

/* Write a function called includes, which accepts an array and a number. 

The function should return true if the value exists in the array and false if it does not. 

Do not use the built in Array.includes() function!*/

//Ex1
function includes(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    }
  }

  return false;
}

//Ex2
function includes(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(num) > -1) {
      return true;
    } else {
      return false;
    }
  }
}

//---------- 010. FUNDAMENTALS: indexOf

/*Write a function called indexOf, which accepts an array and a number. 

The function should return the first index at which the value exists or -1 if the value is not found.

Do not use the built in Array.indexOf() function! */

function indexOf(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

//---------- 011. FUNDAMENTALS: lastIndexOf

/* Write a function called lastIndexOf, which accepts an array and a number.

The function should return the last index at which the value exists, or -1 if the value is not found.

Do not use the built in Array.lastIndexOf() function!*/

function lastIndexOf(arr, num) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

//---------- 012. FUNDAMENTALS: push

/* Write a function called push which accepts two parameters, an array and any value. 

The function should add the value to the end of the array and then return the new length of the array.

Do not use the built in Array.push() function!*/

function push(arr, val) {
  arr[arr.length] = val;
  return arr.length;
}

//---------- 013. FUNDAMENTALS: pop

/*Write a function called pop which accepts an array.

The function should remove the last value in the array and return the value removed or undefined if the array is empty.

Do not use the built in Array.pop() function! */

//Ex 1
function pop(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let lastValue = arr[arr.length - 1];
  arr = arr.splice(-1, 1);
  return lastValue;
}

//Ex2
function pop(arr) {
  if (arr.length === 0) {
    return; // default function return value is 'undefined'
  }
  // store the last value
  let finalVar = arr[arr.length - 1];
  // decreasing the length will automatically shrink the array
  arr.length = arr.length - 1;

  return finalVar;
}

//---------- 014. FUNDAMENTALS: unshift

/* Write a function called unshift which accepts an array and a value and adds the value to the beginning of the array.

This function should return the new length of the array.

Do not use the built in Array.unshift() function!*/

//Ex 1:
function unshift(arr, val) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i + 1] = arr[i];
    console.log(`hola: ${arr}`);
  }
  arr[0] = val;
  return arr.length;

  // add val to the beggining of the arr
  return; // new length
}

//Ex 2:
function unshift(arr, val) {
  for (let i = arr.length; i >= 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = val;
  return arr.length;
}

//---------- 015. FUNDAMENTALS: prependToString
//---------- 016. FUNDAMENTALS: prependToString
//---------- 017. FUNDAMENTALS: prependToString
//---------- 018. FUNDAMENTALS: prependToString
//---------- 019. FUNDAMENTALS: prependToString
//---------- 020. FUNDAMENTALS: prependToString
//---------- 021. FUNDAMENTALS: prependToString
//---------- 022. FUNDAMENTALS: prependToString
//---------- 023. FUNDAMENTALS: prependToString
//---------- 024. FUNDAMENTALS: prependToString
//---------- 025. FUNDAMENTALS: prependToString

//---------- 026. PROBLEM SOLVING: GeneratePairs

/*Write a function generatePairs that accepts an integer and generates an array containing the pairs of integers [a, b]. The pairs should be sorted by increasing values of a then increasing values of b.*/

function generatePairs(num) {
  let pairs = [];
  for (let i = 0; i <= num; i++) {
    for (let j = i; j <= num; j++) {
      pairs.push([i, j]);
    }
  }

  return pairs;
}
generatePairs(3);

//---------- 027. PROBLEM SOLVING: prependToString

/*Implement a function called multiples that accepts two numbers: x and n. 

The function should return the first n multiples of the number x. 

Assume that x is a positive integer.*/

function multiples(x, n) {
  let multiples = [];

  for (let i = 1; i <= n; i++) {
    multiples.push(x * i);
  }

  return multiples; //the first n multiples of the number x.
}

//---------- 028. PROBLEM SOLVING:: Pluck

/*Write a function called pluck, which takes an array of objects and the name of a key.

The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.
*/

function pluck(arrObj, keyName) {
  let newArr = [];
  for (let i = 0; i < arrObj.length; i++) {
    newArr.push(arrObj[i][keyName]);
  }
  return newArr;
}

//---------- 029. PROBLEM SOLVING:: twoHighest

/*Write a function called twoHighest that takes an array of numbers as its argument and returns the two highest numbers within the array. 

The returned value should be an array in the following format: [secondHighest, highest]

The order of the numbers passed in could be any order.

Do not use the build in sort() method - the tests will fail!*/

//Ex 1
function twoHighest(arr) {
  debugger;
  let secondHighest = 0;
  let highest = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= highest) {
      secondHighest = highest;
      highest = arr[i];
    } else if (arr[i] >= secondHighest && arr[i] < highest) {
      secondHighest = arr[i];
    }
  }

  return [secondHighest, highest];
}

//Ex 2
function twoHighest(nums) {
  // initialize both to the lowest possible values
  let highest = -Infinity;
  let secondHighest = -Infinity;

  for (let num of nums) {
    // set secondHighest first
    if (num > secondHighest) {
      secondHighest = num;
    }
    // see if we need to set highest
    if (secondHighest >= highest) {
      // if so, swap
      let tmp = highest;
      highest = secondHighest;
      secondHighest = tmp;
    }
  }

  return [secondHighest, highest];
}

//---------- 030. PROBLEM SOLVING:: minMaxKeyInObject

/*Write a function called minMaxKeyInObject that accepts an object with numeric keys.*

The function should return an array with the following format: [lowestKey, highestKey]*/

//Ex 1
function minMaxKeyInObject(obj) {
  let arrayKeys = Object.keys(obj);
  return [Math.min(...arrayKeys), Math.max(...arrayKeys)];
}

//Ex 2
function minMaxKeyInObject(obj) {
  let minKey = Infinity;
  let maxKey = -Infinity;

  for (let key in obj) {
    // convert key to number and compare
    let keyNum = +key; // this is shorthand for Number(key)
    console.log(keyNum);
    if (keyNum < minKey) {
      minKey = keyNum;
    }
    if (keyNum > maxKey) {
      maxKey = keyNum;
    }
  }

  return [minKey, maxKey];
}

//---------- 031. PROBLEM SOLVING:: stringFromObjects

/* Write a function called stringFromObject that generates a string from an object's key/value pairs.

The format should be "key = value, key = value". 

Each key/value pair should be separated by a comma and space except for the last pair.*/

//Ex 1
function stringFromObject(obj) {
  let result = '';
  for (let key in obj) {
    result += `${key} = ${obj[key]}, `;
  }
  return result.slice(0, -2);
}

// Ex 2 - Advanced
function stringFromObjectDeclarative(obj) {
  return Object.entries(obj)
    .map((pair) => pair.join(' = '))
    .join(', ');
}

//---------- 032. PROBLEM SOLVING:: queryString

/*A query string, is a way to send data in an HTTP request, you may see it in a URL starting with a question mark. Write a function called toQueryString, which accepts an object and returns a string with each key and value separated by a = and each pair separated by a &. If the value is an array, add another pair to the string with each value */

//Ex 1
function toQueryString(obj) {
  // debugger;
  let str = [];
  for (let key in obj) {
    if (Array.isArray(obj[key]) === true) {
      for (let i = 0; i < obj[key].length; i++) {
        str.push(`${key}=${obj[key][i]}`);
      }
    } else {
      str.push(`${key}=${obj[key]}`);
    }
  }
  return str.join('&');
}

//Ex 2
function toQueryString(obj) {
  var str = '';
  for (var key in obj) {
    if (Array.isArray(obj[key])) {
      for (var i = 0; i < obj[key].length; i++) {
        str += '&' + key + '=' + obj[key][i];
      }
    } else {
      str += '&' + key + '=' + obj[key];
    }
  }
  return str.slice(1);
}

//---------- 033. PROBLEM SOLVING:: countNumbers

/* Write a function called countNumbers, which accepts an array of strings. The function should return a count of the number of strings in the array that can be successfully converted into a number. For example, the string "1" can be successfully converted to the number 1, but the string "hello" cannot be converted into a number.
 */

//Ex 1
function countNumb(arr) {
  let count = 0;
  for (let val of arr) {
    let valToNumber = parseInt(val);
    let isValNaN = isNaN(valToNumber);
    if (isValNaN === false) {
      count++;
    }
  }
  return count;
}

// Ex 2
const isNum = (n) => !isNaN(parseInt(n));
const countNumber = (arr) => arr.filter(isNum).length;

//Ex 3
function countNumbe(arr) {
  // return an array of values that are not NaN when converted to a string
  // and calculate the length
  return arr.filter((val) => !isNaN(parseInt(val))).length;
}

//---------- 034. PROBLEM SOLVING:: totalCaps

/*Write a function called totalCaps, which accepts an array of strings and returns the total number of capitals in each of the strings. Do not convert the array into a string. */

// Ex 1
function totalCaps(arr) {
  let capCount = 0;

  arr.forEach((word) => {
    word.split('').forEach((char) => {
      if (char === char.toUpperCase()) {
        capCount += 1;
      }
    });
  });
  return capCount;
}

//Ex 2
function totalCaps(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i].charCodeAt(j) >= 65 && arr[i].charCodeAt(j) <= 90) {
        count++;
      }
    }
  }
  return count;
}

//Ex 3
function countCaps(str) {
  const caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let count = 0;
  for (let char of str) {
    if (caps.includes(char)) {
      count++;
    }
  }
  return count;
}

//Ex 4 ----
function totalCaps(arr) {
  let finalCount = 0;
  for (let str of arr) {
    finalCount += countCaps(str);
  }
  return finalCount;
}

//---------- 035. PROBLEM SOLVING:: rankingSystem

/*Given an array of unique numbers, return a new array of rankings of the original array. For example, if your input array is [10, 5, 20], the output should be [2, 3, 1], since 10 is the second largest number, 5 is the third largest, and 20 is the largest.
 */

//Ex 1
function rankings(arr) {
  let rankingsArr = [];
  for (let i = 0; i < arr.length; i++) {
    let rank = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) rank++;
    }
    rankingsArr.push(rank);
  }
  return rankingsArr;
}

rankings([10, 5, 20]);

// //Ex 2
// function rankings(arr) {
//   let sorted = arr.slice().sort(function (a, b) {
//     return b - a;
//   });
//   var ranks = arr.slice().map(function (v) {
//     return sorted.indexOf(v) + 1;
//   });
//   return ranks;
// }
