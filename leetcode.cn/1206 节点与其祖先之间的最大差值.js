// 1026. 节点与其祖先之间的最大差值

// 给定二叉树的根节点 root，找出存在于 不同 节点 A 和 B 之间的最大值 V，其中 V = |A.val - B.val|，且 A 是 B 的祖先。

// （如果 A 的任何子节点之一为 B，或者 A 的任何子节点是 B 的祖先，那么我们认为 A 是 B 的祖先）

// 输入：root = [8,3,10,1,6,null,14,null,null,4,7,13]
// 输出：7
// 解释：
// 我们有大量的节点与其祖先的差值，其中一些如下：
// |8 - 3| = 5
// |3 - 7| = 4
// |8 - 1| = 7
// |10 - 13| = 3
// 在所有可能的差值中，最大值 7 由 |8 - 1| = 7 得出。

// 输入：root = [1,null,2,null,0,3]
// 输出：3

// 思考：每次遍历的时候，只需要记住最大和最小的祖先传下去就行，不用记住所有的祖先
// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 92.31% 的用户
// 内存消耗：
// 44.4 MB, 在所有 JavaScript 提交中击败了 46.15% 的用户
const maxAncestorDiff = root => {
  let max = 0;
  const fn = (root, minParent, maxParent) => {
    if (!root) return;
    max = Math.max(max, Math.abs(maxParent - root.val), Math.abs(minParent - root.val));
    minParent = Math.min(minParent, root.val);
    maxParent = Math.max(maxParent, root.val);
    fn(root.left, minParent, maxParent);
    fn(root.right, minParent, maxParent);
  };
  fn(root.left, root.val, root.val);
  fn(root.right, root.val, root.val);
  return max;
};

// [2,4,3,1,null,0,5,null,6,null,null,null,7]
const root = {
  val: 2,
  left: {
    val: 4,
    left: {
      val: 1,
      right: {
        val: 6,
      },
    },
  },
  right: {
    val: 3,
    left: {
      val: 0,
    },
    right: {
      val: 6,
      right: {
        val: 7,
      },
    },
  },
};

console.log(maxAncestorDiff(root));
