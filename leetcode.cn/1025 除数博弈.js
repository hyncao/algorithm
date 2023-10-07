// 1025. 除数博弈

// 爱丽丝和鲍勃一起玩游戏，他们轮流行动。爱丽丝先手开局。

// 最初，黑板上有一个数字 n 。在每个玩家的回合，玩家需要执行以下操作：

// 选出任一 x，满足 0 < x < n 且 n % x == 0 。

// 用 n - x 替换黑板上的数字 n 。

// 如果玩家无法执行这些操作，就会输掉游戏。

// 只有在爱丽丝在游戏中取得胜利时才返回 true 。假设两个玩家都以最佳状态参与游戏。

// 输入：n = 2
// 输出：true
// 解释：爱丽丝选择 1，鲍勃无法进行操作。

// 输入：n = 3
// 输出：false
// 解释：爱丽丝选择 1，鲍勃也选择 1，然后爱丽丝无法进行操作。

// 思考:
// n = 1 false
// n = 2 true
// n = 3 false

// 奇数 - 奇数 = 偶数
// 奇数 - 偶数 = 奇数

// 偶数 - 偶数 = 偶数
// 偶数 - 奇数 = 奇数

// 选 1 的时候可以改变当前奇偶性

// 判断是否为奇偶数即可
// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 86.11% 的用户
// 内存消耗：
// 39.73 MB, 在所有 JavaScript 提交中击败了 89.82% 的用户
const divisorGame = n => (n & 1) === 0;

const n = 194;

console.log(divisorGame(n));
