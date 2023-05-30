// LCP 33. 蓄水

// 给定 N 个无限容量且初始均空的水缸，每个水缸配有一个水桶用来打水，第 i 个水缸配备的水桶容量记作 bucket[i]。

// 小扣有以下两种操作：

// 升级水桶：选择任意一个水桶，使其容量增加为 bucket[i]+1

// 蓄水：将全部水桶接满水，倒入各自对应的水缸

// 每个水缸对应最低蓄水量记作 vat[i]，返回小扣至少需要多少次操作可以完成所有水缸蓄水要求。

// 注意：实际蓄水量 达到或超过 最低蓄水量，即完成蓄水要求。

// 输入：bucket = [1,3], vat = [6,8]
// 输出：4
// 解释：
// 第 1 次操作升级 bucket[0]；
// 第 2 ~ 4 次操作均选择蓄水，即可完成蓄水要求。

// 输入：bucket = [9,0,1], vat = [0,2,2]
// 输出：3

// 思考：
// bucket = [1,3], vat = [6,8]
// dp[i] 为前 [0-i] 个水缸所需要的操作次数
// bucket = [1,3,1], vat = [6,8,5]
// dp[0]:
// 方案1：升级 1 次，蓄水 3 次
// 方案2：升级 2 次，蓄水 2 次
// dp[1]:
// 第二个水缸无法共享第一个水缸的升级操作，但是可以共享蓄水
// 蓄水 3 次才可以满足第二个水缸，所以只能用 方案1
// dp[2]:
// 方案1 不能满足第三个水缸
// 方案3：升级 1 次，蓄水 3 次
// 方案4：升级 2 次，蓄水 2 次
// 方案5：升级 4 次，蓄水 0 次
// 结合前两个水缸，我们在 方案1 的基础上，为第三个水缸多升级 1 次即可
// 结论：用少升级的方案，因为蓄水操作是所有水缸一起蓄水
// 每个水缸的应用方案中，选择多蓄水，少升级的方案

// ！！！操，想多了，老实枚举吧！！！

// O(len * maxVat) O(1)
// 执行用时：
// 68 ms, 在所有 JavaScript 提交中击败了58.89%的用户
// 内存消耗：
// 41 MB, 在所有 JavaScript 提交中击败了 80.55% 的用户
const storeWater = (bucket, vat) => {
  let maxVat = 0;
  for (const i of vat) {
    if (i > maxVat) maxVat = i;
  }
  if (maxVat === 0) return 0;
  let len = bucket.length;
  let res = Infinity;
  for (let fill = 1; fill <= maxVat && fill < res; fill++) {
    let update = 0;
    for (let i = 0; i < len; i++) {
      if (bucket[i] < vat[i]) {
        update += Math.max(0, Math.ceil(vat[i] / fill) - bucket[i]);
      }
    }
    const total = update + fill;
    res = Math.min(res, total);
  }
  return res;
};

const bucket = [1,3], vat = [6,6];
console.log(storeWater(bucket, vat));
