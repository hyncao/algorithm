// 66. 加一

// 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

// 你可以假设除了整数 0 之外，这个整数不会以零开头。

// 输入：digits = [4,3,2,1]
// 输出：[4,3,2,2]

// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 70.59% 的用户
// 内存消耗：
// 41.1 MB, 在所有 JavaScript 提交中击败了 42.41% 的用户
const plusOne1 = digits => {
  digits[digits.length - 1]++;
  if (digits[digits.length - 1] === 10) {
    digits[digits.length - 1] = 0;
    let upgrade = true;
    for (let i = digits.length - 2; i >= 0; i--) {
      if (upgrade) {
        digits[i]++;
        if (digits[i] === 10) {
          upgrade = true;
          digits[i] = 0;
        } else {
          upgrade = false;
        }
      } else {
        break;
      }
    }
    if (upgrade) {
      digits.unshift(1);
    }
  }
  return digits;
};

// 执行用时：
// 52 ms, 在所有 JavaScript 提交中击败了 96.29% 的用户
// 内存消耗：
// 41.2 MB, 在所有 JavaScript 提交中击败了 23.95% 的用户
const plusOne2 = digits => {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] === 10) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};

const digits = [9];

console.log(plusOne2(digits));
