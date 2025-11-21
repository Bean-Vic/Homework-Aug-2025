/**
 * @param {number[]} heights
 * @return {number} 84. 柱状图中最大的矩形
 */
var largestRectangleArea = function(heights) {
    if(heights === null || heights.length === 0) return 0;
    let stack = [];
    // 初始化一个空数组 stack（栈），用来存储柱子的索引（下标）
    let result = 0; 
    for(let i = 0; i <= heights.length; i++){
// 开始循环 这里 i <= heights.length 是为了在处理完所有真实柱子后，
//再处理一次虚拟的零高度柱子，以确保栈中所有柱子都能被弹出并计算
 let h = i === heights.length ? 0 : heights[i];
// 计算当前高度 h：如果当前索引 i 已经超出真实柱子的最后一个位置（即虚拟位置），
// 则将高度 h 设为 0；否则，h 等于当前柱子的高度 heights[i]
        while (stack.length > 0 && h < heights[stack[stack.length - 1]]) {
            // 当前高度 h 小于栈顶索引所对应的柱子高度
            // 这意味着找到了一个右边界，可以开始计算以栈顶柱子为高的矩形面积了
            let height = heights[stack.pop()];
            // 弹出栈顶的i，并获取该index对应的柱子高度，赋值给height
            // 这个 height 就是当前要计算的矩形的高度
            let start = stack.length === 0 ? -1 : stack[stack.length - 1];
            // 矩形的左边界起点 start：
            // 如果弹出后栈为空，说明弹出的柱子左边没有比它更矮的柱子了，左边界起点设为 -1（虚拟位置）
            // 如果栈不为空，则新的栈顶索引就是左边第一个比当前高度矮的柱子的位置，作为左边界
            let width = i - start - 1;
            // 矩形的宽度：当前索引 i（右边界） 减去左边界起点 start，再减 1
            // 因为左右边界都不包含在内，计算的是中间区域的宽度
            let area = height * width;
            // 计算矩形面积：高度 height 乘以 宽度 width  
            result = Math.max(result, area);
            // 将当前计算出的面积 area 与之前记录的最大面积 result 比较，取最大值更新 result
        }
        stack.push(i);
        // 将当前柱子的索引 i 压入栈中
        // 这个操作在每次 for 循环的末尾都会执行，确保每个索引都被处理
    }
    return result;
};