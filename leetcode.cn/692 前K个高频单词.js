// 692. 前K个高频单词

// 给定一个单词列表 words 和一个整数 k ，返回前 k 个出现次数最多的单词。

// 返回的答案应该按单词出现频率由高到低排序。如果不同的单词有相同出现频率， 按字典顺序 排序。

// 输入: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
// 输出: ["the", "is", "sunny", "day"]

// 执行用时：
// 72 ms, 在所有 JavaScript 提交中击败了 82.22% 的用户
// 内存消耗：
// 44.8 MB, 在所有 JavaScript 提交中击败了 66.11% 的用户
const topKFrequent = (words, k) => {
  const map = {};
  // 按字典排序，返回正或负
  const alphanumeric = (a, b) => {
    let i = 0;
    while (i < a.length && i < b.length) {
      if (a[i].charCodeAt() !== b[i].charCodeAt()) {
        return a[i].charCodeAt() - b[i].charCodeAt();
      }
      i++;
    }
    return a.length - b.length;
  };
  words.forEach(item => (item in map ? map[item]++ : (map[item] = 1)));
  let res = Object.keys(map);
  res.sort((a, b) => (map[b] === map[a] ? alphanumeric(a, b) : map[b] - map[a]));
  res = res.slice(0, k);
  return res;
};

const words = ['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'];
const k = 4;

console.log(topKFrequent(words, k));
