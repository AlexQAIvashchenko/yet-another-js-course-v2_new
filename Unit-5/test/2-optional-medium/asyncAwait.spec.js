const { expect } = require('chai');
const sinon = require('sinon');
const { asyncPromiseReject, asyncGreetWithDelayPromise } = require('../../2-optional-medium/3_asyncAwait');

describe('Unit 5 - Optional - Medium - Async-Await:', () => {
  describe('Task 1 - Handle rejected promise', () => {
    it('Verify asyncPromiseReject will return correct string', async () => {
      expect(await asyncPromiseReject()).to.equal('Rejected! was handled and result returned');
    }).timeout(40000);
  });

  describe('Task 2 - asyncGreetWithDelayPromise', () => {
    let spy;

    beforeEach(function () {
      spy = sinon.spy(console, 'log'); // Spy on console.log
    });

    afterEach(function () {
      spy.restore(); // Restore console.log after each test
    });

    it('should return a promise', function () {
      const result = asyncGreetWithDelayPromise('Bob', 1);
      expect(result).to.be.a('promise'); // Check that the function returns a promise
    });

    it('should call greetWithDelayPromise and log the correct messages', async function () {
      this.timeout(12000); // Extend timeout to accommodate async delay

      await asyncGreetWithDelayPromise('Alice', 2);

      expect(spy.calledWith('Hello, Alice!')).to.be.true;
      expect(spy.calledWith('Welcome to the promises chains.')).to.be.true;
    });

    it('should delay execution for the specified time', async function () {
      this.timeout(7000); // Allow enough time for the test

      const delayInSeconds = 3;
      const startTime = Date.now();

      await asyncGreetWithDelayPromise('Charlie', delayInSeconds);

      const endTime = Date.now();
      const elapsedTime = (endTime - startTime) / 1000; // Convert to seconds

      expect(elapsedTime).to.be.within(delayInSeconds - 0.1, delayInSeconds + 0.1); // Allow small variations
    });
  });
});
