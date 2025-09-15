/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let setArray = new Set(nums);
    let maxLength = 0;

    for (const tempNum of setArray) {
        if (!setArray.has(tempNum-1)){
            let length = 1;
            let localNum = tempNum;
            while(setArray.has(localNum + 1)) {
                length += 1;
                localNum += 1;
            }
            maxLength=Math.max(maxLength,length);
        }
    }

    return maxLength;
}