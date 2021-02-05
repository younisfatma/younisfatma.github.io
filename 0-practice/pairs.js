function word0(keyArray){
  let mapOfArray = new Map();
  let firstLetter = "";
  let lastLetter = "";
  for (let i = 0; i < keyArray.length; i++){
    firstLetter = keyArray[i]; //needs to split up letters
    lastLetter = keyArray[i]; //needs to split up letters
    mapOfArray.set(firstLetter, lastLetter);
  }
  return mapOfArray;
}