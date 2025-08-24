/* Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.
 */
function longestConsecutive(nums) {
    let set = new Set(nums)
    let res = 0
    for (let x of set) {
        if (!set.has(x - 1)) {
            let y = x
            let len = 1
            while (set.has(y + 1)) {
                y++
                len++
            }
            if (len > res) res = len
        }
    }
    return res
}
