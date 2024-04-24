/**
 * 时间复杂度 n^2
 * @param {Array} arr
 * @returns {Array} arr
 */
const selectionSort = (arr) => {
  // 整体遍历
  for (let i = 0; i < arr.length - 1; i++) {
    //   记录最小的下标
    let minIndex = i;
    // 遍历数组，找出最小值的下标
    for (let j = i; j < arr.length; j++) {
      console.log(minIndex);
      if (arr[j] < arr[minIndex]) {
        console.log(minIndex);
        minIndex = j;
      }
    }
    // 找出最小值下标后将最小值与当前整体遍历的初值进行交换
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
};
const arr = [5, 4, 3, 2, 1];
console.log(selectionSort(arr));
