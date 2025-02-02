const { expect } = require('chai');
const loops = require('../../2-optional-medium/3_loops_optional');

describe('Unit 1 - Optional - Medium - Loops:', () => {
  describe('Task 1 - Factorial', () => {
    let res = 1;

    for (let i = 1; i <= loops.task1n; i++) {
      res *= i;
    }

    it('Verifying task1ForFactorial variable', () => {
      expect(loops.task1ForFactorial).to.equal(res);
    });

    it('Verifying task1WhileFactorial variable', () => {
      expect(loops.task1WhileFactorial).to.equal(res);
    });

    it('Verifying task1DoFactorial variable', () => {
      expect(loops.task1DoFactorial).to.equal(res);
    });
  });

  describe('Task 2 - String of every second letter from an array', () => {
    it('Verifying task2Res variable', () => {
      let res = '';

      for (let i = 1; i < loops.task2Array.length; i = i + 2) {
        res = res + loops.task2Array[i];
      }

      expect(loops.task2Res).to.equal(res);
    });
  });

  describe('Task 3 - String of every second letter from an array from the end', () => {
    it('Verifying task3Res variable', () => {
      let res = '';

      for (let i = loops.task3Array.length - 2; i >= 0; i = i - 2) {
        res = res + loops.task3Array[i];
      }

      expect(loops.task3Res).to.equal(res);
    });
  });

  describe('Task 4 - Calculate sum of even numbers', () => {
    it('Verifying task4Res variable', () => {
      let res = 0;

      for (let i = 0; i < loops.task4Array.length; i++) {
        if (loops.task4Array[i] % 2 === 0) {
          res += loops.task4Array[i];
        }
      }

      expect(loops.task4Res).to.equal(res);
    });
  });
});
