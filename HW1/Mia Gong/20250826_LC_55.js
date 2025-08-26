//55. Jump Game
function canJump(nums: number[]): boolean {
 
let goal = nums.length - 1;
 
    for (let i = nums.length - 1; i >= 0; i--) { 
        // 应该是从 nums.length-1 开始
        if (i + nums[i] >= goal) {
            goal = i;
        }
    }
    return goal === 0;
}