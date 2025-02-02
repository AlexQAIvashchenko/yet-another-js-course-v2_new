const { expect } = require('chai');
const loops = require('../../1-mandatory-easy/3_loops_mandatory');

const calculateSum = (x, y) => {
  let res = 0;
  for (let i = x; i <= y; i++) {
    res += i;
  }
  return res;
};

const task1ExpRes = calculateSum(0, 10);
const task2ExpRes = calculateSum(loops.task2x, loops.task2y);

describe('Unit 1 - Mandatory - Loops:', () => {
  describe('Task 1 - Sum from 0 to 10', () => {
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

  describe('Task 2 - Sum from task2x to task2y', () => {
    it('Verifying task2Res variable', () => {
      expect(loops.task2Res).to.equal(task2ExpRes);
    });
  });

  describe('Task 3 - String from an array of letters', () => {
    it('Verifying task3Res variable', () => {
      expect(loops.task3Res).to.equal(loops.task3Array.join(''));
    });
  });

  describe('Task 4 - Calculate a total income', () => {
    it('Verifying task4TotalIncome variable', () => {
      let res = 0;
      for (let k in loops.task4personIncomes) {
        res += loops.task4personIncomes[k];
      }
      expect(loops.task4TotalIncome).to.equal(res);
    });
  });
});
