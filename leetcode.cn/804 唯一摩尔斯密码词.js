// 804. 唯一摩尔斯密码词

// 国际摩尔斯密码定义一种标准编码方式，将每个字母对应于一个由一系列点和短线组成的字符串， 比如:

// 'a' 对应 ".-" ，
// 'b' 对应 "-..." ，
// 'c' 对应 "-.-." ，以此类推。
// 为了方便，所有 26 个英文字母的摩尔斯密码表如下：

// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// 给你一个字符串数组 words ，每个单词可以写成每个字母对应摩尔斯密码的组合。

// 例如，"cab" 可以写成 "-.-..--..." ，(即 "-.-." + ".-" + "-..." 字符串的结合)。我们将这样一个连接过程称作 单词翻译 。
// 对 words 中所有单词进行单词翻译，返回不同 单词翻译 的数量。

// 输入: words = ["gin", "zen", "gig", "msg"]
// 输出: 2
// 解释:
// 各单词翻译如下:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."
// 共有 2 种不同翻译, "--...-." 和 "--...--.".

// 输入：words = ["a"]
// 输出：1

// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 74.62% 的用户
// 内存消耗：
// 42.9 MB, 在所有 JavaScript 提交中击败了 27.69% 的用户
const uniqueMorseRepresentations = words => {
  const morseList = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ];
  const fixedWords = [...new Set(words)];
  const res = new Set();
  for (const i of fixedWords) {
    let current = '';
    for (const j of i) {
      current += morseList[j.charCodeAt() - 97];
    }
    res.add(current);
  }
  return res.size;
};

const words = ['gin', 'zen', 'gig', 'msg'];

console.log(uniqueMorseRepresentations(words))
