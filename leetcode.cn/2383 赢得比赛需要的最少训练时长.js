// 2383. 赢得比赛需要的最少训练时长

// 你正在参加一场比赛，给你两个 正 整数 initialEnergy 和 initialExperience 分别表示你的初始精力和初始经验。

// 另给你两个下标从 0 开始的整数数组 energy 和 experience，长度均为 n 。

// 你将会 依次 对上 n 个对手。第 i 个对手的精力和经验分别用 energy[i] 和 experience[i] 表示。

// 当你对上对手时，需要在经验和精力上都 严格 超过对手才能击败他们，然后在可能的情况下继续对上下一个对手。

// 击败第 i 个对手会使你的经验 增加 experience[i]，但会将你的精力 减少  energy[i] 。

// 在开始比赛前，你可以训练几个小时。每训练一个小时，你可以选择将增加经验增加 1 或者 将精力增加 1 。

// 返回击败全部 n 个对手需要训练的 最少 小时数目。

// 输入：initialEnergy = 5, initialExperience = 3, energy = [1,4,3,2], experience = [2,6,3,1]
// 输出：8

// 输入：initialEnergy = 2, initialExperience = 4, energy = [1], experience = [3]
// 输出：0

// 思考：
// 理想状态下，通关时，energy === 1, experience = sum(initialExperience, experience0, ... experienceN);
// 看例子：
// initialEnergy = 5,
// initialExperience = 3,
// energy = [1, 4, 3, 2],
// experience = [2, 6, 3, 1];
// 通关时的数据：energy = 1, experience = sum(experience) + initialExperience;
// 面对倒数第一的敌人时，最理想的数据：energy = 3, experience = 2
// 可是 experience 显然不满足打到上一个敌人，需要至少为 4

// 可得：
// initialEnergy = 1 + 2 + 3 + 4 + 1 = 11
// initialExperience = 5

// 执行用时：
// 48 ms, 在所有 JavaScript 提交中击败了 99.07% 的用户
// 内存消耗：
// 41.2 MB, 在所有 JavaScript 提交中击败了 49.95% 的用户
const minNumberOfHours = (initialEnergy, initialExperience, energy, experience) => {
  const needEnergy = energy.reduce((p, c) => p + c, 1);
  let needExperience = experience[experience.length - 1] + 1;
  for (let i = experience.length - 2; i >= 0; i--) {
    const current = experience[i];
    needExperience -= current;
    if (needExperience <= current) needExperience = current + 1;
  }
  const deltaEnergy = initialEnergy >= needEnergy ? 0 : needEnergy - initialEnergy;
  const deltaExperience = initialExperience >= needExperience ? 0 : needExperience - initialExperience;
  return deltaEnergy + deltaExperience;
};
// 预期：8
const initialEnergy = 5,
  initialExperience = 3,
  energy = [1, 4, 3, 2],
  experience = [2, 6, 3, 1];

// 预期：125
// const initialEnergy = 49,
//   initialExperience = 25,
//   energy = [98, 2, 47],
//   experience = [19, 69, 86];

// 预期：66
// const initialEnergy = 43,
//   initialExperience = 76,
//   energy = [11, 65, 22],
//   experience = [85, 29, 22];

// 预期：891
// const initialEnergy = 30,
//   initialExperience = 78,
//   energy = [24, 91, 63, 38, 31, 63, 22, 35, 91, 54, 88, 46, 80, 14, 12, 19, 57, 92],
//   experience = [18, 43, 36, 88, 84, 21, 82, 54, 61, 80, 68, 54, 75, 27, 99, 14, 86, 95];

console.log(minNumberOfHours(initialEnergy, initialExperience, energy, experience));
