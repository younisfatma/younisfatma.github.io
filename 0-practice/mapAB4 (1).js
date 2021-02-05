function mapAB2(someMap){
  if (someMap.has("a")&& someMap.has("b")){
    let keyA = someMap.get("a");
    let keyB = someMap.get("b");
    if (keyA.length > keyB.length){
      someMap.set("c", keyA);
    }
    if (keyB.length > keyA.length){
      someMap.set("c", keyB);
    }
    if (keyB.length === keyA.length){
      someMap.set("a", "");
      someMap.set("b", "");
    }
  }
  return someMap;
}