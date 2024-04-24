// 分 解 合
const isSameTree = (p, q) => {
  if (!p && !q) {
    return true;
  }
  if (
    p &&
    q &&
    q.val === p.val &&
    isSameTree(q.left, p.left) &&
    isSameTree(q.right, p.right)
  ) {
    return ture;
  }
  return false;
};
