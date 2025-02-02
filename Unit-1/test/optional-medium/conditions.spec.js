const { expect } = require('chai');
const conditions = require('../../2-optional-medium/2_conditions_optional');

describe('Unit 1 - Optional - Medium - Conditions:', () => {
  describe('Task 1 - "operator" and 2 numbers', () => {
    it('Verifying task1 variable', () => {
      const ex = expect(conditions.task1);
      if (conditions.operator === 'add')
        ex.to.equal(conditions.num1 + conditions.num2);
      else if (conditions.operator === 'subtract')
        ex.to.equal(conditions.num1 - conditions.num2);
      else if (conditions.operator === 'multiply')
        ex.to.equal(conditions.num1 * conditions.num2);
      else if (conditions.operator === 'divide')
        ex.to.equal(conditions.num1 / conditions.num2);
      else throw new Error('operator is wrong');
    });
  });

  describe('Task 2 - Product discount', () => {
    it('Verifying task2 variable', () => {
      if (conditions.productPrice >= 1000) {
        expect(conditions.task2).to.equal(0.3);
      } else if (conditions.productPrice > 0) {
        expect(conditions.task2).to.equal(0.2);
      } else if (conditions.productPrice < 0) {
        expect(conditions.task2).to.equal(null);
      } else if (conditions.productPrice === 0) {
        expect(conditions.task2).to.equal(undefined);
      } else {
        throw new Error('productPrice is wrong');
      }
    });
  });

  describe('Task 3 - totalPrice discount', () => {
    it('Verifying task3 variable', () => {
      const ex = expect(conditions.task3);
      if (conditions.totalPrice - 351 < 0) ex.to.equal(conditions.totalPrice);
      else if (conditions.totalPrice - 1351 < 0)
        ex.to.equal(conditions.totalPrice * 0.15);
      else if (conditions.totalPrice - 2701 < 0)
        ex.to.equal(conditions.totalPrice * 0.3);
      else if (conditions.totalPrice - 6501 < 0)
        ex.to.equal(conditions.totalPrice * 0.45);
    });
  });

  describe('Task 4 - x1 > 100', () => {
    it('Verifying task4 variable', () => {
      if (conditions.x1 > 100) {
        expect(conditions.task4).to.equal('Greater than 100');
      } else if (conditions.x1 <= 100) {
        expect(conditions.task4).to.equal('Less than or equal 100');
      } else {
        throw new Error('x1 is wrong');
      }
    });
  });

  describe('Task 5 - Combination of logical operators', () => {
    it('Verifying task5 variable', () => {
      const expRes =
        (conditions.a > 5 && conditions.b > 5) ||
        (conditions.a <= 5 && conditions.b <= 5);
      expect(conditions.task5, 'task5 value is not correct').to.equal(expRes);
    });
  });
});
