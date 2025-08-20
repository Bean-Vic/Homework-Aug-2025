/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let subString = "";

    for (const char of s){
        while(subString.includes(char)){
            subString = subString.slice(1);
        }
        subString = subString + char;
        maxLength = Math.max(maxLength, subString.length);
    }

    return maxLength;
};