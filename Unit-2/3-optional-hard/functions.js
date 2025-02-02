/**
 * Level - Hardcore
 * Task - 1
 * Implement the methods inside the given object which:
 * 1. keys() - console logs keys of the given object (please use for..in cycle)
 * 2. call() - returns the string 'My name is Jack London, and I am 25 years old. My best friend is a wolf'
 * The string should be constructed using the properties from the object
 */

const task1Object = {
  name: 'John',
  lastName: 'Doe',
  age: 25,
  friend: 'wolf',
  keys() {
    // enter your code here
  },
  call() {
    // enter your code here
  },
};

/**
 * Level - Hardcore
 * Task - 2
 * Create a function task2Func which will calculate a Final Price considering the Price and the Discount Percentage
 *
 * HINT: you need to use the Closure here
 * JS Closures: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 *
 * @example
 * const discount10 = discountFunction(10);
 * console.log(discount10(90)); // 81
 * console.log(discount10(100)); // 90
 */

function task2Func(discountPercentage) {
  return function (amount) {
    // enter your code here
  };
}

module.exports = {
  task1Object,
  task2Func,
};
