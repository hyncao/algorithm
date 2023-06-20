// 942. 增减字符串匹配

// 由范围 [0,n] 内所有整数组成的 n + 1 个整数的排列序列可以表示为长度为 n 的字符串 s ，其中:

// 如果 perm[i] < perm[i + 1] ，那么 s[i] == 'I'
// 如果 perm[i] > perm[i + 1] ，那么 s[i] == 'D'
// 给定一个字符串 s ，重构排列 perm 并返回它。如果有多个有效排列perm，则返回其中 任何一个 。

// 输入：s = "IDID"
// 输出：[0,4,1,3,2]

// 输入：s = "III"
// 输出：[0,1,2,3]

// 输入：s = "DDI"
// 输出：[3,2,0,1]

// 思考：
// 想不到方法的话挺难的

// s = "IIID"
// res = [];
// s[0] === 'I' res[0] = min res[1]可以为剩下数中的任意数
// s[0] === 'D' res[0] = max res[1]可以为剩下数中的任意数

// s[1] === 'I' res[1] = min res[2]可以为剩下数中的任意数
// s[1] === 'D' res[1] = max res[2]可以为剩下数中的任意数

// 执行用时：
// 76 ms, 在所有 JavaScript 提交中击败了 81.82% 的用户
// 内存消耗：
// 43.7 MB, 在所有 JavaScript 提交中击败了 60.23% 的用户
const diStringMatch = s => {
  const len = s.length;
  let max = s.length;
  let min = 0;
  const res = [];
  for (let i = 0; i < len; i++) {
    res[i] = s[i] === 'I' ? min++ : max--;
  }
  res[len] = min;
  return res;
};

const s = 'IDID';

console.log(JSON.stringify(diStringMatch(s)));
