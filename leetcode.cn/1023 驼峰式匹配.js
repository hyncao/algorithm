// 1023. 驼峰式匹配

// 如果我们可以将小写字母插入模式串 pattern 得到待查询项 query，那么待查询项与给定模式串匹配。（我们可以在任何位置插入每个字符，也可以插入 0 个字符。）

// 给定待查询列表 queries，和模式串 pattern，返回由布尔值组成的答案列表 answer。只有在待查项 queries[i] 与模式串 pattern 匹配时， answer[i] 才为 true，否则为 false。

// 输入：queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FB"
// 输出：[true,false,true,true,false]
// 示例：
// "FooBar" 可以这样生成："F" + "oo" + "B" + "ar"。
// "FootBall" 可以这样生成："F" + "oot" + "B" + "all".
// "FrameBuffer" 可以这样生成："F" + "rame" + "B" + "uffer".

// 输入：queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FoBa"
// 输出：[true,false,true,false,false]
// 解释：
// "FooBar" 可以这样生成："Fo" + "o" + "Ba" + "r".
// "FootBall" 可以这样生成："Fo" + "ot" + "Ba" + "ll".

// 输出：queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FoBaT"
// 输入：[false,true,false,false,false]

// 思考：
// 题目的意思就是在 pattern 每个字母的前中后插入若干个小写字母后，能否成为 queries[i]

// 直接上正则匹配
// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 85.71% 的用户
// 内存消耗：
// 41.2 MB, 在所有 JavaScript 提交中击败了 48.57% 的用户
const camelMatch1 = (queries, pattern) => {
  let regStr = '[a-z]*';
  for (let i of pattern) {
    regStr += i + '[a-z]*';
  }
  regStr = `^${regStr}$`;
  const reg = new RegExp(regStr);
  return queries.map(i => {
    return reg.test(i);
  });
};

// 双指针 O(mn)
// 执行用时：
// 52 ms, 在所有 JavaScript 提交中击败了 97.14% 的用户
// 内存消耗：
// 42.1 MB, 在所有 JavaScript 提交中击败了 20.00% 的用户
const camelMatch2 = (queries, pattern) => {
  const pLen = pattern.length;
  return queries.map(i => {
    let qIndex = 0;
    let pIndex = 0;
    while (pIndex < pLen || qIndex < i.length) {
      const qCurrent = i[qIndex];
      const pCurrent = pattern[pIndex];
      if (!qCurrent) {
        return false;
      }
      const upper = qCurrent.charCodeAt() >= 65 && qCurrent.charCodeAt() <= 90;
      if (qCurrent === pCurrent) {
        qIndex++;
        pIndex++;
      } else {
        if (upper) return false;
        qIndex++;
      }
    }
    return pIndex === pLen && qIndex === i.length;
  });
};

const queries = ['FooBar', 'FooBarTest', 'FootBall', 'FrameBuffer', 'ForceFeedBack'],
  pattern = 'FoBaT';

console.log(JSON.stringify(camelMatch2(queries, pattern)));
