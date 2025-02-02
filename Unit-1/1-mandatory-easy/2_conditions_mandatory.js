/**
 * Additional Reading:
 *
 * https://uk.javascript.info/comparison
 * https://uk.javascript.info/ifelse
 *   or https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
 *   and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 * https://uk.javascript.info/logical-operators
 */

/**
 * Level - Easy
 * Task - 1
 * Implement the condition for x1 variable:
 * if x1 is greater than 100 - task1 variable should be equal "Greater than 100"
 * if x1 is smaller or equal 100 - task1 variable 1 should be equal "Less than or equal 100"
 */

const x1 = 87;
let task1;

// enter your code here

/**
 * Level - Easy
 * Task - 2
 * Implement the condition for x2 variable:
 * if x2 is greater than or equal to 50 - task2 should be equal "Greater than or equal to 50"
 * if x2 is smaller than 50 and x2 is greater than -50 - task2 should be equal "In range between -50 to 50"
 * if x2 is less than or equal -50 - task2 should be equal "Less than -50"
 */

const x2 = 49;
let task2;

// enter your code here

/**
 * Level - Easy
 * Task - 3
 * Implement the logic
 * when y3 is less than 10 - task3 is equal to sum of x3 and y3
 * when y3 is greater or equal than 10 - task3 is equal multiplication of x3 and y3
 */

let task3;
const x3 = 3;
const y3 = 7;

// enter your code here

/**
 * Level - Easy
 * Task - 4
 * Implement the same logic as in Task 3
 * assign result to task4 variable, but use ternary operator instead of if-else
 * NOTE: x3 and y3 are used from Task 3
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */

let task4;

// enter your code here

/**
 * Level - Easy:
 * Task - 5
 * You have 2 numbers ("num1" and "num2") and an "operator".
 * "operator" equals "add" right now, but it can be - "add" or "subtract" or "multiply" or "divide".
 *
 * Implement the logic so that the code
 * does appropriate mathematical operation for "num1" and "num2" based on "operator" param.
 * e.g. "add" - "num1 + num2"; "divide" - "num1 / num2"
 * Assign result to task5 variable
 */

let task5;
const num1 = 3;
const num2 = 7;
const operator = 'add';

// enter your code here

/**
 * Level - Easy
 * Task - 6
 * Assign task6 a value which is opposite to someVar
 * NB: Use logical NOT to do the task
 */

const someVar = false;
let task6;

// modify and enter your code here

/**
 * Level - Easy
 * Task - 7
 * Modify the code below to make task7 equal true
 * NB: Use logical operator to do the task
 */

const someVar2 = true;
let task7;

// uncomment and modify code below
// task7 = someVar {remove this curly braces and enter correct code} someVar2;

module.exports = {
  x1,
  task1,
  x2,
  task2,
  x3,
  y3,
  task3,
  task4,
  num1,
  num2,
  operator,
  task5,
  someVar,
  task6,
  someVar2,
  task7,
};
