const { expect } = require('chai');
const sinon = require('sinon');
const { countdown } = require('../../3-optional-hard/callbacks');

describe('Unit 5 - Optional - Hard - Callbacks:', () => {
  describe('Task 1 - countdown', function () {
    let clock;

    beforeEach(function () {
      clock = sinon.useFakeTimers();
    });

    afterEach(function () {
      clock.restore();
    });

    it('should call the callback function after the countdown finishes', function (done) {
      const callback = sinon.spy();

      countdown(5, callback);

      // Fast-forward the timers by 5 seconds
      clock.tick(6000);

      expect(callback.calledOnce, 'Callback was called more than 1 time').to.be.true;
      done();
    });

    it('should log the correct number of seconds at each interval', function () {
      const callback = sinon.spy();
      const consoleSpy = sinon.spy(console, 'log');

      countdown(3, callback);

      // Fast-forward the timers by 3 seconds
      clock.tick(4000);

      expect(
        consoleSpy.callCount,
        'Console.log was not called correct amount of times',
      ).to.equal(4);

      expect(
        consoleSpy.getCall(0).calledWithExactly(3),
        'First console.log is not correct. Should be 3',
      ).to.be.true;

      expect(
        consoleSpy.getCall(1).calledWithExactly(2),
        'Second console.log is not correct. Should be 2',
      ).to.be.true;

      expect(
        consoleSpy.getCall(2).calledWithExactly(1),
        'Third console.log is not correct. Should be 1',
      ).to.be.true;

      expect(
        consoleSpy.lastCall.calledWithExactly(0),
        'Last console.log is not correct. Should be 0',
      ).to.be.true;

      consoleSpy.restore();
    });
  });
});
