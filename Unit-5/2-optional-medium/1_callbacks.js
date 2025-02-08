/**
 * Level - Normal
 * Task - 1
 * Create a function `greetWithDelay` that takes a `name`, `delay` and `cbFunc` as arguments.
 * Where `name` is string, `delay` is a delay in seconds and `cbFunc` is a callback.
 * Inside the function, use `setTimeout` to delay the execution of the callback function by the specified delay.
 * The callback function should be invoked with the provided name as the first argument
 * and a greeting message 'Welcome to the callbacks.' as the second argument.
 *
 * @example
 * greetWithDelay("Alice", 2, someFuncWith2Params);
 *
 * The output of the code should be:
 * ----
 *   {nothing happens for 2 seconds}
 * "Hello, Alice! Welcome to the callbacks."
 * ----
 *
 * `someFuncWith2Params` is defined below:
 */

const someFuncWith2Params = (name, message) => {
  console.log('Hello, ' + name + '! ' + message);
};

// enter your code below
let greetWithDelay;

module.exports = {
  someFuncWith2Params,
  greetWithDelay,
};
