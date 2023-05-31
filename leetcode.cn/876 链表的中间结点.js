// 876. 链表的中间结点

// 给你单链表的头结点 head ，请你找出并返回链表的中间结点。

// 如果有两个中间结点，则返回第二个中间结点。

// 输入：head = [1,2,3,4,5]
// 输出：[3,4,5]
// 解释：链表只有一个中间结点，值为 3 。

// 输入：head = [1,2,3,4,5,6]
// 输出：[4,5,6]

// 常规思路
// O(1.5n) O(1)
// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 64.10% 的用户
// 内存消耗：
// 41 MB, 在所有 JavaScript 提交中击败了 59.63% 的用户
const middleNode1 = head => {
  let deep = 1;
  let point = head;
  while (point.next) {
    point = point.next;
    deep++;
  }
  const middle = deep >> 1;
  deep = 0;
  point = head;
  while (deep < middle) {
    point = point.next;
    deep++;
  }
  return point;
};

// 快慢指针 天秀！
// O(n) O(1)
// 执行用时：
// 48 ms, 在所有 JavaScript 提交中击败了98.53%的用户
// 内存消耗：
// 41.2 MB, 在所有 JavaScript 提交中击败了 13.10% 的用户
const middleNode2 = head => {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next ? fast.next.next : fast.next;
    slow = slow.next;
  }
  return slow;
};

const head = {
  val: 1,
  next: null,
};

console.log(JSON.stringify(middleNode2(head)));
