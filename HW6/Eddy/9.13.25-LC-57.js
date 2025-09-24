/* You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Note that you don't need to modify intervals in-place. You can make a new array and return it.

*/
function insert(intervals, newInterval) {
    let res = []
    let [s, e] = newInterval
    let i = 0, n = intervals.length

    while (i < n && intervals[i][1] < s) {
        res.push(intervals[i])
        i++
    }

    while (i < n && intervals[i][0] <= e) {
        s = Math.min(s, intervals[i][0])
        e = Math.max(e, intervals[i][1])
        i++
    }
    res.push([s, e])

    while (i < n) {
        res.push(intervals[i])
        i++
    }
    return res
}
