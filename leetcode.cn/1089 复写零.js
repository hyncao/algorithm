// 1089. 复写零

// 给你一个长度固定的整数数组 arr ，请你将该数组中出现的每个零都复写一遍，并将其余的元素向右平移。

// 注意：请不要在超过该数组长度的位置写入元素。请对输入的数组 就地 进行上述修改，不要从函数返回任何东西。

// 示例 1：

// 输入：arr = [1,0,2,3,0,4,5,0]
// 输出：[1,0,0,2,3,0,0,4]
// 解释：调用函数后，输入的数组将被修改为：[1,0,0,2,3,0,0,4]

// 示例 2：

// 输入：arr = [1,2,3]
// 输出：[1,2,3]

// O(n) O(1)
// 执行用时：
// 72 ms, 在所有 JavaScript 提交中击败了 71.76% 的用户
// 内存消耗：
// 42.01 MB, 在所有 JavaScript 提交中击败了 70.59% 的用户
const duplicateZeros1 = arr => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === 0) {
      arr.pop();
      arr.splice(i, 0, 0);
      i++;
    }
  }
};

// O(n) O(n)
// 执行用时：
// 64 ms, 在所有 JavaScript 提交中击败了 92.50% 的用户
// 内存消耗：
// 41.71 MB, 在所有 JavaScript 提交中击败了 91.25% 的用户
const duplicateZeros2 = arr => {
  const len = arr.length;
  const temp = [...arr];
  let delta = 0;
  for (let arrI = 0, tempI = 0; arrI < len; arrI++, tempI++) {
    arr[arrI] = temp[tempI];
    if (temp[tempI] === 0) {
      if (arrI < len - 1) arr[arrI + 1] = 0;
      arrI++;
    }
  }
};

const arr = [0, 0, 0, 0, 0, 0, 0];

duplicateZeros2(arr);

console.log(arr);
