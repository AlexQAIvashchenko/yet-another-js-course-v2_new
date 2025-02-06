const { expect } = require('chai');
const {
  promiseResolve,
  promiseReject,
  fullPromise,
  task1Func,
} = require('../../1-mandatory-easy/2_promises');

describe('Unit 6 - Mandatory - Promises:', () => {
  describe('Task 1 - Promise resolved', () => {
    it('Verify a promise will be resolved', async () => {
      expect(await promiseResolve()).to.equal('Resolved!');
    });
  });

  describe('Task 2 - Promise rejected', () => {
    it('Verify a promise will be rejected', async () => {
      await promiseReject().then(
        () => assert.fail('Promise was not Rejected!'),
        (err) => expect(err).to.equal('Rejected!'),
      );
    });
  });

  describe('Task 3 - Promise resolved or rejected', () => {
    it('Verify fullPromise will be "Resolved!" if param is true', async () => {
      expect(await fullPromise(true)).to.equal('Resolved!');
    });

    it('Verify fullPromise will be "Rejected!" if param is false', async () => {
      await fullPromise(false).then(
        () => assert.fail('Promise was not Rejected!'),
        (err) => expect(err).to.equal('Rejected!'),
      );
    });
  });

  describe('Task 4 - task1Func promise resolved', () => {
    it('Verify task1Func will return correct string', async () => {
      expect(await task1Func()).to.equal('Promise1 was resolved successfully');
    }).timeout(30000);
  });
});
