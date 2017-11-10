function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(let i=0; i < musicians.length; i++){
    for(let j=0; j < instruments.length; j++){
      console.log(musicians[i] + "plays the" + instruments[j]);
    }
  }
}

musicians = ["john", "ringo", "paul"];
instruments = ["guitar", "alkfj", "gioa"]
theBeatlesPlay(musicians, instruments);
