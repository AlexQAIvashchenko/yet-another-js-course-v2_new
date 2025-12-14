const { promise1, promise2 } = require('../utils/utilPromises');

/**
 * Level - Normal
 * Task - 1
 * Create `task1Func` which will chain two promises (`promise1()` and `promise2()` from the '../utils/utilPromises)'
 * and return result as a concatenation of results for those 2 promises in a below format:
 * `${promise1Result} and ${promise2Result} - successfully resolved`
 * !!!NOTE: Use `then` functions
 */

// enter your code here
let task1Func;

/**
 * Level - Normal
 * Task - 2
 * Create a function `greetWithDelayPromise` that takes a `name` and a `delay as arguments.
 * Where `name` is string, `delay` is a delay in seconds.
 * Inside the function return a promise that uses `setTimeout` to delay the execution by the specified delay.
 * After the delay it should print in logs: "Hello, ${name}!" and return string "Welcome to the promises chains."
 *
 * @example
 * If function will be used in the below way:
 * greetWithDelay("Alice", 5)
 *   .then((result) => console.log(result));
 *
 * The output will be:
 * ----
 *   {nothing happens for 5 seconds}
 * "Hello, Alice!"
 * "Welcome to the promises chains."
 * ----
 */

// enter your code here
let greetWithDelayPromise;

/**
 * Level - Normal
 * Task - 3
 * Create `task2Func` which will return an array of results of promise1() and promise2()
 * As you already may notice promise1 take 10 seconds to become resolved while promise2 take about 20 seconds
 * You should not only return results of both promises as an array but make it in 20 second
 * task2Func() -> ["Promise1", "Promise2"]
 */

// enter your code here
let task2Func;

module.exports = {
  task1Func,
  greetWithDelayPromise,
  task2Func,
};
