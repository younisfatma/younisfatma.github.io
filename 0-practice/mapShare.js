function mapBully(someMap){
  let word = someMap.get("a");
  if (someMap.get("a")){
    someMap.set("b", word);
  }
  if (someMap.get("c")){
    someMap.delete("c");
      }
  return someMap;
}