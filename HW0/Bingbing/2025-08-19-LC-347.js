/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
* Complexity:
 * - Time Complexity: O(n)
 *    1) Counting frequencies takes O(n).
 *    2) Placing elements into buckets also takes O(n) in total.
 *    3) Scanning buckets from high to low is at most O(n) (stop once k elements are found).
 *    Overall: O(n).
 *
 * - Space Complexity: O(n)
 *    1) The hash map stores at most n keys.
 *    2) The bucket array has length n + 1 and contains at most n elements in total.
 *    Overall: O(n).
 *
 */
var topKFrequent = function(nums, k) {
  // 1) Count the frequency of each number
  const count = new Map();
  const freq = Array(nums.length + 1).fill(0).map(() => []);

  for (const n of nums) {
    count.set(n, (count.get(n) || 0) + 1);
  }

  // 2) Place numbers into their frequency bucket
  for (const [n, c] of count.entries()) {
    freq[c].push(n);
  }

  // 3) Collect the top k frequent elements
  const res = [];
  for (let i = freq.length - 1; i > 0; i--) {
    for (const n of freq[i]) {
      res.push(n);
      if (res.length === k) return res;
    }
  }
  return res;
};
