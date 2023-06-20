// 944. 删列造序

// 给你由 n 个小写字母字符串组成的数组 strs，其中每个字符串长度相等。

// 这些字符串可以每个一行，排成一个网格。例如，strs = ["abc", "bce", "cae"] 可以排列为：

// abc
// bce
// cae

// 你需要找出并删除 不是按字典序升序排列的 列。在上面的例子（下标从 0 开始）中，列 0（'a', 'b', 'c'）和列 2（'c', 'e', 'e'）都是按升序排列的，而列 1（'b', 'c', 'a'）不是，所以要删除列 1 。

// 返回你需要删除的列数。

// 输入：strs = ["cba","daf","ghi"]
// 输出：1
// 解释：网格示意如下：
//   cba
//   daf
//   ghi
// 列 0 和列 2 按升序排列，但列 1 不是，所以只需要删除列 1 。

// 输入：strs = ["a","b"]
// 输出：0
// 解释：网格示意如下：
//   a
//   b
// 只有列 0 这一列，且已经按升序排列，所以不用删除任何列。

// 输入：strs = ["zyx","wvu","tsr"]
// 输出：3

// 执行用时：
// 68 ms, 在所有 JavaScript 提交中击败了 85.25% 的用户
// 内存消耗：
// 44.5 MB, 在所有 JavaScript 提交中击败了 95.08% 的用户
const minDeletionSize = strs => {
  const n = strs.length;
  const len = strs[0].length;
  let count = 0;
  for (let j = 0; j < len; j++) {
    for (let i = 1; i < n; i++) {
      if (strs[i - 1][j] > strs[i][j]) {
        count++;
        break;
      }
    }
  }
  return count;
};

const strs = ["asssssssssssssssssssssssssssssssssssss"];

console.log(minDeletionSize(strs));
