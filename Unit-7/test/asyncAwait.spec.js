const { expect } = require('chai');
const {
  asyncPromiseResolve,
  asyncPromiseReject,
  asyncPromiseAll,
} = require('../2_asyncAwait');

describe('Unit 7 - Easy - Async-Await:', () => {
  describe('Task 1 - promise resolved with async await', () => {
    it('Verify a promise will be resolved', async () => {
      expect(await asyncPromiseResolve()).to.equal(
        'Resolved! was resolved with async await!',
      );
    });
  });

  describe('Task 2 - resolving several promises with async await', () => {
    it('Verify asyncPromiseAll will return correct string', async () => {
      expect(await asyncPromiseAll()).have.members(['Promise1', 'Promise2']);
    }).timeout(40000);
  });
});

describe('Unit 7 - Normal - Async-Await:', () => {
  describe('Task 3 - handle rejected promise', () => {
    it('Verify asyncPromiseReject will return correct string', async () => {
      expect(await asyncPromiseReject()).to.equal(
        'Rejected! was handled and result returned',
      );
    }).timeout(40000);
  });
});
