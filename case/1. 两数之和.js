/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	const countMap = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (countMap.has(target - nums[i])) {
			return [countMap.get(target - nums[i]), i];
		} else {
			countMap.set(nums[i], i);
		}
	}
	return [0, 0];
};