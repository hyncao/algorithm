// 984. 不含 AAA 或 BBB 的字符串

// 给定两个整数 a 和 b ，返回 任意 字符串 s ，要求满足：
// s 的长度为 a + b，且正好包含a 个 'a' 字母与 b 个 'b' 字母；
// 子串 'aaa' 没有出现在 s 中；
// 子串 'bbb' 没有出现在 s 中。

// 输入：a = 1, b = 2
// 输出："abb"
// 解释："abb", "bab" 和 "bba" 都是正确答案。

// 输入：a = 4, b = 1
// 输出："aabaa"

// 贪心算法 O(a+b)
// 假设当前需要被加入的字母为 X,
// 则当前字符串最后两位都为 a 时, x = b
// 当前字符串最后两位都为 b 时, x = a
// a 的数量多于 b, x = a

// ===== 注: 原版的写法中, res = '', 直接拼接字符串在后面, js 拼接字符串有点慢的, 后面改为 res = [], 只需要 join 一下就行, 快了将近 8ms

// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 91.80% 的用户
// 内存消耗：
// 41 MB, 在所有 JavaScript 提交中击败了 85.25% 的用户
const strWithout3a3b = (a, b) => {
  let res = [];
  while (a > 0 || b > 0) {
    const len = res.length;
    let whiteA = false;

    if (len >= 2) {
      if (res[len - 1] === 'b' && res[len - 2] === 'b') {
        whiteA = true;
      } else if (res[len - 1] !== res[len - 2] && a > b) {
        whiteA = true;
      }
    } else if (a > b) {
      whiteA = true;
    }

    if (whiteA) {
      res.push('a');
      a--;
    } else {
      res.push('b');
      b--;
    }
  }
  return res.join('');
};

const a = 1;
const b = 4;

console.log(strWithout3a3b(a, b));
