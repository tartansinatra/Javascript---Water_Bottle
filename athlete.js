var athlete = {
  name: 'Seb',
  hydration: 100, 
  distanceCovered: 0,
  run: function(){
    if(this.hydration == 0){
      this.distanceCovered + 0;
    }else{
      this.hydration -= 10,
      this.distanceCovered += 1;
    }
  },
  hydrate: function(bottle){
    bottle.drink();
    this.hydration = 100;
  }
}

module.exports = athlete;