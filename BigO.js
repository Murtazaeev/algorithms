// addUpTo function
function addUpTo(numb) {
  total = 0;
  for (let i = 0; i <= numb; i++) {
    total += i;
  }
  return total;
}
addUpTo(10);
var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time is ${(t2 - t1) / 1000} seconds`);

// addUpTo function another one
function addUpTo2(numbe) {
  return (n * (n + 1)) / 2;
}
var t1 = performance.now();
addUpTo2(1000000000);
var t2 = performance.now();
console.log(`Time is ${(t2 - t1) / 1000} seconds`);

// printAllPairs
function printAllPairs(n) {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
      console.log(i, j);
    }
  }
}
console.log(printAllPairs(10));

// count up and down
function countUpAndDown(n) {
  console.log("Counting up");
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
  console.log("Reached to the top");
  console.log("Going down");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down!");
}

console.log(10);
