/**
 * 快排，先从数组里选一个’基准‘ 比这个基准小的数放到其前面，大的放到后面
 * @param {Array} arr
 */
const quickSort = (arr) => {
  if (arr.length < 2) return arr;
  let mid = arr[arr.length >> 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] < mid ? left.push(arr[i]) : right.push(arr[i]);
  }
  return [...quickSort(left), mid, ...quickSort(right)];
};

// const quickSort = (a) => {
//   const rec = (arr) => {
//     if (arr.length <= 1) {
//       return arr;
//     }
//     const left = [];
//     const right = [];
//     // 将"基准"设置为数组头部元素
//     const mid = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < mid) {
//         left.push(arr[i]);
//       } else {
//         right.push(arr[i]);
//       }
//     }
//     return [...rec(left), mid, ...rec(right)];
//   };
//   return rec(a);
// };
console.log(quickSort([2, 4, 5, 3, 1, 5]));
