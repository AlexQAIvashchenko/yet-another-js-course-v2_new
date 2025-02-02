/**
 * Level - Normal
 * Task - 1
 * Implement algorithm which calculates factorial for task1n using for, while, do..while operators
 * Assign the result to corresponding variable
 * Hint: https://www.wikihow.com/Do-Factorials
 */

let task1ForFactorial = 1;
let task1WhileFactorial = 1;
let task1DoFactorial = 1;

const task1n = 10; // 10! = 3628800

// Task - 1:1: "for" algorithm
// enter your code here

// Task - 1:2: "while" algorithm
// enter your code here

// Task - 1:3: "do" algorithm
// enter your code here

/**
 * Level - Normal
 * Task - 2
 * Implement algorithm which will make a string of every second letter from an array of letters
 * Please store the result in task2Res variable
 * Hint: you can use loops with numbers to access elements in array
 */

const task2Array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; // => "BDFH"
let task2Res = '';

// enter your code here

/**
 * Level - Normal
 * Task - 3
 * Implement algorithm which will make a string of every second letter from an array of letters
 * NB!!! - letters should be taken it from the end to the start
 * Please store the result in task3Res variable
 * NOTE: don't use array.reverse() method
 */

const task3Array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']; // => "IGECA"
let task3Res = '';

// enter your code here

/**
 * Level - Normal
 * Task - 4
 * Implement algorithm that will
 * use in an array of numbers and returns the sum of all the even numbers in the given array.
 * Please store the result in task4Res variable
 * NOTE: use a `for` loop to iterate over the array and check if each number is even
 */

const task4Array = [2, 7, 15, 1, 0, 100200];
let task4Res = 0;

// enter your code here

module.exports = {
  task1n,
  task1ForFactorial,
  task1WhileFactorial,
  task1DoFactorial,
  task2Array,
  task2Res,
  task3Array,
  task3Res,
  task4Array,
  task4Res,
};
