/* Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input. */
function merge(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let res = [intervals[0]]
    for (let i = 1; i < intervals.length; i++) {
        let last = res[res.length - 1]
        let [s, e] = intervals[i]
        if (s <= last[1]) {
            last[1] = Math.max(last[1], e)
        } else {
            res.push([s, e])
        }
    }
    return res
}
