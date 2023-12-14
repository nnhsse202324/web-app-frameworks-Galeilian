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
 * variable declaration:
 *  use the keyword "let"
 *  similar to a local variable in Java
 *  block scoped
 */
let x;

/**
 * variable assignment:
 *  may be done after variable declaration or at the same time
 */
x = 7;
console.log(x);
x = 11;
console.log(x);

/**
 * constants (immutable value):
 *  use the keyword "const"
 *  similar to the final keyword in Java
 *  may be initialized at the same time as declaration or later
 *  use all uppercase letters for constants assigned to literals
 *  use camelCase for constants assigned to expressions
 */
const HOSTNAME = "localhost";
console.log(HOSTNAME);

/**
 * var keyword:
 *  older way to declaring variables
 *  similar to local variables defined at the top of a method in Java
 *  rarely used in modern Javascript
 */
var y = 11;
console.log(y);

/**********************************************************
 * Primitive Types
 **********************************************************/

/**
 * Number
 *  represents both integer and floating-point values
 *  similar to a double in Java
 */
let a = 7;
a = 3.14;
console.log(typeof a);

/**
 * String
 *  a primitive type in JavaScript
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
 *  represents nothing, empty, or unknown
 *  not like a reference to a non-existent object like in Java
 */
a = null;
console.log(typeof a); // returns object ¯\_(ツ)_/¯ (old bug in JavaScript)

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
 * all values have an implicit boolean value due to JavaScript's
 *  type coercion
 */
if (1 && "Hello") {
  console.log("1 and Hello are true");
}

if (0 || "" || null || undefined) {
  // 0, empty string, null, and undefined are not true
} else {
  console.log("0, empty string, null, and undefined are false");
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

/**
 * the strict equality operator (===) does not perform type coercion;
 *  returns false if the types are different
 *  most similar to Java's == operator
 * recommended to use this operator instead of the equality operator (==)
 */
if ("34" === 34) {
  // not equal because they are different types
} else {
  console.log(
    "'34' is not strictly equal to 34 because they are different types"
  );

  /**
   * Recommendations regarding null and undefined:
   *  only use the strict equality and inequality operators (===, !==)
   * comparison and the equality operator will, most likely, return
   *  unexpected results
   */
  if (a === null) {
    console.log("a is null");
  }
  if (c === undefined) {
    console.log("c is undefined");
  }
}
