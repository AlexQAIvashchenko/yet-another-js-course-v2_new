/**
 * Level - Normal
 * Task - 1
 * Create task1Func to find an index of minimal item from an array.
 *
 * @example
 * console.log(task1Func([2, 5, 6, 3, 1, 8])); // 4
 * Note: try different approaches (e.g. using forEach or using Math object and its function)
 */

let task1Func = (arr) => {
  let minIdx = 0;

  arr.forEach((element, index) => {
    if (element < arr[minIdx]) {
      minIdx = index;
    }
  });
  return minIdx;
};

console.log(task1Func([2, 5, 6, 3, 1, 8]));

/**
 * Level - Normal
 * Task - 2
 * Crete task2Func which will return number of valid entries of an array.
 * Valid means not null or undefined.
 */

let task2Func = (arr) => {
  return arr.filter(value => value !== null && value !== undefined).length;
};

console.log(task2Func([1, null, 2, undefined, 10, 'test']));

/**
 * Level - Normal
 * Task - 3
 * Crete task3Func which will filter out null and undefined entries.
 * If number of invalid entries are greater than 3 throw an Error "The data needs to be reviewed".
 */

let task3Func = (arr) => {
  const validEntries = arr.filter(
    value => value !== null && value !== undefined
  );
  const invalidCount = arr.length - validEntries.length;
  if (invalidCount > 3) {
    throw new Error('The data needs to be reviewed');
  }
  return validEntries;
};

console.log(task3Func([1, null, 8, undefined, 3]));

module.exports = {
  task1Func,
  task2Func,
  task3Func,
};
