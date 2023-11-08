// 1078. Bigram 分词

// 给出第一个词 first 和第二个词 second，考虑在某些文本 text 中可能以 "first second third" 形式出现的情况，其中 second 紧随 first 出现，third 紧随 second 出现。

// 对于每种这样的情况，将第三个词 "third" 添加到答案中，并返回答案。

// 示例 1：

// 输入：text = "alice is a good girl she is a good student", first = "a", second = "good"
// 输出：["girl","student"]

// 示例 2：

// 输入：text = "we will we will rock you", first = "we", second = "will"
// 输出：["we","rock"]

// 执行用时：
// 52 ms, 在所有 JavaScript 提交中击败了 100% 的用户
// 内存消耗：
// 39.97 MB, 在所有 JavaScript 提交中击败了 65.79% 的用户
const findOcurrences = (text, first, second) => {
  const words = text.split(' ');
  const list = [];
  for (let i = 2; i < words.length; i++) {
    if (words[i - 2] === first && words[i - 1] === second) {
      list.push(words[i]);
    }
  }
  const size = list.length;
  const ret = Array(size).fill('');
  for (let i = 0; i < size; i++) {
    ret[i] = list[i];
  }
  return ret;
};

const text = 'we will we will rock you',
  first = 'we',
  second = 'will';

console.log(JSON.stringify(findOcurrences(text, first, second)));
