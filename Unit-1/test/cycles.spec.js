const { expect } = require('chai');
const cycles = require('../3_cycles');

const calculateSum = (x, y) => {
  let res = 0;
  for (let i = x; i <= y; i++) {
    res += i;
  }
  return res;
};

let task1ExpRes = calculateSum(0, 10);
let task2ExpRes = calculateSum(cycles.task2x, cycles.task2y);

describe('Unit 2 - Easy - Cycles:', () => {
  describe('Task 1 - sum from 0 to 10', () => {
    it('Verifying task1For variable', () => {
      expect(cycles.task1For).to.equal(task1ExpRes);
    });
    it('Verifying task1while variable', () => {
      expect(cycles.task1while).to.equal(task1ExpRes);
    });
    it('Verifying task1Do variable', () => {
      expect(cycles.task1Do).to.equal(task1ExpRes);
    });
  });

  describe('Task 2 - sum from task2x to task2y', () => {
    it('Verifying task2Res variable', () => {
      expect(cycles.task2Res).to.equal(task2ExpRes);
    });
  });

  describe('Task 3 - string from an array of letters', () => {
    it('Verifying task3Res variable', () => {
      expect(cycles.task3Res).to.equal(cycles.task3Array.join(''));
    });
  });

  describe('Task 4 - calculate a total income', () => {
    it('Verifying task4TotalIncome variable', () => {
      let res = 0;
      for (let k in cycles.task4personIncomes) {
        res += cycles.task4personIncomes[k];
      }
      expect(cycles.task4TotalIncome).to.equal(res);
    });
  });
});

describe('Unit 2 - Normal - Cycles:', () => {
  describe('Task 5 - factorial', () => {
    let res = 1;
    for (let i = 1; i <= cycles.task5n; i++) {
      res *= i;
    }
    it('Verifying task5ForFactorial variable', () => {
      expect(cycles.task5ForFactorial).to.equal(res);
    });
    it('Verifying task5WhileFactorial variable', () => {
      expect(cycles.task5WhileFactorial).to.equal(res);
    });
    it('Verifying task5DoFactorial variable', () => {
      expect(cycles.task5DoFactorial).to.equal(res);
    });
  });

  describe('Task 6 - string of every second letter from an array', () => {
    it('Verifying task6Res variable', () => {
      let res = '';
      for (let i = 1; i < cycles.task6Array.length; i = i + 2) {
        res = res + cycles.task6Array[i];
      }
      expect(cycles.task6Res).to.equal(res);
    });
  });

  describe('Task 7 - string of every second letter from an array from the end', () => {
    it('Verifying task7Res variable', () => {
      let res = '';
      for (let i = cycles.task7Array.length - 2; i >= 0; i = i - 2) {
        res = res + cycles.task7Array[i];
      }
      expect(cycles.task7Res).to.equal(res);
    });
  });

  describe('Task 8 - Calculate sum of even numbers', () => {
    it('Verifying task8Res variable', () => {
      let res = 0;
      for (let i = 0; i < cycles.task8Array.length; i++) {
        if (cycles.task8Array[i] % 2 === 0) {
          res += cycles.task8Array[i];
        }
      }
      expect(cycles.task8Res).to.equal(res);
    });
  });
});
