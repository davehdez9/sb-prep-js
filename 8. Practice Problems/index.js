/*---------- PRACTICE PROBLEMS ----------*/

// ---------- 001. Fundamentals: AppendToString
// Write a function called appendToString, which accepts two strings.

// The function should return a new string which consists of the second string appended to the first string.

// My solution
function appendToString(str1, str2) {
  return str1.concat(str2);
}

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
function prependToString(str1, str2) {
  return str2 + str1;
}

// prependToString('awesome', 'very') // 'veryawesome'
// prependToString('world', 'hello ') // 'hello world'
// prependToString('nothing', '') // 'nothing'

// ---------- 003. Fundamentals: chartAt

// Write a function called charAt which accepts a string and an index (number) and returns the character at that index.

// The function should return an empty string if the number is greater than the length of the string.

// Do not use the built in charAt method - the tests will fail if you do!

// My solution
function charAt(str, num) {
  const char = '';

  for (let i = 0; i < str.length; i++) {
    if (num > str.length) {
      return char;
    } else {
      return str[num];
    }
  }
}

// Teacher Solution
function chartAt(str, idx) {
  //One line solution using a ternary operator (condensed if/else)
  return idx < str.length ? str[idx] : '';
}

// charAt('awesome', 2) // 'e'
// charAt('awesome', 12) // ''

// ---------- 004. Fundamentals: stringIncludes

// Write a function called stringIncludes, which accepts two strings: the first string is a word and the second string is a single character.

// The function should return true if the first string includes the character, otherwise it should return false.

// Do not use the built in String.includes() function!

//My Solution
function stringIncludes(word, char) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) {
      return true;
    }
  }
  return false;
}

// Teacher Solution
function stringIncludes(str, char) {
  // the ES2015 keyword 'let' is preferable for loop iterator variables
  //  since it is scoped to that block
  //   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return true;
    }
  }
  return false;
}

// stringIncludes('awesome', 'e'); // true
// stringIncludes('awesome', 'z'); // false
