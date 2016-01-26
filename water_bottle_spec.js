var bottle = require('./water_bottle');
var assert = require('assert');

// 1. water bottle should be empty at start

describe('Water bottle', function(){
    // 1. water bottle should be empty at start  it('should be empty at start', function(){
  it('should be empty at start', function(){
    assert.equal(0, bottle.volume);
  });
  // 2. should go to 100 when filled
  it('should be 100 when filled', function(){
    bottle.fill();
    assert.equal(100, bottle.volume);
  });
  // 3. should go down by 10 when drank.
  it('should reduce by 10 when drank', function(){
    bottle.fill();
    var startValue = bottle.volume
    bottle.drink();
    assert.equal(startValue -10, bottle.volume);
  });
  // 4. should go to 0 when emptied
  it('should go to 0 when emptied', function(){
    bottle.emptied();
    assert.equal(0, bottle.volume);
  });
  // 5. should not be able to go below 0
  it('should not be able to go below 0', function(){
    bottle.emptied();
    assert.equal(0, bottle.volume)
  });
 
})