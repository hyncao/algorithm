// 108. 将有序数组转换为二叉搜索树

// 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。

// 高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1」的二叉树。

// 输入：nums = [-10,-3,0,5,9]
// 输出：[0,-3,9,-10,null,5]
// 解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// 递归 O(n)
// 执行用时：
// 80 ms, 在所有 JavaScript 提交中击败了 25.36% 的用户
// 内存消耗：
// 43.2 MB, 在所有 JavaScript 提交中击败了 88.86% 的用户
const sortedArrayToBST = nums => {
  if (nums.length === 0) return null;

  const mid = nums.length >> 1;
  const node = new TreeNode(nums[mid]);
  node.left = sortedArrayToBST(nums.slice(0, mid));
  node.right = sortedArrayToBST(nums.slice(mid + 1));

  return node;
};

const nums = [-10, -3, 0, 5, 9];

console.log(sortedArrayToBST(nums));
