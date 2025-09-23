/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const need = new Map();
    const output = new Map();
    let left = 0;
    let count = 0;
    let res = [-1, -1];
    let res_length = Math.min();

    for (let ch of t) {
        if (need.has(ch)){
            need.set(ch, need.get(ch) + 1);
        } else {
            need.set(ch, 1)
        }
    }

    const need_count = need.size;

    for (let r_index = 0; r_index < s.length; r_index++) {
        let r_ch = s[r_index];
        if (output.has(r_ch)) {
            output.set(r_ch, output.get(r_ch) + 1);
        } else {
            output.set(r_ch, 1);
        }

        if (need.has(r_ch) && output.get(r_ch) == need.get(r_ch)) {
            count += 1;
        }

        while (count === need_count) {
            if (r_index - left + 1 < res_length) {
                res = [left, r_index];
                res_length = r_index - left + 1;
            }

            let left_ch = s[left];
            output.set(left_ch, output.get(left_ch) - 1);
            if (need.has(left_ch) && output.get(left_ch) < need.get(left_ch)){
                count -= 1;
            }

            left += 1;
        }
    }

    if (res_length === Math.min()) {
        return "";
    } else {
        let left = res[0];
        let right = res[1];
        return s.slice(left, (right + 1));
    }
};