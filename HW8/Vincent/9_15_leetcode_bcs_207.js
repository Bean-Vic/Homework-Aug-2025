/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const couse_list = new Map();

    for (const[tar, pre] of prerequisites){
        if (couse_list.has(pre)){
            couse_list.get(pre).push(tar);
        } else {
            couse_list.set(pre, [tar]);
        }
    }

    const state = new Array(numCourses).fill(0);

    const dfs = (u) => {
        if (state[u] === 1) return false;
        if (state[u] === 2) return true;

        state[u] = 1;
        if (couse_list.has(u)) {
            for (const v of couse_list.get(u)) {
                if (!dfs(v)) return false;
            }
        }
        state[u] = 2;
        return true
    }

    for (let i = 0; i < numCourses; i++){
        if (!dfs(i)) return false;
    }
    return true;

};