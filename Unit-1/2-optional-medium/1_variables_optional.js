/**
 * Additional Reading:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array
 * https://uk.javascript.info/operators
 */

/**
 * Level - Normal
 * Task - 1
 * Create variable named myArr1 and set its value to be an empty array using Array constructor
 * NOTE: use `new Array` syntax
 */

let myArr1 = new Array();

/**
 * Level - Normal
 * Task - 2
 * Create variable named myArr2 and set its value to be an array of length 3 and have empty elements
 * use Array constructor
 * NOTE: use `new Array` syntax
 */

let myArr2 = new Array(3);

/**
 * Level - Normal
 * Task - 3
 * Create variable named myArr3 and set its value to be an array of length 4 and have next elements:
 * first element = 10
 * second element = null
 * third element = "I'm the third one"
 * fours element = false
 * use Array constructor
 * NOTE: use `new Array` syntax
 */

let myArr3 = new Array(10, null, "I'm the third one", false);

module.exports = {
  myArr1,
  myArr2,
  myArr3
};
