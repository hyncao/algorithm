// 938. 二叉搜索树的范围和

// 给定二叉搜索树的根结点 root，返回值位于范围 [low, high] 之间的所有结点的值的和。

// 输入：root = [10,5,15,3,7,null,18], low = 7, high = 15
// 输出：32

// 输入：root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
// 输出：23

// 执行用时：
// 176 ms, 在所有 JavaScript 提交中击败了 94.26% 的用户
// 内存消耗：
// 72.1 MB, 在所有 JavaScript 提交中击败了 72.95% 的用户
const rangeSumBST = (root, low, high) => {
  let res = low + high;
  const fn = root => {
    if (!root) return;
    fn(root.left);
    if (root.val > low && root.val < high) res += root.val;
    fn(root.right);
  };
  fn(root);
  return res;
};

const root = {
    val: 10,
    left: {
      val: 5,
      left: {
        val: 3,
      },
      right: {
        val: 7,
      },
    },
    right: {
      val: 15,
      right: {
        val: 18,
      },
    },
  },
  low = 6,
  high = 10;

console.log(rangeSumBST(root, low, high));
