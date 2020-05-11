var greater = function(num1, num2, num3){
  arr = [num1, num2, num3].sort(function(a,b) {return b-a});
  return arr[0];
} 