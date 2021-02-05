function word0(keyArray){
  let mapOfArray = new Map();
  for (let i = 0; i < keyArray.length; i++){
    mapOfArray.set(keyArray[i], 0);
  }
  return mapOfArray;
}