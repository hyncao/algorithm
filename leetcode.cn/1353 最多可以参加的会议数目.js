// 1353 最多可以参加的会议数目

// TODO

// 给你一个数组 events，其中 events[i] = [startDayi, endDayi] ，表示会议 i 开始于 startDayi ，结束于 endDayi 。
// 你可以在满足 startDayi <= d <= endDayi 中的任意一天 d 参加会议 i 。注意，一天只能参加一个会议。
// 请你返回你可以参加的 最大 会议数目。

// 输入：events = [[1,2],[2,3],[3,4]]
// 输出：3

// 输入：events= [[1,2],[2,3],[3,4],[1,2]]
// 输出：4

// 贪心
// 贪心策略: 选择当天所能参加的会议中, 最快结束的会议
const maxEvents = events => {
  const hashMap = new Map();
  for (let i = 0; i < events.length; i++) {
    hashMap.set(i, events[i]);
  }
  let current = 1;
  let count = 0;
  while (hashMap.size > 0) {
    let min = Infinity;
    let minIndex = -1;
    let outdateIndex = [];

    for (let [key, value] of hashMap) {
      if (current >= value[0] && current <= value[1]) {
        if (value[1] - current < min) {
          min = value[1] - current;
          minIndex = key;
        }
      }
      if (current > value[1]) {
        outdateIndex.push(key);
      }
    }
    for (let i of outdateIndex) {
      hashMap.delete(i);
    }
    if (minIndex > -1) {
      hashMap.delete(minIndex);
      count++;
    }
    current++;
  }
  return count;
};

const events = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 2],
];

console.log(maxEvents(events));
