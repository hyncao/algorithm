// 原题目：去除字符串中出现次数最少的字符，不改变原字符串的顺序（滴滴）

// 示例：
// 'ababac' —— 'ababa'
// 'aaabbbcceeff' —— 'aaabbb'

const removeLetter = s => {
  const map = {};
  for (const i of s) {
    const num = map[i];
    map[i] = num ? num + 1 : 1;
  }
  const letterArr = [];
  let small;
  Object.values(map).forEach(item => {
    small = Math.min(item);
  });
  Object.keys(map).forEach(i => {
    if (map[i] === small) letterArr.push(i);
  });
  letterArr.forEach(i => (s = s.replace(new RegExp(i, 'g'), '')));
  return s;
};

// const s = '';
const s = 'abababc';
// const s = 'aaabbbcceeff';
// const s = 'abcsdweq';
// const s = 'aaaaaabbbbbbbbcccccccccccccaaaaaaabbbbbbb';
// const s = 'aaaaaabbbbbbbbcccccccccccccaaaaaaabbbbbbba';

console.log(removeLetter(s));
