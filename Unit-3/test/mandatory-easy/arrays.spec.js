const { expect } = require('chai');
const {
  task1Func,
  task2Func,
  task3Func,
  task4Func,
  task5Func,
  task6Func,
  task7Func,
} = require('../../1-mandatory-easy/2_arrays');
const people = require('./people.json');

describe('Unit 3 - Mandatory - Arrays:', () => {
  describe('Task 1 - Second element of an array', () => {
    it('Verifying task1Func returns correct value', () => {
      const arr = [1, 2, 4];

      expect(task1Func(arr)).to.equal(arr[1]);
    });
  });

  describe('Task 2 - Add element to an array', () => {
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

  describe('Task 4 - Filled array with defined length', () => {
    it('Verifying task4Func returns correct array', () => {
      expect(task4Func(5, 5)).to.deep.equal(new Array(5).fill(5));
    });
  });

  describe('Task 5 - Number of people by specific criteria', () => {
    it('Verifying task5Func returns correct number', () => {
      expect(task5Func(people)).to.equal(
        people.filter(
          (el) => el.name.split(' ').includes('Jack') || el.age < 30,
        ).length,
      );
    });
  });

  describe('Task 6 - Filtered array', () => {
    it('Verifying task6Func returns correct array', () => {
      expect(task6Func(people)).to.deep.equal(
        people.filter((el) => el.age > 30),
      );
    });
  });

  describe('Task 7 - Array with maturity', () => {
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
