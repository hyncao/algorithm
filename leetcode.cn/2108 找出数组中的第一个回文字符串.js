// 2108. 找出数组中的第一个回文字符串

// 给你一个字符串数组 words ，找出并返回数组中的 第一个回文字符串 。如果不存在满足要求的字符串，返回一个 空字符串 "" 。

// 回文字符串 的定义为：如果一个字符串正着读和反着读一样，那么该字符串就是一个 回文字符串 。

// 输入：words = ["abc","car","ada","racecar","cool"]
// 输出："ada"

// 输入：words = ["def","ghi"]
// 输出：""

// 执行用时：
// 68 ms, 在所有 JavaScript 提交中击败了 90.00% 的用户
// 内存消耗：
// 45.6 MB, 在所有 JavaScript 提交中击败了 78.57% 的用户
const firstPalindrome = words => {
  return (
    words.find(item => {
      let i = 0;
      let j = item.length - 1;
      while (i < j) {
        if (item[i] !== item[j]) return false;
        i++;
        j--;
      }
      return true;
    }) || ''
  );
};

const words = ['abc', 'car', 'ada', 'racecar', 'cool'];

console.log(firstPalindrome(words));
