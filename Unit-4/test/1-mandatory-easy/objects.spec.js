const { expect } = require('chai');
const { person, makeRobot, isARobot } = require('../../1-mandatory-easy/1_objects');

describe('Unit 4 - Mandatory - Objects:', () => {
  describe('Task 1 - Person object', () => {
    it('Verify Person has firstName property', () => {
      expect(person).to.have.property('firstName');
    });

    it('Verify Person has lastName property', () => {
      expect(person).to.have.property('lastName');
    });

    it('Verify Person has getFullName method', () => {
      expect(person.getFullName()).to.equal(`${person.firstName} ${person.lastName}`);
    });
  });

  describe('Task 2 - Make a robot', () => {
    it('Verify makeRobot function changes person', () => {
      const testP = {
        firstName: 'TEST',
        lastName: 'sds',
        getFullName: () => {
          return person.firstName + ' ' + person.lastName;
        },
      };

      makeRobot(testP);

      expect(testP).to.have.property('batteryLevel');
    });
  });

  describe('Task 3 - Is a robot', () => {
    [
      { p: person, exp: false },
      { p: { firstName: 'ROBOT', batteryLevel: 4 }, exp: true },
    ].forEach((el) => {
      it(`Verify isARobot function for ${el.exp ? 'real robot' : 'human'}`, () => {
        expect(isARobot(el.p)).to.equal(el.exp);
      });
    });
  });
});
