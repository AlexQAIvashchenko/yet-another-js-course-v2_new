const { expect } = require('chai');
const {
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
} = require('../arrays');
const people = require('./people.json');

describe('Unit 4 - Easy - Arrays:', () => {
  describe('Task 1 - second element of an array', () => {
    it('Verifying task1Func returns correct value', () => {
      const arr = [1, 2, 4];
      expect(task1Func(arr)).to.equal(arr[1]);
    });
  });

  describe('Task 2 - add element to an array', () => {
    it('Verifying task2Func returns correct value for an array [1, 2, 4]', () => {
      const arr = [1, 2, 4];
      task2Func(arr);
      expect(arr).to.have.length(4);
      expect(arr).to.include.members([1, 2, 4]);
    });
    it('Verifying task2Func returns correct value for an empty array', () => {
      const arr = [];
      task2Func(arr);
      expect(arr).to.have.length(1);
    });
  });

  describe('Task 3 - array1 + array2', () => {
    it('Verifying task3Func returns correct value', () => {
      const arr1 = [1, 2, 4];
      const arr2 = [5, 6, 7];
      expect(task3Func(arr1, arr2)).to.deep.equal(arr1.concat(arr2));
    });
  });

  describe('Task 4 - filled array with defined length', () => {
    it('Verifying task4Func returns correct array', () => {
      expect(task4Func(5, 5)).to.deep.equal(new Array(5).fill(5));
    });
  });

  describe('Task 5 - number of people by specific criteria', () => {
    it('Verifying task5Func returns correct number', () => {
      expect(task5Func(people)).to.equal(
        people.filter(
          (el) => el.name.split(' ').includes('Jack') || el.age < 30,
        ).length,
      );
    });
  });

  describe('Task 6 - filtered array', () => {
    it('Verifying task6Func returns correct array', () => {
      expect(task6Func(people)).to.deep.equal(
        people.filter((el) => el.age > 30),
      );
    });
  });

  describe('Task 7 - array with maturity', () => {
    it('Verifying task7Func returns correct array', () => {
      expect(task7Func(people)).to.deep.equal(
        people.map((el) => {
          let maturity;
          if (el.age <= 1) {
            maturity = 'baby';
          } else if (el.age <= 3) {
            maturity = 'toddler';
          } else if (el.age <= 5) {
            maturity = 'preschooler';
          } else if (el.age <= 12) {
            maturity = 'gradeschooler';
          } else if (el.age <= 18) {
            maturity = 'teen';
          } else if (el.age <= 21) {
            maturity = 'young adult';
          } else {
            maturity = 'adult';
          }
          return { ...el, maturity };
        }),
      );
    });
  });
});

describe('Unit 4 - Normal - Arrays:', () => {
  describe('Task 8 - index of minimal number', () => {
    const arr = [2, 3, 4, 14, 5, 0, 1, 2, 5, 9, 6, 3, 44];
    it('Verifying task8Func returns correct index', () => {
      expect(task8Func(arr)).to.equal(5);
    });
  });

  describe('Task 9 - index of minimal number', () => {
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
    it('Verifying task9Func returns correct index', () => {
      expect(task9Func(arr)).to.equal(12);
    });
  });

  describe('Task 10 - index of minimal number', () => {
    it('Verifying task10Func returns correct array if it contains less than 3 invalid entries', () => {
      const arr = [2, 3, undefined, 14, 5, 0, 1, 2, null, 5, 9, 6, null, 3, 44];
      expect(task10Func(arr)).to.deep.equal(
        arr.filter((el) => el !== null && el !== undefined),
      );
    });
    it('Verifying task10Func throws error if array contains more than 3 invalid entries', () => {
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
        task10Func(arr);
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
