const { expect } = require('chai');
const { figure, square, Figure, Square } = require('../../1-mandatory-easy/2_classes');

describe('Unit 4 - Mandatory - Classes:', () => {
  describe('Task 1 - Figure class', () => {
    const figureClassString = Figure.toString();

    it('should have a constructor with 2 parameters', function () {
      const constructorRegex = /constructor\s*\(\s*([^,\s]+)\s*,\s*([^,\s]+)\s*\)\s*{/;
      const match = figureClassString.match(constructorRegex);
      expect(match, 'Constructor with 2 parameters is not present').to.not.be.null;
    });

    it('should have numberOfPoints and name assigned in the constructor', function () {
      const numberOfPointsPattern = /this\.numberOfPoints\s*=\s*/;
      expect(numberOfPointsPattern.test(figureClassString)).to.be.true;

      // Check that this.name is assigned a value from params
      const namePattern = /this\.name\s*=\s*/;
      expect(namePattern.test(figureClassString)).to.be.true;
    });

    it('should correctly instantiate with given parameters (name "Pentagon" and numberOfPoints 5)', function () {
      const figure = new Figure('Pentagon', 5);
      expect(figure.numberOfPoints, 'numberOfPoints is not correct').to.equal(5);
      expect(figure.name, 'name is not correct').to.equal('Pentagon');
    });

    it('should have a getDescription method with no parameters', function () {
      const getDescriptionRegex = /getDescription\s*\(\s*\)\s*{/;
      expect(figureClassString, 'getDescription method with no parameters is not present').to.match(getDescriptionRegex);
    });

    it('should return the correct description from getDescription method for given parameters (name "Triangle" and numberOfPoints 3)', function () {
      const figure = new Figure('Triangle', 3);
      expect(figure.getDescription()).to.equal('This is a Triangle with 3 points');
    });
  });

  describe('Task 1 - figure object', () => {
    it('Verify figure is instance of Figure', () => {
      expect(figure).to.be.instanceOf(Figure);
    });

    it('Verify figure has property "name"', () => {
      expect(figure).to.have.property('name');
    });

    it('Verify figure has property "numberOfPoints"', () => {
      expect(figure).to.have.property('numberOfPoints');
    });

    it('Verify figure has method "getDescription"', () => {
      expect(figure).to.have.property('getDescription');
    });

    it('Verify figure method "getDescription" returns correct value', () => {
      expect(figure.getDescription()).to.equal(`This is a ${figure.name} with ${figure.numberOfPoints} points`);
    });
  });

  describe('Task 2 - Square class', () => {
    const squareClassString = Square.toString();

    it('should have a constructor with 2 parameters', function () {
      const constructorRegex = /constructor\s*\(\s*([^,\s]+)\s*,\s*([^,\s]+)\s*\)\s*{/;
      const match = squareClassString.match(constructorRegex);
      expect(match, 'Constructor with 2 parameters is not present').to.not.be.null;
    });

    it('should call super with 2 parameters in constructor and second param is number of points', function () {
      const superCallRegex = /super\s*\(\s*([^,\s]+)\s*,\s*4\s*\)/;
      expect(squareClassString, 'super is not called with 2 parameters in constructor').to.match(superCallRegex);
    });

    it('should assign sideLength inside constructor', function () {
      const sideLengthAssignmentRegex = /this\.sideLength\s*=\s*[^;\s]+/;
      expect(squareClassString, 'sideLength is not assigned inside constructor').to.match(sideLengthAssignmentRegex);
    });

    it('should assign figureArea inside constructor', function () {
      const figureAreaAssignmentRegex = /this\.figureArea\s*=\s*[^;\s]+\s*\*\s*[^;\s]+/;
      expect(squareClassString, 'figureArea is not assigned inside constructor').to.match(figureAreaAssignmentRegex);
    });

    it('should have a getter for area', function () {
      const getterRegex = /get\s+area\s*\(\s*\)\s*{/;
      expect(squareClassString, 'Getter for area is not present').to.match(getterRegex);
    });
  });

  describe('Task 2 - square object', () => {
    it('Verify square is instance of Figure', () => {
      expect(square).to.be.instanceOf(Figure);
    });

    it('Verify square has property "name"', () => {
      expect(square).to.have.property('name');
    });

    it('Verify square has property "numberOfPoints"', () => {
      expect(square).to.have.property('numberOfPoints');
    });

    it('Verify square has method "getDescription"', () => {
      expect(square).to.have.property('getDescription');
    });

    it('Verify square method "getDescription" returns correct value', () => {
      expect(square.getDescription()).to.equal(`This is a ${square.name} with ${square.numberOfPoints} points`);
    });

    it('Verify square has property "sideLength"', () => {
      expect(square).to.have.property('sideLength');
    });

    it('Verify square has property "figureArea"', () => {
      expect(square).to.have.property('figureArea');
    });

    it('Verify square getter "area" and it returns correct value', () => {
      expect(square.area).to.equal(square.figureArea);
    });
  });
});
