const { expect } = require('chai');
const { Guest, RegisteredUser } = require('../../2-optional-medium/4_class_guest_and_registered');
const { userGuest, userRegistered } = require('../../2-optional-medium/5_objects_guest_and_registered');

describe('Unit 4 - Optional - Classes: Objects Guest and RegisteredUser', function () {
  describe('Task 2.1 - userGuest', function () {
    it('should be an instance of Guest', function () {
      expect(userGuest).to.be.instanceOf(Guest);
    });

    it('should have role "guest"', function () {
      expect(userGuest.globalRole).to.equal('guest');
    });

    it('should have two sessions', function () {
      expect(userGuest.sessions).to.have.lengthOf(2);
    });

    it('should have valid session timestamps', function () {
      expect(userGuest.sessions[0]).to.be.a('number');
      expect(userGuest.sessions[0]).to.be.closeTo(Date.now(), 1000);
      expect(userGuest.sessions[1]).to.be.a('number');
      expect(userGuest.sessions[1]).to.be.closeTo(Date.now(), 1000);
    });
  });

  describe('Task 2.2 - userRegistered', function () {
    it('should be an instance of RegisteredUser', function () {
      expect(userRegistered).to.be.instanceOf(RegisteredUser);
    });

    it('should have role "registered"', function () {
      expect(userRegistered.globalRole).to.equal('registered');
    });

    it('should have name "John Doe"', function () {
      expect(userRegistered.name).to.equal('John Doe');
    });

    it('should have email "doe_1992@gmail.com"', function () {
      expect(userRegistered.email).to.equal('doe_1992@gmail.com');
    });

    it('should have verified email', function () {
      expect(
        userRegistered.forgotPassword('doe_1992@gmail.com'),
      ).to.equal('Email with password was sent');
    });

    it('should change password successfully', function () {
      expect(userRegistered.changePassword('password1234', 'newpassword')).to.equal(true);
    });

    it('should return "Invalid password" if old password does not match', function () {
      expect(
        userRegistered.changePassword('wrongpassword', 'newpassword'),
      ).to.equal('Invalid password');
    });

    it('should return "Email is not verified" if email is not verified when changing password', function () {
      const unverifiedUser = new RegisteredUser('Jane Doe', 'jane@example.com', 'password123');
      expect(
        unverifiedUser.changePassword('password123', 'newpassword'),
      ).to.equal('Email is not verified');
    });
  });
});
