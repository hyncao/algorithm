// 94. 二叉树的中序遍历

// 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。

// 输入：root = [1,null,2,3]
// 输出：[1,3,2]

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// 递归 O(n)
// 执行用时：
// 68 ms, 在所有 JavaScript 提交中击败了 18.89% 的用户
// 内存消耗：
// 41 MB, 在所有 JavaScript 提交中击败了 79.26% 的用户
const inorderTraversal = root => {
  const res = [];

  const fn = tree => {
    if (!tree) return;
    fn(tree.left);
    res.push(tree.val);
    fn(tree.right);
  };

  fn(root);

  return res;
};

const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));

console.log(inorderTraversal(root));
