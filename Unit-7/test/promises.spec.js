const { expect } = require('chai');
const {
  promiseResolve,
  promiseReject,
  fullPromise,
  task4Func,
  task5Func,
  task6Func,
} = require('../1_promises');

describe('Unit 7 - Easy - Promises:', () => {
  describe('Task 1 - promise resolved', () => {
    it('Verify a promise will be resolved', async () => {
      expect(await promiseResolve()).to.equal('Resolved!');
    });
  });

  describe('Task 2 - promise rejected', () => {
    it('Verify a promise will be rejected', async () => {
      await promiseReject().then(
        () => assert.fail('Promise was not Rejected!'),
        (err) => expect(err).to.equal('Rejected!'),
      );
    });
  });

  describe('Task 3 - promise resolved or rejected', () => {
    it('Verify fullPromise will be \'Resolved!\' if param is true', async () => {
      expect(await fullPromise(true)).to.equal('Resolved!');
    });
    it('Verify fullPromise will be \'Rejected!\' if param is false', async () => {
      await fullPromise(false).then(
        () => assert.fail('Promise was not Rejected!'),
        (err) => expect(err).to.equal('Rejected!'),
      );
    });
  });

  describe('Task 4 - promise1 resolved', () => {
    it('Verify task4Func will return correct string', async () => {
      expect(await task4Func()).to.equal('Promise1 was resolved successfully');
    }).timeout(30000);
  });
});

describe('Unit 7 - Normal - Promises:', () => {
  describe('Task 5 - chain of promises', () => {
    it('Verify task5Func will return correct string', async () => {
      expect(await task5Func()).to.equal(
        'Promise1 and Promise2 - successfully resolved',
      );
    }).timeout(40000);
  });

  describe('Task 6 - resolving several promises at a time', () => {
    it('Verify task5Func will return correct string', async () => {
      expect(await task6Func()).have.members(['Promise1', 'Promise2']);
    }).timeout(21000);
  });
});
