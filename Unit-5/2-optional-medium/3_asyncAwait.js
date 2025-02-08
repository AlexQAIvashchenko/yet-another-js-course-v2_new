const { promiseResolve, promiseReject } = require('../1-mandatory-easy/2_promises');
const { greetWithDelayPromise } = require('../2-optional-medium/2_promises.js');
const { promise1, promise2 } = require('../utils/utilPromises');

/**
 * Level - Normal
 * Task - 1
 * Create an `asyncPromiseReject` function which will handle the created
 * earlier `promiseReject()` promise and return result as a
 * string containing promiseReject() rejection reason + string " was handled and result returned"
 * NOTE: use async/await syntax inside the `asyncPromiseReject function
 *
 * @example
 * if `promiseResolve()` rejection reason was "BlablaRejected!"
 * than `asyncPromiseReject` function should catch an error and return "BlablaRejected! was handled and result returned" string
 */

// enter your code here
let asyncPromiseReject;

/**
 * Level - Normal
 * Task - 2
 * Create a function `asyncGreetWithDelayPromise` function which will get `name` and `delay` as params
 * and call `greetWithDelayPromise` function passing this params.
 * The result of the `greetWithDelayPromise` should be passed to `console.log`.
 * Use async/await syntax.
 * NOTE:`greetWithDelayPromise` has already been imported from the '../2-optional-medium/2_promises.js' file.
 * NOTE2: use async/await syntax
 *
 * @example
 * asyncGreetWithDelayPromise("Alice", 10)
 *
 * The output of the code should be:
 * ----
 *   {nothing happens for 10 seconds}
 * "Hello, Alice!"
 * "Welcome to the promises chains."
 * ----
 */

// enter your code here
let asyncGreetWithDelayPromise;

module.exports = {
  asyncPromiseReject,
  asyncGreetWithDelayPromise,
};
