// 404. 左叶子之和

// 给定二叉树的根节点 root ，返回所有左叶子之和。

// 输入: root = [3,9,20,null,null,15,7]
// 输出: 24
// 解释: 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24

// 输入: root = [1]
// 输出: 0

// 提示:

// 节点数在 [1, 1000] 范围内
// -1000 <= Node.val <= 1000

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// 执行用时：
// 48 ms, 在所有 JavaScript 提交中击败了 99.76% 的用户
// 内存消耗：
// 43.2 MB, 在所有 JavaScript 提交中击败了 39.62% 的用户
const sumOfLeftLeaves = (root, sum = 0) => {
  if (!root) return sum;
  if (root.left && !root.left.left && !root.left.right) sum += root.left.val;
  return sumOfLeftLeaves(root.right, sumOfLeftLeaves(root.left, sum));
};

const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7, new TreeNode(100))));

console.log(sumOfLeftLeaves(root));
