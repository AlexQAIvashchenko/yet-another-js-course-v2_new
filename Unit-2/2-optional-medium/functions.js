/**
 * Level - Normal
 * Task - 1
 * Rest parameter
 * Create a function task1Func which returns an object
 * containing number of parameters passed in function and first parameter value
 *
 * @example
 * {
 *     paramsNumber: 3,
 *     firstParam: _first_param_value_,
 * }
 *
 * NOTE: use rest parameter and use it to get first param value
 */

const task1Func = (/** add function parameters */) => {
  // enter your code here
};

/**
 * Level - Normal
 * Task - 2
 * Create a function task2Func which returns word google with given numbers of "o" symbols
 *
 * @example
 * task13Func(5) // => gooooogle
 */

const task2Func = (/** add function parameters */) => {
  // enter your code here
};

/**
 * Level - Normal
 * Task - 3
 * Modify the code below to make `task3Func` return `"fizz"` if BOTH numbers are greater than 5,
 * OR if BOTH numbers are less than or equal to 5.
 * Otherwise, it should return `"buzz"`.
 *
 * Constraints:
 * - Use a combination of logical operators (&&, ||, etc.) to achieve the desired behavior.
 *
 * Some dummy code to show the idea:
 * task3Func = (a > b || b < 10);
 *
 * Example:
 * task3Func(6, 7) should return `"fizz"` (both > 5)
 * task3Func(4, 5) should return `"fizz"` (both <= 5)
 * task3Func(6, 4) should return false (one > 5, one <= 5)
 */

const task3Func = (/** add function parameters */) => {
  // enter your code here
};

/**
 * Level - Normal
 * Task - 4
 * Implement the methods inside the given object which:
 * 1. keys() - console logs keys of the given object (please use for..in cycle)
 * 2. call() - returns the string 'My name is Jack London, and I am 25 years old. My best friend is a wolf'
 * The string should be constructed using the properties from the object
 */

const task4Object = {
  name: 'John',
  lastName: 'Doe',
  age: 25,
  friend: 'wolf',
  keys() {
    // enter your code here
  },
  call() {
    // enter your code here
  },
};

/**
 * Level - Normal
 * Task - 5
 * Create a function 'countdown' that takes a duration and a callback function as parameters.
 * Inside the function, console.log number that starts from 0
 * and increments by one until it reaches the specified duration.
 * After the countdown finishes, return invocation of the callback function.
 *
 * @example
 * usage of the created function should be like:
 *      countdown(10, someFunc);
 * The output of the code should be:
 *      0
 *      1
 *      ...
 *      {duration}
 *      Callback invoked!
 *
 * if someFunc = () => console.log("Callback invoked!");
 */

const someFunc = () => console.log('Callback invoked!');

// enter your code below
let countdown;

module.exports = {
  task1Func,
  task2Func,
  task3Func,
  task4Object,
  countdown,
};
