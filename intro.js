"use strict"; // enable modern Javascript modifications

/* eslint-disable no-constant-condition */

/**********************************************************
 * Output to the terminal
 **********************************************************/

// JavaScript uses console.log() instead of Java's System.out.println()
console.log("Hello World");
console.log("I'm learning JavaScript!");
/**********************************************************
 * Variable declaration, assignment, and scope
 **********************************************************/

/**
 * variable declaration
 *  use the keyword "let"
 *  similar to a local variable in Java
 *  block scoped
 */
let x;

/**
 * variable assignment
 *  may be done after variable declaration or at same time
 */
x = 7;

/**
 * constants (immutable value)
 *  use the keyword "const"
 *  similar to the keyword final in Java
 *  may be initialized at the same time as declaration or later
 */
const HOSTNAME = "localhost";

/**
 * var keyword:
 *  older way to declaring variables
 *  similar to local variables defined at the top of a method in Java
 *  rarely used in modern Javascript
 */
var y = 11;

/**********************************************************
 * Primitive Types
 **********************************************************/

/**
 * Number
 *  represents both integer and floating-point values
 *  similar to a double in Java
 */
let a = 7;
a = 7.351235;
console.log(typeof a);

/**
 * String
 *  a primitive type in Javascript
 *  literals are enclosed in single or double quotes
 *  backticks enable template strings
 *  similar to Java's String class
 */
a = "Hello"; // notice that we can dynamically change the type of a variable
console.log(typeof a);
let b = `${3 + 4} World!`; // variable embedding
console.log(b);

/**
 * Boolean
 *  similar to Java's boolean type
 */
a = true;
console.log(typeof a);

/**
 * null
 *  a primitive type with only one value: null
 *  represent nothing, empty, or unknown
 *  no like a reference to a non-existent object like in Java
 */
a = null;
console.log(typeof a); // returns object (old bug in JavaScript)

/**
 * undefined
 *  a primitive type with only one value: undefined
 *  the value of a variable that has not been explicitly assigned a value
 *  similar to null being assigned to an instance variable in Java
 */
let c;
console.log(c);
console.log(typeof c);

/**********************************************************
 * Conditionals and Boolean Expressions
 **********************************************************/

/**
 * all value have an implicit boolean value due to JavaScripts's
 *  type coercion
 */
if (1 && "Hello") {
  console.log("1 and Hello are True");
}

if (0 || "" || null || undefined) {
  // 0, empty string, null, and undefined are not true
} else {
  console.log("0, empty  string, null and undefined are false");
}

/**
 * variables of different types are converted to numbers for comparison
 */
if ("34" == 34) {
  console.log("'34' is converted to 34 and then compared to 34");
}

if (3 != true) {
  console.log("true is converted to 1 and then compared to 3");
}
