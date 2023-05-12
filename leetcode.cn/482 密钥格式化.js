// 482. 密钥格式化

// 给定一个许可密钥字符串 s，仅由字母、数字字符和破折号组成。字符串由 n 个破折号分成 n + 1 组。你也会得到一个整数 k 。

// 我们想要重新格式化字符串 s，使每一组包含 k 个字符，除了第一组，它可以比 k 短，但仍然必须包含至少一个字符。

// 此外，两组之间必须插入破折号，并且应该将所有小写字母转换为大写字母。

// 返回 重新格式化的许可密钥 。

// 输入：S = "5F3Z-2e-9-w", k = 4
// 输出："5F3Z-2E9W"

// 执行用时：
// 76 ms, 在所有 JavaScript 提交中击败了 60.90% 的用户
// 内存消耗：
// 46.9 MB, 在所有 JavaScript 提交中击败了 58.98% 的用户
const licenseKeyFormatting = (S, k) => {
  let res = '';
  let index = 0;
  for (let i = S.length - 1; i >= 0; i--) {
    if (S[i] !== '-') {
      res = S[i].toUpperCase() + res;
      index++;
    }
    if (index === k) {
      res = '-' + res;
      index = 0;
    }
  }
  return res.slice(res[0] === '-' ? 1 : 0);
};

const S = '------a-a-a-a--';
const k = 2;

console.log(licenseKeyFormatting(S, k));
