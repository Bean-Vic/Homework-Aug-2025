/**20250828_LC_
 * 416
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let totalsum = 0;
    //计算数组中所有元素的和 如果和为奇数 则不存在
    for(num of nums){
        totalsum += num
    }
    if(totalsum % 2 !== 0) return false
    let target = totalsum /2
    let dp = new Array(target+1).fill(false)
    dp[0] = true //dp[0]=true表示和为0是可达的（空子集）。
    for(num of nums){  //保存一遍dp的拷贝
        let copy = dp.slice()
        for(let i =0; i <=target; i++){
            if(dp[i] && i + num <= target){
  //判断转移后的索引是否超过了dp的下标
//对于每个可能的和i，如果i是可达的（dp[i]为true），并且i+num不超过目标值，那么i+num也是可达的。
                copy[i+num] = dp[i]        
            }
        }//copy数组包含了处理完当前数字后的所有可达和。这行代码用新的状态更新dp数组，为处理下一个数字做准备。
        dp = copy
        if(dp[target]) return true // 如果目标值可达，立即返回true
  
    }
          return dp[target]
};