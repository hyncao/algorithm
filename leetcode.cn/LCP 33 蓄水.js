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
// 一定是先升级，再蓄水
// 找出最贴近目标的 i ，完成 i 需要 X = Math.ceil(vat[i] / bucket[i])
// 找出最离谱的 i, 需要 Y = Math.ceil(vat[i] / X) - bucket[i]
// return X + Y
const storeWater = (bucket, vat) => {
  const len = bucket.length;
  let closest = 0;
  let farest = 0;
  let closestFactor = Infinity;
  let farestFactor = 1;
  for (let i = 0; i < len; i++) {
    const factor = Math.ceil(vat[i] / bucket[i]);
    if (factor < closestFactor) {
      closestFactor = factor;
      closest = i;
    }
    if (factor > farestFactor) {
      farestFactor = factor;
      farest = i;
    }
  }
  return closestFactor + Math.ceil(vat[farest] / closestFactor) - bucket[farest];
};

const bucket = [9,0,1],
  vat = [0,2,2];
console.log(storeWater(bucket, vat));
