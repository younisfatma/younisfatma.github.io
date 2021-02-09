function pairs(wordArray){
  let mapOfArray = new Map();
  for (let word of wordArray){
    mapOfArray.set(word[0], word[word.length-1]);
  }
  return mapOfArray;
}