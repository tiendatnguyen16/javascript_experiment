/**
 * You construct a regular expression in one of two ways:

Using a regular expression literal, which consists of a pattern enclosed between slashes, as follows:
js
Copy to Clipboard
const re = /ab+c/;
Regular expression literals provide compilation of the regular expression when the script is loaded. If the regular expression remains constant, using this can improve performance.
Or calling the constructor function of the RegExp object, as follows:
js
Copy to Clipboard
const re = new RegExp("ab+c");
Using the constructor function provides runtime compilation of the regular expression. Use the constructor function when you know the regular expression pattern will be changing, or you don't know the pattern and are getting it from another source, such as user input.
 */

// First way - Using a regular expression literal, which consists of a pattern enclosed between slashes:
// Regular expression literals provide compilation of the regular expression when the script is loaded. If the regular expression remains constant, using this can improve performance.
const str = "First way of creating a regular expression.";
const re = /First\s/;

/** The below content will be printed to the console log.
 * [
  'First ',
  index: 0,
  input: 'First way of creating a regular expression.',
  groups: undefined
]
 */
console.log(str.match(re));

// Second way - calling the constructor function of the RegExp object:
// Using the constructor function provides runtime compilation of the regular expression. Use the constructor function when you know the regular expression pattern will be changing, or you don't know the pattern and are getting it from another source, such as user input.
/*Syntax:

RegExp(pattern, flag)
new RegExp(pattern, flag)

The RegExp pattern can be passed in the constructor either in the literal notation or as a string.
*/
const regexSecondWay = new RegExp("First\\s"); // a string
const regexLiteralNotation = new RegExp(/First\s/); // Literal notation
/** The below content will be printed to the console log for both following lines.
 * [
  'First ',
  index: 0,
  input: 'First way of creating a regular expression.',
  groups: undefined
]
 */
console.log(str.match(regexSecondWay));
console.log(str.match(regexLiteralNotation));