const { expect } = require('chai');
const vars = require('../../1-mandatory-easy/1_variables_mandatory');

describe('Unit 1 - Mandatory - Variables and Data Types:', () => {
  it('Task 1 - "myNum" variable should be created', () => {
    expect(vars.myNum).to.equal(74);
  });

  it('Task 2 - "myText" variable should be created', () => {
    expect(vars.myText).to.equal('Jack');
  });

  it('Task 3 - "myBool" variable should be created', () => {
    expect(vars.myBool).to.equal(false);
  });

  it('Task 4 - "myNull" variable should be created', () => {
    expect(vars.myNull).to.equal(null);
  });

  it('Task 5 - "myUndefined" variable should be created', () => {
    expect(vars.myUndefined).to.equal(undefined);
  });

  const expectedArr = [2, 3, 4, 5, 6, 7];
  it('Task 6 - "myArr" variable should be created', () => {
    expect(Array.isArray(vars.myArr)).to.equal(true);
    expect(vars.myArr.length, '"myArr" length is not correct').to.equal(
      expectedArr.length,
    );
    vars.myArr.forEach((el, i) => {
      expect(el, `myArr[${i}] variable is not correct`).to.equal(
        expectedArr[i],
      );
    });
  });

  it('Task 7 - "myArr1" variable should be created and be an empty array', () => {
    expect(Array.isArray(vars.myArr1)).to.equal(true);
    expect(vars.myArr1.length, '"myArr1" length is not correct').to.equal(0);
  });

  it('Task 8 - "myArr1_1" variable should be created and has a proper element', () => {
    expect(Array.isArray(vars.myArr1_1)).to.equal(true);
    expect(vars.myArr1_1.length, '"myArr1_1" length is not correct').to.equal(
      1,
    );
    expect(vars.myArr1_1[0], 'myArr1_1[0] variable is not correct').to.equal(
      'I am the first',
    );
  });

  it('Task 9 - "fourthElement" variable should be created', () => {
    expect(vars.fourthElement).to.equal(expectedArr[3]);
  });

  it('Task 10 - "arrayOperations" variable should be created', () => {
    expect(vars.arrayOperations).to.equal(vars.myArr[3] - vars.myArr[2]);
  });

  it('Task 11 - "myNum2" variable should be created', () => {
    expect(vars.myNum2).to.equal(vars.myNum / 2);
  });

  it('Task 12 - "myText2" variable should be created', () => {
    expect(vars.myText2).to.equal(`${vars.myText} is ${vars.myNum2}`);
  });

  it('Task 13 - "myObj" variable should be created', () => {
    expect(typeof vars.myObj).to.equal('object');
    expect(vars.myObj.firstName).to.equal('John');
    expect(vars.myObj.lastName).to.equal('Dou');
    expect(vars.myObj.fullName).to.equal('John Dou');
  });

  it('Task 14 - "myBool2" variable should be created', () => {
    expect(vars.myBool2).to.equal(vars.myNum == vars.myNum2);
  });

  it('Task 15 - "myBool3" variable should be created', () => {
    expect(vars.myBool3).to.equal(vars.myNum2 === '37');
  });

  it('Task 16 - "myUndefined2" variable should be created', () => {
    expect(vars.myUndefined2).to.equal(undefined);
  });
});
