var waterBottle = {
  volume: 0,
  fill: function(){
    this.volume = 100;
  },
  drink: function(){ 
  if(this.volume >= 10){
    this.volume -= 10;
      }else{
    this.volume = 0;
      }
  },
  emptied: function(){
    this.volume = 0;
    },
}

module.exports = waterBottle;