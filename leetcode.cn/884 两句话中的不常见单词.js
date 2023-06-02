// 884. 两句话中的不常见单词

// 句子 是一串由空格分隔的单词。每个 单词 仅由小写字母组成。

// 如果某个单词在其中一个句子中恰好出现一次，在另一个句子中却 没有出现 ，那么这个单词就是 不常见的 。

// 给你两个 句子 s1 和 s2 ，返回所有 不常用单词 的列表。返回列表中单词可以按 任意顺序 组织。

// 输入：s1 = "this apple is sweet", s2 = "this apple is sour"
// 输出：["sweet","sour"]

// 输入：s1 = "apple apple", s2 = "banana"
// 输出：["banana"]

// 思考：
// 寻找在两个句子中一共只出现一次的单词。

// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 49.57% 的用户
// 内存消耗：
// 41.7 MB, 在所有 JavaScript 提交中击败了 9.40% 的用户
const uncommonFromSentences1 = (s1, s2) => {
  const set = new Set();
  const res = new Set();
  const len1 = s1.length;
  const len2 = s2.length;
  const combine = s1 + ' ' + s2;
  let letter = '';
  for (let i = 0; i < len1 + len2 + 1; i++) {
    if (combine[i] === ' ' || i === len1 + len2) {
      if (i === len1 + len2) letter += combine[i];
      if (!set.has(letter)) {
        set.add(letter);
        res.add(letter);
      } else res.delete(letter);
      letter = '';
    } else {
      letter += combine[i];
    }
  }
  return [...res];
};

// 用一个 Map 居然比两个 Set 更废空间
// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 49.57% 的用户
// 内存消耗：
// 41.9 MB, 在所有 JavaScript 提交中击败了 5.98% 的用户
const uncommonFromSentences2 = (s1, s2) => {
  const map = new Map();
  const len1 = s1.length;
  const len2 = s2.length;
  const combine = s1 + ' ' + s2;
  let letter = '';
  for (let i = 0; i < len1 + len2 + 1; i++) {
    if (combine[i] === ' ' || i === len1 + len2) {
      if (i === len1 + len2) letter += combine[i];
      map.set(letter, (map.get(letter) || 0) + 1);
      letter = '';
    } else {
      letter += combine[i];
    }
  }
  const res = [];
  for (const [key, count] of map) {
    if (count === 1) res.push(key);
  }
  return res;
};

const s1 = 's z z z s',
  s2 = 's z ejt';

console.log(uncommonFromSentences2(s1, s2));
