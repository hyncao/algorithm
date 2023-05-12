// 110. 平衡二叉树

// 给定一个二叉树，判断它是否是高度平衡的二叉树。

// 输入：root = [3,9,20,null,null,15,7]
// 输出：true

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// 由下向上递归 O(n)
// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 97.70% 的用户
// 内存消耗：
// 47.2 MB, 在所有 JavaScript 提交中击败了 9.28% 的用户
const isBalanced = root => {
  const fn = (root, deep = 0) => {
    if (root === null) return { res: true, deep };

    const leftRes = fn(root.left, deep + 1);
    const rightRes = fn(root.right, deep + 1);

    if (leftRes.res && rightRes.res && Math.abs(leftRes.deep - rightRes.deep) < 2) {
      return { res: true, deep: Math.max(leftRes.deep, rightRes.deep) };
    }

    return { res: false };
  };

  return fn(root).res;
};

const root = new TreeNode(
  1,
  new TreeNode(2,
    new TreeNode(3,
      new TreeNode(4),
      new TreeNode(4)
    ),
    new TreeNode(3)
  ),
  new TreeNode(2)
);

console.log(isBalanced(root));
