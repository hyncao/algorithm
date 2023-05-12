// 83. 删除排序链表中的重复元素

// 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。

// 输入：head = [1,1,2]
// 输出：[1,2]

// 输入：head = [1,1,2,3,3]
// 输出：[1,2,3]

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 96.67% 的用户
// 内存消耗：
// 42.9 MB, 在所有 JavaScript 提交中击败了 92.87% 的用户
const deleteDuplicates = head => {
  let temp = head;
  while (temp) {
    if (temp.next && temp.val === temp.next.val) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }
  return head;
};

const head = new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1))));

console.log(deleteDuplicates(head));
