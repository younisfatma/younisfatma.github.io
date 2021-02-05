function topping1(someMap){
  let keys = someMap.get("ice cream");
  if (someMap.has("ice cream")){
    someMap.set("yogurt", keys);
 }
  if (someMap.has("spinach")){
    someMap.set("spinach", "nuts");
 }
return someMap;
}