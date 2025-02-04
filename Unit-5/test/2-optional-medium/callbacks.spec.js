const { expect } = require('chai');
const sinon = require('sinon');
const { greetWithDelay } = require('../../2-optional-medium/callbacks');

describe('Unit 5 - Optional - Medium - Callbacks:', () => {
  describe('Task 1 - greetWithDelay', function () {
    let clock;

    beforeEach(function () {
      clock = sinon.useFakeTimers();
    });

    afterEach(function () {
      clock.restore();
    });

    it('should call the callback function with the correct arguments after the specified delay', function () {
      const callback = sinon.spy();

      greetWithDelay('John', 2, callback);

      // Fast-forward the timers by 2 seconds
      clock.tick(2000);

      expect(callback.calledOnce, 'Callback was called more than 1 time').to.be.true;
      expect(
        callback.calledWithExactly('John', 'Welcome to the callbacks.'),
        'Callback was not correctly. Should be cb(name, greetingMessage)',
      ).to.be.true;
    });
  });
});
