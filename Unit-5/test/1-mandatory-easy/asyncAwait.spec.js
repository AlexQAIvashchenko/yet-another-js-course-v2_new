const { expect } = require('chai');
const sinon = require('sinon');
const {
  asyncPromiseResolve,
  asyncPromiseAll,
  asyncDelayedGreetingPromise,
} = require('../../1-mandatory-easy/3_asyncAwait');

describe('Unit 5 - Mandatory - Async-Await:', () => {
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

  describe('Task 3 - asyncDelayedGreetingPromise', () => {
    let spy;

    beforeEach(function () {
      spy = sinon.spy(console, 'log'); // spying on console.log
    });

    afterEach(function () {
      spy.restore();
    });

    it('should call someFuncWithParam with the correct greeting message', async function () {
      this.timeout(1500); // Extend timeout for async operations

      await asyncDelayedGreetingPromise('Alice');

      expect(spy.calledWith('Result = Hello, Alice!')).to.be.true;
    });

    it('should delay execution for approximately 1 second', async function () {
      this.timeout(2000); // Allow extra time for the test to complete

      const startTime = Date.now();
      await asyncDelayedGreetingPromise('Alice');
      const endTime = Date.now();

      const elapsedTime = endTime - startTime;

      expect(elapsedTime).to.be.within(900, 1100); // Allowing small variations due to execution timing
    });
  });
});
