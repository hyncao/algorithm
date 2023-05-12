// 112. 路径总和

// 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum。
// 判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum。如果存在，返回 true；否则，返回 false。

// 输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// 输出：true

// 输入：root = [1,2,3], targetSum = 5
// 输出：false

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 95.30% 的用户
// 内存消耗：
// 44.4 MB, 在所有 JavaScript 提交中击败了 36.83% 的用户
const hasPathSum1 = (root, targetSum) => {
  if (!root) return false;
  let res = false;
  const fn = (node, remain) => {
    if (res) return;
    if (node.left === null && node.right === null) {
      if (node.val === remain) {
        res = true;
      }
      return;
    }
    node.left && fn(node.left, remain - node.val);
    node.right && fn(node.right, remain - node.val);
  };
  fn(root, targetSum);
  return res;
};

// hasPathSum1 多用了一个变量存结果, hasPathSum2 则用了或运算, 直接可以不用这个变量
// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了86.78%的用户
// 内存消耗：
// 44.1 MB, 在所有 JavaScript 提交中击败了 91.37% 的用户
const hasPathSum2 = (root, targetSum) => {
  if (!root) return false;
  if (root.left === null && root.right === null) {
    return root.val === targetSum;
  }
  return hasPathSum2(root.left, targetSum - root.val) || hasPathSum2(root.right, targetSum - root.val);
};

const root = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
  new TreeNode(8, new TreeNode(13), new TreeNode(4, new TreeNode(1)))
);

const targetSum = 22;

console.log(hasPathSum2(root, targetSum));
