// 530. 二叉搜索树的最小绝对差

// 给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。

// 差值是一个正数，其数值等于两值之差的绝对值。

// 输入：root = [4,2,6,1,3]
// 输出：1

// 输入：root = [1,0,48,null,null,12,49]
// 输出：1

const { array2TreeNode } = require('../lib/utils');

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 96.74% 的用户
// 内存消耗：
// 46.4 MB, 在所有 JavaScript 提交中击败了 73.64% 的用户
const getMinimumDifference = root => {
  let last;
  let min = Infinity;
  const fn = root => {
    if (root) {
      fn(root.left);
      if (last !== undefined) {
        min = Math.min(min, root.val - last);
      }
      last = root.val;
      fn(root.right);
    }
  };
  fn(root);
  return min;
};

// const root = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(6));

// 期望：47
// [543,384,652,null,445,null,699]
// const root = new TreeNode(543, new TreeNode(384, null, new TreeNode(445)), new TreeNode(652, null, new TreeNode(699)));
const root = array2TreeNode([543, 384, 652, null, 445, null, 699]);

// 期望：1
// [1,0,48,null,null,12,49]
// const root = new TreeNode(1, new TreeNode(0), new TreeNode(48, new TreeNode(12), new TreeNode(49)));

console.log(getMinimumDifference(root));
