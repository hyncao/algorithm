// 445. 两数相加 II

// 给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。

// 你可以假设除了数字 0 之外，这两个数字都不会以零开头。

// 输入：l1 = [7,2,4,3], l2 = [5,6,4]
// 输出：[7,8,0,7]

// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[8,0,7]

// 输入：l1 = [0], l2 = [0]
// 输出：[0]

// 先转换为数组，补零
// O(m+n+max) O(2n)
// 执行用时：
// 76 ms, 在所有 JavaScript 提交中击败了 100.00% 的用户
// 内存消耗：
// 46.9 MB, 在所有 JavaScript 提交中击败了 11.54% 的用户
const addTwoNumbers1 = (l1, l2) => {
  let arr1 = [];
  let arr2 = [];
  let p1 = l1;
  let p2 = l2;
  while (p1) {
    arr1.push(p1.val);
    p1 = p1.next;
  }
  while (p2) {
    arr2.push(p2.val);
    p2 = p2.next;
  }
  const n1 = arr1.length;
  const n2 = arr2.length;
  const n = Math.max(n1, n2);
  arr1 = Array(n - n1)
    .fill(0)
    .concat(arr1);
  arr2 = Array(n - n2)
    .fill(0)
    .concat(arr2);
  let i = n - 1;
  let prev = 0;
  let res = null;
  while (i >= 0) {
    let val = (arr1[i] || 0) + (arr2[i] || 0) + prev;
    if (val > 9) {
      val -= 10;
      prev = 1;
    } else prev = 0;
    res = {
      val,
      next: res,
    };
    i--;
  }
  if (prev === 1) {
    return {
      val: 1,
      next: res,
    };
  }
  return res;
};

// O(m+n+max) O(2n)
// 执行用时：
// 84 ms, 在所有 JavaScript 提交中击败了98.46%的用户
// 内存消耗：
// 46.6 MB, 在所有 JavaScript 提交中击败了 33.85% 的用户
const addTwoNumbers2 = (l1, l2) => {
  let arr1 = [];
  let arr2 = [];
  let p1 = l1;
  let p2 = l2;
  while (p1) {
    arr1.push(p1.val);
    p1 = p1.next;
  }
  while (p2) {
    arr2.push(p2.val);
    p2 = p2.next;
  }
  let prev = 0;
  let res = null;
  while (arr1.length > 0 || arr2.length > 0) {
    let val = (arr1.pop() || 0) + (arr2.pop() || 0) + prev;
    if (val > 9) {
      val -= 10;
      prev = 1;
    } else prev = 0;
    res = {
      val,
      next: res,
    };
  }
  if (prev === 1) {
    return {
      val: 1,
      next: res,
    };
  }
  return res;
};

// const l1 = {
//   val: 7,
//   next: {
//     val: 2,
//     next: {
//       val: 4,
//       next: {
//         val: 3,
//       },
//     },
//   },
// };

// const l2 = {
//   val: 5,
//   next: {
//     val: 6,
//     next: {
//       val: 4,
//     },
//   },
// };

const l1 = {
  val: 9,
  next: {
    val: 4,
    next: {
      val: 4,
      next: {
        val: 3,
      },
    },
  },
};

const l2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 7,
    },
  },
};

console.log(JSON.stringify(addTwoNumbers2(l1, l2)));
