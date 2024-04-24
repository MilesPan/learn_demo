// 动态规划第一步都是 定义子问题
// 然后进行重复执行

// 1. F(n) = F(n-1) + F(n-2)
// 从2开始循环到n
const climbStairs = (n) => {
  if (n < 2) return 1;
  let dp0 = 1;
  let dp1 = 1;
  for (let i = 2; i <= n; i++) {
    const temp = dp0;
    dp0 = dp1;
    dp1 = dp1 + temp;
  }
  return dp1;
};
console.log(climbStairs(4));
