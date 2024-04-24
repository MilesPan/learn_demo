/**
 * 时间复杂度 n^2
 * @param {Array} arr
 * @returns {Array} arr
 */
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
};
console.log(bubbleSort([1, 2, 4, 5, 7, 4, 2, 6, 5]));
