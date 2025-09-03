/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 * Time Complexity: O(|t|) 
 *   - We scan through string t once. Each comparison takes O(1).
 *   - So total time grows linearly with the length of t.
 *
 * Space Complexity: O(1)
 *   - Only uses a pointer i and loop variables, no extra data structures.
 */
var isSubsequence = function(s, t) {
    if (s.length === 0) return true; 
    let i = 0;                       
    for (const ch of t) {          
        if (ch === s[i]) {
            i++;
            if (i === s.length) return true; 
        }
    }
    return false; // 没走完 s  
};
