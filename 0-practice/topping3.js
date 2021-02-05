function topping1(someMap){
  let keypotato = someMap.get("potato");
  let keysalad = someMap.get("salad");
  if (someMap.has("potato")){
    someMap.set("fries", keypotato);
 }
  if (someMap.has("salad")){
    someMap.set("spinach", keysalad);
 }
return someMap;
}