const { expect } = require('chai');
const sinon = require('sinon');
const { task1Func, greetWithDelayPromise, task2Func } = require('../../2-optional-medium/2_promises');

describe('Unit 5 - Optional - Medium - Promises:', () => {
  describe('Task 1 - Chain of promises', () => {
    it('Verify task1Func will return correct string', async () => {
      expect(await task1Func()).to.equal('Promise1 and Promise2 - successfully resolved');
    }).timeout(40_000);
  });

  describe('Task 2 - greetWithDelayPromise', () => {
    let spy;

    beforeEach(function () {
      spy = sinon.spy(console, 'log');
    });

    afterEach(function () {
      spy.restore();
    });

    it('should return a promise', function () {
      const result = greetWithDelayPromise('Bob', 1);
      expect(result).to.be.a('promise');
    });

    it('should log "Hello, Alice!" and return "Welcome to the promises chains."', async function () {
      this.timeout(6000); // Extend timeout to accommodate async delay

      const result = await greetWithDelayPromise('Alice', 2);

      expect(spy.calledWith('Hello, Alice!')).to.be.true;
      expect(result).to.equal('Welcome to the promises chains.');
    });

    it('should delay execution for the specified time', async function () {
      this.timeout(7000); // Allow enough time for the test

      const delayInSeconds = 3;
      const startTime = Date.now();

      await greetWithDelayPromise('Charlie', delayInSeconds);

      const endTime = Date.now();
      const elapsedTime = (endTime - startTime) / 1000; // Convert to seconds

      expect(elapsedTime).to.be.within(delayInSeconds - 0.1, delayInSeconds + 0.1); // Allow small variations
    });
  });

  describe('Task 3 - Resolving several promises at a time', () => {
    it('Verify task2Func will return correct string', async () => {
      expect(await task2Func()).have.members(['Promise1', 'Promise2']);
    }).timeout(21_000);
  });
});
