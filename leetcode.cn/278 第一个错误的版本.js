// 278. 第一个错误的版本

// 你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。

// 假设你有 n 个版本 [1, 2, ..., n]，你想找出导致之后所有版本出错的第一个错误的版本。

// 你可以通过调用 bool isBadVersion(version) 接口来判断版本号 version 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。

// 输入：n = 5, bad = 4
// 输出：4

// 输入：n = 1, bad = 1
// 输出：1

let used = 0;
const isBadVersion = (version, bad) => {
  used++;
  return version >= bad;
};

const solution = isBadVersion => {
  // O(n) n = bad
  // return n => {
  //   let i = 1;
  //   while (i < n + 1) {
  //     if (isBadVersion(i)) {
  //       console.log(used);
  //       return i;
  //     }
  //     i++;
  //   }
  // };

  // 二分法 O(log(n))
  // 执行用时：
  // 56 ms, 在所有 JavaScript 提交中击败了 80.96% 的用户
  // 内存消耗：
  // 40.7 MB, 在所有 JavaScript 提交中击败了 87.40% 的用户
  return n => {
    if (n === 1) return 1;
    let l = 1;
    let r = n;
    while (l < r) {
      const m = Math.floor((l + r) / 2);
      if (isBadVersion(m)) {
        r = m;
      } else {
        l = m + 1;
      }
    }
    return l;
  };
};

const n = 5;
const bad = 4;

console.log(solution(v => isBadVersion(v, bad))(n));
