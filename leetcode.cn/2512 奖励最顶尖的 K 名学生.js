// 2512. 奖励最顶尖的 K 名学生

// 给你两个字符串数组 positive_feedback 和 negative_feedback，分别包含表示正面的和负面的词汇。不会有单词同时是正面的和负面的。

// 一开始，每位学生分数为 0 。每个正面的单词会给学生的分数 加 3 分，每个负面的词会给学生的分数 减 1 分。

// 给你 n 个学生的评语，用一个下标从 0 开始的字符串数组 report 和一个下标从 0 开始的整数数组 student_id 表示，

// 其中 student_id[i] 表示这名学生的 ID，这名学生的评语是 report[i] 。每名学生的 ID 互不相同。

// 给你一个整数 k，请你返回按照得分 从高到低 最顶尖的 k 名学生。如果有多名学生分数相同，ID 越小排名越前。

// 输入：positive_feedback = ["smart","brilliant","studious"], negative_feedback = ["not"], report = ["this student is studious","the student is smart"], student_id = [1,2], k = 2
// 输出：[1,2]
// 解释：
// 两名学生都有 1 个正面词汇，都得到 3 分，学生 1 的 ID 更小所以排名更前。

// 输入：positive_feedback = ["smart","brilliant","studious"], negative_feedback = ["not"], report = ["this student is not studious","the student is smart"], student_id = [1,2], k = 2
// 输出：[2,1]
// 解释：
// - ID 为 1 的学生有 1 个正面词汇和 1 个负面词汇，所以得分为 3-1=2 分。
// - ID 为 2 的学生有 1 个正面词汇，得分为 3 分。
// 学生 2 分数更高，所以返回 [2,1] 。

// 桶排序
// 将所有点的距离计算一遍，放入 map 中，距离作为 key
// 执行用时：
// 164 ms, 在所有 JavaScript 提交中击败了 96.00% 的用户
// 内存消耗：
// 60.15 MB, 在所有 JavaScript 提交中击败了 80.00% 的用户
const topStudents = (positive_feedback, negative_feedback, report, student_id, k) => {
  const positive = new Set(positive_feedback);
  const negative = new Set(negative_feedback);
  const hash = {};
  const len = report.length;

  let min = 0;
  let max = 0;

  for (let i = 0; i < len; i++) {
    const current = report[i];
    let sentence = current.length;
    let word = '';
    let score = 0;
    for (let j = 0; j < sentence; j++) {
      const letter = current[j];
      if (letter === ' ' || (j === sentence - 1 && (word += letter))) {
        if (positive.has(word)) score += 3;
        if (negative.has(word)) score--;
        word = '';
      } else {
        word += letter;
      }
    }
    min = Math.min(min, score);
    max = Math.max(max, score);

    const student = hash[score];
    if (student) student.push(student_id[i]);
    else hash[score] = [student_id[i]];
  }

  const res = [];
  const hashLen = hash.length;
  for (let i = max; i >= min && k > 0; i--) {
    const arr = hash[i];
    if (arr) {
      const count = Math.min(arr.length, k);
      arr.sort((a, b) => a - b);
      res.push(...arr.slice(0, count));
      k -= count;
    }
  }
  return res;
};

const positive_feedback = ['fkeofjpc', 'qq', 'iio'],
  negative_feedback = ['jdh', 'khj', 'eget', 'rjstbhe', 'yzyoatfyx', 'wlinrrgcm'],
  report = [
    'rjstbhe eget kctxcoub urrmkhlmi yniqafy fkeofjpc iio yzyoatfyx khj iio',
    'gpnhgabl qq qq fkeofjpc dflidshdb qq iio khj qq yzyoatfyx',
    'tizpzhlbyb eget z rjstbhe iio jdh jdh iptxh qq rjstbhe',
    'jtlghe wlinrrgcm jnkdbd k iio et rjstbhe iio qq jdh',
    'yp fkeofjpc lkhypcebox rjstbhe ewwykishv egzhne jdh y qq qq',
    'fu ql iio fkeofjpc jdh luspuy yzyoatfyx li qq v',
    'wlinrrgcm iio qq omnc sgkt tzgev iio iio qq qq',
    'd vhg qlj khj wlinrrgcm qq f jp zsmhkjokmb rjstbhe',
  ],
  student_id = [96537918, 589204657, 765963609, 613766496, 43871615, 189209587, 239084671, 908938263],
  k = 3;

console.log(JSON.stringify(topStudents(positive_feedback, negative_feedback, report, student_id, k)));
