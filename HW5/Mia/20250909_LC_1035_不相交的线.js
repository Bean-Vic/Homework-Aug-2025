/**1035. 不相交的线 Memorization solution
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function (nums1, nums2) {
  let dp = {}; //hashmap
  const dfs = (i, j) => {
    //if 1 of them out of bounds -> no matching
    if (i === nums1.length || j === nums2.length) {
      return 0;
    }
    const key = i + "," + j;
    if (key in dp) return dp[key];
    console.log(key);
    if (nums1[i] === nums2[j]) {
      dp[key] = 1 + dfs(i + 1, j + 1);
    } else {
      dp[key] = Math.max(dfs(i + 1, j), dfs(i, j + 1));
    }
    return dp[key];
  };

  return dfs(0, 0);
};
