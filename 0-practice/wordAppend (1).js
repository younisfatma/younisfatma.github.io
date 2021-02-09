function wordAppend(wordArray){
  let theMap = new Map();
  let string = "";
  for (let word of wordArray){
    if (theMap.get(word)){
      string = string + word;
      theMap.delete(word);
    }
    else{
      theMap.set(word, word);
    }
  }
  return string;
}