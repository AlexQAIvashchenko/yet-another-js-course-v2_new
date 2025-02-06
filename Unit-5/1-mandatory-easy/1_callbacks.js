/**
 * Additional Reading:
 *
 * https://uk.javascript.info/callbacks
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing
 * https://www.freecodecamp.org/news/asynchronous-programming-in-javascript/
 */

/**
 * Level - Easy
 * Task - 1
 * Create a function delayedGreeting that takes a name and a callback function as parameters.
 * Inside the function, use setTimeout to delay the execution of the callback function by 1 second.
 * The callback function should be invoked with a greeting message `Hello, ${name}!`.
 *
 * @example
 * delayedGreeting('Bob', someFuncWithParam);
 *
 * The output of the code should be:
 * ...
 * nothing happens for 1 seconds
 * ...
 *
 * Result = Hello, Bob!
 *
 * if someFuncWithParam = (resultOfTheAsyncFunc) => console.log(`Result = ${resultOfTheAsyncFunc}`);
 */

// enter your code below
let delayedGreeting;

module.exports = {
  delayedGreeting,
};
