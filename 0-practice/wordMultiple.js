function firstChar(wordArray){
  let theMap = new Map();
  for (let word of wordArray){
    if (theMap.has(word)){
      theMap.set(word, true);
    }
    else{
      theMap.set(word, false);
    }
  }
  return theMap;
}