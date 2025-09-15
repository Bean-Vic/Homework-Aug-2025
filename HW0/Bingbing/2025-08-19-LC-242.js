/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 * Time Complexity: O(n)
 *   - Single pass counting; each operation is O(1).
 * Space Complexity: O(1)
 *   - Fixed 26-size array regardless of input length.
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  const cnt = new Array(26).fill(0);
  const base = 'a'.charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    cnt[s.charCodeAt(i) - base]++;   // count s
    cnt[t.charCodeAt(i) - base]--;   // subtract t
  }

  for (const x of cnt) if (x !== 0) return false;
  return true;
};
