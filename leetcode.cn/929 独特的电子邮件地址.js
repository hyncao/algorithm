// 929. 独特的电子邮件地址

// 每个 有效电子邮件地址 都由一个 本地名 和一个 域名 组成，以 '@' 符号分隔。除小写字母之外，电子邮件地址还可以含有一个或多个 '.' 或 '+' 。

// 例如，在 alice@leetcode.com中， alice 是 本地名 ，而 leetcode.com 是 域名 。
// 如果在电子邮件地址的 本地名 部分中的某些字符之间添加句点（'.'），则发往那里的邮件将会转发到本地名中没有点的同一地址。请注意，此规则 不适用于域名 。

// 例如，"alice.z@leetcode.com” 和 “alicez@leetcode.com” 会转发到同一电子邮件地址。
// 如果在 本地名 中添加加号（'+'），则会忽略第一个加号后面的所有内容。这允许过滤某些电子邮件。同样，此规则 不适用于域名 。

// 例如 m.y+name@email.com 将转发到 my@email.com。
// 可以同时使用这两个规则。

// 给你一个字符串数组 emails，我们会向每个 emails[i] 发送一封电子邮件。返回实际收到邮件的不同地址数目。

// 输入：emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
// 输出：2
// 解释：实际收到邮件的是 "testemail@leetcode.com" 和 "testemail@lee.tcode.com"。

// 输入：emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
// 输出：3

// 注意：
// 如果在 本地名 中添加加号（'+'），则会忽略第一个加号后面的所有内容
// 去掉 “第一个”
// 如果在 本地名 中添加加号（'+'），则会忽略加号后面的所有内容
// 力扣垃圾翻译

// 执行用时：
// 76 ms, 在所有 JavaScript 提交中击败了 63.24% 的用户
// 内存消耗：
// 47 MB, 在所有 JavaScript 提交中击败了 13.23% 的用户
const numUniqueEmails = emails => {
  const res = new Set();
  const len = emails.length;
  for (let i of emails) {
    let s = '';
    let plus = false;
    let atFlag = false;
    for (const l of i) {
      if (l === '@') atFlag = true;
      if (l === '+') {
        plus = true;
      }
      if (atFlag || (!plus && l !== '.')) {
        s += l;
      }
    }
    res.add(s);
  }
  return res.size;
};

const emails = [
  'fg.r.u.uzj+o.pw@kziczvh.com',
  'fg.r.u.uzj+o.f.d@kziczvh.com',
  'fg.r.u.uzj+lp.k@kziczvh.com',
  'fg.r.u.uzj+k+p.j@kziczvh.com',
  'fg.r.u.uzj+w.y+b@kziczvh.com',
  'fg.r.u.uzj+vq.o@kziczvh.com',
  'fg.r.u.uzj+uzq@kziczvh.com',
  'fg.r.u.uzj+mvz@kziczvh.com',
  'fg.r.u.uzj+taj@kziczvh.com',
  'fg.r.u.uzj+fek@kziczvh.com',
  'r.cyo.g+d.h+b.ja@tgsg.z.com',
  'r.cyo.g+ng.r.iq@tgsg.z.com',
  'r.cyo.g+n.h.e+n.g@tgsg.z.com',
  'r.cyo.g+x+d.c+f.t@tgsg.z.com',
  'r.cyo.g+x+t.y.l.i@tgsg.z.com',
  'r.cyo.g+brxxi@tgsg.z.com',
  'r.cyo.g+z+dr.k.u@tgsg.z.com',
  'r.cyo.g+d+l.c.n+g@tgsg.z.com',
];

console.log(numUniqueEmails(emails));
