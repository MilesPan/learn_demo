// f(k)代表从前K个房屋里能偷窃到的最大数额
// AK是第K个房屋的钱
// f(k) = max(f(k-2)+Ak,f(k-1))
const rob = (arr) => {
  if (arr.length === 0) return 0;
  const dp = [0, arr[0]];
  for (let i = 2; i <= arr.length; i++) {
    //   打劫当前房屋，则金额为当前房屋(index)+ 前面相隔的最大金额(index-2)
    // 不打劫当前房屋，则金额为前面一个的最大金额
    dp[i] = Math.max(dp[i - 2] + arr[i - 1], dp[i - 1]);
  }
  return dp[dp.length - 1];
};
console.log(rob([2, 7, 9, 3, 1]));
