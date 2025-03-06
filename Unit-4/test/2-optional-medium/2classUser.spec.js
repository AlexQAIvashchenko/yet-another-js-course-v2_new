const { expect } = require('chai');

const { User } = require('../../2-optional-medium/2_class_user.js');

const userClassString = User.toString();

describe('Unit 4 - Optional - Classes: Task 1 - User', function () {
  describe('private properties', function () {
    it('should have private property #sessions', function() {
      const sessionsRegex = /#sessions\s*=\s*\[\s*\]\s*;/;
      expect(
        userClassString,
        'Your class doesn\'t contain private property sessions that is empty array',
      ).to.match(sessionsRegex);
    });

    it('should have private property #globalRole', function() {
      const globalRoleRegex = /#globalRole\s*;/;
      expect(
        userClassString,
        'Your class doesn\'t contain private property globalRole that is undefined',
      ).to.match(globalRoleRegex);
    });
  });

  describe('constructor', function () {

    const constructorMatch = userClassString.match(/constructor\s*\(\s*([^,\s]+)\s*\)/);

    it('constructor should have one parameter', function() {
      expect(
        constructorMatch,
        'Your class doesn\'t contain either "constructor" or parameter in it',
      ).to.not.be.null;
    });

    it('constructor parameter should be assigned to globalRole private variable', function() {
      const parameterName = constructorMatch[1];
      const assignmentRegex = new RegExp(`this\\.\\#globalRole\\s*=\\s*${parameterName}`);
      expect(
        userClassString,
        'Your class constructor doesn\'t #globalRole property with assigned role',
      ).to.match(assignmentRegex);
    });

    it('constructor should initialize with a given role', function() {
      const user = new User('admin');
      expect(
        user,
        'It\'s not possible to create an object from the class',
      ).to.be.an('object');
    });
  });

  describe('addSession method', function () {
    it('should contain addSession method', function() {
      const addSessionRegex = /addSession\s*\(\s*\)\s*{/;
      expect(
        userClassString,
        'Your class doesn\'t contain addSession method or method contains params',
      ).to.match(addSessionRegex);
    });

    it('addSession method should perform push with Date.now() to this.#sessions', function() {
      const addSessionPushRegex = /this\.#sessions\.push\s*\(\s*Date\.now\s*\(\s*\)\s*\)\s*;/;
      expect(
        userClassString,
        'Your addSession method doesn\'t add unique date to private property sessions',
      ).to.match(addSessionPushRegex);
    });

    it('should add a new session timestamp', function () {
      const user = new User('user');
      expect(() => user.addSession()).to.not.throw();
    });
  });

  describe('getter for sessions', function () {
    it('should have a getter for sessions', function() {
      const getterRegex = /get\s+sessions\s*\(\s*\)\s*{/;
      expect(
        userClassString,
        'Your class doesn\'t contain a getter for sessions',
      ).to.match(getterRegex);
    });

    it('getter for sessions should return private property #sessions', function() {
      const getterReturnRegex = /get\s+sessions\s*\(\s*\)\s*{\s*return\s+this\.#sessions\s*;/;
      expect(
        userClassString,
        'Your getter for sessions doesn\'t return private property #sessions',
      ).to.match(getterReturnRegex);
    });

    it('getter for sessions should return the correct value', function() {
      const user = new User('user');
      user.addSession();
      expect(user.sessions).to.have.lengthOf(1);
    });

    it('sessions should contain valid timestamps', function() {
      const user = new User('user');
      user.addSession();
      expect(user.sessions[0]).to.be.a('number');
      expect(user.sessions[0]).to.be.at.most(Date.now());
    });
  });

  describe('getter for global role', function () {
    it('should have a getter for global role', function() {
      const getterRegex = /get\s+globalRole\s*\(\s*\)\s*{/;
      expect(
        userClassString,
        'Your class doesn\'t contain a getter for globalRole',
      ).to.match(getterRegex);
    });

    it('getter for globalRole should return private property #globalRole', function() {
      const getterReturnRegex = /get\s+globalRole\s*\(\s*\)\s*{\s*return\s+this\.#globalRole\s*;/;
      expect(
        userClassString,
        'Your getter for globalRole doesn\'t return private property #globalRole',
      ).to.match(getterReturnRegex);
    });

    it('getter for globalRole should return private property #globalRole', function() {
      const user = new User('admin');
      expect(user.globalRole).to.equal('admin');
    });
  });
});
