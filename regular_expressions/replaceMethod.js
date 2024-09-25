// This is the built-in method
/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#description
 * 
 * String.prototype.replace()
Baseline Widely available
The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

Syntax
js
Copy to Clipboard
replace(pattern, replacement)
 */

const str = "My boy's name is Bon";
console.log(str.replace("boy", 'dog'));

const regex = /bon/i; // regular expression literal, the value inside the forward slashes is not changed. Better performance.
console.log(str.replace(regex, 'Bon1'));