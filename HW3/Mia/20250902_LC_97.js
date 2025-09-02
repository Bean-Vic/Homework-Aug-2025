/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) {
    return false;
  }
  // 初始化 memo
  let memo = Array.from({ length: s1.length + 1 }, () =>
    Array(s2.length + 1).fill(-1)
  );
  console.log(memo);
  function isinter(i, j, k) {
    if (i === s1.length) {
      console.log("s2.substring(j)", s2.substring(j));
      return s2.substring(j) === s3.substring(k);
    }
    if (j === s2.length) {
      return s1.substring(i) === s3.substring(k);
    }
    // 如果 memo[i][j] 已经算过，直接返回结果
    // 1 表示能组成，0 表示不能组成
    // 避免重复递归，提高效率
    if (memo[i][j] !== -1) {
      return memo[i][j] === 1;
    }
    let ans = false;
    //只有当 s1[i] === s3[k] 为真，才去执行递归 isinter(i + 1, j, k + 1)
    if (
      (s1[i] === s3[k] && isinter(i + 1, j, k + 1)) ||
      (s2[j] === s3[k] && isinter(i, j + 1, k + 1))
    ) {
      ans = true;
    }
    // ans ? 1 : 0 是三元运算符：
    // 如果 ans 为 true，就存 1
    // 如果 ans 为 false，就存 0
    memo[i][j] = ans ? 1 : 0;
    return ans;
  }
  return isinter(0, 0, 0);
};
// 从 起点 开始调用递归函数 isinter：
// i = 0 → 从 s1 开始
// j = 0 → 从 s2 开始
// k = 0 → 从 s3 开始
