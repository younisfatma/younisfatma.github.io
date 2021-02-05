function parrotTrouble(talking,hour){
  if (talking === true){
    if (hour > 20 ||hour < 7){
      return true;
    }
  }
  return false;
      
}