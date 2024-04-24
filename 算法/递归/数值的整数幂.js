/**
 * 主要是防止内存溢出
 * @param {*} x 数值
 * @param {*} n 幂次
 */
const myPow = (x, n) => {
  if (n === 1) return x;
  if (n === 0) return 1;
  if (n === -1) return 1 / x;
  //   x为奇数;
  if (n === 0) return 1;
  // n小于0，特殊情况
  if (n < 0) return 1 / myPow(x, -n);
  // n奇数
  if (n & 1) return x * myPow(x, n - 1);
  // n偶数
  return myPow(x * x, n >> 1);
};

// const myPow1 = (x, n) => {
//   // 递归出口
//   if (n === 0) return 1;
//   // n小于0，特殊情况
//   if (n < 0) return 1 / myPow(x, -n);
//   // n奇数
//   if (n & 1) return x * myPow(x, n - 1);
//   // n偶数
//   return myPow(x * x, n / 2);
// };
console.log(myPow(2, -2147483648));
