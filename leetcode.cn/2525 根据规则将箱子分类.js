// 2525. 根据规则将箱子分类

// 给你四个整数 length ，width ，height 和 mass ，分别表示一个箱子的三个维度和质量，请你返回一个表示箱子 类别 的字符串。

// 如果满足以下条件，那么箱子是 "Bulky" 的：
// 箱子 至少有一个 维度大于等于 104 。
// 或者箱子的 体积 大于等于 109 。
// 如果箱子的质量大于等于 100 ，那么箱子是 "Heavy" 的。
// 如果箱子同时是 "Bulky" 和 "Heavy" ，那么返回类别为 "Both" 。
// 如果箱子既不是 "Bulky" ，也不是 "Heavy" ，那么返回类别为 "Neither" 。
// 如果箱子是 "Bulky" 但不是 "Heavy" ，那么返回类别为 "Bulky" 。
// 如果箱子是 "Heavy" 但不是 "Bulky" ，那么返回类别为 "Heavy" 。
// 注意，箱子的体积等于箱子的长度、宽度和高度的乘积。

// 示例 1：

// 输入：length = 1000, width = 35, height = 700, mass = 300
// 输出："Heavy"
// 解释：
// 箱子没有任何维度大于等于 104 。
// 体积为 24500000 <= 109 。所以不能归类为 "Bulky" 。
// 但是质量 >= 100 ，所以箱子是 "Heavy" 的。
// 由于箱子不是 "Bulky" 但是是 "Heavy" ，所以我们返回 "Heavy" 。

// 示例 2：

// 输入：length = 200, width = 50, height = 800, mass = 50
// 输出："Neither"

// 执行用时：
// O(1) O(1)
// 52 ms, 在所有 JavaScript 提交中击败了 88.88% 的用户
// 内存消耗：
// 39.57 MB, 在所有 JavaScript 提交中击败了 94.44% 的用户
const categorizeBox = (length, width, height, mass) => {
  const bulky = length >= 10 ** 4 || width >= 10 ** 4 || height >= 10 ** 4 || length * width * height >= 10 ** 9;
  const heavy = mass >= 100;
  if (bulky && heavy) return 'Both';
  if (!bulky && !heavy) return 'Neither';
  if (bulky) return 'Bulky';
  return 'Heavy';
};

const length = 200, width = 50, height = 800, mass = 50;

console.log(categorizeBox(length, width, height, mass));
