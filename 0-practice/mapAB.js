function mapAB(someMap){
  if (someMap.has("a") && someMap.has("b")){
    let wordA = someMap.get("a");
    let wordB = someMap.get("b");
    someMap.set("ab", wordA+wordB);
  }
  return someMap;
}