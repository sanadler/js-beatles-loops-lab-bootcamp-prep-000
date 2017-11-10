function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(let i=0; i < musicians.length; i++){
      console.log(musicians[i] + " plays the " + instruments[i]);
  }
}

musicians = ["john", "ringo", "paul"];
instruments = ["guitar", "alkfj", "gioa"]
theBeatlesPlay(musicians, instruments);
