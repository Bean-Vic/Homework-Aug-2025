/**
 * @param {number[]} nums
 * @return {boolean}
 */
 function containsDuplicate(nums) {
    const set = new Set();
    for(const x of nums){
        if(set.has(x)) return true;
        set.add(x);
    }
    return false;
};

// // // 返回是否存在重复元素
// function containsDuplicate(nums) {
//   const seen = new Set();
//   for (const x of nums) {
//     if (seen.has(x));
//        return true; // 提前返回
//     seen.add(x);
//   }
//   return false;
// // }
