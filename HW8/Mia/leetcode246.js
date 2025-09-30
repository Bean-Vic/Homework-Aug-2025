/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function (num) {
  let map = { 0: "0", 1: "1", 6: "9", 9: "6", 8: "8" };
  let left = 0,
    right = num.length - 1;

  while (left <= right) {
    let l = num[left],
      r = num[right];
    console.log("l", l);
    if (!(l in map) || map[l] !== r) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
