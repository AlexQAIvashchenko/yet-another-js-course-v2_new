const Chance = require('chance');
const chance = new Chance();

/**
 * Additional Reading:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 * https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
 * https://uk.javascript.info/callbacks
 */

/**
 * Level - Easy
 * Task - 1
 * Create a function task1Func which will always return true
 * Use function definition (also called a function declaration, or function statement)
 */

// enter your code here

/**
 * Level - Easy
 * Task - 2
 * Create a variable task2Func which will contain a function
 * which will take year of birth as a parameter and returns calculated age based on current year
 * Use function expression
 */

// enter your code here

/**
 * Level - Easy
 * Task - 3
 * Create a variable task3Func which will contain a function
 * which will take parameter gender as a number (where 1 stands for woman, 2 is man and 0 is other)
 * and returns text ee.g. "My gender is woman"
 * Use function expression with arrow function notation
 */

// enter your code here

/**
 * Level - Easy
 * Task - 4
 * Create a function task4Func which will take 2 parameters and calculate sum of those two params
 * NOTE: assume parameters are always numbers
 */

function task4Func(/** add function parameters */) {
  // enter your code here
}

/**
 * Level - Easy
 * Task - 5
 * Create a function task5Func which will do same as the function from Task 4
 * Just make second parameter to have a default value equal 10
 */

function task5Func(/** add function parameters */) {
  // enter your code here
}

/**
 * Level - Easy
 * Task - 6
 * Create a function task6Func which will get an object, e.g. {firstName: "Jack", lastName: "London"}
 * and returns a string firstName plus lastName, separated by space
 */

function task6Func(/** add function parameters */) {
  // enter your code here
}

/**
 * Level - Easy
 * Task - 7
 * Create a function task7Func that returns an object based on the given information
 * (params may be null, please use default ones (empty strings and 0 for age))
 *
 * @example
 * task7Func("Jack", "London", 52) should return
 * {
 *    firstName: "Jack"
 *    lastName: "London"
 *    age: 52
 * }
 */

function task7Func(/** add function parameters */) {
  // enter your code here
}

/**
 * Level - Easy
 * Task - 8
 * Create a function task8Func which checks if number is odd or even
 * and returns true if odd and false if even
 * HINT: think about a remainder of two numbers
 */

function task8Func(/** add function parameters */) {
  // enter your code here
}

/**
 * Level - Easy
 * Task - 9
 * Create a function task9Func which returns the first shortest of the words in the given array
 *
 * @example
 * task9Func(["ten", "two", "four"]) // => ten
 */

function task9Func(/** add function parameters */) {
  // enter your code here
}

/**
 * Level - Easy
 * Task - 10
 * Create a function task10Func which calculates total distance traveled
 * based on an array of objects with field distance and direction
 * e.g [ {direction: "Kiyv - Krakow", distance: 879 }, { direction: "Kiyv - Tokyo", distance: 8193 } ]
 */

function task10Func(/** add function parameters */) {
  // enter your code here
}

/**
 * Level - Easy
 * Task - 11
 * Callback
 * Create a function task11Func which will take another function as an argument
 * and returns result of execution of that another function in string format
 * NOTE: you can use `someFunc1` or `someFunc2` for testing purposes
 * @example
 * if callBackFunction (e.g. `someFunc1`) returns "THIS IS THE RESULT"
 * than task11Func should return "Callback result = THIS IS THE RESULT"
 */

// DO NOT DELETE below code
const someFunc1 = () => {
  return chance.sentence(); // returns random sentence
};

const task11Func = (/** add function parameters */) => {
  // enter your code here
};

/**
 * Level - Easy
 * Task - 12
 * Create a function addNumbers that takes two numbers and a callback function as parameters.
 * Inside the function, calculate the sum of the two numbers.
 * Once the sum is calculated, invoke the callback function with the resulting sum as an argument.
 *
 * @example
 * usage of the created function should be like:
 *      addNumbers(1, 2, someFuncWithParam)
 *
 * The output of the above code is ===> "Result = 3"
 *
 * if someFuncWithParam = (resultOfTheAsyncFunc) => console.log(`Result = ${resultOfTheAsyncFunc}`);
 */

const someFuncWithParam = (resultOfTheCallbackFunc) => {
  console.log(`Result = ${resultOfTheCallbackFunc}`);
};

// enter your code below
let addNumbers;

/**
 * Level - Easy
 * Task - 13
 * Implement a function calculateSum that takes an array of numbers and a callback function as parameters.
 * Inside the function, calculate the sum of the numbers in the array.
 * Once the sum is calculated, invoke the callback function with the resulting sum.
 *
 * @example
 * usage of the created function should be like:
 *      calculateSum([1, 2, 3, 4], someFuncWithParam)
 * The output of the above code is ===> "Result = 10"
 *
 * if someFuncWithParam = (resultOfTheAsyncFunc) => console.log(`Result = ${resultOfTheAsyncFunc}`);
 */

// enter your code below
let calculateSum;

/**
 * Level - Easy
 * Task - 14
 * Create a function 'countdown' that takes a duration and a callback function as parameters.
 * Inside the function, console.log number that starts from 0
 * and increments by one until it reaches the specified duration.
 * After the countdown finishes, return invocation of the callback function.
 *
 * @example
 * usage of the created function should be like:
 *      countdown(10, someFunc);
 * The output of the code should be:
 *      0
 *      1
 *      ...
 *      {duration}
 *      Callback invoked!
 *
 * if someFunc = () => console.log("Callback invoked!");
 */

const someFunc = () => console.log('Callback invoked!');

// enter your code below
let countdown;

module.exports = {
  task1Func,
  task2Func,
  task3Func,
  task4Func,
  task5Func,
  task6Func,
  task7Func,
  task8Func,
  task9Func,
  task10Func,
  task11Func,
  addNumbers,
  calculateSum,
  countdown,
};
