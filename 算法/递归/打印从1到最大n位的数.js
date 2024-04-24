// input : 2
//  output:[1,2,...,99]

// input :3
// output:[1,2,3,....999]

var printNumbers = function (n) {
  let res = [];
  const dfs = (str, len) => {
    // 位数达到长度要求就可以退出并加入结果集中了
    if (str.length == len) return res.push(str);
    for (let i = 0; i <= 9; i++) {
      str += i;
      // 之所以要调用dfs  比方说当前str为11而len是3就可以调用dfs来达到把110 111 112...加入到结果集中
      dfs(str, len);
      // 这里有点回溯的感觉  在递归调用之前多加了一位（也就是加了i） 在递归退出之后撤消选择
      str = str.substring(0, str.length - 1);
    }
  };
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j < 9; j++) {
      // i 控制位数的
      // j 控制大小的
      dfs(j.toString(), i);
    }
  }
  return res;
};
console.log(printNumbers(8));
