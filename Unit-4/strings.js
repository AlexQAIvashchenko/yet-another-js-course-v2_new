/**
 * Additional Reading:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 * https://uk.javascript.info/regular-expressions
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
 */

/**
 * Level - Easy
 * Task - 1
 * Create a function named task1Func which will take two strings as arguments
 * and verify if string str1 contains string str2.
 * It should return true or false
 */

let task1Func; // enter your code here

/**
 * Level - Easy
 * Task - 2
 * Create a function named task2Func which will take two strings as arguments
 * and return index of str2 in a str1
 * or -1 in case str2 is not a substring of str1
 */

let task2Func; // enter your code here

/**
 * Level - Easy
 * Task - 3
 * Create a function named task3Func which will take two strings as arguments
 * and return a string replacing its part
 * with "Ah-a-ha-ha. Changing a part of the string" string
 * or return initial string as is in case substring was not found
 * @example
 * task3Func('tests', 'es') => 'tAh-a-ha-ha. Changing a part of the stringts'
 */

let task3Func; // enter your code here

/**
 * Level - Easy
 * Task - 4
 * Create a function named task4Func which will take a string as an argument
 * and remove unnecessary space at the beginning and end of the string
 * if result will be an empty string it should return 'STRING IS EMPTY'
 */

let task4Func; // enter your code here

/**
 * Level - Normal
 * Task - 5
 * Create a task5Func which will reverse a given string;
 * If number was received method should return the string 'This is not a string!'
 * console.log(task5Func('google)) // 'elgoog'
 * console.log(task5Func(123)) // 'This is not a string!'
 */

let task5Func; // enter your code here

/**
 * Level - Normal
 * Task - 6
 * Create a task6Func which will calculate a century by given year if a number is passed.
 * To get the proper century you take the year and divide it by 100, rounding up to the nearest whole number.
 * @example
 * console.log(task6Func(1325)) // 14
 * console.log(task6Func(1801)) // 19
 * console.log(task6Func(601)) // 7
 * console.log(task6Func(21)) // 1
 */

let task6Func; // enter your code here

/**
 * Level - Normal
 * Task - 7
 * Create a task7Func which will
 * calculate how many times a letter appears in the provided 'string'
 * NOTE: calculation should be case-insensitive e.g. 'K' === 'k' and vise versa
 * @example
 * console.log(strCount('Google', 'o')) // 2
 * console.log(strCount('I know JS', 'j')) // 1
 * console.log(strCount('', 'z')) // 0
 * NOTE: don't use for loops
 */

let task7Func; // enter your code here

/**
 * Level - Normal
 * Task - 8
 * Create a task8Func which will
 * substitute value in the square brackets with '[----]'
 * @example
 * console.log(replaceConfidential("MR.[Johns] was responsible for ...")) // => "MR.[----] was responsible for ..."
 */

let task8Func; // enter your code here

/**
 * Level - Normal
 * Task - 9
 * Create a task9Func which will
 * reduce the length of the string.
 * If it is longer than the given maxLength - reduced its length to maxLength symbols
 * and add "..." to the end.
 * Return itself if it's not that long.
 * @example
 * console.log(truncateString('The story begins long-long ago.', 6)) // 'The st...'
 * console.log(truncateString('Hello', 6)) // 'Hello'
 */

let task9Func; // enter your code here

/**
 * Hardcore tasks from codewars.com:
 *
 * https://www.codewars.com/kata/595970246c9b8fa0a8000086
 * https://www.codewars.com/kata/57e3f79c9cb119374600046b
 * https://www.codewars.com/kata/5b68983a975680155000005d
 */

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
};
