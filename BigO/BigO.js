// // addUpTo function
// function addUpTo(numb) {
//   total = 0;
//   for (let i = 0; i <= numb; i++) {
//     total += i;
//   }
//   return total;
// }
// addUpTo(10);
// var t1 = performance.now();
// addUpTo(1000000000);
// var t2 = performance.now();
// console.log(`Time is ${(t2 - t1) / 1000} seconds`);

// // addUpTo function another one
// function addUpTo2(numbe) {
//   return (n * (n + 1)) / 2;
// }
// var t1 = performance.now();
// addUpTo2(1000000000);
// var t2 = performance.now();
// console.log(`Time is ${(t2 - t1) / 1000} seconds`);

// // printAllPairs
// function printAllPairs(n) {
//   for (let i = 0; i <= n; i++) {
//     for (let j = 0; j <= i; j++) {
//       console.log(i, j);
//     }
//   }
// }
// console.log(printAllPairs(10));

// // count up and down
// function countUpAndDown(n) {
//   console.log("Counting up");
//   for (let i = 0; i <= n; i++) {
//     console.log(i);
//   }
//   console.log("Reached to the top");
//   console.log("Going down");
//   for (let j = n - 1; j >= 0; j--) {
//     console.log(j);
//   }
//   console.log("Back down!");
// }

// console.log(countUpAndDown(10));

//OBJECTS

let instructor = {
  firstName: "Temur",
  lastName: "Murtazaev",
  favouriteNumbers: [8, 7, 6],
};

// console.log(Object.keys(instructor));
// console.log(Object.entries(instructor));
// console.log(Object.values(instructor));
// console.log(instructor.hasOwnProperty("firstName"));

// Arrays
let names = ["Temur", "Bobur", "Boboyor", "Og'abek", "Sardor"];
let surnames = ["Murtazaev", "Ahmedov", "Babayan", "Gerard", "Quchqarov"];
// console.log(names);
// console.log(surnames);
// names.push("Gayrat");
// console.log(names);
// names.pop();
// console.log(names);
// names.shift();
// console.log(names);
// names.unshift("Gulnoza");
// console.log(names);
// console.log("Slice method for names", names.slice(2));
// console.log(names);
// console.log();
// console.log(surnames);
// surnames.splice(2, 0, "Mamtaliyev");
// console.log("Splice method for adding", surnames);
// console.log("Splice method for surnames", surnames.splice(4, 1, "To'raqulov"));
// console.log(surnames);
// console.log();
// console.log(names.concat(surnames));
// console.log(names.sort());
