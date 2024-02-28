function reverse(str) {
  if (str.length === 0) return "";
  return reverse(str.slice(1)) + str[0];
}
console.log(reverse("awesome")); // 'emosewa'
// reverse("awesome")
// wesome + a       |       emosew + a = emosewa
// esome + w        |       emose + w = emosew
// some  + e        |       emos + e = emose
// ome  + s         |       emo + s = emos
// me + o           |       em + o = emo
// e + m            |       'e' + m = em
// '' + e           |       '' + e = 'e'
// if '' return ''  |       so returns ''

// isPalindrome Solution

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}
// someRecursive Solution

function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}
// flatten Solution

function flatten(oldArr) {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}
