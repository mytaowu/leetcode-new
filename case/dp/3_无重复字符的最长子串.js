/**
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/?envType=study-plan-v2&envId=top-100-liked
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	const exsitMap = new Map();
	let result = 0;
	let left = 0;

	for (let i = 0; i < s.length; i++) {
		if (exsitMap.has(s[i])) {
			// 存在值的时候，更新left
			left = Math.max(left, exsitMap.get(s[i]) + 1);
		}
		exsitMap.set(s[i], i);
		result = Math.max(result, i - left + 1)
	}
	return result;
};