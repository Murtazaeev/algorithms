// write a function that takes
//a string and returns the count of the letters
// function charCount(str) {
//   var result = {};
//   for (let i = 0; i < str.length; i++) {
//     var char = str[i].toLowerCase();
//     if (result[char] > 0) {
//       result[char]++;
//     } else {
//       result[char] = 1;
//     }
//   }
//   return result;
// }

//  changed solution version 1

// function charCount(str) {
//   var result = {};
//   for (let i = 0; i < str.length; i++) {
//     var char = str[i].toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       if (result[char] > 0) {
//         result[char]++;
//       } else {
//         result[char] = 1;
//       }
//     }
//   }
//   return result;
// }

// console.log(charCount("helloFutureGoogler"));

// changed solution version 2
// function charCount(str) {
//   var result = {};
//   for (var char of str) {
//     char = char.toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       if (result[char] > 0) {
//         result[char]++;
//       } else {
//         result[char] = 1;
//       }
//     }
//   }
//   return result;
// }
// console.log(charCount("helloFutureGoogler"));

// changed version 3
// function charCount(str) {
//   var result = {};
//   for (var char of str) {
//     char = char.toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       result[char] = ++result[char] || 1;
//     }
//   }
//   return result;
// }
// console.log(charCount("helloFutureGoogler"));

// changed version 4
function charCount(str) {
  var result = {};
  for (var char of str) {
    char = char.toLowerCase();
    if (isAlphaNumeric(char)) {
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}
console.log(charCount("helloFutureGoogler"));

function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}
