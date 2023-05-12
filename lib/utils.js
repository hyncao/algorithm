class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// 力扣中二叉树的输入是数组类型，每次都要手写一堆 new TreeNode 嵌套很烦
// 此方法可以将传入的 Array 生成正确的 new TreeNode 嵌套
// 下面这两种写法是等价的，明显 array2TreeNode 方法写法更直观
// new TreeNode(0, new TreeNode(1, null, new TreeNode(2)), new TreeNode(3, null, new TreeNode(4)));
// array2TreeNode([0, 1, 3, null, 2, null, 4]);
/**
 * @param {*} arr
 * @returns TreeNode
 */
const array2TreeNode = arr => {
  if (arr.length === 0) return null;
  const root = new TreeNode(arr[0]);
  const fn = (tree, index) => {
    const left = index * 2 + 1;
    const right = index * 2 + 2;
    if (arr[left]) {
      tree.left = new TreeNode(arr[left]);
      fn(tree.left, left);
    }
    if (arr[right]) {
      tree.right = new TreeNode(arr[right]);
      fn(tree.right, right);
    }
  };
  fn(root, 0);
  return root;
};

/**
 * 生成随机整数数组，范围为 0 - max
 * @param len 数组长度
 * @param max
 * @returns Number[]
 */
const randomNumArr = (len = 10, max = 100) =>
  Array(len)
    .fill()
    .map(() => Math.round(Math.random() * max));

module.exports = {
  TreeNode,
  array2TreeNode,
  randomNumArr
};
