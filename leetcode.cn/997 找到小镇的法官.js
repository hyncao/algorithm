// 997. 找到小镇的法官

// 小镇里有 n 个人，按从 1 到 n 的顺序编号。传言称，这些人中有一个暗地里是小镇法官。

// 如果小镇法官真的存在，那么：

// 小镇法官不会信任任何人。
// 每个人（除了小镇法官）都信任这位小镇法官。
// 只有一个人同时满足属性 1 和属性 2 。
// 给你一个数组 trust ，其中 trust[i] = [ai, bi] 表示编号为 ai 的人信任编号为 bi 的人。

// 如果小镇法官存在并且可以确定他的身份，请返回该法官的编号；否则，返回 -1 。

// 输入：n = 2, trust = [[1,2]]
// 输出：2

// 输入：n = 3, trust = [[1,3],[2,3]]
// 输出：3

// 输入：n = 3, trust = [[1,3],[2,3],[3,1]]
// 输出：-1

// 思考：
// 通过实验得出的结论：
// 一个人可以信任多个人，但是每个人都会信任法官
// 法官只可能没有或者有一个

// 注意：
// 警惕 n = 1, trust = []

// 统计得票最高的人
// 边统计边将投票者从人群中删除
// 如果有两个人没有投票，或者得票最多的人自己也投了票，或者最高票 !== n-1 return -1
// O(3n+m) O(2n)
// 执行用时：
// 96 ms, 在所有 JavaScript 提交中击败了 64.75% 的用户
// 内存消耗：
// 49.5 MB, 在所有 JavaScript 提交中击败了 45.90% 的用户
const findJudge1 = (n, trust) => {
  const map = new Set(Array.from({ length: n }, (_, i) => i + 1));
  const vote = Array(n + 1).fill(0);
  for (const [p, v] of trust) {
    map.delete(p);
    vote[v]++;
  }
  let person;
  let max = 0;
  for (let i = 1; i < n + 1; i++) {
    if (vote[i] >= max) {
      max = vote[i];
      person = i;
    }
  }
  if (map.size !== 1 || !map.has(person) || max !== n - 1) return -1;
  return person;
};

// O(n+m) O(n)
// 执行用时：
// 88 ms, 在所有 JavaScript 提交中击败了 88.52% 的用户
// 内存消耗：
// 49.3 MB, 在所有 JavaScript 提交中击败了 76.23% 的用户
const findJudge2 = (n, trust) => {
  const vote = Array(n + 1).fill(0);
  for (const [p, v] of trust) {
    vote[p]--;
    vote[v]++;
  }
  for (let i = 1; i < n + 1; i++) {
    if (vote[i] === n - 1) return i;
  }
  return -1;
};

// 期望：-1
const n = 3,
  trust = [
    [1, 3],
    [2, 3],
    [3, 1],
  ];

console.log(findJudge2(n, trust));
