function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(let i=0; i < musicians.length; i++){
      array[i] = musicians[i] + " plays the " + instruments[i];
  }
  return array;
}
