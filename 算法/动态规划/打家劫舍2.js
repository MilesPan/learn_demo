//这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的
// 相对于打家劫舍一，这个就是变成了环
// 可以考虑两种情况
// 1.去掉第一家
// 2.去掉最后一家
// 比较两种情况下打劫到的钱即可
const rob = (arr) => {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];
  return Math.max(
    robRange(arr, 0, arr.length - 2),
    robRange(arr, 1, arr.length - 1)
  );
};
const robRange = (arr, start, end) => {
  if (start === end) return arr[start];
  if (arr.length < 4) return Math.max(...arr);
  let dp = new Array(start + end + 1).fill(0);
  dp[start] = arr[start];
  dp[start + 1] = Math.max(arr[start + 1], arr[start]);
  for (let i = start + 2; i <= end; i++) {
    dp[i] = Math.max(dp[i - 1], arr[i] + dp[i - 2]);
  }
  console.log(dp);
  return dp[end];
};
console.log(rob([1, 2, 3, 4, 5]));
