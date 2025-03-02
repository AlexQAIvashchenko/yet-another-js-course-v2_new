const { User } = require('./2_class_user');
/**
 * TASK EXPLANATION:
 * You continue creation of a mechanism for tracking different users sessions on some website.
 * This is a second part of the task. You need to create 2 classes Guest and RegisteredUser that will extend User class.
 */

/**
 * Level - Normal
 * Task - 2
 * Implement class Guest with:
 * 1) constructor that calls parent constructor with 'guest' as an argument
 * 2) method `register` that gets name, email and password and returns new instance of RegisteredUser
 */

class Guest {
  // enter your code here
}

/**
 * Level - Normal
 * Task - 3
 * Implement class RegisteredUser with:
 * 1) private properties name, email, isVerified, password
 * 2) isVerified should be false by default
 * 3) constructor that calls parent constructor with 'registered' as an argument and sets name, email and password
 * 4) getter for name
 * 5) getter for email
 * 6) method `verifyEmail` that sets isVerified to true
 * 7) method `forgotPassword` that gets email as parameter and if:
 *    - user's email is NOT verified - returns text 'Email is not verified'
 *    - provided email does NOT matches the stored email - returns text 'No user with this email'
 *    - otherwise - returns text 'Email with password was sent'
 * 8) method `changePassword` that gets oldPassword and newPassword as parameters and if:
 *    - user's email is NOT verified - returns text 'Email is not verified'
 *    - provided oldPassword does NOT matches the stored password - returns text 'Invalid password'
 *   - otherwise - changes the password and returns true
 */

class RegisteredUser {
    // enter your code here
}

module.exports = {
  Guest, RegisteredUser
};
