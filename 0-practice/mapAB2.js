function mapAB2(someMap){
  let keyA = someMap.get("a");
  let keyB = someMap.get("b");
  if (someMap.has("a") && someMap.has("a") && keyA === keyB){
    someMap.delete("a");
    someMap.delete("b");
  }
  return someMap;
}