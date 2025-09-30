/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  const count = new Map();
  for (let char of s) {
    if (count.has(char)) {
      count.set(char, count.get(char) + 1);
    } else {
      count.set(char, 1);
    }
  }
  let oddCount = 0;
  for (let occurance of count.values()) {
    if (occurance % 2 !== 0) oddCount++;
    if (oddCount > 1) return false; // 超过一个奇数就不可能
  }

  return true;
};
