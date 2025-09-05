/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[1] - b[1]);

    let remove = 0;
    let last_end = Math.max();

    for (let i of intervals) {
        if (i[0] >= last_end) {
            last_end = i[1];
        } else {
            remove += 1
        }
    }

    return remove
};