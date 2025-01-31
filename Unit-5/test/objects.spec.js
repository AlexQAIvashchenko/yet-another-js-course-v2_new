const { expect } = require('chai');
const { person, makeRobot, isARobot, task4Func } = require('../objects.js');

describe('Unit 5 - Easy - Objects:', () => {
  describe('Task 1 - person object', () => {
    it('Verify Person has firstName property', () =>
      expect(person).to.have.property('firstName'));
    it('Verify Person has lastName property', () =>
      expect(person).to.have.property('lastName'));
    it('Verify Person has getFullName method', () =>
      expect(person.getFullName()).to.equal(
        `${person.firstName} ${person.lastName}`,
      ));
  });

  describe('Task 2 - make a robot', () => {
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

  describe('Task 3 - is a robot', () => {
    [
      { p: person, exp: false },
      { p: { firstName: 'ROBOT', batteryLevel: 4 }, exp: true },
    ].forEach((el) => {
      it(`Verify isARobot function for ${
        el.exp ? 'real robot' : 'human'
      }`, () => {
        expect(isARobot(el.p)).to.equal(el.exp);
      });
    });
  });
});

describe('Unit 5 - Normal - Objects:', () => {
  describe('Task 4 - list `Number` properties', () => {
    [
      { obj: { a: 1, b: 2, c: 3 }, exp: ['a', 'b', 'c'] },
      { obj: { a: 'text', b: 4 }, exp: ['b'] },
      { obj: { a: 'ROBOT', batteryLevel: true }, exp: [] },
    ].forEach((el) => {
      it(`Verify task4Func result is [${el.exp}] for object = ${JSON.stringify(
        el.obj,
      )}`, () => {
        expect(task4Func(el.obj)).to.deep.equal(el.exp);
      });
    });
  });
});
