const { expect } = require('chai');
const {
  task1Func,
  task2Func,
  task3Func,
  task4Func,
} = require('../../1-mandatory-easy/1_strings');

describe('Unit 3 - Mandatory - Strings:', () => {
  describe('Task 1 - String contains another string', () => {
    it('Verifying task1Func result if substring is present', () => {
      expect(task1Func('test', 'es')).to.equal(true);
    });

    it('Verifying task1Func result if substring is not present', () => {
      expect(task1Func('test', 'blabla')).to.equal(false);
    });
  });

  describe('Task 2 - Index of substring', () => {
    it('Verifying task2Func result if substring is present', () => {
      expect(task2Func('test', 'es')).to.equal(1);
    });

    it('Verifying task2Func result if substring is not present', () => {
      expect(task2Func('test', 'blabla')).to.equal(-1);
    });
  });

  describe('Task 3 - Replace string', () => {
    it('Verifying task3Func result if substring is present', () => {
      expect(task3Func('test', 'es')).to.equal('tAh-a-ha-ha. Changing a part of the stringt');
    });

    it('Verifying task3Func result if substring is not present', () => {
      expect(task3Func('test', 'blabla')).to.equal('test');
    });
  });

  describe('Task 4 - Remove spaces', () => {
    it('Verifying task4Func result if string contains spaces and one word', () => {
      expect(task4Func('  test ')).to.equal('test');
    });

    it('Verifying task2Func result if string contains spaces and several words', () => {
      expect(task4Func(' test test  some text   ')).to.equal('test test  some text');
    });

    it('Verifying task2Func result if there are no spaces', () => {
      expect(task4Func('')).to.equal('STRING IS EMPTY');
    });

    it('Verifying task2Func result if there are no text', () => {
      expect(task4Func('    ')).to.equal('STRING IS EMPTY');
    });
  });
});
