// 1233. 删除子文件夹

// 你是一位系统管理员，手里有一份文件夹列表 folder，你的任务是要删除该列表中的所有 子文件夹，并以 任意顺序 返回剩下的文件夹。

// 如果文件夹 folder[i] 位于另一个文件夹 folder[j] 下，那么 folder[i] 就是 folder[j] 的 子文件夹 。

// 文件夹的「路径」是由一个或多个按以下格式串联形成的字符串：'/' 后跟一个或者多个小写英文字母。

// 输入：folder = ["/a","/a/b","/c/d","/c/d/e","/c/f"]
// 输出：["/a","/c/d","/c/f"]
// 解释："/a/b" 是 "/a" 的子文件夹，而 "/c/d/e" 是 "/c/d" 的子文件夹。

// 输入: folder = ["/a/b/c","/a/b/ca","/a/b/d"]
// 输出: ["/a/b/c","/a/b/ca","/a/b/d"]

// 执行用时：
// 116 ms, 在所有 JavaScript 提交中击败了 93.75% 的用户
// 内存消耗：
// 54.1 MB, 在所有 JavaScript 提交中击败了 75.00% 的用户
const removeSubfolders = folder => {
  const sorted = [...folder].sort();
  let prev = '';
  const filtered = sorted.filter(item => {
    if (item.startsWith(prev) && prev) {
      return false;
    }
    prev = item + '/';
    return true;
  });
  return filtered;
};

const folder = ['/a', '/a/b', '/c/d', '/c/d/e', '/c/f'];

console.log(removeSubfolders(folder));
