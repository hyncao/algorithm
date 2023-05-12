// 5. 最长回文子串

// 给你一个字符串 s，找到 s 中最长的回文子串。

const isPalindrome = s => {
  for (let left = 0, right = s.length - 1; left < right; left++, right--) {
    if (s[left] !== s[right]) {
      return false;
    }
  }
  return true;
};

// O(n²)
// 执行用时：
// 516 ms, 在所有 JavaScript 提交中击败了 32.61% 的用户
// 内存消耗：
// 47 MB, 在所有 JavaScript 提交中击败了 41.20% 的用户
const longestPalindrome = s => {
  let result = s[0];

  for (let len = 2; len <= s.length; len ++) {
    for (let i = 0; i < s.length-1;i++){
      const current = s.substr(i, len)
      if (current.length === len && isPalindrome(current)) {
        result = current;
        break;
      }
    }
  }

  return result;
};


const s = 'aacabdkacaa';

console.log(longestPalindrome(s))