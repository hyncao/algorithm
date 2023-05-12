// 13. 罗马数字转整数

// 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。

// 字符          数值
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// 输入: s = "LVIII"
// 输出: 58

// 输入: s = "MCMXCIV"
// 输出: 1994

// 开莽 O(n)
// 执行用时：
// 124 ms, 在所有 JavaScript 提交中击败了31.84%的用户
// 内存消耗：
// 47.4 MB, 在所有 JavaScript 提交中击败了 21.59% 的用户
const romanToInt1 = s => {
  const sortMap = {
    M: 1,
    D: 2,
    C: 3,
    L: 4,
    X: 5,
    V: 6,
    I: 7,
  };
  const valueMap = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let sum = 0;
  while (s.length > 0) {
    if (s.length === 1) {
      sum += valueMap[s];
      break;
    }
    if (sortMap[s[0]] - sortMap[s[1]] < 3 && sortMap[s[0]] - sortMap[s[1]] > 0) {
      sum += valueMap[s[1]] - valueMap[s[0]];
      s = s.substring(2);
    } else {
      sum += valueMap[s[0]];
      s = s.substring(1);
    }
  }
  return sum;
};

// 枚举怪异的排列, 其余全部相加 O(n)
// 执行用时：
// 120 ms, 在所有 JavaScript 提交中击败了 42.27% 的用户
// 内存消耗：
// 47.8 MB, 在所有 JavaScript 提交中击败了 15.06% 的用户
const romanToInt2 = s => {
  const valueMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let sum = 0;
  while (s.length > 0) {
    if (s.length === 1) {
      sum += valueMap[s];
      break;
    }
    if (valueMap[`${s[0]}${s[1]}`]) {
      sum += valueMap[`${s[0]}${s[1]}`];
      s = s.substring(2);
    } else {
      sum += valueMap[s[0]];
      s = s.substring(1);
    }
  }
  return sum;
};

// 改为 for 循环, 特殊情况改变指针
// 执行用时：
// 92 ms, 在所有 JavaScript 提交中击败了 99% 的用户
// 内存消耗：
// 45.4 MB, 在所有 JavaScript 提交中击败了 89% 的用户
const romanToInt3 = s => {
  const valueMap = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let cur = valueMap[s[i]],
      next = valueMap[s[i + 1]];
    if (cur < next) {
      sum -= cur;
    } else {
      sum += cur;
    }
  }
  return sum;
};

const s = 'MCMXCIV';

console.log(romanToInt3(s));
