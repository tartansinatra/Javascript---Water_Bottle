var athlete = require('./athlete');
var assert = require('assert');
var bottle = require('./water_bottle');



describe('athlete', function(){
  // Athlete should have a hydration attribute that starts at 100.  
  it('should have a hydration attribute that starts at 100', function(){
    assert.equal(100, athlete.hydration)
  });
  // Athlete should have a distance covered attribute starts at 0.
  it('should have a distance covered attribute starts at 0', function(){
    athlete.distanceCovered = 0
    assert.equal(0, athlete.distanceCovered)
  });
  // Athlete should be able to run: increasing distance, decreasing hydration.
  it('able to run - increase distance, decrease hydration', function(){
    var startDistance = athlete.distanceCovered;
    var startHydration = athlete.hydration;
    athlete.run();
    assert.equal(startDistance +1, athlete.distanceCovered);
    assert.equal(startHydration -10, athlete.hydration);
  });
  // Athlete should not move when running dehydrated: hydration at 0;
  it('athlete not move when running dehydrated: hydration at 0', function(){
    athlete.hydration = 0;
    athlete.distanceCovered = 10;
    athlete.run();
    assert.equal(10, athlete.distanceCovered);
  })
  // Athlete should be able to increase hydration by drinking from water bottle.
  it('athlete increase hydration by drinking from water bottle', function(){
    athlete.hydration = 0;
    athlete.distanceCovered = 10;
    bottle.fill();
    athlete.hydrate(bottle);
    assert.equal(100, athlete.hydration);
    assert.equal(90, bottle.volume);
  })
})



// Further:

// Create a pedometer to store how far the athlete has run.