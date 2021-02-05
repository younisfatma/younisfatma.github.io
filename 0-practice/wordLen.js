function word0(keyArray){
  let mapOfArray = new Map();
  let lengthOfString = 0;
  for (let i = 0; i < keyArray.length; i++){
    lengthOfString = keyArray[i].length;
    mapOfArray.set(keyArray[i], lengthOfString);
  }
  return mapOfArray;
}