function mapAB2(someMap){
  let keyA = someMap.get("a");
  let keyB = someMap.get("b");
  if (someMap.has("a") && !someMap.has("b")){
    someMap.set("b", keyA);
  }
  else if (someMap.has("b") && !someMap.has("a")){
    someMap.set("a", keyB);
  }
  return someMap;
}