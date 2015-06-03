// 1. --------------------------------------------

// This is a named function, convert it
// to a variable containing an anonymous
// function

function doSomethingCool() {
  console.log("Something Cool!");
}

// Put your answer below -------------------------

var cool = function() {
  console.log("Something Cool!");
}

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 2. --------------------------------------------

// Here we are using setTimeout to call a function
// after 2 seconds. Refactor to use an anonymous
// function

function sayHi() {
  alert("Hello, World!");
}

setTimeout(sayHi, 2000);

// Put your answer below -------------------------

var sayHello = function() {
  alert("Hello, World!");
}

setTimeout(sayHello, 2000);

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 3. --------------------------------------------

// The code below will log the letter twice. What
// is the order that will be logged?

// [a]: x then y then z
// [b]: y then z
// [c]: z then y
// [d]: x then z

// Please explain your answer.

var letter = "x";

setTimeout(function(){
  letter = "y";
  console.log("The letter is", letter);
}, 1);

letter = "z";
console.log("The letter is", letter);

// Put your answer below -------------------------

Option c because the "x" is being overriden by the function "y" and "z". Var "x" doesnt get printed.
The setTimeout delays the printing of the "y". Since "z" doesnt have a setTimeout, it gets printed immediately.

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 4. --------------------------------------------

// The function below reverses a string. The body
// of the function is 5 lines of code. Refactor
// this function to do the same thing with 1 line

var reverseStr = function(str) {
  var arr;
  arr = str.split("");
  arr = arr.reverse();
  str = arr.join("");
  return str;
};

// Put your answer below -------------------------

var reverseStr = function(str) {
  return str.split("").reverse("").join("");
}

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 5. --------------------------------------------

// The function below takes the spanish word for
// the colors red, white, blue, green, and black
// and returns the hex code for that color.
// Refactor this function to use an object
// instead of an if/else statement.

var spanishColor = function(colorName) {
  if (colorName.toLowerCase() === "rojo") {
    return "#ff0000";
  }
  else if (colorName.toLowerCase() === "blanco") {
    return "#ffffff";
  }
  else if (colorName.toLowerCase() === "azul") {
    return "#0000ff";
  }
  else if (colorName.toLowerCase() === "verde") {
    return "#00ff00";
  }
  else if (colorName.toLowerCase() === "negro") {
    return "#000000";
  }
};

// Put your answer below -------------------------

function colorName(spanishColor) {

  var colors = {
    "rojo": "#ff0000",
    "blanco" : "#ffffff",
    "azul" : "#0000ff",
    "verde" : "#00ff00",
    "negro" : "#000000",
  };

  console.log("Your color is: " + colors[spanishColor]);
}

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 6. --------------------------------------------

// Below is a variable *declaration* and an
// *assignment* in a single line of code.
// Break it up so that the declaration and
// assignment are happening on 2 seperate lines.

var foo = "bar";

// Put your answer below -------------------------

var foo = foo();
function foo() { return "bar"};

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 7. --------------------------------------------

// The function `callTenTimes` takes an argument
// that is another function and will call that
// function 10 times. Refactor this into another
// function called `callNtimes` that allows you
// to specify a number of times to call the given
// function.

var callTenTimes = function(callback) {

  for(var i = 0; i < 10; i++) {
    console.log(callback);
  }
};

// Put your answer below -------------------------

var callTenTimes = function(callback, times) {

  for(var i = 0; i < times; i++) {
    console.log(callback);
  }
};


// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 8. --------------------------------------------

// Below is the beginning code for an awesome game
// but already suffers a vulnerability that allows
// the savvy user to open the console and adjust
// the score to whatever they want. Refactor the
// code to protect from this.

// HINT: "global scope"



var score = 0;

var increaseScore = function() {
  score++;
};

var decreaseScore = function() {
  score--;
};

// Put your answer below -------------------------

(function() {

var score = 0;

var increaseScore = function() {
  score++;
};

var decreaseScore = function() {
  score--;
};
});

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 9. --------------------------------------------

// The below function does not work. The variable
// twoPlusTwo gets set to `undefined`. Refactor
// the function to make it work.

var addNumbers = function(numberA, numberB) {
  console.log(numberA + numberB);
};

var twoPlusTwo = addNumbers(2,2);

// Put your answer below -------------------------

var addNumbers = function(numberA, numberB) {
  var twoPlusTwo = numberA + numberB;

  console.log(numberA + numberB);
};

addNumbers(2,2);

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 10. -------------------------------------------

// Below is a snippet of code taken from a racing
// game (not really!) It allows you to accelerate
// the speed by a given amount. The problem is if
// you call the function without specifying an
// amount, it inadvertently sets the speed to NaN
// First write a comment that explains why it was
// setting speed to NaN when no parameter is given
// Then refactor the function to have a default
// amount of 1 if no param is given.

//We learned for NaN that 0 and undefined will give you NaN.
//Not setting a parameter will result in undefined.

var speed = 0;

var accelerate = function(amount) {
  speed += amount;
};

// Put your answer below -------------------------

var speed = 0;

var accelerate = function(amount) {
  if (amount ==== 0) {
    speed += 1;
  } else {
    speed += amount;
  }
};

accelerate();

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// The function below allows you to call another
// function at a later time. It takes 2 params, an
// amount of miliseconds and a function. It will
// call the function that many miliseconds later.
// Refactor it so that is has a default timeout.

// This is more advanced than the default param on
// the accelerate function. This is because there
// is another parameter to consider.

// When setting the timeout, the function needs to
// work like this:

//     callLater(1000, function(){
//       ...
//     });

// When using the default timeout, the function
// needs to work like this:

//     callLater(function(){
//       ...
//     });

var callLater = function(timeout, callback) {
  setTimeout(callback, timeout);
};

// Put your answer below -------------------------

var callLater = function(callback, howLong) {
  if (howLong) {
    setTimeout(callback, howLong)
  } else {
    setTimeout(callback, 2000)
  }
}

// -----------------------------------------------




//////////////////////////////////////////////////

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(a, b){
    "use strict";
    //...
    var num = [].slice.call(arguments);
    var large = 0;
    for (var i = 0; i < num.length; i++){
      if (num[i] > large) {
        large = num[i];
      }
    }
      return large;
}

console.assert(max(21,3));


// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c){
    "use strict";
    //...
    var num = [].slice.call(arguments);
    var large = 0;
    for (var i = 0; i < num.length; i++){
      if (num[i] > large) {
        large = num[i];
      }
    }
      return large;
}

console.assert(maxOfThree(2,10,4));

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    //...
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
      return true;
    }
    return false;
}

console.assert(isVowel("e"));

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    //...
    var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r",
    "s", "t", "v", "w", "x", "y", "z"];
        var iS = false;

    for (var i = 0; i < consonants.length; i++) {
      if (phrase == consonants[i]){
        iS = true;
      }
    }
    return iS;
}

function translate(string, letter){
  var newString = "";
  for (var i = 0; i < string.length; i++) {
    if (rovarspraket(string[i])) {
      newString += string[i] + letter + string[i];
    } else {
      newString += string[i];
    }
  }
  return newString;
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(){
    "use strict";
    //...
    var args = [].slice.call(arguments);
    var num = 0;
    for (var i = 0; i < args.length; i++){
      num = num + args[i];
    }
    return num;
}

function multiply(){
    "use strict";
    //...
    var num = 0;
    for (var i = 0; i < args.length; i++){
      num = num + args[i];
    }
    return num/args.length;
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(str){
    "use strict";
    //...
      return str.split("").reverse("").join("");
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    //...
    var args = [].slice.call(arguments);
    var longestWord = args[0];
    for (var i = 0; i < args.length; i++) {
      if (args[i].length > longestWord.length) {
        longestWord = args[i];
      }
    }
    return longestWord;
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    //...
    var filter = new Array();
    var x = 0;
    for (var j = 0; j < words.length; j++) {
      if (words[j].length > i) {
        filter[x] = words[j];
        x++;
      }
    }
    return filter;
  }

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    //...
    var words = {};
    for (var i = 0; i < string.length; i++) {
      words[string[i]] = ++words[string[i]] || 1;
    }
      return words;
}
