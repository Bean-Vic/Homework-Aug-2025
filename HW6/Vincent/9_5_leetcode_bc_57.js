/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const out = [];
    let i = 0, n = intervals.length;
    let s = newInterval[0], e = newInterval[1];

    while (i < n && intervals[i][1] < s) {
        out.push(intervals[i]);
        i+=1;
    }

    while (i < n && intervals[i][0] <= e) {
        s = Math.min(s, intervals[i][0]);
        e = Math.max(e, intervals[i][1]);
        i+=1;
    }

    out.push([s,e]);

    while(i < n) {
        out.push(intervals[i]);
        i+=1;
    }

    return out
};