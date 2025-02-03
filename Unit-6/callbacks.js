/**
 * Additional Reading:
 *
 * https://uk.javascript.info/callbacks
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing
 * https://www.freecodecamp.org/news/asynchronous-programming-in-javascript/
 */

const someFunc = () => console.log('Callback invoked!');
const someFuncWithParam = (resultOfTheAsyncFunc) => {
  console.log(`Result = ${resultOfTheAsyncFunc}`);
};

/**
 * Level - Easy
 * Task - 1
 * Create a function delayedGreeting that takes a name and a callback function as parameters.
 * Inside the function, use setTimeout to delay the execution of the callback function by 1 second.
 * The callback function should be invoked with a greeting message `Hello, ${name}!`.
 *
 * @example
 *      delayedGreeting('Bob', someFuncWithParam);
 * The output of the code should be:
 * ...
 *   nothing happens for 1 seconds
 * ...
 *      Result = Hello, Bob!
 *
 * if someFuncWithParam = (resultOfTheAsyncFunc) => console.log(`Result = ${resultOfTheAsyncFunc}`);
 */

// enter your code below
let delayedGreeting;

/**
 * Level - Normal
 * Task - 2
 * Create a function greetWithDelay that takes a name, delay in seconds, and a callback function as parameters.
 * Inside the function, use setTimeout to delay the execution of the callback function by the specified delay.
 * The callback function should be invoked with the provided name as the first argument
 * and a greeting message 'Welcome to the callbacks.' as the second argument.
 *
 * @example
 *      greetWithDelay("Alice", 2, someFuncWith2Params);
 * The output of the code should be:
 * ...
 *   nothing happens for 2 seconds
 * ...
 *  In the log you will see:
 *      "Hello, Alice! Welcome to the callbacks."
 *
 * someFuncWith2Params is defined below
 */

const someFuncWith2Params = (name, message) => {
  console.log('Hello, ' + name + '! ' + message);
};

// enter your code below
let greetWithDelay;

/**
 * Level - Hard
 * Task - 3
 * Create a function 'countdown' that takes a duration in seconds and a callback function as parameters.
 * Inside the function, implement a countdown timer (setTimeout)
 * that prints left number of seconds to wait and waits 1 second.
 * Should repeat till the specified duration ends.
 * After the countdown finishes, invoke the callback function.
 *
 * @example
 * countdown(10, someFunc);
 * The output of the code should be:
 * ...
 *   prints 10 and waits for 1 sec
 *   prints 9 and waits for 1 sec
 *   ...
 *   prints 0
 *   prints "Callback invoked!"
 *
 * if someFunc = () => console.log("Callback invoked!");
 */

// enter your code below
let countdown;

module.exports = {
  delayedGreeting,
  countdown,
  someFuncWith2Params,
  greetWithDelay,
};
