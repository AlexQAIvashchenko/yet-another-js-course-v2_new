const { expect } = require('chai');
const vars = require('../../1-mandatory-easy/1_variables_mandatory');

describe('Unit 1 - Easy - Variables and Data Types', () => {
  it('"myNum" variable should be created', () => {
    expect(vars.myNum).to.equal(74);
  });

  it('"myText" variable should be created', () => {
    expect(vars.myText).to.equal('Jack');
  });

  it('"myBool" variable should be created', () => {
    expect(vars.myBool).to.equal(false);
  });

  it('"myNull" variable should be created', () => {
    expect(vars.myNull).to.equal(null);
  });

  it('"myUndefined" variable should be created', () => {
    expect(vars.myUndefined).to.equal(undefined);
  });

  const expectedArr = [2, 3, 4, 5, 6, 7];
  it('"myArr" variable should be created', () => {
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

  it('"myArr1" variable should be created and be an empty array', () => {
    expect(Array.isArray(vars.myArr1)).to.equal(true);
    expect(vars.myArr1.length, '"myArr1" length is not correct').to.equal(0);
  });

  it('"myArr1_1" variable should be created and has a proper element', () => {
    expect(Array.isArray(vars.myArr1_1)).to.equal(true);
    expect(vars.myArr1_1.length, '"myArr1_1" length is not correct').to.equal(
      1,
    );
    expect(vars.myArr1_1[0], 'myArr1_1[0] variable is not correct').to.equal(
      'I am the first',
    );
  });

  it('"fourthElement" variable should be created', () => {
    expect(vars.fourthElement).to.equal(expectedArr[3]);
  });

  it('"arrayOperations" variable should be created', () => {
    expect(vars.arrayOperations).to.equal(vars.myArr[3] - vars.myArr[2]);
  });

  it('"myNum2" variable should be created', () => {
    expect(vars.myNum2).to.equal(vars.myNum / 2);
  });

  it('"myText2" variable should be created', () => {
    expect(vars.myText2).to.equal(`${vars.myText} is ${vars.myNum2}`);
  });

  it('"myObj" variable should be created', () => {
    expect(typeof vars.myObj).to.equal('object');
    expect(vars.myObj.firstName).to.equal('John');
    expect(vars.myObj.lastName).to.equal('Dou');
    expect(vars.myObj.fullName).to.equal('John Dou');
  });

  it('"myBool2" variable should be created', () => {
    expect(vars.myBool2).to.equal(vars.myNum == vars.myNum2);
  });

  it('"myBool3" variable should be created', () => {
    expect(vars.myBool3).to.equal(vars.myNum2 === '37');
  });

  it('"myUndefined2" variable should be created', () => {
    expect(vars.myUndefined2).to.equal(undefined);
  });
});
