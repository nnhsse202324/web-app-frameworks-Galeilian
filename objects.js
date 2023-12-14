"use strict"; // enable modern Javascript modifications

/**********************************************************
 * Objects
 **********************************************************/

/**
 * Object construction
 *  objects can be constructed in a couple of ways
 *  properties can be added to objects after construction
 */

// create an empty object with object constructor syntax
let journalEntry = new Object();

// create an empty object with object literal syntax
journalEntry = {};

// create an object with properties (key-value pairs) in JSON format
//  objects may contain methods
journalEntry = {
  date: "2023-11-10",
  habitOfMind: "Applying Past Knowledge to New Situations",
  content:
    "By comparing and contrasting JavaScript objects to Java objects, " +
    "I am strengthening my understanding",
  getLength() {
    return this.content.length; // this refers to the object, similar to Java
  },
};

console.log(journalEntry);
console.log(typeof journalEntry);
console.log(journalEntry.getLength());

/**
 * Accessing properties
 *  use the dot notation, like in Java
 *  non-existent properties return undefined
 */
console.log(journalEntry.date);
console.log(journalEntry.studentName); // undefined

// properties can be added to objects after construction
journalEntry.studentName = "Schmit";
console.log(journalEntry.studentName);

/**
 * Object references
 *  variables of type Object have a value that is a reference to the object, like in Java
 *  copying an object reference is not the same as copying the object, like in Java
 *  can use Object.assign and structuredClone to clone objects
 */
const newJournalEntry = journalEntry;
newJournalEntry.date = "2023-11-11";
console.log(journalEntry.date); // 2023-11-11
