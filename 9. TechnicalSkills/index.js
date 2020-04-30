//1 calculateAverage

/* Write a function call calculateAverage which accepts an array of numbers. The function should return the average or mean of all numbers in the array. If the arrays if empty, return 0.*/

function calculateAverage(arr) {
  let total = 0;

  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  let avg = total / arr.length;
  return avg;
}

calculateAverage([1, 2, 3]); //2
calculateAverage([4, 10, 4, 10]); //7
calculateAverage([100]); //100
calculateAverage([]); //0

//2 vowelsOnly

/* Write a function called vowelsOnly which accepts a string str and return a new string consisting of just the vowels in str */

function vowelsOnly(str) {
  let arrStr = str.split('');
  //   console.log(arrStr);
  let currentVowels = '';

  for (let i = 0; i < arrStr.length; i++) {
    let currentLetter = arrStr[i];
    // console.log(currentLetter);
    if (isAVowel(currentLetter)) {
      currentVowels += currentLetter;
    }
  }

  function isAVowel(char) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return vowels.includes(char);
  }

  return currentVowels;
  //the function is expected to return string
  // the function accept a string called str as a parameter
}

vowelsOnly('hello world'); //'eoo'
vowelsOnly('happy birthday to you'); //'aiaoou'
vowelsOnly('SHOUT it out'); //'OUiou'
vowelsOnly('aieeeeeeeeou'); //'aieeeeeeeeou'
vowelsOnly('nvwlsnlycnsnnts'); //''

//3 isPangram

/* Write a function called isPangram which return true if every single lower-cased letter of the english alphabet is used. Every  character in the string will be lowercase so you do not need to worry about upper and lower case */

function isPangram(str) {
  // Define the alphabet
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let strLettersOnly = '';
  let lettersUsed = '';

  for (let i = 0; i < str.length; i++) {
    if (alphabet.includes(str[i])) {
      strLettersOnly = strLettersOnly.concat(str[i]);
    }
  }

  for (let j = 0; j < strLettersOnly.length; j++) {
    let currentLetter = strLettersOnly[j];

    if (lettersUsed.includes(currentLetter) !== true) {
      lettersUsed = lettersUsed.concat(currentLetter);
    }
  }

  console.log(lettersUsed);

  if (lettersUsed.length === alphabet.length) {
    return true;
  } else {
    return false;
  }
}

isPangram('sphinx of black quartz, judge my vow'); // true
isPangram('the quick brown for jumps over the lazy dog'); // true
isPangram('this does not have all letters'); // false
isPangram('this will not work as well'); // false

//4. LETTER COUNT

/*Write a function called strLetterCount which accpets a string and returns a new string with each character followed by the number of times it appears ins the string. The character should be returned in the same order as the string unique letter followed by the number of times it appears in the string */

function strLetterCount(word) {
  let finalString = '';
  let placeholder = '';

  let chars = word.split('');
  let lettersCount = {};

  for (let i = 0; i < chars.length; i++) {
    if (lettersCount[chars[i]] === undefined) {
      lettersCount[chars[i]] = 0;
    }
    lettersCount[chars[i]]++;
  }

  for (let i in lettersCount) {
    console.log(i + ' = ' + lettersCount[i]);
    placeholder = `${i}${lettersCount[i]}`;
    console.log(placeholder);
    finalString = finalString.concat(placeholder);
  }

  console.log(finalString);

  return finalString;
}

strLetterCount('taco'); //'t1a1c1o1'
strLetterCount('apple'); //'a1p2l1e1'
strLetterCount('coconut'); //'c2o2n1u1t1'
strLetterCount('woof'); //'w1o2f1'
