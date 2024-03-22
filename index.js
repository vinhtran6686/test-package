// index.js
module.exports = {
   add: function(num1, num2) {
      if (typeof num1 !== 'number' || typeof num2 !== 'number') {
         throw new Error('Both arguments must be numbers');
      }
      return num1 + num2;
   },
   divide: function(num1, num2) {
      if (typeof num1 !== 'number' || typeof num2 !== 'number') {
         throw new Error('Both arguments must be numbers');
      }
      if (num2 === 0) {
         throw new Error('Cannot divide by zero');
      }
      return num1 / num2;
   }
};