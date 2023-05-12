// 345. 反转字符串中的元音字母

// 给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。

// 元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现不止一次。

// 输入：s = "leetcode"
// 输出："leotcede"

// 执行用时：
// 68 ms, 在所有 JavaScript 提交中击败了 91.93% 的用户
// 内存消耗：
// 46.9 MB, 在所有 JavaScript 提交中击败了 51.83% 的用户
const reverseVowels = s => {
  const map = {
    a: true,
    A: true,
    e: true,
    E: true,
    i: true,
    I: true,
    o: true,
    O: true,
    u: true,
    U: true,
  };

  const arr = s.split('');
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (map[arr[left]] && map[arr[right]]) {
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
      continue;
    }
    if (map[arr[left]]) {
      right--;
      continue;
    }
    if (map[arr[right]]) {
      left++;
      continue;
    }
    left++;
    right--;
  }
  return arr.join('');
};

const s = 'leetcode';

console.log(reverseVowels(s));
