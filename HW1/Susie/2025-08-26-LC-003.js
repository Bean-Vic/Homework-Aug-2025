/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let maxLength = 0;
  let charSet = new Set();

  for (let right = 0; right < s.length; right++) {
    // check if the right equal to the left
    while (charSet.has(s[right])) {
      // if repeated, delete the ealier one
      charSet.delete(s[left]);
      left++;
    }
    // add current char to the set if no repeating char
    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
