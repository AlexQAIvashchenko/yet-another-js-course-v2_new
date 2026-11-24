/**
 * Level - Normal
 * Task - 1
 * Create a task1Func which will return the list of object properties
 * if theirs values are Numbers
 */

function task1Func(obj) {
  const result = [];
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      result.push(key);
    }
  }
  return result;
}

console.log(task1Func({ age: 25, name: 'Alex' }));

module.exports = {
  task1Func,
};
