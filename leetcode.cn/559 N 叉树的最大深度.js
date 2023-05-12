// 559. N 叉树的最大深度

// 给定一个 N 叉树，找到其最大深度。

// 最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。

// N 叉树输入按层序遍历序列化表示，每组子节点由空值分隔（请参见示例）。

// 输入：root = [1,null,3,2,4,null,5,6]
// 输出：3

// 输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]

function Node(val, children = []) {
  this.val = val;
  this.children = children;
}

// 执行用时：
// 68 ms, 在所有 JavaScript 提交中击败了 88.54% 的用户
// 内存消耗：
// 44.3 MB, 在所有 JavaScript 提交中击败了 13.60% 的用户
const maxDepth = root => {
  if (!root) return 0;
  let max = 1;
  const fn = (root, currentMax) => {
    if (root && root.children.length) {
      currentMax++;
      root.children.forEach(i => fn(i, currentMax));
    } else {
      max = Math.max(max, currentMax);
    }
  };
  fn(root, max);
  return max;
};

const root = {
  val: 1,
  children: [
    { val: 2, children: [] },
    {
      val: 3,
      children: [
        { val: 6, children: [] },
        { val: 7, children: [{ val: 11, children: [{ val: 14, children: [] }] }] },
      ],
    },
    { val: 4, children: [{ val: 8, children: [{ val: 12, children: [] }] }] },
    {
      val: 5,
      children: [
        { val: 9, children: [{ val: 13, children: [] }] },
        { val: 10, children: [] },
      ],
    },
  ],
};

// {"val":1,"children":[{"val":2,"children":[]},{"val":3,"children":[{"val":6,"children":[]},{"val":7,"children":[{"val":11,"children":[{"val":14,"children":[]}]}]}]},{"val":4,"children":[{"val":8,"children":[{"val":12,"children":[]}]}]},{"val":5,"children":[{"val":9,"children":[{"val":13,"children":[]}]},{"val":10,"children":[]}]}]}

console.log(maxDepth(root));
