/**
 * Additional Reading:
 *
 * https://uk.javascript.info/comparison
 * https://uk.javascript.info/ifelse
 *      or https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
 *      and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
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
 * Implement the same logic as in Task:3
 * assign result to task4 variable
 * but use ternary operator instead of if-else
 * NOTE: x3 and y3 are used from Task3
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
 *
 * Level - Normal:
 * If you have finished "Level - Easy" try to implement the same logic using "switch-case"
 * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
 */

let task5;
const num1 = 3;
const num2 = 7;
const operator = 'add';

// enter your code here

/**
 * Level - Normal
 * Task - 6
 * Implement the condition for productPrice variable:
 * if productPrice is greater than or equal to 1000 - discount should be equal 0.3
 * if productPrice is smaller than 1000 and greater than 0 - discount should be equal 0.2
 * if productPrice is less than 0 - discount should be equal null
 * otherwise - discount should be equal undefined
 * assign the discount to task6 variable
 * NOTE: this task is just for a learning purposes,
 * it's better not to mess the types which a variable can have
 */

const productPrice = 49;
let discount;
let task6;

// enter your code here

/**
 * Level - Normal
 * Task - 7
 * Write the logic that will calculate the amount of discount
 * considering the 'totalPrice' amount
 * Rules are the following:
 * | Total Price       | Discount in %
 * | from 0    to  350 |   0%
 * | from 351  to 1350 |  15%
 * | from 1351 to 2700 |  30%
 * | from 2701 to 6500 |  45%
 * assign the result to the 'task7' variable
 */

const totalPrice = 420;

// enter your code here

let task7;

/**
 * Level - Normal
 * Task - 8
 * Implement the same condition for x1 variable (as in Task - 1), but use if statement without else
 * if x1 is greater than 100 - task8 variable should be equal "Greater than 100"
 * if x1 is smaller or equal 100 - task8 variable 1 should be equal "Less than or equal 100"
 * NB: Your code should not contain `else` statement
 */

// modify and enter your code here
let task8;

/**
 * Level - Easy
 * Task - 9
 * Assign task9 a value which is opposite to someVar
 * NB: Use logical NOT to do the task
 */

const someVar = false;
let task9;

// modify and enter your code here

/**
 * Level - Easy
 * Task - 10
 * Modify the code below to make task10 equal true
 * NB: Use logical operator to do the task
 */

const someVar2 = true;
let task10;

// uncomment and modify code below
// task10 = someVar {remove this curly braces and enter correct code} someVar2;

/**
 * Level - Normal
 * Task - 11
 * Modify the code below to make task11 equal
 * true if both numbers are greater than 5, or if both numbers are less than or equal to 5
 * NB: Use combination of logical operators to do the task
 * Some dummy code to show the idea:
 * task11 = (a > b || b < 10) && true;
 */

const a = 10;
const b = 4;
let task11;
// enter your code here

/**
 * Hardcore tasks from codewars.com:
 *
 * You have to google different methods available for Number object in JS
 *  -specifically how to round numbers in JS
 *
 * https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6
 * https://www.codewars.com/kata/582cb0224e56e068d800003c
 * https://www.codewars.com/kata/57a386117cb1f31890000039
 * https://www.codewars.com/kata/55a70521798b14d4750000a4
 */

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
  productPrice,
  discount,
  task6,
  totalPrice,
  task7,
  task8,
  someVar,
  task9,
  someVar2,
  task10,
  a,
  b,
  task11,
};
