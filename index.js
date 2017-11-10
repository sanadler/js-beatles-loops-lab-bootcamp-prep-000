function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(let i=0; i < musicians.length; i++){
      array[i] = musicians[i] + " plays the " + instruments[i]);
  }
  console.log(array);
  return array;
}

musicians = ["john", "ringo", "paul"];
instruments = ["guitar", "alkfj", "gioa"]
theBeatlesPlay(musicians, instruments);
