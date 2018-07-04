function theBeatlesPlay(musicans, instruments){
  var newarray = [] ;
  for (let i = 0; i < musicans.length; i++){
    newarray[i] = `${musicans[i]} plays ${instruments[i]}`
  }
  return newarray;
  
}