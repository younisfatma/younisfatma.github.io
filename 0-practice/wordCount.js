function wordCount(wordArray){
  let mapOfArray = new Map();
  let value = 0;
  for (let word of wordArray){
    if(mapOfArray.has(word)){
    value = mapOfArray.get(word);
       }
    else{
    value = 0;
    }
    
    mapOfArray.set(word, value+1);
  }
  return mapOfArray;

}