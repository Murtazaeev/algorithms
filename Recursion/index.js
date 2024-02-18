// Factorial function with simple loop
function factorial(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total += i;
  }
  return total;
}

// Factorial function with recursion
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// recursive function to collect odd numbers with helper function
function collectOddNumber(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;

    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);

    helper(helperInput.slice(1));
  }

  helper(arr);
  return result;
}

// pure recursive function to collect odd numbers without helper function
function collectOddNumber(arr) {
  let result = [];

  if (arr.length === 0) return result;

  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }
  result = result.concat(collectOddNumber(arr.slice(1)));
  return result;
}
// collectOddNumber([1, 2, 3, 4, 5]);
// [1].concat(collectOddNumber([2, 3, 4, 5]));
//                 [].concat(collectOddNumber([3,4,5]))
//                                 [3].concat(collectOddNumber([4,5]))
//                                                 [].concat(collectOddNumber([5]))
//                                                                 [5].concat(collectOddNumber([]))
//                                                                                 return result; wich is emplty array []


// POWER SOLUTION
function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}
// FACTORIAL SOLUTION
function factorial(x){
   if (x < 0 ) return 0;
   if (x <= 1 ) return 1;
   return x * factorial(x-1);
}
// PRODUCT OF ARRAY SOLUTION
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}
// RECURSIVE RANGE SOLUTION
function recursiveRange(x){
   if (x === 0 ) return 0;
   return x + recursiveRange(x-1);
}
// FIBONACCI SOLUTION
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}


