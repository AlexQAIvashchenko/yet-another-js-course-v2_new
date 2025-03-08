const { expect } = require('chai');
const { User } = require('../../2-optional-medium/2_class_user');
const { Guest, RegisteredUser } = require('../../2-optional-medium/4_class_guest_and_registered');

describe('Unit 4 - Optional - Classes: Guest and RegisteredUser', function () {
  describe('Guest class', function () {
    it('should be an instance of User', function () {
      const guest = new Guest();
      expect(guest, 'Guest class must extend User class').to.be.instanceOf(User);
    });

    it('should have role "guest"', function () {
      const guest = new Guest();
      expect(
        guest.globalRole,
        'Guest object instance should have globalRole equal "guest"',
      ).to.equal('guest');
    });

    it('should register a new RegisteredUser', function () {
      const guest = new Guest();
      const registeredUser = guest.register('John Doe', 'john@example.com', 'password123');
      expect(
        registeredUser,
        'guest user should be an instance of RegisteredUser class if register method was called',
      ).to.be.instanceOf(RegisteredUser);
    });
  });

  describe('RegisteredUser class', function () {
    it('should be an instance of User', function () {
      const registeredUser = new RegisteredUser('John Doe', 'john@example.com', 'password123');
      expect(registeredUser, 'RegisteredUser class must extend User class').to.be.instanceOf(User);
    });

    it('should have role "registered"', function () {
      const registeredUser = new RegisteredUser('John Doe', 'john@example.com', 'password123');
      expect(
        registeredUser.globalRole,
        'RegisteredUser object instance should have globalRole equal "registered"',
      ).to.equal('registered');
    });

    it('should have private properties name, email, isVerified, and password', function () {
      const registeredUser = new RegisteredUser('John Doe', 'john@example.com', 'password123');
      expect(
        registeredUser.name,
        'Name is not correct if "John Doe" was used for object creation',
      ).to.equal('John Doe');
      expect(
        registeredUser.email,
        'Email is not correct if "john@example.com" was used for object creation',
      ).to.equal('john@example.com');
      expect(registeredUser.verifyEmail, 'verifyEmail should be a function').to.be.a('function');
      expect(registeredUser.changePassword, 'changePassword should be a function').to.be.a('function');
    });

    it('should return correct name and email using getters', function () {
      const registeredUser = new RegisteredUser('John Doe', 'john@example.com', 'password123');
      expect(registeredUser.name).to.equal('John Doe');
      expect(registeredUser.email).to.equal('john@example.com');
    });

    it('should not allow modifying name or email directly', function () {
      const registeredUser = new RegisteredUser('John Doe', 'john@example.com', 'password123');
      registeredUser.name = 'Hacker';
      registeredUser.email = 'hacker@example.com';

      expect(registeredUser.name).to.equal('John Doe');
      expect(registeredUser.email).to.equal('john@example.com');
    });

    it('should have function to remind password if email was verified', function () {
      const registeredUser = new RegisteredUser('John Doe', 'john@example.com', 'password123');
      registeredUser.verifyEmail();
      expect(
        registeredUser.forgotPassword('john@example.com'),
      ).to.equal('Email with password was sent');
    });

    it('should return "Email is not verified" if email is not verified', function () {
      const registeredUser = new RegisteredUser('John Doe', 'john@example.com', 'password123');
      expect(registeredUser.forgotPassword('john@example.com')).to.equal('Email is not verified');
    });

    it('should return "No user with this email" if email does not match', function () {
      const registeredUser = new RegisteredUser('John Doe', 'john@example.com', 'password123');
      registeredUser.verifyEmail();
      expect(
        registeredUser.forgotPassword('wrong@example.com'),
      ).to.equal('No user with this email');
    });

    it('should have function to change password if old password matches', function () {
      const registeredUser = new RegisteredUser('John Doe', 'john@example.com', 'password123');
      registeredUser.verifyEmail();
      expect(
        registeredUser.changePassword('password123', 'newpassword'),
      ).to.equal(true);
    });

    it('should return "Invalid password" if old password does not match', function () {
      const registeredUser = new RegisteredUser('John Doe', 'john@example.com', 'password123');
      registeredUser.verifyEmail();
      expect(
        registeredUser.changePassword('wrongpassword', 'newpassword'),
      ).to.equal('Invalid password');
    });

    it('should return "Email is not verified" if email is not verified when changing password', function () {
      const registeredUser = new RegisteredUser('John Doe', 'john@example.com', 'password123');
      expect(
        registeredUser.changePassword('password123', 'newpassword'),
      ).to.equal('Email is not verified');
    });
  });
});
