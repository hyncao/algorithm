// 412. Fizz Buzz

// 给你一个整数 n ，找出从 1 到 n 各个整数的 Fizz Buzz 表示，并用字符串数组 answer（下标从 1 开始）返回结果，其中：

// answer[i] == "FizzBuzz" 如果 i 同时是 3 和 5 的倍数。
// answer[i] == "Fizz" 如果 i 是 3 的倍数。
// answer[i] == "Buzz" 如果 i 是 5 的倍数。
// answer[i] == i （以字符串形式）如果上述条件全不满足。

// 输入：n = 3
// 输出：["1","2","Fizz"]

// 输入：n = 5
// 输出：["1","2","Fizz","4","Buzz"]

// 输入：n = 15
// 输出：["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// O(n)
// 执行用时：
// 68 ms, 在所有 JavaScript 提交中击败了 58.33% 的用户
// 内存消耗：
// 43.2 MB, 在所有 JavaScript 提交中击败了 35.37% 的用户
const fizzBuzz1 = n => {
  const res = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      res.push('FizzBuzz');
    } else if (i % 3 === 0) {
      res.push('Fizz');
    } else if (i % 5 === 0) {
      res.push('Buzz');
    } else res.push(`${i}`);
  }
  return res;
};

const fizzBuzz2 = n => {
  return Array(n)
    .fill()
    .map((_, i) => {
      if ((i + 1) % 15 === 0) {
        return 'FizzBuzz';
      } else if ((i + 1) % 3 === 0) {
        return 'Fizz';
      } else if ((i + 1) % 5 === 0) {
        return 'Buzz';
      } else return `${i + 1}`;
    });
};

const n = 15;

console.log(JSON.stringify(fizzBuzz2(n)));
