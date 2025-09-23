/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);

    const output_interval = [];

    for (const i of intervals) {
        if (output_interval.length === 0) {
            output_interval.push([...i]);
            continue
        }

        const last = output_interval[output_interval.length-1];

        if (i [0] <= last[1]) {
            last[1] = Math.max(last[1], i[1]);
        } else {
            output_interval.push([...i]);
        }
    }

    return output_interval
};