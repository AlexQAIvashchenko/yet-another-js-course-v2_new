const { expect } = require('chai');
const sinon = require('sinon');
const { delayedGreeting } = require('../../1-mandatory-easy/callbacks');

describe('Unit 5 - Mandatory - Callbacks:', () => {
  describe('Task 1 - delayedGreeting', function () {
    it('should call the callback with the delayed greeting', function (done) {
      const name = 'Alice';
      const callback = sinon.spy();

      delayedGreeting(name, callback);

      setTimeout(function () {
        expect(callback.calledOnce, 'Callback was called more than 1 time').to.be.true;

        expect(
          callback.calledWithExactly(`Hello, ${name}!`),
          `Callback was not called with text "Hello, ${name}!"`,
        ).to.be.true;

        done();
      }, 1000);
    });
  });
});
