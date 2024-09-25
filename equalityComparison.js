/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#a_model_for_understanding_equality_comparisons
 * Loose Equality
 * 
 * 
 */

// let a = "1";
// let b = 1;

// // == — loose equality (double equals)
// console.log("Loose Equality: ");
// console.log(a == b); // true

// /**
//  * Double equals (==) will perform a type conversion when comparing two things, and will handle NaN, -0, and +0 specially to conform to IEEE 754 (so NaN != NaN, and -0 == +0);
//  */
// console.log("NaN: ")
// console.log(NaN == NaN);
// console.log("NaN is not equal to NaN: " + (NaN !== NaN));                       


// // === — strict equality (triple equals)
// console.log("Strict Equality: ");
// console.log(a === b);

let c = {name: "Dat"};
let d = {name: "Dat"}; // two independent objects

console.log( c == d ); // false

var myObject = {
    testProperty: 'testValue',
        deepObj: {
            deepTestProperty: 'deepTestValue'
        }
    }
    var anotherObject = {
        testProperty: 'testValue',
        deepObj: {
            deepTestProperty: 'deepTestValue'
        }
    }
    var myOtherReference = myObject;
    
console.log(myObject == anotherObject); // false - shallow equality check, They do not recursively compare the structure and values of objects. Instead, they check if the two operands refer to the same object in memory.


/**
 * To get a similar result in Node.js as you're seeing in Postman, you would need to use a deep equality comparison. Here are a couple of ways to do this:
 */

// Using util.isDeepStrictEqual
const util = require('util');
console.log("Using util.isDeepStrictEqual: " + (util.isDeepStrictEqual(myObject, anotherObject)));
