function firstChar(wordArray){
  let wordMap = new Map();
  for (let word of wordArray){
    if (!wordMap.has(word)){
      wordMap.set(word[0], word);
    }
    else{
      let previousword = wordMap.get(word[0]);
      wordMap.set(word[0], previousword + word);
    }
  }
  return wordMap;
}