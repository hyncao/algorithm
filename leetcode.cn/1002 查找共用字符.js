// 1002. 查找共用字符

// 给你一个字符串数组 words ，请你找出所有在 words 的每个字符串中都出现的共用字符（ 包括重复字符），并以数组形式返回。你可以按 任意顺序 返回答案。

// 输入：words = ["bella","label","roller"]
// 输出：["e","l","l"]

// 输入：words = ["cool","lock","cook"]
// 输出：["c","o"]

// 思考：
// 既然是共用字符，那么我们从数组中找到最短的那个，来逐个遍历就行了

// O(m*n) O(m)
// 执行用时：
// 80 ms, 在所有 JavaScript 提交中击败了 44.91% 的用户
// 内存消耗：
// 43.5 MB, 在所有 JavaScript 提交中击败了 70.37% 的用户
const commonChars = words => {
  let min = words[0].length;
  let minIndex = 0;
  const n = words.length;
  if (n === 1) return words[0].split('');
  const res = [];
  for (let i = 1; i < n; i++) {
    if (words[i].length < min) {
      words[minIndex] = new Set(words[minIndex]);
      min = words[i].length;
      minIndex = i;
    } else {
      const map = new Map();
      for (const letter of words[i]) {
        map.set(letter, (map.get(letter) || 0) + 1);
      }
      words[i] = map;
    }
  }
  for (const letter of words[minIndex]) {
    let flag = true;
    for (let i = 0; i < n; i++) {
      if (i === minIndex) continue;
      if (!words[i].get(letter)) flag = false;
      else words[i].set(letter, words[i].get(letter) - 1);
    }
    if (flag) res.push(letter);
  }
  return res;
};

const words = ['bella', 'label', 'roller'];

console.log(commonChars(words));
