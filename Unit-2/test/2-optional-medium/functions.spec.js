const { expect } = require('chai');
const sinon = require('sinon');
const Chance = require('chance');
const chance = new Chance();

try {
  ({
    task1Func,
    task2Func,
    task3Func,
    task4Object,
    calculateSum,
    countdown,
  } = require('../../2-optional-medium/functions'));
} catch (err) {
  console.error(
    '\x1b[41m',
    'Error importing functions. Ensure all functions are implemented in 2-optional-medium/functions.js file.',
  );
}

describe('Unit 3 - Optional - Medium - Functions:', () => {
  describe('Task 1 - Rest parameter', () => {
    it('Verifying task1Func function returns correct object', () => {
      expect(task1Func(1, 2, 3, 4)).to.deep.equal({
        paramsNumber: 4,
        firstParam: 1,
      });
    });
  });

  describe('Task 2 - Google', () => {
    it('Verifying task2Func returns "goooooogle" if passing 6', () => {
      expect(task2Func(6)).to.equal('goooooogle');
    });

    it('Verifying task2Func returns "gooogle" if passing 3', () => {
      expect(task2Func(3)).to.equal('gooogle');
    });
  });

  describe('Task 3 - Fizzbuzz', () => {
    it('should return "fizz" when both numbers are greater than 5', () => {
      expect(task3Func(6, 7)).to.equal('fizz');
      expect(task3Func(10, 8)).to.equal('fizz');
    });

    it('should return "fizz" when both numbers are less than or equal to 5', () => {
      expect(task3Func(4, 5)).to.equal('fizz');
      expect(task3Func(0, 3)).to.equal('fizz');
    });

    it('should return "buzz" when one number is greater than 5 and the other is less than or equal to 5', () => {
      expect(task3Func(6, 4)).to.equal('buzz');
      expect(task3Func(2, 9)).to.equal('buzz');
    });

    it('should handle edge cases with 5 correctly', () => {
      expect(task3Func(5, 5)).to.equal('fizz'); // both equal to 5
      expect(task3Func(5, 6)).to.equal('buzz'); // one equals 5, the other greater
      expect(task3Func(6, 5)).to.equal('buzz'); // one greater, the other equals 5
    });
  });

  describe('Task 4 - Methods inside the given object', () => {
    it('Verifying task4Object can print object keys', () => {
      const expectedKeys = [
        'name',
        'lastName',
        'age',
        'friend',
        'keys',
        'call',
      ];

      const consoleLogSpy = sinon.spy(console, 'log');
      task4Object.keys();
      consoleLogSpy.restore();
      const calls = consoleLogSpy.getCalls().map((call) => call.args[0]);

      expect(calls).to.deep.equal(expectedKeys);
    });

    it('Verifying task4Object can return the string', () => {
      expect(task4Object.call()).to.equal(
        'My name is ' +
          task4Object.name +
          ' ' +
          task4Object.lastName +
          ', and I am ' +
          task4Object.age +
          ' years old. My best friend is a ' +
          task4Object.friend,
      );
    });
  });

  describe('Task 5 - calculateSum', function () {
    const sumCalc = (arr) => {
      return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    };

    it('should calculate the sum correctly', () => {
      const arr = chance.unique(chance.integer, 5, { min: 0, max: 100 });
      let sum = 0;

      // Mocking the callback to calculate the sum
      const cb = (result) => {
        sum = result;
      };

      calculateSum(arr, cb);

      expect(sum).to.equal(
        sumCalc(arr),
        `Sum is not correct if array is [${arr.join(', ')}]`,
      ); // The sum of [1, 2, 3, 4, 5] is 15
    });

    it('should handle an empty array', () => {
      const arr = [];
      let sum;

      const cb = (result) => {
        if (!sum) {
          sum = 0;
        }
        sum = result;
      };

      calculateSum(arr, cb);

      expect(sum).to.equal(0); // The sum of an empty array should be 0
    });

    it('should correctly handle negative numbers', function () {
      const arr = chance.unique(chance.integer, 5, { min: -100, max: 0 });
      let sum = 0;

      // Mocking the callback to calculate the sum
      const cb = (result) => {
        sum = result;
      };

      calculateSum(arr, cb);

      expect(sum).to.equal(
        sumCalc(arr),
        `Sum is not correct if array is [${arr.join(', ')}]`,
      ); // The sum of [1, 2, 3, 4, 5] is 15
    });
  });

  describe('Task 6 - countdown', function () {
    it('should call the callback function when duration is less than 0', function () {
      const cb = sinon.spy();

      countdown(-1, cb);

      expect(cb.calledOnce, 'Callback was called more than 1 time').to.be.true;
    });

    it('should call the callback function when duration is equal to 0', function () {
      const cb = sinon.spy();

      countdown(0, cb);

      expect(cb.calledOnce, 'Callback was called more than 1 time').to.be.true;
    });

    it('should print the numbers from 0 to 3 if duration is 3', function () {
      const cb = sinon.spy();
      const consoleSpy = sinon.spy(console, 'log');

      countdown(3, cb);

      expect(
        consoleSpy.callCount,
        'Number of console.logs is not correct',
      ).to.equal(4);

      expect(
        consoleSpy.firstCall.calledWithExactly(0),
        'First console.log is not correct',
      ).to.be.true;

      expect(
        consoleSpy.secondCall.calledWithExactly(1),
        'Second console.log is not correct',
      ).to.be.true;

      expect(
        consoleSpy.thirdCall.calledWithExactly(2),
        'Third console.log is not correct',
      ).to.be.true;

      expect(
        consoleSpy.lastCall.calledWithExactly(3),
        'Last console.log is not correct',
      ).to.be.true;

      consoleSpy.restore();
    });
  });
});
