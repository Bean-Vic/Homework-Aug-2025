/** Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.
Example 1:
Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2
Example 2:
Input: intervals = [[7,10],[2,4]]
Output: 1
Constraints:
1 <= intervals.length <= 104
0 <= starti < endi <= 106 */
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let intSort = intervals.sort((a,b) => a[0]-b[0])
    if (intervals.length === 0) return 0;
    // 优先队列（存储结束时间，按结束时间排序）
    const pq = [];
    // 添加第一个会议的结束时间
    pq.push(intervals[0][1]);
    pq.sort((a, b) => a - b); // 按结束时间升序排列
    for (let i = 1; i < intervals.length; i++) {
        // 如果当前会议的开始时间 >= 队列中最小的结束时间
        if (intervals[i][0] >= pq[0]) {
            // 移除队列中最小的结束时间（复用该会议室）
            pq.shift();
        }
        // 添加当前会议的结束时间到队列中
        pq.push(intervals[i][1]);
        pq.sort((a, b) => a - b); // 重新排序维持优先队列性质
    }
    return pq.length;
};