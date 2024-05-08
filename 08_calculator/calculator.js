const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  let sum = 0;
	for (let i = 0 ; i < arr.length; i++){
        sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
 let mul = 1;
 for(let i = 0 ; i < arr.length; i++){
  mul *= arr[i];
 }
 return mul;
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
	let fact = 1; 
     
    if(n === 0){
        return 1;
      }
    for (let i = 2; i <= n; i++) {
      fact = fact * i; 
    }
    return fact; 
};
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
