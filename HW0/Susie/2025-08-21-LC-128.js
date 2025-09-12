/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
	let set = new Set(nums);
	let longest = 0;
	for(let n of set) {
		// if the number is the start of a sequence
		if(!set.has(n-1)) {
			let length = 1;
			// check the length of the sequence
			while(set.has(n+length)) {
				length++;
			}
			// update the longest sequence
			longest = Math.max(longest, length);
		}
	}
	return longest;
};

console.log(longestConsecutive([100,4,200,1,3,2]));