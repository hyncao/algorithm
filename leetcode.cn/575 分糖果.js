// 575. 分糖果

// Alice 有 n 枚糖，其中第 i 枚糖的类型为 candyType[i] 。Alice 注意到她的体重正在增长，所以前去拜访了一位医生。

// 医生建议 Alice 要少摄入糖分，只吃掉她所有糖的 n / 2 即可（n 是一个偶数）。Alice 非常喜欢这些糖，她想要在遵循医生建议的情况下，尽可能吃到最多不同种类的糖。

// 给你一个长度为 n 的整数数组 candyType ，返回： Alice 在仅吃掉 n / 2 枚糖的情况下，可以吃到糖的 最多 种类数。

// 输入：candyType = [1,1,2,2,3,3]
// 输出：3
// 解释：Alice 只能吃 6 / 2 = 3 枚糖，由于只有 3 种糖，她可以每种吃一枚。

// 输入：candyType = [1,1,2,3]
// 输出：2
// 解释：Alice 只能吃 4 / 2 = 2 枚糖，不管她选择吃的种类是 [1,2]、[1,3] 还是 [2,3]，她只能吃到两种不同类的糖。

// 输入：candyType = [6,6,6,6]
// 输出：1
// 解释：Alice 只能吃 4 / 2 = 2 枚糖，尽管她能吃 2 枚，但只能吃到 1 种糖。

// 执行用时：
// 88 ms, 在所有 JavaScript 提交中击败了 98.49% 的用户
// 内存消耗：
// 55.1 MB, 在所有 JavaScript 提交中击败了 47.13% 的用户
const distributeCandies = candyType => {
  const len = candyType.length / 2;
  const fLen = [...new Set(candyType)].length;
  return Math.min(len, fLen);
};

const candyType = [1, 1, 2, 3];

console.log(distributeCandies(candyType));
