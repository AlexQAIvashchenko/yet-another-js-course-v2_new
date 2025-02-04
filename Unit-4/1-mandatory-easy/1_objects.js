/**
 * Additional Reading:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 */

/**
 * Level - Easy
 * Task - 1
 * Create an object 'person' with 'firstName' and 'lastName' properties
 * Object should contain 'getFullName' method that returns full name ('firstName lastName')
 */

let person; // enter your code here

/**
 * Level - Easy
 * Task - 2
 * Create a makeRobot function which will create a 'robot' object from person object by
 * adding additional property to a 'person'
 * A 'robot' should have 'batteryLevel' property (e.g. batteryLevel = 3)
 * NOTE: this method should take 'person' as a parameter, change the initial object and return it changed.
 * !!!NOTE: use Object assign method
 */

function makeRobot(person) {
  // enter your code here
}

/**
 * Level - Easy
 * Task - 3
 * Create a function isARobot which will check if an object is a robot and return true or false
 * by checking if object has property (e.g. makeRobot).
 * Try to find more than 1 way to do it.
 */

function isARobot(obj) {
  // enter your code here
}

module.exports = {
  person,
  makeRobot,
  isARobot,
};
