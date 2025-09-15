var titleToNumber = function (columnTitle) {
  let number = 0;
  let multiple = 1;
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    const k = columnTitle[i].charCodeAt() - "A".charCodeAt() + 1;
    number += multiple * k; // ← 这里是“进制转换”的累加
    multiple *= 26; // ← 这里是进制的基数，Excel 列号是 26 进制
  }
  return number;
};
