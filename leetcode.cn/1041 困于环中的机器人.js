// 1041. 困于环中的机器人

// 在无限的平面上，机器人最初位于 (0, 0) 处，面朝北方。注意:

// 北方向 是y轴的正方向。
// 南方向 是y轴的负方向。
// 东方向 是x轴的正方向。
// 西方向 是x轴的负方向。
// 机器人可以接受下列三条指令之一：

// "G"：直走 1 个单位
// "L"：左转 90 度
// "R"：右转 90 度
// 机器人按顺序执行指令 instructions，并一直重复它们。

// 只有在平面中存在环使得机器人永远无法离开时，返回 true。否则，返回 false。

// 输入：instructions = "GGLLGG"
// 输出：true

// 输入：instructions = "GG"
// 输出：false

// 输入：instructions = "GL"
// 输出：true

// 思考：一轮指令执行后我们来看机器人的朝向和所处位置
// 留在原地：无论执行几轮，机器人都会回到原地，无法离开
// 并非留在原地，则要分别讨论四个朝向，假设位置为(x, y)
// 朝北: 每多执行一轮指令，朝向不变，位置为(_x+x, _y+y), 注意到机器人越走越远，自由了
// 朝南：偶数次执行完指令，就会回到原点，并且面朝北
// 朝东朝西：4的倍数次执行完执行，就会回到原点，并且面朝北

// 无论机器人走多么复杂多么花哨的路，看他是否回到原点即可

// 执行用时：
// 56 ms, 在所有 JavaScript 提交中击败了 77.78% 的用户
// 内存消耗：
// 40.9 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
const isRobotBounded = instructions => {
  const towardList = ['up', 'right', 'down', 'left'];
  let x = 0;
  let y = 0;
  let toward = 0;
  for (const i of instructions) {
    switch (i) {
      case 'G': {
        if (toward === 0 || toward === 2) {
          x += toward === 0 ? 1 : -1;
        }
        if (toward === 1 || toward === 3) {
          y += toward === 1 ? 1 : -1;
        }
        break;
      }
      case 'L': {
        toward = toward === 0 ? 3 : toward - 1;
        break;
      }
      case 'R': {
        toward = toward === 3 ? 0 : toward + 1;
        break;
      }
    }
  }
  return (x === 0 && y === 0) || toward !== 0;
};

const instructions = 'GG';

console.log(isRobotBounded(instructions));
