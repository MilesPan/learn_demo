const isMirrorTree = (root) => {
  if (!root) return ture;
  // 递归地判读树1的左子树是否和树2的右子树相等。
  const isMirror = (l, r) => {
    if (!l && !r) return true;
    if (
      l &&
      r &&
      l.val === r.val &&
      isMirror(l.left, r.right) &&
      isMirror(r.left, l.right)
    ) {
      return true;
    }
    return false;
  };
  return isMirror(root.left, root.right);
};
