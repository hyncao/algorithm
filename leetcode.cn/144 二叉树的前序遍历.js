// 144. 二叉树的前序遍历

// 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
// 前序, 中序, 后序, 其实都差不多, 只是 push 的时候不同罢了

var preorderTraversal = function (root) {
  if (!root) return [];
  const res = [];
  const fn = root => {
    if (root) {
      res.push(root.val);
      fn(root.left);
      fn(root.right);
    }
  };
  fn(root);
  return res;
};
