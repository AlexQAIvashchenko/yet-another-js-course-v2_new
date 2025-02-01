const { expect } = require('chai');
const loops = require('../3_loops');

const calculateSum = (x, y) => {
  let res = 0;
  for (let i = x; i <= y; i++) {
    res += i;
  }
  return res;
};

let task1ExpRes = calculateSum(0, 10);
let task2ExpRes = calculateSum(loops.task2x, loops.task2y);

describe('Unit 2 - Easy - Loops:', () => {
  describe('Task 1 - sum from 0 to 10', () => {
    it('Verifying task1For variable', () => {
      expect(loops.task1For).to.equal(task1ExpRes);
    });
    it('Verifying task1while variable', () => {
      expect(loops.task1while).to.equal(task1ExpRes);
    });
    it('Verifying task1Do variable', () => {
      expect(loops.task1Do).to.equal(task1ExpRes);
    });
  });

  describe('Task 2 - sum from task2x to task2y', () => {
    it('Verifying task2Res variable', () => {
      expect(loops.task2Res).to.equal(task2ExpRes);
    });
  });

  describe('Task 3 - string from an array of letters', () => {
    it('Verifying task3Res variable', () => {
      expect(loops.task3Res).to.equal(loops.task3Array.join(''));
    });
  });

  describe('Task 4 - calculate a total income', () => {
    it('Verifying task4TotalIncome variable', () => {
      let res = 0;
      for (let k in loops.task4personIncomes) {
        res += loops.task4personIncomes[k];
      }
      expect(loops.task4TotalIncome).to.equal(res);
    });
  });
});

describe('Unit 2 - Normal - Loops:', () => {
  describe('Task 5 - factorial', () => {
    let res = 1;
    for (let i = 1; i <= loops.task5n; i++) {
      res *= i;
    }
    it('Verifying task5ForFactorial variable', () => {
      expect(loops.task5ForFactorial).to.equal(res);
    });
    it('Verifying task5WhileFactorial variable', () => {
      expect(loops.task5WhileFactorial).to.equal(res);
    });
    it('Verifying task5DoFactorial variable', () => {
      expect(loops.task5DoFactorial).to.equal(res);
    });
  });

  describe('Task 6 - string of every second letter from an array', () => {
    it('Verifying task6Res variable', () => {
      let res = '';
      for (let i = 1; i < loops.task6Array.length; i = i + 2) {
        res = res + loops.task6Array[i];
      }
      expect(loops.task6Res).to.equal(res);
    });
  });

  describe('Task 7 - string of every second letter from an array from the end', () => {
    it('Verifying task7Res variable', () => {
      let res = '';
      for (let i = loops.task7Array.length - 2; i >= 0; i = i - 2) {
        res = res + loops.task7Array[i];
      }
      expect(loops.task7Res).to.equal(res);
    });
  });

  describe('Task 8 - Calculate sum of even numbers', () => {
    it('Verifying task8Res variable', () => {
      let res = 0;
      for (let i = 0; i < loops.task8Array.length; i++) {
        if (loops.task8Array[i] % 2 === 0) {
          res += loops.task8Array[i];
        }
      }
      expect(loops.task8Res).to.equal(res);
    });
  });
});
