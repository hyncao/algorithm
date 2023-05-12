// 234. 回文链表

// 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。

// 输入：head = [1,2,2,1]
// 输出：true

// 输入：head = [1,2]
// 输出：false

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const isPalindrome1 = head => {
  const arr = [];
  let point = head;
  while(point) {
    arr.push(point.val);
    point = point.next;
  }
  for (let left = 0, right = arr.length - 1; left < right; left++, right--) {
    if (arr[left] !== arr[right]) {
      return false;
    }
  }
  return true;
};

// 思路:
// 维护两个指针, 一个顺序, 一个逆序, 空间复杂度O(1)
// 如何逆序遍历链表? 用递归可以实现逆序遍历链表
// const traverse = head => {
//   traverse(head.next);
//   console.log(head.val);
// }
const isPalindrome2 = head => {
  let inOrder = head;
  const checkIsPalindrome = head => {
    if (head) {
      if (!checkIsPalindrome(head.next)) {
        return false;
      }
      if (inOrder.val !== head.val) {
        return false;
      }
      inOrder = inOrder.next;
    }
    return true;
  }
  return checkIsPalindrome(head);
}

const head = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));
// const head = new ListNode(1)

console.log(isPalindrome2(head));
