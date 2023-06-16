// 1177. 构建回文串检测

// 给你一个字符串 s，请你对 s 的子串进行检测。

// 每次检测，待检子串都可以表示为 queries[i] = [left, right, k]。我们可以 重新排列 子串 s[left], ..., s[right]，并从中选择 最多 k 项替换成任何小写英文字母。

// 如果在上述检测过程中，子串可以变成回文形式的字符串，那么检测结果为 true，否则结果为 false。

// 返回答案数组 answer[]，其中 answer[i] 是第 i 个待检子串 queries[i] 的检测结果。

// 注意：在替换时，子串中的每个字母都必须作为 独立的 项进行计数，也就是说，如果 s[left..right] = "aaa" 且 k = 2，我们只能替换其中的两个字母。（另外，任何检测都不会修改原始字符串 s，可以认为每次检测都是独立的）

// 输入：s = "abcda", queries = [[3,3,0],[1,2,0],[0,3,1],[0,3,2],[0,4,1]]
// 输出：[true,false,false,true,true]
// 解释：
// queries[0] : 子串 = "d"，回文。
// queries[1] : 子串 = "bc"，不是回文。
// queries[2] : 子串 = "abcd"，只替换 1 个字符是变不成回文串的。
// queries[3] : 子串 = "abcd"，可以变成回文的 "abba"。 也可以变成 "baab"，先重新排序变成 "bacd"，然后把 "cd" 替换为 "ab"。
// queries[4] : 子串 = "abcda"，可以变成回文的 "abcba"。

// 思考：
// 关键词：可以重新排列，可以替换任何字母
// 回文字符串的特点：
// 每个字母都出现偶数次，或者只有一个字母出现奇数次
// 统计出现次数就行了

// 超时了
// O(n*m)
const canMakePaliQueries1 = (s, queries) => {
  const test = ([left, right, k]) => {
    const target = s.slice(left, right + 1);
    const map = {};
    for (const i of target) {
      map[i] = (map[i] || 0) + 1;
    }
    let odd = 0;
    for (const key in map) {
      if (map[key] & (1 === 1)) odd++;
    }
    return odd >> 1 <= k;
  };
  return queries.map(test);
};

// 思考：
// 如果能先获取 s 中任何子串的不同字母出现次数的奇偶性就好了
// 其实我们不需要偶数次，只需要统计奇数次
// 不难想到用异或
// 难想到的是在这里要怎么利用异或
// 将 26 个字母的出现次数转化为二进制表达
// 字母 a 对应的是 0001
// 字母 b 对应的是 0010
// 字母 c 对应的是 0100
// 1 << x.charCodeAt()-97
// 再根据此异或结果来求出前缀和异或
// 拿到前缀和异或后，任意子串的异或结果也就拿到了
// 统计结果中 1 的个数即是奇数次的个数

// O(m+n)
// 执行用时：
// 156 ms, 在所有 JavaScript 提交中击败了 93.33% 的用户
// 内存消耗：
// 79.6 MB, 在所有 JavaScript 提交中击败了 6.67% 的用户
const canMakePaliQueries2 = (s, queries) => {
  const len = s.length;
  const count = Array(len + 1).fill(0);
  for (let i = 0; i < len; i++) {
    count[i + 1] = count[i] ^ (1 << (s[i].charCodeAt() - 97));
  }
  const test = ([left, right, k]) => {
    let xor = count[right + 1] ^ count[left];
    let odd = 0;
    while (xor > 0) {
      xor &= xor - 1;
      odd++;
    }
    return odd >> 1 <= k;
  };
  return queries.map(test);
};

// 别用 Array.prototype.map
// O(m+n)
// 执行用时：
// 144 ms, 在所有 JavaScript 提交中击败了 100.00% 的用户
// 内存消耗：
// 76.1 MB, 在所有 JavaScript 提交中击败了 13.33% 的用户
const canMakePaliQueries3 = (s, queries) => {
  const len = s.length;
  const count = Array(len + 1).fill(0);
  for (let i = 0; i < len; i++) {
    count[i + 1] = count[i] ^ (1 << (s[i].charCodeAt() - 97));
  }
  const res = [];
  const n = queries.length;
  for (let i = 0; i < n; i++) {
    const [left, right, k] = queries[i];
    let xor = count[right + 1] ^ count[left];
    let odd = 0;
    while (xor > 0) {
      xor &= xor - 1;
      odd++;
    }
    res.push(odd >> 1 <= k);
  }
  return res;
};

const s = 'abcda',
  queries = [
    [3, 3, 0],
    [1, 2, 0],
    [0, 3, 1],
    [0, 3, 2],
    [0, 4, 1],
  ];

console.log(canMakePaliQueries3(s, queries));
