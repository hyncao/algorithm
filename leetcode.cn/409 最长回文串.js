// 409. 最长回文串

// 给定一个包含大写字母和小写字母的字符串 s ，返回 通过这些字母构造成的 最长的回文串的长度。

// 在构造过程中，请注意 区分大小写 。比如 "Aa" 不能当做一个回文字符串。

// 输入:s = "abccccdd"
// 输出:7
// 解释:
// 我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。

const longestPalindrome = s => {
  const map = new Map();
  let len = 0;
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      len += 2;
      map.delete(s[i]);
    } else {
      map.set(s[i]);
    }
  }

  return len + (map.size > 0 ? 1 : 0);
};

const s = 'bccccdd';

console.log(longestPalindrome(s));
