/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = new Array(), path = new Array();

    function dfs (index, remain) {
        if (remain === 0) {
            res.push([...path]);
            return;
        }

        if (index === candidates.length || remain < 0) {
            return;
        }

        const current_val = candidates[index];

        if (remain >= current_val) {
            path.push(current_val);
            dfs(index, remain-current_val);
            path.pop();
        }

        dfs(index+1, remain)
    }

    dfs(0, target);

    return res

};