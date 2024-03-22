// test/test.js
const assert = require('assert');
const myPackage = require('../index');

describe('add', function() {
   it('should add two numbers', function() {
      const result = myPackage.add(1, 2);
      assert.strictEqual(result, 3);
   });

   it('should throw an error if arguments are not numbers', function() {
      assert.throws(() => myPackage.add('1', 2), Error);
   });
});