function theBeatlesPlay(musicans, instruments){
  var newarray = [] ;
  for (let i = 0; i < musicans.length; i++){
    newarray[i] = `${musicans[i]} plays ${instruments[i]}`
  }
  return newarray;
  
}

function johnLennonFacts(facts){
  let i = 0;
  while(i < facts.length){
    facts[i] = `${facts[i]}!!!`
  }
  return facts;
}