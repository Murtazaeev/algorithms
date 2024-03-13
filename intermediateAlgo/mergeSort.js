function merge(arr1, arr2) {
  let newArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }

  if (i < arr1.length) {
    pushRemainingPart(arr1, newArr, i);
  }
  if (j < arr2.length) {
    pushRemainingPart(arr2, newArr, j);
  }

  return newArr;
}

function pushRemainingPart(arr, newArr, value) {
  for (let i = value; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
}
