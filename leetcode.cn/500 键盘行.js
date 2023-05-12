// 500. 键盘行

// 给你一个字符串数组 words ，只返回可以使用在 美式键盘 同一行的字母打印出来的单词。键盘如下图所示。

// 美式键盘 中：

// 第一行由字符 "qwertyuiop" 组成。
// 第二行由字符 "asdfghjkl" 组成。
// 第三行由字符 "zxcvbnm" 组成。

// 输入：words = ["Hello","Alaska","Dad","Peace"]
// 输出：["Alaska","Dad"]

// 输入：words = ["omk"]
// 输出：[]

// 输入：words = ["adsdf","sfd"]
// 输出：["adsdf","sfd"]

// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 86.86% 的用户
// 内存消耗：
// 40.8 MB, 在所有 JavaScript 提交中击败了 90.86% 的用户
const findWords = words => {
  const map = {
    q: 1,
    w: 1,
    e: 1,
    r: 1,
    t: 1,
    y: 1,
    u: 1,
    i: 1,
    o: 1,
    p: 1,
    a: 2,
    s: 2,
    d: 2,
    f: 2,
    g: 2,
    h: 2,
    j: 2,
    k: 2,
    l: 2,
    z: 3,
    x: 3,
    c: 3,
    v: 3,
    b: 3,
    n: 3,
    m: 3,
  };
  return words.filter(item => {
    const position = map[item[0].toLocaleLowerCase()];
    let flag = true;
    for (let i = 1; i < item.length; i++) {
      if (map[item[i].toLocaleLowerCase()] !== position) {
        flag = false;
        break;
      }
    }
    return flag;
  });
};

const words = ['Hello', 'Alaska', 'Dad', 'Peace'];

console.log(findWords(words));
