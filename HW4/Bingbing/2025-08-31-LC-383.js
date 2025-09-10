/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // 用数组记录26个小写字母频率
    // Array for 26 lowercase letters
    const count = new Array(26).fill(0);
    
    // 统计 magazine 中字母
    // Count letters in magazine
    for (let ch of magazine) {
        count[ch.charCodeAt(0) - 97]++;
    }
    
    // 检查 ransomNote
    // Check ransomNote
    for (let ch of ransomNote) {
        let idx = ch.charCodeAt(0) - 97;
        count[idx]--;
        if (count[idx] < 0) return false;
    }
    return true;
};
