// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++){
        let complement = target - nums[i];
        if (map.has(complement)){
            return [map.get(complement),i]
        }
        map.set(nums[i],i)
    }
    return [];
};

// ✅ 总结：
// return 是函数的“出口” 🚪
// 一旦触发，函数马上结束，后面的代码统统不跑
// 不管 return 在循环里还是 if 里，都一样

// 1. Map 是什么？
// 在 JavaScript 里，Map 是一种 键值对（key → value）的数据结构。
// 你可以把它想象成一个「小字典」📖，能快速存和查。
// •	key：用来查找的“名字”（可以是任意类型：数字、字符串、对象……）
// •	value：这个 key 对应的“值”
// const map = new Map();
// // 存
// map.set("apple", 5);     // key="apple", value=5
// map.set(10, "banana");   // key=10, value="banana"

// •	map.has(key)：只告诉你有没有这个 key（布尔值）
// •	map.get(key)：如果有，就返回对应的 value；如果没有，返回 undefined
