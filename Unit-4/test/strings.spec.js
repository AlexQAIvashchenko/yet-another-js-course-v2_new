const { expect } = require('chai');
const {
  task1Func,
  task2Func,
  task3Func,
  task4Func,
  task5Func,
  task6Func,
  task7Func,
  task8Func,
  task9Func,
} = require('../strings');

describe('Unit 4 - Easy - Strings:', () => {
  describe('Task 1 - string contains another string', () => {
    it('Verifying task1Func result if substring is present', () => {
      expect(task1Func('test', 'es')).to.equal(true);
    });
    it('Verifying task1Func result if substring is not present', () => {
      expect(task1Func('test', 'blabla')).to.equal(false);
    });
  });

  describe('Task 2 - index of substring', () => {
    it('Verifying task2Func result if substring is present', () => {
      expect(task2Func('test', 'es')).to.equal(1);
    });
    it('Verifying task2Func result if substring is not present', () => {
      expect(task2Func('test', 'blabla')).to.equal(-1);
    });
  });

  describe('Task 3 - replace string', () => {
    it('Verifying task3Func result if substring is present', () => {
      expect(task3Func('test', 'es')).to.equal(
        'tAh-a-ha-ha. Changing a part of the stringt',
      );
    });
    it('Verifying task3Func result if substring is not present', () => {
      expect(task3Func('test', 'blabla')).to.equal('test');
    });
  });

  describe('Task 4 - remove spaces', () => {
    it('Verifying task4Func result if string contains spaces and one word', () => {
      expect(task4Func('  test ')).to.equal('test');
    });
    it('Verifying task2Func result if string contains spaces and several words', () => {
      expect(task4Func(' test test  some text   ')).to.equal(
        'test test  some text',
      );
    });
    it('Verifying task2Func result if there are no spaces', () => {
      expect(task4Func('')).to.equal('STRING IS EMPTY');
    });
    it('Verifying task2Func result if there are no text', () => {
      expect(task4Func('    ')).to.equal('STRING IS EMPTY');
    });
  });
});

describe('Unit 4 - Normal - Strings:', () => {
  describe('Task 5 - reverse', () => {
    [
      { str: 'abcd', exp: 'dcba' },
      { str: 123, exp: 'This is not a string!' },
      { str: {}, exp: 'This is not a string!' },
      { str: null, exp: 'This is not a string!' },
    ].forEach((el) => {
      it(`Verifying task5Func result if param = ${el.str}`, () => {
        expect(task5Func(el.str)).to.equal(el.exp);
      });
    });
  });

  describe('Task 6 - get century', () => {
    [
      { year: 1928, exp: 20 },
      { year: 192, exp: 2 },
      { year: 100, exp: 1 },
      { year: 22, exp: 1 },
      { year: 2, exp: 1 },
    ].forEach((el) => {
      it(`Verifying task6Func result if param = ${el.year}`, () => {
        expect(task6Func(el.year)).to.equal(el.exp);
      });
    });
  });

  describe('Task 7 - number of entries', () => {
    [
      { str: 'GoOoogle', letter: 'o', exp: 4 },
      { str: '', letter: 'l', exp: 0 },
      { str: 'google', letter: 'L', exp: 1 },
      { str: 'THIS is My Text. iTs perfect', letter: 'I', exp: 3 },
    ].forEach((el) => {
      it(`Verifying task7Func result if param str='${el.str}' and letter='${el.letter}'`, () => {
        expect(task7Func(el.str, el.letter)).to.equal(el.exp);
      });
    });
  });

  describe('Task 8 - confidential information', () => {
    [
      {
        str: 'MR.[MY NAME iS 8765] made me do it',
        exp: 'MR.[----] made me do it',
      },
      { str: 'No confidential info here', exp: 'No confidential info here' },
    ].forEach((el) => {
      it(`Verifying task8Func result if param = '${el.str}'`, () => {
        expect(task8Func(el.str)).to.equal(el.exp);
      });
    });
  });

  describe('Task 9 - reduce string length', () => {
    [
      { str: 'Hello World!!!', length: 6, exp: 'Hello ...' },
      { str: 'Bye', length: 3, exp: 'Bye' },
      { str: 'Bye', length: 2, exp: 'By...' },
      { str: 'Bye123', length: 4, exp: 'Bye1...' },
      { str: 'Oh My!', length: 0, exp: '...' },
    ].forEach((el) => {
      it(`Verifying task9Func result if param='${el.str}' and length=${el.length}`, () => {
        expect(task9Func(el.str, el.length)).to.equal(el.exp);
      });
    });
  });
});
