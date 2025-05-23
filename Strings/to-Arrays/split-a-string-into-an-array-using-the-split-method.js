/*
The split method splits a string into an array of strings. It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression. For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.

Here are two examples that split one string by spaces, then another by digits using a regular expression:
*/

var str = "Hello World";
console.log(str.split(" ")); // [ 'Hello', 'World' ]
console.log(str.split("")); // [ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd' ]

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
console.log(byDigits) // [ 'How', 'are', 'you', 'today' ]

/*
Since strings are immutable, the split method makes it easier to work with them.
 */


function splitify(str) {
  let strArray = str.split(/\-|\.| |,/);
  return strArray
}

console.log(splitify("Hello World,I-am code"));

console.log(splitify("This.is.a-sentence"));

console.log(splitify("Earth-is-our home"));
