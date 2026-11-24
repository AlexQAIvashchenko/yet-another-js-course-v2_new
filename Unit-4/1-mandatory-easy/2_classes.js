/**
 * Additional Reading:
 *
 * https://uk.javascript.info/classes
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 * https://javascript.info/class
 * https://javascript.info/class-inheritance
 */

/**
 * Level - Easy
 * Task - 1 - Part 1
 * Implement class Figure with:
 * 1) properties name and numberOfPoints
 * 2) constructor should get numberOfPoints and name
 * 3) method getDescription - 'This is a ${name} with ${numberOfPoints} points'
 */

// enter your code here
class Figure {
  name;
  numberOfPoints;

  constructor(name, numberOfPoints) {
    this.name = name;
    this.numberOfPoints = numberOfPoints;
  }
  getDescription() {
    return `This is a ${this.name} with ${this.numberOfPoints} points`;
  }
};

const figure = new Figure(3, 'triangle');
console.log(figure.getDescription());



/**
 * Level - Easy
 * Task - 1 - Part 2
 * Create an instance of a class Figure
 */

let figure1 = new Figure('square', 4);

/**
 * Level - Easy
 * Task - 2 - Part 1
 * Implement class Square that extends Figure with:
 * 1) property sideLength and figureArea
 * 2) constructor should additionally get sideLength and calculate figureArea
 * 3) getter method area that returns property figureArea
 */

// enter your code here
class Square extends Figure {
  constructor(name, sideLength) {
    super(name, 4);
    this.sideLength = sideLength;
    this.figureArea = sideLength * sideLength;
  }

  get area() {
    return this.figureArea;
  }
}


/**
 * Level - Easy
 * Task - 2 - Part 2
 * Create an instance of a class Square
 */

let square = new Square('square', 5);

module.exports = {
  figure,
  square,
  Figure,
  Square,
};
