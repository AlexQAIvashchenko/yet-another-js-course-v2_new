/**
 * Additional Reading:
 *
 * https://uk.javascript.info/variables
 * https://uk.javascript.info/types
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array
 * https://uk.javascript.info/operators
 * https://uk.javascript.info/type-conversions
 * https://habr.com/ru/company/ruvds/blog/347866/
 */

/**
 * Level - Easy
 * Task - 1
 * Create "var" variable named myNum and set its value equal to 74
 */

var myNum = 74;

/**
 * Level - Easy
 * Task - 2
 * Create "let" variable named myText and set its value equal to "Jack"
 */

let myText = 'Jack';

/**
 * Level - Easy
 * Task - 3
 * Create "const" variable named myBool and set its value equal to false
 */

const myBool = false;

// !!! Starting from this line I'd recommend to use `let` (or const if applicable) to initialize variables

/**
 * Level - Easy
 * Task - 4
 * Create variable named myNull and set its value equal to null
 */

let myNull = null;

/**
 * Level - Easy
 * Task - 5
 * Create variable named myUndefined and set its value equal to undefined
 */

let myUndefined = undefined;

/**
 * Level - Easy
 * Task - 6
 * Create variable named myArr and set its value to be an array of numbers from 2 to 7
 */

let myArr = [2, 3, 4, 5, 6, 7];

/**
 * Level - Easy
 * Task - 7
 * Create variable named myArr1 and set its value to be an empty array
 */

let myArr1 = [];

/**
 * Level - Easy
 * Task - 8
 * Create variable named myArr1_1 and set its value to be an empty array
 * make first array element to be equal to 'I am the first'
 */

let myArr1_1 = [];
myArr1_1[0] = 'I am the first';

/**
 * Level - Easy
 * Task - 9
 * Create variable named fourthElement and set its value to be myArr 4th element
 * NOTE: you should use myArr variable here
 */

let fourthElement = myArr[3];

/**
 * Level - Easy
 * Task - 10
 * Create variable named arrayOperations and set its value to be myArr 4th element minus myArr 3d element
 * NOTE: you should use myArr variable here
 */

let arrayOperations = myArr[3] - myArr[2];

/**
 * Level - Easy
 * Task - 11
 * Create variable named myNum2 and set its value equal myNum divided by 2
 * NOTE: you should use myNum variable here
 */

let myNum2 = myNum / 2;

/**
 * Level - Easy
 * Task - 12
 * Create variable named myText2 and set its value to be myText, then goes space and word is, then space and myNum2
 * NOTE: Use myText and myNum2 variables to solve it. Result should be something like "George is 21"
 */

let myText2 = myText + ' ' + 'is' + ' ' + myNum2;

/**
 * Level - Easy
 * Task - 13
 * Create variable named myBool2 and set its value to be equality comparison (not strict) of myNum and myNum2 variables
 */

let myBool2 = myNum == myNum2;

/**
 * Level - Easy
 * Task - 14
 * Create variable named myBool3 and set its value to be strict equality comparison of myNum2 variable and "37"
 * NOTE: string should be used
 */

let myBool3 = myNum2 === '37';

/**
 * Level - Easy
 * Task - 15
 * Create variable named myUndefined2 and set its value equal to undefined without "undefined" word usage
 */

let myUndefined2;

/**
 * Level - Easy
 * Task - 16
 * Create variable named myObj and set its value as object with key firstName and value "John"
 */

let myObj = { firstName: 'John' };

/**
 * Level - Easy
 * Task - 17
 * Set new key/property to myObj object named lastName with value "Dou"
 */

myObj.lastName = "Dou";

/**
 * Level - Easy
 * Task - 18
 * Set new key/property to myObj object named fullName with value of concatenation of firstName, space, and lastName
 * NOTE: you should use myObj in this task
 */

myObj.fullName = myObj.firstName + ' ' + myObj.lastName;

module.exports = {
  myNum,
  myText,
  myBool,
  myNull,
  myUndefined,
  myArr,
  myArr1,
  myArr1_1,
  fourthElement,
  arrayOperations,
  myUndefined2,
  myNum2,
  myText2,
  myBool2,
  myBool3,
  myObj,
};
