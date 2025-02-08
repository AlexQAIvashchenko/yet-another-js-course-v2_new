const { expect } = require('chai');
const {
  promiseResolve,
  promiseReject,
  fullPromise,
  task1Func,
  delayedGreetingPromise,
} = require('../../1-mandatory-easy/2_promises');

describe('Unit 5 - Mandatory - Promises:', () => {
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

  describe('Task 3 - delayedGreetingPromise', () => {
    it('should return a promise', function () {
      const result = delayedGreetingPromise('Alice');
      expect(result).to.be.a('promise');
    });

    it('should resolve with the correct greeting message after 1 second', async function () {
      this.timeout(1500); // Extend timeout to accommodate setTimeout

      return delayedGreetingPromise('Alice').then((result) => {
        expect(result).to.equal('Hello, Alice!');
      });
    });

    it('should delay execution for exactly 1 second', async function () {
      this.timeout(2000); // Allow extra time for test completion

      const startTime = Date.now();
      return delayedGreetingPromise('Alice').then(() => {
        const endTime = Date.now();
        const elapsedTime = endTime - startTime;

        expect(elapsedTime).to.be.within(900, 1100); // Allow small variations
      });
    });
  });

  describe('Task 4 - Promise resolved or rejected', () => {
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

  describe('Task 5 - task1Func promise resolved', () => {
    it('Verify task1Func will return correct string', async () => {
      expect(await task1Func()).to.equal('Promise1 was resolved successfully');
    }).timeout(30000);
  });
});
