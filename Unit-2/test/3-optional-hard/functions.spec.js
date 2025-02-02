const { expect } = require('chai');
const sinon = require('sinon');

try {
  ({
    task1Object,
    task2Func,
  } = require('../../3-optional-hard/functions'));
} catch (err) {
  console.error(
    '\x1b[41m',
    'Error importing functions. Ensure all functions are implemented in 3-optional-hard/functions.js file.',
  );
}

describe('Unit 3 - Optional - Hard - Functions:', () => {
  describe('Task 1 - Methods inside the given object', () => {
    it('Verifying task1Object can print object keys', () => {
      const expectedKeys = [
        'name',
        'lastName',
        'age',
        'friend',
        'keys',
        'call',
      ];
      const consoleLogSpy = sinon.spy(console, 'log');
      task1Object.keys();
      consoleLogSpy.restore();
      const calls = consoleLogSpy.getCalls().map((call) => call.args[0]);
      expect(calls).to.deep.equal(expectedKeys);
    });

    it('Verifying task1Object can return the string', () => {
      expect(task1Object.call()).to.equal(
        'My name is ' +
          task1Object.name +
          ' ' +
          task1Object.lastName +
          ', and I am ' +
          task1Object.age +
          ' years old. My best friend is a ' +
          task1Object.friend,
      );
    });
  });

  describe('Task 2 - Final price with discount', () => {
    [
      { discount: 10, price: 100 },
      { discount: 15, price: 200 },
      { discount: 25, price: 800 },
    ].forEach((el) => {
      it(`Verifying task2Func calculates correct price if price=${el.price} and discount=${el.discount}`, () => {
        expect(task2Func(el.discount)(el.price)).to.equal(
          el.price - el.price * (el.discount / 100),
        );
      });
    });
  });
});
