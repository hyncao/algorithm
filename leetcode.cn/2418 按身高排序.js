// 2418. 按身高排序

// 给你一个字符串数组 names ，和一个由 互不相同 的正整数组成的数组 heights 。两个数组的长度均为 n 。

// 对于每个下标 i，names[i] 和 heights[i] 表示第 i 个人的名字和身高。

// 请按身高 降序 顺序返回对应的名字数组 names 。

// 输入：names = ["Mary","John","Emma"], heights = [180,165,170]
// 输出：["Mary","Emma","John"]
// 解释：Mary 最高，接着是 Emma 和 John 。

// 输入：names = ["Alice","Bob","Bob"], heights = [155,185,150]
// 输出：["Bob","Alice","Bob"]
// 解释：第一个 Bob 最高，然后是 Alice 和第二个 Bob 。

// 执行用时：
// 76 ms, 在所有 JavaScript 提交中击败了 89.93% 的用户
// 内存消耗：
// 45.2 MB, 在所有 JavaScript 提交中击败了 82.73% 的用户
const sortPeople = (names, heights) => {
  for (let i = 0; i < names.length; i++) {
    names[i] = {
      name: names[i],
      height: heights[i],
    };
  }
  names.sort((a, b) => b.height - a.height);
  return names.map(i => i.name);
};

const names = ['Mary', 'John', 'Emma'],
  heights = [180, 165, 170];

console.log(JSON.stringify(sortPeople(names, heights)));
