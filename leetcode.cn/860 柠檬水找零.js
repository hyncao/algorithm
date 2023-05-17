// 860. 柠檬水找零

// 在柠檬水摊上，每一杯柠檬水的售价为 5 美元。顾客排队购买你的产品，（按账单 bills 支付的顺序）一次购买一杯。

// 每位顾客只买一杯柠檬水，然后向你付 5 美元、10 美元或 20 美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 5 美元。

// 注意，一开始你手头没有任何零钱。

// 给你一个整数数组 bills ，其中 bills[i] 是第 i 位顾客付的账。如果你能给每位顾客正确找零，返回 true ，否则返回 false 。

// 输入：bills = [5,5,5,10,20]
// 输出：true

// 输入：bills = [5,5,10,10,20]
// 输出：false

// 注意：
// 要考虑到钱的面值只有 5 10 20 三种，手里有两个 10 块钱，就没办法给 20 块的顾客找零
// 找零时优先将大额纸币用掉

// 执行用时：
// 60 ms, 在所有 JavaScript 提交中击败了 100.00% 的用户
// 内存消耗：
// 49.2 MB, 在所有 JavaScript 提交中击败了 94.44% 的用户
const lemonadeChange = bills => {
  let change5 = 0;
  let change10 = 0;
  for (const i of bills) {
    if (i === 5) change5++;
    if (i === 10) change10++;
    if (i === 20) {
      if (change10) {
        change10--;
        change5--;
      } else {
        change5 -= 3;
      }
    }
    if (i === 10) {
      change5--;
    }
    if (change5 < 0) return false;
  }
  return true;
};

const bills = [5,5,10,10,20];

console.log(lemonadeChange(bills));
