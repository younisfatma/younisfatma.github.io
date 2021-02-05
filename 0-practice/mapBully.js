function mapBully(someMap){
  let word = someMap.get("a");
  if (someMap.get("a")){
    someMap.set("a", "");
    someMap.set("b", word);
  }
  return someMap;
}