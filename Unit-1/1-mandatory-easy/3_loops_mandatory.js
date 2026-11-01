/**
 * Additional Reading:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 */

/**
 * Level - Easy
 * Task - 1
 * Implement algorithm which will calculate sum of numbers from 0 to 10 (included)
 * Use 3 different cycles: for | while | do..while
 * Please store the result in correspondent variables: task1For, task1while, task1Do
 */

let task1For = 0;
let task1while = 0;
let task1Do = 0;

// Task - 1-1: "for" algorithm
for (let i = 0; i <= 10; i++){
  task1For += i;
}

// Task - 1-2: "while" algorithm
while (i <= 0) {
  task1Do += 1;
}

// Task - 1-3: "do..while" algorithm
do { task1Do += 1 } while (i <= 10);

/**
 * Level - Easy
 * Task - 2
 * Implement algorithm which will
 * calculate sum of numbers from task2x to task2y (included)
 * Use for loop
 * Please store the result in task2Res variable
 */

const task2x = -238;
const task2y = 320;
let task2Res = 0;

for (let i = task2x; i <= task2y; i++){
  task2Res += i;
}

/**
 * Level - Easy
 * Task - 3
 * Implement algorithm which will
 * make a string from an array of letters
 * Use for..of loop
 * Please store the result in task3Res variable
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
 */

const task3Array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; // => "ABCDEFGHI"
let task3Res = '';

for (el of task3Array) {
  task3Res += el;
}

/**
 * Level - Easy
 * Task - 4
 * Calculate a total income for certain person
 * Assign the result to the variable 'task4TotalIncome'
 * Use for..in loop
 */

let task4TotalIncome = 0;
const task4personIncomes = {
  salary: 4000,
  rent: -823,
  grocery: -528,
  otherExpenses: -350,
  depositIncome: 281,
};

for (el in task4personIncomes) {
  task4TotalIncome = el.salary + el.rent + el.otherExpenses + el.depositIncome
}

module.exports = {
  task1For,
  task1while,
  task1Do,
  task2x,
  task2y,
  task2Res,
  task3Array,
  task3Res,
  task4personIncomes,
  task4TotalIncome,
};
