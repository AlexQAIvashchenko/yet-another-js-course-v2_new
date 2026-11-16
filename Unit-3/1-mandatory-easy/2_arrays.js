/**
 * Additional Reading:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

const { indexOf, filter } = require('lodash');

/**
 * Level - Easy
 * Task - 1
 * Create a task1Func which will return second item from an array
 */

let task1Func = (arr) => {
  return arr[2];
};

console.log(task1Func([10, true, 'qa', 4.6]));

/**
 * Level - Easy
 * Task - 2
 * Create a task2Func which will add 1 item to a passed array (e.g. "new item")
 */

let task2Func = (arr) => {
  arr.push('new item');
  return arr;
};

console.log(task2Func([34, 'qa, false']));

/**
 * Level - Easy
 * Task - 3
 * Create a task3Func which get 2 arrays
 * and return array containing elements from array1 and array2
 */

let task3Func = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(task3Func([22, false], ['text', 'qa']));

/**
 * Level - Easy
 * Task - 4
 * Create a task4Func which will return new array with specified length
 * and filled in with specified value
 */

let task4Func = (length, value) => {
  return Array(length).fill(value);
};

console.log(task4Func(6, 'JS'));

/**
 * Level - Easy
 * Task - 5
 * Create a task5Func which will get an array of objects
 * e.g. [ { name: "Jane Dou", age: 45 }, { name: "Peter Parker", age: 18 } ]
 * and returns a number of people whose name is "Jack" or age is lower than 30
 * !!!NOTE: don't use any cycles
 */

let task5Func = (people) => {
  return people.filter(person => person.name === 'Jack' || person.age < 30).length;
};

console.log(task5Func([{ name: 'Jane Dou', age: 45 }, { name: 'Peter Parker', age: 18 }]));

/**
 * Level - Easy
 * Task - 6
 * Create a task6Func which will get an array of objects
 * e.g. [ { name: "Jane Dou", age: 45 }, { name: "Peter Parker", age: 18 } ]
 * return new array of all people who are older than 30
 */

let task6Func = (people) => {
  return people.filter(person => person.age > 30);
};

console.log(task6Func([{ name: 'Jane Dou', age: 45 }, { name: 'Peter Parker', age: 18 }]));

/**
 * Level - Easy
 * Task - 7
 * Create a task7Func which will get an array of objects
 * e.g. [ { name: "Jane", age: 45 }, { name: "Peter", age: 18 } ]
 * return new array of objects containing additional property "maturity"
 * maturity = "baby" if age is 0 or 1,
 * maturity = "toddler" if age 2 to 3
 * maturity = "preschooler" if age is 4 to 5
 * "gradeschooler" if age is 6 to 12
 * "teen" from 13 to 18
 * "young adult" from 19 to 21
 * "adult" from 22 and greater
 */

let task7Func = (people) => {
  return people.map((person) => {
    let maturity;

    if (person.age <= 1) {
      maturity = 'baby';
    } else if (person.age <= 3) {
      maturity = 'toddler';
    } else if (person.age <= 5) {
      maturity = 'preschooler';
    } else if (person.age <= 12) {
      maturity = 'gradeschooler';
    } else if (person.age <= 18) {
      maturity = 'teen';
    } else if (person.age <= 21) {
      maturity = 'young adult';
    } else {
      maturity = 'adult';
    }
    return { ...person, maturity };
  });
};

console.log(
  task7Func([{ name: 'Jane', age: 45 }, { name: 'Peter', age: 18 }]));

module.exports = {
  task1Func,
  task2Func,
  task3Func,
  task4Func,
  task5Func,
  task6Func,
  task7Func,
};
