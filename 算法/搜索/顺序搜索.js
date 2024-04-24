const sequentialSearch = (arr, n) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return i;
    }
  }
  return -1;
};
console.log(sequentialSearch([1, 3, 45, 5, 6, 7, 5, 3, 2], 9));
