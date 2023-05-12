// 383. 赎金信

// 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。

// 如果可以，返回 true ；否则返回 false 。

// magazine 中的每个字符只能在 ransomNote 中使用一次。

// 示例 1：

// 输入：ransomNote = "a", magazine = "b"
// 输出：false
// 示例 2：

// 输入：ransomNote = "aa", magazine = "ab"
// 输出：false

// 开莽 O(n*m)
// 执行用时：
// 316 ms, 在所有 JavaScript 提交中击败了 10.96% 的用户
// 内存消耗：
// 44.9 MB, 在所有 JavaScript 提交中击败了 33.37% 的用户
const canConstruct1 = (ransomNote, magazine) => {
  const magazineArr = magazine.split('');
  for (let i = 0; i < ransomNote.length; i++) {
    const index = magazineArr.indexOf(ransomNote[i]);
    if (index === -1) return false;
    magazineArr.splice(index, 1);
  }
  return true;
};

// O(n+m)
// 用 map 查询，比 Array.prototype.indexOf 快得多
// 执行用时：
// 76 ms, 在所有 JavaScript 提交中击败了 64.47% 的用户
// 内存消耗：
// 42.3 MB, 在所有 JavaScript 提交中击败了 92.16% 的用户
const canConstruct2 = (ransomNote, magazine) => {
  const magazineMap = {};
  for (let i = 0; i < magazine.length; i++) {
    if (magazine[i] in magazineMap) {
      magazineMap[magazine[i]]++;
    } else {
      magazineMap[magazine[i]] = 1;
    }
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (magazineMap[ransomNote[i]]) {
      magazineMap[ransomNote[i]]--;
    } else {
      return false;
    }
  }
  return true;
};

const ransomNote = 'ab';
const magazine = 'abasd';

console.log(canConstruct2(ransomNote, magazine));
