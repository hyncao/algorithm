// 725. 分隔链表

// 给你一个头结点为 head 的单链表和一个整数 k ，请你设计一个算法将链表分隔为 k 个连续的部分。

// 每部分的长度应该尽可能的相等：任意两部分的长度差距不能超过 1 。这可能会导致有些部分为 null 。

// 这 k 个部分应该按照在链表中出现的顺序排列，并且排在前面的部分的长度应该大于或等于排在后面的长度。

// 返回一个由上述 k 部分组成的数组。

// ===== 无视链表中的内容（不能排序），只需要按顺序隔开就行 =====

// 输入：head = [1,2,3], k = 5
// 输出：[[1],[2],[3],[],[]]

// 输入：head = [1,2,3,4,5,6,7,8,9,10], k = 3
// 输出：[[1,2,3,4],[5,6,7],[8,9,10]]

// 输入：head = [3,2,1,2,2,3,2,1,1,1,6,6,4,4,3], k = 5
// 输出：[[3,2,1],[2,2,3],[2,1,1],[1,6,6],[4,4,3]]

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const splitListToParts = (head, k) => {
  let length = 0;
  let point = head;
  while (point) {
    length++;
    point = point.next;
  }

  const getLengthArr = (len, k) => {
    const avr = len / k;
    const item = Math.floor(avr);
    const small = avr - item;
    const plusNum = Math.round(small * k);
    return Array(k)
      .fill()
      .map((_, i) => (i < plusNum ? item + 1 : item));
  };

  const lengthArr = getLengthArr(length, k);

  point = head;
  return lengthArr.map((item, index) => {
    let current = null;
    let currentPoint = current;
    for (let i = 0; i < item; i++) {
      if (current) {
        currentPoint.next = { val: point.val, next: null };
        currentPoint = currentPoint.next;
      } else {
        current = { val: point.val, next: null };
        currentPoint = current;
      }
      point = point.next;
    }
    return current;
  });
};

const head = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(
      3,
      new ListNode(
        4,
        new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8, new ListNode(9, new ListNode(10))))))
      )
    )
  )
);
const k = 3;

console.log(splitListToParts(head, k));
