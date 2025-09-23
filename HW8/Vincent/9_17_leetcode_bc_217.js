/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length;

    if (n === 1) return nums[0];
    else if (n === 2) return Math.max(nums[0],nums[1]);
    else {
        const output = new Array(n).fill().map(()=>[0,0]);
        console.log(output)
        output[0] = [nums[0], 0];
        output[1] = [Math.max(nums[0],nums[1]), nums[1]];

        for (let i = 2; i < n; i++) {
            const [prev, prev_no1] = output[i-1];
            const [prev_prev, prev_prev_no1] = output[i-2];

            let current = Math.max(prev, prev_prev+nums[i]);
            let curent_no1 = Math.max(prev_no1, prev_prev_no1+nums[i]);
            output[i] = [current, curent_no1];
        }

        return Math.max(output[n-2][0], output[n-1][1]);
    }
};