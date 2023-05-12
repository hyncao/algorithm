// 1032. 字符流

// TODO

// 设计一个算法：接收一个字符流，并检查这些字符的后缀是否是字符串数组 words 中的一个字符串。

// 例如，words = ["abc", "xyz"] 且字符流中逐个依次加入 4 个字符 'a'、'x'、'y' 和 'z' ，你所设计的算法应当可以检测到 "axyz" 的后缀 "xyz" 与 words 中的字符串 "xyz" 匹配。

// 按下述要求实现 StreamChecker 类：

// StreamChecker(String[] words) ：构造函数，用字符串数组 words 初始化数据结构。

// boolean query(char letter)：从字符流中接收一个新字符，如果字符流中的任一非空后缀能匹配 words 中的某一字符串，返回 true ；否则，返回 false。

// 解释：先给你一组字符串，接下来会调用 query 接口若干次，
// 每一次调用 query 的时候，都会将传入的字母累加到之前的结果拼成新的字符串，要求判断这个新的字符串是否包含 words 数组中的后缀。

// 示例：

// 输入：
// ["StreamChecker", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query"]
// [[["cd", "f", "kl"]], ["a"], ["b"], ["c"], ["d"], ["e"], ["f"], ["g"], ["h"], ["i"], ["j"], ["k"], ["l"]]
// 输出：
// [null, false, false, false, true, false, true, false, false, false, false, false, true]

// "a": 拼成的字符串为 "a"
// "b": 拼成的字符串为 "ab"
// "c": 拼成的字符串为 "abc"
// "d": 拼成的字符串为 "abcd"  words 中有 "cd" 后缀，所以返回 true
// "e": 拼成的字符串为 "abcde"
// "f": 拼成的字符串为 "abcdef"  words 中有 "f" 后缀，所以返回 true
// "g": 拼成的字符串为 "abcdefg"

class StreamChecker {
  constructor(words) {
    // 这个数据格式支撑不了，要换
    this.node = {};
    this.point = null;

    words.forEach(item => {
      let current = null;
      for (let i = 0; i < item.length; i++) {
        const letter = item[i];
        const target = current || this.search(letter) || this.node;
        target[letter] = {};
        current = target[letter];
      }
    });

    // 查看 this.node
    debugger
  }

  search(letter, point) {
    let res = null;
    const target = point || this.node;
    const rec = root => {
      if (letter in root) {
        res = root;
      } else {
        const children = Object.values(root)[0];
        if (children) {
          rec(children);
        }
      }
    };
    rec(target);
    return res;
  }

  query(letter) {
    const target = this.point || this.node;
    const next = target[letter];
    if (next) {
      if (Object.keys(next).length === 0) {
        this.point = null;
        return true;
      } else {
        this.point = next;
      }
    }
    return false;
  }
}

const streamChecker = new StreamChecker(['ab', 'ba', 'aaab', 'abab', 'baa']);

const queryList = [
  ['a'],
  ['a'],
  ['a'],
  ['a'],
  ['a'],
  ['b'],
  ['a'],
  ['b'],
  ['a'],
  ['b'],
  ['b'],
  ['b'],
  ['a'],
  ['b'],
  ['a'],
  ['b'],
  ['b'],
  ['b'],
  ['b'],
  ['a'],
  ['b'],
  ['a'],
  ['b'],
  ['a'],
  ['a'],
  ['a'],
  ['b'],
  ['a'],
  ['a'],
  ['a'],
];

console.log(queryList.map(i => streamChecker.query(i[0])));

// 期望
[
  false,
  false,
  false,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  false,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  false,
];
