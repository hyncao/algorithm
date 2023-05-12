// 783. 二叉搜索树节点最小距离

// 给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。

// 差值是一个正数，其数值等于两值之差的绝对值。

// 输入：root = [4,2,6,1,3]
// 输出：1

// 输入：root = [1,0,48,null,null,12,49]
// 输出：1

// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 68.14% 的用户
// 内存消耗：
// 41.6 MB, 在所有 JavaScript 提交中击败了 78.76% 的用户
const minDiffInBST = root => {
  let min = Infinity;
  let prev = null;
  const fn = root => {
    if (!root) return;
    fn(root.left);
    if (prev !== null) {
      min = Math.min(min, root.val - prev);
      if (min === 1) return;
    }
    prev = root.val;
    fn(root.right);
  };
  fn(root);
  return min;
};

const root = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
    },
    right: {
      val: 3,
    },
  },
  right: {
    val: 6,
    // left: {
    //   val: 1277,
    //   left: {
    //     val: 519,
    //   },
    // },
    // right: {
    //   val: 2776,
    // },
  },
};

console.log(minDiffInBST(root));
