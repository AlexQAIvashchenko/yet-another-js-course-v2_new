const { expect } = require('chai');

try {
  ({
    task1Func,
  } = require('../../3-optional-hard/functions'));
} catch (err) {
  console.error(
    '\x1b[41m',
    'Error importing functions. Ensure all functions are implemented in 3-optional-hard/functions.js file.',
  );
}

describe('Unit 3 - Optional - Hard - Functions:', () => {
  describe('Task 1 - Final price with discount', () => {
    [
      { discount: 10, price: 100 },
      { discount: 15, price: 200 },
      { discount: 25, price: 800 },
    ].forEach((el) => {
      it(`Verifying task1Func calculates correct price if price=${el.price} and discount=${el.discount}`, () => {
        expect(task1Func(el.discount)(el.price)).to.equal(
          el.price - el.price * (el.discount / 100),
        );
      });
    });
  });
});
