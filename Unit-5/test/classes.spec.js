const { expect } = require('chai');
const { figure, square, Figure } = require('../classes.js');

describe('Unit 5 - Easy - Classes:', () => {
  describe('Task 1 - Figure', () => {
    it('Verify figure is instance of Figure', () => {
      expect(figure).to.be.instanceOf(Figure);
    });
    it('Verify Figure has property "name"', () => {
      expect(figure).to.have.property('name');
    });
    it('Verify Figure has property "numberOfPoints"', () => {
      expect(figure).to.have.property('numberOfPoints');
    });
    it('Verify Figure has method "getDescription"', () => {
      expect(figure).to.have.property('getDescription');
    });
    it('Verify Figure method "getDescription" returns correct value', () => {
      expect(figure.getDescription()).to.equal(
        `This is a ${figure.name} with ${figure.numberOfPoints} points`,
      );
    });
  });

  describe('Task 2 - Square', () => {
    it('Verify Square is instance of Figure', () => {
      expect(square).to.be.instanceOf(Figure);
    });
    it('Verify Square has property "name"', () => {
      expect(square).to.have.property('name');
    });
    it('Verify Square has property "numberOfPoints"', () => {
      expect(square).to.have.property('numberOfPoints');
    });
    it('Verify Square has method "getDescription"', () => {
      expect(square).to.have.property('getDescription');
    });
    it('Verify Square method "getDescription" returns correct value', () => {
      expect(square.getDescription()).to.equal(
        `This is a ${square.name} with ${square.numberOfPoints} points`,
      );
    });

    it('Verify Square has property "sideLength"', () => {
      expect(square).to.have.property('sideLength');
    });
    it('Verify Square has property "figureArea"', () => {
      expect(square).to.have.property('figureArea');
    });
    it('Verify Square getter "area" and it returns correct value', () => {
      expect(square.area).to.equal(square.figureArea);
    });
  });
});
