// 2626. 数组归约运算

// 请你编写一个函数，它的参数为一个整数数组 nums 、一个计算函数 fn 和初始值 init 。返回一个数组 归约后 的值。

// 你可以定义一个数组 归约后 的值，然后应用以下操作： val = fn(init, nums[0]) ， val = fn(val, nums[1]) ， val = fn(val, arr[2]) ，... 直到数组中的每个元素都被处理完毕。返回 val 的最终值。

// 如果数组的长度为 0，它应该返回 init 的值。

// 请你在不使用内置数组方法的 Array.reduce 前提下解决这个问题。

// 输入：
// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr; }
// init = 0
// 输出：10
// 解释：
// 初始值为 init=0 。
// (0) + nums[0] = 1
// (1) + nums[1] = 3
// (3) + nums[2] = 6
// (6) + nums[3] = 10
// Val 最终值为 10。

// 输入：
// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr * curr; }
// init = 100
// 输出：130
// 解释：
// 初始值为 init=0 。
// (100) + nums[0]^2 = 101
// (101) + nums[1]^2 = 105
// (105) + nums[2]^2 = 114
// (114) + nums[3]^2 = 130
// Val 最终值为 130。

// 输入：
// nums = []
// fn = function sum(accum, curr) { return 0; }
// init = 25
// 输出：25

const reduce = (nums, fn, init) => {
  if (nums.length === 0) return init;
  const sym = Symbol();
  let prev = sym;
  for (const i of nums) {
    prev = fn(prev === sym ? init : prev, i);
  }
  return prev;
};

const nums = [1, 2, 3, 4],
  fn = function sum(accum, curr) {
    return accum + curr;
  },
  init = 10;

console.log(reduce(nums, fn, init));
