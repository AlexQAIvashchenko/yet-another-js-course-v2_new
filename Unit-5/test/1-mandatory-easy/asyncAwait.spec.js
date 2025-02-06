const { expect } = require('chai');
const { asyncPromiseResolve, asyncPromiseAll } = require('../../1-mandatory-easy/3_asyncAwait');

describe('Unit 6 - Mandatory - Async-Await:', () => {
  describe('Task 1 - Promise resolved with async await', () => {
    it('Verify a promise will be resolved', async () => {
      expect(await asyncPromiseResolve()).to.equal('Resolved! was resolved with async await!');
    });
  });

  describe('Task 2 - Resolving several promises with async await', () => {
    it('Verify asyncPromiseAll will return correct string', async () => {
      expect(await asyncPromiseAll()).have.members(['Promise1', 'Promise2']);
    }).timeout(40_000);
  });
});
