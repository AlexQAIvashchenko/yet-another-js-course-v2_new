/**
 * Level - Hard
 * Task - 1
 * Create a function 'countdown' that takes a duration in seconds and a callback function as parameters.
 * Inside the function, implement a countdown timer (setTimeout)
 * that prints left number of seconds to wait and waits 1 second.
 * Should repeat till the specified duration ends.
 * After the countdown finishes, invoke the callback function.
 *
 * @example
 * countdown(10, someFunc);
 *
 * The output of the code should be:
 *
 * ...
 * prints 10 and waits for 1 sec
 * prints 9 and waits for 1 sec
 * ...
 * prints 0
 * prints "Callback invoked!"
 *
 * if someFunc = () => console.log("Callback invoked!");
 */

// enter your code below
let countdown;

module.exports = {
  countdown,
};
