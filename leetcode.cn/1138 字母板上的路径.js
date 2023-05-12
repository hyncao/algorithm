// 1138. 字母板上的路径

// 我们从一块字母板上的位置 (0, 0) 出发，该坐标对应的字符为 board[0][0]。

// 在本题里，字母板为board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"]，如下所示。

// a b c d e
// f g h i j
// k l m n o
// p q r s t
// u v w x y
// z

// 我们可以按下面的指令规则行动：

// 如果方格存在，'U' 意味着将我们的位置上移一行；
// 如果方格存在，'D' 意味着将我们的位置下移一行；
// 如果方格存在，'L' 意味着将我们的位置左移一列；
// 如果方格存在，'R' 意味着将我们的位置右移一列；
// '!' 会把在我们当前位置 (r, c) 的字符 board[r][c] 添加到答案中。
// （注意，字母板上只存在有字母的位置。）

// 返回指令序列，用最小的行动次数让答案和目标 target 相同。你可以返回任何达成目标的路径。

// 输入：target = "leet"
// 输出："DDR!UURRR!!DDD!"

// const board = [
//   ['a', 'b', 'c', 'd', 'e'],
//   ['f', 'g', 'h', 'i', 'j'],
//   ['k', 'l', 'm', 'n', 'o'],
//   ['p', 'q', 'r', 's', 't'],
//   ['u', 'v', 'w', 'x', 'y'],
//   ['z'],
// ];

// 执行用时：
// 52 ms , 在所有 JavaScript 提交中击败了 100.00% 的用户
// 内存消耗：
// 41.1 MB , 在所有 JavaScript 提交中击败了 66.67% 的用户
const alphabetBoardPath = target => {
  let res = '';
  let current = [0, 0];
  for (let i = 0; i < target.length; i++) {
    const position = [Math.floor((target[i].charCodeAt() - 97) / 5), (target[i].charCodeAt() - 97) % 5];
    offsetY = position[0] - current[0];
    offsetX = position[1] - current[1];
    if (target[i] === 'z') {
      for (let i = 0; i < Math.abs(offsetX); i++) {
        res += offsetX > 0 ? 'R' : 'L';
      }
      for (let i = 0; i < Math.abs(offsetY); i++) {
        res += offsetY > 0 ? 'D' : 'U';
      }
    } else {
      for (let i = 0; i < Math.abs(offsetY); i++) {
        res += offsetY > 0 ? 'D' : 'U';
      }
      for (let i = 0; i < Math.abs(offsetX); i++) {
        res += offsetX > 0 ? 'R' : 'L';
      }
    }
    res += '!';
    current = position;
  }
  return res;
};

const target = 'leet';

console.log(alphabetBoardPath(target));
