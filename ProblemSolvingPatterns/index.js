function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    var correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex == -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

console.log(same([1, 2, 3, 2], [9, 4, 1, 4]));
// but its n^2 :(((

// second version
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    console.log("hello", frequencyCounter1[val]);
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3, 2, 5], [9, 4, 1, 4, 25]));

// anagram challange
function validAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of string1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of string2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  return true;
}

console.log(validAnagram("anagram", "nagaram"));

// sumZero function
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log("answer: ", sumZero([-4, -3, -2, -1, 0, 1, 9, 7, 8]));

// countUniqueValues: implement func which accepts sorted arr, and counts the unique vals in the arr
// There can be negative nums in the arr, but it will always be sorted
function countUniqueValues(arr) {
  let uniqueVal = 0;
  let lastNumber = Infinity;
  for (let currVal of arr) {
    if (currVal === lastNumber) continue;

    uniqueVal++;
    lastNumber = currVal;
  }
  return uniqueVal;
}

console.log(countUniqueValues([-2, -1, -1, 0, 1]));

// sliding window for time O(n^2)
function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let maxVal = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > maxVal) {
      maxVal = temp;
    }
  }
  return maxVal;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 3));

// sliding window for O(n)
function maxSubarraySum(arr, numb) {
  if (arr.length < numb) return null;

  let maxVal = -Infinity;
  let tempVal = 0;

  for (let i = 0; i < numb; i++) {
    tempVal += arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    tempVal = tempVal - arr[i] + arr[numb + i];
    if (maxVal < tempVal) {
      maxVal = tempVal;
    }
  }

  return maxVal;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));

// search O(n)
function search(arr, num) {
  for (let i = 0; i <= arr.length; i++) {
    if (num === arr[i]) {
      return arr[i];
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4));

// BinarySearch log(n)


//challange
function areThereDuplicates() {
  let obj = {};
  for(let i=0;i<arguments.length;i++){
    let val = arguments[i];
    if(!obj[val]){
      obj[val] = 1;
    } else {
      return true;
    }
  }
  return false;
}