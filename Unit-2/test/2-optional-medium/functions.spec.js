const { expect } = require('chai');

try {
  ({
    task1Func,
    task2Func,
    task3Func,
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
    it('should return true when both numbers are greater than 5', () => {
      expect(task3Func(6, 7)).to.be.true;
      expect(task3Func(10, 15)).to.be.true;
    });

    it('should return true when both numbers are less than or equal to 5', () => {
      expect(task3Func(4, 5)).to.be.true;
      expect(task3Func(0, 3)).to.be.true;
      expect(task3Func(5, 5)).to.be.true;
    });

    it('should return false when one number is greater than 5 and the other is less than or equal to 5', () => {
      expect(task3Func(6, 4)).to.be.false;
      expect(task3Func(3, 8)).to.be.false;
      expect(task3Func(5, 6)).to.be.false;
    });
  });
});
