const mergeSort = (arr) => {
  const rec = (arr) => {
    if (arr.length === 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);
    let orderLeft = rec(left);
    let orderRight = rec(right);
    let res = [];
    while (orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) {
        res.push(
          // 关键比较步骤
          // 因为orderleft和orderright永远都是已经排序好了的，所以只需要一直比较数组的第一个数就可以，将小的数推入结果数组
          orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift()
        );
        // 如果left或者order已经全部加入了结果数组，另外一个还剩余，因为是有序数组，所有直接全部推入就可以了
      } else if (orderLeft.length) {
        res.push(orderLeft.shift());
      } else if (orderRight.length) {
        res.push(orderRight.shift());
      }
    }
    return res;
  };
  const res = rec(arr);
  res.forEach((n, i) => {
    arr[i] = n;
  });
  return arr;
};
const mergeSort2 = (arr) => {
  const rec = function (_arr) {
    if (_arr.length === 1) return _arr;
    let mid = _arr.length >> 1;
    let left = _arr.slice(0, mid);
    let right = _arr.slice(mid, _arr.length);
    let orderLeft = rec(left);
    let orderRight = rec(right);
    let res = [];
    while (orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) {
        res.push(
          orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift()
        );
      } else if (orderLeft.length) {
        res.push(orderLeft.shift());
      } else if (orderRight.length) {
        res.push(orderRight.shift());
      }
    }
    return res;
  };
  const res = rec(arr);
  return res;
};
const mergeSort3 = (arr) => {
  function rec(_arr) {
    if (_arr.length === 1) return _arr;
    let len = _arr.length;
    let mid = len >> 1;
    let left = _arr.slice(0, mid);
    let right = _arr.slice(mid, len);
    let orderLeft = rec(left);
    let orderRight = rec(right);
    let res = [];
    while (orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) {
        res.push(
          orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift()
        );
      } else if (orderLeft.length) {
        res.push(orderLeft.shift());
      } else {
        res.push(orderRight.shift());
      }
    }
    return res;
  }
  return rec(arr);
};
console.log(mergeSort3([1, 5, 6, 2, 3, 5, 4]));
