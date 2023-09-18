// 1022. 从根到叶的二进制数之和

// 给出一棵二叉树，其上每个结点的值都是 0 或 1 。每一条从根到叶的路径都代表一个从最高有效位开始的二进制数。

// 例如，如果路径为 0 -> 1 -> 1 -> 0 -> 1，那么它表示二进制数 01101，也就是 13 。
// 对树上的每一片叶子，我们都要找出从根到该叶子的路径所表示的数字。

// 返回这些数字之和。题目数据保证答案是一个 32 位 整数。

// 输入：root = [1,0,1,0,1,0,1]
// 输出：22
// 解释：(100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22

// 输入：root = [0]
// 输出：0

// O(n) O(n)
// 执行用时：
// 48 ms, 在所有 JavaScript 提交中击败了 100% 的用户
// 内存消耗：
// 41.93 MB, 在所有 JavaScript 提交中击败了 92.65% 的用户
const sumRootToLeaf1 = root => {
  const res = [];
  const loop = (root, val = '') => {
    const value = val + root.val;
    if (root.left) loop(root.left, value);
    if (root.right) loop(root.right, value);
    if (!root.left && !root.right) res.push(value);
  };
  loop(root);
  let reduce = 0;
  for (const i of res) {
    reduce += parseInt(i, 2);
  }
  return reduce;
};

// O(n) O(n)
// 执行用时：
// 76 ms, 在所有 JavaScript 提交中击败了 26.87% 的用户
// 内存消耗：
// 42.01 MB, 在所有 JavaScript 提交中击败了 91.04% 的用户
const sumRootToLeaf2 = root => {
  let res = 0;
  const loop = (root, val = '') => {
    const value = val + root.val;
    if (root.left) loop(root.left, value);
    if (root.right) loop(root.right, value);
    if (!root.left && !root.right) res += parseInt(value,2);
  };
  loop(root);
  return res;
};

const root = {
  val: 1,
  left: {
    val: 0,
    left: {
      val: 0,
    },
    right: {
      val: 1,
    },
  },
  right: {
    val: 1,
    left: {
      val: 0,
    },
    right: {
      val: 1,
    },
  },
};

console.log(sumRootToLeaf2(root));
