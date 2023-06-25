// 965. 单值二叉树

// 如果二叉树每个节点都具有相同的值，那么该二叉树就是单值二叉树。

// 只有给定的树是单值二叉树时，才返回 true；否则返回 false。

// 输入：[1,1,1,1,1,null,1]
// 输出：true

// 输入：[2,2,2,5,2]
// 输出：false

// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 81.61% 的用户
// 内存消耗：
// 41.5 MB, 在所有 JavaScript 提交中击败了 73.56% 
const isUnivalTree = root => {
  const val = root.val;
  let flag = true;
  const fn = root => {
    if (!root) return;
    if (val !== root.val) {
      flag = false;
      return;
    }
    fn(root.left);
    fn(root.right);
  };
  fn(root);
  return flag;
};

const root = [2, 2, 2, 5, 2];

const { array2TreeNode } = require('../lib/utils');

console.log(isUnivalTree(array2TreeNode(root)));
