// 657. 机器人能否返回原点

// 在二维平面上，有一个机器人从原点 (0, 0) 开始。给出它的移动顺序，判断这个机器人在完成移动后是否在 (0, 0) 处结束。

// 移动顺序由字符串 moves 表示。字符 move[i] 表示其第 i 次移动。机器人的有效动作有 R（右），L（左），U（上）和 D（下）。

// 如果机器人在完成所有动作后返回原点，则返回 true。否则，返回 false。

// 注意：机器人“面朝”的方向无关紧要。 “R” 将始终使机器人向右移动一次，“L” 将始终向左移动等。此外，假设每次移动机器人的移动幅度相同。

// 输入: moves = "UD"
// 输出: true
// 解释：机器人向上移动一次，然后向下移动一次。所有动作都具有相同的幅度，因此它最终回到它开始的原点。因此，我们返回 true。

// 输入: moves = "LL"
// 输出: false
// 解释：机器人向左移动两次。它最终位于原点的左侧，距原点有两次 “移动” 的距离。我们返回 false，因为它在移动结束时没有返回原点。

// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 85.03% 的用户
// 内存消耗：
// 42.9 MB, 在所有 JavaScript 提交中击败了 28.34% 的用户
const judgeCircle1 = moves => {
  let sum = 0;
  const map = {
    R: 17,
    L: -17,
    U: 53,
    D: -53,
  };
  for (const i of moves) {
    sum += map[i];
  }
  return sum === 0;
};

// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 93.05% 的用户
// 内存消耗：
// 41.8 MB, 在所有 JavaScript 提交中击败了 70.59% 的用户
const judgeCircle2 = moves => {
  let sum = 0;
  for (const i of moves) {
    let val = 0;
    switch (i) {
      case 'R':
        val = 17;
        break;
      case 'L':
        val = -17;
        break;
      case 'U':
        val = 53;
        break;
      case 'D':
        val = -53;
        break;
    }
    sum += val;
  }
  return sum === 0;
};

const moves = 'LL';

console.log(judgeCircle2(moves));
