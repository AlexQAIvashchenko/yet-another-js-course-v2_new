const { promise1, promise2 } = require('../utils/utilPromises');

/**
 * Additional Reading:
 *
 * https://uk.javascript.info/promise-basics
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 */

/**
 * Level - Easy
 * Task - 1
 * Create a `promiseResolve` function which will return resolved promise with string value "Resolved!"
 */

// enter your code here
let promiseResolve;

/**
 * Level - Easy
 * Task - 2
 * Create a `promiseReject` function which will return rejected promise with string value "Rejected!"
 */

// enter your code here
let promiseReject;

/**
 * Level - Easy
 * Task - 3
 * Create a function `delayedGreetingPromise` that takes a `name` as parameter.
 * Inside the function return a promise that uses `setTimeout` to preform delay
 * of the execution for 1 second.
 * Documentation - [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout)
 * Once the delay finished text `Hello, ${name}!` should be returned.
 *
 * @example
 * delayedGreetingPromise('Bob')
 *    .then((result) => someFuncWithParam(result));
 *
 * The output of the code should be:
 * ----
 *   {nothing happens for 1 seconds}
 * Result = Hello, Bob!
 * ----
 *
 * if someFuncWithParam = (resultOfTheAsyncFunc) => console.log(`Result = ${resultOfTheAsyncFunc}`);
 */

let someFuncWithParam = (resultOfTheAsyncFunc) => console.log(`Result = ${resultOfTheAsyncFunc}`);

// enter your code below
let delayedGreetingPromise;

/**
 * Level - Easy
 * Task - 4
 * Create a `fullPromise` function that takes a parameter and returns a promise with both resolve and reject states
 * Should resolve when parameter === true with "Resolved!" string
 * Should reject when param === false with "Rejected!" string
 */

// enter your code here
let fullPromise;

/**
 * Level - Easy
 * Task - 5
 * Create `task1Func` which will call `promise1` function (it's already imported from the '../utils/utilPromises')
 * and add string " was resolved successfully" to the result
 *
 * @example
 * if `promise1()` returns string "Promise1"
 * so final result should look "Promise1 was resolved successfully"
 *
 * !!!NOTE: Use `then` functions
 */

// enter your code here
let task1Func;

module.exports = {
  promiseResolve,
  promiseReject,
  fullPromise,
  task1Func,
  delayedGreetingPromise,
  someFuncWithParam,
};
