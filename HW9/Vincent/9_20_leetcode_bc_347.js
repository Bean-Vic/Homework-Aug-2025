/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freq = new Map();
    for (let n of nums){
        freq.set(n, (freq.get(n) || 0) + 1);
    }

    const buckets = Array(nums.length+1).fill().map(() => []);
    for (let [num, count] of freq.entries()) {
        buckets[count].push(num);
    }

    const res = [];
    for (let i = buckets.length - 1; i >= 0; i--) {
        if (res.length == k) break;
        for (let num of buckets[i]) {
            res.push(num);
            if (res.length == k) break;
        }
    }

    return res;
};