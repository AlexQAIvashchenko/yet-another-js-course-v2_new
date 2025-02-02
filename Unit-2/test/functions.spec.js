const { expect } = require('chai');
const _ = require('lodash');
const Chance = require('chance');
const chance = new Chance();
const sinon = require('sinon');
try {
  ({
    task1Func,
    task2Func,
    task3Func,
    task4Func,
    task5Func,
    task6Func,
    task7Func,
    task8Func,
    task9Func,
    task10Func,
    task11Func,
    task12Func,
    task13Func,
    task14Object,
    task15Func,
  } = require('../functions'));
} catch (err) {
  console.error(
    '\x1b[41m',
    'Error importing functions. Ensure all functions are implemented in functions.js file.',
  );
}

let removeLinesAndSpaces = (str) => {
  return str.replace(/\s+/g, '').replace(/\n+/g, '');
};

let getRandomNum = () => _.random(-999, 999);

describe('Unit 3 - Easy - Functions:', () => {
  describe('Task 1 - function declaration returns true', () => {
    it('Verifying task1Func function returns true', () => {
      expect(task1Func()).to.equal(true);
    });
    it('Verifying task1Func function is implemented using "function declaration"', () => {
      expect(removeLinesAndSpaces(task1Func.toString())).to.contain(
        'functiontask1Func(){',
      );
    });
  });

  describe('Task 2 - function expression returns age', () => {
    [1, 10, 100, 1000, 1990, 2000, 2023].forEach((year) =>
      it(`Verifying task2Func function returns correct age for yob = ${year}`, () => {
        expect(task2Func(year)).to.equal(new Date().getFullYear() - year);
      }),
    );
    it('Verifying task2Func function is implemented using "function expression"', () => {
      expect(removeLinesAndSpaces(task2Func.toString())).to.contain(
        'function(',
      );
    });
  });

  describe('Task 3 - arrow function returns gender', () => {
    [
      { value: 0, gender: 'other' },
      { value: 1, gender: 'woman' },
      { value: 2, gender: 'man' },
    ].forEach((el) => {
      it(`Verifying task3Func function returns "${el.gender}" gender`, () => {
        expect(task3Func(el.value)).to.equal(`My gender is ${el.gender}`);
      });
    });
    it('Verifying task2Func function is implemented using "function expression"', () => {
      expect(removeLinesAndSpaces(task3Func.toString())).to.contain(')=>{');
    });
  });
  describe('Task 4 - sum of 2 numbers', () => {
    const a = getRandomNum();
    const b = getRandomNum();
    it(`Verifying task4Func function returns correct sum for random numbers a=${a}, b=${b}`, () => {
      expect(task4Func(a, b)).to.equal(a + b);
    });
  });

  describe('Task 5 - sum of 2 numbers with default value', () => {
    const a = getRandomNum();
    const b = getRandomNum();
    it(`Verifying task5Func function returns correct sum if only a=${a} provided`, () => {
      expect(task5Func(a)).to.equal(a + 10);
    });
    it(`Verifying task5Func function returns correct sum if both a=${a} and b=${b} provided`, () => {
      expect(task5Func(a, b)).to.equal(a + b);
    });
  });

  describe('Task 6 - firstName and lastName', () => {
    it('Verifying task6Func function returns correct string', () => {
      const object = {
        firstName: 'THIS_IS_MY_NAME',
        lastName: 'THIS_IS_MY_LASTNAME',
      };
      expect(task6Func(object)).to.equal(
        object.firstName + ' ' + object.lastName,
      );
    });
  });

  describe('Task 7 - return object', () => {
    it('Verifying task7Func function returns correct object', () => {
      const object = {
        firstName: 'THIS_IS_MY_NAME',
        lastName: 'THIS_IS_MY_LASTNAME',
        age: 789,
      };
      expect(
        task7Func(object.firstName, object.lastName, object.age),
      ).to.deep.equal(object);
    });
    it('Verifying task7Func function returns correct object if nothing was passed to it', () => {
      const object = {
        firstName: '',
        lastName: '',
        age: 0,
      };
      expect(task7Func()).to.deep.equal(object);
    });
  });

  describe('Task 8 - odd or even', () => {
    const n = getRandomNum();
    it(`Verifying task8Func function returns correct value for number= ${n}`, () => {
      expect(task8Func(n)).to.deep.equal(!!(n % 2));
    });
  });

  describe('Task 9 - shortest word', () => {
    [
      { arr: ['one', 'two', 'three'], exp: 'one' },
      { arr: ['one', 'two', 'three', 'x'], exp: 'x' },
    ].forEach((el) => {
      it(`Verifying task9Func function returns shortest word for array ${el.arr}`, () => {
        expect(task9Func(el.arr)).to.equal(el.exp);
      });
    });
  });

  describe('Task 10 - total distance', () => {
    it('Verifying task10Func function returns correct distance', () => {
      const obj = _.range(1, 5).map(() => ({ distance: _.random(1000) }));
      expect(task10Func(obj)).to.equal(_.sum(obj.map((el) => el.distance)));
    });
  });

  describe('Task 11 - callback', () => {
    it('Verifying task11Func function returns correct string', () => {
      const text = chance.sentence();
      let myFunc = () => {
        return text;
      };

      expect(task11Func(myFunc)).to.equal(`Callback result = ${text}`);
    });
  });
});

describe('Unit 3 - Normal - Functions:', () => {
  describe('Task 12 - rest parameter', () => {
    it('Verifying task12Func function returns correct object', () => {
      expect(task12Func(1, 2, 3, 4)).to.deep.equal({
        paramsNumber: 4,
        firstParam: 1,
      });
    });
  });

  describe('Task 13 - google', () => {
    it('Verifying task13Func returns "goooooogle" if passing 6', () =>
      expect(task13Func(6)).to.equal('goooooogle'));
    it('Verifying task13Func returns "gooogle" if passing 3', () =>
      expect(task13Func(3)).to.equal('gooogle'));
  });
});

describe('Unit 3 - Hardcore - Functions:', () => {
  describe('Task 14 - methods inside the given object', () => {
    it('Verifying task14Object can print object keys', () => {
      const expectedKeys = [
        'name',
        'lastName',
        'age',
        'friend',
        'keys',
        'call',
      ];
      const consoleLogSpy = sinon.spy(console, 'log');
      task14Object.keys();
      consoleLogSpy.restore();
      const calls = consoleLogSpy.getCalls().map((call) => call.args[0]);
      expect(calls).to.deep.equal(expectedKeys);
    });

    it('Verifying task14Object can return the string', () => {
      expect(task14Object.call()).to.equal(
        'My name is ' +
          task14Object.name +
          ' ' +
          task14Object.lastName +
          ', and I am ' +
          task14Object.age +
          ' years old. My best friend is a ' +
          task14Object.friend,
      );
    });
  });

  describe('Task 15 - Final Price with discount', () => {
    [
      { discount: 10, price: 100 },
      { discount: 15, price: 200 },
      { discount: 25, price: 800 },
    ].forEach((el) => {
      it(`Verifying task15Func calculates correct price if price=${el.price} and discount=${el.discount}`, () => {
        expect(task15Func(el.discount)(el.price)).to.equal(
          el.price - el.price * (el.discount / 100),
        );
      });
    });
  });
});
