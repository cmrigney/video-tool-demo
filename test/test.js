var assert = require('assert');
var calc = require('../index.js');

describe('Tests', function() {
  describe('#add()', function() {
    it('Should properly add 2 + 2', function() {
      assert.equal(calc.add(2, 2), 4);
    });
  });
});