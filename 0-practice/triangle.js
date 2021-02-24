function triangle(rows){
  //base case/exit clause
  if (rows===0){
    return 0;
  }
  //pattern
  return rows + triangle(rows-1);
}