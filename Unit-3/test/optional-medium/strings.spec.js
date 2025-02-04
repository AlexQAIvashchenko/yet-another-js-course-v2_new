const { expect } = require('chai');
const {
  task1Func,
  task2Func,
  task3Func,
  task4Func,
  task5Func,
} = require('../../2-optional-medium/1_strings');

describe('Unit 3 - Optional - Medium - Strings:', () => {
  describe('Task 1 - Reverse', () => {
    [
      { str: 'abcd', exp: 'dcba' },
      { str: 123, exp: 'This is not a string!' },
      { str: {}, exp: 'This is not a string!' },
      { str: null, exp: 'This is not a string!' },
    ].forEach((el) => {
      it(`Verifying task1Func result if param = ${el.str}`, () => {
        expect(task1Func(el.str)).to.equal(el.exp);
      });
    });
  });

  describe('Task 2 - Get century', () => {
    [
      { year: 1928, exp: 20 },
      { year: 192, exp: 2 },
      { year: 100, exp: 1 },
      { year: 22, exp: 1 },
      { year: 2, exp: 1 },
    ].forEach((el) => {
      it(`Verifying task2Func result if param = ${el.year}`, () => {
        expect(task2Func(el.year)).to.equal(el.exp);
      });
    });
  });

  describe('Task 3 - Number of entries', () => {
    [
      { str: 'GoOoogle', letter: 'o', exp: 4 },
      { str: '', letter: 'l', exp: 0 },
      { str: 'google', letter: 'L', exp: 1 },
      { str: 'THIS is My Text. iTs perfect', letter: 'I', exp: 3 },
    ].forEach((el) => {
      it(`Verifying task3Func result if param str='${el.str}' and letter='${el.letter}'`, () => {
        expect(task3Func(el.str, el.letter)).to.equal(el.exp);
      });
    });
  });

  describe('Task 4 - Confidential information', () => {
    [
      {
        str: 'MR.[MY NAME iS 8765] made me do it',
        exp: 'MR.[----] made me do it',
      },
      {
        str: 'No confidential info here',
        exp: 'No confidential info here',
      },
    ].forEach((el) => {
      it(`Verifying task4Func result if param = '${el.str}'`, () => {
        expect(task4Func(el.str)).to.equal(el.exp);
      });
    });
  });

  describe('Task 5 - Reduce string length', () => {
    [
      { str: 'Hello World!!!', length: 6, exp: 'Hello ...' },
      { str: 'Bye', length: 3, exp: 'Bye' },
      { str: 'Bye', length: 2, exp: 'By...' },
      { str: 'Bye123', length: 4, exp: 'Bye1...' },
      { str: 'Oh My!', length: 0, exp: '...' },
    ].forEach((el) => {
      it(`Verifying task5Func result if param='${el.str}' and length=${el.length}`, () => {
        expect(task5Func(el.str, el.length)).to.equal(el.exp);
      });
    });
  });
});
