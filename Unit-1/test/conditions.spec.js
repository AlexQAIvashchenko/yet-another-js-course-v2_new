const { expect } = require('chai');
const conditions = require('../2_conditions_mandatory');

const verifyTask3_4 = (task) => {
  if (conditions.y3 < 10) {
    expect(task).to.equal(conditions.x3 + conditions.y3);
  } else if (conditions.y3 > 10) {
    expect(task).to.equal(conditions.x3 * conditions.y3);
  } else throw new Error('y3 is wrong');
};

describe('Unit 2 - Easy - Conditions:', () => {
  describe('Task 1 - x1 > 100', () => {
    it('Verifying task1 variable', () => {
      if (conditions.x1 > 100) {
        expect(conditions.task1).to.equal('Greater than 100');
      } else if (conditions.x1 <= 100) {
        expect(conditions.task1).to.equal('Less than or equal 100');
      } else {
        throw new Error('x1 is wrong');
      }
    });
  });

  describe('Task 2 - -50 > x2 > 50', () => {
    it('Verifying task2 variable', () => {
      if (conditions.x2 >= 50) {
        expect(conditions.task2).to.equal('Greater than or equal to 50');
      } else if (conditions.x2 > -50) {
        expect(conditions.task2).to.equal('In range between -50 to 50');
      } else if (conditions.x2 <= -50) {
        expect(conditions.task2).to.equal('Less than -50');
      } else {
        throw new Error('x2 is wrong');
      }
    });
  });

  describe('Task 3 - y3 < 10', () => {
    it('Verifying task3 variable', () => {
      verifyTask3_4(conditions.task3);
    });
  });

  describe('Task 9 - Logical NOT', () => {
    it('Verifying task9 variable', () => {
      expect(conditions.task9, 'task9 value is not correct').to.equal(
        !conditions.someVar,
      );
    });
  });

  describe('Task 10 - Logical operators', () => {
    it('Verifying task10 variable', () => {
      expect(conditions.task10, 'task10 value is not correct').to.equal(true);
    });
  });
});

describe('Unit 2 - Normal - Conditions:', () => {
  describe('Task 4 - y3 < 10 - ternary', () => {
    it('Verifying task4 variable', () => {
      verifyTask3_4(conditions.task4);
    });
  });

  describe('Task 5 - "operator" and 2 numbers', () => {
    it('Verifying task5 variable', () => {
      const ex = expect(conditions.task5);
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

  describe('Task 6 - product discount', () => {
    it('Verifying task6 variable', () => {
      if (conditions.productPrice >= 1000) {
        expect(conditions.task6).to.equal(0.3);
      } else if (conditions.productPrice > 0) {
        expect(conditions.task6).to.equal(0.2);
      } else if (conditions.productPrice < 0) {
        expect(conditions.task6).to.equal(null);
      } else if (conditions.productPrice === 0) {
        expect(conditions.task6).to.equal(undefined);
      } else {
        throw new Error('productPrice is wrong');
      }
    });
  });

  describe('Task 7 - totalPrice discount', () => {
    it('Verifying task7 variable', () => {
      const ex = expect(conditions.task7);
      if (conditions.totalPrice - 351 < 0) ex.to.equal(conditions.totalPrice);
      else if (conditions.totalPrice - 1351 < 0)
        ex.to.equal(conditions.totalPrice * 0.15);
      else if (conditions.totalPrice - 2701 < 0)
        ex.to.equal(conditions.totalPrice * 0.3);
      else if (conditions.totalPrice - 6501 < 0)
        ex.to.equal(conditions.totalPrice * 0.45);
    });
  });

  describe('Task 8 - x1 > 100', () => {
    it('Verifying task1 variable', () => {
      if (conditions.x1 > 100) {
        expect(conditions.task8).to.equal('Greater than 100');
      } else if (conditions.x1 <= 100) {
        expect(conditions.task8).to.equal('Less than or equal 100');
      } else {
        throw new Error('x1 is wrong');
      }
    });
  });

  describe('Task 11 - Combination of logical operators', () => {
    it('Verifying task11 variable', () => {
      const expRes =
        (conditions.a > 5 && conditions.b > 5) ||
        (conditions.a <= 5 && conditions.b <= 5);
      expect(conditions.task11, 'task11 value is not correct').to.equal(expRes);
    });
  });
});
