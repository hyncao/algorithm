// 12. 整数转罗马数字

// 字符          数值
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// 输入: num = 58
// 输出: "LVIII"
// 解释: L = 50, V = 5, III = 3.

// 输入: num = 1994
// 输出: "MCMXCIV"
// 解释: M = 1000, CM = 900, XC = 90, IV = 4.

const intToRoman = num => {
  const valueSymbols = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];
  const roman = [];
  for (const [value, symbol] of valueSymbols) {
    while (num >= value) {
      num -= value;
      roman.push(symbol);
    }
    if (num == 0) {
      break;
    }
  }
  return roman.join('');
};

const num = 1994;

console.log(intToRoman(num));
