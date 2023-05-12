// 205. 同构字符串

// 给定两个字符串 s 和 t ，判断它们是否是同构的。

// 如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。

// 每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。

// 输入：s = "paper", t = "title"
// 输出：true

// 输入：s = "foo", t = "bar"
// 输出：false

const isIsomorphic = (s, t) => {
  const arr1 = s.split('');
  const arr2 = t.split('');

  const fn = (arr1, arr2, count = 1) => {
    const letterIndex1 = arr1.findIndex(i => i.length === 1);
    const letterIndex2 = arr1.findIndex(i => i.length === 1);
    if (letterIndex1 !== letterIndex2) return false;
    if (letterIndex1 === -1) {
      return arr1.join() === arr2.join();
    }
    const _arr1 = arr1.map(i => (i === arr1[letterIndex1] ? count + 159 : i));
    const _arr2 = arr2.map(i => (i === arr2[letterIndex1] ? count + 159 : i));
    return fn(_arr1, _arr2, count + 1);
  };

  return fn(arr1, arr2);
};

const s = '13';
const t = '42';

console.log(isIsomorphic(s, t));
