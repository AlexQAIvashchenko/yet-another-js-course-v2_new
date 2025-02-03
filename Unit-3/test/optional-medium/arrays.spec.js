const { expect } = require('chai');
const {
  task1Func,
  task2Func,
  task3Func,
} = require('../../2-optional-medium/2_arrays');

describe('Unit 3 - Optional - Medium - Arrays:', () => {
  describe('Task 1 - Index of minimal number', () => {
    it('Verifying task1Func returns correct index', () => {
      const arr = [2, 3, 4, 14, 5, 0, 1, 2, 5, 9, 6, 3, 44];

      expect(task1Func(arr)).to.equal(5);
    });
  });

  describe('Task 2 - Number of valid entries of an array', () => {
    it('Verifying task2Func returns correct index', () => {
      const arr = [
        2,
        3,
        undefined,
        14,
        5,
        0,
        undefined,
        1,
        2,
        null,
        5,
        9,
        6,
        null,
        3,
        44,
      ];

      expect(task2Func(arr)).to.equal(12);
    });
  });

  describe('Task 3 - Filter out null and undefined entries', () => {
    it('Verifying task3Func returns correct array if it contains less than 3 invalid entries', () => {
      const arr = [2, 3, undefined, 14, 5, 0, 1, 2, null, 5, 9, 6, null, 3, 44];

      expect(task3Func(arr)).to.deep.equal(
        arr.filter((el) => el !== null && el !== undefined),
      );
    });

    it('Verifying task3Func throws error if array contains more than 3 invalid entries', () => {
      const arr = [
        2,
        3,
        undefined,
        14,
        5,
        undefined,
        0,
        1,
        2,
        null,
        5,
        9,
        6,
        null,
        3,
        44,
      ];

      try {
        task3Func(arr);

        expect.fail(
          'Function should throw an error in case there are more than 3 invalid entries. More info how to throw error:' +
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw',
        );
      } catch (e) {
        expect(e.stack || e).to.include('The data needs to be reviewed');
      }
    });
  });
});
