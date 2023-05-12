// 717. 1 比特与 2 比特字符

// 有两种特殊字符：

// 第一种字符可以用一比特 0 表示
// 第二种字符可以用两比特（10 或 11）表示
// 给你一个以 0 结尾的二进制数组 bits ，如果最后一个字符必须是一个一比特字符，则返回 true 。

// 输入: bits = [1, 0, 0]
// 输出: true
// 解释: 唯一的解码方式是将其解析为一个两比特字符和一个一比特字符。
// 所以最后一个字符是一比特字符。

// 输入：bits = [1,1,1,0]
// 输出：false
// 解释：唯一的解码方式是将其解析为两比特字符和两比特字符。
// 所以最后一个字符不是一比特字符。

// 思考：
// 1. 如果最后两位都是 0，则一定是 true
// 2. 从最后一位 0 往前看，连续 1 的次数如果是偶数，一定是 true

// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 68.24% 的用户
// 内存消耗：
// 41 MB, 在所有 JavaScript 提交中击败了 60.13% 的用户
const isOneBitCharacter = bits => {
  let count = 0;
  for (let i = bits.length - 2; i >= 0; i--) {
    if (i === bits.length - 2 && bits[i] === 0) return true;
    if (bits[i] === 1) {
      count++;
    }
    if (bits[i] === 0) {
      break;
    }
  }
  return (count & 1) === 0;
};

const bits = [1, 1, 1, 1, 0, 0, 1, 1, 1, 0];

console.log(isOneBitCharacter(bits));
