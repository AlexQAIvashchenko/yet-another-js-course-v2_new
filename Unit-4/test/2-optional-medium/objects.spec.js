const { expect } = require('chai');
const { task1Func } = require('../../2-optional-medium/1_objects');

describe('Unit 4 - Optional - Medium - Objects:', () => {
  describe('Task 1 - List `Number` properties', () => {
    [
      { obj: { a: 1, b: 2, c: 3 }, exp: ['a', 'b', 'c'] },
      { obj: { a: 'text', b: 4 }, exp: ['b'] },
      { obj: { a: 'ROBOT', batteryLevel: true }, exp: [] },
    ].forEach((el) => {
      it(`Verify task1Func result is [${el.exp}] for object = ${JSON.stringify(el.obj)}`, () => {
        expect(task1Func(el.obj)).to.deep.equal(el.exp);
      });
    });
  });
});
