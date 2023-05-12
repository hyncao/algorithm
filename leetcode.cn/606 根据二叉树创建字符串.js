// 606. 根据二叉树创建字符串

// 给你二叉树的根节点 root ，请你采用前序遍历的方式，将二叉树转化为一个由括号和整数组成的字符串，返回构造出的字符串。

// 空节点使用一对空括号对 "()" 表示，转化后需要省略所有不影响字符串与原始二叉树之间的一对一映射关系的空括号对。

// 输入：root = [1,2,3,4]
// 输出："1(2(4))(3)"
// 解释：初步转化后得到 "1(2(4)())(3()())" ，但省略所有不必要的空括号对后，字符串应该是"1(2(4))(3)" 。

// 输入：root = [1,2,3,null,4]
// 输出："1(2()(4))(3)"
// 解释：和第一个示例类似，但是无法省略第一个空括号对，否则会破坏输入与输出一一映射的关系。

const { array2TreeNode } = require('../lib/utils');

// 执行用时：
// 72 ms, 在所有 JavaScript 提交中击败了 54.08% 的用户
// 内存消耗：
// 46.2 MB, 在所有 JavaScript 提交中击败了 11.23% 的用户
const tree2str = root => {
  const fn = root => {
    if (!root) return '';
    const left = fn(root.left);
    const right = fn(root.right);
    return `${root.val}(${left})(${right})`;
  };
  let str = fn(root);
  str = str.replace(/\(\)\(\)/g, '');
  str = str.replace(/\)\(\)/g, ')');
  return str;
};

const root = array2TreeNode([1, 2, 3, 4]);

console.log(tree2str(root));

var preZero = num => (num < 10 ? `0${num}` : num);
var a = Array(288)
  .fill()
  .map((_, i) => {
    return `${preZero(Math.floor((i * 5) / 60))}:${preZero((i * 5) % 60)}`;
  });

console.log(a);
