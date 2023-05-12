// 599. 两个列表的最小索引总和

// 假设 Andy 和 Doris 想在晚餐时选择一家餐厅，并且他们都有一个表示最喜爱餐厅的列表，每个餐厅的名字用字符串表示。

// 你需要帮助他们用最少的索引和找出他们共同喜爱的餐厅。 如果答案不止一个，则输出所有答案并且不考虑顺序。 你可以假设答案总是存在。

// 输入: list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]，list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
// 输出: ["Shogun"]
// 解释: 他们唯一共同喜爱的餐厅是“Shogun”。

// 输入:list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]，list2 = ["KFC", "Shogun", "Burger King"]
// 输出: ["Shogun"]

// 注：1 <= list1.length, list2.length <= 1000
// 也就是说本体的样本数量实在太少，最多也就是 2000
// 而且乐扣的测试用例也远远没有达到极限长度
// 所以看到了 indexOf 和 map 操作时间上差不多的假象
// 不要为了做题而做题，尽量用 map 吧，比 indexOf 快的多
// 参考链接：
// IndexOf、Map.has、includes性能对比
// https://juejin.cn/post/6966146217390637093

// 执行用时：
// 108 ms, 在所有 JavaScript 提交中击败了 43.40% 的用户
// 内存消耗：
// 53.9 MB, 在所有 JavaScript 提交中击败了 5.03% 的用户
const findRestaurant1 = (list1, list2) => {
  const map1 = {};
  const common = [];
  for (let i = 0; i < list1.length; i++) {
    map1[list1[i]] = i;
  }
  for (let i = 0; i < list2.length; i++) {
    if (list2[i] in map1) {
      const key = map1[list2[i]] + i;
      common[key] = common[key] ? common[key].concat(list2[i]) : [list2[i]];
    }
  }
  return common.filter(i => i)[0];
};

// 执行用时：
// 96 ms, 在所有 JavaScript 提交中击败了 61.64% 的用户
// 内存消耗：
// 52.4 MB, 在所有 JavaScript 提交中击败了 5.03% 的用户
const findRestaurant2 = (list1, list2) => {
  const map1 = {};
  const common = [];
  let min = Infinity;
  for (let i = 0; i < list1.length; i++) {
    map1[list1[i]] = i;
  }
  for (let i = 0; i < list2.length; i++) {
    if (list2[i] in map1) {
      const key = map1[list2[i]] + i;
      min = Math.min(min, key);
      common[key] = common[key] ? common[key].concat(list2[i]) : [list2[i]];
    }
  }
  return common[min];
};

// 执行用时：
// 80 ms, 在所有 JavaScript 提交中击败了 93.08% 的用户
// 内存消耗：
// 51.9 MB, 在所有 JavaScript 提交中击败了 5.03% 的用户
const findRestaurant3 = (list1, list2) => {
  const map1 = {};
  let res = [];
  let min = Infinity;
  for (let i = 0; i < list1.length; i++) {
    map1[list1[i]] = i;
  }
  for (let i = 0; i < list2.length; i++) {
    if (list2[i] in map1) {
      const key = map1[list2[i]] + i;
      if (key < min) {
        res = [list2[i]];
      }
      if (key === min) {
        res.push(list2[i]);
      }
      min = Math.min(min, key);
    }
  }
  return res;
};

// 执行用时：
// 84 ms, 在所有 JavaScript 提交中击败了 85.53% 的用户
// 内存消耗：
// 45.5 MB, 在所有 JavaScript 提交中击败了 84.91% 的用户
const findRestaurant4 = (list1, list2) => {
  let res = [];
  let min = Infinity;
  for (let i = 0; i < list1.length; i++) {
    const index = list2.indexOf(list1[i]);
    if (index > -1) {
      const key = i + index;
      if (key === min) {
        res.push(list1[i]);
      }
      if (key < min) {
        min = key;
        res = [list1[i]];
      }
    }
  }
  return res;
};

const list1 = ['a', 'b'],
  list2 = ['b', 'a'];

console.log(findRestaurant4(list1, list2));
