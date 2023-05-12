// 344. 反转字符串

// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。

// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

// 输入：s = ["h","e","l","l","o"]
// 输出：["o","l","l","e","h"]

// 执行用时：
// 84 ms, 在所有 JavaScript 提交中击败了 76.92% 的用户
// 内存消耗：
// 48 MB, 在所有 JavaScript 提交中击败了 40.71% 的用户
const reverseString1 = s => {
  s.reverse();
};

// 执行用时：
// 88 ms, 在所有 JavaScript 提交中击败了 60.26% 的用户
// 内存消耗：
// 48 MB, 在所有 JavaScript 提交中击败了 35.11% 的用户
const reverseString2 = s => {
  for (let i = 0; i < s.length >> 1; i++) {
    const temp = s[i];
    s[i] = s[s.length - i - 1];
    s[s.length - i - 1] = temp;
  }
};

const s = ['h', 'e', 'l', 'l', 'o'];

reverseString2(s);
console.log(s);
