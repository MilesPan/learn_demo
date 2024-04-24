const binarySearch = (arr, n) => {
  // 二分查找，通过一个窗口收缩范围
  // 但是要先保证数组是个有序数组
  let left = 0;
  let right = arr.length - 1;

  // 当左指针比右指针还大时说明遍历完了数组都没找到这个元素
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midNum = arr[mid];
    // 当前中间值小于查找值，说明查找值在中间值右边的数组中（默认升序）
    if (midNum < n) {
      left = mid + 1;
    } else if (midNum > n) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};
const binarySearch2 = (arr, target, start, end) => {
  let res = -1;
  let mid = (start + end) >> 1;
  if (arr[mid] === target) {
    res = mid;
    return res;
  }
  if (start >= end) {
    return res;
  }
  if (arr[mid] < target) {
    return binarySearch2(arr, target, mid + 1, end);
  }
  if (arr[mid] > target) {
    return binarySearch2(arr, target, start, mid - 1);
  }
  return res;
};
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 3));
console.log(binarySearch2([1, 2, 3, 4, 5, 6], 6, 0, 5));
