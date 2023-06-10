// 1170. 比较字符串最小字母出现频次

// 定义一个函数 f(s)，统计 s  中（按字典序比较）最小字母的出现频次 ，其中 s 是一个非空字符串。

// 例如，若 s = "dcce"，那么 f(s) = 2，因为字典序最小字母是 "c"，它出现了 2 次。

// 现在，给你两个字符串数组待查表 queries 和词汇表 words 。

// 对于每次查询 queries[i] ，需统计 words 中满足 f(queries[i]) < f(W) 的 词的数目 ，W 表示词汇表 words 中的每个词。

// 请你返回一个整数数组 answer 作为答案，其中每个 answer[i] 是第 i 次查询的结果。

// 输入：queries = ["cbd"], words = ["zaaaz"]
// 输出：[1]
// 解释：查询 f("cbd") = 1，而 f("zaaaz") = 3 所以 f("cbd") < f("zaaaz")。

// 输入：queries = ["bbb","cc"], words = ["a","aa","aaa","aaaa"]
// 输出：[1,2]

// f: O(n * log(n)) (n)
// numSmallerByFrequency: O(n * m) O(m)
// 执行用时：
// 80 ms, 在所有 JavaScript 提交中击败了 66.67% 的用户
// 内存消耗：
// 45.5 MB, 在所有 JavaScript 提交中击败了 40.00% 的用户
const numSmallerByFrequency = (queries, words) => {
  const f = s => {
    const map = new Map();
    let front = 'z';
    for (const i of s) {
      map.set(i, (map.get(i) || 0) + 1);
      if (i < front) front = i;
    }
    return map.get(front);
  };

  const fW = words.map(f);
  return queries.map(q => {
    const fq = f(q);
    let res = 0;
    for (const i of fW) {
      if (i > fq) res++;
    }
    return res;
  });
};

const queries = ['bbb', 'cc'],
  words = ['a', 'aa', 'aaa', 'aaaa'];

console.log(numSmallerByFrequency(queries, words));
