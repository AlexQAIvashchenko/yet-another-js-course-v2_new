const { expect } = require('chai');
const { task1Func, task2Func } = require('../../2-optional-medium/2_promises');

describe('Unit 7 - Optional - Medium - Promises:', () => {
  describe('Task 1 - Chain of promises', () => {
    it('Verify task1Func will return correct string', async () => {
      expect(await task1Func()).to.equal('Promise1 and Promise2 - successfully resolved');
    }).timeout(40_000);
  });

  describe('Task 2 - Resolving several promises at a time', () => {
    it('Verify task2Func will return correct string', async () => {
      expect(await task2Func()).have.members(['Promise1', 'Promise2']);
    }).timeout(21_000);
  });
});
