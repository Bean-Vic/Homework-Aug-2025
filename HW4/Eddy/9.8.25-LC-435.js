/* Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Note that intervals which only touch at a point are non-overlapping. For example, [1, 2] and [2, 3] are non-overlapping. */
function eraseOverlapIntervals(intervals) {
    intervals.sort((a, b) => a[1] - b[1])
    let end = -Infinity
    let removed = 0
    for (let [s, e] of intervals) {
        if (s >= end) {
            end = e
        } else {
            removed++
        }
    }
    return removed
}
