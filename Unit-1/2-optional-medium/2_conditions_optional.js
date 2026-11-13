/**
 * Level - Normal:
 * Task - 1
 * You have 2 numbers ("num1" and "num2") and an "operator".
 * "operator" equals "add" right now, but it can be - "add" or "subtract" or "multiply" or "divide".
 *
 * Implement the logic so that the code
 * does appropriate mathematical operation for "num1" and "num2" based on "operator" param.
 * e.g. "add" - "num1 + num2"; "divide" - "num1 / num2"
 * Assign result to task1 variable
 *
 * Implement the logic using "switch-case"
 * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
 */

let task1;
const num1 = 3;
const num2 = 7;
const operator = 'add';

switch (operator) {
  case "add":
    task1 = num1 + num2;
    break;
  case "subtract":
    task1 = num1 - num2;
    break;
  case "multiply":
    task1 = num1 * num2;
    break;
  case "divide":
    task1 = num1 / num2;
    break;
}


/**
 * Level - Normal
 * Task - 2
 * Implement the condition for productPrice variable:
 * if productPrice is greater than or equal to 1000 - discount should be equal 0.3
 * if productPrice is smaller than 1000 and greater than 0 - discount should be equal 0.2
 * if productPrice is less than 0 - discount should be equal null
 * otherwise - discount should be equal undefined
 * assign the discount to task2 variable
 * NOTE: this task is just for a learning purposes, it's better not to mess the types which a variable can have
 */

const productPrice = 49;
let discount;
let task2;

if (productPrice >= 1000) {
  discount = 0.3
} else if (productPrice < 1000 && productPrice > 0) {
  discount = 0.2;
} else if (productPrice < 0) {
  discount = null;
} else {
  discount = undefined;
}
task2 = discount;

/**
 * Level - Normal
 * Task - 3
 * Write the logic that will calculate the amount of discount considering the 'totalPrice' amount
 * Rules are the following:
 * | Total Price       | Discount in %
 * | from 0    to  350 |   0%
 * | from 351  to 1350 |  15%
 * | from 1351 to 2700 |  30%
 * | from 2701 to 6500 |  45%
 * assign the result to the 'task3' variable
 */

const totalPrice = 420;
let task3;

if (totalPrice >= 2701 && totalPrice <= 6500) {
  task3 = totalPrice * 0.45;
} else if (totalPrice >= 1351 && totalPrice <= 2700) {
  task3 = totalPrice * 0.30;
} else if (totalPrice >= 351 && totalPrice <= 1350) {
  task3 = totalPrice * 0.15;
} else if (totalPrice >= 0 && totalPrice <= 350) {
  task3 = 0;
}

/**
 * Level - Normal
 * Task - 4
 * Implement the condition for x1 variable using if statement without else:
 * if x1 is greater than 100 - task4 variable should be equal "Greater than 100"
 * if x1 is smaller or equal 100 - task4 variable 1 should be equal "Less than or equal 100"
 * NB: Your code should not contain `else` statement
 */

const x1 = 87;
let task4;

if (x1 > 100) {
  task4 = 'Greater than 100';
}

if (x1 <= 100) {
  task4 = 'Less than or equal 100';
}

/**
 * Level - Normal
 * Task - 5
 * Modify the code below to make task5 equal
 * true if both numbers are greater than 5, or if both numbers are less than or equal to 5
 * NB: Use combination of logical operators to do the task
 * Some dummy code to show the idea: task5 = (a > b || b < 10) && true;
 */

const a = 10;
const b = 4;
let task5;

task5 = (a > 5 && b > 5) || (a <= 5 && b <= 5);

module.exports = {
  num1,
  num2,
  operator,
  task1,
  productPrice,
  discount,
  task2,
  totalPrice,
  task3,
  x1,
  task4,
  a,
  b,
  task5,
};
