function fibonacci(n){
  //base case
  if (n === 0){
    return 0;
  }
  if (n === 1){
    return 1;
  }
  //patern
  return fibonacci(n-2) + fibonacci(n-1);
}