const { expect } = require('chai');
const vars = require('../../2-optional-medium/1_variables_optional');

describe('Unit 1 - Optional - Medium - Variables and Data Types:', () => {
  it('Task 1 - "myArr1" variable should be created and be an empty array', () => {
    expect(Array.isArray(vars.myArr1)).to.equal(true);
    expect(vars.myArr1.length, '"myArr1" length is not correct').to.equal(0);
  });

  it('Task 2 - "myArr2" variable should be created and be an array of length 3 with empty values', () => {
    expect(Array.isArray(vars.myArr2)).to.equal(true);
    expect(vars.myArr2.length, '"myArr2" length is not correct').to.equal(3);
    vars.myArr2.forEach((el, i) => {
      expect(el, `myArr2[${i}] variable is not correct`).to.equal(undefined);
    });
  });

  it('Task 3 - "myArr3" variable should be created, contains 4 elements and has proper values', () => {
    expect(Array.isArray(vars.myArr3)).to.equal(true);
    expect(vars.myArr3.length, '"myArr3" length is not correct').to.equal(4);
    expect(vars.myArr3[0], 'myArr3[0] variable is not correct').to.equal(10);
    expect(vars.myArr3[1], 'myArr3[1] variable is not correct').to.equal(null);
    expect(vars.myArr3[2], 'myArr3[2] variable is not correct').to.equal('I\'m the third one');
    expect(vars.myArr3[3], 'myArr3[3] variable is not correct').to.equal(false);
  });
});
