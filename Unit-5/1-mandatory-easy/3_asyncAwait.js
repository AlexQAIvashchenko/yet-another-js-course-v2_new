const {
  promiseResolve,
  promiseReject,
  delayedGreetingPromise,
  someFuncWithParam,
} = require('./2_promises');
const { promise1, promise2 } = require('../utils/utilPromises');

/**
 * Additional Reading:
 *
 * https://javascript.info/async-await
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 */

/**
 * Level - Easy
 * Task - 1
 * Create an `asyncPromiseResolve` function which will
 * resolve the created earlier `promiseResolve()` promise.
 * Use async/await syntax inside the `asyncPromiseResolve` function and modify the message result
 *
 * @example
 * if promiseResolve() return "Blabla"
 * than function should return "Blabla was resolved with async await!"
 */

// enter your code here
let asyncPromiseResolve;

/**
 * Level - Easy
 * Task - 2
 * Create an `asyncPromiseAll` function which will return results of calling 2 promises functions:
 * `promise1` and `promise2` from the '../utils/utilPromises' file (already imported).
 * The result returned should be an array and should be returned in 20 seconds.
 * NOTE: `promise1` returns result in 10 seconds and `promise2` returns result in 20 seconds.
 * NOTE2: Use async/await syntax.
 *
 * @example
 * asyncPromiseAll()
 * returns ["Promise1", "Promise2"]
 */

// enter your code here
let asyncPromiseAll;

/**
 * Level - Easy
 * Task - 3
 * Create an `asyncDelayedGreetingPromise` function which will call `delayedGreetingPromise` function,
 * get the result and then call `someFuncWithParam` function with this result.
 *
 * NOTE: Use async/await syntax.
 * `delayedGreetingPromise` and `someFuncWithParam` have already been imported from the './2_promises.js' file.
 */

// enter your code here
let asyncDelayedGreetingPromise;

module.exports = {
  asyncPromiseResolve,
  asyncPromiseAll,
  asyncDelayedGreetingPromise,
};
