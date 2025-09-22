/* You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.*/
function lengthOfLIS(nums) {
    let tails = []
    for (let x of nums) {
        let l = 0, r = tails.length
        while (l < r) {
            let m = (l + r) >> 1
            if (tails[m] < x) l = m + 1
            else r = m
        }
        tails[l] = x
    }
    return tails.length
}
