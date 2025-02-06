const { expect } = require('chai');
const { asyncPromiseReject } = require('../../2-optional-medium/3_asyncAwait');

describe('Unit 7 - Optional - Medium - Async-Await:', () => {
  describe('Task 1 - Handle rejected promise', () => {
    it('Verify asyncPromiseReject will return correct string', async () => {
      expect(await asyncPromiseReject()).to.equal('Rejected! was handled and result returned');
    }).timeout(40000);
  });
});
