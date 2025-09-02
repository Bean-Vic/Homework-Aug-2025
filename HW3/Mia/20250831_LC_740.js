/**740 动态规划
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    // 创建计数器
    const counter = nums.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});
//eliminate duplicates from the input array
    let setarray = new Set(nums)
    let sortArray = Array.from(setarray).sort((a,b)=> a-b)
// 初始化动态规划变量
    let earn1 = 0; // 前一个状态的最大收益
  //  处理到前前一个唯一数字（索引 i-2）时的最优解 dp[i-2]
    let earn2 = 0; // 当前状态的最大收益
    //处理到前一个唯一数字（索引 i-1）时的最优解 dp[i-1]
    let temp = 0;
    for(let i = 0; i < sortArray.length; i++){
        const currentNum = sortArray[i];
        const curEarn = currentNum * counter[currentNum];
        if(i > 0 && currentNum === sortArray[i-1] + 1){
            // 如果当前数字与前一个数字连续
            temp = earn2 // 先保存 dp[i-1]
            earn2 = Math.max(curEarn + earn1, earn2)
 //          = max(选当前 + dp[i-2], 不选当前 = dp[i-1])
            earn1 = temp // 更新 earn1 = dp[i-1]，为下一轮做准备
        }else{            // 不连续数字的情况
            temp = earn2
            earn2 = curEarn + earn2;
            earn1 =temp
//       如果连续 → 做个抉择（选当前 or 不选当前）
// 如果不连续 → 当前的收益直接累加到总收益里
        }
    }
    return earn2
};