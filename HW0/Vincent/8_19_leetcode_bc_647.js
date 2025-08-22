/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    const string_length = s.length;
    let num_palindrom = 0;

    const expand_string = (left, right) => {
        let num_palindrom = 0;
        while (left >= 0 && right < string_length && s.charAt(left) === s.charAt(right)){
            left -= 1;
            right += 1;
            num_palindrom += 1;
        }
        return num_palindrom;
    }

    for (let i = 0; i < string_length; i++) {
        num_palindrom += expand_string(i,i);
        num_palindrom += expand_string(i,i+1);
    }
    return num_palindrom;
};