/**
 * @param {string[]} strs
 * @return {string[][]}
 *
 * Time Complexity: O(n * k)
 *   - n is the number of strings, k is the average length of each string.
 *   - Counting characters takes O(k) per string.
 *
 * Space Complexity: O(n * k)
 *   - We store all strings grouped in a hash map keyed by their character counts.
 */
var groupAnagrams = function(strs) {
  const map = new Map();

  for (let s of strs) {
    // build frequency count for each word
    const count = new Array(26).fill(0);
    for (let c of s) {
      count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // use frequency array as key (stringified)
    const key = count.join('#');
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(s);
  }

  return Array.from(map.values());
};
