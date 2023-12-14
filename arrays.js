"use strict"; // enable modern Javascript modifications

/**********************************************************
 * Arrays
 **********************************************************/

// create an empty array
let fruits = [];

// create an array with elements
fruits = ["apple", "banana", "cherry"];

// arrays are zero-indexed
console.log(fruits[1]); // banana

// elements can be added to arrays (unlike Java)
fruits[3] = "date";
console.log(fruits);

// use .length to get the number of elements
console.log(fruits.length); // 4

// elements can be of any type
const arr = [1, "two", true, { name: "Schmit" }, fruits];
console.log(arr);

fruits[6] = "fig";
console.log(fruits);
console.log(fruits[4]); // undefined
console.log(fruits.length); // 7

// arrays have methods like stacks and queues

// use .push and .pop to treat an array like a stack (fast)
fruits.pop(); // remove the last element
fruits.push("elderberry"); // add the element to end
console.log(fruits);

// we can treat an array like a queue
//  use .pop, to remove from the head of the queue,
//  and .unshift (slow), to add to the tail of the queue
fruits.unshift("apricot"); // add the element to the tail of the queue
fruits.pop(); // remove element from head of the queue
console.log(fruits);

// for ... of
for (const fruit of fruits) {
  console.log(fruit);
}

// map invokes the specified function for each element and returns the
//  resulting array.
//  very useful for creating an array of objects from an array of values
const fruitObjects = fruits.map((item) => ({
  name: item,
}));
console.log(fruitObjects);

const capFruits = fruits.map((item) => item.toUpperCase());
console.log(capFruits);

// or the other way around...
console.log(fruitObjects.map((item) => item.name));

/**
 * there are other array methods such as:
 *  splice, slice, and concat;
 *  indexOf, includes, find, and filter;
 *  sort, split, join, and reduce
 */

// warmup
const x = ["a", "b", "c"];
const y = x.map((item) => ({ letter: item }));
console.log(y);
