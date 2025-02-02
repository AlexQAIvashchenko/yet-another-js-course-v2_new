const { expect } = require('chai');
const sinon = require('sinon');
const {
  delayedGreeting,
  countdown,
  greetWithDelay,
} = require('../callbacks');

describe('Unit 6 - Easy - Callbacks:', () => {
  describe('Task 1 - delayedGreeting', function () {
    it('should call the callback with the delayed greeting', function (done) {
      const name = 'Alice';
      const callback = sinon.spy();

      delayedGreeting(name, callback);

      setTimeout(function () {
        expect(
          callback.calledOnce,
          'Callback was called more than 1 time',
        ).to.be.true;
        expect(
          callback.calledWithExactly(`Hello, ${name}!`),
          `Callback was not called with text "Hello, ${name}!"`,
        ).to.be.true;
        done();
      }, 1000);
    });
  });
});

describe('Unit 6 - Normal - Callbacks:', () => {
  describe('Task 2 - greetWithDelay', function () {
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

      expect(callback.calledOnce, 'Callback was called more than 1 time').to.be
        .true;
      expect(
        callback.calledWithExactly('John', 'Welcome to the callbacks.'),
        'Callback was not correctly. Should be cb(name, greetingMessage)',
      ).to.be.true;
    });
  });
});

describe('Unit 6 - Hard - Callbacks:', () => {
  describe('Task 3 - countdown', function () {
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

      expect(callback.calledOnce, 'Callback was called more than 1 time').to.be
        .true;
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
