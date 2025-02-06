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
 * Create a promiseResolve function which will return promise resolved with string value "Resolved!"
 */

// enter your code here
let promiseResolve;

/**
 * Level - Easy
 * Task - 2
 * Create a promiseReject function which will return promise rejected with string value "Rejected!"
 */

// enter your code here
let promiseReject;

/**
 * Level - Easy
 * Task - 3
 * Create a fullPromise function which returns a promise with both resolve and reject states
 * Should resolve when param === true with "Resolved!" string
 * Should reject when param === false with "Rejected!" string
 */

// enter your code here
let fullPromise;

/**
 * Level - Easy
 * Task - 4
 * Create task1Func which will call promise1 function (it's already imported from the '../utils/utilPromises')
 * and add string ' was resolved successfully' to the result
 *
 * @example
 * if promise1() returns string 'Promise1'
 * so final result should look 'Promise1 was resolved successfully'
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
};
