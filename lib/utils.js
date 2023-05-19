class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// TODO 此方法有 bug
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

const arraySum = (arr, total = 0) => (arr.length === 0 ? total : arraySum(arr, total + arr.shift()));

/**
 * 压力测试，力扣的测试太慢太慢了，自己写一个吧，结论不适用于力扣
 * 因为用到了异步调用节省时间，所以返回 Promise，记得 .then 哦
 * @param {function} fn 压力测试的方法
 * @param  {function[]} rest 调用方法的参数们，按顺序等待调用的 function
 * @returns Promise
 */
const pressureTest = async (fn, ...rest) => {
  // 总测试次数
  const testCount = 1000;
  let totalTime = 0;
  const promiseList = Array.from(
    { length: testCount },
    () => () =>
      new Promise(res => {
        const fixedTime = new Date() - startTime;
        fn.apply(
          null,
          rest.map(i => i())
        );
        const endTime = new Date();
        totalTime += endTime - startTime - fixedTime;
        res();
      })
  );
  const startTime = new Date();
  await Promise.all(promiseList.map(i => i()));
  const res = totalTime / testCount;
  return `${res}ms`;
};

const mockNumArr = (len = 100, max = 100) => Array.from({ length: len }, () => Math.round(Math.random() * max));

module.exports = {
  TreeNode,
  array2TreeNode,
  randomNumArr,
  arraySum,
  pressureTest,
  mockNumArr,
};
