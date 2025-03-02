const { expect } = require('chai');
const { User } = require('../../2-optional-medium/2_class_user');
const { user1, user2 } = require('../../2-optional-medium/3_objects_user');

describe('Unit 4 - Optional - Classes: Objects User', function () {
  describe('Task 1.1 - user1', function () {
    it('should be an instance of User', function () {
      expect(user1, 'user1 should be an instance if User class').to.be.instanceOf(User);
    });

    it('should have role "guest"', function () {
      expect(user1.globalRole, 'user1 globalRole is not "guest"').to.equal('guest');
    });

    it('should have one session', function () {
      expect(user1.sessions, 'user1 sessions should contain 1 element').to.have.lengthOf(1);
    });

    it('should have a valid session timestamp', function () {
      expect(user1.sessions[0], 'user1 sessions element should have timestamp').to.be.a('number');
      expect(user1.sessions[0], 'user1 sessions element should be a timestamp').to.be.closeTo(Date.now(), 1000);
    });
  });

  describe('Task 1.2 - user2', function () {
    it('should be an instance of User', function () {
      expect(user2, 'user2 should be an instance if User class').to.be.instanceOf(User);
    });

    it('should have role "registered"', function () {
      expect(user2.globalRole, 'user2 globalRole is not "registered"').to.equal('registered');
    });

    it('should have two sessions', function () {
      expect(user2.sessions, 'user2 sessions should contain 2 elements').to.have.lengthOf(2);
    });

    it('should have valid session timestamps', function () {
      expect(user2.sessions[0], 'user2 sessions first element should have timestamp').to.be.a('number');
      expect(user2.sessions[0], 'user2 sessions first element should be a timestamp').to.be.closeTo(Date.now(), 1000);
      expect(user2.sessions[1], 'user2 sessions second element should have timestamp').to.be.a('number');
      expect(user2.sessions[1], 'user2 sessions second element should be a timestamp').to.be.closeTo(Date.now(), 1000);
    });
  });
});
