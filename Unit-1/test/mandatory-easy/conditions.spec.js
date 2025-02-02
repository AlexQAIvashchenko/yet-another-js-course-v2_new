const { expect } = require('chai');
const conditions = require('../../1-mandatory-easy/2_conditions_mandatory');

const verifyTask3_4 = (task) => {
  if (conditions.y3 < 10) {
    expect(task).to.equal(conditions.x3 + conditions.y3);
  } else if (conditions.y3 > 10) {
    expect(task).to.equal(conditions.x3 * conditions.y3);
  } else throw new Error('y3 is wrong');
};

describe('Unit 1 - Mandatory - Conditions:', () => {
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

  describe('Task 4 - y3 < 10', () => {
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

  describe('Task 6 - Logical NOT', () => {
    it('Verifying task6 variable', () => {
      expect(conditions.task6, 'task6 value is not correct').to.equal(
        !conditions.someVar,
      );
    });
  });

  describe('Task 7 - Logical operators', () => {
    it('Verifying task7 variable', () => {
      expect(conditions.task7, 'task7 value is not correct').to.equal(true);
    });
  });
});
