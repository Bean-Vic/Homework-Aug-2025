/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let mapNums = new Map();
    for (let i = 0; i < nums.length; i++) {
        currentNum = nums[i];
        targetNum = target - currentNum;
        if(mapNums.has(targetNum)){
            console.log(1);
            return [mapNums.get(targetNum), i];
        }
        mapNums.set(currentNum, i);
    }

    return []

};