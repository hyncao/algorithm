// 101. 对称二叉树

// 给你一个二叉树的根节点 root ， 检查它是否轴对称。

// 输入：root = [1,2,2,3,4,4,3]
// 输出：true

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// 递归 O(n)
// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 93.55% 的用户
// 内存消耗：
// 43.6 MB, 在所有 JavaScript 提交中击败了 59.70% 的用户
const isSymmetric = root => {
  let res = true;

  const fn = (left, right) => {
    if (!res) return;
    if (left && right) {
      if (left.val === right.val) {
        fn(left.left, right.right);
        fn(left.right, right.left);
      } else {
        res = false;
      }
    } else {
      res = left === right;
    }
  };

  fn(root.left, root.right);

  return res;
};

const root = new TreeNode(2, new TreeNode(3, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(5)));

console.log(isSymmetric(root));
