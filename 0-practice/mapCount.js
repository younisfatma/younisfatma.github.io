function mapCount(someMap){
  let count  = 0;
  if (someMap.get("a")){
    count++;
  }
  if (someMap.get("b")){
    count++;
  }
  if (someMap.get("c")){
    count++;
  }
  return count;
  
}