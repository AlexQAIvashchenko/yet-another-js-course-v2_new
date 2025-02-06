const { promise1, promise2 } = require('../utils/utilPromises');

/**
 * Level - Normal
 * Task - 1
 * Create task1Func which will chain two promises (promise1() and promise2() from the '../utils/utilPromises)'
 * and return result as a concatenation of results for those 2 promises in a below format:
 * `${promise1Result} and ${promise2Result} - successfully resolved`
 * !!!NOTE: Use `then` functions
 */

// enter your code here
let task1Func;

/**
 * Level - Normal
 * Task - 2
 * Create task2Func which will return an array of results of promise1() and promise2()
 * As you already may notice promise1 take 10 seconds to become resolved while promise2 take about 20 seconds
 * You should not only return results of both promises as an array but make it in 20 second
 * task2Func() -> ["Promise1", "Promise2"]
 */

// enter your code here
let task2Func;

module.exports = {
  task1Func,
  task2Func,
};
