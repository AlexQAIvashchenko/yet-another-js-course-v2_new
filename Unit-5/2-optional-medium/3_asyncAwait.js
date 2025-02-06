const { promiseResolve, promiseReject } = require('../1-mandatory-easy/2_promises');
const { promise1, promise2 } = require('../utils/utilPromises');

/**
 * Level - Normal
 * Task - 1
 * Create an asyncPromiseReject function which will handle the created earlier promiseReject() promise
 * using async/await syntax inside the asyncPromiseReject function
 * and return result a string containing promiseReject() rejection reason
 *
 * @example
 * if promiseResolve() rejection reason was "BlablaRejected"
 * than function should catch an error and return "BlablaRejected was handled and result returned"
 */

// enter your code here
let asyncPromiseReject;

module.exports = {
  asyncPromiseReject,
};
